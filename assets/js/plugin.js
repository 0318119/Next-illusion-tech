/*------------ //////// ---------------*/
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = a.document
            ? b(a, !0)
            : function (a) {
                  if (!a.document) throw new Error("jQuery requires a window with a document");
                  return b(a);
              })
      : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};
  function p(a, b) {
      b = b || d;
      var c = b.createElement("script");
      (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.1.1",
      r = function (a, b) {
          return new r.fn.init(a, b);
      },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function (a, b) {
          return b.toUpperCase();
      };
  (r.fn = r.prototype = {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
          return f.call(this);
      },
      get: function (a) {
          return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
      },
      pushStack: function (a) {
          var b = r.merge(this.constructor(), a);
          return (b.prevObject = this), b;
      },
      each: function (a) {
          return r.each(this, a);
      },
      map: function (a) {
          return this.pushStack(
              r.map(this, function (b, c) {
                  return a.call(b, c, b);
              })
          );
      },
      slice: function () {
          return this.pushStack(f.apply(this, arguments));
      },
      first: function () {
          return this.eq(0);
      },
      last: function () {
          return this.eq(-1);
      },
      eq: function (a) {
          var b = this.length,
              c = +a + (a < 0 ? b : 0);
          return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
      },
      end: function () {
          return this.prevObject || this.constructor();
      },
      push: h,
      sort: c.sort,
      splice: c.splice,
  }),
      (r.extend = r.fn.extend = function () {
          var a,
              b,
              c,
              d,
              e,
              f,
              g = arguments[0] || {},
              h = 1,
              i = arguments.length,
              j = !1;
          for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && ((g = this), h--); h < i; h++)
              if (null != (a = arguments[h]))
                  for (b in a)
                      (c = g[b]),
                          (d = a[b]),
                          g !== d &&
                              (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? ((e = !1), (f = c && r.isArray(c) ? c : [])) : (f = c && r.isPlainObject(c) ? c : {}), (g[b] = r.extend(j, f, d))) : void 0 !== d && (g[b] = d));
          return g;
      }),
      r.extend({
          expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (a) {
              throw new Error(a);
          },
          noop: function () {},
          isFunction: function (a) {
              return "function" === r.type(a);
          },
          isArray: Array.isArray,
          isWindow: function (a) {
              return null != a && a === a.window;
          },
          isNumeric: function (a) {
              var b = r.type(a);
              return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
          },
          isPlainObject: function (a) {
              var b, c;
              return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || ((c = l.call(b, "constructor") && b.constructor), "function" == typeof c && m.call(c) === n));
          },
          isEmptyObject: function (a) {
              var b;
              for (b in a) return !1;
              return !0;
          },
          type: function (a) {
              return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a;
          },
          globalEval: function (a) {
              p(a);
          },
          camelCase: function (a) {
              return a.replace(t, "ms-").replace(u, v);
          },
          nodeName: function (a, b) {
              return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
          },
          each: function (a, b) {
              var c,
                  d = 0;
              if (w(a)) {
                  for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break;
              } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
              return a;
          },
          trim: function (a) {
              return null == a ? "" : (a + "").replace(s, "");
          },
          makeArray: function (a, b) {
              var c = b || [];
              return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
          },
          inArray: function (a, b, c) {
              return null == b ? -1 : i.call(b, a, c);
          },
          merge: function (a, b) {
              for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
              return (a.length = e), a;
          },
          grep: function (a, b, c) {
              for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
              return e;
          },
          map: function (a, b, c) {
              var d,
                  e,
                  f = 0,
                  h = [];
              if (w(a)) for (d = a.length; f < d; f++) (e = b(a[f], f, c)), null != e && h.push(e);
              else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
              return g.apply([], h);
          },
          guid: 1,
          proxy: function (a, b) {
              var c, d, e;
              if (("string" == typeof b && ((c = a[b]), (b = a), (a = c)), r.isFunction(a)))
                  return (
                      (d = f.call(arguments, 2)),
                      (e = function () {
                          return a.apply(b || this, d.concat(f.call(arguments)));
                      }),
                      (e.guid = a.guid = a.guid || r.guid++),
                      e
                  );
          },
          now: Date.now,
          support: o,
      }),
      "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
      r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
          j["[object " + b + "]"] = b.toLowerCase();
      });
  function w(a) {
      var b = !!a && "length" in a && a.length,
          c = r.type(a);
      return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a));
  }
  var x = (function (a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u = "sizzle" + 1 * new Date(),
          v = a.document,
          w = 0,
          x = 0,
          y = ha(),
          z = ha(),
          A = ha(),
          B = function (a, b) {
              return a === b && (l = !0), 0;
          },
          C = {}.hasOwnProperty,
          D = [],
          E = D.pop,
          F = D.push,
          G = D.push,
          H = D.slice,
          I = function (a, b) {
              for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
              return -1;
          },
          J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          K = "[\\x20\\t\\r\\n\\f]",
          L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
          N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          O = new RegExp(K + "+", "g"),
          P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
          Q = new RegExp("^" + K + "*," + K + "*"),
          R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
          S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
          T = new RegExp(N),
          U = new RegExp("^" + L + "$"),
          V = {
              ID: new RegExp("^#(" + L + ")"),
              CLASS: new RegExp("^\\.(" + L + ")"),
              TAG: new RegExp("^(" + L + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + N),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + J + ")$", "i"),
              needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i"),
          },
          W = /^(?:input|select|textarea|button)$/i,
          X = /^h\d$/i,
          Y = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          $ = /[+~]/,
          _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
          aa = function (a, b, c) {
              var d = "0x" + b - 65536;
              return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
          },
          ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ca = function (a, b) {
              return b ? ("\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " ") : "\\" + a;
          },
          da = function () {
              m();
          },
          ea = ta(
              function (a) {
                  return a.disabled === !0 && ("form" in a || "label" in a);
              },
              { dir: "parentNode", next: "legend" }
          );
      try {
          G.apply((D = H.call(v.childNodes)), v.childNodes), D[v.childNodes.length].nodeType;
      } catch (fa) {
          G = {
              apply: D.length
                  ? function (a, b) {
                        F.apply(a, H.call(b));
                    }
                  : function (a, b) {
                        var c = a.length,
                            d = 0;
                        while ((a[c++] = b[d++]));
                        a.length = c - 1;
                    },
          };
      }
      function ga(a, b, d, e) {
          var f,
              h,
              j,
              k,
              l,
              o,
              r,
              s = b && b.ownerDocument,
              w = b ? b.nodeType : 9;
          if (((d = d || []), "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))) return d;
          if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)) {
              if (11 !== w && (l = Z.exec(a)))
                  if ((f = l[1])) {
                      if (9 === w) {
                          if (!(j = b.getElementById(f))) return d;
                          if (j.id === f) return d.push(j), d;
                      } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                  } else {
                      if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                      if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                  }
              if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                  if (1 !== w) (s = b), (r = a);
                  else if ("object" !== b.nodeName.toLowerCase()) {
                      (k = b.getAttribute("id")) ? (k = k.replace(ba, ca)) : b.setAttribute("id", (k = u)), (o = g(a)), (h = o.length);
                      while (h--) o[h] = "#" + k + " " + sa(o[h]);
                      (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
                  }
                  if (r)
                      try {
                          return G.apply(d, s.querySelectorAll(r)), d;
                      } catch (x) {
                      } finally {
                          k === u && b.removeAttribute("id");
                      }
              }
          }
          return i(a.replace(P, "$1"), b, d, e);
      }
      function ha() {
          var a = [];
          function b(c, e) {
              return a.push(c + " ") > d.cacheLength && delete b[a.shift()], (b[c + " "] = e);
          }
          return b;
      }
      function ia(a) {
          return (a[u] = !0), a;
      }
      function ja(a) {
          var b = n.createElement("fieldset");
          try {
              return !!a(b);
          } catch (c) {
              return !1;
          } finally {
              b.parentNode && b.parentNode.removeChild(b), (b = null);
          }
      }
      function ka(a, b) {
          var c = a.split("|"),
              e = c.length;
          while (e--) d.attrHandle[c[e]] = b;
      }
      function la(a, b) {
          var c = b && a,
              d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
          if (d) return d;
          if (c) while ((c = c.nextSibling)) if (c === b) return -1;
          return a ? 1 : -1;
      }
      function ma(a) {
          return function (b) {
              var c = b.nodeName.toLowerCase();
              return "input" === c && b.type === a;
          };
      }
      function na(a) {
          return function (b) {
              var c = b.nodeName.toLowerCase();
              return ("input" === c || "button" === c) && b.type === a;
          };
      }
      function oa(a) {
          return function (b) {
              return "form" in b
                  ? b.parentNode && b.disabled === !1
                      ? "label" in b
                          ? "label" in b.parentNode
                              ? b.parentNode.disabled === a
                              : b.disabled === a
                          : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
                      : b.disabled === a
                  : "label" in b && b.disabled === a;
          };
      }
      function pa(a) {
          return ia(function (b) {
              return (
                  (b = +b),
                  ia(function (c, d) {
                      var e,
                          f = a([], c.length, b),
                          g = f.length;
                      while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                  })
              );
          });
      }
      function qa(a) {
          return a && "undefined" != typeof a.getElementsByTagName && a;
      }
      (c = ga.support = {}),
          (f = ga.isXML = function (a) {
              var b = a && (a.ownerDocument || a).documentElement;
              return !!b && "HTML" !== b.nodeName;
          }),
          (m = ga.setDocument = function (a) {
              var b,
                  e,
                  g = a ? a.ownerDocument || a : v;
              return g !== n && 9 === g.nodeType && g.documentElement
                  ? ((n = g),
                    (o = n.documentElement),
                    (p = !f(n)),
                    v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
                    (c.attributes = ja(function (a) {
                        return (a.className = "i"), !a.getAttribute("className");
                    })),
                    (c.getElementsByTagName = ja(function (a) {
                        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
                    })),
                    (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
                    (c.getById = ja(function (a) {
                        return (o.appendChild(a).id = u), !n.getElementsByName || !n.getElementsByName(u).length;
                    })),
                    c.getById
                        ? ((d.filter.ID = function (a) {
                              var b = a.replace(_, aa);
                              return function (a) {
                                  return a.getAttribute("id") === b;
                              };
                          }),
                          (d.find.ID = function (a, b) {
                              if ("undefined" != typeof b.getElementById && p) {
                                  var c = b.getElementById(a);
                                  return c ? [c] : [];
                              }
                          }))
                        : ((d.filter.ID = function (a) {
                              var b = a.replace(_, aa);
                              return function (a) {
                                  var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                  return c && c.value === b;
                              };
                          }),
                          (d.find.ID = function (a, b) {
                              if ("undefined" != typeof b.getElementById && p) {
                                  var c,
                                      d,
                                      e,
                                      f = b.getElementById(a);
                                  if (f) {
                                      if (((c = f.getAttributeNode("id")), c && c.value === a)) return [f];
                                      (e = b.getElementsByName(a)), (d = 0);
                                      while ((f = e[d++])) if (((c = f.getAttributeNode("id")), c && c.value === a)) return [f];
                                  }
                                  return [];
                              }
                          })),
                    (d.find.TAG = c.getElementsByTagName
                        ? function (a, b) {
                              return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
                          }
                        : function (a, b) {
                              var c,
                                  d = [],
                                  e = 0,
                                  f = b.getElementsByTagName(a);
                              if ("*" === a) {
                                  while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                                  return d;
                              }
                              return f;
                          }),
                    (d.find.CLASS =
                        c.getElementsByClassName &&
                        function (a, b) {
                            if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
                        }),
                    (r = []),
                    (q = []),
                    (c.qsa = Y.test(n.querySelectorAll)) &&
                        (ja(function (a) {
                            (o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
                                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
                                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                                a.querySelectorAll(":checked").length || q.push(":checked"),
                                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
                        }),
                        ja(function (a) {
                            a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var b = n.createElement("input");
                            b.setAttribute("type", "hidden"),
                                a.appendChild(b).setAttribute("name", "D"),
                                a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
                                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                                (o.appendChild(a).disabled = !0),
                                2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                                a.querySelectorAll("*,:x"),
                                q.push(",.*:");
                        })),
                    (c.matchesSelector = Y.test((s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector))) &&
                        ja(function (a) {
                            (c.disconnectedMatch = s.call(a, "*")), s.call(a, "[s!='']:x"), r.push("!=", N);
                        }),
                    (q = q.length && new RegExp(q.join("|"))),
                    (r = r.length && new RegExp(r.join("|"))),
                    (b = Y.test(o.compareDocumentPosition)),
                    (t =
                        b || Y.test(o.contains)
                            ? function (a, b) {
                                  var c = 9 === a.nodeType ? a.documentElement : a,
                                      d = b && b.parentNode;
                                  return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                              }
                            : function (a, b) {
                                  if (b) while ((b = b.parentNode)) if (b === a) return !0;
                                  return !1;
                              }),
                    (B = b
                        ? function (a, b) {
                              if (a === b) return (l = !0), 0;
                              var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                              return d
                                  ? d
                                  : ((d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                    1 & d || (!c.sortDetached && b.compareDocumentPosition(a) === d)
                                        ? a === n || (a.ownerDocument === v && t(v, a))
                                            ? -1
                                            : b === n || (b.ownerDocument === v && t(v, b))
                                            ? 1
                                            : k
                                            ? I(k, a) - I(k, b)
                                            : 0
                                        : 4 & d
                                        ? -1
                                        : 1);
                          }
                        : function (a, b) {
                              if (a === b) return (l = !0), 0;
                              var c,
                                  d = 0,
                                  e = a.parentNode,
                                  f = b.parentNode,
                                  g = [a],
                                  h = [b];
                              if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                              if (e === f) return la(a, b);
                              c = a;
                              while ((c = c.parentNode)) g.unshift(c);
                              c = b;
                              while ((c = c.parentNode)) h.unshift(c);
                              while (g[d] === h[d]) d++;
                              return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
                          }),
                    n)
                  : n;
          }),
          (ga.matches = function (a, b) {
              return ga(a, null, null, b);
          }),
          (ga.matchesSelector = function (a, b) {
              if (((a.ownerDocument || a) !== n && m(a), (b = b.replace(S, "='$1']")), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))))
                  try {
                      var d = s.call(a, b);
                      if (d || c.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                  } catch (e) {}
              return ga(b, n, null, [a]).length > 0;
          }),
          (ga.contains = function (a, b) {
              return (a.ownerDocument || a) !== n && m(a), t(a, b);
          }),
          (ga.attr = function (a, b) {
              (a.ownerDocument || a) !== n && m(a);
              var e = d.attrHandle[b.toLowerCase()],
                  f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
              return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
          }),
          (ga.escape = function (a) {
              return (a + "").replace(ba, ca);
          }),
          (ga.error = function (a) {
              throw new Error("Syntax error, unrecognized expression: " + a);
          }),
          (ga.uniqueSort = function (a) {
              var b,
                  d = [],
                  e = 0,
                  f = 0;
              if (((l = !c.detectDuplicates), (k = !c.sortStable && a.slice(0)), a.sort(B), l)) {
                  while ((b = a[f++])) b === a[f] && (e = d.push(f));
                  while (e--) a.splice(d[e], 1);
              }
              return (k = null), a;
          }),
          (e = ga.getText = function (a) {
              var b,
                  c = "",
                  d = 0,
                  f = a.nodeType;
              if (f) {
                  if (1 === f || 9 === f || 11 === f) {
                      if ("string" == typeof a.textContent) return a.textContent;
                      for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                  } else if (3 === f || 4 === f) return a.nodeValue;
              } else while ((b = a[d++])) c += e(b);
              return c;
          }),
          (d = ga.selectors = {
              cacheLength: 50,
              createPseudo: ia,
              match: V,
              attrHandle: {},
              find: {},
              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
              preFilter: {
                  ATTR: function (a) {
                      return (a[1] = a[1].replace(_, aa)), (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                  },
                  CHILD: function (a) {
                      return (
                          (a[1] = a[1].toLowerCase()),
                          "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && ga.error(a[0]),
                          a
                      );
                  },
                  PSEUDO: function (a) {
                      var b,
                          c = !a[6] && a[2];
                      return V.CHILD.test(a[0])
                          ? null
                          : (a[3] ? (a[2] = a[4] || a[5] || "") : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                  },
              },
              filter: {
                  TAG: function (a) {
                      var b = a.replace(_, aa).toLowerCase();
                      return "*" === a
                          ? function () {
                                return !0;
                            }
                          : function (a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                  },
                  CLASS: function (a) {
                      var b = y[a + " "];
                      return (
                          b ||
                          ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                              y(a, function (a) {
                                  return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
                              }))
                      );
                  },
                  ATTR: function (a, b, c) {
                      return function (d) {
                          var e = ga.attr(d, a);
                          return null == e
                              ? "!=" === b
                              : !b ||
                                    ((e += ""),
                                    "=" === b
                                        ? e === c
                                        : "!=" === b
                                        ? e !== c
                                        : "^=" === b
                                        ? c && 0 === e.indexOf(c)
                                        : "*=" === b
                                        ? c && e.indexOf(c) > -1
                                        : "$=" === b
                                        ? c && e.slice(-c.length) === c
                                        : "~=" === b
                                        ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                                        : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                      };
                  },
                  CHILD: function (a, b, c, d, e) {
                      var f = "nth" !== a.slice(0, 3),
                          g = "last" !== a.slice(-4),
                          h = "of-type" === b;
                      return 1 === d && 0 === e
                          ? function (a) {
                                return !!a.parentNode;
                            }
                          : function (b, c, i) {
                                var j,
                                    k,
                                    l,
                                    m,
                                    n,
                                    o,
                                    p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h,
                                    t = !1;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            m = b;
                                            while ((m = m[p])) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                        (m = q), (l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === w && j[1]), (t = n && j[2]), (m = n && q.childNodes[n]);
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if (1 === m.nodeType && ++t && m === b) {
                                                k[a] = [w, n, t];
                                                break;
                                            }
                                    } else if ((s && ((m = b), (l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (j = k[a] || []), (n = j[0] === w && j[1]), (t = n)), t === !1))
                                        while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                                            if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && ((l = m[u] || (m[u] = {})), (k = l[m.uniqueID] || (l[m.uniqueID] = {})), (k[a] = [w, t])), m === b)) break;
                                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                                }
                            };
                  },
                  PSEUDO: function (a, b) {
                      var c,
                          e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                      return e[u]
                          ? e(b)
                          : e.length > 1
                          ? ((c = [a, a, "", b]),
                            d.setFilters.hasOwnProperty(a.toLowerCase())
                                ? ia(function (a, c) {
                                      var d,
                                          f = e(a, b),
                                          g = f.length;
                                      while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                                  })
                                : function (a) {
                                      return e(a, 0, c);
                                  })
                          : e;
                  },
              },
              pseudos: {
                  not: ia(function (a) {
                      var b = [],
                          c = [],
                          d = h(a.replace(P, "$1"));
                      return d[u]
                          ? ia(function (a, b, c, e) {
                                var f,
                                    g = d(a, null, e, []),
                                    h = a.length;
                                while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                            })
                          : function (a, e, f) {
                                return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                            };
                  }),
                  has: ia(function (a) {
                      return function (b) {
                          return ga(a, b).length > 0;
                      };
                  }),
                  contains: ia(function (a) {
                      return (
                          (a = a.replace(_, aa)),
                          function (b) {
                              return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                          }
                      );
                  }),
                  lang: ia(function (a) {
                      return (
                          U.test(a || "") || ga.error("unsupported lang: " + a),
                          (a = a.replace(_, aa).toLowerCase()),
                          function (b) {
                              var c;
                              do if ((c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
                              while ((b = b.parentNode) && 1 === b.nodeType);
                              return !1;
                          }
                      );
                  }),
                  target: function (b) {
                      var c = a.location && a.location.hash;
                      return c && c.slice(1) === b.id;
                  },
                  root: function (a) {
                      return a === o;
                  },
                  focus: function (a) {
                      return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                  },
                  enabled: oa(!1),
                  disabled: oa(!0),
                  checked: function (a) {
                      var b = a.nodeName.toLowerCase();
                      return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                  },
                  selected: function (a) {
                      return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                  },
                  empty: function (a) {
                      for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                      return !0;
                  },
                  parent: function (a) {
                      return !d.pseudos.empty(a);
                  },
                  header: function (a) {
                      return X.test(a.nodeName);
                  },
                  input: function (a) {
                      return W.test(a.nodeName);
                  },
                  button: function (a) {
                      var b = a.nodeName.toLowerCase();
                      return ("input" === b && "button" === a.type) || "button" === b;
                  },
                  text: function (a) {
                      var b;
                      return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                  },
                  first: pa(function () {
                      return [0];
                  }),
                  last: pa(function (a, b) {
                      return [b - 1];
                  }),
                  eq: pa(function (a, b, c) {
                      return [c < 0 ? c + b : c];
                  }),
                  even: pa(function (a, b) {
                      for (var c = 0; c < b; c += 2) a.push(c);
                      return a;
                  }),
                  odd: pa(function (a, b) {
                      for (var c = 1; c < b; c += 2) a.push(c);
                      return a;
                  }),
                  lt: pa(function (a, b, c) {
                      for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                      return a;
                  }),
                  gt: pa(function (a, b, c) {
                      for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                      return a;
                  }),
              },
          }),
          (d.pseudos.nth = d.pseudos.eq);
      for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);
      for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
      function ra() {}
      (ra.prototype = d.filters = d.pseudos),
          (d.setFilters = new ra()),
          (g = ga.tokenize = function (a, b) {
              var c,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k = z[a + " "];
              if (k) return b ? 0 : k.slice(0);
              (h = a), (i = []), (j = d.preFilter);
              while (h) {
                  (c && !(e = Q.exec(h))) || (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (c = !1), (e = R.exec(h)) && ((c = e.shift()), f.push({ value: c, type: e[0].replace(P, " ") }), (h = h.slice(c.length)));
                  for (g in d.filter) !(e = V[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((c = e.shift()), f.push({ value: c, type: g, matches: e }), (h = h.slice(c.length)));
                  if (!c) break;
              }
              return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
          });
      function sa(a) {
          for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
          return d;
      }
      function ta(a, b, c) {
          var d = b.dir,
              e = b.next,
              f = e || d,
              g = c && "parentNode" === f,
              h = x++;
          return b.first
              ? function (b, c, e) {
                    while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
                    return !1;
                }
              : function (b, c, i) {
                    var j,
                        k,
                        l,
                        m = [w, h];
                    if (i) {
                        while ((b = b[d])) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    } else
                        while ((b = b[d]))
                            if (1 === b.nodeType || g)
                                if (((l = b[u] || (b[u] = {})), (k = l[b.uniqueID] || (l[b.uniqueID] = {})), e && e === b.nodeName.toLowerCase())) b = b[d] || b;
                                else {
                                    if ((j = k[f]) && j[0] === w && j[1] === h) return (m[2] = j[2]);
                                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                                }
                    return !1;
                };
      }
      function ua(a) {
          return a.length > 1
              ? function (b, c, d) {
                    var e = a.length;
                    while (e--) if (!a[e](b, c, d)) return !1;
                    return !0;
                }
              : a[0];
      }
      function va(a, b, c) {
          for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
          return c;
      }
      function wa(a, b, c, d, e) {
          for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
          return g;
      }
      function xa(a, b, c, d, e, f) {
          return (
              d && !d[u] && (d = xa(d)),
              e && !e[u] && (e = xa(e, f)),
              ia(function (f, g, h, i) {
                  var j,
                      k,
                      l,
                      m = [],
                      n = [],
                      o = g.length,
                      p = f || va(b || "*", h.nodeType ? [h] : h, []),
                      q = !a || (!f && b) ? p : wa(p, m, a, h, i),
                      r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                  if ((c && c(q, r, h, i), d)) {
                      (j = wa(r, n)), d(j, [], h, i), (k = j.length);
                      while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                  }
                  if (f) {
                      if (e || a) {
                          if (e) {
                              (j = []), (k = r.length);
                              while (k--) (l = r[k]) && j.push((q[k] = l));
                              e(null, (r = []), j, i);
                          }
                          k = r.length;
                          while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                      }
                  } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
              })
          );
      }
      function ya(a) {
          for (
              var b,
                  c,
                  e,
                  f = a.length,
                  g = d.relative[a[0].type],
                  h = g || d.relative[" "],
                  i = g ? 1 : 0,
                  k = ta(
                      function (a) {
                          return a === b;
                      },
                      h,
                      !0
                  ),
                  l = ta(
                      function (a) {
                          return I(b, a) > -1;
                      },
                      h,
                      !0
                  ),
                  m = [
                      function (a, c, d) {
                          var e = (!g && (d || c !== j)) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                          return (b = null), e;
                      },
                  ];
              i < f;
              i++
          )
              if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
              else {
                  if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                      for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                      return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya((a = a.slice(e))), e < f && sa(a));
                  }
                  m.push(c);
              }
          return ua(m);
      }
      function za(a, b) {
          var c = b.length > 0,
              e = a.length > 0,
              f = function (f, g, h, i, k) {
                  var l,
                      o,
                      q,
                      r = 0,
                      s = "0",
                      t = f && [],
                      u = [],
                      v = j,
                      x = f || (e && d.find.TAG("*", k)),
                      y = (w += null == v ? 1 : Math.random() || 0.1),
                      z = x.length;
                  for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                      if (e && l) {
                          (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
                          while ((q = a[o++]))
                              if (q(l, g || n, h)) {
                                  i.push(l);
                                  break;
                              }
                          k && (w = y);
                      }
                      c && ((l = !q && l) && r--, f && t.push(l));
                  }
                  if (((r += s), c && s !== r)) {
                      o = 0;
                      while ((q = b[o++])) q(t, u, g, h);
                      if (f) {
                          if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                          u = wa(u);
                      }
                      G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                  }
                  return k && ((w = y), (j = v)), t;
              };
          return c ? ia(f) : f;
      }
      return (
          (h = ga.compile = function (a, b) {
              var c,
                  d = [],
                  e = [],
                  f = A[a + " "];
              if (!f) {
                  b || (b = g(a)), (c = b.length);
                  while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
                  (f = A(a, za(e, d))), (f.selector = a);
              }
              return f;
          }),
          (i = ga.select = function (a, b, c, e) {
              var f,
                  i,
                  j,
                  k,
                  l,
                  m = "function" == typeof a && a,
                  n = !e && g((a = m.selector || a));
              if (((c = c || []), 1 === n.length)) {
                  if (((i = n[0] = n[0].slice(0)), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type])) {
                      if (((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)) return c;
                      m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
                  }
                  f = V.needsContext.test(a) ? 0 : i.length;
                  while (f--) {
                      if (((j = i[f]), d.relative[(k = j.type)])) break;
                      if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), ($.test(i[0].type) && qa(b.parentNode)) || b))) {
                          if ((i.splice(f, 1), (a = e.length && sa(i)), !a)) return G.apply(c, e), c;
                          break;
                      }
                  }
              }
              return (m || h(a, n))(e, b, !p, c, !b || ($.test(a) && qa(b.parentNode)) || b), c;
          }),
          (c.sortStable = u.split("").sort(B).join("") === u),
          (c.detectDuplicates = !!l),
          m(),
          (c.sortDetached = ja(function (a) {
              return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
          })),
          ja(function (a) {
              return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
          }) ||
              ka("type|href|height|width", function (a, b, c) {
                  if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
              }),
          (c.attributes &&
              ja(function (a) {
                  return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
              })) ||
              ka("value", function (a, b, c) {
                  if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
              }),
          ja(function (a) {
              return null == a.getAttribute("disabled");
          }) ||
              ka(J, function (a, b, c) {
                  var d;
                  if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
              }),
          ga
      );
  })(a);
  (r.find = x), (r.expr = x.selectors), (r.expr[":"] = r.expr.pseudos), (r.uniqueSort = r.unique = x.uniqueSort), (r.text = x.getText), (r.isXMLDoc = x.isXML), (r.contains = x.contains), (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
          var d = [],
              e = void 0 !== c;
          while ((a = a[b]) && 9 !== a.nodeType)
              if (1 === a.nodeType) {
                  if (e && r(a).is(c)) break;
                  d.push(a);
              }
          return d;
      },
      z = function (a, b) {
          for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
          return c;
      },
      A = r.expr.match.needsContext,
      B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      C = /^.[^:#\[\.,]*$/;
  function D(a, b, c) {
      return r.isFunction(b)
          ? r.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            })
          : b.nodeType
          ? r.grep(a, function (a) {
                return (a === b) !== c;
            })
          : "string" != typeof b
          ? r.grep(a, function (a) {
                return i.call(b, a) > -1 !== c;
            })
          : C.test(b)
          ? r.filter(b, a, c)
          : ((b = r.filter(b, a)),
            r.grep(a, function (a) {
                return i.call(b, a) > -1 !== c && 1 === a.nodeType;
            }));
  }
  (r.filter = function (a, b, c) {
      var d = b[0];
      return (
          c && (a = ":not(" + a + ")"),
          1 === b.length && 1 === d.nodeType
              ? r.find.matchesSelector(d, a)
                  ? [d]
                  : []
              : r.find.matches(
                    a,
                    r.grep(b, function (a) {
                        return 1 === a.nodeType;
                    })
                )
      );
  }),
      r.fn.extend({
          find: function (a) {
              var b,
                  c,
                  d = this.length,
                  e = this;
              if ("string" != typeof a)
                  return this.pushStack(
                      r(a).filter(function () {
                          for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
                      })
                  );
              for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
              return d > 1 ? r.uniqueSort(c) : c;
          },
          filter: function (a) {
              return this.pushStack(D(this, a || [], !1));
          },
          not: function (a) {
              return this.pushStack(D(this, a || [], !0));
          },
          is: function (a) {
              return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
          },
      });
  var E,
      F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      G = (r.fn.init = function (a, b, c) {
          var e, f;
          if (!a) return this;
          if (((c = c || E), "string" == typeof a)) {
              if (((e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a)), !e || (!e[1] && b))) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
              if (e[1]) {
                  if (((b = b instanceof r ? b[0] : b), r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)))
                      for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                  return this;
              }
              return (f = d.getElementById(e[2])), f && ((this[0] = f), (this.length = 1)), this;
          }
          return a.nodeType ? ((this[0] = a), (this.length = 1), this) : r.isFunction(a) ? (void 0 !== c.ready ? c.ready(a) : a(r)) : r.makeArray(a, this);
      });
  (G.prototype = r.fn), (E = r(d));
  var H = /^(?:parents|prev(?:Until|All))/,
      I = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
      has: function (a) {
          var b = r(a, this),
              c = b.length;
          return this.filter(function () {
              for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
          });
      },
      closest: function (a, b) {
          var c,
              d = 0,
              e = this.length,
              f = [],
              g = "string" != typeof a && r(a);
          if (!A.test(a))
              for (; d < e; d++)
                  for (c = this[d]; c && c !== b; c = c.parentNode)
                      if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                          f.push(c);
                          break;
                      }
          return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
      },
      index: function (a) {
          return a ? ("string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function (a, b) {
          return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
      },
      addBack: function (a) {
          return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
      },
  });
  function J(a, b) {
      while ((a = a[b]) && 1 !== a.nodeType);
      return a;
  }
  r.each(
      {
          parent: function (a) {
              var b = a.parentNode;
              return b && 11 !== b.nodeType ? b : null;
          },
          parents: function (a) {
              return y(a, "parentNode");
          },
          parentsUntil: function (a, b, c) {
              return y(a, "parentNode", c);
          },
          next: function (a) {
              return J(a, "nextSibling");
          },
          prev: function (a) {
              return J(a, "previousSibling");
          },
          nextAll: function (a) {
              return y(a, "nextSibling");
          },
          prevAll: function (a) {
              return y(a, "previousSibling");
          },
          nextUntil: function (a, b, c) {
              return y(a, "nextSibling", c);
          },
          prevUntil: function (a, b, c) {
              return y(a, "previousSibling", c);
          },
          siblings: function (a) {
              return z((a.parentNode || {}).firstChild, a);
          },
          children: function (a) {
              return z(a.firstChild);
          },
          contents: function (a) {
              return a.contentDocument || r.merge([], a.childNodes);
          },
      },
      function (a, b) {
          r.fn[a] = function (c, d) {
              var e = r.map(this, b, c);
              return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
          };
      }
  );
  var K = /[^\x20\t\r\n\f]+/g;
  function L(a) {
      var b = {};
      return (
          r.each(a.match(K) || [], function (a, c) {
              b[c] = !0;
          }),
          b
      );
  }
  r.Callbacks = function (a) {
      a = "string" == typeof a ? L(a) : r.extend({}, a);
      var b,
          c,
          d,
          e,
          f = [],
          g = [],
          h = -1,
          i = function () {
              for (e = a.once, d = b = !0; g.length; h = -1) {
                  c = g.shift();
                  while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && ((h = f.length), (c = !1));
              }
              a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
          },
          j = {
              add: function () {
                  return (
                      f &&
                          (c && !b && ((h = f.length - 1), g.push(c)),
                          (function d(b) {
                              r.each(b, function (b, c) {
                                  r.isFunction(c) ? (a.unique && j.has(c)) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                              });
                          })(arguments),
                          c && !b && i()),
                      this
                  );
              },
              remove: function () {
                  return (
                      r.each(arguments, function (a, b) {
                          var c;
                          while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--;
                      }),
                      this
                  );
              },
              has: function (a) {
                  return a ? r.inArray(a, f) > -1 : f.length > 0;
              },
              empty: function () {
                  return f && (f = []), this;
              },
              disable: function () {
                  return (e = g = []), (f = c = ""), this;
              },
              disabled: function () {
                  return !f;
              },
              lock: function () {
                  return (e = g = []), c || b || (f = c = ""), this;
              },
              locked: function () {
                  return !!e;
              },
              fireWith: function (a, c) {
                  return e || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), g.push(c), b || i()), this;
              },
              fire: function () {
                  return j.fireWith(this, arguments), this;
              },
              fired: function () {
                  return !!d;
              },
          };
      return j;
  };
  function M(a) {
      return a;
  }
  function N(a) {
      throw a;
  }
  function O(a, b, c) {
      var d;
      try {
          a && r.isFunction((d = a.promise)) ? d.call(a).done(b).fail(c) : a && r.isFunction((d = a.then)) ? d.call(a, b, c) : b.call(void 0, a);
      } catch (a) {
          c.call(void 0, a);
      }
  }
  r.extend({
      Deferred: function (b) {
          var c = [
                  ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                  ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"],
              ],
              d = "pending",
              e = {
                  state: function () {
                      return d;
                  },
                  always: function () {
                      return f.done(arguments).fail(arguments), this;
                  },
                  catch: function (a) {
                      return e.then(null, a);
                  },
                  pipe: function () {
                      var a = arguments;
                      return r
                          .Deferred(function (b) {
                              r.each(c, function (c, d) {
                                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                                  f[d[1]](function () {
                                      var a = e && e.apply(this, arguments);
                                      a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                                  });
                              }),
                                  (a = null);
                          })
                          .promise();
                  },
                  then: function (b, d, e) {
                      var f = 0;
                      function g(b, c, d, e) {
                          return function () {
                              var h = this,
                                  i = arguments,
                                  j = function () {
                                      var a, j;
                                      if (!(b < f)) {
                                          if (((a = d.apply(h, i)), a === c.promise())) throw new TypeError("Thenable self-resolution");
                                          (j = a && ("object" == typeof a || "function" == typeof a) && a.then),
                                              r.isFunction(j)
                                                  ? e
                                                      ? j.call(a, g(f, c, M, e), g(f, c, N, e))
                                                      : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith)))
                                                  : (d !== M && ((h = void 0), (i = [a])), (e || c.resolveWith)(h, i));
                                      }
                                  },
                                  k = e
                                      ? j
                                      : function () {
                                            try {
                                                j();
                                            } catch (a) {
                                                r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && ((h = void 0), (i = [a])), c.rejectWith(h, i));
                                            }
                                        };
                              b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                          };
                      }
                      return r
                          .Deferred(function (a) {
                              c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                          })
                          .promise();
                  },
                  promise: function (a) {
                      return null != a ? r.extend(a, e) : e;
                  },
              },
              f = {};
          return (
              r.each(c, function (a, b) {
                  var g = b[2],
                      h = b[5];
                  (e[b[1]] = g.add),
                      h &&
                          g.add(
                              function () {
                                  d = h;
                              },
                              c[3 - a][2].disable,
                              c[0][2].lock
                          ),
                      g.add(b[3].fire),
                      (f[b[0]] = function () {
                          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                      }),
                      (f[b[0] + "With"] = g.fireWith);
              }),
              e.promise(f),
              b && b.call(f, f),
              f
          );
      },
      when: function (a) {
          var b = arguments.length,
              c = b,
              d = Array(c),
              e = f.call(arguments),
              g = r.Deferred(),
              h = function (a) {
                  return function (c) {
                      (d[a] = this), (e[a] = arguments.length > 1 ? f.call(arguments) : c), --b || g.resolveWith(d, e);
                  };
              };
          if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
          while (c--) O(e[c], h(c), g.reject);
          return g.promise();
      },
  });
  var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
      a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
      (r.readyException = function (b) {
          a.setTimeout(function () {
              throw b;
          });
      });
  var Q = r.Deferred();
  (r.fn.ready = function (a) {
      return (
          Q.then(a)["catch"](function (a) {
              r.readyException(a);
          }),
          this
      );
  }),
      r.extend({
          isReady: !1,
          readyWait: 1,
          holdReady: function (a) {
              a ? r.readyWait++ : r.ready(!0);
          },
          ready: function (a) {
              (a === !0 ? --r.readyWait : r.isReady) || ((r.isReady = !0), (a !== !0 && --r.readyWait > 0) || Q.resolveWith(d, [r]));
          },
      }),
      (r.ready.then = Q.then);
  function R() {
      d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
  }
  "complete" === d.readyState || ("loading" !== d.readyState && !d.documentElement.doScroll) ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
  var S = function (a, b, c, d, e, f, g) {
          var h = 0,
              i = a.length,
              j = null == c;
          if ("object" === r.type(c)) {
              e = !0;
              for (h in c) S(a, b, h, c[h], !0, f, g);
          } else if (
              void 0 !== d &&
              ((e = !0),
              r.isFunction(d) || (g = !0),
              j &&
                  (g
                      ? (b.call(a, d), (b = null))
                      : ((j = b),
                        (b = function (a, b, c) {
                            return j.call(r(a), c);
                        }))),
              b)
          )
              for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
          return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
      },
      T = function (a) {
          return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
  function U() {
      this.expando = r.expando + U.uid++;
  }
  (U.uid = 1),
      (U.prototype = {
          cache: function (a) {
              var b = a[this.expando];
              return b || ((b = {}), T(a) && (a.nodeType ? (a[this.expando] = b) : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
          },
          set: function (a, b, c) {
              var d,
                  e = this.cache(a);
              if ("string" == typeof b) e[r.camelCase(b)] = c;
              else for (d in b) e[r.camelCase(d)] = b[d];
              return e;
          },
          get: function (a, b) {
              return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
          },
          access: function (a, b, c) {
              return void 0 === b || (b && "string" == typeof b && void 0 === c) ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
          },
          remove: function (a, b) {
              var c,
                  d = a[this.expando];
              if (void 0 !== d) {
                  if (void 0 !== b) {
                      r.isArray(b) ? (b = b.map(r.camelCase)) : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(K) || [])), (c = b.length);
                      while (c--) delete d[b[c]];
                  }
                  (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
              }
          },
          hasData: function (a) {
              var b = a[this.expando];
              return void 0 !== b && !r.isEmptyObject(b);
          },
      });
  var V = new U(),
      W = new U(),
      X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Y = /[A-Z]/g;
  function Z(a) {
      return "true" === a || ("false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a));
  }
  function $(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
          if (((d = "data-" + b.replace(Y, "-$&").toLowerCase()), (c = a.getAttribute(d)), "string" == typeof c)) {
              try {
                  c = Z(c);
              } catch (e) {}
              W.set(a, b, c);
          } else c = void 0;
      return c;
  }
  r.extend({
      hasData: function (a) {
          return W.hasData(a) || V.hasData(a);
      },
      data: function (a, b, c) {
          return W.access(a, b, c);
      },
      removeData: function (a, b) {
          W.remove(a, b);
      },
      _data: function (a, b, c) {
          return V.access(a, b, c);
      },
      _removeData: function (a, b) {
          V.remove(a, b);
      },
  }),
      r.fn.extend({
          data: function (a, b) {
              var c,
                  d,
                  e,
                  f = this[0],
                  g = f && f.attributes;
              if (void 0 === a) {
                  if (this.length && ((e = W.get(f)), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                      c = g.length;
                      while (c--) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = r.camelCase(d.slice(5))), $(f, d, e[d])));
                      V.set(f, "hasDataAttrs", !0);
                  }
                  return e;
              }
              return "object" == typeof a
                  ? this.each(function () {
                        W.set(this, a);
                    })
                  : S(
                        this,
                        function (b) {
                            var c;
                            if (f && void 0 === b) {
                                if (((c = W.get(f, a)), void 0 !== c)) return c;
                                if (((c = $(f, a)), void 0 !== c)) return c;
                            } else
                                this.each(function () {
                                    W.set(this, a, b);
                                });
                        },
                        null,
                        b,
                        arguments.length > 1,
                        null,
                        !0
                    );
          },
          removeData: function (a) {
              return this.each(function () {
                  W.remove(this, a);
              });
          },
      }),
      r.extend({
          queue: function (a, b, c) {
              var d;
              if (a) return (b = (b || "fx") + "queue"), (d = V.get(a, b)), c && (!d || r.isArray(c) ? (d = V.access(a, b, r.makeArray(c))) : d.push(c)), d || [];
          },
          dequeue: function (a, b) {
              b = b || "fx";
              var c = r.queue(a, b),
                  d = c.length,
                  e = c.shift(),
                  f = r._queueHooks(a, b),
                  g = function () {
                      r.dequeue(a, b);
                  };
              "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
          },
          _queueHooks: function (a, b) {
              var c = b + "queueHooks";
              return (
                  V.get(a, c) ||
                  V.access(a, c, {
                      empty: r.Callbacks("once memory").add(function () {
                          V.remove(a, [b + "queue", c]);
                      }),
                  })
              );
          },
      }),
      r.fn.extend({
          queue: function (a, b) {
              var c = 2;
              return (
                  "string" != typeof a && ((b = a), (a = "fx"), c--),
                  arguments.length < c
                      ? r.queue(this[0], a)
                      : void 0 === b
                      ? this
                      : this.each(function () {
                            var c = r.queue(this, a, b);
                            r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
                        })
              );
          },
          dequeue: function (a) {
              return this.each(function () {
                  r.dequeue(this, a);
              });
          },
          clearQueue: function (a) {
              return this.queue(a || "fx", []);
          },
          promise: function (a, b) {
              var c,
                  d = 1,
                  e = r.Deferred(),
                  f = this,
                  g = this.length,
                  h = function () {
                      --d || e.resolveWith(f, [f]);
                  };
              "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
              while (g--) (c = V.get(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
              return h(), e.promise(b);
          },
      });
  var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
      ba = ["Top", "Right", "Bottom", "Left"],
      ca = function (a, b) {
          return (a = b || a), "none" === a.style.display || ("" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display"));
      },
      da = function (a, b, c, d) {
          var e,
              f,
              g = {};
          for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
          e = c.apply(a, d || []);
          for (f in b) a.style[f] = g[f];
          return e;
      };
  function ea(a, b, c, d) {
      var e,
          f = 1,
          g = 20,
          h = d
              ? function () {
                    return d.cur();
                }
              : function () {
                    return r.css(a, b, "");
                },
          i = h(),
          j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
          k = (r.cssNumber[b] || ("px" !== j && +i)) && aa.exec(r.css(a, b));
      if (k && k[3] !== j) {
          (j = j || k[3]), (c = c || []), (k = +i || 1);
          do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
          while (f !== (f = h() / i) && 1 !== f && --g);
      }
      return c && ((k = +k || +i || 0), (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]), d && ((d.unit = j), (d.start = k), (d.end = e))), e;
  }
  var fa = {};
  function ga(a) {
      var b,
          c = a.ownerDocument,
          d = a.nodeName,
          e = fa[d];
      return e ? e : ((b = c.body.appendChild(c.createElement(d))), (e = r.css(b, "display")), b.parentNode.removeChild(b), "none" === e && (e = "block"), (fa[d] = e), e);
  }
  function ha(a, b) {
      for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
          (d = a[f]),
              d.style &&
                  ((c = d.style.display),
                  b ? ("none" === c && ((e[f] = V.get(d, "display") || null), e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && ((e[f] = "none"), V.set(d, "display", c)));
      for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
      return a;
  }
  r.fn.extend({
      show: function () {
          return ha(this, !0);
      },
      hide: function () {
          return ha(this);
      },
      toggle: function (a) {
          return "boolean" == typeof a
              ? a
                  ? this.show()
                  : this.hide()
              : this.each(function () {
                    ca(this) ? r(this).show() : r(this).hide();
                });
      },
  });
  var ia = /^(?:checkbox|radio)$/i,
      ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      ka = /^$|\/(?:java|ecma)script/i,
      la = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
      };
  (la.optgroup = la.option), (la.tbody = la.tfoot = la.colgroup = la.caption = la.thead), (la.th = la.td);
  function ma(a, b) {
      var c;
      return (
          (c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []), void 0 === b || (b && r.nodeName(a, b)) ? r.merge([a], c) : c
      );
  }
  function na(a, b) {
      for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
  }
  var oa = /<|&#?\w+;/;
  function pa(a, b, c, d, e) {
      for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
          if (((f = a[n]), f || 0 === f))
              if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
              else if (oa.test(f)) {
                  (g = g || l.appendChild(b.createElement("div"))), (h = (ja.exec(f) || ["", ""])[1].toLowerCase()), (i = la[h] || la._default), (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]), (k = i[0]);
                  while (k--) g = g.lastChild;
                  r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
              } else m.push(b.createTextNode(f));
      (l.textContent = ""), (n = 0);
      while ((f = m[n++]))
          if (d && r.inArray(f, d) > -1) e && e.push(f);
          else if (((j = r.contains(f.ownerDocument, f)), (g = ma(l.appendChild(f), "script")), j && na(g), c)) {
              k = 0;
              while ((f = g[k++])) ka.test(f.type || "") && c.push(f);
          }
      return l;
  }
  !(function () {
      var a = d.createDocumentFragment(),
          b = a.appendChild(d.createElement("div")),
          c = d.createElement("input");
      c.setAttribute("type", "radio"),
          c.setAttribute("checked", "checked"),
          c.setAttribute("name", "t"),
          b.appendChild(c),
          (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (b.innerHTML = "<textarea>x</textarea>"),
          (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var qa = d.documentElement,
      ra = /^key/,
      sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ta = /^([^.]*)(?:\.(.+)|)/;
  function ua() {
      return !0;
  }
  function va() {
      return !1;
  }
  function wa() {
      try {
          return d.activeElement;
      } catch (a) {}
  }
  function xa(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
          "string" != typeof c && ((d = d || c), (c = void 0));
          for (h in b) xa(a, h, c, d, b[h], f);
          return a;
      }
      if ((null == d && null == e ? ((e = c), (d = c = void 0)) : null == e && ("string" == typeof c ? ((e = d), (d = void 0)) : ((e = d), (d = c), (c = void 0))), e === !1)) e = va;
      else if (!e) return a;
      return (
          1 === f &&
              ((g = e),
              (e = function (a) {
                  return r().off(a), g.apply(this, arguments);
              }),
              (e.guid = g.guid || (g.guid = r.guid++))),
          a.each(function () {
              r.event.add(this, b, e, d, c);
          })
      );
  }
  (r.event = {
      global: {},
      add: function (a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q = V.get(a);
          if (q) {
              c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                  e && r.find.matchesSelector(qa, e),
                  c.guid || (c.guid = r.guid++),
                  (i = q.events) || (i = q.events = {}),
                  (g = q.handle) ||
                      (g = q.handle = function (b) {
                          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                      }),
                  (b = (b || "").match(K) || [""]),
                  (j = b.length);
              while (j--)
                  (h = ta.exec(b[j]) || []),
                      (n = p = h[1]),
                      (o = (h[2] || "").split(".").sort()),
                      n &&
                          ((l = r.event.special[n] || {}),
                          (n = (e ? l.delegateType : l.bindType) || n),
                          (l = r.event.special[n] || {}),
                          (k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f)),
                          (m = i[n]) || ((m = i[n] = []), (m.delegateCount = 0), (l.setup && l.setup.call(a, d, o, g) !== !1) || (a.addEventListener && a.addEventListener(n, g))),
                          l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
                          e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                          (r.event.global[n] = !0));
          }
      },
      remove: function (a, b, c, d, e) {
          var f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q = V.hasData(a) && V.get(a);
          if (q && (i = q.events)) {
              (b = (b || "").match(K) || [""]), (j = b.length);
              while (j--)
                  if (((h = ta.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || "").split(".").sort()), n)) {
                      (l = r.event.special[n] || {}), (n = (d ? l.delegateType : l.bindType) || n), (m = i[n] || []), (h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")), (g = f = m.length);
                      while (f--)
                          (k = m[f]),
                              (!e && p !== k.origType) ||
                                  (c && c.guid !== k.guid) ||
                                  (h && !h.test(k.namespace)) ||
                                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                  (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                      g && !m.length && ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) || r.removeEvent(a, n, q.handle), delete i[n]);
                  } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
              r.isEmptyObject(i) && V.remove(a, "handle events");
          }
      },
      dispatch: function (a) {
          var b = r.event.fix(a),
              c,
              d,
              e,
              f,
              g,
              h,
              i = new Array(arguments.length),
              j = (V.get(this, "events") || {})[b.type] || [],
              k = r.event.special[b.type] || {};
          for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
          if (((b.delegateTarget = this), !k.preDispatch || k.preDispatch.call(this, b) !== !1)) {
              (h = r.event.handlers.call(this, b, j)), (c = 0);
              while ((f = h[c++]) && !b.isPropagationStopped()) {
                  (b.currentTarget = f.elem), (d = 0);
                  while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
                      (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
                          ((b.handleObj = g), (b.data = g.data), (e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
              }
              return k.postDispatch && k.postDispatch.call(this, b), b.result;
          }
      },
      handlers: function (a, b) {
          var c,
              d,
              e,
              f,
              g,
              h = [],
              i = b.delegateCount,
              j = a.target;
          if (i && j.nodeType && !("click" === a.type && a.button >= 1))
              for (; j !== this; j = j.parentNode || this)
                  if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                      for (f = [], g = {}, c = 0; c < i; c++) (d = b[c]), (e = d.selector + " "), void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                      f.length && h.push({ elem: j, handlers: f });
                  }
          return (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h;
      },
      addProp: function (a, b) {
          Object.defineProperty(r.Event.prototype, a, {
              enumerable: !0,
              configurable: !0,
              get: r.isFunction(b)
                  ? function () {
                        if (this.originalEvent) return b(this.originalEvent);
                    }
                  : function () {
                        if (this.originalEvent) return this.originalEvent[a];
                    },
              set: function (b) {
                  Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
              },
          });
      },
      fix: function (a) {
          return a[r.expando] ? a : new r.Event(a);
      },
      special: {
          load: { noBubble: !0 },
          focus: {
              trigger: function () {
                  if (this !== wa() && this.focus) return this.focus(), !1;
              },
              delegateType: "focusin",
          },
          blur: {
              trigger: function () {
                  if (this === wa() && this.blur) return this.blur(), !1;
              },
              delegateType: "focusout",
          },
          click: {
              trigger: function () {
                  if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1;
              },
              _default: function (a) {
                  return r.nodeName(a.target, "a");
              },
          },
          beforeunload: {
              postDispatch: function (a) {
                  void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
              },
          },
      },
  }),
      (r.removeEvent = function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c);
      }),
      (r.Event = function (a, b) {
          return this instanceof r.Event
              ? (a && a.type
                    ? ((this.originalEvent = a),
                      (this.type = a.type),
                      (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? ua : va),
                      (this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target),
                      (this.currentTarget = a.currentTarget),
                      (this.relatedTarget = a.relatedTarget))
                    : (this.type = a),
                b && r.extend(this, b),
                (this.timeStamp = (a && a.timeStamp) || r.now()),
                void (this[r.expando] = !0))
              : new r.Event(a, b);
      }),
      (r.Event.prototype = {
          constructor: r.Event,
          isDefaultPrevented: va,
          isPropagationStopped: va,
          isImmediatePropagationStopped: va,
          isSimulated: !1,
          preventDefault: function () {
              var a = this.originalEvent;
              (this.isDefaultPrevented = ua), a && !this.isSimulated && a.preventDefault();
          },
          stopPropagation: function () {
              var a = this.originalEvent;
              (this.isPropagationStopped = ua), a && !this.isSimulated && a.stopPropagation();
          },
          stopImmediatePropagation: function () {
              var a = this.originalEvent;
              (this.isImmediatePropagationStopped = ua), a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
          },
      }),
      r.each(
          {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (a) {
                  var b = a.button;
                  return null == a.which && ra.test(a.type) ? (null != a.charCode ? a.charCode : a.keyCode) : !a.which && void 0 !== b && sa.test(a.type) ? (1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0) : a.which;
              },
          },
          r.event.addProp
      ),
      r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
          r.event.special[a] = {
              delegateType: b,
              bindType: b,
              handle: function (a) {
                  var c,
                      d = this,
                      e = a.relatedTarget,
                      f = a.handleObj;
                  return (e && (e === d || r.contains(d, e))) || ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
              },
          };
      }),
      r.fn.extend({
          on: function (a, b, c, d) {
              return xa(this, a, b, c, d);
          },
          one: function (a, b, c, d) {
              return xa(this, a, b, c, d, 1);
          },
          off: function (a, b, c) {
              var d, e;
              if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
              if ("object" == typeof a) {
                  for (e in a) this.off(e, b, a[e]);
                  return this;
              }
              return (
                  (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
                  c === !1 && (c = va),
                  this.each(function () {
                      r.event.remove(this, a, c, b);
                  })
              );
          },
      });
  var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      za = /<script|<style|<link/i,
      Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ba = /^true\/(.*)/,
      Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Da(a, b) {
      return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }
  function Ea(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Fa(a) {
      var b = Ba.exec(a.type);
      return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ga(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
          if (V.hasData(a) && ((f = V.access(a)), (g = V.set(b, f)), (j = f.events))) {
              delete g.handle, (g.events = {});
              for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
          }
          W.hasData(a) && ((h = W.access(a)), (i = r.extend({}, h)), W.set(b, i));
      }
  }
  function Ha(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && ia.test(a.type) ? (b.checked = a.checked) : ("input" !== c && "textarea" !== c) || (b.defaultValue = a.defaultValue);
  }
  function Ia(a, b, c, d) {
      b = g.apply([], b);
      var e,
          f,
          h,
          i,
          j,
          k,
          l = 0,
          m = a.length,
          n = m - 1,
          q = b[0],
          s = r.isFunction(q);
      if (s || (m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)))
          return a.each(function (e) {
              var f = a.eq(e);
              s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d);
          });
      if (m && ((e = pa(b, a[0].ownerDocument, !1, a, d)), (f = e.firstChild), 1 === e.childNodes.length && (e = f), f || d)) {
          for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) (j = e), l !== n && ((j = r.clone(j, !0, !0)), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
          if (i)
              for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++)
                  (j = h[l]), ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
      }
      return a;
  }
  function Ja(a, b, c) {
      for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
      return a;
  }
  r.extend({
      htmlPrefilter: function (a) {
          return a.replace(ya, "<$1></$2>");
      },
      clone: function (a, b, c) {
          var d,
              e,
              f,
              g,
              h = a.cloneNode(!0),
              i = r.contains(a.ownerDocument, a);
          if (!(o.noCloneChecked || (1 !== a.nodeType && 11 !== a.nodeType) || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
          if (b)
              if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
              else Ga(a, h);
          return (g = ma(h, "script")), g.length > 0 && na(g, !i && ma(a, "script")), h;
      },
      cleanData: function (a) {
          for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
              if (T(c)) {
                  if ((b = c[V.expando])) {
                      if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                      c[V.expando] = void 0;
                  }
                  c[W.expando] && (c[W.expando] = void 0);
              }
      },
  }),
      r.fn.extend({
          detach: function (a) {
              return Ja(this, a, !0);
          },
          remove: function (a) {
              return Ja(this, a);
          },
          text: function (a) {
              return S(
                  this,
                  function (a) {
                      return void 0 === a
                          ? r.text(this)
                          : this.empty().each(function () {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = a);
                            });
                  },
                  null,
                  a,
                  arguments.length
              );
          },
          append: function () {
              return Ia(this, arguments, function (a) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var b = Da(this, a);
                      b.appendChild(a);
                  }
              });
          },
          prepend: function () {
              return Ia(this, arguments, function (a) {
                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                      var b = Da(this, a);
                      b.insertBefore(a, b.firstChild);
                  }
              });
          },
          before: function () {
              return Ia(this, arguments, function (a) {
                  this.parentNode && this.parentNode.insertBefore(a, this);
              });
          },
          after: function () {
              return Ia(this, arguments, function (a) {
                  this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
              });
          },
          empty: function () {
              for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), (a.textContent = ""));
              return this;
          },
          clone: function (a, b) {
              return (
                  (a = null != a && a),
                  (b = null == b ? a : b),
                  this.map(function () {
                      return r.clone(this, a, b);
                  })
              );
          },
          html: function (a) {
              return S(
                  this,
                  function (a) {
                      var b = this[0] || {},
                          c = 0,
                          d = this.length;
                      if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                      if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                          a = r.htmlPrefilter(a);
                          try {
                              for (; c < d; c++) (b = this[c] || {}), 1 === b.nodeType && (r.cleanData(ma(b, !1)), (b.innerHTML = a));
                              b = 0;
                          } catch (e) {}
                      }
                      b && this.empty().append(a);
                  },
                  null,
                  a,
                  arguments.length
              );
          },
          replaceWith: function () {
              var a = [];
              return Ia(
                  this,
                  arguments,
                  function (b) {
                      var c = this.parentNode;
                      r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this));
                  },
                  a
              );
          },
      }),
      r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
          r.fn[a] = function (a) {
              for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) (c = g === f ? this : this.clone(!0)), r(e[g])[b](c), h.apply(d, c.get());
              return this.pushStack(d);
          };
      });
  var Ka = /^margin/,
      La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
      Ma = function (b) {
          var c = b.ownerDocument.defaultView;
          return (c && c.opener) || (c = a), c.getComputedStyle(b);
      };
  !(function () {
      function b() {
          if (i) {
              (i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"), (i.innerHTML = ""), qa.appendChild(h);
              var b = a.getComputedStyle(i);
              (c = "1%" !== b.top), (g = "2px" === b.marginLeft), (e = "4px" === b.width), (i.style.marginRight = "50%"), (f = "4px" === b.marginRight), qa.removeChild(h), (i = null);
          }
      }
      var c,
          e,
          f,
          g,
          h = d.createElement("div"),
          i = d.createElement("div");
      i.style &&
          ((i.style.backgroundClip = "content-box"),
          (i.cloneNode(!0).style.backgroundClip = ""),
          (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
          (h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          h.appendChild(i),
          r.extend(o, {
              pixelPosition: function () {
                  return b(), c;
              },
              boxSizingReliable: function () {
                  return b(), e;
              },
              pixelMarginRight: function () {
                  return b(), f;
              },
              reliableMarginLeft: function () {
                  return b(), g;
              },
          }));
  })();
  function Na(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.style;
      return (
          (c = c || Ma(a)),
          c &&
              ((g = c.getPropertyValue(b) || c[b]),
              "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
              !o.pixelMarginRight() && La.test(g) && Ka.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
          void 0 !== g ? g + "" : g
      );
  }
  function Oa(a, b) {
      return {
          get: function () {
              return a() ? void delete this.get : (this.get = b).apply(this, arguments);
          },
      };
  }
  var Pa = /^(none|table(?!-c[ea]).+)/,
      Qa = { position: "absolute", visibility: "hidden", display: "block" },
      Ra = { letterSpacing: "0", fontWeight: "400" },
      Sa = ["Webkit", "Moz", "ms"],
      Ta = d.createElement("div").style;
  function Ua(a) {
      if (a in Ta) return a;
      var b = a[0].toUpperCase() + a.slice(1),
          c = Sa.length;
      while (c--) if (((a = Sa[c] + b), a in Ta)) return a;
  }
  function Va(a, b, c) {
      var d = aa.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Wa(a, b, c, d, e) {
      var f,
          g = 0;
      for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
          "margin" === c && (g += r.css(a, c + ba[f], !0, e)),
              d
                  ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e)))
                  : ((g += r.css(a, "padding" + ba[f], !0, e)), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
      return g;
  }
  function Xa(a, b, c) {
      var d,
          e = !0,
          f = Ma(a),
          g = "border-box" === r.css(a, "boxSizing", !1, f);
      if ((a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d)) {
          if (((d = Na(a, b, f)), (d < 0 || null == d) && (d = a.style[b]), La.test(d))) return d;
          (e = g && (o.boxSizingReliable() || d === a.style[b])), (d = parseFloat(d) || 0);
      }
      return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px";
  }
  r.extend({
      cssHooks: {
          opacity: {
              get: function (a, b) {
                  if (b) {
                      var c = Na(a, "opacity");
                      return "" === c ? "1" : c;
                  }
              },
          },
      },
      cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: { float: "cssFloat" },
      style: function (a, b, c, d) {
          if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
              var e,
                  f,
                  g,
                  h = r.camelCase(b),
                  i = a.style;
              return (
                  (b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h)),
                  (g = r.cssHooks[b] || r.cssHooks[h]),
                  void 0 === c
                      ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
                          ? e
                          : i[b]
                      : ((f = typeof c),
                        "string" === f && (e = aa.exec(c)) && e[1] && ((c = ea(a, b, e)), (f = "number")),
                        null != c &&
                            c === c &&
                            ("number" === f && (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                            o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                            (g && "set" in g && void 0 === (c = g.set(a, c, d))) || (i[b] = c)),
                        void 0)
              );
          }
      },
      css: function (a, b, c, d) {
          var e,
              f,
              g,
              h = r.camelCase(b);
          return (
              (b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h)),
              (g = r.cssHooks[b] || r.cssHooks[h]),
              g && "get" in g && (e = g.get(a, !0, c)),
              void 0 === e && (e = Na(a, b, d)),
              "normal" === e && b in Ra && (e = Ra[b]),
              "" === c || c ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e) : e
          );
      },
  }),
      r.each(["height", "width"], function (a, b) {
          r.cssHooks[b] = {
              get: function (a, c, d) {
                  if (c)
                      return !Pa.test(r.css(a, "display")) || (a.getClientRects().length && a.getBoundingClientRect().width)
                          ? Xa(a, b, d)
                          : da(a, Qa, function () {
                                return Xa(a, b, d);
                            });
              },
              set: function (a, c, d) {
                  var e,
                      f = d && Ma(a),
                      g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                  return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && ((a.style[b] = c), (c = r.css(a, b))), Va(a, c, g);
              },
          };
      }),
      (r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
          if (b)
              return (
                  (parseFloat(Na(a, "marginLeft")) ||
                      a.getBoundingClientRect().left -
                          da(a, { marginLeft: 0 }, function () {
                              return a.getBoundingClientRect().left;
                          })) + "px"
              );
      })),
      r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
          (r.cssHooks[a + b] = {
              expand: function (c) {
                  for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                  return e;
              },
          }),
              Ka.test(a) || (r.cssHooks[a + b].set = Va);
      }),
      r.fn.extend({
          css: function (a, b) {
              return S(
                  this,
                  function (a, b, c) {
                      var d,
                          e,
                          f = {},
                          g = 0;
                      if (r.isArray(b)) {
                          for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                          return f;
                      }
                      return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
                  },
                  a,
                  b,
                  arguments.length > 1
              );
          },
      });
  function Ya(a, b, c, d, e) {
      return new Ya.prototype.init(a, b, c, d, e);
  }
  (r.Tween = Ya),
      (Ya.prototype = {
          constructor: Ya,
          init: function (a, b, c, d, e, f) {
              (this.elem = a), (this.prop = c), (this.easing = e || r.easing._default), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (r.cssNumber[c] ? "" : "px"));
          },
          cur: function () {
              var a = Ya.propHooks[this.prop];
              return a && a.get ? a.get(this) : Ya.propHooks._default.get(this);
          },
          run: function (a) {
              var b,
                  c = Ya.propHooks[this.prop];
              return (
                  this.options.duration ? (this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                  (this.now = (this.end - this.start) * b + this.start),
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                  c && c.set ? c.set(this) : Ya.propHooks._default.set(this),
                  this
              );
          },
      }),
      (Ya.prototype.init.prototype = Ya.prototype),
      (Ya.propHooks = {
          _default: {
              get: function (a) {
                  var b;
                  return 1 !== a.elem.nodeType || (null != a.elem[a.prop] && null == a.elem.style[a.prop]) ? a.elem[a.prop] : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
              },
              set: function (a) {
                  r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop]) ? (a.elem[a.prop] = a.now) : r.style(a.elem, a.prop, a.now + a.unit);
              },
          },
      }),
      (Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
          set: function (a) {
              a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
          },
      }),
      (r.easing = {
          linear: function (a) {
              return a;
          },
          swing: function (a) {
              return 0.5 - Math.cos(a * Math.PI) / 2;
          },
          _default: "swing",
      }),
      (r.fx = Ya.prototype.init),
      (r.fx.step = {});
  var Za,
      $a,
      _a = /^(?:toggle|show|hide)$/,
      ab = /queueHooks$/;
  function bb() {
      $a && (a.requestAnimationFrame(bb), r.fx.tick());
  }
  function cb() {
      return (
          a.setTimeout(function () {
              Za = void 0;
          }),
          (Za = r.now())
      );
  }
  function db(a, b) {
      var c,
          d = 0,
          e = { height: a };
      for (b = b ? 1 : 0; d < 4; d += 2 - b) (c = ba[d]), (e["margin" + c] = e["padding" + c] = a);
      return b && (e.opacity = e.width = a), e;
  }
  function eb(a, b, c) {
      for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if ((d = e[f].call(c, b, a))) return d;
  }
  function fb(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = "width" in b || "height" in b,
          m = this,
          n = {},
          o = a.style,
          p = a.nodeType && ca(a),
          q = V.get(a, "fxshow");
      c.queue ||
          ((g = r._queueHooks(a, "fx")),
          null == g.unqueued &&
              ((g.unqueued = 0),
              (h = g.empty.fire),
              (g.empty.fire = function () {
                  g.unqueued || h();
              })),
          g.unqueued++,
          m.always(function () {
              m.always(function () {
                  g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
              });
          }));
      for (d in b)
          if (((e = b[d]), _a.test(e))) {
              if ((delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))) {
                  if ("show" !== e || !q || void 0 === q[d]) continue;
                  p = !0;
              }
              n[d] = (q && q[d]) || r.style(a, d);
          }
      if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
          l &&
              1 === a.nodeType &&
              ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
              (j = q && q.display),
              null == j && (j = V.get(a, "display")),
              (k = r.css(a, "display")),
              "none" === k && (j ? (k = j) : (ha([a], !0), (j = a.style.display || j), (k = r.css(a, "display")), ha([a]))),
              ("inline" === k || ("inline-block" === k && null != j)) &&
                  "none" === r.css(a, "float") &&
                  (i ||
                      (m.done(function () {
                          o.display = j;
                      }),
                      null == j && ((k = o.display), (j = "none" === k ? "" : k))),
                  (o.display = "inline-block"))),
              c.overflow &&
                  ((o.overflow = "hidden"),
                  m.always(function () {
                      (o.overflow = c.overflow[0]), (o.overflowX = c.overflow[1]), (o.overflowY = c.overflow[2]);
                  })),
              (i = !1);
          for (d in n)
              i ||
                  (q ? "hidden" in q && (p = q.hidden) : (q = V.access(a, "fxshow", { display: j })),
                  f && (q.hidden = !p),
                  p && ha([a], !0),
                  m.done(function () {
                      p || ha([a]), V.remove(a, "fxshow");
                      for (d in n) r.style(a, d, n[d]);
                  })),
                  (i = eb(p ? q[d] : 0, d, m)),
                  d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
      }
  }
  function gb(a, b) {
      var c, d, e, f, g;
      for (c in a)
          if (((d = r.camelCase(c)), (e = b[d]), (f = a[c]), r.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = r.cssHooks[d]), g && "expand" in g)) {
              (f = g.expand(f)), delete a[d];
              for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
          } else b[d] = e;
  }
  function hb(a, b, c) {
      var d,
          e,
          f = 0,
          g = hb.prefilters.length,
          h = r.Deferred().always(function () {
              delete i.elem;
          }),
          i = function () {
              if (e) return !1;
              for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
              return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
          },
          j = h.promise({
              elem: a,
              props: r.extend({}, b),
              opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
              originalProperties: b,
              originalOptions: c,
              startTime: Za || cb(),
              duration: c.duration,
              tweens: [],
              createTween: function (b, c) {
                  var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                  return j.tweens.push(d), d;
              },
              stop: function (b) {
                  var c = 0,
                      d = b ? j.tweens.length : 0;
                  if (e) return this;
                  for (e = !0; c < d; c++) j.tweens[c].run(1);
                  return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
              },
          }),
          k = j.props;
      for (gb(k, j.opts.specialEasing); f < g; f++) if ((d = hb.prefilters[f].call(j, a, k, j.opts))) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
      return (
          r.map(k, eb, j),
          r.isFunction(j.opts.start) && j.opts.start.call(a, j),
          r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
          j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
      );
  }
  (r.Animation = r.extend(hb, {
      tweeners: {
          "*": [
              function (a, b) {
                  var c = this.createTween(a, b);
                  return ea(c.elem, a, aa.exec(b), c), c;
              },
          ],
      },
      tweener: function (a, b) {
          r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(K));
          for (var c, d = 0, e = a.length; d < e; d++) (c = a[d]), (hb.tweeners[c] = hb.tweeners[c] || []), hb.tweeners[c].unshift(b);
      },
      prefilters: [fb],
      prefilter: function (a, b) {
          b ? hb.prefilters.unshift(a) : hb.prefilters.push(a);
      },
  })),
      (r.speed = function (a, b, c) {
          var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || (!c && b) || (r.isFunction(a) && a), duration: a, easing: (c && b) || (b && !r.isFunction(b) && b) };
          return (
              r.fx.off || d.hidden ? (e.duration = 0) : "number" != typeof e.duration && (e.duration in r.fx.speeds ? (e.duration = r.fx.speeds[e.duration]) : (e.duration = r.fx.speeds._default)),
              (null != e.queue && e.queue !== !0) || (e.queue = "fx"),
              (e.old = e.complete),
              (e.complete = function () {
                  r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
              }),
              e
          );
      }),
      r.fn.extend({
          fadeTo: function (a, b, c, d) {
              return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
          },
          animate: function (a, b, c, d) {
              var e = r.isEmptyObject(a),
                  f = r.speed(b, c, d),
                  g = function () {
                      var b = hb(this, r.extend({}, a), f);
                      (e || V.get(this, "finish")) && b.stop(!0);
                  };
              return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
          },
          stop: function (a, b, c) {
              var d = function (a) {
                  var b = a.stop;
                  delete a.stop, b(c);
              };
              return (
                  "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                  b && a !== !1 && this.queue(a || "fx", []),
                  this.each(function () {
                      var b = !0,
                          e = null != a && a + "queueHooks",
                          f = r.timers,
                          g = V.get(this);
                      if (e) g[e] && g[e].stop && d(g[e]);
                      else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                      for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                      (!b && c) || r.dequeue(this, a);
                  })
              );
          },
          finish: function (a) {
              return (
                  a !== !1 && (a = a || "fx"),
                  this.each(function () {
                      var b,
                          c = V.get(this),
                          d = c[a + "queue"],
                          e = c[a + "queueHooks"],
                          f = r.timers,
                          g = d ? d.length : 0;
                      for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                      for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                      delete c.finish;
                  })
              );
          },
      }),
      r.each(["toggle", "show", "hide"], function (a, b) {
          var c = r.fn[b];
          r.fn[b] = function (a, d, e) {
              return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e);
          };
      }),
      r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
          r.fn[a] = function (a, c, d) {
              return this.animate(b, a, c, d);
          };
      }),
      (r.timers = []),
      (r.fx.tick = function () {
          var a,
              b = 0,
              c = r.timers;
          for (Za = r.now(); b < c.length; b++) (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
          c.length || r.fx.stop(), (Za = void 0);
      }),
      (r.fx.timer = function (a) {
          r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
      }),
      (r.fx.interval = 13),
      (r.fx.start = function () {
          $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval));
      }),
      (r.fx.stop = function () {
          a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), ($a = null);
      }),
      (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (r.fn.delay = function (b, c) {
          return (
              (b = r.fx ? r.fx.speeds[b] || b : b),
              (c = c || "fx"),
              this.queue(c, function (c, d) {
                  var e = a.setTimeout(c, b);
                  d.stop = function () {
                      a.clearTimeout(e);
                  };
              })
          );
      }),
      (function () {
          var a = d.createElement("input"),
              b = d.createElement("select"),
              c = b.appendChild(d.createElement("option"));
          (a.type = "checkbox"), (o.checkOn = "" !== a.value), (o.optSelected = c.selected), (a = d.createElement("input")), (a.value = "t"), (a.type = "radio"), (o.radioValue = "t" === a.value);
      })();
  var ib,
      jb = r.expr.attrHandle;
  r.fn.extend({
      attr: function (a, b) {
          return S(this, r.attr, a, b, arguments.length > 1);
      },
      removeAttr: function (a) {
          return this.each(function () {
              r.removeAttr(this, a);
          });
      },
  }),
      r.extend({
          attr: function (a, b, c) {
              var d,
                  e,
                  f = a.nodeType;
              if (3 !== f && 8 !== f && 2 !== f)
                  return "undefined" == typeof a.getAttribute
                      ? r.prop(a, b, c)
                      : ((1 === f && r.isXMLDoc(a)) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                        void 0 !== c
                            ? null === c
                                ? void r.removeAttr(a, b)
                                : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                                ? d
                                : (a.setAttribute(b, c + ""), c)
                            : e && "get" in e && null !== (d = e.get(a, b))
                            ? d
                            : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
          },
          attrHooks: {
              type: {
                  set: function (a, b) {
                      if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                          var c = a.value;
                          return a.setAttribute("type", b), c && (a.value = c), b;
                      }
                  },
              },
          },
          removeAttr: function (a, b) {
              var c,
                  d = 0,
                  e = b && b.match(K);
              if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
          },
      }),
      (ib = {
          set: function (a, b, c) {
              return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
          },
      }),
      r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
          var c = jb[b] || r.find.attr;
          jb[b] = function (a, b, d) {
              var e,
                  f,
                  g = b.toLowerCase();
              return d || ((f = jb[g]), (jb[g] = e), (e = null != c(a, b, d) ? g : null), (jb[g] = f)), e;
          };
      });
  var kb = /^(?:input|select|textarea|button)$/i,
      lb = /^(?:a|area)$/i;
  r.fn.extend({
      prop: function (a, b) {
          return S(this, r.prop, a, b, arguments.length > 1);
      },
      removeProp: function (a) {
          return this.each(function () {
              delete this[r.propFix[a] || a];
          });
      },
  }),
      r.extend({
          prop: function (a, b, c) {
              var d,
                  e,
                  f = a.nodeType;
              if (3 !== f && 8 !== f && 2 !== f)
                  return (
                      (1 === f && r.isXMLDoc(a)) || ((b = r.propFix[b] || b), (e = r.propHooks[b])),
                      void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                  );
          },
          propHooks: {
              tabIndex: {
                  get: function (a) {
                      var b = r.find.attr(a, "tabindex");
                      return b ? parseInt(b, 10) : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href) ? 0 : -1;
                  },
              },
          },
          propFix: { for: "htmlFor", class: "className" },
      }),
      o.optSelected ||
          (r.propHooks.selected = {
              get: function (a) {
                  var b = a.parentNode;
                  return b && b.parentNode && b.parentNode.selectedIndex, null;
              },
              set: function (a) {
                  var b = a.parentNode;
                  b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
              },
          }),
      r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
          r.propFix[this.toLowerCase()] = this;
      });
  function mb(a) {
      var b = a.match(K) || [];
      return b.join(" ");
  }
  function nb(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
      addClass: function (a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i = 0;
          if (r.isFunction(a))
              return this.each(function (b) {
                  r(this).addClass(a.call(this, b, nb(this)));
              });
          if ("string" == typeof a && a) {
              b = a.match(K) || [];
              while ((c = this[i++]))
                  if (((e = nb(c)), (d = 1 === c.nodeType && " " + mb(e) + " "))) {
                      g = 0;
                      while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                      (h = mb(d)), e !== h && c.setAttribute("class", h);
                  }
          }
          return this;
      },
      removeClass: function (a) {
          var b,
              c,
              d,
              e,
              f,
              g,
              h,
              i = 0;
          if (r.isFunction(a))
              return this.each(function (b) {
                  r(this).removeClass(a.call(this, b, nb(this)));
              });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof a && a) {
              b = a.match(K) || [];
              while ((c = this[i++]))
                  if (((e = nb(c)), (d = 1 === c.nodeType && " " + mb(e) + " "))) {
                      g = 0;
                      while ((f = b[g++])) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                      (h = mb(d)), e !== h && c.setAttribute("class", h);
                  }
          }
          return this;
      },
      toggleClass: function (a, b) {
          var c = typeof a;
          return "boolean" == typeof b && "string" === c
              ? b
                  ? this.addClass(a)
                  : this.removeClass(a)
              : r.isFunction(a)
              ? this.each(function (c) {
                    r(this).toggleClass(a.call(this, c, nb(this), b), b);
                })
              : this.each(function () {
                    var b, d, e, f;
                    if ("string" === c) {
                        (d = 0), (e = r(this)), (f = a.match(K) || []);
                        while ((b = f[d++])) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    } else (void 0 !== a && "boolean" !== c) || ((b = nb(this)), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
                });
      },
      hasClass: function (a) {
          var b,
              c,
              d = 0;
          b = " " + a + " ";
          while ((c = this[d++])) if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
          return !1;
      },
  });
  var ob = /\r/g;
  r.fn.extend({
      val: function (a) {
          var b,
              c,
              d,
              e = this[0];
          {
              if (arguments.length)
                  return (
                      (d = r.isFunction(a)),
                      this.each(function (c) {
                          var e;
                          1 === this.nodeType &&
                              ((e = d ? a.call(this, c, r(this).val()) : a),
                              null == e
                                  ? (e = "")
                                  : "number" == typeof e
                                  ? (e += "")
                                  : r.isArray(e) &&
                                    (e = r.map(e, function (a) {
                                        return null == a ? "" : a + "";
                                    })),
                              (b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()]),
                              (b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                      })
                  );
              if (e) return (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]), b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
          }
      },
  }),
      r.extend({
          valHooks: {
              option: {
                  get: function (a) {
                      var b = r.find.attr(a, "value");
                      return null != b ? b : mb(r.text(a));
                  },
              },
              select: {
                  get: function (a) {
                      var b,
                          c,
                          d,
                          e = a.options,
                          f = a.selectedIndex,
                          g = "select-one" === a.type,
                          h = g ? null : [],
                          i = g ? f + 1 : e.length;
                      for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                          if (((c = e[d]), (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup")))) {
                              if (((b = r(c).val()), g)) return b;
                              h.push(b);
                          }
                      return h;
                  },
                  set: function (a, b) {
                      var c,
                          d,
                          e = a.options,
                          f = r.makeArray(b),
                          g = e.length;
                      while (g--) (d = e[g]), (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                      return c || (a.selectedIndex = -1), f;
                  },
              },
          },
      }),
      r.each(["radio", "checkbox"], function () {
          (r.valHooks[this] = {
              set: function (a, b) {
                  if (r.isArray(b)) return (a.checked = r.inArray(r(a).val(), b) > -1);
              },
          }),
              o.checkOn ||
                  (r.valHooks[this].get = function (a) {
                      return null === a.getAttribute("value") ? "on" : a.value;
                  });
      });
  var pb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
      trigger: function (b, c, e, f) {
          var g,
              h,
              i,
              j,
              k,
              m,
              n,
              o = [e || d],
              p = l.call(b, "type") ? b.type : b,
              q = l.call(b, "namespace") ? b.namespace.split(".") : [];
          if (
              ((h = i = e = e || d),
              3 !== e.nodeType &&
                  8 !== e.nodeType &&
                  !pb.test(p + r.event.triggered) &&
                  (p.indexOf(".") > -1 && ((q = p.split(".")), (p = q.shift()), q.sort()),
                  (k = p.indexOf(":") < 0 && "on" + p),
                  (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
                  (b.isTrigger = f ? 2 : 3),
                  (b.namespace = q.join(".")),
                  (b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                  (b.result = void 0),
                  b.target || (b.target = e),
                  (c = null == c ? [b] : r.makeArray(c, [b])),
                  (n = r.event.special[p] || {}),
                  f || !n.trigger || n.trigger.apply(e, c) !== !1))
          ) {
              if (!f && !n.noBubble && !r.isWindow(e)) {
                  for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), (i = h);
                  i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
              }
              g = 0;
              while ((h = o[g++]) && !b.isPropagationStopped())
                  (b.type = g > 1 ? j : n.bindType || p),
                      (m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle")),
                      m && m.apply(h, c),
                      (m = k && h[k]),
                      m && m.apply && T(h) && ((b.result = m.apply(h, c)), b.result === !1 && b.preventDefault());
              return (
                  (b.type = p),
                  f ||
                      b.isDefaultPrevented() ||
                      (n._default && n._default.apply(o.pop(), c) !== !1) ||
                      !T(e) ||
                      (k && r.isFunction(e[p]) && !r.isWindow(e) && ((i = e[k]), i && (e[k] = null), (r.event.triggered = p), e[p](), (r.event.triggered = void 0), i && (e[k] = i))),
                  b.result
              );
          }
      },
      simulate: function (a, b, c) {
          var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
          r.event.trigger(d, null, b);
      },
  }),
      r.fn.extend({
          trigger: function (a, b) {
              return this.each(function () {
                  r.event.trigger(a, b, this);
              });
          },
          triggerHandler: function (a, b) {
              var c = this[0];
              if (c) return r.event.trigger(a, b, c, !0);
          },
      }),
      r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
          r.fn[b] = function (a, c) {
              return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
          };
      }),
      r.fn.extend({
          hover: function (a, b) {
              return this.mouseenter(a).mouseleave(b || a);
          },
      }),
      (o.focusin = "onfocusin" in a),
      o.focusin ||
          r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
              var c = function (a) {
                  r.event.simulate(b, a.target, r.event.fix(a));
              };
              r.event.special[b] = {
                  setup: function () {
                      var d = this.ownerDocument || this,
                          e = V.access(d, b);
                      e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
                  },
                  teardown: function () {
                      var d = this.ownerDocument || this,
                          e = V.access(d, b) - 1;
                      e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
                  },
              };
          });
  var qb = a.location,
      rb = r.now(),
      sb = /\?/;
  r.parseXML = function (b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
          c = new a.DOMParser().parseFromString(b, "text/xml");
      } catch (d) {
          c = void 0;
      }
      return (c && !c.getElementsByTagName("parsererror").length) || r.error("Invalid XML: " + b), c;
  };
  var tb = /\[\]$/,
      ub = /\r?\n/g,
      vb = /^(?:submit|button|image|reset|file)$/i,
      wb = /^(?:input|select|textarea|keygen)/i;
  function xb(a, b, c, d) {
      var e;
      if (r.isArray(b))
          r.each(b, function (b, e) {
              c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
          });
      else if (c || "object" !== r.type(b)) d(a, b);
      else for (e in b) xb(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
      var c,
          d = [],
          e = function (a, b) {
              var c = r.isFunction(b) ? b() : b;
              d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
          };
      if (r.isArray(a) || (a.jquery && !r.isPlainObject(a)))
          r.each(a, function () {
              e(this.name, this.value);
          });
      else for (c in a) xb(c, a[c], b, e);
      return d.join("&");
  }),
      r.fn.extend({
          serialize: function () {
              return r.param(this.serializeArray());
          },
          serializeArray: function () {
              return this.map(function () {
                  var a = r.prop(this, "elements");
                  return a ? r.makeArray(a) : this;
              })
                  .filter(function () {
                      var a = this.type;
                      return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a));
                  })
                  .map(function (a, b) {
                      var c = r(this).val();
                      return null == c
                          ? null
                          : r.isArray(c)
                          ? r.map(c, function (a) {
                                return { name: b.name, value: a.replace(ub, "\r\n") };
                            })
                          : { name: b.name, value: c.replace(ub, "\r\n") };
                  })
                  .get();
          },
      });
  var yb = /%20/g,
      zb = /#.*$/,
      Ab = /([?&])_=[^&]*/,
      Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Db = /^(?:GET|HEAD)$/,
      Eb = /^\/\//,
      Fb = {},
      Gb = {},
      Hb = "*/".concat("*"),
      Ib = d.createElement("a");
  Ib.href = qb.href;
  function Jb(a) {
      return function (b, c) {
          "string" != typeof b && ((c = b), (b = "*"));
          var d,
              e = 0,
              f = b.toLowerCase().match(K) || [];
          if (r.isFunction(c)) while ((d = f[e++])) "+" === d[0] ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      };
  }
  function Kb(a, b, c, d) {
      var e = {},
          f = a === Gb;
      function g(h) {
          var i;
          return (
              (e[h] = !0),
              r.each(a[h] || [], function (a, h) {
                  var j = h(b, c, d);
                  return "string" != typeof j || f || e[j] ? (f ? !(i = j) : void 0) : (b.dataTypes.unshift(j), g(j), !1);
              }),
              i
          );
      }
      return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Lb(a, b) {
      var c,
          d,
          e = r.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && r.extend(!0, a, d), a;
  }
  function Mb(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.contents,
          i = a.dataTypes;
      while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
          for (e in h)
              if (h[e] && h[e].test(d)) {
                  i.unshift(e);
                  break;
              }
      if (i[0] in c) f = i[0];
      else {
          for (e in c) {
              if (!i[0] || a.converters[e + " " + i[0]]) {
                  f = e;
                  break;
              }
              g || (g = e);
          }
          f = f || g;
      }
      if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Nb(a, b, c, d) {
      var e,
          f,
          g,
          h,
          i,
          j = {},
          k = a.dataTypes.slice();
      if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      f = k.shift();
      while (f)
          if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
              if ("*" === f) f = i;
              else if ("*" !== i && i !== f) {
                  if (((g = j[i + " " + f] || j["* " + f]), !g))
                      for (e in j)
                          if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                              g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                              break;
                          }
                  if (g !== !0)
                      if (g && a["throws"]) b = g(b);
                      else
                          try {
                              b = g(b);
                          } catch (l) {
                              return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                          }
              }
      return { state: "success", data: b };
  }
  r.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: qb.href,
          type: "GET",
          isLocal: Cb.test(qb.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
          converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML },
          flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
          return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
      },
      ajaxPrefilter: Jb(Fb),
      ajaxTransport: Jb(Gb),
      ajax: function (b, c) {
          "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
          var e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o = r.ajaxSetup({}, c),
              p = o.context || o,
              q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
              s = r.Deferred(),
              t = r.Callbacks("once memory"),
              u = o.statusCode || {},
              v = {},
              w = {},
              x = "canceled",
              y = {
                  readyState: 0,
                  getResponseHeader: function (a) {
                      var b;
                      if (k) {
                          if (!h) {
                              h = {};
                              while ((b = Bb.exec(g))) h[b[1].toLowerCase()] = b[2];
                          }
                          b = h[a.toLowerCase()];
                      }
                      return null == b ? null : b;
                  },
                  getAllResponseHeaders: function () {
                      return k ? g : null;
                  },
                  setRequestHeader: function (a, b) {
                      return null == k && ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a), (v[a] = b)), this;
                  },
                  overrideMimeType: function (a) {
                      return null == k && (o.mimeType = a), this;
                  },
                  statusCode: function (a) {
                      var b;
                      if (a)
                          if (k) y.always(a[y.status]);
                          else for (b in a) u[b] = [u[b], a[b]];
                      return this;
                  },
                  abort: function (a) {
                      var b = a || x;
                      return e && e.abort(b), A(0, b), this;
                  },
              };
          if (
              (s.promise(y),
              (o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//")),
              (o.type = c.method || c.type || o.method || o.type),
              (o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""]),
              null == o.crossDomain)
          ) {
              j = d.createElement("a");
              try {
                  (j.href = o.url), (j.href = j.href), (o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host);
              } catch (z) {
                  o.crossDomain = !0;
              }
          }
          if ((o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k)) return y;
          (l = r.event && o.global),
              l && 0 === r.active++ && r.event.trigger("ajaxStart"),
              (o.type = o.type.toUpperCase()),
              (o.hasContent = !Db.test(o.type)),
              (f = o.url.replace(zb, "")),
              o.hasContent
                  ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+"))
                  : ((n = o.url.slice(f.length)), o.data && ((f += (sb.test(f) ? "&" : "?") + o.data), delete o.data), o.cache === !1 && ((f = f.replace(Ab, "$1")), (n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n)), (o.url = f + n)),
              o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
              ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
              y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
          for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
          if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
          if (((x = "abort"), t.add(o.complete), y.done(o.success), y.fail(o.error), (e = Kb(Gb, o, c, y)))) {
              if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k)) return y;
              o.async &&
                  o.timeout > 0 &&
                  (i = a.setTimeout(function () {
                      y.abort("timeout");
                  }, o.timeout));
              try {
                  (k = !1), e.send(v, A);
              } catch (z) {
                  if (k) throw z;
                  A(-1, z);
              }
          } else A(-1, "No Transport");
          function A(b, c, d, h) {
              var j,
                  m,
                  n,
                  v,
                  w,
                  x = c;
              k ||
                  ((k = !0),
                  i && a.clearTimeout(i),
                  (e = void 0),
                  (g = h || ""),
                  (y.readyState = b > 0 ? 4 : 0),
                  (j = (b >= 200 && b < 300) || 304 === b),
                  d && (v = Mb(o, y, d)),
                  (v = Nb(o, v, y, j)),
                  j
                      ? (o.ifModified && ((w = y.getResponseHeader("Last-Modified")), w && (r.lastModified[f] = w), (w = y.getResponseHeader("etag")), w && (r.etag[f] = w)),
                        204 === b || "HEAD" === o.type ? (x = "nocontent") : 304 === b ? (x = "notmodified") : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
                      : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
                  (y.status = b),
                  (y.statusText = (c || x) + ""),
                  j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
                  y.statusCode(u),
                  (u = void 0),
                  l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
                  t.fireWith(p, [y, x]),
                  l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
          }
          return y;
      },
      getJSON: function (a, b, c) {
          return r.get(a, b, c, "json");
      },
      getScript: function (a, b) {
          return r.get(a, void 0, b, "script");
      },
  }),
      r.each(["get", "post"], function (a, b) {
          r[b] = function (a, c, d, e) {
              return r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
          };
      }),
      (r._evalUrl = function (a) {
          return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
      }),
      r.fn.extend({
          wrapAll: function (a) {
              var b;
              return (
                  this[0] &&
                      (r.isFunction(a) && (a = a.call(this[0])),
                      (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
                      this[0].parentNode && b.insertBefore(this[0]),
                      b
                          .map(function () {
                              var a = this;
                              while (a.firstElementChild) a = a.firstElementChild;
                              return a;
                          })
                          .append(this)),
                  this
              );
          },
          wrapInner: function (a) {
              return r.isFunction(a)
                  ? this.each(function (b) {
                        r(this).wrapInner(a.call(this, b));
                    })
                  : this.each(function () {
                        var b = r(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a);
                    });
          },
          wrap: function (a) {
              var b = r.isFunction(a);
              return this.each(function (c) {
                  r(this).wrapAll(b ? a.call(this, c) : a);
              });
          },
          unwrap: function (a) {
              return (
                  this.parent(a)
                      .not("body")
                      .each(function () {
                          r(this).replaceWith(this.childNodes);
                      }),
                  this
              );
          },
      }),
      (r.expr.pseudos.hidden = function (a) {
          return !r.expr.pseudos.visible(a);
      }),
      (r.expr.pseudos.visible = function (a) {
          return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
      }),
      (r.ajaxSettings.xhr = function () {
          try {
              return new a.XMLHttpRequest();
          } catch (b) {}
      });
  var Ob = { 0: 200, 1223: 204 },
      Pb = r.ajaxSettings.xhr();
  (o.cors = !!Pb && "withCredentials" in Pb),
      (o.ajax = Pb = !!Pb),
      r.ajaxTransport(function (b) {
          var c, d;
          if (o.cors || (Pb && !b.crossDomain))
              return {
                  send: function (e, f) {
                      var g,
                          h = b.xhr();
                      if ((h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                      b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                      for (g in e) h.setRequestHeader(g, e[g]);
                      (c = function (a) {
                          return function () {
                              c &&
                                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                                  "abort" === a
                                      ? h.abort()
                                      : "error" === a
                                      ? "number" != typeof h.status
                                          ? f(0, "error")
                                          : f(h.status, h.statusText)
                                      : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                          };
                      }),
                          (h.onload = c()),
                          (d = h.onerror = c("error")),
                          void 0 !== h.onabort
                              ? (h.onabort = d)
                              : (h.onreadystatechange = function () {
                                    4 === h.readyState &&
                                        a.setTimeout(function () {
                                            c && d();
                                        });
                                }),
                          (c = c("abort"));
                      try {
                          h.send((b.hasContent && b.data) || null);
                      } catch (i) {
                          if (c) throw i;
                      }
                  },
                  abort: function () {
                      c && c();
                  },
              };
      }),
      r.ajaxPrefilter(function (a) {
          a.crossDomain && (a.contents.script = !1);
      }),
      r.ajaxSetup({
          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
              "text script": function (a) {
                  return r.globalEval(a), a;
              },
          },
      }),
      r.ajaxPrefilter("script", function (a) {
          void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
      }),
      r.ajaxTransport("script", function (a) {
          if (a.crossDomain) {
              var b, c;
              return {
                  send: function (e, f) {
                      (b = r("<script>")
                          .prop({ charset: a.scriptCharset, src: a.url })
                          .on(
                              "load error",
                              (c = function (a) {
                                  b.remove(), (c = null), a && f("error" === a.type ? 404 : 200, a.type);
                              })
                          )),
                          d.head.appendChild(b[0]);
                  },
                  abort: function () {
                      c && c();
                  },
              };
          }
      });
  var Qb = [],
      Rb = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
          var a = Qb.pop() || r.expando + "_" + rb++;
          return (this[a] = !0), a;
      },
  }),
      r.ajaxPrefilter("json jsonp", function (b, c, d) {
          var e,
              f,
              g,
              h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
          if (h || "jsonp" === b.dataTypes[0])
              return (
                  (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                  h ? (b[h] = b[h].replace(Rb, "$1" + e)) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function () {
                      return g || r.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function () {
                      g = arguments;
                  }),
                  d.always(function () {
                      void 0 === f ? r(a).removeProp(e) : (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), Qb.push(e)), g && r.isFunction(f) && f(g[0]), (g = f = void 0);
                  }),
                  "script"
              );
      }),
      (o.createHTMLDocument = (function () {
          var a = d.implementation.createHTMLDocument("").body;
          return (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length;
      })()),
      (r.parseHTML = function (a, b, c) {
          if ("string" != typeof a) return [];
          "boolean" == typeof b && ((c = b), (b = !1));
          var e, f, g;
          return (
              b || (o.createHTMLDocument ? ((b = d.implementation.createHTMLDocument("")), (e = b.createElement("base")), (e.href = d.location.href), b.head.appendChild(e)) : (b = d)),
              (f = B.exec(a)),
              (g = !c && []),
              f ? [b.createElement(f[1])] : ((f = pa([a], b, g)), g && g.length && r(g).remove(), r.merge([], f.childNodes))
          );
      }),
      (r.fn.load = function (a, b, c) {
          var d,
              e,
              f,
              g = this,
              h = a.indexOf(" ");
          return (
              h > -1 && ((d = mb(a.slice(h))), (a = a.slice(0, h))),
              r.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (e = "POST"),
              g.length > 0 &&
                  r
                      .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
                      .done(function (a) {
                          (f = arguments), g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
                      })
                      .always(
                          c &&
                              function (a, b) {
                                  g.each(function () {
                                      c.apply(this, f || [a.responseText, b, a]);
                                  });
                              }
                      ),
              this
          );
      }),
      r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
          r.fn[b] = function (a) {
              return this.on(b, a);
          };
      }),
      (r.expr.pseudos.animated = function (a) {
          return r.grep(r.timers, function (b) {
              return a === b.elem;
          }).length;
      });
  function Sb(a) {
      return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (r.offset = {
      setOffset: function (a, b, c) {
          var d,
              e,
              f,
              g,
              h,
              i,
              j,
              k = r.css(a, "position"),
              l = r(a),
              m = {};
          "static" === k && (a.style.position = "relative"),
              (h = l.offset()),
              (f = r.css(a, "top")),
              (i = r.css(a, "left")),
              (j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
              j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
              r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
              null != b.top && (m.top = b.top - h.top + g),
              null != b.left && (m.left = b.left - h.left + e),
              "using" in b ? b.using.call(a, m) : l.css(m);
      },
  }),
      r.fn.extend({
          offset: function (a) {
              if (arguments.length)
                  return void 0 === a
                      ? this
                      : this.each(function (b) {
                            r.offset.setOffset(this, a, b);
                        });
              var b,
                  c,
                  d,
                  e,
                  f = this[0];
              if (f)
                  return f.getClientRects().length
                      ? ((d = f.getBoundingClientRect()), d.width || d.height ? ((e = f.ownerDocument), (c = Sb(e)), (b = e.documentElement), { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d)
                      : { top: 0, left: 0 };
          },
          position: function () {
              if (this[0]) {
                  var a,
                      b,
                      c = this[0],
                      d = { top: 0, left: 0 };
                  return (
                      "fixed" === r.css(c, "position")
                          ? (b = c.getBoundingClientRect())
                          : ((a = this.offsetParent()), (b = this.offset()), r.nodeName(a[0], "html") || (d = a.offset()), (d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) })),
                      { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) }
                  );
              }
          },
          offsetParent: function () {
              return this.map(function () {
                  var a = this.offsetParent;
                  while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                  return a || qa;
              });
          },
      }),
      r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
          var c = "pageYOffset" === b;
          r.fn[a] = function (d) {
              return S(
                  this,
                  function (a, d, e) {
                      var f = Sb(a);
                      return void 0 === e ? (f ? f[b] : a[d]) : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : (a[d] = e));
                  },
                  a,
                  d,
                  arguments.length
              );
          };
      }),
      r.each(["top", "left"], function (a, b) {
          r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
              if (c) return (c = Na(a, b)), La.test(c) ? r(a).position()[b] + "px" : c;
          });
      }),
      r.each({ Height: "height", Width: "width" }, function (a, b) {
          r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
              r.fn[d] = function (e, f) {
                  var g = arguments.length && (c || "boolean" != typeof e),
                      h = c || (e === !0 || f === !0 ? "margin" : "border");
                  return S(
                      this,
                      function (b, c, e) {
                          var f;
                          return r.isWindow(b)
                              ? 0 === d.indexOf("outer")
                                  ? b["inner" + a]
                                  : b.document.documentElement["client" + a]
                              : 9 === b.nodeType
                              ? ((f = b.documentElement), Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a]))
                              : void 0 === e
                              ? r.css(b, c, h)
                              : r.style(b, c, e, h);
                      },
                      b,
                      g ? e : void 0,
                      g
                  );
              };
          });
      }),
      r.fn.extend({
          bind: function (a, b, c) {
              return this.on(a, null, b, c);
          },
          unbind: function (a, b) {
              return this.off(a, null, b);
          },
          delegate: function (a, b, c, d) {
              return this.on(b, a, c, d);
          },
          undelegate: function (a, b, c) {
              return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
          },
      }),
      (r.parseJSON = JSON.parse),
      "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
              return r;
          });
  var Tb = a.jQuery,
      Ub = a.$;
  return (
      (r.noConflict = function (b) {
          return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
      }),
      b || (a.jQuery = a.$ = r),
      r
  );
});
// PopperJS
/*
Copyright (C) Federico Zivolo 2019
Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/ (function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Popper = t());
})(this, function () {
  "use strict";
  function e(e) {
      return e && "[object Function]" === {}.toString.call(e);
  }
  function t(e, t) {
      if (1 !== e.nodeType) return [];
      var o = e.ownerDocument.defaultView,
          n = o.getComputedStyle(e, null);
      return t ? n[t] : n;
  }
  function o(e) {
      return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
          case "HTML":
          case "BODY":
              return e.ownerDocument.body;
          case "#document":
              return e.body;
      }
      var i = t(e),
          r = i.overflow,
          p = i.overflowX,
          s = i.overflowY;
      return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
      return 11 === e ? pe : 10 === e ? se : pe || se;
  }
  function p(e) {
      if (!e) return document.documentElement;
      for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
      var i = n && n.nodeName;
      return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? p(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
  }
  function s(e) {
      var t = e.nodeName;
      return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
  }
  function d(e) {
      return null === e.parentNode ? e : d(e.parentNode);
  }
  function a(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          n = o ? e : t,
          i = o ? t : e,
          r = document.createRange();
      r.setStart(n, 0), r.setEnd(i, 0);
      var l = r.commonAncestorContainer;
      if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
      var f = d(e);
      return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
          o = "top" === t ? "scrollTop" : "scrollLeft",
          n = e.nodeName;
      if ("BODY" === n || "HTML" === n) {
          var i = e.ownerDocument.documentElement,
              r = e.ownerDocument.scrollingElement || i;
          return r[o];
      }
      return e[o];
  }
  function f(e, t) {
      var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          n = l(t, "top"),
          i = l(t, "left"),
          r = o ? -1 : 1;
      return (e.top += n * r), (e.bottom += n * r), (e.left += i * r), (e.right += i * r), e;
  }
  function m(e, t) {
      var o = "x" === t ? "Left" : "Top",
          n = "Left" == o ? "Right" : "Bottom";
      return parseFloat(e["border" + o + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10);
  }
  function h(e, t, o, n) {
      return ee(
          t["offset" + e],
          t["scroll" + e],
          o["client" + e],
          o["offset" + e],
          o["scroll" + e],
          r(10) ? parseInt(o["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
      );
  }
  function c(e) {
      var t = e.body,
          o = e.documentElement,
          n = r(10) && getComputedStyle(o);
      return { height: h("Height", t, o, n), width: h("Width", t, o, n) };
  }
  function g(e) {
      return fe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }
  function u(e) {
      var o = {};
      try {
          if (r(10)) {
              o = e.getBoundingClientRect();
              var n = l(e, "top"),
                  i = l(e, "left");
              (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
          } else o = e.getBoundingClientRect();
      } catch (t) {}
      var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
          s = "HTML" === e.nodeName ? c(e.ownerDocument) : {},
          d = s.width || e.clientWidth || p.right - p.left,
          a = s.height || e.clientHeight || p.bottom - p.top,
          f = e.offsetWidth - d,
          h = e.offsetHeight - a;
      if (f || h) {
          var u = t(e);
          (f -= m(u, "x")), (h -= m(u, "y")), (p.width -= f), (p.height -= h);
      }
      return g(p);
  }
  function b(e, o) {
      var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
          p = r(10),
          s = "HTML" === o.nodeName,
          d = u(e),
          a = u(o),
          l = n(e),
          m = t(o),
          h = parseFloat(m.borderTopWidth, 10),
          c = parseFloat(m.borderLeftWidth, 10);
      i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
      var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });
      if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
          var w = parseFloat(m.marginTop, 10),
              y = parseFloat(m.marginLeft, 10);
          (b.top -= h - w), (b.bottom -= h - w), (b.left -= c - y), (b.right -= c - y), (b.marginTop = w), (b.marginLeft = y);
      }
      return (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) && (b = f(b, o)), b;
  }
  function w(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          o = e.ownerDocument.documentElement,
          n = b(e, o),
          i = ee(o.clientWidth, window.innerWidth || 0),
          r = ee(o.clientHeight, window.innerHeight || 0),
          p = t ? 0 : l(o),
          s = t ? 0 : l(o, "left"),
          d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };
      return g(d);
  }
  function y(e) {
      var n = e.nodeName;
      if ("BODY" === n || "HTML" === n) return !1;
      if ("fixed" === t(e, "position")) return !0;
      var i = o(e);
      return !!i && y(i);
  }
  function E(e) {
      if (!e || !e.parentElement || r()) return document.documentElement;
      for (var o = e.parentElement; o && "none" === t(o, "transform"); ) o = o.parentElement;
      return o || document.documentElement;
  }
  function v(e, t, i, r) {
      var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
          s = { top: 0, left: 0 },
          d = p ? E(e) : a(e, t);
      if ("viewport" === r) s = w(d, p);
      else {
          var l;
          "scrollParent" === r ? ((l = n(o(t))), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : "window" === r ? (l = e.ownerDocument.documentElement) : (l = r);
          var f = b(l, d, p);
          if ("HTML" === l.nodeName && !y(d)) {
              var m = c(e.ownerDocument),
                  h = m.height,
                  g = m.width;
              (s.top += f.top - f.marginTop), (s.bottom = h + f.top), (s.left += f.left - f.marginLeft), (s.right = g + f.left);
          } else s = f;
      }
      i = i || 0;
      var u = "number" == typeof i;
      return (s.left += u ? i : i.left || 0), (s.top += u ? i : i.top || 0), (s.right -= u ? i : i.right || 0), (s.bottom -= u ? i : i.bottom || 0), s;
  }
  function x(e) {
      var t = e.width,
          o = e.height;
      return t * o;
  }
  function O(e, t, o, n, i) {
      var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === e.indexOf("auto")) return e;
      var p = v(o, n, r, i),
          s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
          d = Object.keys(s)
              .map(function (e) {
                  return fe({ key: e }, s[e], { area: x(s[e]) });
              })
              .sort(function (e, t) {
                  return t.area - e.area;
              }),
          a = d.filter(function (e) {
              var t = e.width,
                  n = e.height;
              return t >= o.clientWidth && n >= o.clientHeight;
          }),
          l = 0 < a.length ? a[0].key : d[0].key,
          f = e.split("-")[1];
      return l + (f ? "-" + f : "");
  }
  function L(e, t, o) {
      var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
          i = n ? E(t) : a(t, o);
      return b(o, i, n);
  }
  function S(e) {
      var t = e.ownerDocument.defaultView,
          o = t.getComputedStyle(e),
          n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0),
          i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0),
          r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
      return r;
  }
  function T(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
      });
  }
  function D(e, t, o) {
      o = o.split("-")[0];
      var n = S(e),
          i = { width: n.width, height: n.height },
          r = -1 !== ["right", "left"].indexOf(o),
          p = r ? "top" : "left",
          s = r ? "left" : "top",
          d = r ? "height" : "width",
          a = r ? "width" : "height";
      return (i[p] = t[p] + t[d] / 2 - n[d] / 2), (i[s] = o === s ? t[s] - n[a] : t[T(s)]), i;
  }
  function C(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
      if (Array.prototype.findIndex)
          return e.findIndex(function (e) {
              return e[t] === o;
          });
      var n = C(e, function (e) {
          return e[t] === o;
      });
      return e.indexOf(n);
  }
  function P(t, o, n) {
      var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
      return (
          i.forEach(function (t) {
              t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
              var n = t["function"] || t.fn;
              t.enabled && e(n) && ((o.offsets.popper = g(o.offsets.popper)), (o.offsets.reference = g(o.offsets.reference)), (o = n(o, t)));
          }),
          o
      );
  }
  function k() {
      if (!this.state.isDestroyed) {
          var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
          (e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed)),
              (e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = D(this.popper, e.offsets.reference, e.placement)),
              (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
              (e = P(this.modifiers, e)),
              this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
  }
  function W(e, t) {
      return e.some(function (e) {
          var o = e.name,
              n = e.enabled;
          return n && o === t;
      });
  }
  function H(e) {
      for (var t = [!1, "ms", "Webkit", "Moz", "O"], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
          var i = t[n],
              r = i ? "" + i + o : e;
          if ("undefined" != typeof document.body.style[r]) return r;
      }
      return null;
  }
  function B() {
      return (
          (this.state.isDestroyed = !0),
          W(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[H("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
      );
  }
  function A(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
      var r = "BODY" === e.nodeName,
          p = r ? e.ownerDocument.defaultView : e;
      p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }
  function F(e, t, o, i) {
      (o.updateBound = i), A(e).addEventListener("resize", o.updateBound, { passive: !0 });
      var r = n(e);
      return M(r, "scroll", o.updateBound, o.scrollParents), (o.scrollElement = r), (o.eventsEnabled = !0), o;
  }
  function I() {
      this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function R(e, t) {
      return (
          A(e).removeEventListener("resize", t.updateBound),
          t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t
      );
  }
  function U() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
      return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function j(e, t) {
      Object.keys(t).forEach(function (o) {
          var n = "";
          -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && Y(t[o]) && (n = "px"), (e.style[o] = t[o] + n);
      });
  }
  function V(e, t) {
      Object.keys(t).forEach(function (o) {
          var n = t[o];
          !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
      });
  }
  function q(e, t) {
      var o = e.offsets,
          n = o.popper,
          i = o.reference,
          r = $,
          p = function (e) {
              return e;
          },
          s = r(i.width),
          d = r(n.width),
          a = -1 !== ["left", "right"].indexOf(e.placement),
          l = -1 !== e.placement.indexOf("-"),
          f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p,
          m = t ? r : p;
      return { left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right) };
  }
  function K(e, t, o) {
      var n = C(e, function (e) {
              var o = e.name;
              return o === t;
          }),
          i =
              !!n &&
              e.some(function (e) {
                  return e.name === o && e.enabled && e.order < n.order;
              });
      if (!i) {
          var r = "`" + t + "`";
          console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
      }
      return i;
  }
  function z(e) {
      return "end" === e ? "start" : "start" === e ? "end" : e;
  }
  function G(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          o = ce.indexOf(e),
          n = ce.slice(o + 1).concat(ce.slice(0, o));
      return t ? n.reverse() : n;
  }
  function _(e, t, o, n) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          r = +i[1],
          p = i[2];
      if (!r) return e;
      if (0 === p.indexOf("%")) {
          var s;
          switch (p) {
              case "%p":
                  s = o;
                  break;
              case "%":
              case "%r":
              default:
                  s = n;
          }
          var d = g(s);
          return (d[t] / 100) * r;
      }
      if ("vh" === p || "vw" === p) {
          var a;
          return (a = "vh" === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0)), (a / 100) * r;
      }
      return r;
  }
  function X(e, t, o, n) {
      var i = [0, 0],
          r = -1 !== ["right", "left"].indexOf(n),
          p = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
          }),
          s = p.indexOf(
              C(p, function (e) {
                  return -1 !== e.search(/,|\s/);
              })
          );
      p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var d = /\s*,\s*|\s+/,
          a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
      return (
          (a = a.map(function (e, n) {
              var i = (1 === n ? !r : r) ? "height" : "width",
                  p = !1;
              return e
                  .reduce(function (e, t) {
                      return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (p = !0), e) : p ? ((e[e.length - 1] += t), (p = !1), e) : e.concat(t);
                  }, [])
                  .map(function (e) {
                      return _(e, i, t, o);
                  });
          })),
          a.forEach(function (e, t) {
              e.forEach(function (o, n) {
                  Y(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
              });
          }),
          i
      );
  }
  function J(e, t) {
      var o,
          n = t.offset,
          i = e.placement,
          r = e.offsets,
          p = r.popper,
          s = r.reference,
          d = i.split("-")[0];
      return (
          (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
          "left" === d ? ((p.top += o[0]), (p.left -= o[1])) : "right" === d ? ((p.top += o[0]), (p.left += o[1])) : "top" === d ? ((p.left += o[0]), (p.top -= o[1])) : "bottom" === d && ((p.left += o[0]), (p.top += o[1])),
          (e.popper = p),
          e
      );
  }
  for (var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document, oe = ["Edge", "Trident", "Firefox"], ne = 0, ie = 0; ie < oe.length; ie += 1)
      if (te && 0 <= navigator.userAgent.indexOf(oe[ie])) {
          ne = 1;
          break;
      }
  var i = te && window.Promise,
      re = i
          ? function (e) {
                var t = !1;
                return function () {
                    t ||
                        ((t = !0),
                        window.Promise.resolve().then(function () {
                            (t = !1), e();
                        }));
                };
            }
          : function (e) {
                var t = !1;
                return function () {
                    t ||
                        ((t = !0),
                        setTimeout(function () {
                            (t = !1), e();
                        }, ne));
                };
            },
      pe = te && !!(window.MSInputMethodContext && document.documentMode),
      se = te && /MSIE 10/.test(navigator.userAgent),
      de = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      },
      ae = (function () {
          function e(e, t) {
              for (var o, n = 0; n < t.length; n++) (o = t[n]), (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
          }
          return function (t, o, n) {
              return o && e(t.prototype, o), n && e(t, n), t;
          };
      })(),
      le = function (e, t, o) {
          return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
      },
      fe =
          Object.assign ||
          function (e) {
              for (var t, o = 1; o < arguments.length; o++) for (var n in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
          },
      me = te && /Firefox/i.test(navigator.userAgent),
      he = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      ce = he.slice(3),
      ge = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" },
      ue = (function () {
          function t(o, n) {
              var i = this,
                  r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
              de(this, t),
                  (this.scheduleUpdate = function () {
                      return requestAnimationFrame(i.update);
                  }),
                  (this.update = re(this.update.bind(this))),
                  (this.options = fe({}, t.Defaults, r)),
                  (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                  (this.reference = o && o.jquery ? o[0] : o),
                  (this.popper = n && n.jquery ? n[0] : n),
                  (this.options.modifiers = {}),
                  Object.keys(fe({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                      i.options.modifiers[e] = fe({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
                  }),
                  (this.modifiers = Object.keys(this.options.modifiers)
                      .map(function (e) {
                          return fe({ name: e }, i.options.modifiers[e]);
                      })
                      .sort(function (e, t) {
                          return e.order - t.order;
                      })),
                  this.modifiers.forEach(function (t) {
                      t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
                  }),
                  this.update();
              var p = this.options.eventsEnabled;
              p && this.enableEventListeners(), (this.state.eventsEnabled = p);
          }
          return (
              ae(t, [
                  {
                      key: "update",
                      value: function () {
                          return k.call(this);
                      },
                  },
                  {
                      key: "destroy",
                      value: function () {
                          return B.call(this);
                      },
                  },
                  {
                      key: "enableEventListeners",
                      value: function () {
                          return I.call(this);
                      },
                  },
                  {
                      key: "disableEventListeners",
                      value: function () {
                          return U.call(this);
                      },
                  },
              ]),
              t
          );
      })();
  return (
      (ue.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
      (ue.placements = he),
      (ue.Defaults = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
              shift: {
                  order: 100,
                  enabled: !0,
                  fn: function (e) {
                      var t = e.placement,
                          o = t.split("-")[0],
                          n = t.split("-")[1];
                      if (n) {
                          var i = e.offsets,
                              r = i.reference,
                              p = i.popper,
                              s = -1 !== ["bottom", "top"].indexOf(o),
                              d = s ? "left" : "top",
                              a = s ? "width" : "height",
                              l = { start: le({}, d, r[d]), end: le({}, d, r[d] + r[a] - p[a]) };
                          e.offsets.popper = fe({}, p, l[n]);
                      }
                      return e;
                  },
              },
              offset: { order: 200, enabled: !0, fn: J, offset: 0 },
              preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function (e, t) {
                      var o = t.boundariesElement || p(e.instance.popper);
                      e.instance.reference === o && (o = p(o));
                      var n = H("transform"),
                          i = e.instance.popper.style,
                          r = i.top,
                          s = i.left,
                          d = i[n];
                      (i.top = ""), (i.left = ""), (i[n] = "");
                      var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                      (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
                      var l = t.priority,
                          f = e.offsets.popper,
                          m = {
                              primary: function (e) {
                                  var o = f[e];
                                  return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), le({}, e, o);
                              },
                              secondary: function (e) {
                                  var o = "right" === e ? "left" : "top",
                                      n = f[o];
                                  return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ("right" === e ? f.width : f.height))), le({}, o, n);
                              },
                          };
                      return (
                          l.forEach(function (e) {
                              var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                              f = fe({}, f, m[t](e));
                          }),
                          (e.offsets.popper = f),
                          e
                      );
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent",
              },
              keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function (e) {
                      var t = e.offsets,
                          o = t.popper,
                          n = t.reference,
                          i = e.placement.split("-")[0],
                          r = Z,
                          p = -1 !== ["top", "bottom"].indexOf(i),
                          s = p ? "right" : "bottom",
                          d = p ? "left" : "top",
                          a = p ? "width" : "height";
                      return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
                  },
              },
              arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function (e, o) {
                      var n;
                      if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                      var i = o.element;
                      if ("string" == typeof i) {
                          if (((i = e.instance.popper.querySelector(i)), !i)) return e;
                      } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                      var r = e.placement.split("-")[0],
                          p = e.offsets,
                          s = p.popper,
                          d = p.reference,
                          a = -1 !== ["left", "right"].indexOf(r),
                          l = a ? "height" : "width",
                          f = a ? "Top" : "Left",
                          m = f.toLowerCase(),
                          h = a ? "left" : "top",
                          c = a ? "bottom" : "right",
                          u = S(i)[l];
                      d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), (e.offsets.popper = g(e.offsets.popper));
                      var b = d[m] + d[l] / 2 - u / 2,
                          w = t(e.instance.popper),
                          y = parseFloat(w["margin" + f], 10),
                          E = parseFloat(w["border" + f + "Width"], 10),
                          v = b - e.offsets.popper[m] - y - E;
                      return (v = ee(Q(s[l] - u, v), 0)), (e.arrowElement = i), (e.offsets.arrow = ((n = {}), le(n, m, $(v)), le(n, h, ""), n)), e;
                  },
                  element: "[x-arrow]",
              },
              flip: {
                  order: 600,
                  enabled: !0,
                  fn: function (e, t) {
                      if (W(e.instance.modifiers, "inner")) return e;
                      if (e.flipped && e.placement === e.originalPlacement) return e;
                      var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                          n = e.placement.split("-")[0],
                          i = T(n),
                          r = e.placement.split("-")[1] || "",
                          p = [];
                      switch (t.behavior) {
                          case ge.FLIP:
                              p = [n, i];
                              break;
                          case ge.CLOCKWISE:
                              p = G(n);
                              break;
                          case ge.COUNTERCLOCKWISE:
                              p = G(n, !0);
                              break;
                          default:
                              p = t.behavior;
                      }
                      return (
                          p.forEach(function (s, d) {
                              if (n !== s || p.length === d + 1) return e;
                              (n = e.placement.split("-")[0]), (i = T(n));
                              var a = e.offsets.popper,
                                  l = e.offsets.reference,
                                  f = Z,
                                  m = ("left" === n && f(a.right) > f(l.left)) || ("right" === n && f(a.left) < f(l.right)) || ("top" === n && f(a.bottom) > f(l.top)) || ("bottom" === n && f(a.top) < f(l.bottom)),
                                  h = f(a.left) < f(o.left),
                                  c = f(a.right) > f(o.right),
                                  g = f(a.top) < f(o.top),
                                  u = f(a.bottom) > f(o.bottom),
                                  b = ("left" === n && h) || ("right" === n && c) || ("top" === n && g) || ("bottom" === n && u),
                                  w = -1 !== ["top", "bottom"].indexOf(n),
                                  y = !!t.flipVariations && ((w && "start" === r && h) || (w && "end" === r && c) || (!w && "start" === r && g) || (!w && "end" === r && u));
                              (m || b || y) &&
                                  ((e.flipped = !0),
                                  (m || b) && (n = p[d + 1]),
                                  y && (r = z(r)),
                                  (e.placement = n + (r ? "-" + r : "")),
                                  (e.offsets.popper = fe({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement))),
                                  (e = P(e.instance.modifiers, e, "flip")));
                          }),
                          e
                      );
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport",
              },
              inner: {
                  order: 700,
                  enabled: !1,
                  fn: function (e) {
                      var t = e.placement,
                          o = t.split("-")[0],
                          n = e.offsets,
                          i = n.popper,
                          r = n.reference,
                          p = -1 !== ["left", "right"].indexOf(o),
                          s = -1 === ["top", "left"].indexOf(o);
                      return (i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0)), (e.placement = T(t)), (e.offsets.popper = g(i)), e;
                  },
              },
              hide: {
                  order: 800,
                  enabled: !0,
                  fn: function (e) {
                      if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                      var t = e.offsets.reference,
                          o = C(e.instance.modifiers, function (e) {
                              return "preventOverflow" === e.name;
                          }).boundaries;
                      if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                          if (!0 === e.hide) return e;
                          (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                      } else {
                          if (!1 === e.hide) return e;
                          (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                      }
                      return e;
                  },
              },
              computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function (e, t) {
                      var o = t.x,
                          n = t.y,
                          i = e.offsets.popper,
                          r = C(e.instance.modifiers, function (e) {
                              return "applyStyle" === e.name;
                          }).gpuAcceleration;
                      void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                      var s,
                          d,
                          a = void 0 === r ? t.gpuAcceleration : r,
                          l = p(e.instance.popper),
                          f = u(l),
                          m = { position: i.position },
                          h = q(e, 2 > window.devicePixelRatio || !me),
                          c = "bottom" === o ? "top" : "bottom",
                          g = "right" === n ? "left" : "right",
                          b = H("transform");
                      if (
                          ((d = "bottom" == c ? ("HTML" === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom) : h.top),
                          (s = "right" == g ? ("HTML" === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right) : h.left),
                          a && b)
                      )
                          (m[b] = "translate3d(" + s + "px, " + d + "px, 0)"), (m[c] = 0), (m[g] = 0), (m.willChange = "transform");
                      else {
                          var w = "bottom" == c ? -1 : 1,
                              y = "right" == g ? -1 : 1;
                          (m[c] = d * w), (m[g] = s * y), (m.willChange = c + ", " + g);
                      }
                      var E = { "x-placement": e.placement };
                      return (e.attributes = fe({}, E, e.attributes)), (e.styles = fe({}, m, e.styles)), (e.arrowStyles = fe({}, e.offsets.arrow, e.arrowStyles)), e;
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right",
              },
              applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function (e) {
                      return j(e.instance.popper, e.styles), V(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
                  },
                  onLoad: function (e, t, o, n, i) {
                      var r = L(i, t, e, o.positionFixed),
                          p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                      return t.setAttribute("x-placement", p), j(t, { position: o.positionFixed ? "fixed" : "absolute" }), o;
                  },
                  gpuAcceleration: void 0,
              },
          },
      }),
      ue
  );
});
//# sourceMappingURL=popper.min.js.map

/*------------ //////// ---------------*/

/*!
* Bootstrap v4.3.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, g, u) {
  "use strict";
  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
  }
  function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(o) {
      for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
              e = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
              (e = e.concat(
                  Object.getOwnPropertySymbols(r).filter(function (t) {
                      return Object.getOwnPropertyDescriptor(r, t).enumerable;
                  })
              )),
              e.forEach(function (t) {
                  var e, n, i;
                  (e = o), (i = r[(n = t)]), n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = i);
              });
      }
      return o;
  }
  (g = g && g.hasOwnProperty("default") ? g.default : g), (u = u && u.hasOwnProperty("default") ? u.default : u);
  var e = "transitionend";
  function n(t) {
      var e = this,
          n = !1;
      return (
          g(this).one(_.TRANSITION_END, function () {
              n = !0;
          }),
          setTimeout(function () {
              n || _.triggerTransitionEnd(e);
          }, t),
          this
      );
  }
  var _ = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
      },
      getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          if (!e || "#" === e) {
              var n = t.getAttribute("href");
              e = n && "#" !== n ? n.trim() : "";
          }
          try {
              return document.querySelector(e) ? e : null;
          } catch (t) {
              return null;
          }
      },
      getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = g(t).css("transition-duration"),
              n = g(t).css("transition-delay"),
              i = parseFloat(e),
              o = parseFloat(n);
          return i || o ? ((e = e.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
      },
      reflow: function (t) {
          return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
          g(t).trigger(e);
      },
      supportsTransitionEnd: function () {
          return Boolean(e);
      },
      isElement: function (t) {
          return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, n) {
          for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                  var o = n[i],
                      r = e[i],
                      s =
                          r && _.isElement(r)
                              ? "element"
                              : ((a = r),
                                {}.toString
                                    .call(a)
                                    .match(/\s([a-z]+)/i)[1]
                                    .toLowerCase());
                  if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
              }
          var a;
      },
      findShadowRoot: function (t) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
      },
  };
  (g.fn.emulateTransitionEnd = n),
      (g.event.special[_.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
              if (g(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
          },
      });
  var o = "alert",
      r = "bs.alert",
      a = "." + r,
      c = g.fn[o],
      h = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" },
      f = "alert",
      d = "fade",
      m = "show",
      p = (function () {
          function i(t) {
              this._element = t;
          }
          var t = i.prototype;
          return (
              (t.close = function (t) {
                  var e = this._element;
                  t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
              }),
              (t.dispose = function () {
                  g.removeData(this._element, r), (this._element = null);
              }),
              (t._getRootElement = function (t) {
                  var e = _.getSelectorFromElement(t),
                      n = !1;
                  return e && (n = document.querySelector(e)), n || (n = g(t).closest("." + f)[0]), n;
              }),
              (t._triggerCloseEvent = function (t) {
                  var e = g.Event(h.CLOSE);
                  return g(t).trigger(e), e;
              }),
              (t._removeElement = function (e) {
                  var n = this;
                  if ((g(e).removeClass(m), g(e).hasClass(d))) {
                      var t = _.getTransitionDurationFromElement(e);
                      g(e)
                          .one(_.TRANSITION_END, function (t) {
                              return n._destroyElement(e, t);
                          })
                          .emulateTransitionEnd(t);
                  } else this._destroyElement(e);
              }),
              (t._destroyElement = function (t) {
                  g(t).detach().trigger(h.CLOSED).remove();
              }),
              (i._jQueryInterface = function (n) {
                  return this.each(function () {
                      var t = g(this),
                          e = t.data(r);
                      e || ((e = new i(this)), t.data(r, e)), "close" === n && e[n](this);
                  });
              }),
              (i._handleDismiss = function (e) {
                  return function (t) {
                      t && t.preventDefault(), e.close(this);
                  };
              }),
              s(i, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
              ]),
              i
          );
      })();
  g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
      (g.fn[o] = p._jQueryInterface),
      (g.fn[o].Constructor = p),
      (g.fn[o].noConflict = function () {
          return (g.fn[o] = c), p._jQueryInterface;
      });
  var v = "button",
      y = "bs.button",
      E = "." + y,
      C = ".data-api",
      T = g.fn[v],
      S = "active",
      b = "btn",
      I = "focus",
      D = '[data-toggle^="button"]',
      w = '[data-toggle="buttons"]',
      A = 'input:not([type="hidden"])',
      N = ".active",
      O = ".btn",
      k = { CLICK_DATA_API: "click" + E + C, FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C },
      P = (function () {
          function n(t) {
              this._element = t;
          }
          var t = n.prototype;
          return (
              (t.toggle = function () {
                  var t = !0,
                      e = !0,
                      n = g(this._element).closest(w)[0];
                  if (n) {
                      var i = this._element.querySelector(A);
                      if (i) {
                          if ("radio" === i.type)
                              if (i.checked && this._element.classList.contains(S)) t = !1;
                              else {
                                  var o = n.querySelector(N);
                                  o && g(o).removeClass(S);
                              }
                          if (t) {
                              if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                              (i.checked = !this._element.classList.contains(S)), g(i).trigger("change");
                          }
                          i.focus(), (e = !1);
                      }
                  }
                  e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)), t && g(this._element).toggleClass(S);
              }),
              (t.dispose = function () {
                  g.removeData(this._element, y), (this._element = null);
              }),
              (n._jQueryInterface = function (e) {
                  return this.each(function () {
                      var t = g(this).data(y);
                      t || ((t = new n(this)), g(this).data(y, t)), "toggle" === e && t[e]();
                  });
              }),
              s(n, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
              ]),
              n
          );
      })();
  g(document)
      .on(k.CLICK_DATA_API, D, function (t) {
          t.preventDefault();
          var e = t.target;
          g(e).hasClass(b) || (e = g(e).closest(O)), P._jQueryInterface.call(g(e), "toggle");
      })
      .on(k.FOCUS_BLUR_DATA_API, D, function (t) {
          var e = g(t.target).closest(O)[0];
          g(e).toggleClass(I, /^focus(in)?$/.test(t.type));
      }),
      (g.fn[v] = P._jQueryInterface),
      (g.fn[v].Constructor = P),
      (g.fn[v].noConflict = function () {
          return (g.fn[v] = T), P._jQueryInterface;
      });
  var L = "carousel",
      j = "bs.carousel",
      H = "." + j,
      R = ".data-api",
      x = g.fn[L],
      F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      U = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      W = "next",
      q = "prev",
      M = "left",
      K = "right",
      Q = {
          SLIDE: "slide" + H,
          SLID: "slid" + H,
          KEYDOWN: "keydown" + H,
          MOUSEENTER: "mouseenter" + H,
          MOUSELEAVE: "mouseleave" + H,
          TOUCHSTART: "touchstart" + H,
          TOUCHMOVE: "touchmove" + H,
          TOUCHEND: "touchend" + H,
          POINTERDOWN: "pointerdown" + H,
          POINTERUP: "pointerup" + H,
          DRAG_START: "dragstart" + H,
          LOAD_DATA_API: "load" + H + R,
          CLICK_DATA_API: "click" + H + R,
      },
      B = "carousel",
      V = "active",
      Y = "slide",
      z = "carousel-item-right",
      X = "carousel-item-left",
      $ = "carousel-item-next",
      G = "carousel-item-prev",
      J = "pointer-event",
      Z = ".active",
      tt = ".active.carousel-item",
      et = ".carousel-item",
      nt = ".carousel-item img",
      it = ".carousel-item-next, .carousel-item-prev",
      ot = ".carousel-indicators",
      rt = "[data-slide], [data-slide-to]",
      st = '[data-ride="carousel"]',
      at = { TOUCH: "touch", PEN: "pen" },
      lt = (function () {
          function r(t, e) {
              (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this.touchStartX = 0),
                  (this.touchDeltaX = 0),
                  (this._config = this._getConfig(e)),
                  (this._element = t),
                  (this._indicatorsElement = this._element.querySelector(ot)),
                  (this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints),
                  (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                  this._addEventListeners();
          }
          var t = r.prototype;
          return (
              (t.next = function () {
                  this._isSliding || this._slide(W);
              }),
              (t.nextWhenVisible = function () {
                  !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next();
              }),
              (t.prev = function () {
                  this._isSliding || this._slide(q);
              }),
              (t.pause = function (t) {
                  t || (this._isPaused = !0), this._element.querySelector(it) && (_.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
              }),
              (t.cycle = function (t) {
                  t || (this._isPaused = !1),
                      this._interval && (clearInterval(this._interval), (this._interval = null)),
                      this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
              }),
              (t.to = function (t) {
                  var e = this;
                  this._activeElement = this._element.querySelector(tt);
                  var n = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0))
                      if (this._isSliding)
                          g(this._element).one(Q.SLID, function () {
                              return e.to(t);
                          });
                      else {
                          if (n === t) return this.pause(), void this.cycle();
                          var i = n < t ? W : q;
                          this._slide(i, this._items[t]);
                      }
              }),
              (t.dispose = function () {
                  g(this._element).off(H),
                      g.removeData(this._element, j),
                      (this._items = null),
                      (this._config = null),
                      (this._element = null),
                      (this._interval = null),
                      (this._isPaused = null),
                      (this._isSliding = null),
                      (this._activeElement = null),
                      (this._indicatorsElement = null);
              }),
              (t._getConfig = function (t) {
                  return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t;
              }),
              (t._handleSwipe = function () {
                  var t = Math.abs(this.touchDeltaX);
                  if (!(t <= 40)) {
                      var e = t / this.touchDeltaX;
                      0 < e && this.prev(), e < 0 && this.next();
                  }
              }),
              (t._addEventListeners = function () {
                  var e = this;
                  this._config.keyboard &&
                      g(this._element).on(Q.KEYDOWN, function (t) {
                          return e._keydown(t);
                      }),
                      "hover" === this._config.pause &&
                          g(this._element)
                              .on(Q.MOUSEENTER, function (t) {
                                  return e.pause(t);
                              })
                              .on(Q.MOUSELEAVE, function (t) {
                                  return e.cycle(t);
                              }),
                      this._config.touch && this._addTouchEventListeners();
              }),
              (t._addTouchEventListeners = function () {
                  var n = this;
                  if (this._touchSupported) {
                      var e = function (t) {
                              n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? (n.touchStartX = t.originalEvent.clientX) : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX);
                          },
                          i = function (t) {
                              n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                                  n._handleSwipe(),
                                  "hover" === n._config.pause &&
                                      (n.pause(),
                                      n.touchTimeout && clearTimeout(n.touchTimeout),
                                      (n.touchTimeout = setTimeout(function (t) {
                                          return n.cycle(t);
                                      }, 500 + n._config.interval)));
                          };
                      g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function (t) {
                          return t.preventDefault();
                      }),
                          this._pointerEvent
                              ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                                    return e(t);
                                }),
                                g(this._element).on(Q.POINTERUP, function (t) {
                                    return i(t);
                                }),
                                this._element.classList.add(J))
                              : (g(this._element).on(Q.TOUCHSTART, function (t) {
                                    return e(t);
                                }),
                                g(this._element).on(Q.TOUCHMOVE, function (t) {
                                    var e;
                                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? (n.touchDeltaX = 0) : (n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX);
                                }),
                                g(this._element).on(Q.TOUCHEND, function (t) {
                                    return i(t);
                                }));
                  }
              }),
              (t._keydown = function (t) {
                  if (!/input|textarea/i.test(t.target.tagName))
                      switch (t.which) {
                          case 37:
                              t.preventDefault(), this.prev();
                              break;
                          case 39:
                              t.preventDefault(), this.next();
                      }
              }),
              (t._getItemIndex = function (t) {
                  return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : []), this._items.indexOf(t);
              }),
              (t._getItemByDirection = function (t, e) {
                  var n = t === W,
                      i = t === q,
                      o = this._getItemIndex(e),
                      r = this._items.length - 1;
                  if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e;
                  var s = (o + (t === q ? -1 : 1)) % this._items.length;
                  return -1 === s ? this._items[this._items.length - 1] : this._items[s];
              }),
              (t._triggerSlideEvent = function (t, e) {
                  var n = this._getItemIndex(t),
                      i = this._getItemIndex(this._element.querySelector(tt)),
                      o = g.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });
                  return g(this._element).trigger(o), o;
              }),
              (t._setActiveIndicatorElement = function (t) {
                  if (this._indicatorsElement) {
                      var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                      g(e).removeClass(V);
                      var n = this._indicatorsElement.children[this._getItemIndex(t)];
                      n && g(n).addClass(V);
                  }
              }),
              (t._slide = function (t, e) {
                  var n,
                      i,
                      o,
                      r = this,
                      s = this._element.querySelector(tt),
                      a = this._getItemIndex(s),
                      l = e || (s && this._getItemByDirection(t, s)),
                      c = this._getItemIndex(l),
                      h = Boolean(this._interval);
                  if (((o = t === W ? ((n = X), (i = $), M) : ((n = z), (i = G), K)), l && g(l).hasClass(V))) this._isSliding = !1;
                  else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                      (this._isSliding = !0), h && this.pause(), this._setActiveIndicatorElement(l);
                      var u = g.Event(Q.SLID, { relatedTarget: l, direction: o, from: a, to: c });
                      if (g(this._element).hasClass(Y)) {
                          g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n);
                          var f = parseInt(l.getAttribute("data-interval"), 10);
                          this._config.interval = f ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), f) : this._config.defaultInterval || this._config.interval;
                          var d = _.getTransitionDurationFromElement(s);
                          g(s)
                              .one(_.TRANSITION_END, function () {
                                  g(l)
                                      .removeClass(n + " " + i)
                                      .addClass(V),
                                      g(s).removeClass(V + " " + i + " " + n),
                                      (r._isSliding = !1),
                                      setTimeout(function () {
                                          return g(r._element).trigger(u);
                                      }, 0);
                              })
                              .emulateTransitionEnd(d);
                      } else g(s).removeClass(V), g(l).addClass(V), (this._isSliding = !1), g(this._element).trigger(u);
                      h && this.cycle();
                  }
              }),
              (r._jQueryInterface = function (i) {
                  return this.each(function () {
                      var t = g(this).data(j),
                          e = l({}, F, g(this).data());
                      "object" == typeof i && (e = l({}, e, i));
                      var n = "string" == typeof i ? i : e.slide;
                      if ((t || ((t = new r(this, e)), g(this).data(j, t)), "number" == typeof i)) t.to(i);
                      else if ("string" == typeof n) {
                          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                          t[n]();
                      } else e.interval && e.ride && (t.pause(), t.cycle());
                  });
              }),
              (r._dataApiClickHandler = function (t) {
                  var e = _.getSelectorFromElement(this);
                  if (e) {
                      var n = g(e)[0];
                      if (n && g(n).hasClass(B)) {
                          var i = l({}, g(n).data(), g(this).data()),
                              o = this.getAttribute("data-slide-to");
                          o && (i.interval = !1), r._jQueryInterface.call(g(n), i), o && g(n).data(j).to(o), t.preventDefault();
                      }
                  }
              }),
              s(r, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return F;
                      },
                  },
              ]),
              r
          );
      })();
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
      g(window).on(Q.LOAD_DATA_API, function () {
          for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
              var i = g(t[e]);
              lt._jQueryInterface.call(i, i.data());
          }
      }),
      (g.fn[L] = lt._jQueryInterface),
      (g.fn[L].Constructor = lt),
      (g.fn[L].noConflict = function () {
          return (g.fn[L] = x), lt._jQueryInterface;
      });
  var ct = "collapse",
      ht = "bs.collapse",
      ut = "." + ht,
      ft = g.fn[ct],
      dt = { toggle: !0, parent: "" },
      gt = { toggle: "boolean", parent: "(string|element)" },
      _t = { SHOW: "show" + ut, SHOWN: "shown" + ut, HIDE: "hide" + ut, HIDDEN: "hidden" + ut, CLICK_DATA_API: "click" + ut + ".data-api" },
      mt = "show",
      pt = "collapse",
      vt = "collapsing",
      yt = "collapsed",
      Et = "width",
      Ct = "height",
      Tt = ".show, .collapsing",
      St = '[data-toggle="collapse"]',
      bt = (function () {
          function a(e, t) {
              (this._isTransitioning = !1),
                  (this._element = e),
                  (this._config = this._getConfig(t)),
                  (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
              for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                  var r = n[i],
                      s = _.getSelectorFromElement(r),
                      a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                          return t === e;
                      });
                  null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(r));
              }
              (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          var t = a.prototype;
          return (
              (t.toggle = function () {
                  g(this._element).hasClass(mt) ? this.hide() : this.show();
              }),
              (t.show = function () {
                  var t,
                      e,
                      n = this;
                  if (
                      !this._isTransitioning &&
                      !g(this._element).hasClass(mt) &&
                      (this._parent &&
                          0 ===
                              (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function (t) {
                                  return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt);
                              })).length &&
                          (t = null),
                      !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))
                  ) {
                      var i = g.Event(_t.SHOW);
                      if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
                          t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"), e || g(t).data(ht, null));
                          var o = this._getDimension();
                          g(this._element).removeClass(pt).addClass(vt), (this._element.style[o] = 0), this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0), this.setTransitioning(!0);
                          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                              s = _.getTransitionDurationFromElement(this._element);
                          g(this._element)
                              .one(_.TRANSITION_END, function () {
                                  g(n._element).removeClass(vt).addClass(pt).addClass(mt), (n._element.style[o] = ""), n.setTransitioning(!1), g(n._element).trigger(_t.SHOWN);
                              })
                              .emulateTransitionEnd(s),
                              (this._element.style[o] = this._element[r] + "px");
                      }
                  }
              }),
              (t.hide = function () {
                  var t = this;
                  if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                      var e = g.Event(_t.HIDE);
                      if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
                          var n = this._getDimension();
                          (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), _.reflow(this._element), g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                          var i = this._triggerArray.length;
                          if (0 < i)
                              for (var o = 0; o < i; o++) {
                                  var r = this._triggerArray[o],
                                      s = _.getSelectorFromElement(r);
                                  if (null !== s) g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1);
                              }
                          this.setTransitioning(!0);
                          this._element.style[n] = "";
                          var a = _.getTransitionDurationFromElement(this._element);
                          g(this._element)
                              .one(_.TRANSITION_END, function () {
                                  t.setTransitioning(!1), g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN);
                              })
                              .emulateTransitionEnd(a);
                      }
                  }
              }),
              (t.setTransitioning = function (t) {
                  this._isTransitioning = t;
              }),
              (t.dispose = function () {
                  g.removeData(this._element, ht), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
              }),
              (t._getConfig = function (t) {
                  return ((t = l({}, dt, t)).toggle = Boolean(t.toggle)), _.typeCheckConfig(ct, t, gt), t;
              }),
              (t._getDimension = function () {
                  return g(this._element).hasClass(Et) ? Et : Ct;
              }),
              (t._getParent = function () {
                  var t,
                      n = this;
                  _.isElement(this._config.parent) ? ((t = this._config.parent), "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                  var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                      i = [].slice.call(t.querySelectorAll(e));
                  return (
                      g(i).each(function (t, e) {
                          n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
                      }),
                      t
                  );
              }),
              (t._addAriaAndCollapsedClass = function (t, e) {
                  var n = g(t).hasClass(mt);
                  e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n);
              }),
              (a._getTargetFromElement = function (t) {
                  var e = _.getSelectorFromElement(t);
                  return e ? document.querySelector(e) : null;
              }),
              (a._jQueryInterface = function (i) {
                  return this.each(function () {
                      var t = g(this),
                          e = t.data(ht),
                          n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                      if ((!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || ((e = new a(this, n)), t.data(ht, e)), "string" == typeof i)) {
                          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                          e[i]();
                      }
                  });
              }),
              s(a, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return dt;
                      },
                  },
              ]),
              a
          );
      })();
  g(document).on(_t.CLICK_DATA_API, St, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = g(this),
          e = _.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(e));
      g(i).each(function () {
          var t = g(this),
              e = t.data(ht) ? "toggle" : n.data();
          bt._jQueryInterface.call(t, e);
      });
  }),
      (g.fn[ct] = bt._jQueryInterface),
      (g.fn[ct].Constructor = bt),
      (g.fn[ct].noConflict = function () {
          return (g.fn[ct] = ft), bt._jQueryInterface;
      });
  var It = "dropdown",
      Dt = "bs.dropdown",
      wt = "." + Dt,
      At = ".data-api",
      Nt = g.fn[It],
      Ot = new RegExp("38|40|27"),
      kt = { HIDE: "hide" + wt, HIDDEN: "hidden" + wt, SHOW: "show" + wt, SHOWN: "shown" + wt, CLICK: "click" + wt, CLICK_DATA_API: "click" + wt + At, KEYDOWN_DATA_API: "keydown" + wt + At, KEYUP_DATA_API: "keyup" + wt + At },
      Pt = "disabled",
      Lt = "show",
      jt = "dropup",
      Ht = "dropright",
      Rt = "dropleft",
      xt = "dropdown-menu-right",
      Ft = "position-static",
      Ut = '[data-toggle="dropdown"]',
      Wt = ".dropdown form",
      qt = ".dropdown-menu",
      Mt = ".navbar-nav",
      Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Qt = "top-start",
      Bt = "top-end",
      Vt = "bottom-start",
      Yt = "bottom-end",
      zt = "right-start",
      Xt = "left-start",
      $t = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
      Gt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
      Jt = (function () {
          function c(t, e) {
              (this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
          }
          var t = c.prototype;
          return (
              (t.toggle = function () {
                  if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                      var t = c._getParentFromElement(this._element),
                          e = g(this._menu).hasClass(Lt);
                      if ((c._clearMenus(), !e)) {
                          var n = { relatedTarget: this._element },
                              i = g.Event(kt.SHOW, n);
                          if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                              if (!this._inNavbar) {
                                  if ("undefined" == typeof u) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                  var o = this._element;
                                  "parent" === this._config.reference
                                      ? (o = t)
                                      : _.isElement(this._config.reference) && ((o = this._config.reference), "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                                      "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                                      (this._popper = new u(o, this._menu, this._getPopperConfig()));
                              }
                              "ontouchstart" in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                                  this._element.focus(),
                                  this._element.setAttribute("aria-expanded", !0),
                                  g(this._menu).toggleClass(Lt),
                                  g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n));
                          }
                      }
                  }
              }),
              (t.show = function () {
                  if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                      var t = { relatedTarget: this._element },
                          e = g.Event(kt.SHOW, t),
                          n = c._getParentFromElement(this._element);
                      g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)));
                  }
              }),
              (t.hide = function () {
                  if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                      var t = { relatedTarget: this._element },
                          e = g.Event(kt.HIDE, t),
                          n = c._getParentFromElement(this._element);
                      g(n).trigger(e), e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt), g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)));
                  }
              }),
              (t.dispose = function () {
                  g.removeData(this._element, Dt), g(this._element).off(wt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
              }),
              (t.update = function () {
                  (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
              }),
              (t._addEventListeners = function () {
                  var e = this;
                  g(this._element).on(kt.CLICK, function (t) {
                      t.preventDefault(), t.stopPropagation(), e.toggle();
                  });
              }),
              (t._getConfig = function (t) {
                  return (t = l({}, this.constructor.Default, g(this._element).data(), t)), _.typeCheckConfig(It, t, this.constructor.DefaultType), t;
              }),
              (t._getMenuElement = function () {
                  if (!this._menu) {
                      var t = c._getParentFromElement(this._element);
                      t && (this._menu = t.querySelector(qt));
                  }
                  return this._menu;
              }),
              (t._getPlacement = function () {
                  var t = g(this._element.parentNode),
                      e = Vt;
                  return t.hasClass(jt) ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? (e = zt) : t.hasClass(Rt) ? (e = Xt) : g(this._menu).hasClass(xt) && (e = Yt), e;
              }),
              (t._detectNavbar = function () {
                  return 0 < g(this._element).closest(".navbar").length;
              }),
              (t._getOffset = function () {
                  var e = this,
                      t = {};
                  return (
                      "function" == typeof this._config.offset
                          ? (t.fn = function (t) {
                                return (t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                            })
                          : (t.offset = this._config.offset),
                      t
                  );
              }),
              (t._getPopperConfig = function () {
                  var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                  return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), t;
              }),
              (c._jQueryInterface = function (e) {
                  return this.each(function () {
                      var t = g(this).data(Dt);
                      if ((t || ((t = new c(this, "object" == typeof e ? e : null)), g(this).data(Dt, t)), "string" == typeof e)) {
                          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                          t[e]();
                      }
                  });
              }),
              (c._clearMenus = function (t) {
                  if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                      for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                          var o = c._getParentFromElement(e[n]),
                              r = g(e[n]).data(Dt),
                              s = { relatedTarget: e[n] };
                          if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                              var a = r._menu;
                              if (g(o).hasClass(Lt) && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && g.contains(o, t.target))) {
                                  var l = g.Event(kt.HIDE, s);
                                  g(o).trigger(l),
                                      l.isDefaultPrevented() ||
                                          ("ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                                          e[n].setAttribute("aria-expanded", "false"),
                                          g(a).removeClass(Lt),
                                          g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)));
                              }
                          }
                      }
              }),
              (c._getParentFromElement = function (t) {
                  var e,
                      n = _.getSelectorFromElement(t);
                  return n && (e = document.querySelector(n)), e || t.parentNode;
              }),
              (c._dataApiKeydownHandler = function (t) {
                  if (
                      (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || g(t.target).closest(qt).length))) : Ot.test(t.which)) &&
                      (t.preventDefault(), t.stopPropagation(), !this.disabled && !g(this).hasClass(Pt))
                  ) {
                      var e = c._getParentFromElement(this),
                          n = g(e).hasClass(Lt);
                      if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                          var i = [].slice.call(e.querySelectorAll(Kt));
                          if (0 !== i.length) {
                              var o = i.indexOf(t.target);
                              38 === t.which && 0 < o && o--, 40 === t.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
                          }
                      } else {
                          if (27 === t.which) {
                              var r = e.querySelector(Ut);
                              g(r).trigger("focus");
                          }
                          g(this).trigger("click");
                      }
                  }
              }),
              s(c, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return $t;
                      },
                  },
                  {
                      key: "DefaultType",
                      get: function () {
                          return Gt;
                      },
                  },
              ]),
              c
          );
      })();
  g(document)
      .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
      .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
      .on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus)
      .on(kt.CLICK_DATA_API, Ut, function (t) {
          t.preventDefault(), t.stopPropagation(), Jt._jQueryInterface.call(g(this), "toggle");
      })
      .on(kt.CLICK_DATA_API, Wt, function (t) {
          t.stopPropagation();
      }),
      (g.fn[It] = Jt._jQueryInterface),
      (g.fn[It].Constructor = Jt),
      (g.fn[It].noConflict = function () {
          return (g.fn[It] = Nt), Jt._jQueryInterface;
      });
  var Zt = "modal",
      te = "bs.modal",
      ee = "." + te,
      ne = g.fn[Zt],
      ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      oe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      re = {
          HIDE: "hide" + ee,
          HIDDEN: "hidden" + ee,
          SHOW: "show" + ee,
          SHOWN: "shown" + ee,
          FOCUSIN: "focusin" + ee,
          RESIZE: "resize" + ee,
          CLICK_DISMISS: "click.dismiss" + ee,
          KEYDOWN_DISMISS: "keydown.dismiss" + ee,
          MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
          CLICK_DATA_API: "click" + ee + ".data-api",
      },
      se = "modal-dialog-scrollable",
      ae = "modal-scrollbar-measure",
      le = "modal-backdrop",
      ce = "modal-open",
      he = "fade",
      ue = "show",
      fe = ".modal-dialog",
      de = ".modal-body",
      ge = '[data-toggle="modal"]',
      _e = '[data-dismiss="modal"]',
      me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      pe = ".sticky-top",
      ve = (function () {
          function o(t, e) {
              (this._config = this._getConfig(e)),
                  (this._element = t),
                  (this._dialog = t.querySelector(fe)),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._isTransitioning = !1),
                  (this._scrollbarWidth = 0);
          }
          var t = o.prototype;
          return (
              (t.toggle = function (t) {
                  return this._isShown ? this.hide() : this.show(t);
              }),
              (t.show = function (t) {
                  var e = this;
                  if (!this._isShown && !this._isTransitioning) {
                      g(this._element).hasClass(he) && (this._isTransitioning = !0);
                      var n = g.Event(re.SHOW, { relatedTarget: t });
                      g(this._element).trigger(n),
                          this._isShown ||
                              n.isDefaultPrevented() ||
                              ((this._isShown = !0),
                              this._checkScrollbar(),
                              this._setScrollbar(),
                              this._adjustDialog(),
                              this._setEscapeEvent(),
                              this._setResizeEvent(),
                              g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                                  return e.hide(t);
                              }),
                              g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                                  g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                                      g(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
                                  });
                              }),
                              this._showBackdrop(function () {
                                  return e._showElement(t);
                              }));
                  }
              }),
              (t.hide = function (t) {
                  var e = this;
                  if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
                      var n = g.Event(re.HIDE);
                      if ((g(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                          this._isShown = !1;
                          var i = g(this._element).hasClass(he);
                          if (
                              (i && (this._isTransitioning = !0),
                              this._setEscapeEvent(),
                              this._setResizeEvent(),
                              g(document).off(re.FOCUSIN),
                              g(this._element).removeClass(ue),
                              g(this._element).off(re.CLICK_DISMISS),
                              g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                              i)
                          ) {
                              var o = _.getTransitionDurationFromElement(this._element);
                              g(this._element)
                                  .one(_.TRANSITION_END, function (t) {
                                      return e._hideModal(t);
                                  })
                                  .emulateTransitionEnd(o);
                          } else this._hideModal();
                      }
                  }
              }),
              (t.dispose = function () {
                  [window, this._element, this._dialog].forEach(function (t) {
                      return g(t).off(ee);
                  }),
                      g(document).off(re.FOCUSIN),
                      g.removeData(this._element, te),
                      (this._config = null),
                      (this._element = null),
                      (this._dialog = null),
                      (this._backdrop = null),
                      (this._isShown = null),
                      (this._isBodyOverflowing = null),
                      (this._ignoreBackdropClick = null),
                      (this._isTransitioning = null),
                      (this._scrollbarWidth = null);
              }),
              (t.handleUpdate = function () {
                  this._adjustDialog();
              }),
              (t._getConfig = function (t) {
                  return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t;
              }),
              (t._showElement = function (t) {
                  var e = this,
                      n = g(this._element).hasClass(he);
                  (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                      (this._element.style.display = "block"),
                      this._element.removeAttribute("aria-hidden"),
                      this._element.setAttribute("aria-modal", !0),
                      g(this._dialog).hasClass(se) ? (this._dialog.querySelector(de).scrollTop = 0) : (this._element.scrollTop = 0),
                      n && _.reflow(this._element),
                      g(this._element).addClass(ue),
                      this._config.focus && this._enforceFocus();
                  var i = g.Event(re.SHOWN, { relatedTarget: t }),
                      o = function () {
                          e._config.focus && e._element.focus(), (e._isTransitioning = !1), g(e._element).trigger(i);
                      };
                  if (n) {
                      var r = _.getTransitionDurationFromElement(this._dialog);
                      g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                  } else o();
              }),
              (t._enforceFocus = function () {
                  var e = this;
                  g(document)
                      .off(re.FOCUSIN)
                      .on(re.FOCUSIN, function (t) {
                          document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus();
                      });
              }),
              (t._setEscapeEvent = function () {
                  var e = this;
                  this._isShown && this._config.keyboard
                      ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                            27 === t.which && (t.preventDefault(), e.hide());
                        })
                      : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS);
              }),
              (t._setResizeEvent = function () {
                  var e = this;
                  this._isShown
                      ? g(window).on(re.RESIZE, function (t) {
                            return e.handleUpdate(t);
                        })
                      : g(window).off(re.RESIZE);
              }),
              (t._hideModal = function () {
                  var t = this;
                  (this._element.style.display = "none"),
                      this._element.setAttribute("aria-hidden", !0),
                      this._element.removeAttribute("aria-modal"),
                      (this._isTransitioning = !1),
                      this._showBackdrop(function () {
                          g(document.body).removeClass(ce), t._resetAdjustments(), t._resetScrollbar(), g(t._element).trigger(re.HIDDEN);
                      });
              }),
              (t._removeBackdrop = function () {
                  this._backdrop && (g(this._backdrop).remove(), (this._backdrop = null));
              }),
              (t._showBackdrop = function (t) {
                  var e = this,
                      n = g(this._element).hasClass(he) ? he : "";
                  if (this._isShown && this._config.backdrop) {
                      if (
                          ((this._backdrop = document.createElement("div")),
                          (this._backdrop.className = le),
                          n && this._backdrop.classList.add(n),
                          g(this._backdrop).appendTo(document.body),
                          g(this._element).on(re.CLICK_DISMISS, function (t) {
                              e._ignoreBackdropClick ? (e._ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
                          }),
                          n && _.reflow(this._backdrop),
                          g(this._backdrop).addClass(ue),
                          !t)
                      )
                          return;
                      if (!n) return void t();
                      var i = _.getTransitionDurationFromElement(this._backdrop);
                      g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i);
                  } else if (!this._isShown && this._backdrop) {
                      g(this._backdrop).removeClass(ue);
                      var o = function () {
                          e._removeBackdrop(), t && t();
                      };
                      if (g(this._element).hasClass(he)) {
                          var r = _.getTransitionDurationFromElement(this._backdrop);
                          g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                      } else o();
                  } else t && t();
              }),
              (t._adjustDialog = function () {
                  var t = this._element.scrollHeight > document.documentElement.clientHeight;
                  !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
              }),
              (t._resetAdjustments = function () {
                  (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
              }),
              (t._checkScrollbar = function () {
                  var t = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
              }),
              (t._setScrollbar = function () {
                  var o = this;
                  if (this._isBodyOverflowing) {
                      var t = [].slice.call(document.querySelectorAll(me)),
                          e = [].slice.call(document.querySelectorAll(pe));
                      g(t).each(function (t, e) {
                          var n = e.style.paddingRight,
                              i = g(e).css("padding-right");
                          g(e)
                              .data("padding-right", n)
                              .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                      }),
                          g(e).each(function (t, e) {
                              var n = e.style.marginRight,
                                  i = g(e).css("margin-right");
                              g(e)
                                  .data("margin-right", n)
                                  .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                          });
                      var n = document.body.style.paddingRight,
                          i = g(document.body).css("padding-right");
                      g(document.body)
                          .data("padding-right", n)
                          .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                  }
                  g(document.body).addClass(ce);
              }),
              (t._resetScrollbar = function () {
                  var t = [].slice.call(document.querySelectorAll(me));
                  g(t).each(function (t, e) {
                      var n = g(e).data("padding-right");
                      g(e).removeData("padding-right"), (e.style.paddingRight = n || "");
                  });
                  var e = [].slice.call(document.querySelectorAll("" + pe));
                  g(e).each(function (t, e) {
                      var n = g(e).data("margin-right");
                      "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right");
                  });
                  var n = g(document.body).data("padding-right");
                  g(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
              }),
              (t._getScrollbarWidth = function () {
                  var t = document.createElement("div");
                  (t.className = ae), document.body.appendChild(t);
                  var e = t.getBoundingClientRect().width - t.clientWidth;
                  return document.body.removeChild(t), e;
              }),
              (o._jQueryInterface = function (n, i) {
                  return this.each(function () {
                      var t = g(this).data(te),
                          e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                      if ((t || ((t = new o(this, e)), g(this).data(te, t)), "string" == typeof n)) {
                          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                          t[n](i);
                      } else e.show && t.show(i);
                  });
              }),
              s(o, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return ie;
                      },
                  },
              ]),
              o
          );
      })();
  g(document).on(re.CLICK_DATA_API, ge, function (t) {
      var e,
          n = this,
          i = _.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = g(e).one(re.SHOW, function (t) {
          t.isDefaultPrevented() ||
              r.one(re.HIDDEN, function () {
                  g(n).is(":visible") && n.focus();
              });
      });
      ve._jQueryInterface.call(g(e), o, this);
  }),
      (g.fn[Zt] = ve._jQueryInterface),
      (g.fn[Zt].Constructor = ve),
      (g.fn[Zt].noConflict = function () {
          return (g.fn[Zt] = ne), ve._jQueryInterface;
      });
  var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      Ee = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
      },
      Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function Se(t, s, e) {
      if (0 === t.length) return t;
      if (e && "function" == typeof e) return e(t);
      for (
          var n = new window.DOMParser().parseFromString(t, "text/html"),
              a = Object.keys(s),
              l = [].slice.call(n.body.querySelectorAll("*")),
              i = function (t, e) {
                  var n = l[t],
                      i = n.nodeName.toLowerCase();
                  if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                  var o = [].slice.call(n.attributes),
                      r = [].concat(s["*"] || [], s[i] || []);
                  o.forEach(function (t) {
                      (function (t, e) {
                          var n = t.nodeName.toLowerCase();
                          if (-1 !== e.indexOf(n)) return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                          for (
                              var i = e.filter(function (t) {
                                      return t instanceof RegExp;
                                  }),
                                  o = 0,
                                  r = i.length;
                              o < r;
                              o++
                          )
                              if (n.match(i[o])) return !0;
                          return !1;
                      })(t, r) || n.removeAttribute(t.nodeName);
                  });
              },
              o = 0,
              r = l.length;
          o < r;
          o++
      )
          i(o);
      return n.body.innerHTML;
  }
  var be = "tooltip",
      Ie = "bs.tooltip",
      De = "." + Ie,
      we = g.fn[be],
      Ae = "bs-tooltip",
      Ne = new RegExp("(^|\\s)" + Ae + "\\S+", "g"),
      Oe = ["sanitize", "whiteList", "sanitizeFn"],
      ke = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
      },
      Pe = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      Le = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: Ee,
      },
      je = "show",
      He = "out",
      Re = {
          HIDE: "hide" + De,
          HIDDEN: "hidden" + De,
          SHOW: "show" + De,
          SHOWN: "shown" + De,
          INSERTED: "inserted" + De,
          CLICK: "click" + De,
          FOCUSIN: "focusin" + De,
          FOCUSOUT: "focusout" + De,
          MOUSEENTER: "mouseenter" + De,
          MOUSELEAVE: "mouseleave" + De,
      },
      xe = "fade",
      Fe = "show",
      Ue = ".tooltip-inner",
      We = ".arrow",
      qe = "hover",
      Me = "focus",
      Ke = "click",
      Qe = "manual",
      Be = (function () {
          function i(t, e) {
              if ("undefined" == typeof u) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
              (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners();
          }
          var t = i.prototype;
          return (
              (t.enable = function () {
                  this._isEnabled = !0;
              }),
              (t.disable = function () {
                  this._isEnabled = !1;
              }),
              (t.toggleEnabled = function () {
                  this._isEnabled = !this._isEnabled;
              }),
              (t.toggle = function (t) {
                  if (this._isEnabled)
                      if (t) {
                          var e = this.constructor.DATA_KEY,
                              n = g(t.currentTarget).data(e);
                          n || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(e, n)),
                              (n._activeTrigger.click = !n._activeTrigger.click),
                              n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                      } else {
                          if (g(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
                          this._enter(null, this);
                      }
              }),
              (t.dispose = function () {
                  clearTimeout(this._timeout),
                      g.removeData(this.element, this.constructor.DATA_KEY),
                      g(this.element).off(this.constructor.EVENT_KEY),
                      g(this.element).closest(".modal").off("hide.bs.modal"),
                      this.tip && g(this.tip).remove(),
                      (this._isEnabled = null),
                      (this._timeout = null),
                      (this._hoverState = null),
                      (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                      (this._popper = null),
                      (this.element = null),
                      (this.config = null),
                      (this.tip = null);
              }),
              (t.show = function () {
                  var e = this;
                  if ("none" === g(this.element).css("display")) throw new Error("Please use show on visible elements");
                  var t = g.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                      g(this.element).trigger(t);
                      var n = _.findShadowRoot(this.element),
                          i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                      if (t.isDefaultPrevented() || !i) return;
                      var o = this.getTipElement(),
                          r = _.getUID(this.constructor.NAME);
                      o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && g(o).addClass(xe);
                      var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                          a = this._getAttachment(s);
                      this.addAttachmentClass(a);
                      var l = this._getContainer();
                      g(o).data(this.constructor.DATA_KEY, this),
                          g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                          g(this.element).trigger(this.constructor.Event.INSERTED),
                          (this._popper = new u(this.element, o, {
                              placement: a,
                              modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: We }, preventOverflow: { boundariesElement: this.config.boundary } },
                              onCreate: function (t) {
                                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                              },
                              onUpdate: function (t) {
                                  return e._handlePopperPlacementChange(t);
                              },
                          })),
                          g(o).addClass(Fe),
                          "ontouchstart" in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                      var c = function () {
                          e.config.animation && e._fixTransition();
                          var t = e._hoverState;
                          (e._hoverState = null), g(e.element).trigger(e.constructor.Event.SHOWN), t === He && e._leave(null, e);
                      };
                      if (g(this.tip).hasClass(xe)) {
                          var h = _.getTransitionDurationFromElement(this.tip);
                          g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h);
                      } else c();
                  }
              }),
              (t.hide = function (t) {
                  var e = this,
                      n = this.getTipElement(),
                      i = g.Event(this.constructor.Event.HIDE),
                      o = function () {
                          e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                              e._cleanTipClass(),
                              e.element.removeAttribute("aria-describedby"),
                              g(e.element).trigger(e.constructor.Event.HIDDEN),
                              null !== e._popper && e._popper.destroy(),
                              t && t();
                      };
                  if ((g(this.element).trigger(i), !i.isDefaultPrevented())) {
                      if (
                          (g(n).removeClass(Fe),
                          "ontouchstart" in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                          (this._activeTrigger[Ke] = !1),
                          (this._activeTrigger[Me] = !1),
                          (this._activeTrigger[qe] = !1),
                          g(this.tip).hasClass(xe))
                      ) {
                          var r = _.getTransitionDurationFromElement(n);
                          g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r);
                      } else o();
                      this._hoverState = "";
                  }
              }),
              (t.update = function () {
                  null !== this._popper && this._popper.scheduleUpdate();
              }),
              (t.isWithContent = function () {
                  return Boolean(this.getTitle());
              }),
              (t.addAttachmentClass = function (t) {
                  g(this.getTipElement()).addClass(Ae + "-" + t);
              }),
              (t.getTipElement = function () {
                  return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
              }),
              (t.setContent = function () {
                  var t = this.getTipElement();
                  this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()), g(t).removeClass(xe + " " + Fe);
              }),
              (t.setElementContent = function (t, e) {
                  "object" != typeof e || (!e.nodeType && !e.jquery)
                      ? this.config.html
                          ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e))
                          : t.text(e)
                      : this.config.html
                      ? g(e).parent().is(t) || t.empty().append(e)
                      : t.text(g(e).text());
              }),
              (t.getTitle = function () {
                  var t = this.element.getAttribute("data-original-title");
                  return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
              }),
              (t._getOffset = function () {
                  var e = this,
                      t = {};
                  return (
                      "function" == typeof this.config.offset
                          ? (t.fn = function (t) {
                                return (t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                            })
                          : (t.offset = this.config.offset),
                      t
                  );
              }),
              (t._getContainer = function () {
                  return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container);
              }),
              (t._getAttachment = function (t) {
                  return Pe[t.toUpperCase()];
              }),
              (t._setListeners = function () {
                  var i = this;
                  this.config.trigger.split(" ").forEach(function (t) {
                      if ("click" === t)
                          g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
                              return i.toggle(t);
                          });
                      else if (t !== Qe) {
                          var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                              n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                          g(i.element)
                              .on(e, i.config.selector, function (t) {
                                  return i._enter(t);
                              })
                              .on(n, i.config.selector, function (t) {
                                  return i._leave(t);
                              });
                      }
                  }),
                      g(this.element)
                          .closest(".modal")
                          .on("hide.bs.modal", function () {
                              i.element && i.hide();
                          }),
                      this.config.selector ? (this.config = l({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
              }),
              (t._fixTitle = function () {
                  var t = typeof this.element.getAttribute("data-original-title");
                  (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
              }),
              (t._enter = function (t, e) {
                  var n = this.constructor.DATA_KEY;
                  (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                      t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
                      g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
                          ? (e._hoverState = je)
                          : (clearTimeout(e._timeout),
                            (e._hoverState = je),
                            e.config.delay && e.config.delay.show
                                ? (e._timeout = setTimeout(function () {
                                      e._hoverState === je && e.show();
                                  }, e.config.delay.show))
                                : e.show());
              }),
              (t._leave = function (t, e) {
                  var n = this.constructor.DATA_KEY;
                  (e = e || g(t.currentTarget).data(n)) || ((e = new this.constructor(t.currentTarget, this._getDelegateConfig())), g(t.currentTarget).data(n, e)),
                      t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
                      e._isWithActiveTrigger() ||
                          (clearTimeout(e._timeout),
                          (e._hoverState = He),
                          e.config.delay && e.config.delay.hide
                              ? (e._timeout = setTimeout(function () {
                                    e._hoverState === He && e.hide();
                                }, e.config.delay.hide))
                              : e.hide());
              }),
              (t._isWithActiveTrigger = function () {
                  for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                  return !1;
              }),
              (t._getConfig = function (t) {
                  var e = g(this.element).data();
                  return (
                      Object.keys(e).forEach(function (t) {
                          -1 !== Oe.indexOf(t) && delete e[t];
                      }),
                      "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
                      "number" == typeof t.title && (t.title = t.title.toString()),
                      "number" == typeof t.content && (t.content = t.content.toString()),
                      _.typeCheckConfig(be, t, this.constructor.DefaultType),
                      t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
                      t
                  );
              }),
              (t._getDelegateConfig = function () {
                  var t = {};
                  if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                  return t;
              }),
              (t._cleanTipClass = function () {
                  var t = g(this.getTipElement()),
                      e = t.attr("class").match(Ne);
                  null !== e && e.length && t.removeClass(e.join(""));
              }),
              (t._handlePopperPlacementChange = function (t) {
                  var e = t.instance;
                  (this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
              }),
              (t._fixTransition = function () {
                  var t = this.getTipElement(),
                      e = this.config.animation;
                  null === t.getAttribute("x-placement") && (g(t).removeClass(xe), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = e));
              }),
              (i._jQueryInterface = function (n) {
                  return this.each(function () {
                      var t = g(this).data(Ie),
                          e = "object" == typeof n && n;
                      if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ie, t)), "string" == typeof n)) {
                          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                          t[n]();
                      }
                  });
              }),
              s(i, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return Le;
                      },
                  },
                  {
                      key: "NAME",
                      get: function () {
                          return be;
                      },
                  },
                  {
                      key: "DATA_KEY",
                      get: function () {
                          return Ie;
                      },
                  },
                  {
                      key: "Event",
                      get: function () {
                          return Re;
                      },
                  },
                  {
                      key: "EVENT_KEY",
                      get: function () {
                          return De;
                      },
                  },
                  {
                      key: "DefaultType",
                      get: function () {
                          return ke;
                      },
                  },
              ]),
              i
          );
      })();
  (g.fn[be] = Be._jQueryInterface),
      (g.fn[be].Constructor = Be),
      (g.fn[be].noConflict = function () {
          return (g.fn[be] = we), Be._jQueryInterface;
      });
  var Ve = "popover",
      Ye = "bs.popover",
      ze = "." + Ye,
      Xe = g.fn[Ve],
      $e = "bs-popover",
      Ge = new RegExp("(^|\\s)" + $e + "\\S+", "g"),
      Je = l({}, Be.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      Ze = l({}, Be.DefaultType, { content: "(string|element|function)" }),
      tn = "fade",
      en = "show",
      nn = ".popover-header",
      on = ".popover-body",
      rn = {
          HIDE: "hide" + ze,
          HIDDEN: "hidden" + ze,
          SHOW: "show" + ze,
          SHOWN: "shown" + ze,
          INSERTED: "inserted" + ze,
          CLICK: "click" + ze,
          FOCUSIN: "focusin" + ze,
          FOCUSOUT: "focusout" + ze,
          MOUSEENTER: "mouseenter" + ze,
          MOUSELEAVE: "mouseleave" + ze,
      },
      sn = (function (t) {
          var e, n;
          function i() {
              return t.apply(this, arguments) || this;
          }
          (n = t), ((e = i).prototype = Object.create(n.prototype)), ((e.prototype.constructor = e).__proto__ = n);
          var o = i.prototype;
          return (
              (o.isWithContent = function () {
                  return this.getTitle() || this._getContent();
              }),
              (o.addAttachmentClass = function (t) {
                  g(this.getTipElement()).addClass($e + "-" + t);
              }),
              (o.getTipElement = function () {
                  return (this.tip = this.tip || g(this.config.template)[0]), this.tip;
              }),
              (o.setContent = function () {
                  var t = g(this.getTipElement());
                  this.setElementContent(t.find(nn), this.getTitle());
                  var e = this._getContent();
                  "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(on), e), t.removeClass(tn + " " + en);
              }),
              (o._getContent = function () {
                  return this.element.getAttribute("data-content") || this.config.content;
              }),
              (o._cleanTipClass = function () {
                  var t = g(this.getTipElement()),
                      e = t.attr("class").match(Ge);
                  null !== e && 0 < e.length && t.removeClass(e.join(""));
              }),
              (i._jQueryInterface = function (n) {
                  return this.each(function () {
                      var t = g(this).data(Ye),
                          e = "object" == typeof n ? n : null;
                      if ((t || !/dispose|hide/.test(n)) && (t || ((t = new i(this, e)), g(this).data(Ye, t)), "string" == typeof n)) {
                          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                          t[n]();
                      }
                  });
              }),
              s(i, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return Je;
                      },
                  },
                  {
                      key: "NAME",
                      get: function () {
                          return Ve;
                      },
                  },
                  {
                      key: "DATA_KEY",
                      get: function () {
                          return Ye;
                      },
                  },
                  {
                      key: "Event",
                      get: function () {
                          return rn;
                      },
                  },
                  {
                      key: "EVENT_KEY",
                      get: function () {
                          return ze;
                      },
                  },
                  {
                      key: "DefaultType",
                      get: function () {
                          return Ze;
                      },
                  },
              ]),
              i
          );
      })(Be);
  (g.fn[Ve] = sn._jQueryInterface),
      (g.fn[Ve].Constructor = sn),
      (g.fn[Ve].noConflict = function () {
          return (g.fn[Ve] = Xe), sn._jQueryInterface;
      });
  var an = "scrollspy",
      ln = "bs.scrollspy",
      cn = "." + ln,
      hn = g.fn[an],
      un = { offset: 10, method: "auto", target: "" },
      fn = { offset: "number", method: "string", target: "(string|element)" },
      dn = { ACTIVATE: "activate" + cn, SCROLL: "scroll" + cn, LOAD_DATA_API: "load" + cn + ".data-api" },
      gn = "dropdown-item",
      _n = "active",
      mn = '[data-spy="scroll"]',
      pn = ".nav, .list-group",
      vn = ".nav-link",
      yn = ".nav-item",
      En = ".list-group-item",
      Cn = ".dropdown",
      Tn = ".dropdown-item",
      Sn = ".dropdown-toggle",
      bn = "offset",
      In = "position",
      Dn = (function () {
          function n(t, e) {
              var n = this;
              (this._element = t),
                  (this._scrollElement = "BODY" === t.tagName ? window : t),
                  (this._config = this._getConfig(e)),
                  (this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  g(this._scrollElement).on(dn.SCROLL, function (t) {
                      return n._process(t);
                  }),
                  this.refresh(),
                  this._process();
          }
          var t = n.prototype;
          return (
              (t.refresh = function () {
                  var e = this,
                      t = this._scrollElement === this._scrollElement.window ? bn : In,
                      o = "auto" === this._config.method ? t : this._config.method,
                      r = o === In ? this._getScrollTop() : 0;
                  (this._offsets = []),
                      (this._targets = []),
                      (this._scrollHeight = this._getScrollHeight()),
                      [].slice
                          .call(document.querySelectorAll(this._selector))
                          .map(function (t) {
                              var e,
                                  n = _.getSelectorFromElement(t);
                              if ((n && (e = document.querySelector(n)), e)) {
                                  var i = e.getBoundingClientRect();
                                  if (i.width || i.height) return [g(e)[o]().top + r, n];
                              }
                              return null;
                          })
                          .filter(function (t) {
                              return t;
                          })
                          .sort(function (t, e) {
                              return t[0] - e[0];
                          })
                          .forEach(function (t) {
                              e._offsets.push(t[0]), e._targets.push(t[1]);
                          });
              }),
              (t.dispose = function () {
                  g.removeData(this._element, ln),
                      g(this._scrollElement).off(cn),
                      (this._element = null),
                      (this._scrollElement = null),
                      (this._config = null),
                      (this._selector = null),
                      (this._offsets = null),
                      (this._targets = null),
                      (this._activeTarget = null),
                      (this._scrollHeight = null);
              }),
              (t._getConfig = function (t) {
                  if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                      var e = g(t.target).attr("id");
                      e || ((e = _.getUID(an)), g(t.target).attr("id", e)), (t.target = "#" + e);
                  }
                  return _.typeCheckConfig(an, t, fn), t;
              }),
              (t._getScrollTop = function () {
                  return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
              }),
              (t._getScrollHeight = function () {
                  return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
              }),
              (t._getOffsetHeight = function () {
                  return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
              }),
              (t._process = function () {
                  var t = this._getScrollTop() + this._config.offset,
                      e = this._getScrollHeight(),
                      n = this._config.offset + e - this._getOffsetHeight();
                  if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                      var i = this._targets[this._targets.length - 1];
                      this._activeTarget !== i && this._activate(i);
                  } else {
                      if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                      for (var o = this._offsets.length; o--; ) {
                          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
                      }
                  }
              }),
              (t._activate = function (e) {
                  (this._activeTarget = e), this._clear();
                  var t = this._selector.split(",").map(function (t) {
                          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                      }),
                      n = g([].slice.call(document.querySelectorAll(t.join(","))));
                  n.hasClass(gn)
                      ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n))
                      : (n.addClass(_n),
                        n
                            .parents(pn)
                            .prev(vn + ", " + En)
                            .addClass(_n),
                        n.parents(pn).prev(yn).children(vn).addClass(_n)),
                      g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e });
              }),
              (t._clear = function () {
                  [].slice
                      .call(document.querySelectorAll(this._selector))
                      .filter(function (t) {
                          return t.classList.contains(_n);
                      })
                      .forEach(function (t) {
                          return t.classList.remove(_n);
                      });
              }),
              (n._jQueryInterface = function (e) {
                  return this.each(function () {
                      var t = g(this).data(ln);
                      if ((t || ((t = new n(this, "object" == typeof e && e)), g(this).data(ln, t)), "string" == typeof e)) {
                          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                          t[e]();
                      }
                  });
              }),
              s(n, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return un;
                      },
                  },
              ]),
              n
          );
      })();
  g(window).on(dn.LOAD_DATA_API, function () {
      for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
          var n = g(t[e]);
          Dn._jQueryInterface.call(n, n.data());
      }
  }),
      (g.fn[an] = Dn._jQueryInterface),
      (g.fn[an].Constructor = Dn),
      (g.fn[an].noConflict = function () {
          return (g.fn[an] = hn), Dn._jQueryInterface;
      });
  var wn = "bs.tab",
      An = "." + wn,
      Nn = g.fn.tab,
      On = { HIDE: "hide" + An, HIDDEN: "hidden" + An, SHOW: "show" + An, SHOWN: "shown" + An, CLICK_DATA_API: "click" + An + ".data-api" },
      kn = "dropdown-menu",
      Pn = "active",
      Ln = "disabled",
      jn = "fade",
      Hn = "show",
      Rn = ".dropdown",
      xn = ".nav, .list-group",
      Fn = ".active",
      Un = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      qn = ".dropdown-toggle",
      Mn = "> .dropdown-menu .active",
      Kn = (function () {
          function i(t) {
              this._element = t;
          }
          var t = i.prototype;
          return (
              (t.show = function () {
                  var n = this;
                  if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn)) || g(this._element).hasClass(Ln))) {
                      var t,
                          i,
                          e = g(this._element).closest(xn)[0],
                          o = _.getSelectorFromElement(this._element);
                      if (e) {
                          var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                          i = (i = g.makeArray(g(e).find(r)))[i.length - 1];
                      }
                      var s = g.Event(On.HIDE, { relatedTarget: this._element }),
                          a = g.Event(On.SHOW, { relatedTarget: i });
                      if ((i && g(i).trigger(s), g(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                          o && (t = document.querySelector(o)), this._activate(this._element, e);
                          var l = function () {
                              var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                                  e = g.Event(On.SHOWN, { relatedTarget: i });
                              g(i).trigger(t), g(n._element).trigger(e);
                          };
                          t ? this._activate(t, t.parentNode, l) : l();
                      }
                  }
              }),
              (t.dispose = function () {
                  g.removeData(this._element, wn), (this._element = null);
              }),
              (t._activate = function (t, e, n) {
                  var i = this,
                      o = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ? g(e).children(Fn) : g(e).find(Un))[0],
                      r = n && o && g(o).hasClass(jn),
                      s = function () {
                          return i._transitionComplete(t, o, n);
                      };
                  if (o && r) {
                      var a = _.getTransitionDurationFromElement(o);
                      g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a);
                  } else s();
              }),
              (t._transitionComplete = function (t, e, n) {
                  if (e) {
                      g(e).removeClass(Pn);
                      var i = g(e.parentNode).find(Mn)[0];
                      i && g(i).removeClass(Pn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
                  }
                  if ((g(t).addClass(Pn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), _.reflow(t), t.classList.contains(jn) && t.classList.add(Hn), t.parentNode && g(t.parentNode).hasClass(kn))) {
                      var o = g(t).closest(Rn)[0];
                      if (o) {
                          var r = [].slice.call(o.querySelectorAll(qn));
                          g(r).addClass(Pn);
                      }
                      t.setAttribute("aria-expanded", !0);
                  }
                  n && n();
              }),
              (i._jQueryInterface = function (n) {
                  return this.each(function () {
                      var t = g(this),
                          e = t.data(wn);
                      if ((e || ((e = new i(this)), t.data(wn, e)), "string" == typeof n)) {
                          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                          e[n]();
                      }
                  });
              }),
              s(i, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
              ]),
              i
          );
      })();
  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
      t.preventDefault(), Kn._jQueryInterface.call(g(this), "show");
  }),
      (g.fn.tab = Kn._jQueryInterface),
      (g.fn.tab.Constructor = Kn),
      (g.fn.tab.noConflict = function () {
          return (g.fn.tab = Nn), Kn._jQueryInterface;
      });
  var Qn = "toast",
      Bn = "bs.toast",
      Vn = "." + Bn,
      Yn = g.fn[Qn],
      zn = { CLICK_DISMISS: "click.dismiss" + Vn, HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn },
      Xn = "fade",
      $n = "hide",
      Gn = "show",
      Jn = "showing",
      Zn = { animation: "boolean", autohide: "boolean", delay: "number" },
      ti = { animation: !0, autohide: !0, delay: 500 },
      ei = '[data-dismiss="toast"]',
      ni = (function () {
          function i(t, e) {
              (this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners();
          }
          var t = i.prototype;
          return (
              (t.show = function () {
                  var t = this;
                  g(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Xn);
                  var e = function () {
                      t._element.classList.remove(Jn), t._element.classList.add(Gn), g(t._element).trigger(zn.SHOWN), t._config.autohide && t.hide();
                  };
                  if ((this._element.classList.remove($n), this._element.classList.add(Jn), this._config.animation)) {
                      var n = _.getTransitionDurationFromElement(this._element);
                      g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                  } else e();
              }),
              (t.hide = function (t) {
                  var e = this;
                  this._element.classList.contains(Gn) &&
                      (g(this._element).trigger(zn.HIDE),
                      t
                          ? this._close()
                          : (this._timeout = setTimeout(function () {
                                e._close();
                            }, this._config.delay)));
              }),
              (t.dispose = function () {
                  clearTimeout(this._timeout),
                      (this._timeout = null),
                      this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
                      g(this._element).off(zn.CLICK_DISMISS),
                      g.removeData(this._element, Bn),
                      (this._element = null),
                      (this._config = null);
              }),
              (t._getConfig = function (t) {
                  return (t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {})), _.typeCheckConfig(Qn, t, this.constructor.DefaultType), t;
              }),
              (t._setListeners = function () {
                  var t = this;
                  g(this._element).on(zn.CLICK_DISMISS, ei, function () {
                      return t.hide(!0);
                  });
              }),
              (t._close = function () {
                  var t = this,
                      e = function () {
                          t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN);
                      };
                  if ((this._element.classList.remove(Gn), this._config.animation)) {
                      var n = _.getTransitionDurationFromElement(this._element);
                      g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n);
                  } else e();
              }),
              (i._jQueryInterface = function (n) {
                  return this.each(function () {
                      var t = g(this),
                          e = t.data(Bn);
                      if ((e || ((e = new i(this, "object" == typeof n && n)), t.data(Bn, e)), "string" == typeof n)) {
                          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                          e[n](this);
                      }
                  });
              }),
              s(i, null, [
                  {
                      key: "VERSION",
                      get: function () {
                          return "4.3.1";
                      },
                  },
                  {
                      key: "DefaultType",
                      get: function () {
                          return Zn;
                      },
                  },
                  {
                      key: "Default",
                      get: function () {
                          return ti;
                      },
                  },
              ]),
              i
          );
      })();
  (g.fn[Qn] = ni._jQueryInterface),
      (g.fn[Qn].Constructor = ni),
      (g.fn[Qn].noConflict = function () {
          return (g.fn[Qn] = Yn), ni._jQueryInterface;
      }),
      (function () {
          if ("undefined" == typeof g) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var t = g.fn.jquery.split(" ")[0].split(".");
          if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      })(),
      (t.Util = _),
      (t.Alert = p),
      (t.Button = P),
      (t.Carousel = lt),
      (t.Collapse = bt),
      (t.Dropdown = Jt),
      (t.Modal = ve),
      (t.Popover = sn),
      (t.Scrollspy = Dn),
      (t.Tab = Kn),
      (t.Toast = ni),
      (t.Tooltip = Be),
      Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map

/*------------ //////// ---------------*/

/*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
* https://jqueryvalidation.org/
* Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? (module.exports = a(require("jquery"))) : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
      validate: function (b) {
          if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
          var c = a.data(this[0], "validator");
          return c
              ? c
              : (this.attr("novalidate", "novalidate"),
                (c = new a.validator(b, this[0])),
                a.data(this[0], "validator", c),
                c.settings.onsubmit &&
                    (this.on("click.validate", ":submit", function (b) {
                        (c.submitButton = b.currentTarget), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0);
                    }),
                    this.on("submit.validate", function (b) {
                        function d() {
                            var d, e;
                            return (
                                c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                                !(c.settings.submitHandler && !c.settings.debug) || ((e = c.settings.submitHandler.call(c, c.currentForm, b)), d && d.remove(), void 0 !== e && e)
                            );
                        }
                        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? ((c.cancelSubmit = !1), d()) : c.form() ? (c.pendingRequest ? ((c.formSubmitted = !0), !1) : d()) : (c.focusInvalid(), !1);
                    })),
                c);
      },
      valid: function () {
          var b, c, d;
          return (
              a(this[0]).is("form")
                  ? (b = this.validate().form())
                  : ((d = []),
                    (b = !0),
                    (c = a(this[0].form).validate()),
                    this.each(function () {
                        (b = c.element(this) && b), b || (d = d.concat(c.errorList));
                    }),
                    (c.errorList = d)),
              b
          );
      },
      rules: function (b, c) {
          var d,
              e,
              f,
              g,
              h,
              i,
              j = this[0],
              k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
          if (null != j && (!j.form && k && ((j.form = this.closest("form")[0]), (j.name = this.attr("name"))), null != j.form)) {
              if (b)
                  switch (((d = a.data(j.form, "validator").settings), (e = d.rules), (f = a.validator.staticRules(j)), b)) {
                      case "add":
                          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, (e[j.name] = f), c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                          break;
                      case "remove":
                          return c
                              ? ((i = {}),
                                a.each(c.split(/\s/), function (a, b) {
                                    (i[b] = f[b]), delete f[b];
                                }),
                                i)
                              : (delete e[j.name], f);
                  }
              return (
                  (g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j)),
                  g.required && ((h = g.required), delete g.required, (g = a.extend({ required: h }, g))),
                  g.remote && ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
                  g
              );
          }
      },
  }),
      a.extend(a.expr.pseudos || a.expr[":"], {
          blank: function (b) {
              return !a.trim("" + a(b).val());
          },
          filled: function (b) {
              var c = a(b).val();
              return null !== c && !!a.trim("" + c);
          },
          unchecked: function (b) {
              return !a(b).prop("checked");
          },
      }),
      (a.validator = function (b, c) {
          (this.settings = a.extend(!0, {}, a.validator.defaults, b)), (this.currentForm = c), this.init();
      }),
      (a.validator.format = function (b, c) {
          return 1 === arguments.length
              ? function () {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c);
                }
              : void 0 === c
              ? b
              : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
                c.constructor !== Array && (c = [c]),
                a.each(c, function (a, c) {
                    b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                        return c;
                    });
                }),
                b);
      }),
      a.extend(a.validator, {
          defaults: {
              messages: {},
              groups: {},
              rules: {},
              errorClass: "error",
              pendingClass: "pending",
              validClass: "valid",
              errorElement: "label",
              focusCleanup: !1,
              focusInvalid: !0,
              errorContainer: a([]),
              errorLabelContainer: a([]),
              onsubmit: !0,
              ignore: ":hidden",
              ignoreTitle: !1,
              onfocusin: function (a) {
                  (this.lastActive = a), this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)));
              },
              onfocusout: function (a) {
                  this.checkable(a) || (!(a.name in this.submitted) && this.optional(a)) || this.element(a);
              },
              onkeyup: function (b, c) {
                  var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                  (9 === c.which && "" === this.elementValue(b)) || a.inArray(c.keyCode, d) !== -1 || ((b.name in this.submitted || b.name in this.invalid) && this.element(b));
              },
              onclick: function (a) {
                  a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
              },
              highlight: function (b, c, d) {
                  "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
              },
              unhighlight: function (b, c, d) {
                  "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
              },
          },
          setDefaults: function (b) {
              a.extend(a.validator.defaults, b);
          },
          messages: {
              required: "This field is required.",
              remote: "Please fix this field.",
              email: "Please enter a valid email address.",
              url: "Please enter a valid URL.",
              date: "Please enter a valid date.",
              dateISO: "Please enter a valid date (ISO).",
              number: "Please enter a valid number.",
              digits: "Please enter only digits.",
              equalTo: "Please enter the same value again.",
              maxlength: a.validator.format("Please enter no more than {0} characters."),
              minlength: a.validator.format("Please enter at least {0} characters."),
              rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
              range: a.validator.format("Please enter a value between {0} and {1}."),
              max: a.validator.format("Please enter a value less than or equal to {0}."),
              min: a.validator.format("Please enter a value greater than or equal to {0}."),
              step: a.validator.format("Please enter a multiple of {0}."),
          },
          autoCreateRanges: !1,
          prototype: {
              init: function () {
                  function b(b) {
                      var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                      if ((!this.form && c && ((this.form = a(this).closest("form")[0]), (this.name = a(this).attr("name"))), d === this.form)) {
                          var e = a.data(this.form, "validator"),
                              f = "on" + b.type.replace(/^validate/, ""),
                              g = e.settings;
                          g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
                      }
                  }
                  (this.labelContainer = a(this.settings.errorLabelContainer)),
                      (this.errorContext = (this.labelContainer.length && this.labelContainer) || a(this.currentForm)),
                      (this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
                      (this.submitted = {}),
                      (this.valueCache = {}),
                      (this.pendingRequest = 0),
                      (this.pending = {}),
                      (this.invalid = {}),
                      this.reset();
                  var c,
                      d = this.currentForm,
                      e = (this.groups = {});
                  a.each(this.settings.groups, function (b, c) {
                      "string" == typeof c && (c = c.split(/\s/)),
                          a.each(c, function (a, c) {
                              e[c] = b;
                          });
                  }),
                      (c = this.settings.rules),
                      a.each(c, function (b, d) {
                          c[b] = a.validator.normalizeRule(d);
                      }),
                      a(this.currentForm)
                          .on(
                              "focusin.validate focusout.validate keyup.validate",
                              ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                              b
                          )
                          .on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                      this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
              },
              form: function () {
                  return this.checkForm(), a.extend(this.submitted, this.errorMap), (this.invalid = a.extend({}, this.errorMap)), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
              },
              checkForm: function () {
                  this.prepareForm();
                  for (var a = 0, b = (this.currentElements = this.elements()); b[a]; a++) this.check(b[a]);
                  return this.valid();
              },
              element: function (b) {
                  var c,
                      d,
                      e = this.clean(b),
                      f = this.validationTargetFor(e),
                      g = this,
                      h = !0;
                  return (
                      void 0 === f
                          ? delete this.invalid[e.name]
                          : (this.prepareElement(f),
                            (this.currentElements = a(f)),
                            (d = this.groups[f.name]),
                            d &&
                                a.each(this.groups, function (a, b) {
                                    b === d && a !== f.name && ((e = g.validationTargetFor(g.clean(g.findByName(a)))), e && e.name in g.invalid && (g.currentElements.push(e), (h = g.check(e) && h)));
                                }),
                            (c = this.check(f) !== !1),
                            (h = h && c),
                            c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                            this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            a(b).attr("aria-invalid", !c)),
                      h
                  );
              },
              showErrors: function (b) {
                  if (b) {
                      var c = this;
                      a.extend(this.errorMap, b),
                          (this.errorList = a.map(this.errorMap, function (a, b) {
                              return { message: a, element: c.findByName(b)[0] };
                          })),
                          (this.successList = a.grep(this.successList, function (a) {
                              return !(a.name in b);
                          }));
                  }
                  this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
              },
              resetForm: function () {
                  a.fn.resetForm && a(this.currentForm).resetForm(), (this.invalid = {}), (this.submitted = {}), this.prepareForm(), this.hideErrors();
                  var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                  this.resetElements(b);
              },
              resetElements: function (a) {
                  var b;
                  if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                  else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
              },
              numberOfInvalids: function () {
                  return this.objectLength(this.invalid);
              },
              objectLength: function (a) {
                  var b,
                      c = 0;
                  for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                  return c;
              },
              hideErrors: function () {
                  this.hideThese(this.toHide);
              },
              hideThese: function (a) {
                  a.not(this.containers).text(""), this.addWrapper(a).hide();
              },
              valid: function () {
                  return 0 === this.size();
              },
              size: function () {
                  return this.errorList.length;
              },
              focusInvalid: function () {
                  if (this.settings.focusInvalid)
                      try {
                          a(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                              .filter(":visible")
                              .trigger("focus")
                              .trigger("focusin");
                      } catch (b) {}
              },
              findLastActive: function () {
                  var b = this.lastActive;
                  return (
                      b &&
                      1 ===
                          a.grep(this.errorList, function (a) {
                              return a.element.name === b.name;
                          }).length &&
                      b
                  );
              },
              elements: function () {
                  var b = this,
                      c = {};
                  return a(this.currentForm)
                      .find("input, select, textarea, [contenteditable]")
                      .not(":submit, :reset, :image, :disabled")
                      .not(this.settings.ignore)
                      .filter(function () {
                          var d = this.name || a(this).attr("name"),
                              e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                          return (
                              !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                              e && ((this.form = a(this).closest("form")[0]), (this.name = d)),
                              this.form === b.currentForm && !(d in c || !b.objectLength(a(this).rules())) && ((c[d] = !0), !0)
                          );
                      });
              },
              clean: function (b) {
                  return a(b)[0];
              },
              errors: function () {
                  var b = this.settings.errorClass.split(" ").join(".");
                  return a(this.settings.errorElement + "." + b, this.errorContext);
              },
              resetInternals: function () {
                  (this.successList = []), (this.errorList = []), (this.errorMap = {}), (this.toShow = a([])), (this.toHide = a([]));
              },
              reset: function () {
                  this.resetInternals(), (this.currentElements = a([]));
              },
              prepareForm: function () {
                  this.reset(), (this.toHide = this.errors().add(this.containers));
              },
              prepareElement: function (a) {
                  this.reset(), (this.toHide = this.errorsFor(a));
              },
              elementValue: function (b) {
                  var c,
                      d,
                      e = a(b),
                      f = b.type,
                      g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                  return "radio" === f || "checkbox" === f
                      ? this.findByName(b.name).filter(":checked").val()
                      : "number" === f && "undefined" != typeof b.validity
                      ? b.validity.badInput
                          ? "NaN"
                          : e.val()
                      : ((c = g ? e.text() : e.val()),
                        "file" === f
                            ? "C:\\fakepath\\" === c.substr(0, 12)
                                ? c.substr(12)
                                : ((d = c.lastIndexOf("/")), d >= 0 ? c.substr(d + 1) : ((d = c.lastIndexOf("\\")), d >= 0 ? c.substr(d + 1) : c))
                            : "string" == typeof c
                            ? c.replace(/\r/g, "")
                            : c);
              },
              check: function (b) {
                  b = this.validationTargetFor(this.clean(b));
                  var c,
                      d,
                      e,
                      f,
                      g = a(b).rules(),
                      h = a.map(g, function (a, b) {
                          return b;
                      }).length,
                      i = !1,
                      j = this.elementValue(b);
                  "function" == typeof g.normalizer ? (f = g.normalizer) : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && ((j = f.call(b, j)), delete g.normalizer);
                  for (d in g) {
                      e = { method: d, parameters: g[d] };
                      try {
                          if (((c = a.validator.methods[d].call(this, j, b, e.parameters)), "dependency-mismatch" === c && 1 === h)) {
                              i = !0;
                              continue;
                          }
                          if (((i = !1), "pending" === c)) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                          if (!c) return this.formatAndAdd(b, e), !1;
                      } catch (k) {
                          throw (
                              (this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k),
                              k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                              k)
                          );
                      }
                  }
                  if (!i) return this.objectLength(g) && this.successList.push(b), !0;
              },
              customDataMessage: function (b, c) {
                  return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
              },
              customMessage: function (a, b) {
                  var c = this.settings.messages[a];
                  return c && (c.constructor === String ? c : c[b]);
              },
              findDefined: function () {
                  for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
              },
              defaultMessage: function (b, c) {
                  "string" == typeof c && (c = { method: c });
                  var d = this.findDefined(
                          this.customMessage(b.name, c.method),
                          this.customDataMessage(b, c.method),
                          (!this.settings.ignoreTitle && b.title) || void 0,
                          a.validator.messages[c.method],
                          "<strong>Warning: No message defined for " + b.name + "</strong>"
                      ),
                      e = /\$?\{(\d+)\}/g;
                  return "function" == typeof d ? (d = d.call(this, c.parameters, b)) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d;
              },
              formatAndAdd: function (a, b) {
                  var c = this.defaultMessage(a, b);
                  this.errorList.push({ message: c, element: a, method: b.method }), (this.errorMap[a.name] = c), (this.submitted[a.name] = c);
              },
              addWrapper: function (a) {
                  return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
              },
              defaultShowErrors: function () {
                  var a, b, c;
                  for (a = 0; this.errorList[a]; a++)
                      (c = this.errorList[a]), this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                  if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                  if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                  (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
              },
              validElements: function () {
                  return this.currentElements.not(this.invalidElements());
              },
              invalidElements: function () {
                  return a(this.errorList).map(function () {
                      return this.element;
                  });
              },
              showLabel: function (b, c) {
                  var d,
                      e,
                      f,
                      g,
                      h = this.errorsFor(b),
                      i = this.idOrName(b),
                      j = a(b).attr("aria-describedby");
                  h.length
                      ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c))
                      : ((h = a("<" + this.settings.errorElement + ">")
                            .attr("id", i + "-error")
                            .addClass(this.settings.errorClass)
                            .html(c || "")),
                        (d = h),
                        this.settings.wrapper &&
                            (d = h
                                .hide()
                                .show()
                                .wrap("<" + this.settings.wrapper + "/>")
                                .parent()),
                        this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
                        h.is("label")
                            ? h.attr("for", i)
                            : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length &&
                              ((f = h.attr("id")),
                              j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : (j = f),
                              a(b).attr("aria-describedby", j),
                              (e = this.groups[b.name]),
                              e &&
                                  ((g = this),
                                  a.each(g.groups, function (b, c) {
                                      c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"));
                                  })))),
                      !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                      (this.toShow = this.toShow.add(h));
              },
              errorsFor: function (b) {
                  var c = this.escapeCssMeta(this.idOrName(b)),
                      d = a(b).attr("aria-describedby"),
                      e = "label[for='" + c + "'], label[for='" + c + "'] *";
                  return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e);
              },
              escapeCssMeta: function (a) {
                  return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1");
              },
              idOrName: function (a) {
                  return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
              },
              validationTargetFor: function (b) {
                  return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
              },
              checkable: function (a) {
                  return /radio|checkbox/i.test(a.type);
              },
              findByName: function (b) {
                  return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']");
              },
              getLength: function (b, c) {
                  switch (c.nodeName.toLowerCase()) {
                      case "select":
                          return a("option:selected", c).length;
                      case "input":
                          if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                  }
                  return b.length;
              },
              depend: function (a, b) {
                  return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b);
              },
              dependTypes: {
                  boolean: function (a) {
                      return a;
                  },
                  string: function (b, c) {
                      return !!a(b, c.form).length;
                  },
                  function: function (a, b) {
                      return a(b);
                  },
              },
              optional: function (b) {
                  var c = this.elementValue(b);
                  return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
              },
              startRequest: function (b) {
                  this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), (this.pending[b.name] = !0));
              },
              stopRequest: function (b, c) {
                  this.pendingRequest--,
                      this.pendingRequest < 0 && (this.pendingRequest = 0),
                      delete this.pending[b.name],
                      a(b).removeClass(this.settings.pendingClass),
                      c && 0 === this.pendingRequest && this.formSubmitted && this.form()
                          ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), (this.formSubmitted = !1))
                          : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), (this.formSubmitted = !1));
              },
              previousValue: function (b, c) {
                  return (c = ("string" == typeof c && c) || "remote"), a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, { method: c }) });
              },
              destroy: function () {
                  this.resetForm(),
                      a(this.currentForm)
                          .off(".validate")
                          .removeData("validator")
                          .find(".validate-equalTo-blur")
                          .off(".validate-equalTo")
                          .removeClass("validate-equalTo-blur")
                          .find(".validate-lessThan-blur")
                          .off(".validate-lessThan")
                          .removeClass("validate-lessThan-blur")
                          .find(".validate-lessThanEqual-blur")
                          .off(".validate-lessThanEqual")
                          .removeClass("validate-lessThanEqual-blur")
                          .find(".validate-greaterThanEqual-blur")
                          .off(".validate-greaterThanEqual")
                          .removeClass("validate-greaterThanEqual-blur")
                          .find(".validate-greaterThan-blur")
                          .off(".validate-greaterThan")
                          .removeClass("validate-greaterThan-blur");
              },
          },
          classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
          addClassRules: function (b, c) {
              b.constructor === String ? (this.classRuleSettings[b] = c) : a.extend(this.classRuleSettings, b);
          },
          classRules: function (b) {
              var c = {},
                  d = a(b).attr("class");
              return (
                  d &&
                      a.each(d.split(" "), function () {
                          this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
                      }),
                  c
              );
          },
          normalizeAttributeRule: function (a, b, c, d) {
              /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && ((d = Number(d)), isNaN(d) && (d = void 0)), d || 0 === d ? (a[c] = d) : b === c && "range" !== b && (a[c] = !0);
          },
          attributeRules: function (b) {
              var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute("type");
              for (c in a.validator.methods) "required" === c ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d)) : (d = f.attr(c)), this.normalizeAttributeRule(e, g, c, d);
              return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
          },
          dataRules: function (b) {
              var c,
                  d,
                  e = {},
                  f = a(b),
                  g = b.getAttribute("type");
              for (c in a.validator.methods) (d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase())), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
              return e;
          },
          staticRules: function (b) {
              var c = {},
                  d = a.data(b.form, "validator");
              return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
          },
          normalizeRules: function (b, c) {
              return (
                  a.each(b, function (d, e) {
                      if (e === !1) return void delete b[d];
                      if (e.param || e.depends) {
                          var f = !0;
                          switch (typeof e.depends) {
                              case "string":
                                  f = !!a(e.depends, c.form).length;
                                  break;
                              case "function":
                                  f = e.depends.call(c, c);
                          }
                          f ? (b[d] = void 0 === e.param || e.param) : (a.data(c.form, "validator").resetElements(a(c)), delete b[d]);
                      }
                  }),
                  a.each(b, function (d, e) {
                      b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e;
                  }),
                  a.each(["minlength", "maxlength"], function () {
                      b[this] && (b[this] = Number(b[this]));
                  }),
                  a.each(["rangelength", "range"], function () {
                      var c;
                      b[this] && (a.isArray(b[this]) ? (b[this] = [Number(b[this][0]), Number(b[this][1])]) : "string" == typeof b[this] && ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)), (b[this] = [Number(c[0]), Number(c[1])])));
                  }),
                  a.validator.autoCreateRanges &&
                      (null != b.min && null != b.max && ((b.range = [b.min, b.max]), delete b.min, delete b.max),
                      null != b.minlength && null != b.maxlength && ((b.rangelength = [b.minlength, b.maxlength]), delete b.minlength, delete b.maxlength)),
                  b
              );
          },
          normalizeRule: function (b) {
              if ("string" == typeof b) {
                  var c = {};
                  a.each(b.split(/\s/), function () {
                      c[this] = !0;
                  }),
                      (b = c);
              }
              return b;
          },
          addMethod: function (b, c, d) {
              (a.validator.methods[b] = c), (a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b]), c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
          },
          methods: {
              required: function (b, c, d) {
                  if (!this.depend(d, c)) return "dependency-mismatch";
                  if ("select" === c.nodeName.toLowerCase()) {
                      var e = a(c).val();
                      return e && e.length > 0;
                  }
                  return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0;
              },
              email: function (a, b) {
                  return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
              },
              url: function (a, b) {
                  return (
                      this.optional(b) ||
                      /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                          a
                      )
                  );
              },
              date: (function () {
                  var a = !1;
                  return function (b, c) {
                      return (
                          a ||
                              ((a = !0),
                              this.settings.debug &&
                                  window.console &&
                                  console.warn(
                                      "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                                  )),
                          this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                      );
                  };
              })(),
              dateISO: function (a, b) {
                  return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
              },
              number: function (a, b) {
                  return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
              },
              digits: function (a, b) {
                  return this.optional(b) || /^\d+$/.test(a);
              },
              minlength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || e >= d;
              },
              maxlength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || e <= d;
              },
              rangelength: function (b, c, d) {
                  var e = a.isArray(b) ? b.length : this.getLength(b, c);
                  return this.optional(c) || (e >= d[0] && e <= d[1]);
              },
              min: function (a, b, c) {
                  return this.optional(b) || a >= c;
              },
              max: function (a, b, c) {
                  return this.optional(b) || a <= c;
              },
              range: function (a, b, c) {
                  return this.optional(b) || (a >= c[0] && a <= c[1]);
              },
              step: function (b, c, d) {
                  var e,
                      f = a(c).attr("type"),
                      g = "Step attribute on input type " + f + " is not supported.",
                      h = ["text", "number", "range"],
                      i = new RegExp("\\b" + f + "\\b"),
                      j = f && !i.test(h.join()),
                      k = function (a) {
                          var b = ("" + a).match(/(?:\.(\d+))?$/);
                          return b && b[1] ? b[1].length : 0;
                      },
                      l = function (a) {
                          return Math.round(a * Math.pow(10, e));
                      },
                      m = !0;
                  if (j) throw new Error(g);
                  return (e = k(d)), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m;
              },
              equalTo: function (b, c, d) {
                  var e = a(d);
                  return (
                      this.settings.onfocusout &&
                          e.not(".validate-equalTo-blur").length &&
                          e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                              a(c).valid();
                          }),
                      b === e.val()
                  );
              },
              remote: function (b, c, d, e) {
                  if (this.optional(c)) return "dependency-mismatch";
                  e = ("string" == typeof e && e) || "remote";
                  var f,
                      g,
                      h,
                      i = this.previousValue(c, e);
                  return (
                      this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                      (i.originalMessage = i.originalMessage || this.settings.messages[c.name][e]),
                      (this.settings.messages[c.name][e] = i.message),
                      (d = ("string" == typeof d && { url: d }) || d),
                      (h = a.param(a.extend({ data: b }, d.data))),
                      i.old === h
                          ? i.valid
                          : ((i.old = h),
                            (f = this),
                            this.startRequest(c),
                            (g = {}),
                            (g[c.name] = b),
                            a.ajax(
                                a.extend(
                                    !0,
                                    {
                                        mode: "abort",
                                        port: "validate" + c.name,
                                        dataType: "json",
                                        data: g,
                                        context: f.currentForm,
                                        success: function (a) {
                                            var d,
                                                g,
                                                h,
                                                j = a === !0 || "true" === a;
                                            (f.settings.messages[c.name][e] = i.originalMessage),
                                                j
                                                    ? ((h = f.formSubmitted), f.resetInternals(), (f.toHide = f.errorsFor(c)), (f.formSubmitted = h), f.successList.push(c), (f.invalid[c.name] = !1), f.showErrors())
                                                    : ((d = {}), (g = a || f.defaultMessage(c, { method: e, parameters: b })), (d[c.name] = i.message = g), (f.invalid[c.name] = !0), f.showErrors(d)),
                                                (i.valid = j),
                                                f.stopRequest(c, j);
                                        },
                                    },
                                    d
                                )
                            ),
                            "pending")
                  );
              },
          },
      });
  var b,
      c = {};
  return (
      a.ajaxPrefilter
          ? a.ajaxPrefilter(function (a, b, d) {
                var e = a.port;
                "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
            })
          : ((b = a.ajax),
            (a.ajax = function (d) {
                var e = ("mode" in d ? d : a.ajaxSettings).mode,
                    f = ("port" in d ? d : a.ajaxSettings).port;
                return "abort" === e ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f]) : b.apply(this, arguments);
            })),
      a
  );
});
// End Validation

/*
* Owl Carousel v2.3.4
* Copyright 2013-2018 David Deutsch
* Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
*/
!(function (a, b, c, d) {
  function e(b, c) {
      (this.settings = null),
          (this.options = a.extend({}, e.Defaults, c)),
          (this.$element = a(b)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
          (this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }),
          a.each(
              ["onResize", "onThrottledResize"],
              a.proxy(function (b, c) {
                  this._handlers[c] = a.proxy(this[c], this);
              }, this)
          ),
          a.each(
              e.Plugins,
              a.proxy(function (a, b) {
                  this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
              }, this)
          ),
          a.each(
              e.Workers,
              a.proxy(function (b, c) {
                  this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
              }, this)
          ),
          this.setup(),
          this.initialize();
  }
  (e.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      checkVisibility: !0,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: b,
      fallbackEasing: "swing",
      slideTransition: "",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
  }),
      (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (e.Type = { Event: "event", State: "state" }),
      (e.Plugins = {}),
      (e.Workers = [
          {
              filter: ["width", "settings"],
              run: function () {
                  this._width = this.$element.width();
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function (a) {
                  a.current = this._items && this._items[this.relative(this._current)];
              },
          },
          {
              filter: ["items", "settings"],
              run: function () {
                  this.$stage.children(".cloned").remove();
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function (a) {
                  var b = this.settings.margin || "",
                      c = !this.settings.autoWidth,
                      d = this.settings.rtl,
                      e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };
                  !c && this.$stage.children().css(e), (a.css = e);
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function (a) {
                  var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                      c = null,
                      d = this._items.length,
                      e = !this.settings.autoWidth,
                      f = [];
                  for (a.items = { merge: !1, width: b }; d--; )
                      (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
                  this._widths = f;
              },
          },
          {
              filter: ["items", "settings"],
              run: function () {
                  var b = [],
                      c = this._items,
                      d = this.settings,
                      e = Math.max(2 * d.items, 4),
                      f = 2 * Math.ceil(c.length / 2),
                      g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
                      h = "",
                      i = "";
                  for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
                  (this._clones = b), a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function () {
                  for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                      (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
                  this._coordinates = f;
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function () {
                  var a = this.settings.stagePadding,
                      b = this._coordinates,
                      c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };
                  this.$stage.css(c);
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function (a) {
                  var b = this._coordinates.length,
                      c = !this.settings.autoWidth,
                      d = this.$stage.children();
                  if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
                  else c && ((a.css.width = a.items.width), d.css(a.css));
              },
          },
          {
              filter: ["items"],
              run: function () {
                  this._coordinates.length < 1 && this.$stage.removeAttr("style");
              },
          },
          {
              filter: ["width", "items", "settings"],
              run: function (a) {
                  (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
              },
          },
          {
              filter: ["position"],
              run: function () {
                  this.animate(this.coordinates(this._current));
              },
          },
          {
              filter: ["width", "position", "items", "settings"],
              run: function () {
                  var a,
                      b,
                      c,
                      d,
                      e = this.settings.rtl ? 1 : -1,
                      f = 2 * this.settings.stagePadding,
                      g = this.coordinates(this.current()) + f,
                      h = g + this.width() * e,
                      i = [];
                  for (c = 0, d = this._coordinates.length; c < d; c++)
                      (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, "<=", g) && this.op(a, ">", h)) || (this.op(b, "<", g) && this.op(b, ">", h))) && i.push(c);
                  this.$stage.children(".active").removeClass("active"),
                      this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                      this.$stage.children(".center").removeClass("center"),
                      this.settings.center && this.$stage.children().eq(this.current()).addClass("center");
              },
          },
      ]),
      (e.prototype.initializeStage = function () {
          (this.$stage = this.$element.find("." + this.settings.stageClass)),
              this.$stage.length ||
                  (this.$element.addClass(this.options.loadingClass),
                  (this.$stage = a("<" + this.settings.stageElement + ">", { class: this.settings.stageClass }).wrap(a("<div/>", { class: this.settings.stageOuterClass }))),
                  this.$element.append(this.$stage.parent()));
      }),
      (e.prototype.initializeItems = function () {
          var b = this.$element.find(".owl-item");
          if (b.length)
              return (
                  (this._items = b.get().map(function (b) {
                      return a(b);
                  })),
                  (this._mergers = this._items.map(function () {
                      return 1;
                  })),
                  void this.refresh()
              );
          this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
      }),
      (e.prototype.initialize = function () {
          if ((this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading"))) {
              var a, b, c;
              (a = this.$element.find("img")), (b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
          }
          this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
      }),
      (e.prototype.isVisible = function () {
          return !this.settings.checkVisibility || this.$element.is(":visible");
      }),
      (e.prototype.setup = function () {
          var b = this.viewport(),
              c = this.options.responsive,
              d = -1,
              e = null;
          c
              ? (a.each(c, function (a) {
                    a <= b && a > d && (d = Number(a));
                }),
                (e = a.extend({}, this.options, c[d])),
                "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
                delete e.responsive,
                e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d)))
              : (e = a.extend({}, this.options)),
              this.trigger("change", { property: { name: "settings", value: e } }),
              (this._breakpoint = d),
              (this.settings = e),
              this.invalidate("settings"),
              this.trigger("changed", { property: { name: "settings", value: this.settings } });
      }),
      (e.prototype.optionsLogic = function () {
          this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (e.prototype.prepare = function (b) {
          var c = this.trigger("prepare", { content: b });
          return (
              c.data ||
                  (c.data = a("<" + this.settings.itemElement + "/>")
                      .addClass(this.options.itemClass)
                      .append(b)),
              this.trigger("prepared", { content: c.data }),
              c.data
          );
      }),
      (e.prototype.update = function () {
          for (
              var b = 0,
                  c = this._pipe.length,
                  d = a.proxy(function (a) {
                      return this[a];
                  }, this._invalidated),
                  e = {};
              b < c;

          )
              (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
          (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (e.prototype.width = function (a) {
          switch ((a = a || e.Width.Default)) {
              case e.Width.Inner:
              case e.Width.Outer:
                  return this._width;
              default:
                  return this._width - 2 * this.settings.stagePadding + this.settings.margin;
          }
      }),
      (e.prototype.refresh = function () {
          this.enter("refreshing"),
              this.trigger("refresh"),
              this.setup(),
              this.optionsLogic(),
              this.$element.addClass(this.options.refreshClass),
              this.update(),
              this.$element.removeClass(this.options.refreshClass),
              this.leave("refreshing"),
              this.trigger("refreshed");
      }),
      (e.prototype.onThrottledResize = function () {
          b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
      }),
      (e.prototype.onResize = function () {
          return (
              !!this._items.length &&
              this._width !== this.$element.width() &&
              !!this.isVisible() &&
              (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
          );
      }),
      (e.prototype.registerEventHandlers = function () {
          a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
              !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
              this.settings.mouseDrag &&
                  (this.$element.addClass(this.options.dragClass),
                  this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
                  this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
                      return !1;
                  })),
              this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
      }),
      (e.prototype.onDragStart = function (b) {
          var d = null;
          3 !== b.which &&
              (a.support.transform
                  ? ((d = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(",")),
                    (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
                  : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
              this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")),
              this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
              this.speed(0),
              (this._drag.time = new Date().getTime()),
              (this._drag.target = a(b.target)),
              (this._drag.stage.start = d),
              (this._drag.stage.current = d),
              (this._drag.pointer = this.pointer(b)),
              a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
              a(c).one(
                  "mousemove.owl.core touchmove.owl.core",
                  a.proxy(function (b) {
                      var d = this.difference(this._drag.pointer, this.pointer(b));
                      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
                  }, this)
              ));
      }),
      (e.prototype.onDragMove = function (a) {
          var b = null,
              c = null,
              d = null,
              e = this.difference(this._drag.pointer, this.pointer(a)),
              f = this.difference(this._drag.stage.start, e);
          this.is("dragging") &&
              (a.preventDefault(),
              this.settings.loop
                  ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
                  : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
                    (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
                    (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                    (f.x = Math.max(Math.min(f.x, b + d), c + d))),
              (this._drag.stage.current = f),
              this.animate(f.x));
      }),
      (e.prototype.onDragEnd = function (b) {
          var d = this.difference(this._drag.pointer, this.pointer(b)),
              e = this._drag.stage.current,
              f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
          a(c).off(".owl.core"),
              this.$element.removeClass(this.options.grabClass),
              ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                  (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
                  this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
                  this.invalidate("position"),
                  this.update(),
                  (this._drag.direction = f),
                  (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
                      this._drag.target.one("click.owl.core", function () {
                          return !1;
                      })),
              this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
      }),
      (e.prototype.closest = function (b, c) {
          var e = -1,
              f = 30,
              g = this.width(),
              h = this.coordinates();
          return (
              this.settings.freeDrag ||
                  a.each(
                      h,
                      a.proxy(function (a, i) {
                          return (
                              "left" === c && b > i - f && b < i + f
                                  ? (e = a)
                                  : "right" === c && b > i - g - f && b < i - g + f
                                  ? (e = a + 1)
                                  : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
                              -1 === e
                          );
                      }, this)
                  ),
              this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
              e
          );
      }),
      (e.prototype.animate = function (b) {
          var c = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
              c && (this.enter("animating"), this.trigger("translate")),
              a.support.transform3d && a.support.transition
                  ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") })
                  : c
                  ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
                  : this.$stage.css({ left: b + "px" });
      }),
      (e.prototype.is = function (a) {
          return this._states.current[a] && this._states.current[a] > 0;
      }),
      (e.prototype.current = function (a) {
          if (a === d) return this._current;
          if (0 === this._items.length) return d;
          if (((a = this.normalize(a)), this._current !== a)) {
              var b = this.trigger("change", { property: { name: "position", value: a } });
              b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
          }
          return this._current;
      }),
      (e.prototype.invalidate = function (b) {
          return (
              "string" === a.type(b) && ((this._invalidated[b] = !0), this.is("valid") && this.leave("valid")),
              a.map(this._invalidated, function (a, b) {
                  return b;
              })
          );
      }),
      (e.prototype.reset = function (a) {
          (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
      }),
      (e.prototype.normalize = function (a, b) {
          var c = this._items.length,
              e = b ? 0 : this._clones.length;
          return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
      }),
      (e.prototype.relative = function (a) {
          return (a -= this._clones.length / 2), this.normalize(a, !0);
      }),
      (e.prototype.maximum = function (a) {
          var b,
              c,
              d,
              e = this.settings,
              f = this._coordinates.length;
          if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
          else if (e.autoWidth || e.merge) {
              if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
              f = b + 1;
          } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
          return a && (f -= this._clones.length / 2), Math.max(f, 0);
      }),
      (e.prototype.minimum = function (a) {
          return a ? 0 : this._clones.length / 2;
      }),
      (e.prototype.items = function (a) {
          return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
      }),
      (e.prototype.mergers = function (a) {
          return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
      }),
      (e.prototype.clones = function (b) {
          var c = this._clones.length / 2,
              e = c + this._items.length,
              f = function (a) {
                  return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
              };
          return b === d
              ? a.map(this._clones, function (a, b) {
                    return f(b);
                })
              : a.map(this._clones, function (a, c) {
                    return a === b ? f(c) : null;
                });
      }),
      (e.prototype.speed = function (a) {
          return a !== d && (this._speed = a), this._speed;
      }),
      (e.prototype.coordinates = function (b) {
          var c,
              e = 1,
              f = b - 1;
          return b === d
              ? a.map(
                    this._coordinates,
                    a.proxy(function (a, b) {
                        return this.coordinates(b);
                    }, this)
                )
              : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
      }),
      (e.prototype.duration = function (a, b, c) {
          return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
      }),
      (e.prototype.to = function (a, b) {
          var c = this.current(),
              d = null,
              e = a - this.relative(c),
              f = (e > 0) - (e < 0),
              g = this._items.length,
              h = this.minimum(),
              i = this.maximum();
          this.settings.loop
              ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
              : this.settings.rewind
              ? ((i += 1), (a = ((a % i) + i) % i))
              : (a = Math.max(h, Math.min(i, a))),
              this.speed(this.duration(c, a, b)),
              this.current(a),
              this.isVisible() && this.update();
      }),
      (e.prototype.next = function (a) {
          (a = a || !1), this.to(this.relative(this.current()) + 1, a);
      }),
      (e.prototype.prev = function (a) {
          (a = a || !1), this.to(this.relative(this.current()) - 1, a);
      }),
      (e.prototype.onTransitionEnd = function (a) {
          if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
          this.leave("animating"), this.trigger("translated");
      }),
      (e.prototype.viewport = function () {
          var d;
          return (
              this.options.responsiveBaseElement !== b
                  ? (d = a(this.options.responsiveBaseElement).width())
                  : b.innerWidth
                  ? (d = b.innerWidth)
                  : c.documentElement && c.documentElement.clientWidth
                  ? (d = c.documentElement.clientWidth)
                  : console.warn("Can not detect viewport width."),
              d
          );
      }),
      (e.prototype.replace = function (b) {
          this.$stage.empty(),
              (this._items = []),
              b && (b = b instanceof jQuery ? b : a(b)),
              this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
              b
                  .filter(function () {
                      return 1 === this.nodeType;
                  })
                  .each(
                      a.proxy(function (a, b) {
                          (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
                      }, this)
                  ),
              this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
              this.invalidate("items");
      }),
      (e.prototype.add = function (b, c) {
          var e = this.relative(this._current);
          (c = c === d ? this._items.length : this.normalize(c, !0)),
              (b = b instanceof jQuery ? b : a(b)),
              this.trigger("add", { content: b, position: c }),
              (b = this.prepare(b)),
              0 === this._items.length || c === this._items.length
                  ? (0 === this._items.length && this.$stage.append(b),
                    0 !== this._items.length && this._items[c - 1].after(b),
                    this._items.push(b),
                    this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1))
                  : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
              this._items[e] && this.reset(this._items[e].index()),
              this.invalidate("items"),
              this.trigger("added", { content: b, position: c });
      }),
      (e.prototype.remove = function (a) {
          (a = this.normalize(a, !0)) !== d &&
              (this.trigger("remove", { content: this._items[a], position: a }),
              this._items[a].remove(),
              this._items.splice(a, 1),
              this._mergers.splice(a, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: a }));
      }),
      (e.prototype.preloadAutoWidthImages = function (b) {
          b.each(
              a.proxy(function (b, c) {
                  this.enter("pre-loading"),
                      (c = a(c)),
                      a(new Image())
                          .one(
                              "load",
                              a.proxy(function (a) {
                                  c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
                              }, this)
                          )
                          .attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
              }, this)
          );
      }),
      (e.prototype.destroy = function () {
          this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
          for (var d in this._plugins) this._plugins[d].destroy();
          this.$stage.children(".cloned").remove(),
              this.$stage.unwrap(),
              this.$stage.children().contents().unwrap(),
              this.$stage.children().unwrap(),
              this.$stage.remove(),
              this.$element
                  .removeClass(this.options.refreshClass)
                  .removeClass(this.options.loadingClass)
                  .removeClass(this.options.loadedClass)
                  .removeClass(this.options.rtlClass)
                  .removeClass(this.options.dragClass)
                  .removeClass(this.options.grabClass)
                  .attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), ""))
                  .removeData("owl.carousel");
      }),
      (e.prototype.op = function (a, b, c) {
          var d = this.settings.rtl;
          switch (b) {
              case "<":
                  return d ? a > c : a < c;
              case ">":
                  return d ? a < c : a > c;
              case ">=":
                  return d ? a <= c : a >= c;
              case "<=":
                  return d ? a >= c : a <= c;
          }
      }),
      (e.prototype.on = function (a, b, c, d) {
          a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
      }),
      (e.prototype.off = function (a, b, c, d) {
          a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
      }),
      (e.prototype.trigger = function (b, c, d, f, g) {
          var h = { item: { count: this._items.length, index: this.current() } },
              i = a.camelCase(
                  a
                      .grep(["on", b, d], function (a) {
                          return a;
                      })
                      .join("-")
                      .toLowerCase()
              ),
              j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));
          return (
              this._supress[b] ||
                  (a.each(this._plugins, function (a, b) {
                      b.onTrigger && b.onTrigger(j);
                  }),
                  this.register({ type: e.Type.Event, name: b }),
                  this.$element.trigger(j),
                  this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
              j
          );
      }),
      (e.prototype.enter = function (b) {
          a.each(
              [b].concat(this._states.tags[b] || []),
              a.proxy(function (a, b) {
                  this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
              }, this)
          );
      }),
      (e.prototype.leave = function (b) {
          a.each(
              [b].concat(this._states.tags[b] || []),
              a.proxy(function (a, b) {
                  this._states.current[b]--;
              }, this)
          );
      }),
      (e.prototype.register = function (b) {
          if (b.type === e.Type.Event) {
              if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
                  var c = a.event.special[b.name]._default;
                  (a.event.special[b.name]._default = function (a) {
                      return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf("owl")) ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                  }),
                      (a.event.special[b.name].owl = !0);
              }
          } else
              b.type === e.Type.State &&
                  (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
                  (this._states.tags[b.name] = a.grep(
                      this._states.tags[b.name],
                      a.proxy(function (c, d) {
                          return a.inArray(c, this._states.tags[b.name]) === d;
                      }, this)
                  )));
      }),
      (e.prototype.suppress = function (b) {
          a.each(
              b,
              a.proxy(function (a, b) {
                  this._supress[b] = !0;
              }, this)
          );
      }),
      (e.prototype.release = function (b) {
          a.each(
              b,
              a.proxy(function (a, b) {
                  delete this._supress[b];
              }, this)
          );
      }),
      (e.prototype.pointer = function (a) {
          var c = { x: null, y: null };
          return (
              (a = a.originalEvent || a || b.event),
              (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
              a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
              c
          );
      }),
      (e.prototype.isNumeric = function (a) {
          return !isNaN(parseFloat(a));
      }),
      (e.prototype.difference = function (a, b) {
          return { x: a.x - b.x, y: a.y - b.y };
      }),
      (a.fn.owlCarousel = function (b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
              var d = a(this),
                  f = d.data("owl.carousel");
              f ||
                  ((f = new e(this, "object" == typeof b && b)),
                  d.data("owl.carousel", f),
                  a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                      f.register({ type: e.Type.Event, name: c }),
                          f.$element.on(
                              c + ".owl.carousel.core",
                              a.proxy(function (a) {
                                  a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                              }, f)
                          );
                  })),
                  "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
          });
      }),
      (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (b) {
          (this._core = b),
              (this._interval = null),
              (this._visible = null),
              (this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.autoRefresh && this.watch();
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this._core.$element.on(this._handlers);
      };
      (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (e.prototype.watch = function () {
              this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
          }),
          (e.prototype.refresh = function () {
              this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
          }),
          (e.prototype.destroy = function () {
              var a, c;
              b.clearInterval(this._interval);
              for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
              for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (b) {
          (this._core = b),
              (this._loaded = []),
              (this._handlers = {
                  "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                      if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && "position" == b.property.name) || "initialized" == b.type)) {
                          var c = this._core.settings,
                              e = (c.center && Math.ceil(c.items / 2)) || c.items,
                              f = (c.center && -1 * e) || 0,
                              g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                              h = this._core.clones().length,
                              i = a.proxy(function (a, b) {
                                  this.load(b);
                              }, this);
                          for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                      }
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this._core.$element.on(this._handlers);
      };
      (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
          (e.prototype.load = function (c) {
              var d = this._core.$stage.children().eq(c),
                  e = d && d.find(".owl-lazy");
              !e ||
                  a.inArray(d.get(0), this._loaded) > -1 ||
                  (e.each(
                      a.proxy(function (c, d) {
                          var e,
                              f = a(d),
                              g = (b.devicePixelRatio > 1 && f.attr("data-src-retina")) || f.attr("data-src") || f.attr("data-srcset");
                          this._core.trigger("load", { element: f, url: g }, "lazy"),
                              f.is("img")
                                  ? f
                                        .one(
                                            "load.owl.lazy",
                                            a.proxy(function () {
                                                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                            }, this)
                                        )
                                        .attr("src", g)
                                  : f.is("source")
                                  ? f
                                        .one(
                                            "load.owl.lazy",
                                            a.proxy(function () {
                                                this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                            }, this)
                                        )
                                        .attr("srcset", g)
                                  : ((e = new Image()),
                                    (e.onload = a.proxy(function () {
                                        f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
                                    }, this)),
                                    (e.src = g));
                      }, this)
                  ),
                  this._loaded.push(d.get(0)));
          }),
          (e.prototype.destroy = function () {
              var a, b;
              for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
              for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (c) {
          (this._core = c),
              (this._previousHeight = null),
              (this._handlers = {
                  "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.autoHeight && this.update();
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update();
                  }, this),
                  "loaded.owl.lazy": a.proxy(function (a) {
                      a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
          var d = this;
          a(b).on("load", function () {
              d._core.settings.autoHeight && d.update();
          }),
              a(b).resize(function () {
                  d._core.settings.autoHeight &&
                      (null != d._intervalId && clearTimeout(d._intervalId),
                      (d._intervalId = setTimeout(function () {
                          d.update();
                      }, 250)));
              });
      };
      (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
          (e.prototype.update = function () {
              var b = this._core._current,
                  c = b + this._core.settings.items,
                  d = this._core.settings.lazyLoad,
                  e = this._core.$stage.children().toArray().slice(b, c),
                  f = [],
                  g = 0;
              a.each(e, function (b, c) {
                  f.push(a(c).height());
              }),
                  (g = Math.max.apply(null, f)),
                  g <= 1 && d && this._previousHeight && (g = this._previousHeight),
                  (this._previousHeight = g),
                  this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
          }),
          (e.prototype.destroy = function () {
              var a, b;
              for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
              for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (b) {
          (this._core = b),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
                  }, this),
                  "resize.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
                  }, this),
                  "refreshed.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a) {
                      a.namespace && "position" === a.property.name && this._playing && this.stop();
                  }, this),
                  "prepared.owl.carousel": a.proxy(function (b) {
                      if (b.namespace) {
                          var c = a(b.content).find(".owl-video");
                          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                      }
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                  "click.owl.video",
                  ".owl-video-play-icon",
                  a.proxy(function (a) {
                      this.play(a);
                  }, this)
              );
      };
      (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (e.prototype.fetch = function (a, b) {
              var c = (function () {
                      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
                  })(),
                  d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
                  e = a.attr("data-width") || this._core.settings.videoWidth,
                  f = a.attr("data-height") || this._core.settings.videoHeight,
                  g = a.attr("href");
              if (!g) throw new Error("Missing video URL.");
              if (
                  ((d = g.match(
                      /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                  )),
                  d[3].indexOf("youtu") > -1)
              )
                  c = "youtube";
              else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
              else {
                  if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                  c = "vzaar";
              }
              (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
          }),
          (e.prototype.thumbnail = function (b, c) {
              var d,
                  e,
                  f,
                  g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "",
                  h = b.find("img"),
                  i = "src",
                  j = "",
                  k = this._core.settings,
                  l = function (c) {
                      (e = '<div class="owl-video-play-icon"></div>'),
                          (d = k.lazyLoad ? a("<div/>", { class: "owl-video-tn " + j, srcType: c }) : a("<div/>", { class: "owl-video-tn", style: "opacity:1;background-image:url(" + c + ")" })),
                          b.after(d),
                          b.after(e);
                  };
              if ((b.wrap(a("<div/>", { class: "owl-video-wrapper", style: g })), this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")), h.length)) return l(h.attr(i)), h.remove(), !1;
              "youtube" === c.type
                  ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
                  : "vimeo" === c.type
                  ? a.ajax({
                        type: "GET",
                        url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function (a) {
                            (f = a[0].thumbnail_large), l(f);
                        },
                    })
                  : "vzaar" === c.type &&
                    a.ajax({
                        type: "GET",
                        url: "//vzaar.com/api/videos/" + c.id + ".json",
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function (a) {
                            (f = a.framegrab_url), l(f);
                        },
                    });
          }),
          (e.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                  this._playing.find(".owl-video-frame").remove(),
                  this._playing.removeClass("owl-video-playing"),
                  (this._playing = null),
                  this._core.leave("playing"),
                  this._core.trigger("stopped", null, "video");
          }),
          (e.prototype.play = function (b) {
              var c,
                  d = a(b.target),
                  e = d.closest("." + this._core.settings.itemClass),
                  f = this._videos[e.attr("data-video")],
                  g = f.width || "100%",
                  h = f.height || this._core.$stage.height();
              this._playing ||
                  (this._core.enter("playing"),
                  this._core.trigger("play", null, "video"),
                  (e = this._core.items(this._core.relative(e.index()))),
                  this._core.reset(e.index()),
                  (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
                  c.attr("height", h),
                  c.attr("width", g),
                  "youtube" === f.type
                      ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id)
                      : "vimeo" === f.type
                      ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1")
                      : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
                  a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
                  (this._playing = e.addClass("owl-video-playing")));
          }),
          (e.prototype.isInFullScreen = function () {
              var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
              return b && a(b).parent().hasClass("owl-video-frame");
          }),
          (e.prototype.destroy = function () {
              var a, b;
              this._core.$element.off("click.owl.video");
              for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
              for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (b) {
          (this.core = b),
              (this.core.options = a.extend({}, e.Defaults, this.core.options)),
              (this.swapping = !0),
              (this.previous = d),
              (this.next = d),
              (this.handlers = {
                  "change.owl.carousel": a.proxy(function (a) {
                      a.namespace && "position" == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
                  }, this),
                  "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                      a.namespace && (this.swapping = "translated" == a.type);
                  }, this),
                  "translate.owl.carousel": a.proxy(function (a) {
                      a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
                  }, this),
              }),
              this.core.$element.on(this.handlers);
      };
      (e.Defaults = { animateOut: !1, animateIn: !1 }),
          (e.prototype.swap = function () {
              if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                  this.core.speed(0);
                  var b,
                      c = a.proxy(this.clear, this),
                      d = this.core.$stage.children().eq(this.previous),
                      e = this.core.$stage.children().eq(this.next),
                      f = this.core.settings.animateIn,
                      g = this.core.settings.animateOut;
                  this.core.current() !== this.previous &&
                      (g &&
                          ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
                          d
                              .one(a.support.animation.end, c)
                              .css({ left: b + "px" })
                              .addClass("animated owl-animated-out")
                              .addClass(g)),
                      f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
              }
          }),
          (e.prototype.clear = function (b) {
              a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
          }),
          (e.prototype.destroy = function () {
              var a, b;
              for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
              for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      var e = function (b) {
          (this._core = b),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                  "changed.owl.carousel": a.proxy(function (a) {
                      a.namespace && "settings" === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && "position" === a.property.name && this._paused && (this._time = 0);
                  }, this),
                  "initialized.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.autoplay && this.play();
                  }, this),
                  "play.owl.autoplay": a.proxy(function (a, b, c) {
                      a.namespace && this.play(b, c);
                  }, this),
                  "stop.owl.autoplay": a.proxy(function (a) {
                      a.namespace && this.stop();
                  }, this),
                  "mouseover.owl.autoplay": a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                  }, this),
                  "mouseleave.owl.autoplay": a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
                  }, this),
                  "touchstart.owl.core": a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
                  }, this),
                  "touchend.owl.core": a.proxy(function () {
                      this._core.settings.autoplayHoverPause && this.play();
                  }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = a.extend({}, e.Defaults, this._core.options));
      };
      (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
          (e.prototype._next = function (d) {
              (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
                  this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
          }),
          (e.prototype.read = function () {
              return new Date().getTime() - this._time;
          }),
          (e.prototype.play = function (c, d) {
              var e;
              this._core.is("rotating") || this._core.enter("rotating"),
                  (c = c || this._core.settings.autoplayTimeout),
                  (e = Math.min(this._time % (this._timeout || c), c)),
                  this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
                  (this._time += (this.read() % c) - e),
                  (this._timeout = c),
                  (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
          }),
          (e.prototype.stop = function () {
              this._core.is("rotating") && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave("rotating"));
          }),
          (e.prototype.pause = function () {
              this._core.is("rotating") && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
          }),
          (e.prototype.destroy = function () {
              var a, b;
              this.stop();
              for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
              for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      "use strict";
      var e = function (b) {
          (this._core = b),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
              (this._handlers = {
                  "prepared.owl.carousel": a.proxy(function (b) {
                      b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
                  }, this),
                  "added.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
                  }, this),
                  "remove.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
                  }, this),
                  "changed.owl.carousel": a.proxy(function (a) {
                      a.namespace && "position" == a.property.name && this.draw();
                  }, this),
                  "initialized.owl.carousel": a.proxy(function (a) {
                      a.namespace &&
                          !this._initialized &&
                          (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger("initialized", null, "navigation"));
                  }, this),
                  "refreshed.owl.carousel": a.proxy(function (a) {
                      a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this.$element.on(this._handlers);
      };
      (e.Defaults = {
          nav: !1,
          navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
          navSpeed: !1,
          navElement: 'button type="button" role="presentation"',
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
      }),
          (e.prototype.initialize = function () {
              var b,
                  c = this._core.settings;
              (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled")),
                  (this._controls.$previous = a("<" + c.navElement + ">")
                      .addClass(c.navClass[0])
                      .html(c.navText[0])
                      .prependTo(this._controls.$relative)
                      .on(
                          "click",
                          a.proxy(function (a) {
                              this.prev(c.navSpeed);
                          }, this)
                      )),
                  (this._controls.$next = a("<" + c.navElement + ">")
                      .addClass(c.navClass[1])
                      .html(c.navText[1])
                      .appendTo(this._controls.$relative)
                      .on(
                          "click",
                          a.proxy(function (a) {
                              this.next(c.navSpeed);
                          }, this)
                      )),
                  c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
                  (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled")),
                  this._controls.$absolute.on(
                      "click",
                      "button",
                      a.proxy(function (b) {
                          var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                          b.preventDefault(), this.to(d, c.dotsSpeed);
                      }, this)
                  );
              for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
          }),
          (e.prototype.destroy = function () {
              var a, b, c, d, e;
              e = this._core.settings;
              for (a in this._handlers) this.$element.off(a, this._handlers[a]);
              for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
              for (d in this.overides) this._core[d] = this._overrides[d];
              for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null);
          }),
          (e.prototype.update = function () {
              var a,
                  b,
                  c,
                  d = this._core.clones().length / 2,
                  e = d + this._core.items().length,
                  f = this._core.maximum(!0),
                  g = this._core.settings,
                  h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
              if (("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy))
                  for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                      if (b >= h || 0 === b) {
                          if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
                          (b = 0), ++c;
                      }
                      b += this._core.mergers(this._core.relative(a));
                  }
          }),
          (e.prototype.draw = function () {
              var b,
                  c = this._core.settings,
                  d = this._core.items().length <= c.items,
                  e = this._core.relative(this._core.current()),
                  f = c.loop || c.rewind;
              this._controls.$relative.toggleClass("disabled", !c.nav || d),
                  c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
                  this._controls.$absolute.toggleClass("disabled", !c.dots || d),
                  c.dots &&
                      ((b = this._pages.length - this._controls.$absolute.children().length),
                      c.dotsData && 0 !== b
                          ? this._controls.$absolute.html(this._templates.join(""))
                          : b > 0
                          ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
                          : b < 0 && this._controls.$absolute.children().slice(b).remove(),
                      this._controls.$absolute.find(".active").removeClass("active"),
                      this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
          }),
          (e.prototype.onTrigger = function (b) {
              var c = this._core.settings;
              b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
          }),
          (e.prototype.current = function () {
              var b = this._core.relative(this._core.current());
              return a
                  .grep(
                      this._pages,
                      a.proxy(function (a, c) {
                          return a.start <= b && a.end >= b;
                      }, this)
                  )
                  .pop();
          }),
          (e.prototype.getPosition = function (b) {
              var c,
                  d,
                  e = this._core.settings;
              return (
                  "page" == e.slideBy
                      ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
                      : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
                  c
              );
          }),
          (e.prototype.next = function (b) {
              a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
          }),
          (e.prototype.prev = function (b) {
              a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
          }),
          (e.prototype.to = function (b, c, d) {
              var e;
              !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      "use strict";
      var e = function (c) {
          (this._core = c),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                  "initialized.owl.carousel": a.proxy(function (c) {
                      c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
                  }, this),
                  "prepared.owl.carousel": a.proxy(function (b) {
                      if (b.namespace) {
                          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                          if (!c) return;
                          this._hashes[c] = b.content;
                      }
                  }, this),
                  "changed.owl.carousel": a.proxy(function (c) {
                      if (c.namespace && "position" === c.property.name) {
                          var d = this._core.items(this._core.relative(this._core.current())),
                              e = a
                                  .map(this._hashes, function (a, b) {
                                      return a === d ? b : null;
                                  })
                                  .join();
                          if (!e || b.location.hash.slice(1) === e) return;
                          b.location.hash = e;
                      }
                  }, this),
              }),
              (this._core.options = a.extend({}, e.Defaults, this._core.options)),
              this.$element.on(this._handlers),
              a(b).on(
                  "hashchange.owl.navigation",
                  a.proxy(function (a) {
                      var c = b.location.hash.substring(1),
                          e = this._core.$stage.children(),
                          f = this._hashes[c] && e.index(this._hashes[c]);
                      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
                  }, this)
              );
      };
      (e.Defaults = { URLhashListener: !1 }),
          (e.prototype.destroy = function () {
              var c, d;
              a(b).off("hashchange.owl.navigation");
              for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
              for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null);
          }),
          (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
      function e(b, c) {
          var e = !1,
              f = b.charAt(0).toUpperCase() + b.slice(1);
          return (
              a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
                  if (g[b] !== d) return (e = !c || b), !1;
              }),
              e
          );
      }
      function f(a) {
          return e(a, !0);
      }
      var g = a("<support>").get(0).style,
          h = "Webkit Moz O ms".split(" "),
          i = {
              transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } },
              animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } },
          },
          j = {
              csstransforms: function () {
                  return !!e("transform");
              },
              csstransforms3d: function () {
                  return !!e("perspective");
              },
              csstransitions: function () {
                  return !!e("transition");
              },
              cssanimations: function () {
                  return !!e("animation");
              },
          };
      j.csstransitions() && ((a.support.transition = new String(f("transition"))), (a.support.transition.end = i.transition.end[a.support.transition])),
          j.cssanimations() && ((a.support.animation = new String(f("animation"))), (a.support.animation.end = i.animation.end[a.support.animation])),
          j.csstransforms() && ((a.support.transform = new String(f("transform"))), (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*------------ //////// ---------------*/

// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  "use strict";
  function i(t, e) {
      var o,
          i,
          a,
          s = [],
          r = 0;
      (t && t.isDefaultPrevented()) ||
          (t.preventDefault(),
          (e = e || {}),
          t && t.data && (e = h(t.data.options, e)),
          (o = e.$target || n(t.currentTarget).trigger("blur")),
          ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
              (e.selector ? (s = n(e.selector)) : ((i = o.attr("data-fancybox") || ""), i ? ((s = t.data ? t.data.items : []), (s = s.length ? s.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'))) : (s = [o])),
              (r = n(s).index(o)),
              r < 0 && (r = 0),
              (a = n.fancybox.open(s, e, r)),
              (a.$trigger = o)));
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
      if (n.fn.fancybox) return void console.info("fancyBox already initialized");
      var a = {
              closeExisting: !1,
              loop: !1,
              gutter: 50,
              keyboard: !0,
              preventCaptionOverlap: !0,
              arrows: !0,
              infobar: !0,
              smallBtn: "auto",
              toolbar: "auto",
              buttons: ["zoom", "slideShow", "thumbs", "close"],
              idleTime: 3,
              protect: !1,
              modal: !1,
              image: { preload: !1 },
              ajax: { settings: { data: { fancybox: !0 } } },
              iframe: {
                  tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                  preload: !0,
                  css: {},
                  attr: { scrolling: "auto" },
              },
              video: {
                  tpl:
                      '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                  format: "",
                  autoStart: !0,
              },
              defaultType: "image",
              animationEffect: "zoom",
              animationDuration: 366,
              zoomOpacity: "auto",
              transitionEffect: "fade",
              transitionDuration: 366,
              slideClass: "",
              baseClass: "",
              baseTpl:
                  '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
              spinnerTpl: '<div class="fancybox-loading"></div>',
              errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
              btnTpl: {
                  download:
                      '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                  zoom:
                      '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                  close:
                      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                  arrowLeft:
                      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                  arrowRight:
                      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                  smallBtn:
                      '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
              },
              parentEl: "body",
              hideScrollbar: !0,
              autoFocus: !0,
              backFocus: !0,
              trapFocus: !0,
              fullScreen: { autoStart: !1 },
              touch: { vertical: !0, momentum: !0 },
              hash: null,
              media: {},
              slideShow: { autoStart: !1, speed: 3e3 },
              thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
              wheel: "auto",
              onInit: n.noop,
              beforeLoad: n.noop,
              afterLoad: n.noop,
              beforeShow: n.noop,
              afterShow: n.noop,
              beforeClose: n.noop,
              afterClose: n.noop,
              onActivate: n.noop,
              onDeactivate: n.noop,
              clickContent: function (t, e) {
                  return "image" === t.type && "zoom";
              },
              clickSlide: "close",
              clickOutside: "close",
              dblclickContent: !1,
              dblclickSlide: !1,
              dblclickOutside: !1,
              mobile: {
                  preventCaptionOverlap: !1,
                  idleTime: !1,
                  clickContent: function (t, e) {
                      return "image" === t.type && "toggleControls";
                  },
                  clickSlide: function (t, e) {
                      return "image" === t.type ? "toggleControls" : "close";
                  },
                  dblclickContent: function (t, e) {
                      return "image" === t.type && "zoom";
                  },
                  dblclickSlide: function (t, e) {
                      return "image" === t.type && "zoom";
                  },
              },
              lang: "en",
              i18n: {
                  en: {
                      CLOSE: "Close",
                      NEXT: "Next",
                      PREV: "Previous",
                      ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                      PLAY_START: "Start slideshow",
                      PLAY_STOP: "Pause slideshow",
                      FULL_SCREEN: "Full screen",
                      THUMBS: "Thumbnails",
                      DOWNLOAD: "Download",
                      SHARE: "Share",
                      ZOOM: "Zoom",
                  },
                  de: {
                      CLOSE: "Schlie&szlig;en",
                      NEXT: "Weiter",
                      PREV: "Zur&uuml;ck",
                      ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                      PLAY_START: "Diaschau starten",
                      PLAY_STOP: "Diaschau beenden",
                      FULL_SCREEN: "Vollbild",
                      THUMBS: "Vorschaubilder",
                      DOWNLOAD: "Herunterladen",
                      SHARE: "Teilen",
                      ZOOM: "Vergr&ouml;&szlig;ern",
                  },
              },
          },
          s = n(t),
          r = n(e),
          c = 0,
          l = function (t) {
              return t && t.hasOwnProperty && t instanceof n;
          },
          d = (function () {
              return (
                  t.requestAnimationFrame ||
                  t.webkitRequestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  t.oRequestAnimationFrame ||
                  function (e) {
                      return t.setTimeout(e, 1e3 / 60);
                  }
              );
          })(),
          u = (function () {
              return (
                  t.cancelAnimationFrame ||
                  t.webkitCancelAnimationFrame ||
                  t.mozCancelAnimationFrame ||
                  t.oCancelAnimationFrame ||
                  function (e) {
                      t.clearTimeout(e);
                  }
              );
          })(),
          f = (function () {
              var t,
                  n = e.createElement("fakeelement"),
                  o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
              for (t in o) if (void 0 !== n.style[t]) return o[t];
              return "transitionend";
          })(),
          p = function (t) {
              return t && t.length && t[0].offsetHeight;
          },
          h = function (t, e) {
              var o = n.extend(!0, {}, t, e);
              return (
                  n.each(e, function (t, e) {
                      n.isArray(e) && (o[t] = e);
                  }),
                  o
              );
          },
          g = function (t) {
              var o, i;
              return (
                  !(!t || t.ownerDocument !== e) &&
                  (n(".fancybox-container").css("pointer-events", "none"),
                  (o = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }),
                  (i = e.elementFromPoint(o.x, o.y) === t),
                  n(".fancybox-container").css("pointer-events", ""),
                  i)
              );
          },
          b = function (t, e, o) {
              var i = this;
              (i.opts = h({ index: o }, n.fancybox.defaults)),
                  n.isPlainObject(e) && (i.opts = h(i.opts, e)),
                  n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
                  (i.id = i.opts.id || ++c),
                  (i.currIndex = parseInt(i.opts.index, 10) || 0),
                  (i.prevIndex = null),
                  (i.prevPos = null),
                  (i.currPos = 0),
                  (i.firstRun = !0),
                  (i.group = []),
                  (i.slides = {}),
                  i.addContent(t),
                  i.group.length && i.init();
          };
      n.extend(b.prototype, {
          init: function () {
              var o,
                  i,
                  a = this,
                  s = a.group[a.currIndex],
                  r = s.opts;
              r.closeExisting && n.fancybox.close(!0),
                  n("body").addClass("fancybox-active"),
                  !n.fancybox.getInstance() &&
                      !1 !== r.hideScrollbar &&
                      !n.fancybox.isMobile &&
                      e.body.scrollHeight > t.innerHeight &&
                      (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                      n("body").addClass("compensate-for-scrollbar")),
                  (i = ""),
                  n.each(r.buttons, function (t, e) {
                      i += r.btnTpl[e] || "";
                  }),
                  (o = n(a.translate(a, r.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)))
                      .attr("id", "fancybox-container-" + a.id)
                      .addClass(r.baseClass)
                      .data("FancyBox", a)
                      .appendTo(r.parentEl)),
                  (a.$refs = { container: o }),
                  ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                      a.$refs[t] = o.find(".fancybox-" + t);
                  }),
                  a.trigger("onInit"),
                  a.activate(),
                  a.jumpTo(a.currIndex);
          },
          translate: function (t, e) {
              var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
              return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                  return void 0 === n[e] ? t : n[e];
              });
          },
          addContent: function (t) {
              var e,
                  o = this,
                  i = n.makeArray(t);
              n.each(i, function (t, e) {
                  var i,
                      a,
                      s,
                      r,
                      c,
                      l = {},
                      d = {};
                  n.isPlainObject(e)
                      ? ((l = e), (d = e.opts || e))
                      : "object" === n.type(e) && n(e).length
                      ? ((i = n(e)), (d = i.data() || {}), (d = n.extend(!0, {}, d, d.options)), (d.$orig = i), (l.src = o.opts.src || d.src || i.attr("href")), l.type || l.src || ((l.type = "inline"), (l.src = e)))
                      : (l = { type: "html", src: e + "" }),
                      (l.opts = n.extend(!0, {}, o.opts, d)),
                      n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
                      n.fancybox.isMobile && l.opts.mobile && (l.opts = h(l.opts, l.opts.mobile)),
                      (a = l.type || l.opts.type),
                      (r = l.src || ""),
                      !a &&
                          r &&
                          ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                              ? ((a = "video"), l.opts.video.format || (l.opts.video.format = "video/" + ("ogv" === s[1] ? "ogg" : s[1])))
                              : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                              ? (a = "image")
                              : r.match(/\.(pdf)((\?|#).*)?$/i)
                              ? ((a = "iframe"), (l = n.extend(!0, l, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                              : "#" === r.charAt(0) && (a = "inline")),
                      a ? (l.type = a) : o.trigger("objectNeedsType", l),
                      l.contentType || (l.contentType = n.inArray(l.type, ["html", "inline", "ajax"]) > -1 ? "html" : l.type),
                      (l.index = o.group.length),
                      "auto" == l.opts.smallBtn && (l.opts.smallBtn = n.inArray(l.type, ["html", "inline", "ajax"]) > -1),
                      "auto" === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
                      (l.$thumb = l.opts.$thumb || null),
                      l.opts.$trigger && l.index === o.opts.index && ((l.$thumb = l.opts.$trigger.find("img:first")), l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
                      (l.$thumb && l.$thumb.length) || !l.opts.$orig || (l.$thumb = l.opts.$orig.find("img:first")),
                      l.$thumb && !l.$thumb.length && (l.$thumb = null),
                      (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
                      "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(e, [o, l])),
                      "function" === n.type(o.opts.caption) && (l.opts.caption = o.opts.caption.apply(e, [o, l])),
                      l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""),
                      "ajax" === l.type && ((c = r.split(/\s+/, 2)), c.length > 1 && ((l.src = c.shift()), (l.opts.filter = c.shift()))),
                      l.opts.modal &&
                          (l.opts = n.extend(!0, l.opts, {
                              trapFocus: !0,
                              infobar: 0,
                              toolbar: 0,
                              smallBtn: 0,
                              keyboard: 0,
                              slideShow: 0,
                              fullScreen: 0,
                              thumbs: 0,
                              touch: 0,
                              clickContent: !1,
                              clickSlide: !1,
                              clickOutside: !1,
                              dblclickContent: !1,
                              dblclickSlide: !1,
                              dblclickOutside: !1,
                          })),
                      o.group.push(l);
              }),
                  Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
          },
          addEvents: function () {
              var e = this;
              e.removeEvents(),
                  e.$refs.container
                      .on("click.fb-close", "[data-fancybox-close]", function (t) {
                          t.stopPropagation(), t.preventDefault(), e.close(t);
                      })
                      .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                          t.stopPropagation(), t.preventDefault(), e.previous();
                      })
                      .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                          t.stopPropagation(), t.preventDefault(), e.next();
                      })
                      .on("click.fb", "[data-fancybox-zoom]", function (t) {
                          e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                      }),
                  s.on("orientationchange.fb resize.fb", function (t) {
                      t && t.originalEvent && "resize" === t.originalEvent.type
                          ? (e.requestId && u(e.requestId),
                            (e.requestId = d(function () {
                                e.update(t);
                            })))
                          : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                            setTimeout(
                                function () {
                                    e.$refs.stage.show(), e.update(t);
                                },
                                n.fancybox.isMobile ? 600 : 250
                            ));
                  }),
                  r.on("keydown.fb", function (t) {
                      var o = n.fancybox ? n.fancybox.getInstance() : null,
                          i = o.current,
                          a = t.keyCode || t.which;
                      if (9 == a) return void (i.opts.trapFocus && e.focus(t));
                      if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select")))
                          return 8 === a || 27 === a
                              ? (t.preventDefault(), void e.close(t))
                              : 37 === a || 38 === a
                              ? (t.preventDefault(), void e.previous())
                              : 39 === a || 40 === a
                              ? (t.preventDefault(), void e.next())
                              : void e.trigger("afterKeydown", t, a);
                  }),
                  e.group[e.currIndex].opts.idleTime &&
                      ((e.idleSecondsCounter = 0),
                      r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                          (e.idleSecondsCounter = 0), e.isIdle && e.showControls(), (e.isIdle = !1);
                      }),
                      (e.idleInterval = t.setInterval(function () {
                          ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
                      }, 1e3)));
          },
          removeEvents: function () {
              var e = this;
              s.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), (e.idleInterval = null));
          },
          previous: function (t) {
              return this.jumpTo(this.currPos - 1, t);
          },
          next: function (t) {
              return this.jumpTo(this.currPos + 1, t);
          },
          jumpTo: function (t, e) {
              var o,
                  i,
                  a,
                  s,
                  r,
                  c,
                  l,
                  d,
                  u,
                  f = this,
                  h = f.group.length;
              if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
                  if (((t = parseInt(t, 10)), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= h))) return !1;
                  if (
                      ((o = f.firstRun = !Object.keys(f.slides).length),
                      (r = f.current),
                      (f.prevIndex = f.currIndex),
                      (f.prevPos = f.currPos),
                      (s = f.createSlide(t)),
                      h > 1 && ((a || s.index < h - 1) && f.createSlide(t + 1), (a || s.index > 0) && f.createSlide(t - 1)),
                      (f.current = s),
                      (f.currIndex = s.index),
                      (f.currPos = s.pos),
                      f.trigger("beforeShow", o),
                      f.updateControls(),
                      (s.forcedDuration = void 0),
                      n.isNumeric(e) ? (s.forcedDuration = e) : (e = s.opts[o ? "animationDuration" : "transitionDuration"]),
                      (e = parseInt(e, 10)),
                      (i = f.isMoved(s)),
                      s.$slide.addClass("fancybox-slide--current"),
                      o)
                  )
                      return s.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(s), void f.preload("image");
                  (c = n.fancybox.getTranslate(r.$slide)),
                      (l = n.fancybox.getTranslate(f.$refs.stage)),
                      n.each(f.slides, function (t, e) {
                          n.fancybox.stop(e.$slide, !0);
                      }),
                      r.pos !== s.pos && (r.isComplete = !1),
                      r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                      i
                          ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                            n.each(f.slides, function (t, o) {
                                o.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                });
                                var i = o.pos * c.width + o.pos * o.opts.gutter;
                                n.fancybox.setTranslate(o.$slide, { top: 0, left: i - l.left + u }),
                                    o.pos !== s.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > s.pos ? "next" : "previous")),
                                    p(o.$slide),
                                    n.fancybox.animate(o.$slide, { top: 0, left: (o.pos - s.pos) * c.width + (o.pos - s.pos) * o.opts.gutter }, e, function () {
                                        o.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === f.currPos && f.complete();
                                    });
                            }))
                          : e &&
                            s.opts.transitionEffect &&
                            ((d = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect),
                            r.$slide.addClass("fancybox-slide--" + (r.pos > s.pos ? "next" : "previous")),
                            n.fancybox.animate(
                                r.$slide,
                                d,
                                e,
                                function () {
                                    r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous");
                                },
                                !1
                            )),
                      s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
                      f.preload("image");
              }
          },
          createSlide: function (t) {
              var e,
                  o,
                  i = this;
              return (
                  (o = t % i.group.length),
                  (o = o < 0 ? i.group.length + o : o),
                  !i.slides[t] && i.group[o] && ((e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage)), (i.slides[t] = n.extend(!0, {}, i.group[o], { pos: t, $slide: e, isLoaded: !1 })), i.updateSlide(i.slides[t])),
                  i.slides[t]
              );
          },
          scaleToActual: function (t, e, o) {
              var i,
                  a,
                  s,
                  r,
                  c,
                  l = this,
                  d = l.current,
                  u = d.$content,
                  f = n.fancybox.getTranslate(d.$slide).width,
                  p = n.fancybox.getTranslate(d.$slide).height,
                  h = d.width,
                  g = d.height;
              l.isAnimating ||
                  l.isMoved() ||
                  !u ||
                  "image" != d.type ||
                  !d.isLoaded ||
                  d.hasError ||
                  ((l.isAnimating = !0),
                  n.fancybox.stop(u),
                  (t = void 0 === t ? 0.5 * f : t),
                  (e = void 0 === e ? 0.5 * p : e),
                  (i = n.fancybox.getTranslate(u)),
                  (i.top -= n.fancybox.getTranslate(d.$slide).top),
                  (i.left -= n.fancybox.getTranslate(d.$slide).left),
                  (r = h / i.width),
                  (c = g / i.height),
                  (a = 0.5 * f - 0.5 * h),
                  (s = 0.5 * p - 0.5 * g),
                  h > f && ((a = i.left * r - (t * r - t)), a > 0 && (a = 0), a < f - h && (a = f - h)),
                  g > p && ((s = i.top * c - (e * c - e)), s > 0 && (s = 0), s < p - g && (s = p - g)),
                  l.updateCursor(h, g),
                  n.fancybox.animate(u, { top: s, left: a, scaleX: r, scaleY: c }, o || 366, function () {
                      l.isAnimating = !1;
                  }),
                  l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
          },
          scaleToFit: function (t) {
              var e,
                  o = this,
                  i = o.current,
                  a = i.$content;
              o.isAnimating ||
                  o.isMoved() ||
                  !a ||
                  "image" != i.type ||
                  !i.isLoaded ||
                  i.hasError ||
                  ((o.isAnimating = !0),
                  n.fancybox.stop(a),
                  (e = o.getFitPos(i)),
                  o.updateCursor(e.width, e.height),
                  n.fancybox.animate(a, { top: e.top, left: e.left, scaleX: e.width / a.width(), scaleY: e.height / a.height() }, t || 366, function () {
                      o.isAnimating = !1;
                  }));
          },
          getFitPos: function (t) {
              var e,
                  o,
                  i,
                  a,
                  s = this,
                  r = t.$content,
                  c = t.$slide,
                  l = t.width || t.opts.width,
                  d = t.height || t.opts.height,
                  u = {};
              return (
                  !!(t.isLoaded && r && r.length) &&
                  ((e = n.fancybox.getTranslate(s.$refs.stage).width),
                  (o = n.fancybox.getTranslate(s.$refs.stage).height),
                  (e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight"))),
                  (o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom"))),
                  (l && d) || ((l = e), (d = o)),
                  (i = Math.min(1, e / l, o / d)),
                  (l *= i),
                  (d *= i),
                  l > e - 0.5 && (l = e),
                  d > o - 0.5 && (d = o),
                  "image" === t.type
                      ? ((u.top = Math.floor(0.5 * (o - d)) + parseFloat(c.css("paddingTop"))), (u.left = Math.floor(0.5 * (e - l)) + parseFloat(c.css("paddingLeft"))))
                      : "video" === t.contentType && ((a = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9), d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
                  (u.width = l),
                  (u.height = d),
                  u)
              );
          },
          update: function (t) {
              var e = this;
              n.each(e.slides, function (n, o) {
                  e.updateSlide(o, t);
              });
          },
          updateSlide: function (t, e) {
              var o = this,
                  i = t && t.$content,
                  a = t.width || t.opts.width,
                  s = t.height || t.opts.height,
                  r = t.$slide;
              o.adjustCaption(t),
                  i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
                  o.adjustLayout(t),
                  r.length &&
                      (r.trigger("refresh"), t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                  o.trigger("onUpdate", t, e);
          },
          centerSlide: function (t) {
              var e = this,
                  o = e.current,
                  i = o.$slide;
              !e.isClosing &&
                  o &&
                  (i.siblings().css({ transform: "", opacity: "" }),
                  i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                  n.fancybox.animate(
                      i,
                      { top: 0, left: 0, opacity: 1 },
                      void 0 === t ? 0 : t,
                      function () {
                          i.css({ transform: "", opacity: "" }), o.isComplete || e.complete();
                      },
                      !1
                  ));
          },
          isMoved: function (t) {
              var e,
                  o,
                  i = t || this.current;
              return !!i && ((o = n.fancybox.getTranslate(this.$refs.stage)), (e = n.fancybox.getTranslate(i.$slide)), !i.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5));
          },
          updateCursor: function (t, e) {
              var o,
                  i,
                  a = this,
                  s = a.current,
                  r = a.$refs.container;
              s &&
                  !a.isClosing &&
                  a.Guestures &&
                  (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                  (o = a.canPan(t, e)),
                  (i = !!o || a.isZoomable()),
                  r.toggleClass("fancybox-is-zoomable", i),
                  n("[data-fancybox-zoom]").prop("disabled", !i),
                  o
                      ? r.addClass("fancybox-can-pan")
                      : i && ("zoom" === s.opts.clickContent || (n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)))
                      ? r.addClass("fancybox-can-zoomIn")
                      : s.opts.touch && (s.opts.touch.vertical || a.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"));
          },
          isZoomable: function () {
              var t,
                  e = this,
                  n = e.current;
              if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                  if (!n.isLoaded) return !0;
                  if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
              }
              return !1;
          },
          isScaledDown: function (t, e) {
              var o = this,
                  i = !1,
                  a = o.current,
                  s = a.$content;
              return void 0 !== t && void 0 !== e ? (i = t < a.width && e < a.height) : s && ((i = n.fancybox.getTranslate(s)), (i = i.width < a.width && i.height < a.height)), i;
          },
          canPan: function (t, e) {
              var o = this,
                  i = o.current,
                  a = null,
                  s = !1;
              return (
                  "image" === i.type &&
                      (i.isComplete || (t && e)) &&
                      !i.hasError &&
                      ((s = o.getFitPos(i)),
                      void 0 !== t && void 0 !== e ? (a = { width: t, height: e }) : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
                      a && s && (s = Math.abs(a.width - s.width) > 1.5 || Math.abs(a.height - s.height) > 1.5)),
                  s
              );
          },
          loadSlide: function (t) {
              var e,
                  o,
                  i,
                  a = this;
              if (!t.isLoading && !t.isLoaded) {
                  if (((t.isLoading = !0), !1 === a.trigger("beforeLoad", t))) return (t.isLoading = !1), !1;
                  switch (((e = t.type), (o = t.$slide), o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e)) {
                      case "image":
                          a.setImage(t);
                          break;
                      case "iframe":
                          a.setIframe(t);
                          break;
                      case "html":
                          a.setContent(t, t.src || t.content);
                          break;
                      case "video":
                          a.setContent(
                              t,
                              t.opts.video.tpl
                                  .replace(/\{\{src\}\}/gi, t.src)
                                  .replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "")
                                  .replace("{{poster}}", t.thumb || "")
                          );
                          break;
                      case "inline":
                          n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                          break;
                      case "ajax":
                          a.showLoading(t),
                              (i = n.ajax(
                                  n.extend({}, t.opts.ajax.settings, {
                                      url: t.src,
                                      success: function (e, n) {
                                          "success" === n && a.setContent(t, e);
                                      },
                                      error: function (e, n) {
                                          e && "abort" !== n && a.setError(t);
                                      },
                                  })
                              )),
                              o.one("onReset", function () {
                                  i.abort();
                              });
                          break;
                      default:
                          a.setError(t);
                  }
                  return !0;
              }
          },
          setImage: function (t) {
              var o,
                  i = this;
              setTimeout(function () {
                  var e = t.$image;
                  i.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || i.showLoading(t);
              }, 50),
                  i.checkSrcset(t),
                  (t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                  !1 !== t.opts.preload &&
                      t.opts.width &&
                      t.opts.height &&
                      t.thumb &&
                      ((t.width = t.opts.width),
                      (t.height = t.opts.height),
                      (o = e.createElement("img")),
                      (o.onerror = function () {
                          n(this).remove(), (t.$ghost = null);
                      }),
                      (o.onload = function () {
                          i.afterLoad(t);
                      }),
                      (t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                  i.setBigImage(t);
          },
          checkSrcset: function (e) {
              var n,
                  o,
                  i,
                  a,
                  s = e.opts.srcset || e.opts.image.srcset;
              if (s) {
                  (i = t.devicePixelRatio || 1),
                      (a = t.innerWidth * i),
                      (o = s.split(",").map(function (t) {
                          var e = {};
                          return (
                              t
                                  .trim()
                                  .split(/\s+/)
                                  .forEach(function (t, n) {
                                      var o = parseInt(t.substring(0, t.length - 1), 10);
                                      if (0 === n) return (e.url = t);
                                      o && ((e.value = o), (e.postfix = t[t.length - 1]));
                                  }),
                              e
                          );
                      })),
                      o.sort(function (t, e) {
                          return t.value - e.value;
                      });
                  for (var r = 0; r < o.length; r++) {
                      var c = o[r];
                      if (("w" === c.postfix && c.value >= a) || ("x" === c.postfix && c.value >= i)) {
                          n = c;
                          break;
                      }
                  }
                  !n && o.length && (n = o[o.length - 1]), n && ((e.src = n.url), e.width && e.height && "w" == n.postfix && ((e.height = (e.width / e.height) * n.value), (e.width = n.value)), (e.opts.srcset = s));
              }
          },
          setBigImage: function (t) {
              var o = this,
                  i = e.createElement("img"),
                  a = n(i);
              (t.$image = a
                  .one("error", function () {
                      o.setError(t);
                  })
                  .one("load", function () {
                      var e;
                      t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), o.afterLoad(t)),
                          o.isClosing ||
                              (t.opts.srcset &&
                                  ((e = t.opts.sizes),
                                  (e && "auto" !== e) || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                  a.attr("sizes", e).attr("srcset", t.opts.srcset)),
                              t.$ghost &&
                                  setTimeout(function () {
                                      t.$ghost && !o.isClosing && t.$ghost.hide();
                                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                              o.hideLoading(t));
                  })
                  .addClass("fancybox-image")
                  .attr("src", t.src)
                  .appendTo(t.$content)),
                  (i.complete || "complete" == i.readyState) && a.naturalWidth && a.naturalHeight ? a.trigger("load") : i.error && a.trigger("error");
          },
          resolveImageSlideSize: function (t, e, n) {
              var o = parseInt(t.opts.width, 10),
                  i = parseInt(t.opts.height, 10);
              (t.width = e), (t.height = n), o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))), i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
          },
          setIframe: function (t) {
              var e,
                  o = this,
                  i = t.opts.iframe,
                  a = t.$slide;
              (t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>')
                  .css(i.css)
                  .appendTo(a)),
                  a.addClass("fancybox-slide--" + t.contentType),
                  (t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                      .attr(i.attr)
                      .appendTo(t.$content)),
                  i.preload
                      ? (o.showLoading(t),
                        e.on("load.fb error.fb", function (e) {
                            (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
                        }),
                        a.on("refresh.fb", function () {
                            var n,
                                o,
                                s = t.$content,
                                r = i.css.width,
                                c = i.css.height;
                            if (1 === e[0].isReady) {
                                try {
                                    (n = e.contents()), (o = n.find("body"));
                                } catch (t) {}
                                o &&
                                    o.length &&
                                    o.children().length &&
                                    (a.css("overflow", "visible"),
                                    s.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                    void 0 === r && (r = Math.ceil(Math.max(o[0].clientWidth, o.outerWidth(!0)))),
                                    s.css("width", r || "").css("max-width", ""),
                                    void 0 === c && (c = Math.ceil(Math.max(o[0].clientHeight, o.outerHeight(!0)))),
                                    s.css("height", c || ""),
                                    a.css("overflow", "auto")),
                                    s.removeClass("fancybox-is-hidden");
                            }
                        }))
                      : o.afterLoad(t),
                  e.attr("src", t.src),
                  a.one("onReset", function () {
                      try {
                          n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                      } catch (t) {}
                      n(this).off("refresh.fb").empty(), (t.isLoaded = !1), (t.isRevealed = !1);
                  });
          },
          setContent: function (t, e) {
              var o = this;
              o.isClosing ||
                  (o.hideLoading(t),
                  t.$content && n.fancybox.stop(t.$content),
                  t.$slide.empty(),
                  l(e) && e.parent().length
                      ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                        (t.$placeholder = n("<div>").hide().insertAfter(e)),
                        e.css("display", "inline-block"))
                      : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                  t.$slide.one("onReset", function () {
                      n(this).find("video,audio").trigger("pause"),
                          t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                          t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                          t.hasError || (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                  }),
                  n(e).appendTo(t.$slide),
                  n(e).is("video,audio") &&
                      (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || n(e).attr("width")), (t.opts.height = t.opts.height || n(e).attr("height"))),
                  (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                  t.$content.siblings().hide(),
                  t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                  t.$content.addClass("fancybox-content"),
                  t.$slide.addClass("fancybox-slide--" + t.contentType),
                  o.afterLoad(t));
          },
          setError: function (t) {
              (t.hasError = !0),
                  t.$slide
                      .trigger("onReset")
                      .removeClass("fancybox-slide--" + t.contentType)
                      .addClass("fancybox-slide--error"),
                  (t.contentType = "html"),
                  this.setContent(t, this.translate(t, t.opts.errorTpl)),
                  t.pos === this.currPos && (this.isAnimating = !1);
          },
          showLoading: function (t) {
              var e = this;
              (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
          },
          hideLoading: function (t) {
              var e = this;
              (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
          },
          afterLoad: function (t) {
              var e = this;
              e.isClosing ||
                  ((t.isLoading = !1),
                  (t.isLoaded = !0),
                  e.trigger("afterLoad", t),
                  e.hideLoading(t),
                  !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                  t.opts.protect &&
                      t.$content &&
                      !t.hasError &&
                      (t.$content.on("contextmenu.fb", function (t) {
                          return 2 == t.button && t.preventDefault(), !0;
                      }),
                      "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                  e.adjustCaption(t),
                  e.adjustLayout(t),
                  t.pos === e.currPos && e.updateCursor(),
                  e.revealContent(t));
          },
          adjustCaption: function (t) {
              var e,
                  n = this,
                  o = t || n.current,
                  i = o.opts.caption,
                  a = o.opts.preventCaptionOverlap,
                  s = n.$refs.caption,
                  r = !1;
              s.toggleClass("fancybox-caption--separate", a),
                  a &&
                      i &&
                      i.length &&
                      (o.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())), e.children().eq(0).empty().html(i), (r = e.outerHeight(!0)), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)),
                      o.$slide.css("padding-bottom", r || ""));
          },
          adjustLayout: function (t) {
              var e,
                  n,
                  o,
                  i,
                  a = this,
                  s = t || a.current;
              s.isLoaded &&
                  !0 !== s.opts.disableLayoutFix &&
                  (s.$content.css("margin-bottom", ""),
                  s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                      ((o = s.$slide[0].style["padding-bottom"]),
                      (i = s.$slide.css("padding-bottom")),
                      parseFloat(i) > 0 && ((e = s.$slide[0].scrollHeight), s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))),
                  s.$content.css("margin-bottom", n));
          },
          revealContent: function (t) {
              var e,
                  o,
                  i,
                  a,
                  s = this,
                  r = t.$slide,
                  c = !1,
                  l = !1,
                  d = s.isMoved(t),
                  u = t.isRevealed;
              return (
                  (t.isRevealed = !0),
                  (e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
                  (i = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"]),
                  (i = parseInt(void 0 === t.forcedDuration ? i : t.forcedDuration, 10)),
                  (!d && t.pos === s.currPos && i) || (e = !1),
                  "zoom" === e && (t.pos === s.currPos && i && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? (c = s.getFitPos(t)) : (e = "fade")),
                  "zoom" === e
                      ? ((s.isAnimating = !0),
                        (c.scaleX = c.width / l.width),
                        (c.scaleY = c.height / l.height),
                        (a = t.opts.zoomOpacity),
                        "auto" == a && (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
                        a && ((l.opacity = 0.1), (c.opacity = 1)),
                        n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l),
                        p(t.$content),
                        void n.fancybox.animate(t.$content, c, i, function () {
                            (s.isAnimating = !1), s.complete();
                        }))
                      : (s.updateSlide(t),
                        e
                            ? (n.fancybox.stop(r),
                              (o = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                              r.addClass(o).removeClass("fancybox-slide--current"),
                              t.$content.removeClass("fancybox-is-hidden"),
                              p(r),
                              "image" !== t.type && t.$content.hide().show(0),
                              void n.fancybox.animate(
                                  r,
                                  "fancybox-slide--current",
                                  i,
                                  function () {
                                      r.removeClass(o).css({ transform: "", opacity: "" }), t.pos === s.currPos && s.complete();
                                  },
                                  !0
                              ))
                            : (t.$content.removeClass("fancybox-is-hidden"), u || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === s.currPos && s.complete())))
              );
          },
          getThumbPos: function (t) {
              var e,
                  o,
                  i,
                  a,
                  s,
                  r = !1,
                  c = t.$thumb;
              return (
                  !(!c || !g(c[0])) &&
                  ((e = n.fancybox.getTranslate(c)),
                  (o = parseFloat(c.css("border-top-width") || 0)),
                  (i = parseFloat(c.css("border-right-width") || 0)),
                  (a = parseFloat(c.css("border-bottom-width") || 0)),
                  (s = parseFloat(c.css("border-left-width") || 0)),
                  (r = { top: e.top + o, left: e.left + s, width: e.width - i - s, height: e.height - o - a, scaleX: 1, scaleY: 1 }),
                  e.width > 0 && e.height > 0 && r)
              );
          },
          complete: function () {
              var t,
                  e = this,
                  o = e.current,
                  i = {};
              !e.isMoved() &&
                  o.isLoaded &&
                  (o.isComplete ||
                      ((o.isComplete = !0),
                      o.$slide.siblings().trigger("onReset"),
                      e.preload("inline"),
                      p(o.$slide),
                      o.$slide.addClass("fancybox-slide--complete"),
                      n.each(e.slides, function (t, o) {
                          o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? (i[o.pos] = o) : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
                      }),
                      (e.slides = i)),
                  (e.isAnimating = !1),
                  e.updateCursor(),
                  e.trigger("afterShow"),
                  o.opts.video.autoStart &&
                      o.$slide
                          .find("video,audio")
                          .filter(":visible:first")
                          .trigger("play")
                          .one("ended", function () {
                              Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
                          }),
                  o.opts.autoFocus && "html" === o.contentType && ((t = o.$content.find("input[autofocus]:enabled:visible:first")), t.length ? t.trigger("focus") : e.focus(null, !0)),
                  o.$slide.scrollTop(0).scrollLeft(0));
          },
          preload: function (t) {
              var e,
                  n,
                  o = this;
              o.group.length < 2 || ((n = o.slides[o.currPos + 1]), (e = o.slides[o.currPos - 1]), e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n));
          },
          focus: function (t, o) {
              var i,
                  a,
                  s = this,
                  r = [
                      "a[href]",
                      "area[href]",
                      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                      "select:not([disabled]):not([aria-hidden])",
                      "textarea:not([disabled]):not([aria-hidden])",
                      "button:not([disabled]):not([aria-hidden])",
                      "iframe",
                      "object",
                      "embed",
                      "video",
                      "audio",
                      "[contenteditable]",
                      '[tabindex]:not([tabindex^="-"])',
                  ].join(",");
              s.isClosing ||
                  ((i = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")),
                  (i = i.filter(r).filter(function () {
                      return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                  })),
                  i.length
                      ? ((a = i.index(e.activeElement)),
                        t && t.shiftKey ? (a < 0 || 0 == a) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (a < 0 || a == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus")))
                      : s.$refs.container.trigger("focus"));
          },
          activate: function () {
              var t = this;
              n(".fancybox-container").each(function () {
                  var e = n(this).data("FancyBox");
                  e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
              }),
                  (t.isVisible = !0),
                  (t.current || t.isIdle) && (t.update(), t.updateControls()),
                  t.trigger("onActivate"),
                  t.addEvents();
          },
          close: function (t, e) {
              var o,
                  i,
                  a,
                  s,
                  r,
                  c,
                  l,
                  u = this,
                  f = u.current,
                  h = function () {
                      u.cleanUp(t);
                  };
              return (
                  !u.isClosing &&
                  ((u.isClosing = !0),
                  !1 === u.trigger("beforeClose", t)
                      ? ((u.isClosing = !1),
                        d(function () {
                            u.update();
                        }),
                        !1)
                      : (u.removeEvents(),
                        (a = f.$content),
                        (o = f.opts.animationEffect),
                        (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
                        f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                        !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
                        f.$slide.siblings().trigger("onReset").remove(),
                        i &&
                            u.$refs.container
                                .removeClass("fancybox-is-open")
                                .addClass("fancybox-is-closing")
                                .css("transition-duration", i + "ms"),
                        u.hideLoading(f),
                        u.hideControls(!0),
                        u.updateCursor(),
                        "zoom" !== o || (a && i && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f))) || (o = "fade"),
                        "zoom" === o
                            ? (n.fancybox.stop(a),
                              (s = n.fancybox.getTranslate(a)),
                              (c = { top: s.top, left: s.left, scaleX: s.width / l.width, scaleY: s.height / l.height, width: l.width, height: l.height }),
                              (r = f.opts.zoomOpacity),
                              "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                              r && (l.opacity = 0),
                              n.fancybox.setTranslate(a, c),
                              p(a),
                              n.fancybox.animate(a, l, i, h),
                              !0)
                            : (o && i ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, h) : !0 === t ? setTimeout(h, i) : h(), !0)))
              );
          },
          cleanUp: function (e) {
              var o,
                  i,
                  a,
                  s = this,
                  r = s.current.opts.$orig;
              s.current.$slide.trigger("onReset"),
                  s.$refs.container.empty().remove(),
                  s.trigger("afterClose", e),
                  s.current.opts.backFocus && ((r && r.length && r.is(":visible")) || (r = s.$trigger), r && r.length && ((i = t.scrollX), (a = t.scrollY), r.trigger("focus"), n("html, body").scrollTop(a).scrollLeft(i))),
                  (s.current = null),
                  (o = n.fancybox.getInstance()),
                  o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
          },
          trigger: function (t, e) {
              var o,
                  i = Array.prototype.slice.call(arguments, 1),
                  a = this,
                  s = e && e.opts ? e : a.current;
              if ((s ? i.unshift(s) : (s = a), i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), !1 === o)) return o;
              "afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i);
          },
          updateControls: function () {
              var t = this,
                  o = t.current,
                  i = o.index,
                  a = t.$refs.container,
                  s = t.$refs.caption,
                  r = o.opts.caption;
              o.$slide.trigger("refresh"),
                  r && r.length ? ((t.$caption = s), s.children().eq(0).html(r)) : (t.$caption = null),
                  t.hasHiddenControls || t.isIdle || t.showControls(),
                  a.find("[data-fancybox-count]").html(t.group.length),
                  a.find("[data-fancybox-index]").html(i + 1),
                  a.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && i <= 0),
                  a.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && i >= t.group.length - 1),
                  "image" === o.type
                      ? a
                            .find("[data-fancybox-zoom]")
                            .show()
                            .end()
                            .find("[data-fancybox-download]")
                            .attr("href", o.opts.image.src || o.src)
                            .show()
                      : o.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                  n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
          },
          hideControls: function (t) {
              var e = this,
                  n = ["infobar", "toolbar", "nav"];
              (!t && e.current.opts.preventCaptionOverlap) || n.push("caption"),
                  this.$refs.container.removeClass(
                      n
                          .map(function (t) {
                              return "fancybox-show-" + t;
                          })
                          .join(" ")
                  ),
                  (this.hasHiddenControls = !0);
          },
          showControls: function () {
              var t = this,
                  e = t.current ? t.current.opts : t.opts,
                  n = t.$refs.container;
              (t.hasHiddenControls = !1),
                  (t.idleSecondsCounter = 0),
                  n
                      .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                      .toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1))
                      .toggleClass("fancybox-show-caption", !!t.$caption)
                      .toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1))
                      .toggleClass("fancybox-is-modal", !!e.modal);
          },
          toggleControls: function () {
              this.hasHiddenControls ? this.showControls() : this.hideControls();
          },
      }),
          (n.fancybox = {
              version: "3.5.7",
              defaults: a,
              getInstance: function (t) {
                  var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                      o = Array.prototype.slice.call(arguments, 1);
                  return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e);
              },
              open: function (t, e, n) {
                  return new b(t, e, n);
              },
              close: function (t) {
                  var e = this.getInstance();
                  e && (e.close(), !0 === t && this.close(t));
              },
              destroy: function () {
                  this.close(!0), r.add("body").off("click.fb-start", "**");
              },
              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
              use3d: (function () {
                  var n = e.createElement("div");
                  return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
              })(),
              getTranslate: function (t) {
                  var e;
                  return !(!t || !t.length) && ((e = t[0].getBoundingClientRect()), { top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) });
              },
              setTranslate: function (t, e) {
                  var n = "",
                      o = {};
                  if (t && e)
                      return (
                          (void 0 === e.left && void 0 === e.top) ||
                              ((n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                          void 0 !== e.scaleX && void 0 !== e.scaleY ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")") : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                          n.length && (o.transform = n),
                          void 0 !== e.opacity && (o.opacity = e.opacity),
                          void 0 !== e.width && (o.width = e.width),
                          void 0 !== e.height && (o.height = e.height),
                          t.css(o)
                      );
              },
              animate: function (t, e, o, i, a) {
                  var s,
                      r = this;
                  n.isFunction(o) && ((i = o), (o = null)),
                      r.stop(t),
                      (s = r.getTranslate(t)),
                      t.on(f, function (c) {
                          (!c || !c.originalEvent || (t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName)) &&
                              (r.stop(t),
                              n.isNumeric(o) && t.css("transition-duration", ""),
                              n.isPlainObject(e)
                                  ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, { top: e.top, left: e.left, width: s.width * e.scaleX, height: s.height * e.scaleY, scaleX: 1, scaleY: 1 })
                                  : !0 !== a && t.removeClass(e),
                              n.isFunction(i) && i(c));
                      }),
                      n.isNumeric(o) && t.css("transition-duration", o + "ms"),
                      n.isPlainObject(e)
                          ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e))
                          : t.addClass(e),
                      t.data(
                          "timer",
                          setTimeout(function () {
                              t.trigger(f);
                          }, o + 33)
                      );
              },
              stop: function (t, e) {
                  t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(f), t.off(f).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
              },
          }),
          (n.fn.fancybox = function (t) {
              var e;
              return (t = t || {}), (e = t.selector || !1), e ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, i) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, i), this;
          }),
          r.on("click.fb-start", "[data-fancybox]", i),
          r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
              n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
                  .eq(n(this).attr("data-fancybox-index") || 0)
                  .trigger("click.fb-start", { $trigger: n(this) });
          }),
          (function () {
              var t = null;
              r.on("mousedown mouseup focus blur", ".fancybox-button", function (e) {
                  switch (e.type) {
                      case "mousedown":
                          t = n(this);
                          break;
                      case "mouseup":
                          t = null;
                          break;
                      case "focusin":
                          n(".fancybox-button").removeClass("fancybox-focus"), n(this).is(t) || n(this).is("[disabled]") || n(this).addClass("fancybox-focus");
                          break;
                      case "focusout":
                          n(".fancybox-button").removeClass("fancybox-focus");
                  }
              });
          })();
  }
})(window, document, jQuery),
  (function (t) {
      "use strict";
      var e = {
              youtube: {
                  matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                  params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                  paramPlace: 8,
                  type: "iframe",
                  url: "https://www.youtube-nocookie.com/embed/$4",
                  thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
              },
              vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
              instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
              gmap_place: {
                  matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                  type: "iframe",
                  url: function (t) {
                      return (
                          "//maps.google." +
                          t[2] +
                          "/?ll=" +
                          (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                          "&output=" +
                          (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                      );
                  },
              },
              gmap_search: {
                  matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                  type: "iframe",
                  url: function (t) {
                      return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                  },
              },
          },
          n = function (e, n, o) {
              if (e)
                  return (
                      (o = o || ""),
                      "object" === t.type(o) && (o = t.param(o, !0)),
                      t.each(n, function (t, n) {
                          e = e.replace("$" + t, n || "");
                      }),
                      o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
                      e
                  );
          };
      t(document).on("objectNeedsType.fb", function (o, i, a) {
          var s,
              r,
              c,
              l,
              d,
              u,
              f,
              p = a.src || "",
              h = !1;
          (s = t.extend(!0, {}, e, a.opts.media)),
              t.each(s, function (e, o) {
                  if ((c = p.match(o.matcher))) {
                      if (((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])) {
                          (d = c[o.paramPlace]), "?" == d[0] && (d = d.substring(1)), (d = d.split("&"));
                          for (var i = 0; i < d.length; ++i) {
                              var s = d[i].split("=", 2);
                              2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                          }
                      }
                      return (
                          (l = t.extend(!0, {}, o.params, a.opts[e], u)),
                          (p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : n(o.url, c, l)),
                          (r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : n(o.thumb, c)),
                          "youtube" === e
                              ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10));
                                }))
                              : "vimeo" === e && (p = p.replace("&%23", "#")),
                          !1
                      );
                  }
              }),
              h
                  ? (a.opts.thumb || (a.opts.$thumb && a.opts.$thumb.length) || (a.opts.thumb = r),
                    "iframe" === h && (a.opts = t.extend(!0, a.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                    t.extend(a, { type: h, src: p, origSrc: a.src, contentSource: f, contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video" }))
                  : p && (a.type = a.opts.defaultType);
      });
      var o = {
          youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
          vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
          load: function (t) {
              var e,
                  n = this;
              if (this[t].loaded)
                  return void setTimeout(function () {
                      n.done(t);
                  });
              this[t].loading ||
                  ((this[t].loading = !0),
                  (e = document.createElement("script")),
                  (e.type = "text/javascript"),
                  (e.src = this[t].src),
                  "youtube" === t
                      ? (window.onYouTubeIframeAPIReady = function () {
                            (n[t].loaded = !0), n.done(t);
                        })
                      : (e.onload = function () {
                            (n[t].loaded = !0), n.done(t);
                        }),
                  document.body.appendChild(e));
          },
          done: function (e) {
              var n, o, i;
              "youtube" === e && delete window.onYouTubeIframeAPIReady,
                  (n = t.fancybox.getInstance()) &&
                      ((o = n.current.$content.find("iframe")),
                      "youtube" === e && void 0 !== YT && YT
                          ? (i = new YT.Player(o.attr("id"), {
                                events: {
                                    onStateChange: function (t) {
                                        0 == t.data && n.next();
                                    },
                                },
                            }))
                          : "vimeo" === e &&
                            void 0 !== Vimeo &&
                            Vimeo &&
                            ((i = new Vimeo.Player(o)),
                            i.on("ended", function () {
                                n.next();
                            })));
          },
      };
      t(document).on({
          "afterShow.fb": function (t, e, n) {
              e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource);
          },
      });
  })(jQuery),
  (function (t, e, n) {
      "use strict";
      var o = (function () {
              return (
                  t.requestAnimationFrame ||
                  t.webkitRequestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  t.oRequestAnimationFrame ||
                  function (e) {
                      return t.setTimeout(e, 1e3 / 60);
                  }
              );
          })(),
          i = (function () {
              return (
                  t.cancelAnimationFrame ||
                  t.webkitCancelAnimationFrame ||
                  t.mozCancelAnimationFrame ||
                  t.oCancelAnimationFrame ||
                  function (e) {
                      t.clearTimeout(e);
                  }
              );
          })(),
          a = function (e) {
              var n = [];
              (e = e.originalEvent || e || t.e), (e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]);
              for (var o in e) e[o].pageX ? n.push({ x: e[o].pageX, y: e[o].pageY }) : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
              return n;
          },
          s = function (t, e, n) {
              return e && t ? ("x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
          },
          r = function (t) {
              if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
              for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++) if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
              return !1;
          },
          c = function (e) {
              var n = t.getComputedStyle(e)["overflow-y"],
                  o = t.getComputedStyle(e)["overflow-x"],
                  i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
                  a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
              return i || a;
          },
          l = function (t) {
              for (var e = !1; ; ) {
                  if ((e = c(t.get(0)))) break;
                  if (((t = t.parent()), !t.length || t.hasClass("fancybox-stage") || t.is("body"))) break;
              }
              return e;
          },
          d = function (t) {
              var e = this;
              (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
          };
      (d.prototype.destroy = function () {
          var t = this;
          t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (i(t.requestId), (t.requestId = null)), t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
      }),
          (d.prototype.ontouchstart = function (o) {
              var i = this,
                  c = n(o.target),
                  d = i.instance,
                  u = d.current,
                  f = u.$slide,
                  p = u.$content,
                  h = "touchstart" == o.type;
              if (
                  (h && i.$container.off("mousedown.fb.touch"),
                  (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
              ) {
                  if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated")) return o.stopPropagation(), void o.preventDefault();
                  (i.realPoints = i.startPoints = a(o)),
                      i.startPoints.length &&
                          (u.touch && o.stopPropagation(),
                          (i.startEvent = o),
                          (i.canTap = !0),
                          (i.$target = c),
                          (i.$content = p),
                          (i.opts = u.opts.touch),
                          (i.isPanning = !1),
                          (i.isSwiping = !1),
                          (i.isZooming = !1),
                          (i.isScrolling = !1),
                          (i.canPan = d.canPan()),
                          (i.startTime = new Date().getTime()),
                          (i.distanceX = i.distanceY = i.distance = 0),
                          (i.canvasWidth = Math.round(f[0].clientWidth)),
                          (i.canvasHeight = Math.round(f[0].clientHeight)),
                          (i.contentLastPos = null),
                          (i.contentStartPos = n.fancybox.getTranslate(i.$content) || { top: 0, left: 0 }),
                          (i.sliderStartPos = n.fancybox.getTranslate(f)),
                          (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
                          (i.sliderStartPos.top -= i.stagePos.top),
                          (i.sliderStartPos.left -= i.stagePos.left),
                          (i.contentStartPos.top -= i.stagePos.top),
                          (i.contentStartPos.left -= i.stagePos.left),
                          n(e)
                              .off(".fb.touch")
                              .on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend"))
                              .on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
                          n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0),
                          (((i.opts || i.canPan) && (c.is(i.$stage) || i.$stage.find(c).length)) || (c.is(".fancybox-image") && o.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) &&
                              ((i.isScrollable = l(c) || l(c.parent())),
                              (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                              (1 === i.startPoints.length || u.hasError) && (i.canPan ? (n.fancybox.stop(i.$content), (i.isPanning = !0)) : (i.isSwiping = !0), i.$container.addClass("fancybox-is-grabbing")),
                              2 === i.startPoints.length &&
                                  "image" === u.type &&
                                  (u.isLoaded || u.$ghost) &&
                                  ((i.canTap = !1),
                                  (i.isSwiping = !1),
                                  (i.isPanning = !1),
                                  (i.isZooming = !0),
                                  n.fancybox.stop(i.$content),
                                  (i.centerPointStartX = 0.5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft()),
                                  (i.centerPointStartY = 0.5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop()),
                                  (i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width),
                                  (i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height),
                                  (i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1])))));
              }
          }),
          (d.prototype.onscroll = function (t) {
              var n = this;
              (n.isScrolling = !0), e.removeEventListener("scroll", n.onscroll, !0);
          }),
          (d.prototype.ontouchmove = function (t) {
              var e = this;
              return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons
                  ? void e.ontouchend(t)
                  : e.isScrolling
                  ? void (e.canTap = !1)
                  : ((e.newPoints = a(t)),
                    void (
                        (e.opts || e.canPan) &&
                        e.newPoints.length &&
                        e.newPoints.length &&
                        ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                        (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x")),
                        (e.distanceY = s(e.newPoints[0], e.startPoints[0], "y")),
                        (e.distance = s(e.newPoints[0], e.startPoints[0])),
                        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))
                    ));
          }),
          (d.prototype.onSwipe = function (e) {
              var a,
                  s = this,
                  r = s.instance,
                  c = s.isSwiping,
                  l = s.sliderStartPos.left || 0;
              if (!0 !== c)
                  "x" == c &&
                      (s.distanceX > 0 && (s.instance.group.length < 2 || (0 === s.instance.current.index && !s.instance.current.opts.loop))
                          ? (l += Math.pow(s.distanceX, 0.8))
                          : s.distanceX < 0 && (s.instance.group.length < 2 || (s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop))
                          ? (l -= Math.pow(-s.distanceX, 0.8))
                          : (l += s.distanceX)),
                      (s.sliderLastPos = { top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY, left: l }),
                      s.requestId && (i(s.requestId), (s.requestId = null)),
                      (s.requestId = o(function () {
                          s.sliderLastPos &&
                              (n.each(s.instance.slides, function (t, e) {
                                  var o = e.pos - s.instance.currPos;
                                  n.fancybox.setTranslate(e.$slide, { top: s.sliderLastPos.top, left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter });
                              }),
                              s.$container.addClass("fancybox-is-sliding"));
                      }));
              else if (Math.abs(s.distance) > 10) {
                  if (
                      ((s.canTap = !1),
                      r.group.length < 2 && s.opts.vertical
                          ? (s.isSwiping = "y")
                          : r.isDragging || !1 === s.opts.vertical || ("auto" === s.opts.vertical && n(t).width() > 800)
                          ? (s.isSwiping = "x")
                          : ((a = Math.abs((180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI)), (s.isSwiping = a > 45 && a < 135 ? "y" : "x")),
                      "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                  )
                      return void (s.isScrolling = !0);
                  (r.isDragging = s.isSwiping),
                      (s.startPoints = s.newPoints),
                      n.each(r.slides, function (t, e) {
                          var o, i;
                          n.fancybox.stop(e.$slide),
                              (o = n.fancybox.getTranslate(e.$slide)),
                              (i = n.fancybox.getTranslate(r.$refs.stage)),
                              e.$slide
                                  .css({ transform: "", opacity: "", "transition-duration": "" })
                                  .removeClass("fancybox-animated")
                                  .removeClass(function (t, e) {
                                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                  }),
                              e.pos === r.current.pos && ((s.sliderStartPos.top = o.top - i.top), (s.sliderStartPos.left = o.left - i.left)),
                              n.fancybox.setTranslate(e.$slide, { top: o.top - i.top, left: o.left - i.left });
                      }),
                      r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
              }
          }),
          (d.prototype.onPan = function () {
              var t = this;
              if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
              (t.canTap = !1),
                  (t.contentLastPos = t.limitMovement()),
                  t.requestId && i(t.requestId),
                  (t.requestId = o(function () {
                      n.fancybox.setTranslate(t.$content, t.contentLastPos);
                  }));
          }),
          (d.prototype.limitMovement = function () {
              var t,
                  e,
                  n,
                  o,
                  i,
                  a,
                  s = this,
                  r = s.canvasWidth,
                  c = s.canvasHeight,
                  l = s.distanceX,
                  d = s.distanceY,
                  u = s.contentStartPos,
                  f = u.left,
                  p = u.top,
                  h = u.width,
                  g = u.height;
              return (
                  (i = h > r ? f + l : f),
                  (a = p + d),
                  (t = Math.max(0, 0.5 * r - 0.5 * h)),
                  (e = Math.max(0, 0.5 * c - 0.5 * g)),
                  (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
                  (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
                  l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
                  l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
                  d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
                  d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
                  { top: a, left: i }
              );
          }),
          (d.prototype.limitPosition = function (t, e, n, o) {
              var i = this,
                  a = i.canvasWidth,
                  s = i.canvasHeight;
              return n > a ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t)) : (t = Math.max(0, a / 2 - n / 2)), o > s ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e)) : (e = Math.max(0, s / 2 - o / 2)), { top: e, left: t };
          }),
          (d.prototype.onZoom = function () {
              var e = this,
                  a = e.contentStartPos,
                  r = a.width,
                  c = a.height,
                  l = a.left,
                  d = a.top,
                  u = s(e.newPoints[0], e.newPoints[1]),
                  f = u / e.startDistanceBetweenFingers,
                  p = Math.floor(r * f),
                  h = Math.floor(c * f),
                  g = (r - p) * e.percentageOfImageAtPinchPointX,
                  b = (c - h) * e.percentageOfImageAtPinchPointY,
                  m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                  v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                  y = m - e.centerPointStartX,
                  x = v - e.centerPointStartY,
                  w = l + (g + y),
                  $ = d + (b + x),
                  S = { top: $, left: w, scaleX: f, scaleY: f };
              (e.canTap = !1),
                  (e.newWidth = p),
                  (e.newHeight = h),
                  (e.contentLastPos = S),
                  e.requestId && i(e.requestId),
                  (e.requestId = o(function () {
                      n.fancybox.setTranslate(e.$content, e.contentLastPos);
                  }));
          }),
          (d.prototype.ontouchend = function (t) {
              var o = this,
                  s = o.isSwiping,
                  r = o.isPanning,
                  c = o.isZooming,
                  l = o.isScrolling;
              if (
                  ((o.endPoints = a(t)),
                  (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
                  o.$container.removeClass("fancybox-is-grabbing"),
                  n(e).off(".fb.touch"),
                  e.removeEventListener("scroll", o.onscroll, !0),
                  o.requestId && (i(o.requestId), (o.requestId = null)),
                  (o.isSwiping = !1),
                  (o.isPanning = !1),
                  (o.isZooming = !1),
                  (o.isScrolling = !1),
                  (o.instance.isDragging = !1),
                  o.canTap)
              )
                  return o.onTap(t);
              (o.speed = 100), (o.velocityX = (o.distanceX / o.dMs) * 0.5), (o.velocityY = (o.distanceY / o.dMs) * 0.5), r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
          }),
          (d.prototype.endSwiping = function (t, e) {
              var o = this,
                  i = !1,
                  a = o.instance.group.length,
                  s = Math.abs(o.distanceX),
                  r = "x" == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
              (o.sliderLastPos = null),
                  "y" == t && !e && Math.abs(o.distanceY) > 50
                      ? (n.fancybox.animate(o.instance.current.$slide, { top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY, opacity: 0 }, 200), (i = o.instance.close(!0, 250)))
                      : r && o.distanceX > 0
                      ? (i = o.instance.previous(300))
                      : r && o.distanceX < 0 && (i = o.instance.next(300)),
                  !1 !== i || ("x" != t && "y" != t) || o.instance.centerSlide(200),
                  o.$container.removeClass("fancybox-is-sliding");
          }),
          (d.prototype.endPanning = function () {
              var t,
                  e,
                  o,
                  i = this;
              i.contentLastPos &&
                  (!1 === i.opts.momentum || i.dMs > 350 ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top)) : ((t = i.contentLastPos.left + 500 * i.velocityX), (e = i.contentLastPos.top + 500 * i.velocityY)),
                  (o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)),
                  (o.width = i.contentStartPos.width),
                  (o.height = i.contentStartPos.height),
                  n.fancybox.animate(i.$content, o, 366));
          }),
          (d.prototype.endZooming = function () {
              var t,
                  e,
                  o,
                  i,
                  a = this,
                  s = a.instance.current,
                  r = a.newWidth,
                  c = a.newHeight;
              a.contentLastPos &&
                  ((t = a.contentLastPos.left),
                  (e = a.contentLastPos.top),
                  (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
                  n.fancybox.setTranslate(a.$content, i),
                  r < a.canvasWidth && c < a.canvasHeight
                      ? a.instance.scaleToFit(150)
                      : r > s.width || c > s.height
                      ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150)
                      : ((o = a.limitPosition(t, e, r, c)), n.fancybox.animate(a.$content, o, 150)));
          }),
          (d.prototype.onTap = function (e) {
              var o,
                  i = this,
                  s = n(e.target),
                  r = i.instance,
                  c = r.current,
                  l = (e && a(e)) || i.startPoints,
                  d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
                  u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
                  f = function (t) {
                      var o = c.opts[t];
                      if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
                          switch (o) {
                              case "close":
                                  r.close(i.startEvent);
                                  break;
                              case "toggleControls":
                                  r.toggleControls();
                                  break;
                              case "next":
                                  r.next();
                                  break;
                              case "nextOrClose":
                                  r.group.length > 1 ? r.next() : r.close(i.startEvent);
                                  break;
                              case "zoom":
                                  "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent));
                          }
                  };
              if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
                  if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
                  else if (s.is(".fancybox-slide")) o = "Slide";
                  else {
                      if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                      o = "Content";
                  }
                  if (i.tapped) {
                      if ((clearTimeout(i.tapped), (i.tapped = null), Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)) return this;
                      f("dblclick" + o);
                  } else
                      (i.tapX = d),
                          (i.tapY = u),
                          c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o]
                              ? (i.tapped = setTimeout(function () {
                                    (i.tapped = null), r.isAnimating || f("click" + o);
                                }, 500))
                              : f("click" + o);
                  return this;
              }
          }),
          n(e)
              .on("onActivate.fb", function (t, e) {
                  e && !e.Guestures && (e.Guestures = new d(e));
              })
              .on("beforeClose.fb", function (t, e) {
                  e && e.Guestures && e.Guestures.destroy();
              });
  })(window, document, jQuery),
  (function (t, e) {
      "use strict";
      e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
              slideShow:
                  '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
          },
          slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
      });
      var n = function (t) {
          (this.instance = t), this.init();
      };
      e.extend(n.prototype, {
          timer: null,
          isActive: !1,
          $button: null,
          init: function () {
              var t = this,
                  n = t.instance,
                  o = n.group[n.currIndex].opts.slideShow;
              (t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                  t.toggle();
              })),
                  n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
          },
          set: function (t) {
              var n = this,
                  o = n.instance,
                  i = o.current;
              i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
                  ? n.isActive &&
                    "video" !== i.contentType &&
                    (n.$progress && e.fancybox.animate(n.$progress.show(), { scaleX: 1 }, i.opts.slideShow.speed),
                    (n.timer = setTimeout(function () {
                        o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0);
                    }, i.opts.slideShow.speed)))
                  : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
          },
          clear: function () {
              var t = this;
              clearTimeout(t.timer), (t.timer = null), t.$progress && t.$progress.removeAttr("style").hide();
          },
          start: function () {
              var t = this,
                  e = t.instance.current;
              e &&
                  (t.$button
                      .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                      .removeClass("fancybox-button--play")
                      .addClass("fancybox-button--pause"),
                  (t.isActive = !0),
                  e.isComplete && t.set(!0),
                  t.instance.trigger("onSlideShowChange", !0));
          },
          stop: function () {
              var t = this,
                  e = t.instance.current;
              t.clear(),
                  t.$button
                      .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                      .removeClass("fancybox-button--pause")
                      .addClass("fancybox-button--play"),
                  (t.isActive = !1),
                  t.instance.trigger("onSlideShowChange", !1),
                  t.$progress && t.$progress.removeAttr("style").hide();
          },
          toggle: function () {
              var t = this;
              t.isActive ? t.stop() : t.start();
          },
      }),
          e(t).on({
              "onInit.fb": function (t, e) {
                  e && !e.SlideShow && (e.SlideShow = new n(e));
              },
              "beforeShow.fb": function (t, e, n, o) {
                  var i = e && e.SlideShow;
                  o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear();
              },
              "afterShow.fb": function (t, e, n) {
                  var o = e && e.SlideShow;
                  o && o.isActive && o.set();
              },
              "afterKeydown.fb": function (n, o, i, a, s) {
                  var r = o && o.SlideShow;
                  !r || !i.opts.slideShow || (80 !== s && 32 !== s) || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle());
              },
              "beforeClose.fb onDeactivate.fb": function (t, e) {
                  var n = e && e.SlideShow;
                  n && n.stop();
              },
          }),
          e(t).on("visibilitychange", function () {
              var n = e.fancybox.getInstance(),
                  o = n && n.SlideShow;
              o && o.isActive && (t.hidden ? o.clear() : o.set());
          });
  })(document, jQuery),
  (function (t, e) {
      "use strict";
      var n = (function () {
          for (
              var e = [
                      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                      ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                      ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                      ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                  ],
                  n = {},
                  o = 0;
              o < e.length;
              o++
          ) {
              var i = e[o];
              if (i && i[1] in t) {
                  for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
                  return n;
              }
          }
          return !1;
      })();
      if (n) {
          var o = {
              request: function (e) {
                  (e = e || t.documentElement), e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
              },
              exit: function () {
                  t[n.exitFullscreen]();
              },
              toggle: function (e) {
                  (e = e || t.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
              },
              isFullscreen: function () {
                  return Boolean(t[n.fullscreenElement]);
              },
              enabled: function () {
                  return Boolean(t[n.fullscreenEnabled]);
              },
          };
          e.extend(!0, e.fancybox.defaults, {
              btnTpl: {
                  fullScreen:
                      '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
              },
              fullScreen: { autoStart: !1 },
          }),
              e(t).on(n.fullscreenchange, function () {
                  var t = o.isFullscreen(),
                      n = e.fancybox.getInstance();
                  n &&
                      (n.current && "image" === n.current.type && n.isAnimating && ((n.isAnimating = !1), n.update(!0, !0, 0), n.isComplete || n.complete()),
                      n.trigger("onFullscreenChange", t),
                      n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                      n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
              });
      }
      e(t).on({
          "onInit.fb": function (t, e) {
              var i;
              if (!n) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
              e && e.group[e.currIndex].opts.fullScreen
                  ? ((i = e.$refs.container),
                    i.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                        t.stopPropagation(), t.preventDefault(), o.toggle();
                    }),
                    e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(),
                    (e.FullScreen = o))
                  : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
          },
          "afterKeydown.fb": function (t, e, n, o, i) {
              e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle());
          },
          "beforeClose.fb": function (t, e) {
              e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit();
          },
      });
  })(document, jQuery),
  (function (t, e) {
      "use strict";
      var n = "fancybox-thumbs";
      e.fancybox.defaults = e.extend(
          !0,
          {
              btnTpl: {
                  thumbs:
                      '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
              },
              thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
          },
          e.fancybox.defaults
      );
      var o = function (t) {
          this.init(t);
      };
      e.extend(o.prototype, {
          $button: null,
          $grid: null,
          $list: null,
          isVisible: !1,
          isActive: !1,
          init: function (t) {
              var e = this,
                  n = t.group,
                  o = 0;
              (e.instance = t), (e.opts = n[t.currIndex].opts.thumbs), (t.Thumbs = e), (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
              for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++);
              o > 1 && e.opts
                  ? (e.$button.removeAttr("style").on("click", function () {
                        e.toggle();
                    }),
                    (e.isActive = !0))
                  : e.$button.hide();
          },
          create: function () {
              var t,
                  o = this,
                  i = o.instance,
                  a = o.opts.parentEl,
                  s = [];
              o.$grid ||
                  ((o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a))),
                  o.$grid.on("click", "a", function () {
                      i.jumpTo(e(this).attr("data-index"));
                  })),
                  o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
                  e.each(i.group, function (e, n) {
                      (t = n.thumb),
                          t || "image" !== n.type || (t = n.src),
                          s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                  }),
                  (o.$list[0].innerHTML = s.join("")),
                  "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + i.group.length * o.$list.children().eq(0).outerWidth(!0));
          },
          focus: function (t) {
              var e,
                  n,
                  o = this,
                  i = o.$list,
                  a = o.$grid;
              o.instance.current &&
                  ((e = i
                      .children()
                      .removeClass("fancybox-thumbs-active")
                      .filter('[data-index="' + o.instance.current.index + '"]')
                      .addClass("fancybox-thumbs-active")),
                  (n = e.position()),
                  "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight())
                      ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
                      : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({ scrollLeft: n.left }, t));
          },
          update: function () {
              var t = this;
              t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                  t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
                  t.instance.update();
          },
          hide: function () {
              (this.isVisible = !1), this.update();
          },
          show: function () {
              (this.isVisible = !0), this.update();
          },
          toggle: function () {
              (this.isVisible = !this.isVisible), this.update();
          },
      }),
          e(t).on({
              "onInit.fb": function (t, e) {
                  var n;
                  e && !e.Thumbs && ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
              },
              "beforeShow.fb": function (t, e, n, o) {
                  var i = e && e.Thumbs;
                  i && i.isVisible && i.focus(o ? 0 : 250);
              },
              "afterKeydown.fb": function (t, e, n, o, i) {
                  var a = e && e.Thumbs;
                  a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
              },
              "beforeClose.fb": function (t, e) {
                  var n = e && e.Thumbs;
                  n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
              },
          });
  })(document, jQuery),
  (function (t, e) {
      "use strict";
      function n(t) {
          var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" };
          return String(t).replace(/[&<>"'`=\/]/g, function (t) {
              return e[t];
          });
      }
      e.extend(!0, e.fancybox.defaults, {
          btnTpl: {
              share:
                  '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
          },
          share: {
              url: function (t, e) {
                  return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
              },
              tpl:
                  '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
          },
      }),
          e(t).on("click", "[data-fancybox-share]", function () {
              var t,
                  o,
                  i = e.fancybox.getInstance(),
                  a = i.current || null;
              a &&
                  ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])),
                  (o = a.opts.share.tpl
                      .replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "")
                      .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                      .replace(/\{\{url_raw\}\}/g, n(t))
                      .replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : "")),
                  e.fancybox.open({
                      src: i.translate(i, o),
                      type: "html",
                      opts: {
                          touch: !1,
                          animationEffect: !1,
                          afterLoad: function (t, e) {
                              i.$refs.container.one("beforeClose.fb", function () {
                                  t.close(null, 0);
                              }),
                                  e.$content.find(".fancybox-share__button").click(function () {
                                      return window.open(this.href, "Share", "width=550, height=450"), !1;
                                  });
                          },
                          mobile: { autoFocus: !1 },
                      },
                  }));
          });
  })(document, jQuery),
  (function (t, e, n) {
      "use strict";
      function o() {
          var e = t.location.hash.substr(1),
              n = e.split("-"),
              o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
              i = n.join("-");
          return { hash: e, index: o < 1 ? 1 : o, gallery: i };
      }
      function i(t) {
          "" !== t.gallery &&
              n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                  .eq(t.index - 1)
                  .focus()
                  .trigger("click.fb-start");
      }
      function a(t) {
          var e, n;
          return !!t && ((e = t.current ? t.current.opts : t.opts), "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
      }
      n.escapeSelector ||
          (n.escapeSelector = function (t) {
              return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                  return e ? ("\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
              });
          }),
          n(function () {
              !1 !== n.fancybox.defaults.hash &&
                  (n(e).on({
                      "onInit.fb": function (t, e) {
                          var n, i;
                          !1 !== e.group[e.currIndex].opts.hash && ((n = o()), (i = a(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1));
                      },
                      "beforeShow.fb": function (n, o, i, s) {
                          var r;
                          i &&
                              !1 !== i.opts.hash &&
                              (r = a(o)) &&
                              ((o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : "")),
                              t.location.hash !== "#" + o.currentHash &&
                                  (s && !o.origHash && (o.origHash = t.location.hash),
                                  o.hashTimer && clearTimeout(o.hashTimer),
                                  (o.hashTimer = setTimeout(function () {
                                      "replaceState" in t.history
                                          ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0))
                                          : (t.location.hash = o.currentHash),
                                          (o.hashTimer = null);
                                  }, 300))));
                      },
                      "beforeClose.fb": function (n, o, i) {
                          i &&
                              !1 !== i.opts.hash &&
                              (clearTimeout(o.hashTimer),
                              o.currentHash && o.hasCreatedHistory
                                  ? t.history.back()
                                  : o.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : (t.location.hash = o.origHash)),
                              (o.currentHash = null));
                      },
                  }),
                  n(t).on("hashchange.fb", function () {
                      var t = o(),
                          e = null;
                      n.each(n(".fancybox-container").get().reverse(), function (t, o) {
                          var i = n(o).data("FancyBox");
                          if (i && i.currentHash) return (e = i), !1;
                      }),
                          e ? e.currentHash === t.gallery + "-" + t.index || (1 === t.index && e.currentHash == t.gallery) || ((e.currentHash = null), e.close()) : "" !== t.gallery && i(t);
                  }),
                  setTimeout(function () {
                      n.fancybox.getInstance() || i(o());
                  }, 50));
          });
  })(window, document, jQuery),
  (function (t, e) {
      "use strict";
      var n = new Date().getTime();
      e(t).on({
          "onInit.fb": function (t, e, o) {
              e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                  var o = e.current,
                      i = new Date().getTime();
                  e.group.length < 2 ||
                      !1 === o.opts.wheel ||
                      ("auto" === o.opts.wheel && "image" !== o.type) ||
                      (t.preventDefault(),
                      t.stopPropagation(),
                      o.$slide.hasClass("fancybox-animated") || ((t = t.originalEvent || t), i - n < 250 || ((n = i), e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
              });
          },
      });
  })(document, jQuery);

// SlickCarousel
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? (module.exports = i(require("jquery"))) : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
      var e = 0;
      return function (t, o) {
          var s,
              n = this;
          (n.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: i(t),
              appendDots: i(t),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fa fa-angle-left"></i></button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fas fa-angle-right"></i></button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function (e, t) {
                  return i('<button type="button" />').text(t + 1);
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: 0.35,
              fade: !1,
              focusOnSelect: !1,
              focusOnChange: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3,
          }),
              (n.initials = {
                  animating: !1,
                  dragging: !1,
                  autoPlayTimer: null,
                  currentDirection: 0,
                  currentLeft: null,
                  currentSlide: 0,
                  direction: 1,
                  $dots: null,
                  listWidth: null,
                  listHeight: null,
                  loadIndex: 0,
                  $nextArrow: null,
                  $prevArrow: null,
                  scrolling: !1,
                  slideCount: null,
                  slideWidth: null,
                  $slideTrack: null,
                  $slides: null,
                  sliding: !1,
                  slideOffset: 0,
                  swipeLeft: null,
                  swiping: !1,
                  $list: null,
                  touchObject: {},
                  transformsEnabled: !1,
                  unslicked: !1,
              }),
              i.extend(n, n.initials),
              (n.activeBreakpoint = null),
              (n.animType = null),
              (n.animProp = null),
              (n.breakpoints = []),
              (n.breakpointSettings = []),
              (n.cssTransitions = !1),
              (n.focussed = !1),
              (n.interrupted = !1),
              (n.hidden = "hidden"),
              (n.paused = !0),
              (n.positionProp = null),
              (n.respondTo = null),
              (n.rowCount = 1),
              (n.shouldClick = !0),
              (n.$slider = i(t)),
              (n.$slidesCache = null),
              (n.transformType = null),
              (n.transitionType = null),
              (n.visibilityChange = "visibilitychange"),
              (n.windowWidth = 0),
              (n.windowTimer = null),
              (s = i(t).data("slick") || {}),
              (n.options = i.extend({}, n.defaults, o, s)),
              (n.currentSlide = n.options.initialSlide),
              (n.originalSettings = n.options),
              void 0 !== document.mozHidden ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
              (n.autoPlay = i.proxy(n.autoPlay, n)),
              (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
              (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
              (n.changeSlide = i.proxy(n.changeSlide, n)),
              (n.clickHandler = i.proxy(n.clickHandler, n)),
              (n.selectHandler = i.proxy(n.selectHandler, n)),
              (n.setPosition = i.proxy(n.setPosition, n)),
              (n.swipeHandler = i.proxy(n.swipeHandler, n)),
              (n.dragHandler = i.proxy(n.dragHandler, n)),
              (n.keyHandler = i.proxy(n.keyHandler, n)),
              (n.instanceUid = e++),
              (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
              n.registerBreakpoints(),
              n.init(!0);
      };
  })()).prototype.activateADA = function () {
      this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }),
      (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
          var s = this;
          if ("boolean" == typeof t) (o = t), (t = null);
          else if (t < 0 || t >= s.slideCount) return !1;
          s.unload(),
              "number" == typeof t
                  ? 0 === t && 0 === s.$slides.length
                      ? i(e).appendTo(s.$slideTrack)
                      : o
                      ? i(e).insertBefore(s.$slides.eq(t))
                      : i(e).insertAfter(s.$slides.eq(t))
                  : !0 === o
                  ? i(e).prependTo(s.$slideTrack)
                  : i(e).appendTo(s.$slideTrack),
              (s.$slides = s.$slideTrack.children(this.options.slide)),
              s.$slideTrack.children(this.options.slide).detach(),
              s.$slideTrack.append(s.$slides),
              s.$slides.each(function (e, t) {
                  i(t).attr("data-slick-index", e);
              }),
              (s.$slidesCache = s.$slides),
              s.reinit();
      }),
      (e.prototype.animateHeight = function () {
          var i = this;
          if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
              var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
              i.$list.animate({ height: e }, i.options.speed);
          }
      }),
      (e.prototype.animateSlide = function (e, t) {
          var o = {},
              s = this;
          s.animateHeight(),
              !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
              !1 === s.transformsEnabled
                  ? !1 === s.options.vertical
                      ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
                      : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
                  : !1 === s.cssTransitions
                  ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                    i({ animStart: s.currentLeft }).animate(
                        { animStart: e },
                        {
                            duration: s.options.speed,
                            easing: s.options.easing,
                            step: function (i) {
                                (i = Math.ceil(i)), !1 === s.options.vertical ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o)) : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
                            },
                            complete: function () {
                                t && t.call();
                            },
                        }
                    ))
                  : (s.applyTransition(),
                    (e = Math.ceil(e)),
                    !1 === s.options.vertical ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)") : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                    s.$slideTrack.css(o),
                    t &&
                        setTimeout(function () {
                            s.disableTransition(), t.call();
                        }, s.options.speed));
      }),
      (e.prototype.getNavTarget = function () {
          var e = this,
              t = e.options.asNavFor;
          return t && null !== t && (t = i(t).not(e.$slider)), t;
      }),
      (e.prototype.asNavFor = function (e) {
          var t = this.getNavTarget();
          null !== t &&
              "object" == typeof t &&
              t.each(function () {
                  var t = i(this).slick("getSlick");
                  t.unslicked || t.slideHandler(e, !0);
              });
      }),
      (e.prototype.applyTransition = function (i) {
          var e = this,
              t = {};
          !1 === e.options.fade ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
              !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
      }),
      (e.prototype.autoPlay = function () {
          var i = this;
          i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
      }),
      (e.prototype.autoPlayClear = function () {
          var i = this;
          i.autoPlayTimer && clearInterval(i.autoPlayTimer);
      }),
      (e.prototype.autoPlayIterator = function () {
          var i = this,
              e = i.currentSlide + i.options.slidesToScroll;
          i.paused ||
              i.interrupted ||
              i.focussed ||
              (!1 === i.options.infinite &&
                  (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? (i.direction = 0) : 0 === i.direction && ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
              i.slideHandler(e));
      }),
      (e.prototype.buildArrows = function () {
          var e = this;
          !0 === e.options.arrows &&
              ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
              (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
              e.slideCount > e.options.slidesToShow
                  ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                    e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                    !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                  : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (e.prototype.buildDots = function () {
          var e,
              t,
              o = this;
          if (!0 === o.options.dots) {
              for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
              (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
          }
      }),
      (e.prototype.buildOut = function () {
          var e = this;
          (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
              (e.slideCount = e.$slides.length),
              e.$slides.each(function (e, t) {
                  i(t)
                      .attr("data-slick-index", e)
                      .data("originalStyling", i(t).attr("style") || "");
              }),
              e.$slider.addClass("slick-slider"),
              (e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
              (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
              e.$slideTrack.css("opacity", 0),
              (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
              i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
              e.setupInfinite(),
              e.buildArrows(),
              e.buildDots(),
              e.updateDots(),
              e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
              !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (e.prototype.buildRows = function () {
          var i,
              e,
              t,
              o,
              s,
              n,
              r,
              l = this;
          if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 1)) {
              for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                  var d = document.createElement("div");
                  for (e = 0; e < l.options.rows; e++) {
                      var a = document.createElement("div");
                      for (t = 0; t < l.options.slidesPerRow; t++) {
                          var c = i * r + (e * l.options.slidesPerRow + t);
                          n.get(c) && a.appendChild(n.get(c));
                      }
                      d.appendChild(a);
                  }
                  o.appendChild(d);
              }
              l.$slider.empty().append(o),
                  l.$slider
                      .children()
                      .children()
                      .children()
                      .css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
          }
      }),
      (e.prototype.checkResponsive = function (e, t) {
          var o,
              s,
              n,
              r = this,
              l = !1,
              d = r.$slider.width(),
              a = window.innerWidth || i(window).width();
          if (("window" === r.respondTo ? (n = a) : "slider" === r.respondTo ? (n = d) : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
              s = null;
              for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
              null !== s
                  ? null !== r.activeBreakpoint
                      ? (s !== r.activeBreakpoint || t) &&
                        ((r.activeBreakpoint = s),
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                        (l = s))
                      : ((r.activeBreakpoint = s),
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                        (l = s))
                  : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (l = s)),
                  e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
          }
      }),
      (e.prototype.changeSlide = function (e, t) {
          var o,
              s,
              n,
              r = this,
              l = i(e.currentTarget);
          switch ((l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), (n = r.slideCount % r.options.slidesToScroll != 0), (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), e.data.message)) {
              case "previous":
                  (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                  break;
              case "next":
                  (s = 0 === o ? r.options.slidesToScroll : o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                  break;
              case "index":
                  var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                  r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                  break;
              default:
                  return;
          }
      }),
      (e.prototype.checkNavigable = function (i) {
          var e, t;
          if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
          else
              for (var o in e) {
                  if (i < e[o]) {
                      i = t;
                      break;
                  }
                  t = e[o];
              }
          return i;
      }),
      (e.prototype.cleanUpEvents = function () {
          var e = this;
          e.options.dots &&
              null !== e.$dots &&
              (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
              !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
              e.$slider.off("focus.slick blur.slick"),
              !0 === e.options.arrows &&
                  e.slideCount > e.options.slidesToShow &&
                  (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                  e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                  !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
              e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
              e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
              e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
              e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
              e.$list.off("click.slick", e.clickHandler),
              i(document).off(e.visibilityChange, e.visibility),
              e.cleanUpSlideEvents(),
              !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
              !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
              i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
              i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
              i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
              i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (e.prototype.cleanUpSlideEvents = function () {
          var e = this;
          e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.cleanUpRows = function () {
          var i,
              e = this;
          e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
      }),
      (e.prototype.clickHandler = function (i) {
          !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
      }),
      (e.prototype.destroy = function (e) {
          var t = this;
          t.autoPlayClear(),
              (t.touchObject = {}),
              t.cleanUpEvents(),
              i(".slick-cloned", t.$slider).detach(),
              t.$dots && t.$dots.remove(),
              t.$prevArrow &&
                  t.$prevArrow.length &&
                  (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
              t.$nextArrow &&
                  t.$nextArrow.length &&
                  (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
              t.$slides &&
                  (t.$slides
                      .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                      .removeAttr("aria-hidden")
                      .removeAttr("data-slick-index")
                      .each(function () {
                          i(this).attr("style", i(this).data("originalStyling"));
                      }),
                  t.$slideTrack.children(this.options.slide).detach(),
                  t.$slideTrack.detach(),
                  t.$list.detach(),
                  t.$slider.append(t.$slides)),
              t.cleanUpRows(),
              t.$slider.removeClass("slick-slider"),
              t.$slider.removeClass("slick-initialized"),
              t.$slider.removeClass("slick-dotted"),
              (t.unslicked = !0),
              e || t.$slider.trigger("destroy", [t]);
      }),
      (e.prototype.disableTransition = function (i) {
          var e = this,
              t = {};
          (t[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
      }),
      (e.prototype.fadeSlide = function (i, e) {
          var t = this;
          !1 === t.cssTransitions
              ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
              : (t.applyTransition(i),
                t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                e &&
                    setTimeout(function () {
                        t.disableTransition(i), e.call();
                    }, t.options.speed));
      }),
      (e.prototype.fadeSlideOut = function (i) {
          var e = this;
          !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
      }),
      (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
          var e = this;
          null !== i && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
      }),
      (e.prototype.focusHandler = function () {
          var e = this;
          e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
              t.stopImmediatePropagation();
              var o = i(this);
              setTimeout(function () {
                  e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
              }, 0);
          });
      }),
      (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
          return this.currentSlide;
      }),
      (e.prototype.getDotCount = function () {
          var i = this,
              e = 0,
              t = 0,
              o = 0;
          if (!0 === i.options.infinite)
              if (i.slideCount <= i.options.slidesToShow) ++o;
              else for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
          else if (!0 === i.options.centerMode) o = i.slideCount;
          else if (i.options.asNavFor) for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
          else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
          return o - 1;
      }),
      (e.prototype.getLeft = function (i) {
          var e,
              t,
              o,
              s,
              n = this,
              r = 0;
          return (
              (n.slideOffset = 0),
              (t = n.$slides.first().outerHeight(!0)),
              !0 === n.options.infinite
                  ? (n.slideCount > n.options.slidesToShow &&
                        ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                        (s = -1),
                        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
                        (r = t * n.options.slidesToShow * s)),
                    n.slideCount % n.options.slidesToScroll != 0 &&
                        i + n.options.slidesToScroll > n.slideCount &&
                        n.slideCount > n.options.slidesToShow &&
                        (i > n.slideCount
                            ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1), (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                            : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1), (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
                  : i + n.options.slidesToShow > n.slideCount && ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth), (r = (i + n.options.slidesToShow - n.slideCount) * t)),
              n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
              !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
                  ? (n.slideOffset = (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
                  : !0 === n.options.centerMode && !0 === n.options.infinite
                  ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
                  : !0 === n.options.centerMode && ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
              (e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
              !0 === n.options.variableWidth &&
                  ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
                  (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                  !0 === n.options.centerMode &&
                      ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
                      (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                      (e += (n.$list.width() - o.outerWidth()) / 2))),
              e
          );
      }),
      (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
          return this.options[i];
      }),
      (e.prototype.getNavigableIndexes = function () {
          var i,
              e = this,
              t = 0,
              o = 0,
              s = [];
          for (!1 === e.options.infinite ? (i = e.slideCount) : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount)); t < i; )
              s.push(t), (t = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
          return s;
      }),
      (e.prototype.getSlick = function () {
          return this;
      }),
      (e.prototype.getSlideCount = function () {
          var e,
              t,
              o = this;
          return (
              (t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
              !0 === o.options.swipeToSlide
                  ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                        if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
                    }),
                    Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
                  : o.options.slidesToScroll
          );
      }),
      (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
          this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
      (e.prototype.init = function (e) {
          var t = this;
          i(t.$slider).hasClass("slick-initialized") ||
              (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
              e && t.$slider.trigger("init", [t]),
              !0 === t.options.accessibility && t.initADA(),
              t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (e.prototype.initADA = function () {
          var e = this,
              t = Math.ceil(e.slideCount / e.options.slidesToShow),
              o = e.getNavigableIndexes().filter(function (i) {
                  return i >= 0 && i < e.slideCount;
              });
          e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
              null !== e.$dots &&
                  (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
                      var s = o.indexOf(t);
                      i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
                  }),
                  e.$dots
                      .attr("role", "tablist")
                      .find("li")
                      .each(function (s) {
                          var n = o[s];
                          i(this).attr({ role: "presentation" }),
                              i(this)
                                  .find("button")
                                  .first()
                                  .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
                      })
                      .eq(e.currentSlide)
                      .find("button")
                      .attr({ "aria-selected": "true", tabindex: "0" })
                      .end());
          for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
          e.activateADA();
      }),
      (e.prototype.initArrowEvents = function () {
          var i = this;
          !0 === i.options.arrows &&
              i.slideCount > i.options.slidesToShow &&
              (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
              i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
              !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
      }),
      (e.prototype.initDotEvents = function () {
          var e = this;
          !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
              !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
      }),
      (e.prototype.initSlideEvents = function () {
          var e = this;
          e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
      }),
      (e.prototype.initializeEvents = function () {
          var e = this;
          e.initArrowEvents(),
              e.initDotEvents(),
              e.initSlideEvents(),
              e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
              e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
              e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
              e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
              e.$list.on("click.slick", e.clickHandler),
              i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
              !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
              !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
              i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
              i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
              i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
              i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
              i(e.setPosition);
      }),
      (e.prototype.initUI = function () {
          var i = this;
          !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
      }),
      (e.prototype.keyHandler = function (i) {
          var e = this;
          i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
              (37 === i.keyCode && !0 === e.options.accessibility
                  ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                  : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
      }),
      (e.prototype.lazyLoad = function () {
          function e(e) {
              i("img[data-lazy]", e).each(function () {
                  var e = i(this),
                      t = i(this).attr("data-lazy"),
                      o = i(this).attr("data-srcset"),
                      s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                      r = document.createElement("img");
                  (r.onload = function () {
                      e.animate({ opacity: 0 }, 100, function () {
                          o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                              e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                              }),
                              n.$slider.trigger("lazyLoaded", [n, e, t]);
                      });
                  }),
                      (r.onerror = function () {
                          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
                      }),
                      (r.src = t);
              });
          }
          var t,
              o,
              s,
              n = this;
          if (
              (!0 === n.options.centerMode
                  ? !0 === n.options.infinite
                      ? (s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2)
                      : ((o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))), (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
                  : ((o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide), (s = Math.ceil(o + n.options.slidesToShow)), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
              (t = n.$slider.find(".slick-slide").slice(o, s)),
              "anticipated" === n.options.lazyLoad)
          )
              for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), (t = (t = t.add(d.eq(r))).add(d.eq(l))), r--, l++;
          e(t),
              n.slideCount <= n.options.slidesToShow
                  ? e(n.$slider.find(".slick-slide"))
                  : n.currentSlide >= n.slideCount - n.options.slidesToShow
                  ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
                  : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
      }),
      (e.prototype.loadSlider = function () {
          var i = this;
          i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
      }),
      (e.prototype.next = e.prototype.slickNext = function () {
          this.changeSlide({ data: { message: "next" } });
      }),
      (e.prototype.orientationChange = function () {
          var i = this;
          i.checkResponsive(), i.setPosition();
      }),
      (e.prototype.pause = e.prototype.slickPause = function () {
          var i = this;
          i.autoPlayClear(), (i.paused = !0);
      }),
      (e.prototype.play = e.prototype.slickPlay = function () {
          var i = this;
          i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
      }),
      (e.prototype.postSlide = function (e) {
          var t = this;
          t.unslicked ||
              (t.$slider.trigger("afterChange", [t, e]),
              (t.animating = !1),
              t.slideCount > t.options.slidesToShow && t.setPosition(),
              (t.swipeLeft = null),
              t.options.autoplay && t.autoPlay(),
              !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (e.prototype.prev = e.prototype.slickPrev = function () {
          this.changeSlide({ data: { message: "previous" } });
      }),
      (e.prototype.preventDefault = function (i) {
          i.preventDefault();
      }),
      (e.prototype.progressiveLazyLoad = function (e) {
          e = e || 1;
          var t,
              o,
              s,
              n,
              r,
              l = this,
              d = i("img[data-lazy]", l.$slider);
          d.length
              ? ((t = d.first()),
                (o = t.attr("data-lazy")),
                (s = t.attr("data-srcset")),
                (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                ((r = document.createElement("img")).onload = function () {
                    s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                        t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                        !0 === l.options.adaptiveHeight && l.setPosition(),
                        l.$slider.trigger("lazyLoaded", [l, t, o]),
                        l.progressiveLazyLoad();
                }),
                (r.onerror = function () {
                    e < 3
                        ? setTimeout(function () {
                              l.progressiveLazyLoad(e + 1);
                          }, 500)
                        : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
                }),
                (r.src = o))
              : l.$slider.trigger("allImagesLoaded", [l]);
      }),
      (e.prototype.refresh = function (e) {
          var t,
              o,
              s = this;
          (o = s.slideCount - s.options.slidesToShow),
              !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
              s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
              (t = s.currentSlide),
              s.destroy(!0),
              i.extend(s, s.initials, { currentSlide: t }),
              s.init(),
              e || s.changeSlide({ data: { message: "index", index: t } }, !1);
      }),
      (e.prototype.registerBreakpoints = function () {
          var e,
              t,
              o,
              s = this,
              n = s.options.responsive || null;
          if ("array" === i.type(n) && n.length) {
              s.respondTo = s.options.respondTo || "window";
              for (e in n)
                  if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                      for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                      s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
                  }
              s.breakpoints.sort(function (i, e) {
                  return s.options.mobileFirst ? i - e : e - i;
              });
          }
      }),
      (e.prototype.reinit = function () {
          var e = this;
          (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
              (e.slideCount = e.$slides.length),
              e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
              e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
              e.registerBreakpoints(),
              e.setProps(),
              e.setupInfinite(),
              e.buildArrows(),
              e.updateArrows(),
              e.initArrowEvents(),
              e.buildDots(),
              e.updateDots(),
              e.initDotEvents(),
              e.cleanUpSlideEvents(),
              e.initSlideEvents(),
              e.checkResponsive(!1, !0),
              !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
              e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
              e.setPosition(),
              e.focusHandler(),
              (e.paused = !e.options.autoplay),
              e.autoPlay(),
              e.$slider.trigger("reInit", [e]);
      }),
      (e.prototype.resize = function () {
          var e = this;
          i(window).width() !== e.windowWidth &&
              (clearTimeout(e.windowDelay),
              (e.windowDelay = window.setTimeout(function () {
                  (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
              }, 50)));
      }),
      (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
          var o = this;
          if (((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i), o.slideCount < 1 || i < 0 || i > o.slideCount - 1)) return !1;
          o.unload(),
              !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
              (o.$slides = o.$slideTrack.children(this.options.slide)),
              o.$slideTrack.children(this.options.slide).detach(),
              o.$slideTrack.append(o.$slides),
              (o.$slidesCache = o.$slides),
              o.reinit();
      }),
      (e.prototype.setCSS = function (i) {
          var e,
              t,
              o = this,
              s = {};
          !0 === o.options.rtl && (i = -i),
              (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
              (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
              (s[o.positionProp] = i),
              !1 === o.transformsEnabled
                  ? o.$slideTrack.css(s)
                  : ((s = {}), !1 === o.cssTransitions ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s)) : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
      }),
      (e.prototype.setDimensions = function () {
          var i = this;
          !1 === i.options.vertical
              ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
              : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
              (i.listWidth = i.$list.width()),
              (i.listHeight = i.$list.height()),
              !1 === i.options.vertical && !1 === i.options.variableWidth
                  ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
                  : !0 === i.options.variableWidth
                  ? i.$slideTrack.width(5e3 * i.slideCount)
                  : ((i.slideWidth = Math.ceil(i.listWidth)), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
          var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
          !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
      }),
      (e.prototype.setFade = function () {
          var e,
              t = this;
          t.$slides.each(function (o, s) {
              (e = t.slideWidth * o * -1),
                  !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
          }),
              t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
      }),
      (e.prototype.setHeight = function () {
          var i = this;
          if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
              var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
              i.$list.css("height", e);
          }
      }),
      (e.prototype.setOption = e.prototype.slickSetOption = function () {
          var e,
              t,
              o,
              s,
              n,
              r = this,
              l = !1;
          if (
              ("object" === i.type(arguments[0])
                  ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                  : "string" === i.type(arguments[0]) &&
                    ((o = arguments[0]), (s = arguments[1]), (l = arguments[2]), "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? (n = "responsive") : void 0 !== arguments[1] && (n = "single")),
              "single" === n)
          )
              r.options[o] = s;
          else if ("multiple" === n)
              i.each(o, function (i, e) {
                  r.options[i] = e;
              });
          else if ("responsive" === n)
              for (t in s)
                  if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                  else {
                      for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                      r.options.responsive.push(s[t]);
                  }
          l && (r.unload(), r.reinit());
      }),
      (e.prototype.setPosition = function () {
          var i = this;
          i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
      }),
      (e.prototype.setProps = function () {
          var i = this,
              e = document.body.style;
          (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
              "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
              (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === i.options.useCSS && (i.cssTransitions = !0)),
              i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : (i.options.zIndex = i.defaults.zIndex)),
              void 0 !== e.OTransform && ((i.animType = "OTransform"), (i.transformType = "-o-transform"), (i.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
              void 0 !== e.MozTransform && ((i.animType = "MozTransform"), (i.transformType = "-moz-transform"), (i.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
              void 0 !== e.webkitTransform &&
                  ((i.animType = "webkitTransform"), (i.transformType = "-webkit-transform"), (i.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
              void 0 !== e.msTransform && ((i.animType = "msTransform"), (i.transformType = "-ms-transform"), (i.transitionType = "msTransition"), void 0 === e.msTransform && (i.animType = !1)),
              void 0 !== e.transform && !1 !== i.animType && ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
              (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
      }),
      (e.prototype.setSlideClasses = function (i) {
          var e,
              t,
              o,
              s,
              n = this;
          if (((t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode)) {
              var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
              (e = Math.floor(n.options.slidesToShow / 2)),
                  !0 === n.options.infinite &&
                      (i >= e && i <= n.slideCount - 1 - e
                          ? n.$slides
                                .slice(i - e + r, i + e + 1)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : ((o = n.options.slidesToShow + i),
                            t
                                .slice(o - e + 1 + r, o + e + 2)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")),
                      0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                  n.$slides.eq(i).addClass("slick-center");
          } else
              i >= 0 && i <= n.slideCount - n.options.slidesToShow
                  ? n.$slides
                        .slice(i, i + n.options.slidesToShow)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")
                  : t.length <= n.options.slidesToShow
                  ? t.addClass("slick-active").attr("aria-hidden", "false")
                  : ((s = n.slideCount % n.options.slidesToShow),
                    (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
                    n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
                        ? t
                              .slice(o - (n.options.slidesToShow - s), o + s)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : t
                              .slice(o, o + n.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false"));
          ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
      }),
      (e.prototype.setupInfinite = function () {
          var e,
              t,
              o,
              s = this;
          if ((!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))) {
              for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)
                  (t = e - 1),
                      i(s.$slides[t])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", t - s.slideCount)
                          .prependTo(s.$slideTrack)
                          .addClass("slick-cloned");
              for (e = 0; e < o + s.slideCount; e += 1)
                  (t = e),
                      i(s.$slides[t])
                          .clone(!0)
                          .attr("id", "")
                          .attr("data-slick-index", t + s.slideCount)
                          .appendTo(s.$slideTrack)
                          .addClass("slick-cloned");
              s.$slideTrack
                  .find(".slick-cloned")
                  .find("[id]")
                  .each(function () {
                      i(this).attr("id", "");
                  });
          }
      }),
      (e.prototype.interrupt = function (i) {
          var e = this;
          i || e.autoPlay(), (e.interrupted = i);
      }),
      (e.prototype.selectHandler = function (e) {
          var t = this,
              o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
              s = parseInt(o.attr("data-slick-index"));
          s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
      }),
      (e.prototype.slideHandler = function (i, e, t) {
          var o,
              s,
              n,
              r,
              l,
              d = null,
              a = this;
          if (((e = e || !1), !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i))))
              if (
                  (!1 === e && a.asNavFor(i),
                  (o = i),
                  (d = a.getLeft(o)),
                  (r = a.getLeft(a.currentSlide)),
                  (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                  !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
              )
                  !1 === a.options.fade &&
                      ((o = a.currentSlide),
                      !0 !== t
                          ? a.animateSlide(r, function () {
                                a.postSlide(o);
                            })
                          : a.postSlide(o));
              else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                  !1 === a.options.fade &&
                      ((o = a.currentSlide),
                      !0 !== t
                          ? a.animateSlide(r, function () {
                                a.postSlide(o);
                            })
                          : a.postSlide(o));
              else {
                  if (
                      (a.options.autoplay && clearInterval(a.autoPlayTimer),
                      (s =
                          o < 0
                              ? a.slideCount % a.options.slidesToScroll != 0
                                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                                  : a.slideCount + o
                              : o >= a.slideCount
                              ? a.slideCount % a.options.slidesToScroll != 0
                                  ? 0
                                  : o - a.slideCount
                              : o),
                      (a.animating = !0),
                      a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                      (n = a.currentSlide),
                      (a.currentSlide = s),
                      a.setSlideClasses(a.currentSlide),
                      a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                      a.updateDots(),
                      a.updateArrows(),
                      !0 === a.options.fade)
                  )
                      return (
                          !0 !== t
                              ? (a.fadeSlideOut(n),
                                a.fadeSlide(s, function () {
                                    a.postSlide(s);
                                }))
                              : a.postSlide(s),
                          void a.animateHeight()
                      );
                  !0 !== t
                      ? a.animateSlide(d, function () {
                            a.postSlide(s);
                        })
                      : a.postSlide(s);
              }
      }),
      (e.prototype.startLoad = function () {
          var i = this;
          !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
              !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
              i.$slider.addClass("slick-loading");
      }),
      (e.prototype.swipeDirection = function () {
          var i,
              e,
              t,
              o,
              s = this;
          return (
              (i = s.touchObject.startX - s.touchObject.curX),
              (e = s.touchObject.startY - s.touchObject.curY),
              (t = Math.atan2(e, i)),
              (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
              o <= 45 && o >= 0
                  ? !1 === s.options.rtl
                      ? "left"
                      : "right"
                  : o <= 360 && o >= 315
                  ? !1 === s.options.rtl
                      ? "left"
                      : "right"
                  : o >= 135 && o <= 225
                  ? !1 === s.options.rtl
                      ? "right"
                      : "left"
                  : !0 === s.options.verticalSwiping
                  ? o >= 35 && o <= 135
                      ? "down"
                      : "up"
                  : "vertical"
          );
      }),
      (e.prototype.swipeEnd = function (i) {
          var e,
              t,
              o = this;
          if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
          if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) return !1;
          if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
              switch ((t = o.swipeDirection())) {
                  case "left":
                  case "down":
                      (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                      break;
                  case "right":
                  case "up":
                      (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
              }
              "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
          } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
      }),
      (e.prototype.swipeHandler = function (i) {
          var e = this;
          if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))))
              switch (
                  ((e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
                  (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                  !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                  i.data.action)
              ) {
                  case "start":
                      e.swipeStart(i);
                      break;
                  case "move":
                      e.swipeMove(i);
                      break;
                  case "end":
                      e.swipeEnd(i);
              }
      }),
      (e.prototype.swipeMove = function (i) {
          var e,
              t,
              o,
              s,
              n,
              r,
              l = this;
          return (
              (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
              !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                  ((e = l.getLeft(l.currentSlide)),
                  (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
                  (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
                  (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
                  (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
                  !l.options.verticalSwiping && !l.swiping && r > 4
                      ? ((l.scrolling = !0), !1)
                      : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
                        (t = l.swipeDirection()),
                        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
                        (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
                        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                        (o = l.touchObject.swipeLength),
                        (l.touchObject.edgeHit = !1),
                        !1 === l.options.infinite &&
                            ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                            ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
                        !1 === l.options.vertical ? (l.swipeLeft = e + o * s) : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
                        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
          );
      }),
      (e.prototype.swipeStart = function (i) {
          var e,
              t = this;
          if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)) return (t.touchObject = {}), !1;
          void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
              (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
              (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
              (t.dragging = !0);
      }),
      (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
          var i = this;
          null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
      }),
      (e.prototype.unload = function () {
          var e = this;
          i(".slick-cloned", e.$slider).remove(),
              e.$dots && e.$dots.remove(),
              e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
              e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
              e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
      }),
      (e.prototype.unslick = function (i) {
          var e = this;
          e.$slider.trigger("unslick", [e, i]), e.destroy();
      }),
      (e.prototype.updateArrows = function () {
          var i = this;
          Math.floor(i.options.slidesToShow / 2),
              !0 === i.options.arrows &&
                  i.slideCount > i.options.slidesToShow &&
                  !i.options.infinite &&
                  (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                  i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                  0 === i.currentSlide
                      ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                      : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
                      ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                      : i.currentSlide >= i.slideCount - 1 &&
                        !0 === i.options.centerMode &&
                        (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
      }),
      (e.prototype.updateDots = function () {
          var i = this;
          null !== i.$dots &&
              (i.$dots.find("li").removeClass("slick-active").end(),
              i.$dots
                  .find("li")
                  .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                  .addClass("slick-active"));
      }),
      (e.prototype.visibility = function () {
          var i = this;
          i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
      }),
      (i.fn.slick = function () {
          var i,
              t,
              o = this,
              s = arguments[0],
              n = Array.prototype.slice.call(arguments, 1),
              r = o.length;
          for (i = 0; i < r; i++) if (("object" == typeof s || void 0 === s ? (o[i].slick = new e(o[i], s)) : (t = o[i].slick[s].apply(o[i].slick, n)), void 0 !== t)) return t;
          return o;
      });
});

/*------------ //////// ---------------*/

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd) define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
      var c = { exports: {} };
      b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
      if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
      return b.indexOf(a) >= 0;
  }
  function e(a, b) {
      for (var c in b)
          if (null == a[c]) {
              var d = b[c];
              a[c] = d;
          }
      return a;
  }
  function f(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
  }
  function g(a) {
      var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
          c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
          d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
          e = void 0;
      return null != document.createEvent ? ((e = document.createEvent("CustomEvent")), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? ((e = document.createEventObject()), (e.eventType = a)) : (e.eventName = a), e;
  }
  function h(a, b) {
      null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
      null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : (a[b] = c);
  }
  function j(a, b, c) {
      null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
  }
  function k() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
      m,
      n = (function () {
          function a(a, b) {
              for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
              }
          }
          return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
          };
      })(),
      o =
          window.WeakMap ||
          window.MozWeakMap ||
          (function () {
              function a() {
                  c(this, a), (this.keys = []), (this.values = []);
              }
              return (
                  n(a, [
                      {
                          key: "get",
                          value: function (a) {
                              for (var b = 0; b < this.keys.length; b++) {
                                  var c = this.keys[b];
                                  if (c === a) return this.values[b];
                              }
                          },
                      },
                      {
                          key: "set",
                          value: function (a, b) {
                              for (var c = 0; c < this.keys.length; c++) {
                                  var d = this.keys[c];
                                  if (d === a) return (this.values[c] = b), this;
                              }
                              return this.keys.push(a), this.values.push(b), this;
                          },
                      },
                  ]),
                  a
              );
          })(),
      p =
          window.MutationObserver ||
          window.WebkitMutationObserver ||
          window.MozMutationObserver ||
          ((m = l = (function () {
              function a() {
                  c(this, a),
                      "undefined" != typeof console &&
                          null !== console &&
                          (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
              }
              return n(a, [{ key: "observe", value: function () {} }]), a;
          })()),
          (l.notSupported = !0),
          m),
      q =
          window.getComputedStyle ||
          function (a) {
              var b = /(\-([a-z]){1})/g;
              return {
                  getPropertyValue: function (c) {
                      "float" === c && (c = "styleFloat"),
                          b.test(c) &&
                              c.replace(b, function (a, b) {
                                  return b.toUpperCase();
                              });
                      var d = a.currentStyle;
                      return (null != d ? d[c] : void 0) || null;
                  },
              };
          },
      r = (function () {
          function a() {
              var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
              c(this, a),
                  (this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }),
                  (this.animate = (function () {
                      return "requestAnimationFrame" in window
                          ? function (a) {
                                return window.requestAnimationFrame(a);
                            }
                          : function (a) {
                                return a();
                            };
                  })()),
                  (this.vendors = ["moz", "webkit"]),
                  (this.start = this.start.bind(this)),
                  (this.resetAnimation = this.resetAnimation.bind(this)),
                  (this.scrollHandler = this.scrollHandler.bind(this)),
                  (this.scrollCallback = this.scrollCallback.bind(this)),
                  (this.scrolled = !0),
                  (this.config = e(b, this.defaults)),
                  null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
                  (this.animationNameCache = new o()),
                  (this.wowEvent = g(this.config.boxClass));
          }
          return (
              n(a, [
                  {
                      key: "init",
                      value: function () {
                          (this.element = window.document.documentElement), d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), (this.finished = []);
                      },
                  },
                  {
                      key: "start",
                      value: function () {
                          var a = this;
                          if (((this.stopped = !1), (this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass))), (this.all = this.boxes.slice(0)), this.boxes.length))
                              if (this.disabled()) this.resetStyle();
                              else
                                  for (var b = 0; b < this.boxes.length; b++) {
                                      var c = this.boxes[b];
                                      this.applyStyle(c, !0);
                                  }
                          if (
                              (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))), this.config.live)
                          ) {
                              var d = new p(function (b) {
                                  for (var c = 0; c < b.length; c++)
                                      for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                          var f = d.addedNodes[e];
                                          a.doSync(f);
                                      }
                              });
                              d.observe(document.body, { childList: !0, subtree: !0 });
                          }
                      },
                  },
                  {
                      key: "stop",
                      value: function () {
                          (this.stopped = !0), j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
                      },
                  },
                  {
                      key: "sync",
                      value: function () {
                          p.notSupported && this.doSync(this.element);
                      },
                  },
                  {
                      key: "doSync",
                      value: function (a) {
                          if ((("undefined" != typeof a && null !== a) || (a = this.element), 1 === a.nodeType)) {
                              a = a.parentNode || a;
                              for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                                  var e = b[c];
                                  d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), (this.scrolled = !0));
                              }
                          }
                      },
                  },
                  {
                      key: "show",
                      value: function (a) {
                          return (
                              this.applyStyle(a),
                              (a.className = a.className + " " + this.config.animateClass),
                              null != this.config.callback && this.config.callback(a),
                              h(a, this.wowEvent),
                              this.config.resetAnimation &&
                                  (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)),
                              a
                          );
                      },
                  },
                  {
                      key: "applyStyle",
                      value: function (a, b) {
                          var c = this,
                              d = a.getAttribute("data-wow-duration"),
                              e = a.getAttribute("data-wow-delay"),
                              f = a.getAttribute("data-wow-iteration");
                          return this.animate(function () {
                              return c.customStyle(a, b, d, e, f);
                          });
                      },
                  },
                  {
                      key: "resetStyle",
                      value: function () {
                          for (var a = 0; a < this.boxes.length; a++) {
                              var b = this.boxes[a];
                              b.style.visibility = "visible";
                          }
                      },
                  },
                  {
                      key: "resetAnimation",
                      value: function (a) {
                          if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                              var b = a.target || a.srcElement;
                              b.className = b.className.replace(this.config.animateClass, "").trim();
                          }
                      },
                  },
                  {
                      key: "customStyle",
                      value: function (a, b, c, d, e) {
                          return (
                              b && this.cacheAnimationName(a),
                              (a.style.visibility = b ? "hidden" : "visible"),
                              c && this.vendorSet(a.style, { animationDuration: c }),
                              d && this.vendorSet(a.style, { animationDelay: d }),
                              e && this.vendorSet(a.style, { animationIterationCount: e }),
                              this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }),
                              a
                          );
                      },
                  },
                  {
                      key: "vendorSet",
                      value: function (a, b) {
                          for (var c in b)
                              if (b.hasOwnProperty(c)) {
                                  var d = b[c];
                                  a["" + c] = d;
                                  for (var e = 0; e < this.vendors.length; e++) {
                                      var f = this.vendors[e];
                                      a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                                  }
                              }
                      },
                  },
                  {
                      key: "vendorCSS",
                      value: function (a, b) {
                          for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                              var f = this.vendors[e];
                              d = d || c.getPropertyCSSValue("-" + f + "-" + b);
                          }
                          return d;
                      },
                  },
                  {
                      key: "animationName",
                      value: function (a) {
                          var b = void 0;
                          try {
                              b = this.vendorCSS(a, "animation-name").cssText;
                          } catch (c) {
                              b = q(a).getPropertyValue("animation-name");
                          }
                          return "none" === b ? "" : b;
                      },
                  },
                  {
                      key: "cacheAnimationName",
                      value: function (a) {
                          return this.animationNameCache.set(a, this.animationName(a));
                      },
                  },
                  {
                      key: "cachedAnimationName",
                      value: function (a) {
                          return this.animationNameCache.get(a);
                      },
                  },
                  {
                      key: "scrollHandler",
                      value: function () {
                          this.scrolled = !0;
                      },
                  },
                  {
                      key: "scrollCallback",
                      value: function () {
                          if (this.scrolled) {
                              this.scrolled = !1;
                              for (var a = [], b = 0; b < this.boxes.length; b++) {
                                  var c = this.boxes[b];
                                  if (c) {
                                      if (this.isVisible(c)) {
                                          this.show(c);
                                          continue;
                                      }
                                      a.push(c);
                                  }
                              }
                              (this.boxes = a), this.boxes.length || this.config.live || this.stop();
                          }
                      },
                  },
                  {
                      key: "offsetTop",
                      value: function (a) {
                          for (; void 0 === a.offsetTop; ) a = a.parentNode;
                          for (var b = a.offsetTop; a.offsetParent; ) (a = a.offsetParent), (b += a.offsetTop);
                          return b;
                      },
                  },
                  {
                      key: "isVisible",
                      value: function (a) {
                          var b = a.getAttribute("data-wow-offset") || this.config.offset,
                              c = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset,
                              d = c + Math.min(this.element.clientHeight, k()) - b,
                              e = this.offsetTop(a),
                              f = e + a.clientHeight;
                          return d >= e && f >= c;
                      },
                  },
                  {
                      key: "disabled",
                      value: function () {
                          return !this.config.mobile && f(navigator.userAgent);
                      },
                  },
              ]),
              a
          );
      })();
  (b["default"] = r), (a.exports = b["default"]);
});

/*------------ //////// ---------------*/

// AOS JS
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AOS = t()) : (e.AOS = t());
})(this, function () {
  return (function (e) {
      function t(o) {
          if (n[o]) return n[o].exports;
          var i = (n[o] = { exports: {}, id: o, loaded: !1 });
          return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
  })([
      function (e, t, n) {
          "use strict";
          function o(e) {
              return e && e.__esModule ? e : { default: e };
          }
          var i =
                  Object.assign ||
                  function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                      }
                      return e;
                  },
              r = n(1),
              a = (o(r), n(6)),
              u = o(a),
              c = n(7),
              f = o(c),
              s = n(8),
              d = o(s),
              l = n(9),
              p = o(l),
              m = n(10),
              b = o(m),
              v = n(11),
              y = o(v),
              g = n(14),
              h = o(g),
              w = [],
              k = !1,
              x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
              j = function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  if ((e && (k = !0), k)) return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
              },
              O = function () {
                  (w = (0, h.default)()), j();
              },
              _ = function () {
                  w.forEach(function (e, t) {
                      e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                  });
              },
              S = function (e) {
                  return e === !0 || ("mobile" === e && p.default.mobile()) || ("phone" === e && p.default.phone()) || ("tablet" === e && p.default.tablet()) || ("function" == typeof e && e() === !0);
              },
              z = function (e) {
                  (x = i(x, e)), (w = (0, h.default)());
                  var t = document.all && !window.atob;
                  return S(x.disable) || t
                      ? _()
                      : (document.querySelector("body").setAttribute("data-aos-easing", x.easing),
                        document.querySelector("body").setAttribute("data-aos-duration", x.duration),
                        document.querySelector("body").setAttribute("data-aos-delay", x.delay),
                        "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                            ? j(!0)
                            : "load" === x.startEvent
                            ? window.addEventListener(x.startEvent, function () {
                                  j(!0);
                              })
                            : document.addEventListener(x.startEvent, function () {
                                  j(!0);
                              }),
                        window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)),
                        window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)),
                        window.addEventListener(
                            "scroll",
                            (0, u.default)(function () {
                                (0, b.default)(w, x.once);
                            }, x.throttleDelay)
                        ),
                        x.disableMutationObserver || (0, d.default)("[data-aos]", O),
                        w);
              };
          e.exports = { init: z, refresh: j, refreshHard: O };
      },
      function (e, t) {},
      ,
      ,
      ,
      ,
      function (e, t) {
          (function (t) {
              "use strict";
              function n(e, t, n) {
                  function o(t) {
                      var n = b,
                          o = v;
                      return (b = v = void 0), (k = t), (g = e.apply(o, n));
                  }
                  function r(e) {
                      return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
                  }
                  function a(e) {
                      var n = e - w,
                          o = e - k,
                          i = t - n;
                      return S ? j(i, y - o) : i;
                  }
                  function c(e) {
                      var n = e - w,
                          o = e - k;
                      return void 0 === w || n >= t || n < 0 || (S && o >= y);
                  }
                  function s() {
                      var e = O();
                      return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
                  }
                  function d(e) {
                      return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
                  }
                  function l() {
                      void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
                  }
                  function p() {
                      return void 0 === h ? g : d(O());
                  }
                  function m() {
                      var e = O(),
                          n = c(e);
                      if (((b = arguments), (v = this), (w = e), n)) {
                          if (void 0 === h) return r(w);
                          if (S) return (h = setTimeout(s, t)), o(w);
                      }
                      return void 0 === h && (h = setTimeout(s, t)), g;
                  }
                  var b,
                      v,
                      y,
                      g,
                      h,
                      w,
                      k = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return (t = u(t) || 0), i(n) && ((_ = !!n.leading), (S = "maxWait" in n), (y = S ? x(u(n.maxWait) || 0, t) : y), (z = "trailing" in n ? !!n.trailing : z)), (m.cancel = l), (m.flush = p), m;
              }
              function o(e, t, o) {
                  var r = !0,
                      a = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return i(o) && ((r = "leading" in o ? !!o.leading : r), (a = "trailing" in o ? !!o.trailing : a)), n(e, t, { leading: r, maxWait: t, trailing: a });
              }
              function i(e) {
                  var t = "undefined" == typeof e ? "undefined" : c(e);
                  return !!e && ("object" == t || "function" == t);
              }
              function r(e) {
                  return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
              }
              function a(e) {
                  return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || (r(e) && k.call(e) == d);
              }
              function u(e) {
                  if ("number" == typeof e) return e;
                  if (a(e)) return s;
                  if (i(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = i(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(l, "");
                  var n = m.test(e);
                  return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
              }
              var c =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                          ? function (e) {
                                return typeof e;
                            }
                          : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            },
                  f = "Expected a function",
                  s = NaN,
                  d = "[object Symbol]",
                  l = /^\s+|\s+$/g,
                  p = /^[-+]0x[0-9a-f]+$/i,
                  m = /^0b[01]+$/i,
                  b = /^0o[0-7]+$/i,
                  v = parseInt,
                  y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                  g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                  h = y || g || Function("return this")(),
                  w = Object.prototype,
                  k = w.toString,
                  x = Math.max,
                  j = Math.min,
                  O = function () {
                      return h.Date.now();
                  };
              e.exports = o;
          }.call(
              t,
              (function () {
                  return this;
              })()
          ));
      },
      function (e, t) {
          (function (t) {
              "use strict";
              function n(e, t, n) {
                  function i(t) {
                      var n = b,
                          o = v;
                      return (b = v = void 0), (O = t), (g = e.apply(o, n));
                  }
                  function r(e) {
                      return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
                  }
                  function u(e) {
                      var n = e - w,
                          o = e - O,
                          i = t - n;
                      return S ? x(i, y - o) : i;
                  }
                  function f(e) {
                      var n = e - w,
                          o = e - O;
                      return void 0 === w || n >= t || n < 0 || (S && o >= y);
                  }
                  function s() {
                      var e = j();
                      return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
                  }
                  function d(e) {
                      return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
                  }
                  function l() {
                      void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
                  }
                  function p() {
                      return void 0 === h ? g : d(j());
                  }
                  function m() {
                      var e = j(),
                          n = f(e);
                      if (((b = arguments), (v = this), (w = e), n)) {
                          if (void 0 === h) return r(w);
                          if (S) return (h = setTimeout(s, t)), i(w);
                      }
                      return void 0 === h && (h = setTimeout(s, t)), g;
                  }
                  var b,
                      v,
                      y,
                      g,
                      h,
                      w,
                      O = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(c);
                  return (t = a(t) || 0), o(n) && ((_ = !!n.leading), (S = "maxWait" in n), (y = S ? k(a(n.maxWait) || 0, t) : y), (z = "trailing" in n ? !!n.trailing : z)), (m.cancel = l), (m.flush = p), m;
              }
              function o(e) {
                  var t = "undefined" == typeof e ? "undefined" : u(e);
                  return !!e && ("object" == t || "function" == t);
              }
              function i(e) {
                  return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
              }
              function r(e) {
                  return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || (i(e) && w.call(e) == s);
              }
              function a(e) {
                  if ("number" == typeof e) return e;
                  if (r(e)) return f;
                  if (o(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = o(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(d, "");
                  var n = p.test(e);
                  return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
              }
              var u =
                      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                          ? function (e) {
                                return typeof e;
                            }
                          : function (e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                            },
                  c = "Expected a function",
                  f = NaN,
                  s = "[object Symbol]",
                  d = /^\s+|\s+$/g,
                  l = /^[-+]0x[0-9a-f]+$/i,
                  p = /^0b[01]+$/i,
                  m = /^0o[0-7]+$/i,
                  b = parseInt,
                  v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                  y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                  g = v || y || Function("return this")(),
                  h = Object.prototype,
                  w = h.toString,
                  k = Math.max,
                  x = Math.min,
                  j = function () {
                      return g.Date.now();
                  };
              e.exports = n;
          }.call(
              t,
              (function () {
                  return this;
              })()
          ));
      },
      function (e, t) {
          "use strict";
          function n(e, t) {
              var n = window.document,
                  r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                  a = new r(o);
              (i = t), a.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
          }
          function o(e) {
              e &&
                  e.forEach(function (e) {
                      var t = Array.prototype.slice.call(e.addedNodes),
                          n = Array.prototype.slice.call(e.removedNodes),
                          o = t.concat(n).filter(function (e) {
                              return e.hasAttribute && e.hasAttribute("data-aos");
                          }).length;
                      o && i();
                  });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = function () {};
          t.default = n;
      },
      function (e, t) {
          "use strict";
          function n(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }
          function o() {
              return navigator.userAgent || navigator.vendor || window.opera || "";
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = (function () {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                      }
                  }
                  return function (t, n, o) {
                      return n && e(t.prototype, n), o && e(t, o), t;
                  };
              })(),
              r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              f = (function () {
                  function e() {
                      n(this, e);
                  }
                  return (
                      i(e, [
                          {
                              key: "phone",
                              value: function () {
                                  var e = o();
                                  return !(!r.test(e) && !a.test(e.substr(0, 4)));
                              },
                          },
                          {
                              key: "mobile",
                              value: function () {
                                  var e = o();
                                  return !(!u.test(e) && !c.test(e.substr(0, 4)));
                              },
                          },
                          {
                              key: "tablet",
                              value: function () {
                                  return this.mobile() && !this.phone();
                              },
                          },
                      ]),
                      e
                  );
              })();
          t.default = new f();
      },
      function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e, t, n) {
                  var o = e.node.getAttribute("data-aos-once");
                  t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || (!n && "true" !== o)) && e.node.classList.remove("aos-animate");
              },
              o = function (e, t) {
                  var o = window.pageYOffset,
                      i = window.innerHeight;
                  e.forEach(function (e, r) {
                      n(e, i + o, t);
                  });
              };
          t.default = o;
      },
      function (e, t, n) {
          "use strict";
          function o(e) {
              return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(12),
              r = o(i),
              a = function (e, t) {
                  return (
                      e.forEach(function (e, n) {
                          e.node.classList.add("aos-init"), (e.position = (0, r.default)(e.node, t.offset));
                      }),
                      e
                  );
              };
          t.default = a;
      },
      function (e, t, n) {
          "use strict";
          function o(e) {
              return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(13),
              r = o(i),
              a = function (e, t) {
                  var n = 0,
                      o = 0,
                      i = window.innerHeight,
                      a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                  switch ((a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), (n = (0, r.default)(e).top), a.anchorPlacement)) {
                      case "top-bottom":
                          break;
                      case "center-bottom":
                          n += e.offsetHeight / 2;
                          break;
                      case "bottom-bottom":
                          n += e.offsetHeight;
                          break;
                      case "top-center":
                          n += i / 2;
                          break;
                      case "bottom-center":
                          n += i / 2 + e.offsetHeight;
                          break;
                      case "center-center":
                          n += i / 2 + e.offsetHeight / 2;
                          break;
                      case "top-top":
                          n += i;
                          break;
                      case "bottom-top":
                          n += e.offsetHeight + i;
                          break;
                      case "center-top":
                          n += e.offsetHeight / 2 + i;
                  }
                  return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
              };
          t.default = a;
      },
      function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
              for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
              return { top: n, left: t };
          };
          t.default = n;
      },
      function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e) {
              return (
                  (e = e || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(e, function (e) {
                      return { node: e };
                  })
              );
          };
          t.default = n;
      },
  ]);
});

/*------------ //////// ---------------*/
// SlimScroll JS
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*
* Version: 1.3.8
*
*/
(function (e) {
  e.fn.extend({
      slimScroll: function (f) {
          var a = e.extend(
              {
                  width: "auto",
                  height: "250px",
                  size: "7px",
                  color: "#000",
                  position: "right",
                  distance: "1px",
                  start: "top",
                  opacity: 0.4,
                  alwaysVisible: !1,
                  disableFadeOut: !1,
                  railVisible: !1,
                  railColor: "#333",
                  railOpacity: 0.2,
                  railDraggable: !0,
                  railClass: "slimScrollRail",
                  barClass: "slimScrollBar",
                  wrapperClass: "slimScrollDiv",
                  allowPageScroll: !1,
                  wheelStep: 20,
                  touchScrollStep: 200,
                  borderRadius: "7px",
                  railBorderRadius: "7px",
              },
              f
          );
          this.each(function () {
              function v(d) {
                  if (r) {
                      d = d || window.event;
                      var c = 0;
                      d.wheelDelta && (c = -d.wheelDelta / 120);
                      d.detail && (c = d.detail / 3);
                      e(d.target || d.srcTarget || d.srcElement)
                          .closest("." + a.wrapperClass)
                          .is(b.parent()) && n(c, !0);
                      d.preventDefault && !k && d.preventDefault();
                      k || (d.returnValue = !1);
                  }
              }
              function n(d, g, e) {
                  k = !1;
                  var f = b.outerHeight() - c.outerHeight();
                  g && ((g = parseInt(c.css("top")) + ((d * parseInt(a.wheelStep)) / 100) * c.outerHeight()), (g = Math.min(Math.max(g, 0), f)), (g = 0 < d ? Math.ceil(g) : Math.floor(g)), c.css({ top: g + "px" }));
                  l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                  g = l * (b[0].scrollHeight - b.outerHeight());
                  e && ((g = d), (d = (g / b[0].scrollHeight) * b.outerHeight()), (d = Math.min(Math.max(d, 0), f)), c.css({ top: d + "px" }));
                  b.scrollTop(g);
                  b.trigger("slimscrolling", ~~g);
                  w();
                  p();
              }
              function x() {
                  u = Math.max((b.outerHeight() / b[0].scrollHeight) * b.outerHeight(), 30);
                  c.css({ height: u + "px" });
                  var a = u == b.outerHeight() ? "none" : "block";
                  c.css({ display: a });
              }
              function w() {
                  x();
                  clearTimeout(B);
                  l == ~~l ? ((k = a.allowPageScroll), C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : (k = !1);
                  C = l;
                  u >= b.outerHeight() ? (k = !0) : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
              }
              function p() {
                  a.alwaysVisible ||
                      (B = setTimeout(function () {
                          (a.disableFadeOut && r) || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
                      }, 1e3));
              }
              var r,
                  y,
                  z,
                  B,
                  A,
                  u,
                  l,
                  C,
                  k = !1,
                  b = e(this);
              if (b.parent().hasClass(a.wrapperClass)) {
                  var q = b.scrollTop(),
                      c = b.siblings("." + a.barClass),
                      m = b.siblings("." + a.railClass);
                  x();
                  if (e.isPlainObject(f)) {
                      if ("height" in f && "auto" == f.height) {
                          b.parent().css("height", "auto");
                          b.css("height", "auto");
                          var h = b.parent().parent().height();
                          b.parent().css("height", h);
                          b.css("height", h);
                      } else "height" in f && ((h = f.height), b.parent().css("height", h), b.css("height", h));
                      if ("scrollTo" in f) q = parseInt(a.scrollTo);
                      else if ("scrollBy" in f) q += parseInt(a.scrollBy);
                      else if ("destroy" in f) {
                          c.remove();
                          m.remove();
                          b.unwrap();
                          return;
                      }
                      n(q, !1, !0);
                  }
              } else if (!(e.isPlainObject(f) && "destroy" in f)) {
                  a.height = "auto" == a.height ? b.parent().height() : a.height;
                  q = e("<div></div>").addClass(a.wrapperClass).css({ position: "relative", overflow: "hidden", width: a.width, height: a.height });
                  b.css({ overflow: "hidden", width: a.width, height: a.height });
                  var m = e("<div></div>")
                          .addClass(a.railClass)
                          .css({
                              width: a.size,
                              height: "100%",
                              position: "absolute",
                              top: 0,
                              display: a.alwaysVisible && a.railVisible ? "block" : "none",
                              "border-radius": a.railBorderRadius,
                              background: a.railColor,
                              opacity: a.railOpacity,
                              zIndex: 90,
                          }),
                      c = e("<div></div>")
                          .addClass(a.barClass)
                          .css({
                              background: a.color,
                              width: a.size,
                              position: "absolute",
                              top: 0,
                              opacity: a.opacity,
                              display: a.alwaysVisible ? "block" : "none",
                              "border-radius": a.borderRadius,
                              BorderRadius: a.borderRadius,
                              MozBorderRadius: a.borderRadius,
                              WebkitBorderRadius: a.borderRadius,
                              zIndex: 99,
                          }),
                      h = "right" == a.position ? { right: a.distance } : { left: a.distance };
                  m.css(h);
                  c.css(h);
                  b.wrap(q);
                  b.parent().append(c);
                  b.parent().append(m);
                  a.railDraggable &&
                      c
                          .bind("mousedown", function (a) {
                              var b = e(document);
                              z = !0;
                              t = parseFloat(c.css("top"));
                              pageY = a.pageY;
                              b.bind("mousemove.slimscroll", function (a) {
                                  currTop = t + a.pageY - pageY;
                                  c.css("top", currTop);
                                  n(0, c.position().top, !1);
                              });
                              b.bind("mouseup.slimscroll", function (a) {
                                  z = !1;
                                  p();
                                  b.unbind(".slimscroll");
                              });
                              return !1;
                          })
                          .bind("selectstart.slimscroll", function (a) {
                              a.stopPropagation();
                              a.preventDefault();
                              return !1;
                          });
                  m.hover(
                      function () {
                          w();
                      },
                      function () {
                          p();
                      }
                  );
                  c.hover(
                      function () {
                          y = !0;
                      },
                      function () {
                          y = !1;
                      }
                  );
                  b.hover(
                      function () {
                          r = !0;
                          w();
                          p();
                      },
                      function () {
                          r = !1;
                          p();
                      }
                  );
                  b.bind("touchstart", function (a, b) {
                      a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
                  });
                  b.bind("touchmove", function (b) {
                      k || b.originalEvent.preventDefault();
                      b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), (A = b.originalEvent.touches[0].pageY));
                  });
                  x();
                  "bottom" === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                  window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
              }
          });
          return this;
      },
  });
  e.fn.extend({ slimscroll: e.fn.slimScroll });
})(jQuery);

/*------------ //////// ---------------*/

/*!
* Isotope PACKAGED v3.0.6
*
* Licensed GPLv3 for open source use
* or Isotope Commercial License for commercial use
*
* https://isotope.metafizzy.co
* Copyright 2010-2018 Metafizzy
*/

!(function (t, e) {
  "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
            return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
      function u(t, e, o) {
          var n,
              s = "$()." + i + '("' + e + '")';
          return (
              t.each(function (t, u) {
                  var h = a.data(u, i);
                  if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                  var d = h[e];
                  if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                  var l = d.apply(h, o);
                  n = void 0 === n ? l : n;
              }),
              void 0 !== n ? n : t
          );
      }
      function h(t, e) {
          t.each(function (t, o) {
              var n = a.data(o, i);
              n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
          });
      }
      (a = a || e || t.jQuery),
          a &&
              (s.prototype.option ||
                  (s.prototype.option = function (t) {
                      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                  }),
              (a.fn[i] = function (t) {
                  if ("string" == typeof t) {
                      var e = n.call(arguments, 1);
                      return u(this, t, e);
                  }
                  return h(this, t), this;
              }),
              o(a));
  }
  function o(t) {
      !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
      s = t.console,
      r =
          "undefined" == typeof s
              ? function () {}
              : function (t) {
                    s.error(t);
                };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
      "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
      function t() {}
      var e = t.prototype;
      return (
          (e.on = function (t, e) {
              if (t && e) {
                  var i = (this._events = this._events || {}),
                      o = (i[t] = i[t] || []);
                  return o.indexOf(e) == -1 && o.push(e), this;
              }
          }),
          (e.once = function (t, e) {
              if (t && e) {
                  this.on(t, e);
                  var i = (this._onceEvents = this._onceEvents || {}),
                      o = (i[t] = i[t] || {});
                  return (o[e] = !0), this;
              }
          }),
          (e.off = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                  var o = i.indexOf(e);
                  return o != -1 && i.splice(o, 1), this;
              }
          }),
          (e.emitEvent = function (t, e) {
              var i = this._events && this._events[t];
              if (i && i.length) {
                  (i = i.slice(0)), (e = e || []);
                  for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                      var s = i[n],
                          r = o && o[s];
                      r && (this.off(t, s), delete o[s]), s.apply(this, e);
                  }
                  return this;
              }
          }),
          (e.allOff = function () {
              delete this._events, delete this._onceEvents;
          }),
          t
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
  })(window, function () {
      "use strict";
      function t(t) {
          var e = parseFloat(t),
              i = t.indexOf("%") == -1 && !isNaN(e);
          return i && e;
      }
      function e() {}
      function i() {
          for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
              var i = u[e];
              t[i] = 0;
          }
          return t;
      }
      function o(t) {
          var e = getComputedStyle(t);
          return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
      }
      function n() {
          if (!d) {
              d = !0;
              var e = document.createElement("div");
              (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
              var i = document.body || document.documentElement;
              i.appendChild(e);
              var n = o(e);
              (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
          }
      }
      function s(e) {
          if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
              var s = o(e);
              if ("none" == s.display) return i();
              var a = {};
              (a.width = e.offsetWidth), (a.height = e.offsetHeight);
              for (var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0; l < h; l++) {
                  var f = u[l],
                      c = s[f],
                      m = parseFloat(c);
                  a[f] = isNaN(m) ? 0 : m;
              }
              var p = a.paddingLeft + a.paddingRight,
                  y = a.paddingTop + a.paddingBottom,
                  g = a.marginLeft + a.marginRight,
                  v = a.marginTop + a.marginBottom,
                  _ = a.borderLeftWidth + a.borderRightWidth,
                  z = a.borderTopWidth + a.borderBottomWidth,
                  I = d && r,
                  x = t(s.width);
              x !== !1 && (a.width = x + (I ? 0 : p + _));
              var S = t(s.height);
              return S !== !1 && (a.height = S + (I ? 0 : y + z)), (a.innerWidth = a.width - (p + _)), (a.innerHeight = a.height - (y + z)), (a.outerWidth = a.width + g), (a.outerHeight = a.height + v), a;
          }
      }
      var r,
          a =
              "undefined" == typeof console
                  ? e
                  : function (t) {
                        console.error(t);
                    },
          u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
          h = u.length,
          d = !1;
      return s;
  }),
  (function (t, e) {
      "use strict";
      "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
  })(window, function () {
      "use strict";
      var t = (function () {
          var t = window.Element.prototype;
          if (t.matches) return "matches";
          if (t.matchesSelector) return "matchesSelector";
          for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
              var o = e[i],
                  n = o + "MatchesSelector";
              if (t[n]) return n;
          }
      })();
      return function (e, i) {
          return e[t](i);
      };
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                return e(t, i);
            })
          : "object" == typeof module && module.exports
          ? (module.exports = e(t, require("desandro-matches-selector")))
          : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
      var i = {};
      (i.extend = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
      }),
          (i.modulo = function (t, e) {
              return ((t % e) + e) % e;
          });
      var o = Array.prototype.slice;
      (i.makeArray = function (t) {
          if (Array.isArray(t)) return t;
          if (null === t || void 0 === t) return [];
          var e = "object" == typeof t && "number" == typeof t.length;
          return e ? o.call(t) : [t];
      }),
          (i.removeFrom = function (t, e) {
              var i = t.indexOf(e);
              i != -1 && t.splice(i, 1);
          }),
          (i.getParent = function (t, i) {
              for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
          }),
          (i.getQueryElement = function (t) {
              return "string" == typeof t ? document.querySelector(t) : t;
          }),
          (i.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t);
          }),
          (i.filterFindElements = function (t, o) {
              t = i.makeArray(t);
              var n = [];
              return (
                  t.forEach(function (t) {
                      if (t instanceof HTMLElement) {
                          if (!o) return void n.push(t);
                          e(t, o) && n.push(t);
                          for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                      }
                  }),
                  n
              );
          }),
          (i.debounceMethod = function (t, e, i) {
              i = i || 100;
              var o = t.prototype[e],
                  n = e + "Timeout";
              t.prototype[e] = function () {
                  var t = this[n];
                  clearTimeout(t);
                  var e = arguments,
                      s = this;
                  this[n] = setTimeout(function () {
                      o.apply(s, e), delete s[n];
                  }, i);
              };
          }),
          (i.docReady = function (t) {
              var e = document.readyState;
              "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
          }),
          (i.toDashed = function (t) {
              return t
                  .replace(/(.)([A-Z])/g, function (t, e, i) {
                      return e + "-" + i;
                  })
                  .toLowerCase();
          });
      var n = t.console;
      return (
          (i.htmlInit = function (e, o) {
              i.docReady(function () {
                  var s = i.toDashed(o),
                      r = "data-" + s,
                      a = document.querySelectorAll("[" + r + "]"),
                      u = document.querySelectorAll(".js-" + s),
                      h = i.makeArray(a).concat(i.makeArray(u)),
                      d = r + "-options",
                      l = t.jQuery;
                  h.forEach(function (t) {
                      var i,
                          s = t.getAttribute(r) || t.getAttribute(d);
                      try {
                          i = s && JSON.parse(s);
                      } catch (a) {
                          return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                      }
                      var u = new e(t, i);
                      l && l.data(t, o, u);
                  });
              });
          }),
          i
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("ev-emitter"), require("get-size")))
          : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
      "use strict";
      function i(t) {
          for (var e in t) return !1;
          return (e = null), !0;
      }
      function o(t, e) {
          t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
      }
      function n(t) {
          return t.replace(/([A-Z])/g, function (t) {
              return "-" + t.toLowerCase();
          });
      }
      var s = document.documentElement.style,
          r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
          a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
          u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
          h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
          d = (o.prototype = Object.create(t.prototype));
      (d.constructor = o),
          (d._create = function () {
              (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
          }),
          (d.handleEvent = function (t) {
              var e = "on" + t.type;
              this[e] && this[e](t);
          }),
          (d.getSize = function () {
              this.size = e(this.element);
          }),
          (d.css = function (t) {
              var e = this.element.style;
              for (var i in t) {
                  var o = h[i] || i;
                  e[o] = t[i];
              }
          }),
          (d.getPosition = function () {
              var t = getComputedStyle(this.element),
                  e = this.layout._getOption("originLeft"),
                  i = this.layout._getOption("originTop"),
                  o = t[e ? "left" : "right"],
                  n = t[i ? "top" : "bottom"],
                  s = parseFloat(o),
                  r = parseFloat(n),
                  a = this.layout.size;
              o.indexOf("%") != -1 && (s = (s / 100) * a.width),
                  n.indexOf("%") != -1 && (r = (r / 100) * a.height),
                  (s = isNaN(s) ? 0 : s),
                  (r = isNaN(r) ? 0 : r),
                  (s -= e ? a.paddingLeft : a.paddingRight),
                  (r -= i ? a.paddingTop : a.paddingBottom),
                  (this.position.x = s),
                  (this.position.y = r);
          }),
          (d.layoutPosition = function () {
              var t = this.layout.size,
                  e = {},
                  i = this.layout._getOption("originLeft"),
                  o = this.layout._getOption("originTop"),
                  n = i ? "paddingLeft" : "paddingRight",
                  s = i ? "left" : "right",
                  r = i ? "right" : "left",
                  a = this.position.x + t[n];
              (e[s] = this.getXValue(a)), (e[r] = "");
              var u = o ? "paddingTop" : "paddingBottom",
                  h = o ? "top" : "bottom",
                  d = o ? "bottom" : "top",
                  l = this.position.y + t[u];
              (e[h] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
          }),
          (d.getXValue = function (t) {
              var e = this.layout._getOption("horizontal");
              return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
          }),
          (d.getYValue = function (t) {
              var e = this.layout._getOption("horizontal");
              return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
          }),
          (d._transitionTo = function (t, e) {
              this.getPosition();
              var i = this.position.x,
                  o = this.position.y,
                  n = t == this.position.x && e == this.position.y;
              if ((this.setPosition(t, e), n && !this.isTransitioning)) return void this.layoutPosition();
              var s = t - i,
                  r = e - o,
                  a = {};
              (a.transform = this.getTranslate(s, r)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
          }),
          (d.getTranslate = function (t, e) {
              var i = this.layout._getOption("originLeft"),
                  o = this.layout._getOption("originTop");
              return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
          }),
          (d.goTo = function (t, e) {
              this.setPosition(t, e), this.layoutPosition();
          }),
          (d.moveTo = d._transitionTo),
          (d.setPosition = function (t, e) {
              (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
          }),
          (d._nonTransition = function (t) {
              this.css(t.to), t.isCleaning && this._removeStyles(t.to);
              for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
          }),
          (d.transition = function (t) {
              if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
              var e = this._transn;
              for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
              for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
              if (t.from) {
                  this.css(t.from);
                  var o = this.element.offsetHeight;
                  o = null;
              }
              this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
          });
      var l = "opacity," + n(a);
      (d.enableTransition = function () {
          if (!this.isTransitioning) {
              var t = this.layout.options.transitionDuration;
              (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
          }
      }),
          (d.onwebkitTransitionEnd = function (t) {
              this.ontransitionend(t);
          }),
          (d.onotransitionend = function (t) {
              this.ontransitionend(t);
          });
      var f = { "-webkit-transform": "transform" };
      (d.ontransitionend = function (t) {
          if (t.target === this.element) {
              var e = this._transn,
                  o = f[t.propertyName] || t.propertyName;
              if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                  var n = e.onEnd[o];
                  n.call(this), delete e.onEnd[o];
              }
              this.emitEvent("transitionEnd", [this]);
          }
      }),
          (d.disableTransition = function () {
              this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
          }),
          (d._removeStyles = function (t) {
              var e = {};
              for (var i in t) e[i] = "";
              this.css(e);
          });
      var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
      return (
          (d.removeTransitionStyles = function () {
              this.css(c);
          }),
          (d.stagger = function (t) {
              (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
          }),
          (d.removeElem = function () {
              this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
          }),
          (d.remove = function () {
              return r && parseFloat(this.layout.options.transitionDuration)
                  ? (this.once("transitionEnd", function () {
                        this.removeElem();
                    }),
                    void this.hide())
                  : void this.removeElem();
          }),
          (d.reveal = function () {
              delete this.isHidden, this.css({ display: "" });
              var t = this.layout.options,
                  e = {},
                  i = this.getHideRevealTransitionEndProperty("visibleStyle");
              (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
          }),
          (d.onRevealTransitionEnd = function () {
              this.isHidden || this.emitEvent("reveal");
          }),
          (d.getHideRevealTransitionEndProperty = function (t) {
              var e = this.layout.options[t];
              if (e.opacity) return "opacity";
              for (var i in e) return i;
          }),
          (d.hide = function () {
              (this.isHidden = !0), this.css({ display: "" });
              var t = this.layout.options,
                  e = {},
                  i = this.getHideRevealTransitionEndProperty("hiddenStyle");
              (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
          }),
          (d.onHideTransitionEnd = function () {
              this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
          }),
          (d.destroy = function () {
              this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
          }),
          o
      );
  }),
  (function (t, e) {
      "use strict";
      "function" == typeof define && define.amd
          ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
                return e(t, i, o, n, s);
            })
          : "object" == typeof module && module.exports
          ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
          : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
  })(window, function (t, e, i, o, n) {
      "use strict";
      function s(t, e) {
          var i = o.getQueryElement(t);
          if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
          (this.element = i), h && (this.$element = h(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
          var n = ++l;
          (this.element.outlayerGUID = n), (f[n] = this), this._create();
          var s = this._getOption("initLayout");
          s && this.layout();
      }
      function r(t) {
          function e() {
              t.apply(this, arguments);
          }
          return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
      }
      function a(t) {
          if ("number" == typeof t) return t;
          var e = t.match(/(^\d*\.?\d*)(\w*)/),
              i = e && e[1],
              o = e && e[2];
          if (!i.length) return 0;
          i = parseFloat(i);
          var n = m[o] || 1;
          return i * n;
      }
      var u = t.console,
          h = t.jQuery,
          d = function () {},
          l = 0,
          f = {};
      (s.namespace = "outlayer"),
          (s.Item = n),
          (s.defaults = {
              containerStyle: { position: "relative" },
              initLayout: !0,
              originLeft: !0,
              originTop: !0,
              resize: !0,
              resizeContainer: !0,
              transitionDuration: "0.4s",
              hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
              visibleStyle: { opacity: 1, transform: "scale(1)" },
          });
      var c = s.prototype;
      o.extend(c, e.prototype),
          (c.option = function (t) {
              o.extend(this.options, t);
          }),
          (c._getOption = function (t) {
              var e = this.constructor.compatOptions[t];
              return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
          }),
          (s.compatOptions = {
              initLayout: "isInitLayout",
              horizontal: "isHorizontal",
              layoutInstant: "isLayoutInstant",
              originLeft: "isOriginLeft",
              originTop: "isOriginTop",
              resize: "isResizeBound",
              resizeContainer: "isResizingContainer",
          }),
          (c._create = function () {
              this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
              var t = this._getOption("resize");
              t && this.bindResize();
          }),
          (c.reloadItems = function () {
              this.items = this._itemize(this.element.children);
          }),
          (c._itemize = function (t) {
              for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                  var s = e[n],
                      r = new i(s, this);
                  o.push(r);
              }
              return o;
          }),
          (c._filterFindItemElements = function (t) {
              return o.filterFindElements(t, this.options.itemSelector);
          }),
          (c.getItemElements = function () {
              return this.items.map(function (t) {
                  return t.element;
              });
          }),
          (c.layout = function () {
              this._resetLayout(), this._manageStamps();
              var t = this._getOption("layoutInstant"),
                  e = void 0 !== t ? t : !this._isLayoutInited;
              this.layoutItems(this.items, e), (this._isLayoutInited = !0);
          }),
          (c._init = c.layout),
          (c._resetLayout = function () {
              this.getSize();
          }),
          (c.getSize = function () {
              this.size = i(this.element);
          }),
          (c._getMeasurement = function (t, e) {
              var o,
                  n = this.options[t];
              n ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n), (this[t] = o ? i(o)[e] : n)) : (this[t] = 0);
          }),
          (c.layoutItems = function (t, e) {
              (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
          }),
          (c._getItemsForLayout = function (t) {
              return t.filter(function (t) {
                  return !t.isIgnored;
              });
          }),
          (c._layoutItems = function (t, e) {
              if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                  var i = [];
                  t.forEach(function (t) {
                      var o = this._getItemLayoutPosition(t);
                      (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
                  }, this),
                      this._processLayoutQueue(i);
              }
          }),
          (c._getItemLayoutPosition = function () {
              return { x: 0, y: 0 };
          }),
          (c._processLayoutQueue = function (t) {
              this.updateStagger(),
                  t.forEach(function (t, e) {
                      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                  }, this);
          }),
          (c.updateStagger = function () {
              var t = this.options.stagger;
              return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
          }),
          (c._positionItem = function (t, e, i, o, n) {
              o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
          }),
          (c._postLayout = function () {
              this.resizeContainer();
          }),
          (c.resizeContainer = function () {
              var t = this._getOption("resizeContainer");
              if (t) {
                  var e = this._getContainerSize();
                  e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
              }
          }),
          (c._getContainerSize = d),
          (c._setContainerMeasure = function (t, e) {
              if (void 0 !== t) {
                  var i = this.size;
                  i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                      (t = Math.max(t, 0)),
                      (this.element.style[e ? "width" : "height"] = t + "px");
              }
          }),
          (c._emitCompleteOnItems = function (t, e) {
              function i() {
                  n.dispatchEvent(t + "Complete", null, [e]);
              }
              function o() {
                  r++, r == s && i();
              }
              var n = this,
                  s = e.length;
              if (!e || !s) return void i();
              var r = 0;
              e.forEach(function (e) {
                  e.once(t, o);
              });
          }),
          (c.dispatchEvent = function (t, e, i) {
              var o = e ? [e].concat(i) : i;
              if ((this.emitEvent(t, o), h))
                  if (((this.$element = this.$element || h(this.element)), e)) {
                      var n = h.Event(e);
                      (n.type = t), this.$element.trigger(n, i);
                  } else this.$element.trigger(t, i);
          }),
          (c.ignore = function (t) {
              var e = this.getItem(t);
              e && (e.isIgnored = !0);
          }),
          (c.unignore = function (t) {
              var e = this.getItem(t);
              e && delete e.isIgnored;
          }),
          (c.stamp = function (t) {
              (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
          }),
          (c.unstamp = function (t) {
              (t = this._find(t)),
                  t &&
                      t.forEach(function (t) {
                          o.removeFrom(this.stamps, t), this.unignore(t);
                      }, this);
          }),
          (c._find = function (t) {
              if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
          }),
          (c._manageStamps = function () {
              this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
          }),
          (c._getBoundingRect = function () {
              var t = this.element.getBoundingClientRect(),
                  e = this.size;
              this._boundingRect = {
                  left: t.left + e.paddingLeft + e.borderLeftWidth,
                  top: t.top + e.paddingTop + e.borderTopWidth,
                  right: t.right - (e.paddingRight + e.borderRightWidth),
                  bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
              };
          }),
          (c._manageStamp = d),
          (c._getElementOffset = function (t) {
              var e = t.getBoundingClientRect(),
                  o = this._boundingRect,
                  n = i(t),
                  s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
              return s;
          }),
          (c.handleEvent = o.handleEvent),
          (c.bindResize = function () {
              t.addEventListener("resize", this), (this.isResizeBound = !0);
          }),
          (c.unbindResize = function () {
              t.removeEventListener("resize", this), (this.isResizeBound = !1);
          }),
          (c.onresize = function () {
              this.resize();
          }),
          o.debounceMethod(s, "onresize", 100),
          (c.resize = function () {
              this.isResizeBound && this.needsResizeLayout() && this.layout();
          }),
          (c.needsResizeLayout = function () {
              var t = i(this.element),
                  e = this.size && t;
              return e && t.innerWidth !== this.size.innerWidth;
          }),
          (c.addItems = function (t) {
              var e = this._itemize(t);
              return e.length && (this.items = this.items.concat(e)), e;
          }),
          (c.appended = function (t) {
              var e = this.addItems(t);
              e.length && (this.layoutItems(e, !0), this.reveal(e));
          }),
          (c.prepended = function (t) {
              var e = this._itemize(t);
              if (e.length) {
                  var i = this.items.slice(0);
                  (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
              }
          }),
          (c.reveal = function (t) {
              if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                  var e = this.updateStagger();
                  t.forEach(function (t, i) {
                      t.stagger(i * e), t.reveal();
                  });
              }
          }),
          (c.hide = function (t) {
              if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                  var e = this.updateStagger();
                  t.forEach(function (t, i) {
                      t.stagger(i * e), t.hide();
                  });
              }
          }),
          (c.revealItemElements = function (t) {
              var e = this.getItems(t);
              this.reveal(e);
          }),
          (c.hideItemElements = function (t) {
              var e = this.getItems(t);
              this.hide(e);
          }),
          (c.getItem = function (t) {
              for (var e = 0; e < this.items.length; e++) {
                  var i = this.items[e];
                  if (i.element == t) return i;
              }
          }),
          (c.getItems = function (t) {
              t = o.makeArray(t);
              var e = [];
              return (
                  t.forEach(function (t) {
                      var i = this.getItem(t);
                      i && e.push(i);
                  }, this),
                  e
              );
          }),
          (c.remove = function (t) {
              var e = this.getItems(t);
              this._emitCompleteOnItems("remove", e),
                  e &&
                      e.length &&
                      e.forEach(function (t) {
                          t.remove(), o.removeFrom(this.items, t);
                      }, this);
          }),
          (c.destroy = function () {
              var t = this.element.style;
              (t.height = ""),
                  (t.position = ""),
                  (t.width = ""),
                  this.items.forEach(function (t) {
                      t.destroy();
                  }),
                  this.unbindResize();
              var e = this.element.outlayerGUID;
              delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
          }),
          (s.data = function (t) {
              t = o.getQueryElement(t);
              var e = t && t.outlayerGUID;
              return e && f[e];
          }),
          (s.create = function (t, e) {
              var i = r(s);
              return (
                  (i.defaults = o.extend({}, s.defaults)),
                  o.extend(i.defaults, e),
                  (i.compatOptions = o.extend({}, s.compatOptions)),
                  (i.namespace = t),
                  (i.data = s.data),
                  (i.Item = r(n)),
                  o.htmlInit(i, t),
                  h && h.bridget && h.bridget(t, i),
                  i
              );
          });
      var m = { ms: 1, s: 1e3 };
      return (s.Item = n), s;
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("outlayer")))
          : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
      "use strict";
      function e() {
          t.Item.apply(this, arguments);
      }
      var i = (e.prototype = Object.create(t.Item.prototype)),
          o = i._create;
      (i._create = function () {
          (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
      }),
          (i.updateSortData = function () {
              if (!this.isIgnored) {
                  (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                  var t = this.layout.options.getSortData,
                      e = this.layout._sorters;
                  for (var i in t) {
                      var o = e[i];
                      this.sortData[i] = o(this.element, this);
                  }
              }
          });
      var n = i.destroy;
      return (
          (i.destroy = function () {
              n.apply(this, arguments), this.css({ display: "" });
          }),
          e
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("get-size"), require("outlayer")))
          : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
      "use strict";
      function i(t) {
          (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
      }
      var o = i.prototype,
          n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
      return (
          n.forEach(function (t) {
              o[t] = function () {
                  return e.prototype[t].apply(this.isotope, arguments);
              };
          }),
          (o.needsVerticalResizeLayout = function () {
              var e = t(this.isotope.element),
                  i = this.isotope.size && e;
              return i && e.innerHeight != this.isotope.size.innerHeight;
          }),
          (o._getMeasurement = function () {
              this.isotope._getMeasurement.apply(this, arguments);
          }),
          (o.getColumnWidth = function () {
              this.getSegmentSize("column", "Width");
          }),
          (o.getRowHeight = function () {
              this.getSegmentSize("row", "Height");
          }),
          (o.getSegmentSize = function (t, e) {
              var i = t + e,
                  o = "outer" + e;
              if ((this._getMeasurement(i, o), !this[i])) {
                  var n = this.getFirstItemSize();
                  this[i] = (n && n[o]) || this.isotope.size["inner" + e];
              }
          }),
          (o.getFirstItemSize = function () {
              var e = this.isotope.filteredItems[0];
              return e && e.element && t(e.element);
          }),
          (o.layout = function () {
              this.isotope.layout.apply(this.isotope, arguments);
          }),
          (o.getSize = function () {
              this.isotope.getSize(), (this.size = this.isotope.size);
          }),
          (i.modes = {}),
          (i.create = function (t, e) {
              function n() {
                  i.apply(this, arguments);
              }
              return (n.prototype = Object.create(o)), (n.prototype.constructor = n), e && (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
          }),
          i
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("outlayer"), require("get-size")))
          : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
      var i = t.create("masonry");
      i.compatOptions.fitWidth = "isFitWidth";
      var o = i.prototype;
      return (
          (o._resetLayout = function () {
              this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
              for (var t = 0; t < this.cols; t++) this.colYs.push(0);
              (this.maxY = 0), (this.horizontalColIndex = 0);
          }),
          (o.measureColumns = function () {
              if ((this.getContainerWidth(), !this.columnWidth)) {
                  var t = this.items[0],
                      i = t && t.element;
                  this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
              }
              var o = (this.columnWidth += this.gutter),
                  n = this.containerWidth + this.gutter,
                  s = n / o,
                  r = o - (n % o),
                  a = r && r < 1 ? "round" : "floor";
              (s = Math[a](s)), (this.cols = Math.max(s, 1));
          }),
          (o.getContainerWidth = function () {
              var t = this._getOption("fitWidth"),
                  i = t ? this.element.parentNode : this.element,
                  o = e(i);
              this.containerWidth = o && o.innerWidth;
          }),
          (o._getItemLayoutPosition = function (t) {
              t.getSize();
              var e = t.size.outerWidth % this.columnWidth,
                  i = e && e < 1 ? "round" : "ceil",
                  o = Math[i](t.size.outerWidth / this.columnWidth);
              o = Math.min(o, this.cols);
              for (
                  var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col;
                  h < u;
                  h++
              )
                  this.colYs[h] = a;
              return r;
          }),
          (o._getTopColPosition = function (t) {
              var e = this._getTopColGroup(t),
                  i = Math.min.apply(Math, e);
              return { col: e.indexOf(i), y: i };
          }),
          (o._getTopColGroup = function (t) {
              if (t < 2) return this.colYs;
              for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
              return e;
          }),
          (o._getColGroupY = function (t, e) {
              if (e < 2) return this.colYs[t];
              var i = this.colYs.slice(t, t + e);
              return Math.max.apply(Math, i);
          }),
          (o._getHorizontalColPosition = function (t, e) {
              var i = this.horizontalColIndex % this.cols,
                  o = t > 1 && i + t > this.cols;
              i = o ? 0 : i;
              var n = e.size.outerWidth && e.size.outerHeight;
              return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
          }),
          (o._manageStamp = function (t) {
              var i = e(t),
                  o = this._getElementOffset(t),
                  n = this._getOption("originLeft"),
                  s = n ? o.left : o.right,
                  r = s + i.outerWidth,
                  a = Math.floor(s / this.columnWidth);
              a = Math.max(0, a);
              var u = Math.floor(r / this.columnWidth);
              (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
              for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
          }),
          (o._getContainerSize = function () {
              this.maxY = Math.max.apply(Math, this.colYs);
              var t = { height: this.maxY };
              return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
          }),
          (o._getContainerFitWidth = function () {
              for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
              return (this.cols - t) * this.columnWidth - this.gutter;
          }),
          (o.needsResizeLayout = function () {
              var t = this.containerWidth;
              return this.getContainerWidth(), t != this.containerWidth;
          }),
          i
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
          : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
      "use strict";
      var i = t.create("masonry"),
          o = i.prototype,
          n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
      for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
      var r = o.measureColumns;
      o.measureColumns = function () {
          (this.items = this.isotope.filteredItems), r.call(this);
      };
      var a = o._getOption;
      return (
          (o._getOption = function (t) {
              return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
          }),
          i
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
  })(window, function (t) {
      "use strict";
      var e = t.create("fitRows"),
          i = e.prototype;
      return (
          (i._resetLayout = function () {
              (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
          }),
          (i._getItemLayoutPosition = function (t) {
              t.getSize();
              var e = t.size.outerWidth + this.gutter,
                  i = this.isotope.size.innerWidth + this.gutter;
              0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
              var o = { x: this.x, y: this.y };
              return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
          }),
          (i._getContainerSize = function () {
              return { height: this.maxY };
          }),
          e
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
          : "object" == typeof module && module.exports
          ? (module.exports = e(require("../layout-mode")))
          : e(t.Isotope.LayoutMode);
  })(window, function (t) {
      "use strict";
      var e = t.create("vertical", { horizontalAlignment: 0 }),
          i = e.prototype;
      return (
          (i._resetLayout = function () {
              this.y = 0;
          }),
          (i._getItemLayoutPosition = function (t) {
              t.getSize();
              var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                  i = this.y;
              return (this.y += t.size.outerHeight), { x: e, y: i };
          }),
          (i._getContainerSize = function () {
              return { height: this.y };
          }),
          e
      );
  }),
  (function (t, e) {
      "function" == typeof define && define.amd
          ? define([
                "outlayer/outlayer",
                "get-size/get-size",
                "desandro-matches-selector/matches-selector",
                "fizzy-ui-utils/utils",
                "isotope-layout/js/item",
                "isotope-layout/js/layout-mode",
                "isotope-layout/js/layout-modes/masonry",
                "isotope-layout/js/layout-modes/fit-rows",
                "isotope-layout/js/layout-modes/vertical",
            ], function (i, o, n, s, r, a) {
                return e(t, i, o, n, s, r, a);
            })
          : "object" == typeof module && module.exports
          ? (module.exports = e(
                t,
                require("outlayer"),
                require("get-size"),
                require("desandro-matches-selector"),
                require("fizzy-ui-utils"),
                require("isotope-layout/js/item"),
                require("isotope-layout/js/layout-mode"),
                require("isotope-layout/js/layout-modes/masonry"),
                require("isotope-layout/js/layout-modes/fit-rows"),
                require("isotope-layout/js/layout-modes/vertical")
            ))
          : (t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode));
  })(window, function (t, e, i, o, n, s, r) {
      function a(t, e) {
          return function (i, o) {
              for (var n = 0; n < t.length; n++) {
                  var s = t[n],
                      r = i.sortData[s],
                      a = o.sortData[s];
                  if (r > a || r < a) {
                      var u = void 0 !== e[s] ? e[s] : e,
                          h = u ? 1 : -1;
                      return (r > a ? 1 : -1) * h;
                  }
              }
              return 0;
          };
      }
      var u = t.jQuery,
          h = String.prototype.trim
              ? function (t) {
                    return t.trim();
                }
              : function (t) {
                    return t.replace(/^\s+|\s+$/g, "");
                },
          d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
      (d.Item = s), (d.LayoutMode = r);
      var l = d.prototype;
      (l._create = function () {
          (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
          for (var t in r.modes) this._initLayoutMode(t);
      }),
          (l.reloadItems = function () {
              (this.itemGUID = 0), e.prototype.reloadItems.call(this);
          }),
          (l._itemize = function () {
              for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                  var o = t[i];
                  o.id = this.itemGUID++;
              }
              return this._updateItemsSortData(t), t;
          }),
          (l._initLayoutMode = function (t) {
              var e = r.modes[t],
                  i = this.options[t] || {};
              (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
          }),
          (l.layout = function () {
              return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
          }),
          (l._layout = function () {
              var t = this._getIsInstant();
              this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
          }),
          (l.arrange = function (t) {
              this.option(t), this._getIsInstant();
              var e = this._filter(this.items);
              (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
          }),
          (l._init = l.arrange),
          (l._hideReveal = function (t) {
              this.reveal(t.needReveal), this.hide(t.needHide);
          }),
          (l._getIsInstant = function () {
              var t = this._getOption("layoutInstant"),
                  e = void 0 !== t ? t : !this._isLayoutInited;
              return (this._isInstant = e), e;
          }),
          (l._bindArrangeComplete = function () {
              function t() {
                  e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
              }
              var e,
                  i,
                  o,
                  n = this;
              this.once("layoutComplete", function () {
                  (e = !0), t();
              }),
                  this.once("hideComplete", function () {
                      (i = !0), t();
                  }),
                  this.once("revealComplete", function () {
                      (o = !0), t();
                  });
          }),
          (l._filter = function (t) {
              var e = this.options.filter;
              e = e || "*";
              for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                  var a = t[r];
                  if (!a.isIgnored) {
                      var u = s(a);
                      u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                  }
              }
              return { matches: i, needReveal: o, needHide: n };
          }),
          (l._getFilterTest = function (t) {
              return u && this.options.isJQueryFiltering
                  ? function (e) {
                        return u(e.element).is(t);
                    }
                  : "function" == typeof t
                  ? function (e) {
                        return t(e.element);
                    }
                  : function (e) {
                        return o(e.element, t);
                    };
          }),
          (l.updateSortData = function (t) {
              var e;
              t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
          }),
          (l._getSorters = function () {
              var t = this.options.getSortData;
              for (var e in t) {
                  var i = t[e];
                  this._sorters[e] = f(i);
              }
          }),
          (l._updateItemsSortData = function (t) {
              for (var e = t && t.length, i = 0; e && i < e; i++) {
                  var o = t[i];
                  o.updateSortData();
              }
          });
      var f = (function () {
          function t(t) {
              if ("string" != typeof t) return t;
              var i = h(t).split(" "),
                  o = i[0],
                  n = o.match(/^\[(.+)\]$/),
                  s = n && n[1],
                  r = e(s, o),
                  a = d.sortDataParsers[i[1]];
              return (t = a
                  ? function (t) {
                        return t && a(r(t));
                    }
                  : function (t) {
                        return t && r(t);
                    });
          }
          function e(t, e) {
              return t
                  ? function (e) {
                        return e.getAttribute(t);
                    }
                  : function (t) {
                        var i = t.querySelector(e);
                        return i && i.textContent;
                    };
          }
          return t;
      })();
      (d.sortDataParsers = {
          parseInt: function (t) {
              return parseInt(t, 10);
          },
          parseFloat: function (t) {
              return parseFloat(t);
          },
      }),
          (l._sort = function () {
              if (this.options.sortBy) {
                  var t = n.makeArray(this.options.sortBy);
                  this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                  var e = a(this.sortHistory, this.options.sortAscending);
                  this.filteredItems.sort(e);
              }
          }),
          (l._getIsSameSortBy = function (t) {
              for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
              return !0;
          }),
          (l._mode = function () {
              var t = this.options.layoutMode,
                  e = this.modes[t];
              if (!e) throw new Error("No layout mode: " + t);
              return (e.options = this.options[t]), e;
          }),
          (l._resetLayout = function () {
              e.prototype._resetLayout.call(this), this._mode()._resetLayout();
          }),
          (l._getItemLayoutPosition = function (t) {
              return this._mode()._getItemLayoutPosition(t);
          }),
          (l._manageStamp = function (t) {
              this._mode()._manageStamp(t);
          }),
          (l._getContainerSize = function () {
              return this._mode()._getContainerSize();
          }),
          (l.needsResizeLayout = function () {
              return this._mode().needsResizeLayout();
          }),
          (l.appended = function (t) {
              var e = this.addItems(t);
              if (e.length) {
                  var i = this._filterRevealAdded(e);
                  this.filteredItems = this.filteredItems.concat(i);
              }
          }),
          (l.prepended = function (t) {
              var e = this._itemize(t);
              if (e.length) {
                  this._resetLayout(), this._manageStamps();
                  var i = this._filterRevealAdded(e);
                  this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
              }
          }),
          (l._filterRevealAdded = function (t) {
              var e = this._filter(t);
              return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
          }),
          (l.insert = function (t) {
              var e = this.addItems(t);
              if (e.length) {
                  var i,
                      o,
                      n = e.length;
                  for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
                  var s = this._filter(e).matches;
                  for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                  for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                  this.reveal(s);
              }
          });
      var c = l.remove;
      return (
          (l.remove = function (t) {
              t = n.makeArray(t);
              var e = this.getItems(t);
              c.call(this, t);
              for (var i = e && e.length, o = 0; i && o < i; o++) {
                  var s = e[o];
                  n.removeFrom(this.filteredItems, s);
              }
          }),
          (l.shuffle = function () {
              for (var t = 0; t < this.items.length; t++) {
                  var e = this.items[t];
                  e.sortData.random = Math.random();
              }
              (this.options.sortBy = "random"), this._sort(), this._layout();
          }),
          (l._noTransition = function (t, e) {
              var i = this.options.transitionDuration;
              this.options.transitionDuration = 0;
              var o = t.apply(this, e);
              return (this.options.transitionDuration = i), o;
          }),
          (l.getFilteredItemElements = function () {
              return this.filteredItems.map(function (t) {
                  return t.element;
              });
          }),
          d
      );
  });

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*
* Version: 1.3.8
*
*/
(function (e) {
  e.fn.extend({
      slimScroll: function (f) {
          var a = e.extend(
              {
                  width: "auto",
                  height: "250px",
                  size: "7px",
                  color: "#000",
                  position: "right",
                  distance: "1px",
                  start: "top",
                  opacity: 0.4,
                  alwaysVisible: !1,
                  disableFadeOut: !1,
                  railVisible: !1,
                  railColor: "#333",
                  railOpacity: 0.2,
                  railDraggable: !0,
                  railClass: "slimScrollRail",
                  barClass: "slimScrollBar",
                  wrapperClass: "slimScrollDiv",
                  allowPageScroll: !1,
                  wheelStep: 20,
                  touchScrollStep: 200,
                  borderRadius: "7px",
                  railBorderRadius: "7px",
              },
              f
          );
          this.each(function () {
              function v(d) {
                  if (r) {
                      d = d || window.event;
                      var c = 0;
                      d.wheelDelta && (c = -d.wheelDelta / 120);
                      d.detail && (c = d.detail / 3);
                      e(d.target || d.srcTarget || d.srcElement)
                          .closest("." + a.wrapperClass)
                          .is(b.parent()) && n(c, !0);
                      d.preventDefault && !k && d.preventDefault();
                      k || (d.returnValue = !1);
                  }
              }
              function n(d, g, e) {
                  k = !1;
                  var f = b.outerHeight() - c.outerHeight();
                  g && ((g = parseInt(c.css("top")) + ((d * parseInt(a.wheelStep)) / 100) * c.outerHeight()), (g = Math.min(Math.max(g, 0), f)), (g = 0 < d ? Math.ceil(g) : Math.floor(g)), c.css({ top: g + "px" }));
                  l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                  g = l * (b[0].scrollHeight - b.outerHeight());
                  e && ((g = d), (d = (g / b[0].scrollHeight) * b.outerHeight()), (d = Math.min(Math.max(d, 0), f)), c.css({ top: d + "px" }));
                  b.scrollTop(g);
                  b.trigger("slimscrolling", ~~g);
                  w();
                  p();
              }
              function x() {
                  u = Math.max((b.outerHeight() / b[0].scrollHeight) * b.outerHeight(), 30);
                  c.css({ height: u + "px" });
                  var a = u == b.outerHeight() ? "none" : "block";
                  c.css({ display: a });
              }
              function w() {
                  x();
                  clearTimeout(B);
                  l == ~~l ? ((k = a.allowPageScroll), C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : (k = !1);
                  C = l;
                  u >= b.outerHeight() ? (k = !0) : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
              }
              function p() {
                  a.alwaysVisible ||
                      (B = setTimeout(function () {
                          (a.disableFadeOut && r) || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
                      }, 1e3));
              }
              var r,
                  y,
                  z,
                  B,
                  A,
                  u,
                  l,
                  C,
                  k = !1,
                  b = e(this);
              if (b.parent().hasClass(a.wrapperClass)) {
                  var q = b.scrollTop(),
                      c = b.siblings("." + a.barClass),
                      m = b.siblings("." + a.railClass);
                  x();
                  if (e.isPlainObject(f)) {
                      if ("height" in f && "auto" == f.height) {
                          b.parent().css("height", "auto");
                          b.css("height", "auto");
                          var h = b.parent().parent().height();
                          b.parent().css("height", h);
                          b.css("height", h);
                      } else "height" in f && ((h = f.height), b.parent().css("height", h), b.css("height", h));
                      if ("scrollTo" in f) q = parseInt(a.scrollTo);
                      else if ("scrollBy" in f) q += parseInt(a.scrollBy);
                      else if ("destroy" in f) {
                          c.remove();
                          m.remove();
                          b.unwrap();
                          return;
                      }
                      n(q, !1, !0);
                  }
              } else if (!(e.isPlainObject(f) && "destroy" in f)) {
                  a.height = "auto" == a.height ? b.parent().height() : a.height;
                  q = e("<div></div>").addClass(a.wrapperClass).css({ position: "relative", overflow: "hidden", width: a.width, height: a.height });
                  b.css({ overflow: "hidden", width: a.width, height: a.height });
                  var m = e("<div></div>")
                          .addClass(a.railClass)
                          .css({
                              width: a.size,
                              height: "100%",
                              position: "absolute",
                              top: 0,
                              display: a.alwaysVisible && a.railVisible ? "block" : "none",
                              "border-radius": a.railBorderRadius,
                              background: a.railColor,
                              opacity: a.railOpacity,
                              zIndex: 90,
                          }),
                      c = e("<div></div>")
                          .addClass(a.barClass)
                          .css({
                              background: a.color,
                              width: a.size,
                              position: "absolute",
                              top: 0,
                              opacity: a.opacity,
                              display: a.alwaysVisible ? "block" : "none",
                              "border-radius": a.borderRadius,
                              BorderRadius: a.borderRadius,
                              MozBorderRadius: a.borderRadius,
                              WebkitBorderRadius: a.borderRadius,
                              zIndex: 99,
                          }),
                      h = "right" == a.position ? { right: a.distance } : { left: a.distance };
                  m.css(h);
                  c.css(h);
                  b.wrap(q);
                  b.parent().append(c);
                  b.parent().append(m);
                  a.railDraggable &&
                      c
                          .bind("mousedown", function (a) {
                              var b = e(document);
                              z = !0;
                              t = parseFloat(c.css("top"));
                              pageY = a.pageY;
                              b.bind("mousemove.slimscroll", function (a) {
                                  currTop = t + a.pageY - pageY;
                                  c.css("top", currTop);
                                  n(0, c.position().top, !1);
                              });
                              b.bind("mouseup.slimscroll", function (a) {
                                  z = !1;
                                  p();
                                  b.unbind(".slimscroll");
                              });
                              return !1;
                          })
                          .bind("selectstart.slimscroll", function (a) {
                              a.stopPropagation();
                              a.preventDefault();
                              return !1;
                          });
                  m.hover(
                      function () {
                          w();
                      },
                      function () {
                          p();
                      }
                  );
                  c.hover(
                      function () {
                          y = !0;
                      },
                      function () {
                          y = !1;
                      }
                  );
                  b.hover(
                      function () {
                          r = !0;
                          w();
                          p();
                      },
                      function () {
                          r = !1;
                          p();
                      }
                  );
                  b.bind("touchstart", function (a, b) {
                      a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
                  });
                  b.bind("touchmove", function (b) {
                      k || b.originalEvent.preventDefault();
                      b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), (A = b.originalEvent.touches[0].pageY));
                  });
                  x();
                  "bottom" === a.start ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
                  window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
              }
          });
          return this;
      },
  });
  e.fn.extend({ slimscroll: e.fn.slimScroll });
})(jQuery);

/*
* HC Off-canvas Nav
* ===================
* Version: 4.2.0
* Author: Some Web Media
* Author URL: https://github.com/somewebmedia/
* Plugin URL: https://github.com/somewebmedia/hc-offcanvas-nav
* Description: jQuery plugin for creating off-canvas multi-level navigations
* License: MIT
*/
("use strict");
function _typeof(n) {
  return (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (n) {
                return typeof n;
            }
          : function (n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
            })(n);
}
!(function (sn, rn) {
  var dn = rn.document,
      vn = sn(rn),
      pn = sn(dn.getElementsByTagName("html")[0]),
      fn = sn(dn),
      un = !1;
  try {
      var n = Object.defineProperty({}, "passive", {
          get: function () {
              un = { passive: !1 };
          },
      });
      rn.addEventListener("testPassive", null, n), rn.removeEventListener("testPassive", null, n);
  } catch (n) {}
  var i,
      hn = (/iPad|iPhone|iPod/.test(navigator.userAgent) || (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) && !rn.MSStream,
      mn = "ontouchstart" in rn || navigator.maxTouchPoints || (rn.DocumentTouch && dn instanceof DocumentTouch),
      gn = function (n) {
          return !isNaN(parseFloat(n)) && isFinite(n);
      },
      bn = function (n) {
          return "auto" === n ? n : gn(n) ? n + "px" : n;
      },
      yn = function (n) {
          return n.stopPropagation();
      },
      xn = function (n) {
          return n.preventDefault();
      },
      kn = function (e) {
          return function (n) {
              n.preventDefault(), n.stopPropagation(), "function" == typeof e && e();
          };
      },
      Cn = function (n) {
          var e = ["Webkit", "Moz", "Ms", "O"],
              t = (dn.body || dn.documentElement).style,
              a = n.charAt(0).toUpperCase() + n.slice(1);
          if (void 0 !== t[n]) return n;
          for (var o = 0; o < e.length; o++) if (void 0 !== t[e[o] + a]) return e[o] + a;
          return !1;
      },
      On = function (n, e, t) {
          var a = t.children(),
              o = a.length,
              i = -1 < e ? Math.max(0, Math.min(e - 1, o)) : Math.max(0, Math.min(o + e + 1, o));
          0 === i ? t.prepend(n) : a.eq(i - 1).after(n);
      },
      wn = function (n) {
          return -1 !== ["left", "right"].indexOf(n) ? "x" : "y";
      },
      Tn =
          ((i = Cn("transform")),
          function (n, e, t) {
              if (i)
                  if (!1 === e) n.css(i, "");
                  else if ("x" === wn(t)) {
                      var a = "left" === t ? e : 0 - e;
                      n.css(i, "translate3d(".concat(a, "px,0,0)"));
                  } else {
                      var o = "top" === t ? e : 0 - e;
                      n.css(i, "translate3d(0,".concat(o, "px,0)"));
                  }
              else n.css(t, e);
          }),
      e = function (n, e, t) {
          console.warn(
              "%cHC Off-canvas Nav:%c " + t + "%c '" + n + "'%c is now deprecated and will be removed in the future. Use%c '" + e + "'%c option instead. See details about plugin usage at https://github.com/somewebmedia/hc-offcanvas-nav.",
              "color: #fa253b",
              "color: default",
              "color: #5595c6",
              "color: default",
              "color: #5595c6",
              "color: default"
          );
      },
      Mn = 0;
  sn.fn.extend({
      hcOffcanvasNav: function () {
          var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.length) return this;
          var en = this,
              tn = sn(dn.body);
          void 0 !== n.maxWidth && (e("maxWidth", "disableAt", "option"), (n.disableAt = n.maxWidth));
          var an = sn.extend(
                  {},
                  {
                      width: 280,
                      height: "auto",
                      disableAt: !1,
                      pushContent: !1,
                      swipeGestures: !0,
                      expanded: !1,
                      position: "left",
                      levelOpen: "overlap",
                      levelSpacing: 40,
                      levelTitles: !0,
                      closeOpenLevels: !0,
                      closeActiveLevel: !1,
                      navTitle: null,
                      navClass: "",
                      disableBody: !0,
                      closeOnClick: !0,
                      customToggle: null,
                      bodyInsert: "prepend",
                      removeOriginalNav: !1,
                      rtl: !1,
                      insertClose: !0,
                      insertBack: !0,
                      levelTitleAsBack: !0,
                      labelClose: "Close",
                      labelBack: "Back",
                  },
                  n
              ),
              on = [],
              cn = "nav-open",
              ln = function (n) {
                  if (!on.length) return !1;
                  var e = !1;
                  "string" == typeof n && (n = [n]);
                  for (var t = n.length, a = 0; a < t; a++) -1 !== on.indexOf(n[a]) && (e = !0);
                  return e;
              };
          return this.each(function () {
              var e = sn(this);
              if (e.find("ul").addBack("ul").length) {
                  var n,
                      o,
                      i,
                      c,
                      a,
                      t,
                      r,
                      l,
                      y = "hc-nav-".concat(++Mn),
                      s =
                          ((n = "hc-offcanvas-".concat(Mn, "-style")),
                          (o = sn('<style id="'.concat(n, '">')).appendTo(sn("head"))),
                          (i = {}),
                          (c = {}),
                          (a = function (n) {
                              return ";" !== n.substr(-1) && (n += ";" !== n.substr(-1) ? ";" : ""), n;
                          }),
                          {
                              reset: function () {
                                  (i = {}), (c = {});
                              },
                              add: function (n, e, t) {
                                  (n = n.trim()), (e = e.trim()), t ? ((t = t.trim()), (c[t] = c[t] || {}), (c[t][n] = a(e))) : (i[n] = a(e));
                              },
                              remove: function (n, e) {
                                  (n = n.trim()), e ? ((e = e.trim()), void 0 !== c[e][n] && delete c[e][n]) : void 0 !== i[n] && delete i[n];
                              },
                              insert: function () {
                                  var n = "";
                                  for (var e in c) {
                                      for (var t in ((n += "@media screen and (".concat(e, ") {\n")), c[e])) n += "".concat(t, " { ").concat(c[e][t], " }\n");
                                      n += "}\n";
                                  }
                                  for (var a in i) n += "".concat(a, " { ").concat(i[a], " }\n");
                                  o.html(n);
                              },
                          }),
                      d = "keydown.hc-offcanvas-nav",
                      v = sn('<nav role="navigation">').on("click", yn),
                      p = sn('<div class="nav-container">').appendTo(v),
                      f = null,
                      u = null,
                      h = {},
                      m = !1,
                      g = !1,
                      b = null,
                      x = 0,
                      k = 0,
                      C = 0,
                      O = null,
                      w = {},
                      T = [],
                      M = !1,
                      S = [],
                      E = null,
                      L = null,
                      B = !1,
                      A = !1;
                  e.addClass("hc-nav-original ".concat(y)),
                      an.customToggle
                          ? (f = sn(an.customToggle).addClass("hc-nav-trigger ".concat(y)).on("click", R))
                          : ((f = sn('<a href="#" aria-label="Open Menu" class="hc-nav-trigger '.concat(y, '"><span></span></a>')).on("click", R)), e.after(f)),
                      f
                          .attr("role", "button")
                          .attr("aria-controls", y)
                          .on("keydown", function (n) {
                              ("Enter" !== n.key && 13 !== n.keyCode) ||
                                  setTimeout(function () {
                                      N(0, 0);
                                  }, 0);
                          });
                  var N = function (n, e, t) {
                          if ("number" == typeof e && ("number" == typeof n || S.length)) {
                              var a = '[tabindex=0], a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
                                  o = p
                                      .find(".nav-wrapper")
                                      .filter("[data-level=".concat(e, "]"))
                                      .filter(function () {
                                          return "number" != typeof t || sn(this).is("[data-index=".concat(t, "]"));
                                      })
                                      .children(".nav-content")
                                      .children("ul")
                                      .children("li")
                                      .children(":not(.nav-wrapper)")
                                      .find(a)
                                      .addBack(a)
                                      .filter(":not([tabindex=-1])");
                              if (o.length) {
                                  var i = o.first(),
                                      c = o.last();
                                  "number" == typeof n ? o.eq(n).focus() : (S[S.length - 1].focus(), S.pop()),
                                      fn.off(d),
                                      fn.on(d, function (n) {
                                          ("Tab" === n.key || 9 === n.keyCode) && (n.shiftKey ? dn.activeElement === i[0] && (n.preventDefault(), c.focus()) : dn.activeElement === c[0] && (n.preventDefault(), i.focus()));
                                      });
                              }
                          }
                      },
                      P = function () {
                          fn.off(d),
                              setTimeout(function () {
                                  f.focus();
                              }, r);
                      },
                      D = function () {
                          var n;
                          p.css("transition", "none"),
                              (k = p.outerWidth()),
                              (C = p.outerHeight()),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-left .nav-container"), "transform: translate3d(-".concat(k, "px, 0, 0)")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-right .nav-container"), "transform: translate3d(".concat(k, "px, 0, 0)")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat(C, "px, 0)")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat(C, "px, 0)")),
                              s.insert(),
                              p.css("transition", ""),
                              (t = p.css("transition-property").split(",")[0]),
                              (n = p.css("transition-duration").split(",")[0]),
                              (r = parseFloat(n) * (/\ds$/.test(n) ? 1e3 : 1)),
                              (l = p.css("transition-timing-function").split(",")[0]),
                              an.pushContent &&
                                  u &&
                                  t &&
                                  s.add(
                                      (function n(e) {
                                          return "string" == typeof e
                                              ? e
                                              : e.attr("id")
                                              ? "#" + e.attr("id")
                                              : e.attr("class")
                                              ? e.prop("tagName").toLowerCase() + "." + e.attr("class").replace(/\s+/g, ".")
                                              : n(e.parent()) + " " + e.prop("tagName").toLowerCase();
                                      })(an.pushContent),
                                      "transition: ".concat(t, " ").concat(r, "ms ").concat(l)
                                  ),
                              s.insert();
                      },
                      j = function (n) {
                          var e = f.css("display"),
                              t = !!an.disableAt && "max-width: ".concat(an.disableAt - 1, "px"),
                              a = bn(an.width),
                              o = bn(an.height);
                          -1 !== a.indexOf("px") && (k = parseInt(a)),
                              -1 !== o.indexOf("px") && (C = parseInt(o)),
                              ln(["disableAt", "position"]) && s.reset(),
                              s.add(".hc-offcanvas-nav.".concat(y), "display: block", t),
                              s.add(".hc-nav-original.".concat(y), "display: none", t),
                              s.add(".hc-nav-trigger.".concat(y), "display: ".concat(e && "none" !== e ? e : "block"), t),
                              -1 !== ["left", "right"].indexOf(an.position) ? s.add(".hc-offcanvas-nav.".concat(y, " .nav-container"), "width: ".concat(a)) : s.add(".hc-offcanvas-nav.".concat(y, " .nav-container"), "height: ".concat(o)),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-left .nav-container"), "transform: translate3d(-".concat("auto" === a ? "100%" : a, ", 0, 0);")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-right .nav-container"), "transform: translate3d(".concat("auto" === a ? "100%" : a, ", 0, 0);")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-top .nav-container"), "transform: translate3d(0, -".concat("auto" === o ? "100%" : o, ", 0);")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-position-bottom .nav-container"), "transform: translate3d(0, ".concat("auto" === o ? "100%" : o, ", 0);")),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-levels-overlap.nav-position-left li.level-open > .nav-wrapper"), "transform: translate3d(-".concat(an.levelSpacing, "px,0,0)"), t),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-levels-overlap.nav-position-right li.level-open > .nav-wrapper"), "transform: translate3d(".concat(an.levelSpacing, "px,0,0)"), t),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-levels-overlap.nav-position-top li.level-open > .nav-wrapper"), "transform: translate3d(0,-".concat(an.levelSpacing, "px,0)"), t),
                              s.add(".hc-offcanvas-nav.".concat(y, ".nav-levels-overlap.nav-position-bottom li.level-open > .nav-wrapper"), "transform: translate3d(0,".concat(an.levelSpacing, "px,0)"), t),
                              s.insert(),
                              (!n || (n && ln("pushContent"))) && ("string" == typeof an.pushContent ? (u = sn(an.pushContent)).length || (u = null) : (u = an.pushContent instanceof jQuery ? an.pushContent : null)),
                              p.css("transition", "none");
                          var i = v.hasClass(cn),
                              c = [
                                  "hc-offcanvas-nav",
                                  an.navClass || "",
                                  y,
                                  an.navClass || "",
                                  "nav-levels-" + an.levelOpen || "none",
                                  "nav-position-" + an.position,
                                  an.disableBody ? "disable-body" : "",
                                  hn ? "is-ios" : "",
                                  mn ? "touch-device" : "",
                                  i ? cn : "",
                                  an.rtl ? "rtl" : "",
                              ].join(" ");
                          v.off("click").attr("class", "").attr("aria-hidden", !0).attr("aria-labelledby", y).addClass(c), an.disableBody && v.on("click", J), n ? D() : setTimeout(D, 0);
                      },
                      H = function () {
                          var n;
                          h = (function l(n, e) {
                              var t = [];
                              return (
                                  n.each(function () {
                                      var n = sn(this),
                                          c = { id: e, classes: n.attr("class") || null, items: [] };
                                      void 0 !== n.attr("data-nav-active") && ((b = e), n.removeAttr("data-nav-active")),
                                          n.children("li").each(function () {
                                              var n = sn(this),
                                                  e = void 0 !== n.attr("data-nav-custom-content"),
                                                  t = e
                                                      ? n.children()
                                                      : n
                                                            .children()
                                                            .filter(function () {
                                                                var n = sn(this);
                                                                return n.is(":not(ul)") && !n.find("ul").length;
                                                            })
                                                            .add(
                                                                n.contents().filter(function () {
                                                                    return 3 === this.nodeType && this.nodeValue.trim();
                                                                })
                                                            ),
                                                  a = e ? sn() : n.find("ul"),
                                                  o = a.first().add(a.first().siblings("ul")),
                                                  i = null;
                                              o.length && (n.data("hc-uniqid") ? (i = n.data("hc-uniqid")) : ((i = Math.random().toString(36).substr(2)), n.data("hc-uniqid", i))),
                                                  void 0 !== n.attr("data-nav-active") && ((b = i), n.removeAttr("data-nav-active")),
                                                  c.items.push({ id: i, classes: n.attr("class") || null, content: t, custom: e, subnav: o.length ? l(o, i) : [], highlight: void 0 !== n.attr("data-nav-highlight") });
                                          }),
                                          t.push(c);
                                  }),
                                  t
                              );
                          })((n = e.find("ul").addBack("ul")).first().add(n.first().siblings("ul")), null);
                      },
                      q = function (n) {
                          n && (p.empty(), (w = {})),
                              (function h(n, e, m, g, t, a) {
                                  var b = sn(
                                          '<div class="nav-wrapper nav-wrapper-'
                                              .concat(m, '" data-level="')
                                              .concat(m, '" data-index="')
                                              .concat(t || 0, '">')
                                      )
                                          .appendTo(e)
                                          .on("click", yn),
                                      o = sn('<div class="nav-content">').appendTo(b);
                                  if (
                                      (g && o.prepend("<h2>".concat(g, "</h2>")),
                                      sn.each(n, function (n, e) {
                                          var u = sn('<ul role="menu" aria-level="'.concat(m + 1, '">'))
                                              .addClass(e.classes)
                                              .appendTo(o);
                                          0 === n && g && u.attr("aria-label", g),
                                              e.id && u.attr("aria-labelledby", "menu-" + e.id),
                                              sn.each(e.items, function (n, e) {
                                                  var t = e.content;
                                                  if (e.custom) {
                                                      var a = sn('<li class="custom-content">')
                                                          .addClass(e.classes)
                                                          .append(sn('<div class="nav-item nav-item-custom">').append(t.clone(!0, !0)));
                                                      u.append(a);
                                                  } else {
                                                      var o = t.find("a").addBack("a"),
                                                          i = o.length
                                                              ? o.clone(!1, !0).addClass("nav-item")
                                                              : sn("<".concat(e.subnav.length ? 'a href="#"' : "span", ' class="nav-item">'))
                                                                    .append(t.clone(!0, !0))
                                                                    .on("click", yn);
                                                      i.is("a") && i.attr("tabindex", "0").attr("role", "menuitem"),
                                                          o.length &&
                                                              i.on("click", function (n) {
                                                                  n.stopPropagation(), (sn._data(o[0], "events") || {}).click && o[0].click();
                                                              }),
                                                          "#" === i.attr("href") &&
                                                              i.on("click", function (n) {
                                                                  n.preventDefault();
                                                              }),
                                                          an.closeOnClick &&
                                                              ($()
                                                                  ? i
                                                                        .filter("a")
                                                                        .filter('[data-nav-close!="false"]:not([disabled])')
                                                                        .filter(function () {
                                                                            var n = sn(this);
                                                                            return !e.subnav.length || (n.attr("href") && "#" !== n.attr("href").charAt(0));
                                                                        })
                                                                        .on("click", J)
                                                                  : i.filter("a").filter('[data-nav-close!="false"]:not([disabled])').on("click", J));
                                                      var c = sn("<li>").addClass(e.classes).append(i).appendTo(u);
                                                      if (
                                                          (e.highlight && c.addClass("nav-highlight"),
                                                          i.wrap('<div class="nav-item-wrapper">'),
                                                          an.levelSpacing && ("expand" === an.levelOpen || !1 === an.levelOpen || "none" === an.levelOpen))
                                                      ) {
                                                          var l = an.levelSpacing * m;
                                                          l && u.css("text-indent", "".concat(l, "px"));
                                                      }
                                                      if (e.subnav.length) {
                                                          var s = m + 1,
                                                              r = e.id,
                                                              d = "";
                                                          if ((w[s] || (w[s] = 0), c.addClass("nav-parent"), $())) {
                                                              var v = function (n) {
                                                                      n.on("click", function () {
                                                                          f.prop("checked", !f.prop("checked")).trigger("change");
                                                                      })
                                                                          .on("keydown", function (n) {
                                                                              ("Enter" !== n.key && 13 !== n.keyCode) || ((M = !0), S.push(sn(this)));
                                                                          })
                                                                          .attr("aria-controls", "menu-" + r)
                                                                          .attr("aria-haspopup", "overlap" === an.levelOpen)
                                                                          .attr("aria-expanded", !1);
                                                                  },
                                                                  p = w[s],
                                                                  f = sn('<input type="checkbox" id="'.concat(y, "-").concat(s, "-").concat(p, '" class="hc-chk" tabindex="-1">'))
                                                                      .attr("data-level", s)
                                                                      .attr("data-index", p)
                                                                      .val(r)
                                                                      .on("click", yn)
                                                                      .on("change", Y)
                                                                      .prependTo(c);
                                                              -1 !== T.indexOf(r) &&
                                                                  (b.addClass("sub-level-open").on("click", function () {
                                                                      return nn(s, p);
                                                                  }),
                                                                  c.addClass("level-open"),
                                                                  f.prop("checked", !0)),
                                                                  (d = !0 === an.levelTitles ? t.text().trim() : ""),
                                                                  i.attr("href") && "#" !== i.attr("href")
                                                                      ? v(sn('<a href="#" class="nav-next" aria-label="'.concat(d, ' Submenu" role="menuitem" tabindex="0"><span>')).on("click", yn).insertAfter(i))
                                                                      : (sn('<span class="nav-next"><span>').appendTo(i), v(i));
                                                          } else i.attr("aria-expanded", !0);
                                                          w[s]++, h(e.subnav, c, s, d, w[s] - 1, g);
                                                      }
                                                  }
                                              });
                                      }),
                                      m && void 0 !== t && !1 !== an.insertBack && "overlap" === an.levelOpen)
                                  ) {
                                      var i = o.children("ul"),
                                          c = (an.levelTitleAsBack && a) || an.labelBack || "",
                                          l = sn('<li class="nav-back"><a href="#" role="menuitem" tabindex="0">'.concat(c, "<span></span></a></li>")),
                                          s = function () {
                                              return nn(m, t);
                                          };
                                      l
                                          .children("a")
                                          .on("click", kn(s))
                                          .on("keydown", function (n) {
                                              ("Enter" !== n.key && 13 !== n.keyCode) || (M = !0);
                                          })
                                          .wrap('<div class="nav-item-wrapper">'),
                                          !0 === an.insertBack ? i.first().prepend(l) : gn(an.insertBack) && On(l, an.insertBack, i);
                                  }
                                  if (0 === m && !1 !== an.insertClose) {
                                      var r = o.children("ul"),
                                          d = sn('<li class="nav-close"><a href="#" role="menuitem" tabindex="0">'.concat(an.labelClose || "", "<span></span></a></li>"));
                                      d
                                          .children("a")
                                          .on("click", kn(J))
                                          .on("keydown", function (n) {
                                              ("Enter" !== n.key && 13 !== n.keyCode) || P();
                                          })
                                          .wrap('<div class="nav-item-wrapper">'),
                                          !0 === an.insertClose ? r.first().prepend(d) : gn(an.insertClose) && On(d, an.insertClose, r.first().add(r.first().siblings("ul")));
                                  }
                              })(h, p, 0, an.navTitle);
                      },
                      I = function (e) {
                          return function (n) {
                              ("left" != an.position && "right" != an.position) ||
                                  ((E = n.touches[0].clientX),
                                  (L = n.touches[0].clientY),
                                  "doc" == e ? A || (dn.addEventListener("touchmove", _, un), dn.addEventListener("touchend", F, un)) : ((A = !0), p[0].addEventListener("touchmove", G, un), p[0].addEventListener("touchend", Q, un)));
                          };
                      },
                      W = function (n, e) {
                          rn.addEventListener("touchmove", xn, un), v.css("visibility", "visible"), p.css(Cn("transition"), "none"), Tn(p, n, an.position), u && (u.css(Cn("transition"), "none"), Tn(u, e, an.position));
                      },
                      X = function (n) {
                          var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                              t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                              a = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                          rn.removeEventListener("touchmove", xn, un),
                              p.css(Cn("transition"), ""),
                              Tn(p, t, an.position),
                              u && (u.css(Cn("transition"), ""), Tn(u, a, an.position)),
                              "open" == n
                                  ? V()
                                  : (J(),
                                    e
                                        ? setTimeout(function () {
                                              v.css("visibility", "");
                                          }, r)
                                        : v.css("visibility", ""));
                      },
                      _ = function (n) {
                          var e = 0 - (E - n.touches[0].clientX),
                              t = "overlap" === an.levelOpen ? K() * an.levelSpacing : 0,
                              a = k + t;
                          (e = "left" == an.position ? Math.min(Math.max(e, 0), a) : Math.abs(Math.min(Math.max(e, -a), 0))),
                              (("left" == an.position && E < 20) || ("right" == an.position && E > fn.width() - 20)) && ((B = !0), W(0 - (k - e), Math.abs(e)));
                      },
                      F = function n(e) {
                          if ((dn.removeEventListener("touchmove", _), dn.removeEventListener("touchend", n), B)) {
                              var t = e.changedTouches[e.changedTouches.length - 1],
                                  a = 0 - (E - t.clientX),
                                  o = "overlap" === an.levelOpen ? K() * an.levelSpacing : 0,
                                  i = k + o;
                              (a = "left" == an.position ? Math.min(Math.max(a, 0), i) : Math.abs(Math.min(Math.max(a, -i), 0))) ? X(70 < a ? "open" : "close") : X("close", !1), (L = E = null), (B = !1);
                          }
                      },
                      G = function (n) {
                          var e = 0 - (E - n.touches[0].clientX),
                              t = 0 - (L - n.touches[0].clientY);
                          if (!(Math.abs(e) < Math.abs(t))) {
                              var a = "overlap" === an.levelOpen ? K() * an.levelSpacing : 0,
                                  o = k + a;
                              (e = "left" == an.position ? Math.min(Math.max(e, -o), 0) : Math.min(Math.max(e, 0), o)),
                                  (("left" == an.position && e < 0) || ("right" == an.position && 0 < e)) && ((B = !0), W(-Math.abs(e) + a, o - Math.abs(e)));
                          }
                      },
                      Q = function n(e) {
                          if ((p[0].removeEventListener("touchmove", G), p[0].removeEventListener("touchend", n), (A = !1), B)) {
                              var t = e.changedTouches[e.changedTouches.length - 1],
                                  a = 0 - (E - t.clientX),
                                  o = "overlap" === an.levelOpen ? K() * an.levelSpacing : 0,
                                  i = k + o;
                              (a = "left" == an.position ? Math.abs(Math.min(Math.max(a, -i), 0)) : Math.abs(Math.min(Math.max(a, 0), i))) == i ? X("close", !1) : 50 < a ? X("close") : X("open", !0, o, i), (L = E = null), (B = !1);
                          }
                      };
                  j(),
                      H(),
                      q(),
                      !0 === an.removeOriginalNav && e.remove(),
                      "prepend" === an.bodyInsert ? tn.prepend(v) : "append" === an.bodyInsert && tn.append(v),
                      !0 === an.expanded && ((g = !0), V()),
                      an.swipeGestures && (p[0].addEventListener("touchstart", I("nav"), un), dn.addEventListener("touchstart", I("doc"), un)),
                      fn.on("keydown", function (n) {
                          if (z() && ("Escape" === n.key || 27 === n.keyCode)) {
                              var e = K();
                              0 === e ? (J(), P()) : (nn(e), N(null, e - 1));
                          }
                      });
                  var U = function (n, e, t) {
                      var a = sn("#".concat(y, "-").concat(n, "-").concat(e));
                      if (a.length) {
                          var o = a.val(),
                              i = a.parent("li"),
                              c = i.closest(".nav-wrapper");
                          if (
                              (a.prop("checked", !1),
                              c.removeClass("sub-level-open"),
                              i.removeClass("level-open"),
                              i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !1),
                              -1 !== T.indexOf(o) && T.splice(T.indexOf(o), 1),
                              t && "overlap" === an.levelOpen && (c.off("click").on("click", yn), Tn(p, (n - 1) * an.levelSpacing, an.position), u))
                          ) {
                              var l = "x" === wn(an.position) ? k : C;
                              Tn(u, l + (n - 1) * an.levelSpacing, an.position);
                          }
                      }
                  };
                  (en.getSettings = function () {
                      return Object.assign({}, an);
                  }),
                      (en.isOpen = z),
                      (en.open = V),
                      (en.close = J),
                      (en.update = function (n, e) {
                          if (((on = []), "object" === _typeof(n))) {
                              for (var t in n) an[t] !== n[t] && on.push(t);
                              an = sn.extend({}, an, n);
                          }
                          if (!0 === n || !0 === e) {
                              if (an.removeOriginalNav)
                                  return void console.warn("%c! HC Offcanvas Nav:%c Can't update because original navigation has been removed. Disable `removeOriginalNav` option.", "color: #fa253b", "color: default");
                              j(!0), H(), q(!0);
                          } else j(!0), q(!0);
                      });
              } else console.error("%c! HC Offcanvas Nav:%c Menu must contain <ul> element.", "color: #fa253b", "color: default");
              function Y() {
                  var n = sn(this),
                      e = n.data("level"),
                      t = n.data("index");
                  n.prop("checked") ? Z(e, t) : nn(e, t);
              }
              function $() {
                  return !1 !== an.levelOpen && "none" !== an.levelOpen;
              }
              function z() {
                  return m;
              }
              function K() {
                  return T.length
                      ? p
                            .find(".hc-chk")
                            .filter("[value=".concat(T[T.length - 1], "]"))
                            .data("level")
                      : 0;
              }
              function V(n, e) {
                  if (
                      (!z() || void 0 !== e) &&
                      ((function () {
                          if (!z()) {
                              if (
                                  ((m = !0),
                                  v.css("visibility", "visible").attr("aria-hidden", !1).addClass(cn),
                                  f.addClass("toggle-open"),
                                  "expand" === an.levelOpen && O && clearTimeout(O),
                                  an.disableBody &&
                                      ((x = vn.scrollTop() || pn.scrollTop() || tn.scrollTop()),
                                      dn.documentElement.scrollHeight > dn.documentElement.clientHeight && pn.addClass("hc-nav-yscroll"),
                                      tn.addClass("hc-nav-open"),
                                      x && tn.css("top", -x)),
                                  u)
                              ) {
                                  var n = "x" === wn(an.position) ? k : C;
                                  Tn(u, n, an.position);
                              }
                              if (g) return (g = !1);
                              setTimeout(function () {
                                  en.trigger("open", sn.extend({}, an));
                              }, r);
                          }
                      })(),
                      $())
                  ) {
                      var t;
                      if ("number" == typeof n && "number" == typeof e) {
                          if (!(t = sn("#".concat(y, "-").concat(n, "-").concat(e))).length) return void console.warn("HC Offcanvas Nav: level ".concat(n, " doesn't have index ").concat(e));
                      } else b ? ((t = p.find(".hc-chk").filter("[value=".concat(b, "]"))), (!an.closeActiveLevel && an.closeOpenLevels) || (b = null)) : !1 === an.closeOpenLevels && (t = p.find(".hc-chk").filter(":checked").last());
                      if (t && t.length) {
                          var a = [];
                          (n = t.data("level")),
                              (e = t.data("index")),
                              1 < n &&
                                  (t.parents(".nav-wrapper").each(function () {
                                      var n = sn(this),
                                          e = n.data("level");
                                      0 < e && a.push({ level: e, index: n.data("index") });
                                  }),
                                  (a = a.reverse())),
                              a.push({ level: n, index: e });
                          for (var o = 0; o < a.length; o++) Z(a[o].level, a[o].index, !1);
                      }
                  }
              }
              function J() {
                  if (z()) {
                      if (
                          ((m = !1),
                          u && Tn(u, !1),
                          v.removeClass(cn).attr("aria-hidden", !0),
                          p.removeAttr("style"),
                          f.removeClass("toggle-open"),
                          "expand" === an.levelOpen && -1 !== ["top", "bottom"].indexOf(an.position)
                              ? nn(0)
                              : $() &&
                                (O = setTimeout(
                                    function () {
                                        nn(0);
                                    },
                                    "expand" === an.levelOpen ? r : 0
                                )),
                          an.disableBody && (tn.removeClass("hc-nav-open"), pn.removeClass("hc-nav-yscroll"), x))
                      ) {
                          if ((tn.css("top", "").scrollTop(x), pn.scrollTop(x), "bottom" === an.position)) {
                              var n = x;
                              setTimeout(function () {
                                  tn.scrollTop(n), pn.scrollTop(n);
                              }, 0);
                          }
                          x = 0;
                      }
                      setTimeout(function () {
                          v.css("visibility", ""), en.trigger("close.$", sn.extend({}, an)), en.trigger("close.once", sn.extend({}, an)).off("close.once");
                      }, r);
                  }
              }
              function R(n) {
                  n.preventDefault(), n.stopPropagation(), m ? J() : V();
              }
              function Z(n, e) {
                  var t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                      a = sn("#".concat(y, "-").concat(n, "-").concat(e)),
                      o = a.val(),
                      i = a.parent("li"),
                      c = i.closest(".nav-wrapper"),
                      l = i.children(".nav-wrapper");
                  if (
                      (!1 === t && l.css("transition", "none"),
                      a.prop("checked", !0),
                      c.addClass("sub-level-open"),
                      i.addClass("level-open"),
                      i.children(".nav-item-wrapper").children("[aria-controls]").attr("aria-expanded", !0),
                      !1 === t &&
                          setTimeout(function () {
                              l.css("transition", "");
                          }, r),
                      -1 === T.indexOf(o) && T.push(o),
                      "overlap" === an.levelOpen &&
                          (c.on("click", function () {
                              return nn(n, e);
                          }),
                          Tn(p, n * an.levelSpacing, an.position),
                          u))
                  ) {
                      var s = "x" === wn(an.position) ? k : C;
                      Tn(u, s + n * an.levelSpacing, an.position);
                  }
                  M && (N(0, n, e), (M = !1));
              }
              function nn(n, e) {
                  for (var t = n; t <= Object.keys(w).length; t++)
                      if (t == n && void 0 !== e) U(n, e, !0);
                      else if (0 !== n || an.closeOpenLevels) for (var a = 0; a < w[t]; a++) U(t, a, t == n);
                  M && (N(null, n - 1), (M = !1));
              }
          });
      },
  });
})(jQuery, "undefined" != typeof window ? window : this);
