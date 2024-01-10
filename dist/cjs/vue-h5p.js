"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const Toposort = require("toposort-class");
class FetchError extends Error {
  constructor(resp, body) {
    super(resp.statusText);
    this.name = "FetchError";
    this.resp = resp;
    this.status = resp.status;
    Object.assign(this, body);
  }
}
const l10n = {
  H5P: {
    advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:",
    author: "Author",
    by: "by",
    cancelLabel: "Cancel",
    changes: "Changelog",
    close: "Close",
    confirmDialogBody: "Please confirm that you wish to proceed. This action is not reversible.",
    confirmDialogHeader: "Confirm action",
    confirmLabel: "Confirm",
    connectionLost: "Connection lost. Results will be stored and sent when you regain connection.",
    connectionReestablished: "Connection reestablished.",
    contentChanged: "This content has changed since you last used it.",
    contentCopied: "Content is copied to the clipboard",
    contentType: "Content Type",
    copyrightInformation: "Rights of use",
    copyrights: "Rights of use",
    copyrightsDescription: "View copyright information for this content.",
    disableFullscreen: "Disable fullscreen",
    download: "Download",
    downloadDescription: "Download this content as a H5P file.",
    embed: "Embed",
    embedDescription: "View the embed code for this content.",
    fullscreen: "Fullscreen",
    h5pDescription: "Visit H5P.org to check out more cool content.",
    hideAdvanced: "Hide advanced",
    license: "License",
    licenseC: "Copyright",
    licenseCC010: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
    licenseCC10: "1.0 Generic",
    licenseCC20: "2.0 Generic",
    licenseCC25: "2.5 Generic",
    licenseCC30: "3.0 Unported",
    licenseCC40: "4.0 International",
    licenseCCBY: "Attribution",
    licenseCCBYNC: "Attribution-NonCommercial",
    licenseCCBYNCND: "Attribution-NonCommercial-NoDerivs",
    licenseCCBYNCSA: "Attribution-NonCommercial-ShareAlike",
    licenseCCBYND: "Attribution-NoDerivs",
    licenseCCBYSA: "Attribution-ShareAlike",
    licenseExtras: "License Extras",
    licenseGPL: "General Public License",
    licensePD: "Public Domain",
    licensePDM: "Public Domain Mark",
    licenseU: "Undisclosed",
    licenseV1: "Version 1",
    licenseV2: "Version 2",
    licenseV3: "Version 3",
    noCopyrights: "No copyright information available for this content.",
    offlineDialogBody: "We were unable to send information about your completion of this task. Please check your internet connection.",
    offlineDialogHeader: "Your connection to the server was lost",
    offlineDialogRetryButtonLabel: "Retry now",
    offlineDialogRetryMessage: "Retrying in :num....",
    offlineSuccessfulSubmit: "Successfully submitted results.",
    resubmitScores: "Attempting to submit stored results.",
    reuse: "Reuse",
    reuseContent: "Reuse Content",
    reuseDescription: "Reuse this content.",
    showAdvanced: "Show advanced",
    showLess: "Show less",
    showMore: "Show more",
    size: "Size",
    source: "Source",
    startingOver: "You'll be starting over.",
    subLevel: "Sublevel",
    thumbnail: "Thumbnail",
    title: "Title",
    year: "Year"
  }
};
const frameScript = `"use strict";
const h5p = "";
const h5pConfirmationDialog = "";
const h5pCoreButton = "";
const h5pTooltip = "";
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document)
      throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : globalThis, function(C, e) {
  var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
    return t.flat.call(e2);
  } : function(e2) {
    return t.concat.apply([], e2);
  }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType;
  }, x = function(e2) {
    return null != e2 && e2 === e2.window;
  }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
  function b(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || E).createElement("script");
    if (o2.text = e2, t2)
      for (r2 in c)
        (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function w(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[o.call(e2)] || "object" : typeof e2;
  }
  var f = "3.5.1", S = function(e2, t2) {
    return new S.fn.init(e2, t2);
  };
  function p(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
    return !m(e2) && !x(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
    return s.call(this);
  }, get: function(e2) {
    return null == e2 ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = S.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return S.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(S.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(s.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(S.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(S.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
      if (null != (e2 = arguments[s2]))
        for (t2 in e2)
          r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== o.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = v.call(t2, "constructor") && t2.constructor) && a.call(n2) === l);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2)
      return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    b(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (p(e2)) {
      for (n2 = e2.length; r2 < n2; r2++)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    } else
      for (r2 in e2)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    return e2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (p(Object(e2)) ? S.merge(n2, "string" == typeof e2 ? [e2] : e2) : u.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : i.call(t2, e2, n2);
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
      e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
      !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (p(e2))
      for (r2 = e2.length; o2 < r2; o2++)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else
      for (o2 in e2)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var d = function(n2) {
    var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * /* @__PURE__ */ new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), D2 = function(e3, t3) {
      return e3 === t3 && (l2 = true), 0;
    }, j2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
      for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
        if (e3[n3] === t3)
          return n3;
      return -1;
    }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\\\x20\\\\t\\\\r\\\\n\\\\f]", I2 = "(?:\\\\\\\\[\\\\da-fA-F]{1,6}" + M2 + "?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+", W2 = "\\\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + \`*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|"((?:\\\\\\\\.|[^\\\\\\\\"])*)"|(\` + I2 + "))|)" + M2 + "*\\\\]", F2 = ":(" + I2 + \`)(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|"((?:\\\\\\\\.|[^\\\\\\\\"])*)")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|\` + W2 + ")*)|.*)\\\\)|)", B2 = new RegExp(M2 + "+", "g"), $2 = new RegExp("^" + M2 + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" + M2 + "*(even|odd|(([+-]|)(\\\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\\\d+)|))" + M2 + "*\\\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + M2 + "*((?:-\\\\d)?\\\\d*)" + M2 + "*\\\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\\d$/i, K2 = /^[^{]+\\{\\s*\\[native \\w/, Z2 = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\\\\\[\\\\da-fA-F]{1,6}" + M2 + "?|\\\\\\\\([^\\\\r\\\\n\\\\f])", "g"), ne2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, re2 = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g, ie2 = function(e3, t3) {
      return t3 ? "\\0" === e3 ? "�" : e3.slice(0, -1) + "\\\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\\\" + e3;
    }, oe2 = function() {
      T2();
    }, ae2 = be2(function(e3) {
      return true === e3.disabled && "fieldset" === e3.nodeName.toLowerCase();
    }, { dir: "parentNode", next: "legend" });
    try {
      H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
    } catch (e3) {
      H2 = { apply: t2.length ? function(e4, t3) {
        L2.apply(e4, O2.call(t3));
      } : function(e4, t3) {
        var n3 = e4.length, r3 = 0;
        while (e4[n3++] = t3[r3++])
          ;
        e4.length = n3 - 1;
      } };
    }
    function se2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3)
        return n3;
      if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
        if (11 !== p3 && (u3 = Z2.exec(t3)))
          if (i3 = u3[1]) {
            if (9 === p3) {
              if (!(a3 = e3.getElementById(i3)))
                return n3;
              if (a3.id === i3)
                return n3.push(a3), n3;
            } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3)
              return n3.push(a3), n3;
          } else {
            if (u3[2])
              return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
            if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName)
              return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
          }
        if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (1 !== p3 || "object" !== e3.nodeName.toLowerCase())) {
          if (c3 = t3, f3 = e3, 1 === p3 && (U2.test(t3) || z2.test(t3))) {
            (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
            while (o3--)
              l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return H2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            N2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return g2(t3.replace($2, "$1"), e3, n3, r3);
    }
    function ue2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function le2(e3) {
      return e3[S2] = true, e3;
    }
    function ce2(e3) {
      var t3 = C2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function fe2(e3, t3) {
      var n3 = e3.split("|"), r3 = n3.length;
      while (r3--)
        b2.attrHandle[n3[r3]] = t3;
    }
    function pe2(e3, t3) {
      var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
      if (r3)
        return r3;
      if (n3) {
        while (n3 = n3.nextSibling)
          if (n3 === t3)
            return -1;
      }
      return e3 ? 1 : -1;
    }
    function de2(t3) {
      return function(e3) {
        return "input" === e3.nodeName.toLowerCase() && e3.type === t3;
      };
    }
    function he2(n3) {
      return function(e3) {
        var t3 = e3.nodeName.toLowerCase();
        return ("input" === t3 || "button" === t3) && e3.type === n3;
      };
    }
    function ge2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function ve2(a3) {
      return le2(function(o3) {
        return o3 = +o3, le2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--)
            e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function ye2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
      var t3 = e3.namespaceURI, n3 = (e3.ownerDocument || e3).documentElement;
      return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
    }, T2 = se2.setDocument = function(e3) {
      var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
      return r3 != C2 && 9 === r3.nodeType && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
        return a2.appendChild(e4).appendChild(C2.createElement("div")), "undefined" != typeof e4.querySelectorAll && !e4.querySelectorAll(":scope fieldset div").length;
      }), d2.attributes = ce2(function(e4) {
        return e4.className = "i", !e4.getAttribute("className");
      }), d2.getElementsByTagName = ce2(function(e4) {
        return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
      }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
        return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
      }), d2.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(te2, ne2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(te2, ne2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && E2) {
          var n4, r4, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
              return [o3];
            i3 = t4.getElementsByName(e4), r4 = 0;
            while (o3 = i3[r4++])
              if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                return [o3];
          }
          return [];
        }
      }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
      } : function(e4, t4) {
        var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
        if ("*" === e4) {
          while (n4 = o3[i3++])
            1 === n4.nodeType && r4.push(n4);
          return r4;
        }
        return o3;
      }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && E2)
          return t4.getElementsByClassName(e4);
      }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
        var t4;
        a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\\r\\\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + \`*(?:''|"")\`), e4.querySelectorAll("[selected]").length || v2.push("\\\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\\\[" + M2 + "*name" + M2 + "*=" + M2 + \`*(?:''|"")\`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\\\\f"), v2.push("[\\\\r\\\\n\\\\f]");
      }), ce2(function(e4) {
        e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t4 = C2.createElement("input");
        t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
      })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
        d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
      }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
        var n4 = 9 === e4.nodeType ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
        return e4 === r4 || !(!r4 || 1 !== r4.nodeType || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
      } : function(e4, t4) {
        if (t4) {
          while (t4 = t4.parentNode)
            if (t4 === e4)
              return true;
        }
        return false;
      }, D2 = t3 ? function(e4, t4) {
        if (e4 === t4)
          return l2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
      } : function(e4, t4) {
        if (e4 === t4)
          return l2 = true, 0;
        var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
        if (!i3 || !o3)
          return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
        if (i3 === o3)
          return pe2(e4, t4);
        n4 = e4;
        while (n4 = n4.parentNode)
          a3.unshift(n4);
        n4 = t4;
        while (n4 = n4.parentNode)
          s3.unshift(n4);
        while (a3[r4] === s3[r4])
          r4++;
        return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
      }), C2;
    }, se2.matches = function(e3, t3) {
      return se2(e3, null, null, t3);
    }, se2.matchesSelector = function(e3, t3) {
      if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3)))
        try {
          var n3 = c2.call(e3, t3);
          if (n3 || d2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
            return n3;
        } catch (e4) {
          N2(t3, true);
        }
      return 0 < se2(t3, C2, null, [e3]).length;
    }, se2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
    }, se2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != C2 && T2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && j2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
      return void 0 !== r3 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }, se2.escape = function(e3) {
      return (e3 + "").replace(re2, ie2);
    }, se2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, se2.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(D2), l2) {
        while (t3 = e3[i3++])
          t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--)
          e3.splice(n3[r3], 1);
      }
      return u2 = null, e3;
    }, o2 = se2.getText = function(e3) {
      var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
      if (i3) {
        if (1 === i3 || 9 === i3 || 11 === i3) {
          if ("string" == typeof e3.textContent)
            return e3.textContent;
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
            n3 += o2(e3);
        } else if (3 === i3 || 4 === i3)
          return e3.nodeValue;
      } else
        while (t3 = e3[r3++])
          n3 += o2(t3);
      return n3;
    }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && se2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(te2, ne2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return e4.nodeName && e4.nodeName.toLowerCase() === t3;
      };
    }, CLASS: function(e3) {
      var t3 = m2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = se2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(h3, e3, t3, g3, v3) {
      var y3 = "nth" !== h3.slice(0, 3), m3 = "last" !== h3.slice(-4), x3 = "of-type" === e3;
      return 1 === g3 && 0 === v3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
        if (c3) {
          if (y3) {
            while (l3) {
              a3 = e4;
              while (a3 = a3[l3])
                if (x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType)
                  return false;
              u3 = l3 = "only" === h3 && !u3 && "nextSibling";
            }
            return true;
          }
          if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
            d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
            while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
              if (1 === a3.nodeType && ++d3 && a3 === e4) {
                i3[h3] = [k2, s3, d3];
                break;
              }
          } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), false === d3) {
            while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
              if ((x3 ? a3.nodeName.toLowerCase() === f3 : 1 === a3.nodeType) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4))
                break;
          }
          return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--)
          e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: le2(function(e3) {
      var r3 = [], i3 = [], s3 = f2(e3.replace($2, "$1"));
      return s3[S2] ? le2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--)
          (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: le2(function(t3) {
      return function(e3) {
        return 0 < se2(t3, e3).length;
      };
    }), contains: le2(function(t3) {
      return t3 = t3.replace(te2, ne2), function(e3) {
        return -1 < (e3.textContent || o2(e3)).indexOf(t3);
      };
    }), lang: le2(function(n3) {
      return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
            return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = n2.location && n2.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === a2;
    }, focus: function(e3) {
      return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
        if (e3.nodeType < 6)
          return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return J2.test(e3.nodeName);
    }, input: function(e3) {
      return Q2.test(e3.nodeName);
    }, button: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && "button" === e3.type || "button" === t3;
    }, text: function(e3) {
      var t3;
      return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: ve2(function() {
      return [0];
    }), last: ve2(function(e3, t3) {
      return [t3 - 1];
    }), eq: ve2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: ve2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), odd: ve2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), lt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
        e3.push(r3);
      return e3;
    }), gt: ve2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
        e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
      b2.pseudos[e2] = de2(e2);
    for (e2 in { submit: true, reset: true })
      b2.pseudos[e2] = he2(e2);
    function me2() {
    }
    function xe2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
        r3 += e3[t3].value;
      return r3;
    }
    function be2(s3, e3, t3) {
      var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && "parentNode" === c3, p3 = r2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[u3])
          if (1 === e4.nodeType || f3)
            return s3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3 = [k2, p3];
        if (n3) {
          while (e4 = e4[u3])
            if ((1 === e4.nodeType || f3) && s3(e4, t4, n3))
              return true;
        } else
          while (e4 = e4[u3])
            if (1 === e4.nodeType || f3)
              if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase())
                e4 = e4[u3] || e4;
              else {
                if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3)
                  return a3[2] = r3[2];
                if ((i3[c3] = a3)[2] = s3(e4, t4, n3))
                  return true;
              }
        return false;
      };
    }
    function we2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--)
          if (!i3[r3](e3, t3, n3))
            return false;
        return true;
      } : i3[0];
    }
    function Te2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
        (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function Ce2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
            se2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
        if (g3 && g3(f3, p3, n3, r3), v3) {
          i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--)
            (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = p3.length;
              while (o3--)
                (a3 = p3[o3]) && i3.push(f3[o3] = a3);
              y3(null, p3 = [], i3, r3);
            }
            o3 = p3.length;
            while (o3--)
              (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else
          p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
      });
    }
    function Ee2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = be2(function(e4) {
        return -1 < P2(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++)
        if (t3 = b2.relative[e3[s3].type])
          c3 = [be2(we2(c3), t3)];
        else {
          if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
            for (n3 = ++s3; n3 < r3; n3++)
              if (b2.relative[e3[n3].type])
                break;
            return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace($2, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
          }
          c3.push(t3);
        }
      return we2(c3);
    }
    return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
      if (l3)
        return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($2, " ") }), a3 = a3.slice(n3.length)), b2.filter)
          !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3)
          break;
      }
      return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
    }, f2 = se2.compile = function(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
      if (!a3) {
        t3 || (t3 = h2(e3)), n3 = t3.length;
        while (n3--)
          (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
              while (s3 = v3[a4++])
                if (s3(o4, t4 || C2, n4)) {
                  r4.push(o4);
                  break;
                }
              i4 && (k2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++])
              s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3)
                while (l3--)
                  c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
              f3 = Te2(f3);
            }
            H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
          }
          return i4 && (k2 = h3, w2 = p3), c3;
        }, m3 ? le2(r3) : r3))).selector = e3;
      }
      return a3;
    }, g2 = se2.select = function(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && E2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0]))
            return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = G2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type])
            break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3)))
              return H2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
    }, d2.sortStable = S2.split("").sort(D2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
      return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
    }), ce2(function(e3) {
      return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
    }) || fe2("type|href|height|width", function(e3, t3, n3) {
      if (!n3)
        return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
    }), d2.attributes && ce2(function(e3) {
      return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
    }) || fe2("value", function(e3, t3, n3) {
      if (!n3 && "input" === e3.nodeName.toLowerCase())
        return e3.defaultValue;
    }), ce2(function(e3) {
      return null == e3.getAttribute("disabled");
    }) || fe2(R2, function(e3, t3, n3) {
      var r3;
      if (!n3)
        return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }), se2;
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType)
      if (1 === e2.nodeType) {
        if (i2 && S(e2).is(n2))
          break;
        r2.push(e2);
      }
    return r2;
  }, T = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling)
      1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, k = S.expr.match.needsContext;
  function A(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  var N = /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i;
  function D(e2, n2, r2) {
    return m(n2) ? S.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? S.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? S.grep(e2, function(e3) {
      return -1 < i.call(n2, e3) !== r2;
    }) : S.filter(n2, e2, r2);
  }
  S.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, S.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2)
      return this.pushStack(S(e2).filter(function() {
        for (t2 = 0; t2 < r2; t2++)
          if (S.contains(i2[t2], this))
            return true;
      }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
      S.find(e2, i2[t2], n2);
    return 1 < r2 ? S.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(D(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(D(this, e2 || [], true));
  }, is: function(e2) {
    return !!D(this, "string" == typeof e2 && k.test(e2) ? S(e2) : e2 || [], false).length;
  } });
  var j, q = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/;
  (S.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2)
      return this;
    if (n2 = n2 || j, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2)
        return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2))
          for (r2 in t2)
            m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
  function O(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType)
      ;
    return e2;
  }
  S.fn.extend({ has: function(e2) {
    var t2 = S(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++)
        if (S.contains(this, t2[e3]))
          return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && S(e2);
    if (!k.test(e2)) {
      for (; r2 < i2; r2++)
        for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
          if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && S.find.matchesSelector(n2, e2))) {
            o2.push(n2);
            break;
          }
    }
    return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), S.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return h(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return h(e2, "parentNode", n2);
  }, next: function(e2) {
    return O(e2, "nextSibling");
  }, prev: function(e2) {
    return O(e2, "previousSibling");
  }, nextAll: function(e2) {
    return h(e2, "nextSibling");
  }, prevAll: function(e2) {
    return h(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return h(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return h(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return T((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return T(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
  } }, function(r2, i2) {
    S.fn[r2] = function(e2, t2) {
      var n2 = S.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var P = /[^\\x20\\t\\r\\n\\f]+/g;
  function R(e2) {
    return e2;
  }
  function M(e2) {
    throw e2;
  }
  function I(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  S.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : S.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length)
          false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        S.each(e3, function(e4, t3) {
          m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== w(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return S.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = S.inArray(t3, s2, n3)))
          s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, S.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return S.Deferred(function(r2) {
        S.each(o2, function(e3, t2) {
          var n2 = m(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise())
                throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
        };
      }
      return S.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? S.extend(e3, a2) : a2;
    } }, s2 = {};
    return S.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || m(i2[t2] && i2[t2].then)))
      return o2.then();
    while (t2--)
      I(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function(e2, t2) {
    C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, S.readyException = function(e2) {
    C.setTimeout(function() {
      throw e2;
    });
  };
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  S.fn.ready = function(e2) {
    return F.then(e2)["catch"](function(e3) {
      S.readyException(e3);
    }), this;
  }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
  } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === w(n2))
      for (s2 in i2 = true, n2)
        $(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(S(e3), n3);
    })), t2))
      for (; s2 < u2; s2++)
        t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, _ = /^-ms-/, z = /-([a-z])/g;
  function U(e2, t2) {
    return t2.toUpperCase();
  }
  function X(e2) {
    return e2.replace(_, "ms-").replace(z, U);
  }
  var V = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  G.uid = 1, G.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2)
      i2[X(t2)] = n2;
    else
      for (r2 in t2)
        i2[X(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
        while (n2--)
          delete r2[t2[n2]];
      }
      (void 0 === t2 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !S.isEmptyObject(t2);
  } };
  var Y = new G(), Q = new G(), J = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/, K = /[A-Z]/g;
  function Z(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType)
      if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
        try {
          n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
        } catch (e3) {
        }
        Q.set(e2, t2, n2);
      } else
        n2 = void 0;
    return n2;
  }
  S.extend({ hasData: function(e2) {
    return Q.hasData(e2) || Y.hasData(e2);
  }, data: function(e2, t2, n2) {
    return Q.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    Q.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return Y.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    Y.remove(e2, t2);
  } }), S.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = Q.get(o2), 1 === o2.nodeType && !Y.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--)
          a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
        Y.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      Q.set(this, n2);
    }) : $(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3)
        return void 0 !== (t3 = Q.get(o2, n2)) ? t3 : void 0 !== (t3 = Z(o2, n2)) ? t3 : void 0;
      this.each(function() {
        Q.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      Q.remove(this, e2);
    });
  } }), S.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2)
      return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      S.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
      Y.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), S.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = S.queue(this, t2, n2);
      S._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && S.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      S.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--)
      (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var ee = /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
    return S.contains(e2.ownerDocument, e2);
  }, oe = { composed: true };
  re.getRootNode && (ie = function(e2) {
    return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
  });
  var ae = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && ie(e2) && "none" === S.css(e2, "display");
  };
  function se(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return S.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || "px" !== l2 && +u2) && te.exec(S.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--)
        S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ue = {};
  function le(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
      (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ue[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", Y.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++)
      null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  S.fn.extend({ show: function() {
    return le(this, true);
  }, hide: function() {
    return le(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ae(this) ? S(this).show() : S(this).hide();
    });
  } });
  var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i, he = /^$|^module$|\\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function ve(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
  }
  function ye(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
      Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\\w+;/;
  function xe(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++)
      if ((o2 = e2[d2]) || 0 === o2)
        if ("object" === w(o2))
          S.merge(p2, o2.nodeType ? [o2] : o2);
        else if (me.test(o2)) {
          a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
          while (c2--)
            a2 = a2.lastChild;
          S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
        } else
          p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++])
      if (r2 && -1 < S.inArray(o2, r2))
        i2 && i2.push(o2);
      else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
        c2 = 0;
        while (o2 = a2[c2++])
          he.test(o2.type || "") && n2.push(o2);
      }
    return f2;
  }
  var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\\.(.+)|)/;
  function Ce() {
    return true;
  }
  function Ee() {
    return false;
  }
  function Se(e2, t2) {
    return e2 === function() {
      try {
        return E.activeElement;
      } catch (e3) {
      }
    }() == ("focus" === t2);
  }
  function ke(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
        ke(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
      i2 = Ee;
    else if (!i2)
      return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return S().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
      S.event.add(this, t2, i2, r2, n2);
    });
  }
  function Ae(e2, i2, o2) {
    o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
      var t2, n2, r2 = Y.get(this, i2);
      if (1 & e3.isTrigger && this[i2]) {
        if (r2.length)
          (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
        else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2)
          return e3.stopImmediatePropagation(), e3.preventDefault(), n2.value;
      } else
        r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
    } })) : void 0 === Y.get(e2, i2) && S.event.add(e2, i2, Ce);
  }
  S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
    if (V(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof S && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
      while (l2--)
        d2 = g2 = (s2 = Te.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(P) || [""]).length;
      while (l2--)
        if (d2 = g2 = (s2 = Te.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
          f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\\\.)" + h2.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)"), a2 = o2 = p2.length;
          while (o2--)
            c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
          a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
        } else
          for (d2 in u2)
            S.event.remove(e2, d2 + t2[l2], n2, r2, true);
      S.isEmptyObject(u2) && Y.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
      s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
          u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this)
        if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
          for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
            void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
      if (this.originalEvent)
        return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent)
        return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[S.expando] ? e2 : new S.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Ae(t2, "click", Ce), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Ae(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, S.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, S.Event = function(e2, t2) {
    if (!(this instanceof S.Event))
      return new S.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ce : Ee, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
  }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ce, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ce, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ce, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(e2) {
    var t2 = e2.button;
    return null == e2.which && be.test(e2.type) ? null != e2.charCode ? e2.charCode : e2.keyCode : !e2.which && void 0 !== t2 && we.test(e2.type) ? 1 & t2 ? 1 : 2 & t2 ? 3 : 4 & t2 ? 2 : 0 : e2.which;
  } }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
    S.event.special[e2] = { setup: function() {
      return Ae(this, e2, Se), false;
    }, trigger: function() {
      return Ae(this, e2), true;
    }, delegateType: t2 };
  }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), S.fn.extend({ on: function(e2, t2, n2, r2) {
    return ke(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return ke(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj)
      return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2)
        this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Ee), this.each(function() {
      S.event.remove(this, e2, n2, t2);
    });
  } });
  var Ne = /<script|<style|<link/i, De = /checked\\s*(?:[^=]|=\\s*.checked.)/i, je = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;
  function qe(e2, t2) {
    return A(e2, "table") && A(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
  }
  function Le(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function He(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Oe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (Y.hasData(e2) && (s2 = Y.get(e2).events))
        for (i2 in Y.remove(t2, "handle events"), s2)
          for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
            S.event.add(t2, i2, s2[i2][n2]);
      Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
    }
  }
  function Pe(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !y.checkClone && De.test(d2))
      return n2.each(function(e3) {
        var t3 = n2.eq(e3);
        h2 && (r2[0] = d2.call(this, e3, t3.html())), Pe(t3, r2, i2, o2);
      });
    if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = S.map(ve(e2, "script"), Le)).length; c2 < f2; c2++)
        u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2)
        for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, He), c2 = 0; c2 < s2; c2++)
          u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(je, ""), u2, l2));
    }
    return n2;
  }
  function Re(e2, t2, n2) {
    for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
      n2 || 1 !== r2.nodeType || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  S.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
    if (!(y.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || S.isXMLDoc(e2)))
      for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++)
        s2 = o2[r2], u2 = a2[r2], "input" === (l2 = u2.nodeName.toLowerCase()) && pe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2)
      if (n2)
        for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
          Oe(o2[r2], a2[r2]);
      else
        Oe(e2, c2);
    return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = S.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
      if (V(n2)) {
        if (t2 = n2[Y.expando]) {
          if (t2.events)
            for (r2 in t2.events)
              i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
          n2[Y.expando] = void 0;
        }
        n2[Q.expando] && (n2[Q.expando] = void 0);
      }
  } }), S.fn.extend({ detach: function(e2) {
    return Re(this, e2, true);
  }, remove: function(e2) {
    return Re(this, e2);
  }, text: function(e2) {
    return $(this, function(e3) {
      return void 0 === e3 ? S.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return Pe(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return Pe(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = qe(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return Pe(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return Pe(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
      1 === e2.nodeType && (S.cleanData(ve(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return S.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return $(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType)
        return t2.innerHTML;
      if ("string" == typeof e3 && !Ne.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = S.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++)
            1 === (t2 = this[n2] || {}).nodeType && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return Pe(this, arguments, function(e2) {
      var t2 = this.parentNode;
      S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    S.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
        t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Ie = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
  }, We = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2)
      o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2)
      e2.style[i2] = o2[i2];
    return r2;
  }, Fe = new RegExp(ne.join("|"), "i");
  function Be(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.style;
    return (n2 = n2 || Ie(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Me.test(a2) && Fe.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function $e(e2, t2) {
    return { get: function() {
      if (!e2())
        return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
        var e3 = C.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), re.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l2.style.backgroundClip, S.extend(y, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px", t3.style.height = "1px", n3.style.height = "9px", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = 3 < parseInt(r3.height), re.removeChild(e3)), a2;
    } }));
  }();
  var _e = ["Webkit", "Moz", "ms"], ze = E.createElement("div").style, Ue = {};
  function Xe(e2) {
    var t2 = S.cssProps[e2] || Ue[e2];
    return t2 || (e2 in ze ? e2 : Ue[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = _e.length;
      while (n2--)
        if ((e3 = _e[n2] + t3) in ze)
          return e3;
    }(e2) || e2);
  }
  var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Ye = { position: "absolute", visibility: "hidden", display: "block" }, Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e2, t2, n2) {
    var r2 = te.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function Ke(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
    if (n2 === (r2 ? "border" : "content"))
      return 0;
    for (; a2 < 4; a2 += 2)
      "margin" === n2 && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), "margin" !== n2 && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), "padding" !== n2 ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
  }
  function Ze(e2, t2, n2) {
    var r2 = Ie(e2), i2 = (!y.boxSizingReliable() || n2) && "border-box" === S.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Be(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (Me.test(a2)) {
      if (!n2)
        return a2;
      a2 = "auto";
    }
    return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === S.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === S.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Ke(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function et(e2, t2, n2, r2, i2) {
    return new et.prototype.init(e2, t2, n2, r2, i2);
  }
  S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Be(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = X(t2), u2 = Ge.test(t2), l2 = e2.style;
      if (u2 || (t2 = Xe(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], void 0 === n2)
        return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = X(t2);
    return Ge.test(t2) || (t2 = Xe(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Be(e2, t2, r2)), "normal" === i2 && t2 in Qe && (i2 = Qe[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), S.each(["height", "width"], function(e2, u2) {
    S.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2)
        return !Ve.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Ze(e3, u2, n2) : We(e3, Ye, function() {
          return Ze(e3, u2, n2);
        });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Ie(e3), o2 = !y.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === S.css(e3, "boxSizing", false, i2), s2 = n2 ? Ke(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Ke(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Je(0, t2, s2);
    } };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e2, t2) {
    if (t2)
      return (parseFloat(Be(e2, "marginLeft")) || e2.getBoundingClientRect().left - We(e2, { marginLeft: 0 }, function() {
        return e2.getBoundingClientRect().left;
      })) + "px";
  }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    S.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
        n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (S.cssHooks[i2 + o2].set = Je);
  }), S.fn.extend({ css: function(e2, t2) {
    return $(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Ie(e3), i2 = t3.length; a2 < i2; a2++)
          o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? S.style(e3, t3, n2) : S.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((S.Tween = et).prototype = { constructor: et, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = et.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : et.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = et.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : et.propHooks._default.set(this), this;
  } }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !S.cssHooks[e2.prop] && null == e2.elem.style[Xe(e2.prop)] ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = et.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, S.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {};
  var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
  function st() {
    nt && (false === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }
  function ut() {
    return C.setTimeout(function() {
      tt = void 0;
    }), tt = Date.now();
  }
  function lt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2)
      i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function ct(e2, t2, n2) {
    for (var r2, i2 = (ft.tweeners[t2] || []).concat(ft.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++)
      if (r2 = i2[o2].call(n2, t2, e2))
        return r2;
  }
  function ft(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = ft.prefilters.length, s2 = S.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2)
        return false;
      for (var e3 = tt || ut(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++)
        l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: tt || ut(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2)
        return this;
      for (a2 = true; t3 < n3; t3++)
        l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3)
        if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3)
          for (n3 in o3 = a3.expand(o3), delete e3[r3], o3)
            n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
        else
          t3[r3] = i3;
    }(c2, l2.opts.specialEasing); r2 < i2; r2++)
      if (n2 = ft.prefilters[r2].call(l2, o2, c2, l2.opts))
        return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return S.map(c2, ct, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  S.Animation = S.extend(ft, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return se(n2.elem, e2, te.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++)
      n2 = e2[r2], ft.tweeners[n2] = ft.tweeners[n2] || [], ft.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = S._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2)
      if (i2 = t2[r2], ot.test(i2)) {
        if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
          if ("show" !== i2 || !v2 || void 0 === v2[r2])
            continue;
          g2 = true;
        }
        d2[r2] = v2 && v2[r2] || S.style(e2, r2);
      }
    if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2))
      for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = Y.get(e2, "display")), "none" === (c2 = S.css(e2, "display")) && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === S.css(e2, "float") && (u2 || (p2.done(function() {
        h2.display = l2;
      }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
        h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
      })), u2 = false, d2)
        u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
          for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2)
            S.style(e2, r2, d2[r2]);
        })), u2 = ct(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? ft.prefilters.unshift(e2) : ft.prefilters.push(e2);
  } }), S.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
    return S.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
    }, r2;
  }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
      var e3 = ft(this, S.extend({}, t2), o2);
      (i2 || Y.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
      if (t2)
        r2[t2] && r2[t2].stop && a2(r2[t2]);
      else
        for (t2 in r2)
          r2[t2] && r2[t2].stop && at.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; )
        n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || S.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; )
        i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++)
        n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = S.fn[r2];
    S.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(lt(r2, true), e3, t2, n2);
    };
  }), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    S.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), S.timers = [], S.fx.tick = function() {
    var e2, t2 = 0, n2 = S.timers;
    for (tt = Date.now(); t2 < n2.length; t2++)
      (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function(e2) {
    S.timers.push(e2), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function() {
    nt || (nt = true, st());
  }, S.fx.stop = function() {
    nt = null;
  }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
    return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = C.setTimeout(e3, r2);
      t2.stop = function() {
        C.clearTimeout(n2);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt, dt = S.expr.attrHandle;
  S.fn.extend({ attr: function(e2, t2) {
    return $(this, S.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      S.removeAttr(this, e2);
    });
  } }), S.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return "undefined" == typeof e2.getAttribute ? S.prop(e2, t2, n2) : (1 === o2 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? pt : void 0)), void 0 !== n2 ? null === n2 ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = S.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!y.radioValue && "radio" === t2 && A(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(P);
    if (i2 && 1 === e2.nodeType)
      while (n2 = i2[r2++])
        e2.removeAttribute(n2);
  } }), pt = { set: function(e2, t2, n2) {
    return false === t2 ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, S.each(S.expr.match.bool.source.match(/\\w+/g), function(e2, t2) {
    var a2 = dt[t2] || S.find.attr;
    dt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = dt[o2], dt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, dt[o2] = i2), r2;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i, gt = /^(?:a|area)$/i;
  function vt(e2) {
    return (e2.match(P) || []).join(" ");
  }
  function yt(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function mt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(P) || [];
  }
  S.fn.extend({ prop: function(e2, t2) {
    return $(this, S.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[S.propFix[e2] || e2];
    });
  } }), S.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return 1 === o2 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = S.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : ht.test(e2.nodeName) || gt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (m(t2))
      return this.each(function(e3) {
        S(this).addClass(t2.call(this, e3, yt(this)));
      });
    if ((e2 = mt(t2)).length) {
      while (n2 = this[u2++])
        if (i2 = yt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
          a2 = 0;
          while (o2 = e2[a2++])
            r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
          i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
        }
    }
    return this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (m(t2))
      return this.each(function(e3) {
        S(this).removeClass(t2.call(this, e3, yt(this)));
      });
    if (!arguments.length)
      return this.attr("class", "");
    if ((e2 = mt(t2)).length) {
      while (n2 = this[u2++])
        if (i2 = yt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
          a2 = 0;
          while (o2 = e2[a2++])
            while (-1 < r2.indexOf(" " + o2 + " "))
              r2 = r2.replace(" " + o2 + " ", " ");
          i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
        }
    }
    return this;
  }, toggleClass: function(i2, t2) {
    var o2 = typeof i2, a2 = "string" === o2 || Array.isArray(i2);
    return "boolean" == typeof t2 && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
      S(this).toggleClass(i2.call(this, e2, yt(this), t2), t2);
    }) : this.each(function() {
      var e2, t3, n2, r2;
      if (a2) {
        t3 = 0, n2 = S(this), r2 = mt(i2);
        while (e2 = r2[t3++])
          n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
      } else
        void 0 !== i2 && "boolean" !== o2 || ((e2 = yt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || false === i2 ? "" : Y.get(this, "__className__") || ""));
    });
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++])
      if (1 === n2.nodeType && -1 < (" " + vt(yt(n2)) + " ").indexOf(t2))
        return true;
    return false;
  } });
  var xt = /\\r/g;
  S.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = m(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(xt, "") : null == e2 ? "" : e2 : void 0;
  } }), S.extend({ valHooks: { option: { get: function(e2) {
    var t2 = S.find.attr(e2, "value");
    return null != t2 ? t2 : vt(S.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
      if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
        if (t2 = S(n2).val(), a2)
          return t2;
        s2.push(t2);
      }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
    while (a2--)
      ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), S.each(["radio", "checkbox"], function() {
    S.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2))
        return e2.checked = -1 < S.inArray(S(e2).val(), t2);
    } }, y.checkOn || (S.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), y.focusin = "onfocusin" in C;
  var bt = /^(?:focusinfocus|focusoutblur)$/, wt = function(e2) {
    e2.stopPropagation();
  };
  S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || E, 3 !== n2.nodeType && 8 !== n2.nodeType && !bt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\\\.)" + h2.join("\\\\.(?:.*\\\\.|)") + "(\\\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !x(n2)) {
        for (s2 = c2.delegateType || d2, bt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
          p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped())
        f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, wt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, wt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
    S.event.trigger(r2, null, t2);
  } }), S.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      S.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2)
      return S.event.trigger(e2, t2, n2, true);
  } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
    var i2 = function(e2) {
      S.event.simulate(r2, e2.target, S.event.fix(e2));
    };
    S.event.special[r2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
      t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
      t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
    } };
  });
  var Tt = C.location, Ct = { guid: Date.now() }, Et = /\\?/;
  S.parseXML = function(e2) {
    var t2;
    if (!e2 || "string" != typeof e2)
      return null;
    try {
      t2 = new C.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
      t2 = void 0;
    }
    return t2 && !t2.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e2), t2;
  };
  var St = /\\[\\]$/, kt = /\\r?\\n/g, At = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2))
      S.each(e2, function(e3, t3) {
        r2 || St.test(n2) ? i2(n2, t3) : Dt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
      });
    else if (r2 || "object" !== w(e2))
      i2(n2, e2);
    else
      for (t2 in e2)
        Dt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  S.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = m(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2)
      return "";
    if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2))
      S.each(e2, function() {
        i2(this.name, this.value);
      });
    else
      for (n2 in e2)
        Dt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, S.fn.extend({ serialize: function() {
    return S.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = S.prop(this, "elements");
      return e2 ? S.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e2) && (this.checked || !pe.test(e2));
    }).map(function(e2, t2) {
      var n2 = S(this).val();
      return null == n2 ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(kt, "\\r\\n") };
      }) : { name: t2.name, value: n2.replace(kt, "\\r\\n") };
    }).get();
  } });
  var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \\t]*([^\\r\\n]*)$/gm, Ot = /^(?:GET|HEAD)$/, Pt = /^\\/\\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");
  function Ft(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
      if (m(t2))
        while (n2 = i2[r2++])
          "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Bt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === Mt;
    function l2(e2) {
      var r2;
      return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function $t(e2, t2) {
    var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
    for (n2 in t2)
      void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && S.extend(true, e2, r2), e2;
  }
  Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\\bxml\\b/, html: /\\bhtml/, json: /\\bjson\\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? $t($t(e2, S.ajaxSettings), t2) : $t(S.ajaxSettings, e2);
  }, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Ht.exec(p2))
            n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3)
        if (h2)
          T2.always(e3[T2.status]);
        else
          for (t3 in e3)
            w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], null == v2.crossDomain) {
      r2 = E.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Wt.protocol + "//" + Wt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = S.param(v2.data, v2.traditional)), Bt(Rt, v2, t2, T2), h2)
      return T2;
    for (i2 in (g2 = S.event && v2.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ot.test(v2.type), f2 = v2.url.replace(qt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(jt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (Et.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(Lt, "$1"), o2 = (Et.test(f2) ? "&" : "?") + "_=" + Ct.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
      T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2))
      return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Bt(Mt, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
        return T2;
      v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2)
          throw e3;
        l2(-1, e3);
      }
    } else
      l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0])
          u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4)
            if (s4[i4] && s4[i4].test(r4)) {
              u4.unshift(i4);
              break;
            }
        }
        if (u4[0] in n4)
          o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4)
          return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && (v2.converters["text script"] = function() {
      }), s3 = function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1])
          for (a4 in e4.converters)
            l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4)
          if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
            if ("*" === o4)
              o4 = u4;
            else if ("*" !== u4 && u4 !== o4) {
              if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                for (i4 in l4)
                  if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                    true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                    break;
                  }
              }
              if (true !== a4)
                if (a4 && e4["throws"])
                  t4 = a4(t4);
                else
                  try {
                    t4 = a4(t4);
                  } catch (e5) {
                    return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                  }
            }
          }
        return { state: "success", data: t4 };
      }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return S.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return S.get(e2, void 0, t2, "script");
  } }), S.each(["get", "post"], function(e2, i2) {
    S[i2] = function(e3, t2, n2, r2) {
      return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
    };
  }), S.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers)
      "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), S._evalUrl = function(e2, t2, n2) {
    return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      S.globalEval(e3, t2, n2);
    } });
  }, S.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild)
        e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return m(n2) ? this.each(function(e2) {
      S(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = S(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = m(t2);
    return this.each(function(e2) {
      S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      S(this).replaceWith(this.childNodes);
    }), this;
  } }), S.expr.pseudos.hidden = function(e2) {
    return !S.expr.pseudos.visible(e2);
  }, S.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, S.ajaxSettings.xhr = function() {
    try {
      return new C.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var _t = { 0: 200, 1223: 204 }, zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i2) {
    var o2, a2;
    if (y.cors || zt && !i2.crossDomain)
      return { send: function(e2, t2) {
        var n2, r2 = i2.xhr();
        if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields)
          for (n2 in i2.xhrFields)
            r2[n2] = i2.xhrFields[n2];
        for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2)
          r2.setRequestHeader(n2, e2[n2]);
        o2 = function(e3) {
          return function() {
            o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(_t[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
          };
        }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
          4 === r2.readyState && C.setTimeout(function() {
            o2 && a2();
          });
        }, o2 = o2("abort");
        try {
          r2.send(i2.hasContent && i2.data || null);
        } catch (e3) {
          if (o2)
            throw e3;
        }
      }, abort: function() {
        o2 && o2();
      } };
  }), S.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\\b(?:java|ecma)script\\b/ }, converters: { "text script": function(e2) {
    return S.globalEval(e2), e2;
  } } }), S.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), S.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs)
      return { send: function(e2, t2) {
        r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
          r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
        }), E.head.appendChild(r2[0]);
      }, abort: function() {
        i2 && i2();
      } };
  });
  var Ut, Xt = [], Vt = /(=)\\?(?=&|$)|\\?\\?/;
  S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Xt.pop() || S.expando + "_" + Ct.guid++;
    return this[e2] = true, e2;
  } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Vt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0])
      return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Vt, "$1" + r2) : false !== e2.jsonp && (e2.url += (Et.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
        return o2 || S.error(r2 + " was not called"), o2[0];
      }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
        o2 = arguments;
      }, n2.always(function() {
        void 0 === i2 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Xt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
      }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, S.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = vt(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, S.expr.pseudos.animated = function(t2) {
    return S.grep(S.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, S.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : ("number" == typeof f2.top && (f2.top += "px"), "number" == typeof f2.left && (f2.left += "px"), c2.css(f2));
  } }, S.fn.extend({ offset: function(t2) {
    if (arguments.length)
      return void 0 === t2 ? this : this.each(function(e3) {
        S.offset.setOffset(this, t2, e3);
      });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === S.css(r2, "position"))
        t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === S.css(e2, "position"))
          e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === S.css(e2, "position"))
        e2 = e2.offsetParent;
      return e2 || re;
    });
  } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    S.fn[t2] = function(e2) {
      return $(this, function(e3, t3, n2) {
        var r2;
        if (x(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
          return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), S.each(["top", "left"], function(e2, n2) {
    S.cssHooks[n2] = $e(y.pixelPosition, function(e3, t2) {
      if (t2)
        return t2 = Be(e3, n2), Me.test(t2) ? S(e3).position()[n2] + "px" : t2;
    });
  }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
    S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      S.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return $(this, function(e3, t3, n3) {
          var r3;
          return x(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    S.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), S.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    S.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var Gt = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;
  S.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2))
      return r2 = s.call(arguments, 2), (i2 = function() {
        return e2.apply(t2 || this, r2.concat(s.call(arguments)));
      }).guid = e2.guid = e2.guid || S.guid++, i2;
  }, S.holdReady = function(e2) {
    e2 ? S.readyWait++ : S.ready(true);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
    var t2 = S.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, S.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return S;
  });
  var Yt = C.jQuery, Qt = C.$;
  return S.noConflict = function(e2) {
    return C.$ === S && (C.$ = Qt), e2 && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
var H5P$5 = window.H5P = window.H5P || {};
H5P$5.jQuery = jQuery.noConflict(true);
H5P$5.jQuery.fn.__originalLoad = H5P$5.jQuery.load;
H5P$5.jQuery.fn.load = function(url, params, callback) {
  if (typeof url === "function") {
    console.warn("You are using a deprecated H5P library. Please upgrade!");
    let args = Array.prototype.slice.call(arguments);
    args.unshift("load");
    return H5P$5.jQuery.fn.on.apply(this, args);
  }
  return H5P$5.jQuery.fn.__originalLoad.apply(this, arguments);
};
var H5P$4 = window.H5P = window.H5P || {};
H5P$4.isFramed = window.self !== window.parent;
H5P$4.$window = H5P$4.jQuery(window);
H5P$4.instances = [];
if (document.documentElement.requestFullscreen) {
  H5P$4.fullScreenBrowserPrefix = "";
} else if (document.documentElement.webkitRequestFullScreen) {
  H5P$4.safariBrowser = navigator.userAgent.match(/version\\/([.\\d]+)/i);
  H5P$4.safariBrowser = H5P$4.safariBrowser === null ? 0 : parseInt(H5P$4.safariBrowser[1]);
  if (H5P$4.safariBrowser === 0 || H5P$4.safariBrowser > 6) {
    H5P$4.fullScreenBrowserPrefix = "webkit";
  }
} else if (document.documentElement.mozRequestFullScreen) {
  H5P$4.fullScreenBrowserPrefix = "moz";
} else if (document.documentElement.msRequestFullscreen) {
  H5P$4.fullScreenBrowserPrefix = "ms";
}
H5P$4.opened = {};
H5P$4.init = function(target) {
  if (H5P$4.$body === void 0) {
    H5P$4.$body = H5P$4.jQuery(document.body);
  }
  if (H5P$4.fullscreenSupported === void 0) {
    H5P$4.fullscreenSupported = !H5PIntegration.fullscreenDisabled && !H5P$4.fullscreenDisabled && (!(H5P$4.isFramed && H5P$4.externalEmbed !== false) || !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled));
  }
  if (H5P$4.canHasFullScreen === void 0) {
    H5P$4.canHasFullScreen = H5P$4.fullscreenSupported;
  }
  H5P$4.jQuery(".h5p-content:not(.h5p-initialized)", target).each(function() {
    var $element = H5P$4.jQuery(this).addClass("h5p-initialized");
    var $container = H5P$4.jQuery('<div class="h5p-container"></div>').appendTo($element);
    var contentId = $element.data("content-id");
    var contentData = H5PIntegration.contents["cid-" + contentId];
    if (contentData === void 0) {
      return H5P$4.error("No data for content id " + contentId + ". Perhaps the library is gone?");
    }
    var library = {
      library: contentData.library,
      params: JSON.parse(contentData.jsonContent),
      metadata: contentData.metadata
    };
    var completeInit = function() {
      var instance2 = H5P$4.newRunnable(library, contentId, $container, true, { standalone: true });
      H5P$4.offlineRequestQueue = new H5P$4.OfflineRequestQueue({ instance: instance2 });
      if (contentData.fullScreen == 1 && H5P$4.fullscreenSupported) {
        H5P$4.jQuery(
          '<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' + H5P$4.t("fullscreen") + '" title="' + H5P$4.t("fullscreen") + '"></div></div>'
        ).prependTo($container).children().click(function() {
          H5P$4.fullScreen($container, instance2);
        }).keydown(function(e) {
          if (e.which === 32 || e.which === 13) {
            H5P$4.fullScreen($container, instance2);
            return false;
          }
        });
      }
      var displayOptions = contentData.displayOptions;
      var displayFrame = false;
      if (displayOptions.frame) {
        if (displayOptions.copyright) {
          var copyrights = H5P$4.getCopyrights(instance2, library.params, contentId, library.metadata);
          if (!copyrights) {
            displayOptions.copyright = false;
          }
        }
        var actionBar = new H5P$4.ActionBar(displayOptions);
        var $actions = actionBar.getDOMElement();
        actionBar.on("reuse", function() {
          H5P$4.openReuseDialog($actions, contentData, library, instance2, contentId);
          instance2.triggerXAPI("accessed-reuse");
        });
        actionBar.on("copyrights", function() {
          var dialog = new H5P$4.Dialog("copyrights", H5P$4.t("copyrightInformation"), copyrights, $container, $actions.find(".h5p-copyrights")[0]);
          dialog.open(true);
          instance2.triggerXAPI("accessed-copyright");
        });
        actionBar.on("embed", function() {
          H5P$4.openEmbedDialog($actions, contentData.embedCode, contentData.resizeCode, {
            width: $element.width(),
            height: $element.height()
          }, instance2);
          instance2.triggerXAPI("accessed-embed");
        });
        if (actionBar.hasActions()) {
          displayFrame = true;
          $actions.insertAfter($container);
        }
      }
      $element.addClass(displayFrame ? "h5p-frame" : "h5p-no-frame");
      H5P$4.opened[contentId] = /* @__PURE__ */ new Date();
      H5P$4.on(instance2, "finish", function(event) {
        if (event.data !== void 0) {
          H5P$4.setFinished(contentId, event.data.score, event.data.maxScore, event.data.time);
        }
      });
      H5P$4.on(instance2, "xAPI", H5P$4.xAPICompletedListener);
      if (H5PIntegration.saveFreq !== false && (instance2.getCurrentState instanceof Function || typeof instance2.getCurrentState === "function")) {
        var saveTimer, save = function() {
          var state = instance2.getCurrentState();
          if (state !== void 0) {
            H5P$4.setUserData(contentId, "state", state, { deleteOnChange: true });
          }
          if (H5PIntegration.saveFreq) {
            saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1e3);
          }
        };
        if (H5PIntegration.saveFreq) {
          saveTimer = setTimeout(save, H5PIntegration.saveFreq * 1e3);
        }
        H5P$4.on(instance2, "xAPI", function(event) {
          var verb = event.getVerb();
          if (verb === "completed" || verb === "progressed") {
            clearTimeout(saveTimer);
            saveTimer = setTimeout(save, 3e3);
          }
        });
      }
      if (H5P$4.isFramed) {
        var resizeDelay;
        if (H5P$4.externalEmbed === false) {
          var iframe = window.frameElement;
          var resizeIframe = function() {
            if (window.parent.H5P.isFullscreen) {
              return;
            }
            var parentHeight = iframe.parentElement.style.height;
            iframe.parentElement.style.height = iframe.parentElement.clientHeight + "px";
            iframe.getBoundingClientRect();
            iframe.style.height = "1px";
            iframe.style.height = iframe.contentDocument.body.scrollHeight + "px";
            iframe.parentElement.style.height = parentHeight;
          };
          H5P$4.on(instance2, "resize", function() {
            clearTimeout(resizeDelay);
            resizeDelay = setTimeout(function() {
              resizeIframe();
            }, 1);
          });
        } else if (H5P$4.communicator) {
          var parentIsFriendly = false;
          H5P$4.communicator.on("ready", function() {
            H5P$4.communicator.send("hello");
          });
          H5P$4.communicator.on("hello", function() {
            parentIsFriendly = true;
            document.body.style.height = "auto";
            document.body.style.overflow = "hidden";
            H5P$4.trigger(instance2, "resize");
          });
          H5P$4.communicator.on("resizePrepared", function() {
            H5P$4.communicator.send("resize", {
              scrollHeight: document.body.scrollHeight
            });
          });
          H5P$4.communicator.on("resize", function() {
            H5P$4.trigger(instance2, "resize");
          });
          H5P$4.on(instance2, "resize", function() {
            if (H5P$4.isFullscreen) {
              return;
            }
            clearTimeout(resizeDelay);
            resizeDelay = setTimeout(function() {
              if (parentIsFriendly) {
                H5P$4.communicator.send("prepareResize", {
                  scrollHeight: document.body.scrollHeight,
                  clientHeight: document.body.clientHeight
                });
              } else {
                H5P$4.communicator.send("hello");
              }
            }, 0);
          });
        }
      }
      if (!H5P$4.isFramed || H5P$4.externalEmbed === false) {
        H5P$4.jQuery(window.parent).resize(function() {
          H5P$4.trigger(instance2, "resize");
        });
      }
      H5P$4.instances.push(instance2);
      H5P$4.trigger(instance2, "resize");
      $element.addClass("using-mouse");
      $element.on("mousedown keydown keyup", function(event) {
        $element.toggleClass("using-mouse", event.type === "mousedown");
      });
      if (H5P$4.externalDispatcher) {
        H5P$4.externalDispatcher.trigger("initialized");
      }
    };
    H5P$4.getUserData(contentId, "state", function(err, previousState) {
      if (previousState) {
        library.userDatas = {
          state: previousState
        };
      } else if (previousState === null && H5PIntegration.saveFreq) {
        delete contentData.contentUserData;
        var dialog = new H5P$4.Dialog("content-user-data-reset", "Data Reset", "<p>" + H5P$4.t("contentChanged") + "</p><p>" + H5P$4.t("startingOver") + '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>', $container);
        H5P$4.jQuery(dialog).on("dialog-opened", function(event, $dialog) {
          var closeDialog = function(event2) {
            if (event2.type === "click" || event2.which === 32) {
              dialog.close();
              H5P$4.deleteUserData(contentId, "state", 0);
            }
          };
          $dialog.find(".h5p-dialog-ok-button").click(closeDialog).keypress(closeDialog);
          H5P$4.trigger(instance, "resize");
        }).on("dialog-closed", function() {
          H5P$4.trigger(instance, "resize");
        });
        dialog.open();
      }
      completeInit();
    });
  });
  H5P$4.jQuery("iframe.h5p-iframe:not(.h5p-initialized)", target).each(function() {
    const iframe = this;
    const $iframe = H5P$4.jQuery(iframe);
    const contentId = $iframe.data("content-id");
    const contentData = H5PIntegration.contents["cid-" + contentId];
    const contentLanguage = contentData && contentData.metadata && contentData.metadata.defaultLanguage ? contentData.metadata.defaultLanguage : "en";
    const writeDocument = function() {
      iframe.contentDocument.open();
      iframe.contentDocument.write('<!doctype html><html class="h5p-iframe" lang="' + contentLanguage + '"><head>' + H5P$4.getHeadTags(contentId) + '</head><body><div class="h5p-content" data-content-id="' + contentId + '"/></body></html>');
      iframe.contentDocument.close();
    };
    $iframe.addClass("h5p-initialized");
    if (iframe.contentDocument === null) {
      $iframe.on("load", writeDocument);
      $iframe.attr("src", "about:blank");
    } else {
      writeDocument();
    }
  });
};
H5P$4.getHeadTags = function(contentId) {
  var createStyleTags = function(styles) {
    var tags = "";
    for (var i = 0; i < styles.length; i++) {
      tags += '<link rel="stylesheet" href="' + styles[i] + '">';
    }
    return tags;
  };
  var createScriptTags = function(scripts) {
    var tags = "";
    for (var i = 0; i < scripts.length; i++) {
      tags += '<script src="' + scripts[i] + '"><\\/script>';
    }
    return tags;
  };
  return '<base target="_parent">' + createStyleTags(H5PIntegration.core.styles) + createStyleTags(H5PIntegration.contents["cid-" + contentId].styles) + createScriptTags(H5PIntegration.core.scripts) + createScriptTags(H5PIntegration.contents["cid-" + contentId].scripts) + "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;<\\/script>";
};
H5P$4.communicator = function() {
  function Communicator() {
    var self = this;
    var actionHandlers = {};
    window.addEventListener("message", function receiveMessage(event) {
      if (window.parent !== event.source || event.data.context !== "h5p") {
        return;
      }
      if (actionHandlers[event.data.action] !== void 0) {
        actionHandlers[event.data.action](event.data);
      }
    }, false);
    self.on = function(action, handler) {
      actionHandlers[action] = handler;
    };
    self.send = function(action, data) {
      if (data === void 0) {
        data = {};
      }
      data.context = "h5p";
      data.action = action;
      window.parent.postMessage(data, "*");
    };
  }
  return window.postMessage && window.addEventListener ? new Communicator() : void 0;
}();
H5P$4.semiFullScreen = function($element, instance2, exitCallback, body) {
  H5P$4.fullScreen($element, instance2, exitCallback, body, true);
};
H5P$4.fullScreen = function($element, instance2, exitCallback, body, forceSemiFullScreen) {
  if (H5P$4.exitFullScreen !== void 0) {
    return;
  }
  if (H5P$4.isFramed && H5P$4.externalEmbed === false) {
    window.parent.H5P.fullScreen($element, instance2, exitCallback, H5P$4.$body.get(), forceSemiFullScreen);
    H5P$4.isFullscreen = true;
    H5P$4.exitFullScreen = function() {
      window.parent.H5P.exitFullScreen();
    };
    H5P$4.on(instance2, "exitFullScreen", function() {
      H5P$4.isFullscreen = false;
      H5P$4.exitFullScreen = void 0;
    });
    return;
  }
  var $container = $element;
  var $classes, $iframe, $body;
  if (body === void 0) {
    $body = H5P$4.$body;
  } else {
    $body = H5P$4.jQuery(body);
    $classes = $body.add($element.get());
    var iframeSelector = "#h5p-iframe-" + $element.parent().data("content-id");
    $iframe = H5P$4.jQuery(iframeSelector);
    $element = $iframe.parent();
  }
  $classes = $element.add(H5P$4.$body).add($classes);
  var before = function(classes) {
    $classes.addClass(classes);
    if ($iframe !== void 0) {
      $iframe.css("height", "");
    }
  };
  var entered = function() {
    H5P$4.trigger(instance2, "resize");
    H5P$4.trigger(instance2, "focus");
    H5P$4.trigger(instance2, "enterFullScreen");
  };
  var done = function(classes) {
    H5P$4.isFullscreen = false;
    $classes.removeClass(classes);
    H5P$4.trigger(instance2, "resize");
    H5P$4.trigger(instance2, "focus");
    H5P$4.exitFullScreen = void 0;
    if (exitCallback !== void 0) {
      exitCallback();
    }
    H5P$4.trigger(instance2, "exitFullScreen");
  };
  H5P$4.isFullscreen = true;
  if (H5P$4.fullScreenBrowserPrefix === void 0 || forceSemiFullScreen === true) {
    if (H5P$4.isFramed) {
      return;
    }
    before("h5p-semi-fullscreen");
    var $disable = H5P$4.jQuery('<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' + H5P$4.t("disableFullscreen") + '" aria-label="' + H5P$4.t("disableFullscreen") + '"></div>').appendTo($container.find(".h5p-content-controls"));
    var keyup, disableSemiFullscreen = H5P$4.exitFullScreen = function() {
      if (prevViewportContent) {
        h5pViewport.content = prevViewportContent;
      } else {
        head.removeChild(h5pViewport);
      }
      $disable.remove();
      $body.unbind("keyup", keyup);
      done("h5p-semi-fullscreen");
    };
    keyup = function(event) {
      if (event.keyCode === 27) {
        disableSemiFullscreen();
      }
    };
    $disable.click(disableSemiFullscreen);
    $body.keyup(keyup);
    var prevViewportContent, h5pViewport;
    var metaTags = document.getElementsByTagName("meta");
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].name === "viewport") {
        h5pViewport = metaTags[i];
        prevViewportContent = h5pViewport.content;
        break;
      }
    }
    if (!prevViewportContent) {
      h5pViewport = document.createElement("meta");
      h5pViewport.name = "viewport";
    }
    h5pViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    if (!prevViewportContent) {
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(h5pViewport);
    }
    entered();
  } else {
    before("h5p-fullscreen");
    var first, eventName = H5P$4.fullScreenBrowserPrefix === "ms" ? "MSFullscreenChange" : H5P$4.fullScreenBrowserPrefix + "fullscreenchange";
    document.addEventListener(eventName, function fullscreenCallback() {
      if (first === void 0) {
        first = false;
        entered();
        return;
      }
      done("h5p-fullscreen");
      document.removeEventListener(eventName, fullscreenCallback, false);
    });
    if (H5P$4.fullScreenBrowserPrefix === "") {
      $element[0].requestFullscreen();
    } else {
      var method = H5P$4.fullScreenBrowserPrefix === "ms" ? "msRequestFullscreen" : H5P$4.fullScreenBrowserPrefix + "RequestFullScreen";
      var params = H5P$4.fullScreenBrowserPrefix === "webkit" && H5P$4.safariBrowser === 0 ? Element.ALLOW_KEYBOARD_INPUT : void 0;
      $element[0][method](params);
    }
    H5P$4.exitFullScreen = function() {
      if (H5P$4.fullScreenBrowserPrefix === "") {
        document.exitFullscreen();
      } else if (H5P$4.fullScreenBrowserPrefix === "moz") {
        document.mozCancelFullScreen();
      } else {
        document[H5P$4.fullScreenBrowserPrefix + "ExitFullscreen"]();
      }
    };
  }
};
(function() {
  H5P$4.addQueryParameter = function(path, parameter) {
    let newPath, secondSplit;
    const firstSplit = path.split("?");
    if (firstSplit[1]) {
      secondSplit = firstSplit[1].split("#");
      newPath = firstSplit[0] + "?" + secondSplit[0] + "&";
    } else {
      secondSplit = firstSplit[0].split("#");
      newPath = secondSplit[0] + "?";
    }
    newPath += parameter;
    if (secondSplit[1]) {
      newPath += "#" + secondSplit[1];
    }
    return newPath;
  };
  H5P$4.setSource = function(element, source, contentId) {
    let path = source.path;
    const crossOrigin = H5P$4.getCrossOrigin(source);
    if (crossOrigin) {
      element.crossOrigin = crossOrigin;
      if (H5PIntegration.crossoriginCacheBuster) {
        path = H5P$4.addQueryParameter(path, H5PIntegration.crossoriginCacheBuster);
      }
    } else {
      element.removeAttribute("crossorigin");
    }
    element.src = H5P$4.getPath(path, contentId);
  };
  var hasProtocol = function(path) {
    return path.match(/^[a-z0-9]+:\\/\\//i);
  };
  H5P$4.getCrossOrigin = function(source) {
    if (typeof source !== "object") {
      return H5PIntegration.crossorigin && H5PIntegration.crossoriginRegex && source.match(H5PIntegration.crossoriginRegex) ? H5PIntegration.crossorigin : null;
    }
    if (H5PIntegration.crossorigin && !hasProtocol(source.path)) {
      return H5PIntegration.crossorigin;
    }
  };
  H5P$4.getPath = function(path, contentId) {
    if (hasProtocol(path)) {
      return path;
    }
    var prefix;
    var isTmpFile = path.substr(-4, 4) === "#tmp";
    if (contentId !== void 0 && !isTmpFile) {
      if (H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + contentId]) {
        prefix = H5PIntegration.contents["cid-" + contentId].contentUrl;
      }
      if (!prefix) {
        prefix = H5PIntegration.url + "/content/" + contentId;
      }
    } else if (window.H5PEditor !== void 0) {
      prefix = H5PEditor.filesPath;
    } else {
      return;
    }
    if (!hasProtocol(prefix)) {
      prefix = window.location.protocol + "//" + window.location.host + prefix;
    }
    return prefix + "/" + path;
  };
})();
H5P$4.getContentPath = function(contentId) {
  return H5PIntegration.url + "/content/" + contentId;
};
H5P$4.classFromName = function(name) {
  var arr = name.split(".");
  return this[arr[arr.length - 1]];
};
H5P$4.newRunnable = function(library, contentId, $attachTo, skipResize, extras) {
  var nameSplit, versionSplit, machineName;
  try {
    nameSplit = library.library.split(" ", 2);
    machineName = nameSplit[0];
    versionSplit = nameSplit[1].split(".", 2);
  } catch (err) {
    return H5P$4.error("Invalid library string: " + library.library);
  }
  if (library.params instanceof Object !== true || library.params instanceof Array === true) {
    H5P$4.error("Invalid library params for: " + library.library);
    return H5P$4.error(library.params);
  }
  var constructor;
  try {
    nameSplit = nameSplit[0].split(".");
    constructor = window;
    for (var i = 0; i < nameSplit.length; i++) {
      constructor = constructor[nameSplit[i]];
    }
    if (typeof constructor !== "function") {
      throw null;
    }
  } catch (err) {
    return H5P$4.error("Unable to find constructor for: " + library.library);
  }
  if (extras === void 0) {
    extras = {};
  }
  if (library.subContentId) {
    extras.subContentId = library.subContentId;
  }
  if (library.userDatas && library.userDatas.state && H5PIntegration.saveFreq) {
    extras.previousState = library.userDatas.state;
  }
  if (library.metadata) {
    extras.metadata = library.metadata;
  }
  var standalone = extras.standalone || false;
  constructor.prototype = H5P$4.jQuery.extend({}, H5P$4.ContentType(standalone).prototype, constructor.prototype);
  var instance2;
  if (H5P$4.jQuery.inArray(library.library, ["H5P.CoursePresentation 1.0", "H5P.CoursePresentation 1.1", "H5P.CoursePresentation 1.2", "H5P.CoursePresentation 1.3"]) > -1) {
    instance2 = new constructor(library.params, contentId);
  } else {
    instance2 = new constructor(library.params, contentId, extras);
  }
  if (instance2.$ === void 0) {
    instance2.$ = H5P$4.jQuery(instance2);
  }
  if (instance2.contentId === void 0) {
    instance2.contentId = contentId;
  }
  if (instance2.subContentId === void 0 && library.subContentId) {
    instance2.subContentId = library.subContentId;
  }
  if (instance2.parent === void 0 && extras && extras.parent) {
    instance2.parent = extras.parent;
  }
  if (instance2.libraryInfo === void 0) {
    instance2.libraryInfo = {
      versionedName: library.library,
      versionedNameNoSpaces: machineName + "-" + versionSplit[0] + "." + versionSplit[1],
      machineName,
      majorVersion: versionSplit[0],
      minorVersion: versionSplit[1]
    };
  }
  if ($attachTo !== void 0) {
    $attachTo.toggleClass("h5p-standalone", standalone);
    instance2.attach($attachTo);
    H5P$4.trigger(instance2, "domChanged", {
      "$target": $attachTo,
      "library": machineName,
      "key": "newLibrary"
    }, { "bubbles": true, "external": true });
    if (skipResize === void 0 || !skipResize) {
      H5P$4.trigger(instance2, "resize");
    }
  }
  return instance2;
};
H5P$4.error = function(err) {
  if (window.console !== void 0 && console.error !== void 0) {
    console.error(err.stack ? err.stack : err);
  }
};
H5P$4.t = function(key, vars, ns) {
  if (ns === void 0) {
    ns = "H5P";
  }
  if (H5PIntegration.l10n[ns] === void 0) {
    return '[Missing translation namespace "' + ns + '"]';
  }
  if (H5PIntegration.l10n[ns][key] === void 0) {
    return '[Missing translation "' + key + '" in "' + ns + '"]';
  }
  var translation = H5PIntegration.l10n[ns][key];
  if (vars !== void 0) {
    for (var placeholder in vars) {
      translation = translation.replace(placeholder, vars[placeholder]);
    }
  }
  return translation;
};
H5P$4.Dialog = function(name, title, content, $element, $returnElement) {
  var self = this;
  var $dialog = H5P$4.jQuery('<div class="h5p-popup-dialog h5p-' + name + '-dialog" aria-labelledby="' + name + '-dialog-header" aria-modal="true" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2 id="' + name + '-dialog-header">' + title + '</h2>                                <div class="h5p-scroll-content">' + content + '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' + H5P$4.t("close") + '" title="' + H5P$4.t("close") + '"></div>                              </div>                            </div>').insertAfter($element).click(function(e) {
    if (e && e.originalEvent && e.originalEvent.preventClosing) {
      return;
    }
    self.close();
  }).children(".h5p-inner").click(function(e) {
    e.originalEvent.preventClosing = true;
  }).find(".h5p-close").click(function() {
    self.close();
  }).keypress(function(e) {
    if (e.which === 13 || e.which === 32) {
      self.close();
      return false;
    }
  }).end().find("a").click(function(e) {
    e.stopPropagation();
  }).end().end();
  self.open = function(scrollbar) {
    if (scrollbar) {
      $dialog.css("height", "100%");
    }
    setTimeout(function() {
      $dialog.addClass("h5p-open");
      H5P$4.jQuery(self).trigger("dialog-opened", [$dialog]);
      $dialog.focus();
    }, 1);
  };
  self.close = function() {
    $dialog.removeClass("h5p-open");
    setTimeout(function() {
      $dialog.remove();
      H5P$4.jQuery(self).trigger("dialog-closed", [$dialog]);
      $element.attr("tabindex", "-1");
      if ($returnElement) {
        $returnElement.focus();
      } else {
        $element.focus();
      }
    }, 200);
  };
};
H5P$4.getCopyrights = function(instance2, parameters, contentId, metadata) {
  var copyrights;
  if (instance2.getCopyrights !== void 0) {
    try {
      copyrights = instance2.getCopyrights();
    } catch (err) {
    }
  }
  if (copyrights === void 0) {
    copyrights = new H5P$4.ContentCopyrights();
    H5P$4.findCopyrights(copyrights, parameters, contentId);
  }
  var metadataCopyrights = H5P$4.buildMetadataCopyrights(metadata, instance2.libraryInfo.machineName);
  if (metadataCopyrights !== void 0) {
    copyrights.addMediaInFront(metadataCopyrights);
  }
  if (copyrights !== void 0) {
    copyrights = copyrights.toString();
  }
  return copyrights;
};
H5P$4.findCopyrights = function(info, parameters, contentId, extras) {
  if (extras) {
    extras.params = parameters;
    buildFromMetadata(extras, extras.machineName, contentId);
  }
  var lastContentTypeName;
  for (var field in parameters) {
    if (!parameters.hasOwnProperty(field)) {
      continue;
    }
    if (field === "overrideSettings") {
      console.warn("The semantics field 'overrideSettings' is DEPRECATED and should not be used.");
      console.warn(parameters);
      continue;
    }
    var value = parameters[field];
    if (value && value.library && typeof value.library === "string") {
      lastContentTypeName = value.library.split(" ")[0];
    } else if (value && value.library && typeof value.library === "object") {
      lastContentTypeName = value.library.library && typeof value.library.library === "string" ? value.library.library.split(" ")[0] : lastContentTypeName;
    }
    if (value instanceof Array) {
      H5P$4.findCopyrights(info, value, contentId);
    } else if (value instanceof Object) {
      buildFromMetadata(value, lastContentTypeName, contentId);
      if (value.copyright === void 0 || value.copyright.license === void 0 || value.path === void 0 || value.mime === void 0) {
        H5P$4.findCopyrights(info, value, contentId);
      } else {
        var copyrights = new H5P$4.MediaCopyright(value.copyright);
        if (value.width !== void 0 && value.height !== void 0) {
          copyrights.setThumbnail(new H5P$4.Thumbnail(H5P$4.getPath(value.path, contentId), value.width, value.height));
        }
        info.addMedia(copyrights);
      }
    }
  }
  function buildFromMetadata(data, name, contentId2) {
    if (data.metadata) {
      const metadataCopyrights = H5P$4.buildMetadataCopyrights(data.metadata, name);
      if (metadataCopyrights !== void 0) {
        if (data.params && data.params.contentName === "Image" && data.params.file) {
          const path = data.params.file.path;
          const width = data.params.file.width;
          const height = data.params.file.height;
          metadataCopyrights.setThumbnail(new H5P$4.Thumbnail(H5P$4.getPath(path, contentId2), width, height, data.params.alt));
        }
        info.addMedia(metadataCopyrights);
      }
    }
  }
};
H5P$4.buildMetadataCopyrights = function(metadata) {
  if (metadata && metadata.license !== void 0 && metadata.license !== "U") {
    var dataset = {
      contentType: metadata.contentType,
      title: metadata.title,
      author: metadata.authors && metadata.authors.length > 0 ? metadata.authors.map(function(author) {
        return author.role ? author.name + " (" + author.role + ")" : author.name;
      }).join(", ") : void 0,
      source: metadata.source,
      year: metadata.yearFrom ? metadata.yearFrom + (metadata.yearTo ? "-" + metadata.yearTo : "") : void 0,
      license: metadata.license,
      version: metadata.licenseVersion,
      licenseExtras: metadata.licenseExtras,
      changes: metadata.changes && metadata.changes.length > 0 ? metadata.changes.map(function(change) {
        return change.log + (change.author ? ", " + change.author : "") + (change.date ? ", " + change.date : "");
      }).join(" / ") : void 0
    };
    return new H5P$4.MediaCopyright(dataset);
  }
};
H5P$4.openReuseDialog = function($element, contentData, library, instance2, contentId) {
  let html = "";
  if (contentData.displayOptions.export) {
    html += '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>';
  }
  if (contentData.displayOptions.export && contentData.displayOptions.copy) {
    html += '<div class="h5p-horizontal-line-text"><span>or</span></div>';
  }
  if (contentData.displayOptions.copy) {
    html += '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>';
  }
  const dialog = new H5P$4.Dialog("reuse", H5P$4.t("reuseContent"), html, $element);
  H5P$4.jQuery(dialog).on("dialog-opened", function(e, $dialog) {
    H5P$4.jQuery('<a href="https://h5p.org/node/442225" target="_blank">More Info</a>').click(function(e2) {
      e2.stopPropagation();
    }).appendTo($dialog.find("h2"));
    $dialog.find(".h5p-download-button").click(function() {
      window.location.href = contentData.exportUrl;
      instance2.triggerXAPI("downloaded");
      dialog.close();
    });
    $dialog.find(".h5p-copy-button").click(function() {
      const item = new H5P$4.ClipboardItem(library);
      item.contentId = contentId;
      H5P$4.setClipboard(item);
      instance2.triggerXAPI("copied");
      dialog.close();
      H5P$4.attachToastTo(
        H5P$4.jQuery(".h5p-content:first")[0],
        H5P$4.t("contentCopied"),
        {
          position: {
            horizontal: "centered",
            vertical: "centered",
            noOverflowX: true
          }
        }
      );
    });
    H5P$4.trigger(instance2, "resize");
  }).on("dialog-closed", function() {
    H5P$4.trigger(instance2, "resize");
  });
  dialog.open();
};
H5P$4.openEmbedDialog = function($element, embedCode, resizeCode, size, instance2) {
  var fullEmbedCode = embedCode + resizeCode;
  var dialog = new H5P$4.Dialog("embed", H5P$4.t("embed"), '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' + H5P$4.t("size") + ': <input aria-label="' + H5P$4.t("width") + '" type="text" value="' + Math.ceil(size.width) + '" class="h5p-embed-size"/> × <input aria-label="' + H5P$4.t("width") + '" type="text" value="' + Math.ceil(size.height) + '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' + H5P$4.t("showAdvanced") + '</div><div class="h5p-expander-content"><p>' + H5P$4.t("advancedHelp") + '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' + resizeCode + "</textarea></div>", $element);
  H5P$4.jQuery(dialog).on("dialog-opened", function(event, $dialog) {
    var $inner = $dialog.find(".h5p-inner");
    var $scroll = $inner.find(".h5p-scroll-content");
    $scroll.outerHeight() - $scroll.innerHeight();
    var positionInner = function() {
      H5P$4.trigger(instance2, "resize");
    };
    var $w = $dialog.find(".h5p-embed-size:eq(0)");
    var $h = $dialog.find(".h5p-embed-size:eq(1)");
    var getNum = function($e, d) {
      var num = parseFloat($e.val());
      if (isNaN(num)) {
        return d;
      }
      return Math.ceil(num);
    };
    var updateEmbed = function() {
      $dialog.find(".h5p-embed-code-container:first").val(fullEmbedCode.replace(":w", getNum($w, size.width)).replace(":h", getNum($h, size.height)));
    };
    $w.change(updateEmbed);
    $h.change(updateEmbed);
    updateEmbed();
    $dialog.find(".h5p-embed-code-container").each(function() {
      H5P$4.jQuery(this).css("height", this.scrollHeight + "px").focus(function() {
        H5P$4.jQuery(this).select();
      });
    });
    $dialog.find(".h5p-embed-code-container").eq(0).select();
    positionInner();
    var expand = function() {
      var $expander = H5P$4.jQuery(this);
      var $content = $expander.next();
      if ($content.is(":visible")) {
        $expander.removeClass("h5p-open").text(H5P$4.t("showAdvanced")).attr("aria-expanded", "true");
        $content.hide();
      } else {
        $expander.addClass("h5p-open").text(H5P$4.t("hideAdvanced")).attr("aria-expanded", "false");
        $content.show();
      }
      $dialog.find(".h5p-embed-code-container").each(function() {
        H5P$4.jQuery(this).css("height", this.scrollHeight + "px");
      });
      positionInner();
    };
    $dialog.find(".h5p-expander").click(expand).keypress(function(event2) {
      if (event2.keyCode === 32) {
        expand.apply(this);
        return false;
      }
    });
  }).on("dialog-closed", function() {
    H5P$4.trigger(instance2, "resize");
  });
  dialog.open();
};
H5P$4.attachToastTo = function(element, message, config) {
  if (element === void 0 || message === void 0) {
    return;
  }
  const eventPath = function(evt) {
    var path = evt.composedPath && evt.composedPath() || evt.path;
    var target = evt.target;
    if (path != null) {
      return path.indexOf(window) < 0 ? path.concat(window) : path;
    }
    if (target === window) {
      return [window];
    }
    function getParents(node, memo) {
      memo = memo || [];
      var parentNode = node.parentNode;
      if (!parentNode) {
        return memo;
      } else {
        return getParents(parentNode, memo.concat(parentNode));
      }
    }
    return [target].concat(getParents(target), window);
  };
  const clickHandler = function(event) {
    var path = eventPath(event);
    if (path.indexOf(element) !== -1) {
      return;
    }
    clearTimeout(timer);
    removeToast();
  };
  const removeToast = function() {
    document.removeEventListener("click", clickHandler);
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  };
  const getToastCoordinates = function(element2, toast2, position) {
    position = position || {};
    position.offsetHorizontal = position.offsetHorizontal || 0;
    position.offsetVertical = position.offsetVertical || 0;
    const toastRect = toast2.getBoundingClientRect();
    const elementRect = element2.getBoundingClientRect();
    let left = 0;
    let top = 0;
    switch (position.horizontal) {
      case "before":
        left = elementRect.left - toastRect.width - position.offsetHorizontal;
        break;
      case "after":
        left = elementRect.left + elementRect.width + position.offsetHorizontal;
        break;
      case "left":
        left = elementRect.left + position.offsetHorizontal;
        break;
      case "right":
        left = elementRect.left + elementRect.width - toastRect.width - position.offsetHorizontal;
        break;
      case "centered":
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
        break;
      default:
        left = elementRect.left + elementRect.width / 2 - toastRect.width / 2 + position.offsetHorizontal;
    }
    switch (position.vertical) {
      case "above":
        top = elementRect.top - toastRect.height - position.offsetVertical;
        break;
      case "below":
        top = elementRect.top + elementRect.height + position.offsetVertical;
        break;
      case "top":
        top = elementRect.top + position.offsetVertical;
        break;
      case "bottom":
        top = elementRect.top + elementRect.height - toastRect.height - position.offsetVertical;
        break;
      case "centered":
        top = elementRect.top + elementRect.height / 2 - toastRect.height / 2 + position.offsetVertical;
        break;
      default:
        top = elementRect.top + elementRect.height + position.offsetVertical;
    }
    const overflowElement = document.body;
    const bounds = overflowElement.getBoundingClientRect();
    if ((position.noOverflowLeft || position.noOverflowX) && left < bounds.x) {
      left = bounds.x;
    }
    if ((position.noOverflowRight || position.noOverflowX) && left + toastRect.width > bounds.x + bounds.width) {
      left = bounds.x + bounds.width - toastRect.width;
    }
    if ((position.noOverflowTop || position.noOverflowY) && top < bounds.y) {
      top = bounds.y;
    }
    if ((position.noOverflowBottom || position.noOverflowY) && top + toastRect.height > bounds.y + bounds.height) {
      left = bounds.y + bounds.height - toastRect.height;
    }
    return { left, top };
  };
  config = config || {};
  config.style = config.style || "h5p-toast";
  config.duration = config.duration || 3e3;
  const toast = document.createElement("div");
  toast.setAttribute("id", config.style);
  toast.classList.add("h5p-toast-disabled");
  toast.classList.add(config.style);
  const msg = document.createElement("span");
  msg.innerHTML = message;
  toast.appendChild(msg);
  document.body.appendChild(toast);
  const coordinates = getToastCoordinates(element, toast, config.position);
  toast.style.left = Math.round(coordinates.left) + "px";
  toast.style.top = Math.round(coordinates.top) + "px";
  toast.classList.remove("h5p-toast-disabled");
  const timer = setTimeout(removeToast, config.duration);
  document.addEventListener("click", clickHandler);
};
H5P$4.ContentCopyrights = function() {
  var label;
  var media = [];
  var content = [];
  this.setLabel = function(newLabel) {
    label = newLabel;
  };
  this.addMedia = function(newMedia) {
    if (newMedia !== void 0) {
      media.push(newMedia);
    }
  };
  this.addMediaInFront = function(newMedia) {
    if (newMedia !== void 0) {
      media.unshift(newMedia);
    }
  };
  this.addContent = function(newContent) {
    if (newContent !== void 0) {
      content.push(newContent);
    }
  };
  this.toString = function() {
    var html = "";
    for (var i = 0; i < media.length; i++) {
      html += media[i];
    }
    for (i = 0; i < content.length; i++) {
      html += content[i];
    }
    if (html !== "") {
      if (label !== void 0) {
        html = "<h3>" + label + "</h3>" + html;
      }
      html = '<div class="h5p-content-copyrights">' + html + "</div>";
    }
    return html;
  };
};
H5P$4.MediaCopyright = function(copyright, labels, order, extraFields) {
  var thumbnail;
  var list = new H5P$4.DefinitionList();
  var getLabel = function(fieldName2) {
    if (labels === void 0 || labels[fieldName2] === void 0) {
      return H5P$4.t(fieldName2);
    }
    return labels[fieldName2];
  };
  var humanizeLicense = function(license, version) {
    var copyrightLicense = H5P$4.copyrightLicenses[license];
    var value = "";
    if (!(license === "PD" && version)) {
      value += copyrightLicense.hasOwnProperty("label") ? copyrightLicense.label : copyrightLicense;
    }
    var versionInfo;
    if (copyrightLicense.versions) {
      if (copyrightLicense.versions.default && (!version || !copyrightLicense.versions[version])) {
        version = copyrightLicense.versions.default;
      }
      if (version && copyrightLicense.versions[version]) {
        versionInfo = copyrightLicense.versions[version];
      }
    }
    if (versionInfo) {
      if (value) {
        value += " ";
      }
      value += versionInfo.hasOwnProperty("label") ? versionInfo.label : versionInfo;
    }
    var link;
    if (copyrightLicense.hasOwnProperty("link")) {
      link = copyrightLicense.link.replace(":version", copyrightLicense.linkVersions ? copyrightLicense.linkVersions[version] : version);
    } else if (versionInfo && copyrightLicense.hasOwnProperty("link")) {
      link = versionInfo.link;
    }
    if (link) {
      value = '<a href="' + link + '" target="_blank">' + value + "</a>";
    }
    var parenthesis = "";
    if (license !== "PD" && license !== "C") {
      parenthesis += license;
    }
    if (version && version !== "CC0 1.0") {
      if (parenthesis && license !== "GNU GPL") {
        parenthesis += " ";
      }
      parenthesis += version;
    }
    if (parenthesis) {
      value += " (" + parenthesis + ")";
    }
    if (license === "C") {
      value += " &copy;";
    }
    return value;
  };
  if (copyright !== void 0) {
    for (var field in extraFields) {
      if (extraFields.hasOwnProperty(field)) {
        copyright[field] = extraFields[field];
      }
    }
    if (order === void 0) {
      order = ["contentType", "title", "license", "author", "year", "source", "licenseExtras", "changes"];
    }
    for (var i = 0; i < order.length; i++) {
      var fieldName = order[i];
      if (copyright[fieldName] !== void 0 && copyright[fieldName] !== "") {
        var humanValue = copyright[fieldName];
        if (fieldName === "license") {
          humanValue = humanizeLicense(copyright.license, copyright.version);
        }
        if (fieldName === "source") {
          humanValue = humanValue ? '<a href="' + humanValue + '" target="_blank">' + humanValue + "</a>" : void 0;
        }
        list.add(new H5P$4.Field(getLabel(fieldName), humanValue));
      }
    }
  }
  this.setThumbnail = function(newThumbnail) {
    thumbnail = newThumbnail;
  };
  this.undisclosed = function() {
    if (list.size() === 1) {
      var field2 = list.get(0);
      if (field2.getLabel() === getLabel("license") && field2.getValue() === humanizeLicense("U")) {
        return true;
      }
    }
    return false;
  };
  this.toString = function() {
    var html = "";
    if (this.undisclosed()) {
      return html;
    }
    if (thumbnail !== void 0) {
      html += thumbnail;
    }
    html += list;
    if (html !== "") {
      html = '<div class="h5p-media-copyright">' + html + "</div>";
    }
    return html;
  };
};
H5P$4.Thumbnail = function(source, width, height, alt) {
  var thumbWidth, thumbHeight = 100;
  if (width !== void 0) {
    thumbWidth = Math.round(thumbHeight * (width / height));
  }
  this.toString = function() {
    return '<img src="' + source + '" alt="' + (alt ? alt : "") + '" class="h5p-thumbnail" height="' + thumbHeight + '"' + (thumbWidth === void 0 ? "" : ' width="' + thumbWidth + '"') + "/>";
  };
};
H5P$4.Field = function(label, value) {
  this.getLabel = function() {
    return label;
  };
  this.getValue = function() {
    return value;
  };
};
H5P$4.DefinitionList = function() {
  var fields = [];
  this.add = function(field) {
    fields.push(field);
  };
  this.size = function() {
    return fields.length;
  };
  this.get = function(index) {
    return fields[index];
  };
  this.toString = function() {
    var html = "";
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      html += "<dt>" + field.getLabel() + "</dt><dd>" + field.getValue() + "</dd>";
    }
    return html === "" ? html : '<dl class="h5p-definition-list">' + html + "</dl>";
  };
};
H5P$4.Coords = function(x, y, w, h) {
  if (!(this instanceof H5P$4.Coords))
    return new H5P$4.Coords(x, y, w, h);
  this.x = 0;
  this.y = 0;
  this.w = 1;
  this.h = 1;
  if (typeof x === "object") {
    this.x = x.x;
    this.y = x.y;
    this.w = x.w;
    this.h = x.h;
  } else {
    if (x !== void 0) {
      this.x = x;
    }
    if (y !== void 0) {
      this.y = y;
    }
    if (w !== void 0) {
      this.w = w;
    }
    if (h !== void 0) {
      this.h = h;
    }
  }
  return this;
};
H5P$4.libraryFromString = function(library) {
  var regExp = /(.+)\\s(\\d+)\\.(\\d+)$/g;
  var res = regExp.exec(library);
  if (res !== null) {
    return {
      "machineName": res[1],
      "majorVersion": parseInt(res[2]),
      "minorVersion": parseInt(res[3])
    };
  } else {
    return false;
  }
};
H5P$4.getLibraryPath = function(library) {
  if (H5PIntegration.urlLibraries !== void 0) {
    return H5PIntegration.urlLibraries + "/" + library;
  } else {
    return H5PIntegration.url + "/libraries/" + library;
  }
};
H5P$4.cloneObject = function(object, recursive) {
  var clone = object instanceof Array ? [] : {};
  for (var i in object) {
    if (object.hasOwnProperty(i)) {
      if (recursive !== void 0 && recursive && typeof object[i] === "object") {
        clone[i] = H5P$4.cloneObject(object[i], recursive);
      } else {
        clone[i] = object[i];
      }
    }
  }
  return clone;
};
H5P$4.trim = function(value) {
  return value.replace(/^\\s+|\\s+$/g, "");
};
H5P$4.isEmpty = (value) => {
  if (!value && value !== 0 && value !== false) {
    return true;
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      if (!H5P$4.isEmpty(value[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof value === "object") {
    for (let prop in value) {
      if (value.hasOwnProperty(prop) && !H5P$4.isEmpty(value[prop])) {
        return false;
      }
    }
    return true;
  }
  return false;
};
H5P$4.jsLoaded = function(path) {
  H5PIntegration.loadedJs = H5PIntegration.loadedJs || [];
  return H5P$4.jQuery.inArray(path, H5PIntegration.loadedJs) !== -1;
};
H5P$4.cssLoaded = function(path) {
  H5PIntegration.loadedCss = H5PIntegration.loadedCss || [];
  return H5P$4.jQuery.inArray(path, H5PIntegration.loadedCss) !== -1;
};
H5P$4.shuffleArray = function(array) {
  if (!(array instanceof Array)) {
    return;
  }
  var i = array.length, j, tempi, tempj;
  if (i === 0)
    return false;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    tempi = array[i];
    tempj = array[j];
    array[i] = tempj;
    array[j] = tempi;
  }
  return array;
};
H5P$4.setFinished = function(contentId, score, maxScore, time) {
  var validScore = typeof score === "number" || score instanceof Number;
  if (validScore && H5PIntegration.postUserStatistics === true) {
    var toUnix = function(date) {
      return Math.round(date.getTime() / 1e3);
    };
    const data = {
      contentId,
      score,
      maxScore,
      opened: toUnix(H5P$4.opened[contentId]),
      finished: toUnix(/* @__PURE__ */ new Date()),
      time
    };
    H5P$4.jQuery.post(H5PIntegration.ajax.setFinished, data).fail(function() {
      H5P$4.offlineRequestQueue.add(H5PIntegration.ajax.setFinished, data);
    });
  }
};
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(needle) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === needle) {
        return i;
      }
    }
    return -1;
  };
}
if (String.prototype.trim === void 0) {
  String.prototype.trim = function() {
    return H5P$4.trim(this);
  };
}
H5P$4.trigger = function(instance2, eventType, data, extras) {
  if (instance2.trigger !== void 0) {
    instance2.trigger(eventType, data, extras);
  } else if (instance2.$ !== void 0 && instance2.$.trigger !== void 0) {
    instance2.$.trigger(eventType);
  }
};
H5P$4.on = function(instance2, eventType, handler) {
  if (instance2.on !== void 0) {
    instance2.on(eventType, handler);
  } else if (instance2.$ !== void 0 && instance2.$.on !== void 0) {
    instance2.$.on(eventType, handler);
  }
};
H5P$4.createUUID = function() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(char) {
    var random = Math.random() * 16 | 0, newChar = char === "x" ? random : random & 3 | 8;
    return newChar.toString(16);
  });
};
H5P$4.createTitle = function(rawTitle, maxLength) {
  if (!rawTitle) {
    return "";
  }
  if (maxLength === void 0) {
    maxLength = 60;
  }
  var title = H5P$4.jQuery("<div></div>").text(
    // Strip tags
    rawTitle.replace(/(<([^>]+)>)/ig, "")
    // Escape
  ).text();
  if (title.length > maxLength) {
    title = title.substr(0, maxLength - 3) + "...";
  }
  return title;
};
(function($) {
  function contentUserDataAjax(contentId, dataType, subContentId, done, data, preload, invalidate, async) {
    if (H5PIntegration.user === void 0) {
      done("Not signed in.");
      return;
    }
    var options = {
      url: H5PIntegration.ajax.contentUserData.replace(":contentId", contentId).replace(":dataType", dataType).replace(":subContentId", subContentId ? subContentId : 0),
      dataType: "json",
      async: async === void 0 ? true : async
    };
    if (data !== void 0) {
      options.type = "POST";
      options.data = {
        data: data === null ? 0 : data,
        preload: preload ? 1 : 0,
        invalidate: invalidate ? 1 : 0
      };
    } else {
      options.type = "GET";
    }
    if (done !== void 0) {
      options.error = function(xhr, error) {
        done(error);
      };
      options.success = function(response) {
        if (!response.success) {
          done(response.message);
          return;
        }
        if (response.data === false || response.data === void 0) {
          done();
          return;
        }
        done(void 0, response.data);
      };
    }
    $.ajax(options);
  }
  H5P$4.getUserData = function(contentId, dataId, done, subContentId) {
    if (!subContentId) {
      subContentId = 0;
    }
    H5PIntegration.contents = H5PIntegration.contents || {};
    var content = H5PIntegration.contents["cid-" + contentId] || {};
    var preloadedData = content.contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId] !== void 0) {
      if (preloadedData[subContentId][dataId] === "RESET") {
        done(void 0, null);
        return;
      }
      try {
        done(void 0, JSON.parse(preloadedData[subContentId][dataId]));
      } catch (err) {
        done(err);
      }
    } else {
      contentUserDataAjax(contentId, dataId, subContentId, function(err, data) {
        if (err || data === void 0) {
          done(err, data);
          return;
        }
        if (content.contentUserData === void 0) {
          content.contentUserData = preloadedData = {};
        }
        if (preloadedData[subContentId] === void 0) {
          preloadedData[subContentId] = {};
        }
        preloadedData[subContentId][dataId] = data;
        try {
          done(void 0, JSON.parse(data));
        } catch (e) {
          done(e);
        }
      });
    }
  };
  H5P$4.setUserData = function(contentId, dataId, data, extras) {
    var options = H5P$4.jQuery.extend(true, {}, {
      subContentId: 0,
      preloaded: true,
      deleteOnChange: false,
      async: true
    }, extras);
    try {
      data = JSON.stringify(data);
    } catch (err) {
      if (options.errorCallback) {
        options.errorCallback(err);
      }
      return;
    }
    var content = H5PIntegration.contents["cid-" + contentId];
    if (content === void 0) {
      content = H5PIntegration.contents["cid-" + contentId] = {};
    }
    if (!content.contentUserData) {
      content.contentUserData = {};
    }
    var preloadedData = content.contentUserData;
    if (preloadedData[options.subContentId] === void 0) {
      preloadedData[options.subContentId] = {};
    }
    if (data === preloadedData[options.subContentId][dataId]) {
      return;
    }
    preloadedData[options.subContentId][dataId] = data;
    contentUserDataAjax(contentId, dataId, options.subContentId, function(error) {
      if (options.errorCallback && error) {
        options.errorCallback(error);
      }
    }, data, options.preloaded, options.deleteOnChange, options.async);
  };
  H5P$4.deleteUserData = function(contentId, dataId, subContentId) {
    if (!subContentId) {
      subContentId = 0;
    }
    var preloadedData = H5PIntegration.contents["cid-" + contentId].contentUserData;
    if (preloadedData && preloadedData[subContentId] && preloadedData[subContentId][dataId]) {
      delete preloadedData[subContentId][dataId];
    }
    contentUserDataAjax(contentId, dataId, subContentId, void 0, null);
  };
  H5P$4.getContentForInstance = function(contentId) {
    var key = "cid-" + contentId;
    var exists = H5PIntegration && H5PIntegration.contents && H5PIntegration.contents[key];
    return exists ? H5PIntegration.contents[key] : void 0;
  };
  H5P$4.ClipboardItem = function(parameters, genericProperty, specificKey) {
    var self = this;
    var setDimensionsFromFile = function() {
      if (!self.generic) {
        return;
      }
      var params = self.specific[self.generic];
      if (!params.params.file || !params.params.file.width || !params.params.file.height) {
        return;
      }
      self.width = 20;
      self.height = params.params.file.height / params.params.file.width * self.width;
    };
    if (!genericProperty) {
      genericProperty = "action";
      parameters = {
        action: parameters
      };
    }
    self.specific = parameters;
    if (genericProperty && parameters[genericProperty]) {
      self.generic = genericProperty;
    }
    if (specificKey) {
      self.from = specificKey;
    }
    if (window.H5PEditor && H5PEditor.contentId) {
      self.contentId = H5PEditor.contentId;
    }
    if (!self.specific.width && !self.specific.height) {
      setDimensionsFromFile();
    }
  };
  H5P$4.clipboardify = function(clipboardItem) {
    if (!(clipboardItem instanceof H5P$4.ClipboardItem)) {
      clipboardItem = new H5P$4.ClipboardItem(clipboardItem);
    }
    H5P$4.setClipboard(clipboardItem);
  };
  H5P$4.getClipboard = function() {
    return parseClipboard();
  };
  H5P$4.setClipboard = function(clipboardItem) {
    localStorage.setItem("h5pClipboard", JSON.stringify(clipboardItem));
    H5P$4.externalDispatcher.trigger("datainclipboard", { reset: false });
  };
  H5P$4.getLibraryConfig = function(machineName) {
    var hasConfig = H5PIntegration.libraryConfig && H5PIntegration.libraryConfig[machineName];
    return hasConfig ? H5PIntegration.libraryConfig[machineName] : {};
  };
  var parseClipboard = function() {
    var clipboardData = localStorage.getItem("h5pClipboard");
    if (!clipboardData) {
      return;
    }
    try {
      clipboardData = JSON.parse(clipboardData);
    } catch (err) {
      console.error("Unable to parse JSON from clipboard.", err);
      return;
    }
    recursiveUpdate(clipboardData.specific, function(path) {
      var isTmpFile = path.substr(-4, 4) === "#tmp";
      if (!isTmpFile && clipboardData.contentId && !path.match(/^https?:\\/\\//i)) {
        let prefix;
        if (H5PEditor.contentId) {
          prefix = "../" + clipboardData.contentId + "/";
        } else {
          prefix = (H5PEditor.contentRelUrl ? H5PEditor.contentRelUrl : "../content/") + clipboardData.contentId + "/";
        }
        return path.substr(0, prefix.length) === prefix ? path : prefix + path;
      }
      return path;
    });
    if (clipboardData.generic) {
      clipboardData.generic = clipboardData.specific[clipboardData.generic];
    }
    return clipboardData;
  };
  var recursiveUpdate = function(params, handler) {
    for (var prop in params) {
      if (params.hasOwnProperty(prop) && params[prop] instanceof Object) {
        var obj = params[prop];
        if (obj.path !== void 0 && obj.mime !== void 0) {
          obj.path = handler(obj.path);
        } else {
          if (obj.library !== void 0 && obj.subContentId !== void 0) {
            delete obj.subContentId;
          }
          recursiveUpdate(obj, handler);
        }
      }
    }
  };
  $(document).ready(function() {
    window.addEventListener("storage", function(event) {
      if (event.key === "h5pClipboard") {
        H5P$4.externalDispatcher.trigger("datainclipboard", { reset: event.newValue === null });
      }
    });
    var ccVersions = {
      "default": "4.0",
      "4.0": H5P$4.t("licenseCC40"),
      "3.0": H5P$4.t("licenseCC30"),
      "2.5": H5P$4.t("licenseCC25"),
      "2.0": H5P$4.t("licenseCC20"),
      "1.0": H5P$4.t("licenseCC10")
    };
    H5P$4.copyrightLicenses = {
      "U": H5P$4.t("licenseU"),
      "CC BY": {
        label: H5P$4.t("licenseCCBY"),
        link: "http://creativecommons.org/licenses/by/:version",
        versions: ccVersions
      },
      "CC BY-SA": {
        label: H5P$4.t("licenseCCBYSA"),
        link: "http://creativecommons.org/licenses/by-sa/:version",
        versions: ccVersions
      },
      "CC BY-ND": {
        label: H5P$4.t("licenseCCBYND"),
        link: "http://creativecommons.org/licenses/by-nd/:version",
        versions: ccVersions
      },
      "CC BY-NC": {
        label: H5P$4.t("licenseCCBYNC"),
        link: "http://creativecommons.org/licenses/by-nc/:version",
        versions: ccVersions
      },
      "CC BY-NC-SA": {
        label: H5P$4.t("licenseCCBYNCSA"),
        link: "http://creativecommons.org/licenses/by-nc-sa/:version",
        versions: ccVersions
      },
      "CC BY-NC-ND": {
        label: H5P$4.t("licenseCCBYNCND"),
        link: "http://creativecommons.org/licenses/by-nc-nd/:version",
        versions: ccVersions
      },
      "CC0 1.0": {
        label: H5P$4.t("licenseCC010"),
        link: "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      "GNU GPL": {
        label: H5P$4.t("licenseGPL"),
        link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
        linkVersions: {
          "v3": "3.0",
          "v2": "2.0",
          "v1": "1.0"
        },
        versions: {
          "default": "v3",
          "v3": H5P$4.t("licenseV3"),
          "v2": H5P$4.t("licenseV2"),
          "v1": H5P$4.t("licenseV1")
        }
      },
      "PD": {
        label: H5P$4.t("licensePD"),
        versions: {
          "CC0 1.0": {
            label: H5P$4.t("licenseCC010"),
            link: "https://creativecommons.org/publicdomain/zero/1.0/"
          },
          "CC PDM": {
            label: H5P$4.t("licensePDM"),
            link: "https://creativecommons.org/publicdomain/mark/1.0/"
          }
        }
      },
      "ODC PDDL": '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
      "CC PDM": {
        label: H5P$4.t("licensePDM"),
        link: "https://creativecommons.org/publicdomain/mark/1.0/"
      },
      "C": H5P$4.t("licenseC")
    };
    if (H5P$4.isFramed && H5P$4.externalEmbed === false) {
      H5P$4.externalDispatcher.on("*", function(event) {
        window.parent.H5P.externalDispatcher.trigger.call(this, event);
      });
    }
    if (!H5P$4.preventInit) {
      H5P$4.init(document.body);
    }
    if (H5PIntegration.saveFreq !== false) {
      var lastStoredOn = 0;
      var storeCurrentState = function() {
        var currentTime = (/* @__PURE__ */ new Date()).getTime();
        if (currentTime - lastStoredOn > 250) {
          lastStoredOn = currentTime;
          for (var i = 0; i < H5P$4.instances.length; i++) {
            var instance2 = H5P$4.instances[i];
            if (instance2.getCurrentState instanceof Function || typeof instance2.getCurrentState === "function") {
              var state = instance2.getCurrentState();
              if (state !== void 0) {
                H5P$4.setUserData(instance2.contentId, "state", state, { deleteOnChange: true, async: false });
              }
            }
          }
        }
      };
      H5P$4.$window.one("beforeunload unload", function() {
        H5P$4.$window.off("pagehide beforeunload unload");
        storeCurrentState();
      });
      H5P$4.$window.on("pagehide", storeCurrentState);
    }
  });
})(H5P$4.jQuery);
var H5P$3 = window.H5P = window.H5P || {};
H5P$3.Event = function(type, data, extras) {
  this.type = type;
  this.data = data;
  var bubbles = false;
  var external = false;
  var scheduledForExternal = false;
  if (extras === void 0) {
    extras = {};
  }
  if (extras.bubbles === true) {
    bubbles = true;
  }
  if (extras.external === true) {
    external = true;
  }
  this.preventBubbling = function() {
    bubbles = false;
  };
  this.getBubbles = function() {
    return bubbles;
  };
  this.scheduleForExternal = function() {
    if (external && !scheduledForExternal) {
      scheduledForExternal = true;
      return true;
    }
    return false;
  };
};
H5P$3.EventDispatcher = function() {
  function EventDispatcher() {
    var self = this;
    var triggers = {};
    this.on = function(type, listener, thisArg) {
      if (typeof listener !== "function") {
        throw TypeError("listener must be a function");
      }
      self.trigger("newListener", { "type": type, "listener": listener });
      var trigger = { "listener": listener, "thisArg": thisArg };
      if (!triggers[type]) {
        triggers[type] = [trigger];
      } else {
        triggers[type].push(trigger);
      }
    };
    this.once = function(type, listener, thisArg) {
      if (!(listener instanceof Function)) {
        throw TypeError("listener must be a function");
      }
      var once = function(event) {
        self.off(event.type, once);
        listener.call(this, event);
      };
      self.on(type, once, thisArg);
    };
    this.off = function(type, listener) {
      if (listener !== void 0 && !(listener instanceof Function)) {
        throw TypeError("listener must be a function");
      }
      if (triggers[type] === void 0) {
        return;
      }
      if (listener === void 0) {
        delete triggers[type];
        self.trigger("removeListener", type);
        return;
      }
      for (var i = 0; i < triggers[type].length; i++) {
        if (triggers[type][i].listener === listener) {
          triggers[type].splice(i, 1);
          self.trigger("removeListener", type, { "listener": listener });
          break;
        }
      }
      if (!triggers[type].length) {
        delete triggers[type];
      }
    };
    var call = function(type, event) {
      if (triggers[type] === void 0) {
        return;
      }
      var handlers = triggers[type].slice();
      for (var i = 0; i < handlers.length; i++) {
        var trigger = handlers[i];
        var thisArg = trigger.thisArg ? trigger.thisArg : this;
        trigger.listener.call(thisArg, event);
      }
    };
    this.trigger = function(event, eventData, extras) {
      if (event === void 0) {
        return;
      }
      if (event instanceof String || typeof event === "string") {
        event = new H5P$3.Event(event, eventData, extras);
      } else if (eventData !== void 0) {
        event.data = eventData;
      }
      var scheduledForExternal = event.scheduleForExternal();
      call.call(this, event.type, event);
      call.call(this, "*", event);
      if (event.getBubbles() && self.parent instanceof H5P$3.EventDispatcher && (self.parent.trigger instanceof Function || typeof self.parent.trigger === "function")) {
        self.parent.trigger(event);
      }
      if (scheduledForExternal) {
        H5P$3.externalDispatcher.trigger.call(this, event);
      }
    };
  }
  return EventDispatcher;
}();
var H5P$2 = window.H5P = window.H5P || {};
H5P$2.externalDispatcher = new H5P$2.EventDispatcher();
H5P$2.EventDispatcher.prototype.triggerXAPI = function(verb, extra) {
  this.trigger(this.createXAPIEventTemplate(verb, extra));
};
H5P$2.EventDispatcher.prototype.createXAPIEventTemplate = function(verb, extra) {
  var event = new H5P$2.XAPIEvent();
  event.setActor();
  event.setVerb(verb);
  if (extra !== void 0) {
    for (var i in extra) {
      event.data.statement[i] = extra[i];
    }
  }
  if (!("object" in event.data.statement)) {
    event.setObject(this);
  }
  if (!("context" in event.data.statement)) {
    event.setContext(this);
  }
  return event;
};
H5P$2.EventDispatcher.prototype.triggerXAPICompleted = function(score, maxScore, success) {
  this.triggerXAPIScored(score, maxScore, "completed", true, success);
};
H5P$2.EventDispatcher.prototype.triggerXAPIScored = function(score, maxScore, verb, completion, success) {
  var event = this.createXAPIEventTemplate(verb);
  event.setScoredResult(score, maxScore, this, completion, success);
  this.trigger(event);
};
H5P$2.EventDispatcher.prototype.setActivityStarted = function() {
  if (this.activityStartTime === void 0) {
    if (this.contentId !== void 0 && H5PIntegration.contents !== void 0 && H5PIntegration.contents["cid-" + this.contentId] !== void 0) {
      this.triggerXAPI("attempted");
    }
    this.activityStartTime = Date.now();
  }
};
H5P$2.xAPICompletedListener = function(event) {
  if ((event.getVerb() === "completed" || event.getVerb() === "answered") && !event.getVerifiedStatementValue(["context", "contextActivities", "parent"])) {
    var score = event.getScore();
    var maxScore = event.getMaxScore();
    var contentId = event.getVerifiedStatementValue(["object", "definition", "extensions", "http://h5p.org/x-api/h5p-local-content-id"]);
    H5P$2.setFinished(contentId, score, maxScore);
  }
};
var H5P$1 = window.H5P = window.H5P || {};
H5P$1.XAPIEvent = function() {
  H5P$1.Event.call(this, "xAPI", { "statement": {} }, { bubbles: true, external: true });
};
H5P$1.XAPIEvent.prototype = Object.create(H5P$1.Event.prototype);
H5P$1.XAPIEvent.prototype.constructor = H5P$1.XAPIEvent;
H5P$1.XAPIEvent.prototype.setScoredResult = function(score, maxScore, instance2, completion, success) {
  this.data.statement.result = {};
  if (typeof score !== "undefined") {
    if (typeof maxScore === "undefined") {
      this.data.statement.result.score = { "raw": score };
    } else {
      this.data.statement.result.score = {
        "min": 0,
        "max": maxScore,
        "raw": score
      };
      if (maxScore > 0) {
        this.data.statement.result.score.scaled = Math.round(score / maxScore * 1e4) / 1e4;
      }
    }
  }
  if (typeof completion === "undefined") {
    this.data.statement.result.completion = this.getVerb() === "completed" || this.getVerb() === "answered";
  } else {
    this.data.statement.result.completion = completion;
  }
  if (typeof success !== "undefined") {
    this.data.statement.result.success = success;
  }
  if (instance2 && instance2.activityStartTime) {
    var duration = Math.round((Date.now() - instance2.activityStartTime) / 10) / 100;
    this.data.statement.result.duration = "PT" + duration + "S";
  }
};
H5P$1.XAPIEvent.prototype.setVerb = function(verb) {
  if (H5P$1.jQuery.inArray(verb, H5P$1.XAPIEvent.allowedXAPIVerbs) !== -1) {
    this.data.statement.verb = {
      "id": "http://adlnet.gov/expapi/verbs/" + verb,
      "display": {
        "en-US": verb
      }
    };
  } else if (verb.id !== void 0) {
    this.data.statement.verb = verb;
  }
};
H5P$1.XAPIEvent.prototype.getVerb = function(full) {
  var statement = this.data.statement;
  if ("verb" in statement) {
    if (full === true) {
      return statement.verb;
    }
    return statement.verb.id.slice(31);
  } else {
    return null;
  }
};
H5P$1.XAPIEvent.prototype.setObject = function(instance2) {
  if (instance2.contentId) {
    this.data.statement.object = {
      "id": this.getContentXAPIId(instance2),
      "objectType": "Activity",
      "definition": {
        "extensions": {
          "http://h5p.org/x-api/h5p-local-content-id": instance2.contentId
        }
      }
    };
    if (instance2.subContentId) {
      this.data.statement.object.definition.extensions["http://h5p.org/x-api/h5p-subContentId"] = instance2.subContentId;
      if (typeof instance2.getTitle === "function") {
        this.data.statement.object.definition.name = {
          "en-US": instance2.getTitle()
        };
      }
    } else {
      var content = H5P$1.getContentForInstance(instance2.contentId);
      if (content && content.metadata && content.metadata.title) {
        this.data.statement.object.definition.name = {
          "en-US": H5P$1.createTitle(content.metadata.title)
        };
      }
    }
  } else {
    this.data.statement.object = {
      definition: {}
    };
  }
};
H5P$1.XAPIEvent.prototype.setContext = function(instance2) {
  if (instance2.parent && (instance2.parent.contentId || instance2.parent.subContentId)) {
    this.data.statement.context = {
      "contextActivities": {
        "parent": [
          {
            "id": this.getContentXAPIId(instance2.parent),
            "objectType": "Activity"
          }
        ]
      }
    };
  }
  if (instance2.libraryInfo) {
    if (this.data.statement.context === void 0) {
      this.data.statement.context = { "contextActivities": {} };
    }
    this.data.statement.context.contextActivities.category = [
      {
        "id": "http://h5p.org/libraries/" + instance2.libraryInfo.versionedNameNoSpaces,
        "objectType": "Activity"
      }
    ];
  }
};
H5P$1.XAPIEvent.prototype.setActor = function() {
  if (H5PIntegration.user !== void 0) {
    this.data.statement.actor = {
      "name": H5PIntegration.user.name,
      "mbox": "mailto:" + H5PIntegration.user.mail,
      "objectType": "Agent"
    };
  } else {
    var uuid;
    try {
      if (localStorage.H5PUserUUID) {
        uuid = localStorage.H5PUserUUID;
      } else {
        uuid = H5P$1.createUUID();
        localStorage.H5PUserUUID = uuid;
      }
    } catch (err) {
      uuid = "not-trackable-" + H5P$1.createUUID();
    }
    this.data.statement.actor = {
      "account": {
        "name": uuid,
        "homePage": H5PIntegration.siteUrl
      },
      "objectType": "Agent"
    };
  }
};
H5P$1.XAPIEvent.prototype.getMaxScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "max"]);
};
H5P$1.XAPIEvent.prototype.getScore = function() {
  return this.getVerifiedStatementValue(["result", "score", "raw"]);
};
H5P$1.XAPIEvent.prototype.getContentXAPIId = function(instance2) {
  var xAPIId;
  if (instance2.contentId && H5PIntegration && H5PIntegration.contents && H5PIntegration.contents["cid-" + instance2.contentId]) {
    xAPIId = H5PIntegration.contents["cid-" + instance2.contentId].url;
    if (instance2.subContentId) {
      xAPIId += "?subContentId=" + instance2.subContentId;
    }
  }
  return xAPIId;
};
H5P$1.XAPIEvent.prototype.isFromChild = function() {
  var parentId = this.getVerifiedStatementValue(["context", "contextActivities", "parent", 0, "id"]);
  return !parentId || parentId.indexOf("subContentId") === -1;
};
H5P$1.XAPIEvent.prototype.getVerifiedStatementValue = function(keys) {
  var val = this.data.statement;
  for (var i = 0; i < keys.length; i++) {
    if (val[keys[i]] === void 0) {
      return null;
    }
    val = val[keys[i]];
  }
  return val;
};
H5P$1.XAPIEvent.allowedXAPIVerbs = [
  "answered",
  "asked",
  "attempted",
  "attended",
  "commented",
  "completed",
  "exited",
  "experienced",
  "failed",
  "imported",
  "initialized",
  "interacted",
  "launched",
  "mastered",
  "passed",
  "preferred",
  "progressed",
  "registered",
  "responded",
  "resumed",
  "scored",
  "shared",
  "suspended",
  "terminated",
  "voided",
  // Custom verbs used for action toolbar below content
  "downloaded",
  "copied",
  "accessed-reuse",
  "accessed-embed",
  "accessed-copyright"
];
H5P.ContentType = function(isRootLibrary) {
  function ContentType() {
  }
  ContentType.prototype = new H5P.EventDispatcher();
  ContentType.prototype.isRoot = function() {
    return isRootLibrary;
  };
  ContentType.prototype.getLibraryFilePath = function(filePath) {
    return H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) + "/" + filePath;
  };
  return ContentType;
};
H5P.ConfirmationDialog = function(EventDispatcher) {
  function ConfirmationDialog(options) {
    EventDispatcher.call(this);
    var self = this;
    H5P.ConfirmationDialog.uniqueId += 1;
    var uniqueId = H5P.ConfirmationDialog.uniqueId;
    options = options || {};
    options.headerText = options.headerText || H5P.t("confirmDialogHeader");
    options.dialogText = options.dialogText || H5P.t("confirmDialogBody");
    options.cancelText = options.cancelText || H5P.t("cancelLabel");
    options.confirmText = options.confirmText || H5P.t("confirmLabel");
    function dialogConfirmed(e) {
      self.hide();
      self.trigger("confirmed");
      e.preventDefault();
    }
    function dialogCanceled(e) {
      self.hide();
      self.trigger("canceled");
      e.preventDefault();
    }
    function flowTo(element, e) {
      element.focus();
      e.preventDefault();
    }
    var exitButtonOffset = 2 * 16;
    var shadowOffset = 8;
    var resizeIFrame = false;
    var popupBackground = document.createElement("div");
    popupBackground.classList.add("h5p-confirmation-dialog-background", "hidden", "hiding");
    var popup = document.createElement("div");
    popup.classList.add("h5p-confirmation-dialog-popup", "hidden");
    if (options.classes) {
      options.classes.forEach(function(popupClass) {
        popup.classList.add(popupClass);
      });
    }
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-labelledby", "h5p-confirmation-dialog-dialog-text-" + uniqueId);
    popupBackground.appendChild(popup);
    popup.addEventListener("keydown", function(e) {
      if (e.key === "Escape") {
        dialogCanceled(e);
      }
    });
    var header = document.createElement("div");
    header.classList.add("h5p-confirmation-dialog-header");
    popup.appendChild(header);
    var headerText = document.createElement("div");
    headerText.classList.add("h5p-confirmation-dialog-header-text");
    headerText.innerHTML = options.headerText;
    header.appendChild(headerText);
    var body = document.createElement("div");
    body.classList.add("h5p-confirmation-dialog-body");
    popup.appendChild(body);
    var text = document.createElement("div");
    text.classList.add("h5p-confirmation-dialog-text");
    text.innerHTML = options.dialogText;
    text.id = "h5p-confirmation-dialog-dialog-text-" + uniqueId;
    body.appendChild(text);
    var buttons = document.createElement("div");
    buttons.classList.add("h5p-confirmation-dialog-buttons");
    body.appendChild(buttons);
    var cancelButton = document.createElement("button");
    cancelButton.classList.add("h5p-core-cancel-button");
    cancelButton.textContent = options.cancelText;
    var confirmButton = document.createElement("button");
    confirmButton.classList.add("h5p-core-button");
    confirmButton.classList.add("h5p-confirmation-dialog-confirm-button");
    confirmButton.textContent = options.confirmText;
    var exitButton = document.createElement("button");
    exitButton.classList.add("h5p-confirmation-dialog-exit");
    exitButton.tabIndex = -1;
    exitButton.setAttribute("aria-label", options.cancelText);
    cancelButton.addEventListener("click", dialogCanceled);
    cancelButton.addEventListener("keydown", function(e) {
      if (e.key === " ") {
        dialogCanceled(e);
      } else if (e.key === "Tab" && e.shiftKey) {
        const nextbutton = options.hideExit ? confirmButton : exitButton;
        flowTo(nextbutton, e);
      }
    });
    if (!options.hideCancel) {
      buttons.appendChild(cancelButton);
    } else {
      buttons.classList.add("center");
    }
    confirmButton.addEventListener("click", dialogConfirmed);
    confirmButton.addEventListener("keydown", function(e) {
      if (e.key === " ") {
        dialogConfirmed(e);
      } else if (e.key === "Tab" && !e.shiftKey) {
        let nextButton = confirmButton;
        if (!options.hideExit) {
          nextButton = exitButton;
        } else if (!options.hideCancel) {
          nextButton = cancelButton;
        }
        flowTo(nextButton, e);
      }
    });
    buttons.appendChild(confirmButton);
    exitButton.addEventListener("click", dialogCanceled);
    exitButton.addEventListener("keydown", function(e) {
      if (e.key === " ") {
        dialogCanceled(e);
      } else if (e.key === "Tab" && !e.shiftKey) {
        const nextButton = options.hideCancel ? confirmButton : cancelButton;
        flowTo(nextButton, e);
      }
    });
    if (!options.hideExit) {
      popup.appendChild(exitButton);
    }
    var wrapperElement;
    var focusPredator;
    var wrapperSiblingsHidden = [];
    var popupSiblingsHidden = [];
    var previouslyFocused;
    this.appendTo = function(wrapper) {
      wrapperElement = wrapper;
      return this;
    };
    var captureFocus = function(e) {
      if (!popupBackground.contains(e.target)) {
        e.preventDefault();
        confirmButton.focus();
      }
    };
    var hideSiblings = function(element) {
      var hiddenSiblings = [];
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        hiddenSiblings[i] = siblings[i].getAttribute("aria-hidden") ? true : false;
        if (siblings[i] !== element) {
          siblings[i].setAttribute("aria-hidden", true);
        }
      }
      return hiddenSiblings;
    };
    var restoreSiblings = function(element, hiddenSiblings) {
      var siblings = element.parentNode.children;
      var i;
      for (i = 0; i < siblings.length; i += 1) {
        if (siblings[i] !== element && !hiddenSiblings[i]) {
          siblings[i].removeAttribute("aria-hidden");
        }
      }
    };
    var startCapturingFocus = function() {
      focusPredator = wrapperElement.parentNode || wrapperElement;
      focusPredator.addEventListener("focus", captureFocus, true);
    };
    var stopCapturingFocus = function() {
      focusPredator.removeAttribute("aria-hidden");
      focusPredator.removeEventListener("focus", captureFocus, true);
    };
    var disableUnderlay = function() {
      wrapperSiblingsHidden = hideSiblings(wrapperElement);
      popupSiblingsHidden = hideSiblings(popupBackground);
    };
    var restoreUnderlay = function() {
      restoreSiblings(wrapperElement, wrapperSiblingsHidden);
      restoreSiblings(popupBackground, popupSiblingsHidden);
    };
    var fitToContainer = function(offsetTop) {
      var popupOffsetTop = parseInt(popup.style.top, 10);
      if (offsetTop !== void 0) {
        popupOffsetTop = offsetTop;
      }
      if (!popupOffsetTop) {
        popupOffsetTop = 0;
      }
      if (popupOffsetTop + popup.offsetHeight > wrapperElement.offsetHeight) {
        popupOffsetTop = wrapperElement.offsetHeight - popup.offsetHeight - shadowOffset;
      }
      if (popupOffsetTop - exitButtonOffset <= 0) {
        popupOffsetTop = exitButtonOffset + shadowOffset;
        resizeIFrame = true;
      }
      popup.style.top = popupOffsetTop + "px";
    };
    this.show = function(offsetTop) {
      previouslyFocused = document.activeElement;
      wrapperElement.appendChild(popupBackground);
      startCapturingFocus();
      disableUnderlay();
      popupBackground.classList.remove("hidden");
      fitToContainer(offsetTop);
      setTimeout(function() {
        popup.classList.remove("hidden");
        popupBackground.classList.remove("hiding");
        setTimeout(function() {
          confirmButton.focus();
          if (resizeIFrame && options.instance) {
            var minHeight = parseInt(popup.offsetHeight, 10) + exitButtonOffset + 2 * shadowOffset;
            self.setViewPortMinimumHeight(minHeight);
            options.instance.trigger("resize");
            resizeIFrame = false;
          }
        }, 100);
      }, 0);
      return this;
    };
    this.hide = function() {
      popupBackground.classList.add("hiding");
      popup.classList.add("hidden");
      stopCapturingFocus();
      if (!options.skipRestoreFocus) {
        previouslyFocused.focus();
      }
      restoreUnderlay();
      setTimeout(function() {
        popupBackground.classList.add("hidden");
        wrapperElement.removeChild(popupBackground);
        self.setViewPortMinimumHeight(null);
      }, 100);
      return this;
    };
    this.getElement = function() {
      return popup;
    };
    this.getPreviouslyFocused = function() {
      return previouslyFocused;
    };
    this.setViewPortMinimumHeight = function(minHeight) {
      var container = document.querySelector(".h5p-container") || document.body;
      container.style.minHeight = typeof minHeight === "number" ? minHeight + "px" : minHeight;
    };
  }
  ConfirmationDialog.prototype = Object.create(EventDispatcher.prototype);
  ConfirmationDialog.prototype.constructor = ConfirmationDialog;
  return ConfirmationDialog;
}(H5P.EventDispatcher);
H5P.ConfirmationDialog.uniqueId = -1;
H5P.RequestQueue = function($, EventDispatcher) {
  const RequestQueue = function(options) {
    EventDispatcher.call(this);
    this.processingQueue = false;
    options = options || {};
    this.showToast = options.showToast;
    this.itemName = "requestQueue";
  };
  RequestQueue.prototype.add = function(url, data) {
    if (!window.localStorage) {
      return false;
    }
    let storedStatements = this.getStoredRequests();
    if (!storedStatements) {
      storedStatements = [];
    }
    storedStatements.push({
      url,
      data
    });
    window.localStorage.setItem(this.itemName, JSON.stringify(storedStatements));
    this.trigger("requestQueued", {
      storedStatements,
      processingQueue: this.processingQueue
    });
    return true;
  };
  RequestQueue.prototype.getStoredRequests = function() {
    if (!window.localStorage) {
      return false;
    }
    const item = window.localStorage.getItem(this.itemName);
    if (!item) {
      return [];
    }
    return JSON.parse(item);
  };
  RequestQueue.prototype.clearQueue = function() {
    if (!window.localStorage) {
      return false;
    }
    window.localStorage.removeItem(this.itemName);
    return true;
  };
  RequestQueue.prototype.resumeQueue = function() {
    if (!H5PIntegration || !window.navigator || !window.localStorage) {
      return false;
    }
    if (this.processingQueue) {
      return false;
    }
    const queue = this.getStoredRequests();
    const queueLength = queue.length;
    this.clearQueue();
    if (!queueLength) {
      this.trigger("emptiedQueue", queue);
      return true;
    }
    this.processingQueue = true;
    this.processQueue(queue);
    return true;
  };
  RequestQueue.prototype.processQueue = function(queue) {
    if (!queue.length) {
      return;
    }
    this.trigger("processingQueue");
    const request = queue.shift();
    const self = this;
    $.post(request.url, request.data).fail(self.onQueuedRequestFail.bind(self, request)).always(self.onQueuedRequestProcessed.bind(self, queue));
  };
  RequestQueue.prototype.onQueuedRequestFail = function(request) {
    if (!window.navigator.onLine) {
      this.add(request.url, request.data);
    }
  };
  RequestQueue.prototype.onQueuedRequestProcessed = function(queue) {
    if (queue.length) {
      this.processQueue(queue);
      return;
    }
    this.processingQueue = false;
    const requestQueue = this.getStoredRequests();
    this.trigger("queueEmptied", requestQueue);
  };
  RequestQueue.prototype.displayToastMessage = function(msg, forceShow, configOverride) {
    if (!this.showToast && !forceShow) {
      return;
    }
    const config = H5P.jQuery.extend(true, {}, {
      position: {
        horizontal: "centered",
        vertical: "centered",
        noOverflowX: true
      }
    }, configOverride);
    H5P.attachToastTo(H5P.jQuery(".h5p-content:first")[0], msg, config);
  };
  return RequestQueue;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.OfflineRequestQueue = function(RequestQueue, Dialog) {
  const offlineRequestQueue = function(options) {
    const requestQueue = new RequestQueue();
    requestQueue.clearQueue();
    let startTime = null;
    const retryIntervals = [10, 20, 40, 60, 120, 300, 600];
    let intervalIndex = -1;
    let currentInterval = null;
    let isAttached = false;
    let isShowing = false;
    let isLoading = false;
    const instance2 = options.instance;
    const offlineDialog = new Dialog({
      headerText: H5P.t("offlineDialogHeader"),
      dialogText: H5P.t("offlineDialogBody"),
      confirmText: H5P.t("offlineDialogRetryButtonLabel"),
      hideCancel: true,
      hideExit: true,
      classes: ["offline"],
      instance: instance2,
      skipRestoreFocus: true
    });
    const dialog = offlineDialog.getElement();
    const countDownText = document.createElement("div");
    countDownText.classList.add("count-down");
    countDownText.innerHTML = H5P.t("offlineDialogRetryMessage").replace(":num", '<span class="count-down-num">0</span>');
    dialog.querySelector(".h5p-confirmation-dialog-text").appendChild(countDownText);
    const countDownNum = countDownText.querySelector(".count-down-num");
    const throbberWrapper = document.createElement("div");
    throbberWrapper.classList.add("throbber-wrapper");
    const throbber = document.createElement("div");
    throbber.classList.add("sending-requests-throbber");
    throbberWrapper.appendChild(throbber);
    requestQueue.on("requestQueued", function(e) {
      if (e.data && e.data.processingQueue) {
        return;
      }
      if (!isAttached) {
        const rootContent = document.body.querySelector(".h5p-content");
        if (!rootContent) {
          return;
        }
        offlineDialog.appendTo(rootContent);
        rootContent.appendChild(throbberWrapper);
        isAttached = true;
      }
      startCountDown();
    }.bind(this));
    requestQueue.on("queueEmptied", function(e) {
      if (e.data && e.data.length) {
        startCountDown(true);
        return;
      }
      clearInterval(currentInterval);
      toggleThrobber(false);
      intervalIndex = -1;
      if (isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }
      requestQueue.displayToastMessage(
        H5P.t("offlineSuccessfulSubmit"),
        true,
        {
          position: {
            vertical: "top",
            offsetVertical: "100"
          }
        }
      );
    }.bind(this));
    offlineDialog.on("confirmed", function() {
      isShowing = false;
      setTimeout(function() {
        retryRequests();
      }, 100);
    }.bind(this));
    window.addEventListener("online", function() {
      retryRequests();
    }.bind(this));
    window.addEventListener("message", function(event) {
      const isValidQueueEvent = window.parent === event.source && event.data.context === "h5p" && event.data.action === "queueRequest";
      if (!isValidQueueEvent) {
        return;
      }
      this.add(event.data.url, event.data.data);
    }.bind(this));
    const toggleThrobber = function(forceShow) {
      isLoading = !isLoading;
      if (forceShow !== void 0) {
        isLoading = forceShow;
      }
      if (isLoading && isShowing) {
        offlineDialog.hide();
        isShowing = false;
      }
      if (isLoading) {
        throbberWrapper.classList.add("show");
      } else {
        throbberWrapper.classList.remove("show");
      }
    };
    const retryRequests = function() {
      clearInterval(currentInterval);
      toggleThrobber(true);
      requestQueue.resumeQueue();
    };
    const incrementRetryInterval = function() {
      intervalIndex += 1;
      if (intervalIndex >= retryIntervals.length) {
        intervalIndex = retryIntervals.length - 1;
      }
    };
    const startCountDown = function(forceDelayedShow) {
      if (isShowing) {
        return;
      }
      toggleThrobber(false);
      if (!isShowing) {
        if (forceDelayedShow) {
          setTimeout(function() {
            offlineDialog.show(0);
          }, 100);
        } else {
          offlineDialog.show(0);
        }
      }
      isShowing = true;
      startTime = (/* @__PURE__ */ new Date()).getTime();
      incrementRetryInterval();
      clearInterval(currentInterval);
      currentInterval = setInterval(updateCountDown, 100);
    };
    const updateCountDown = function() {
      const time = (/* @__PURE__ */ new Date()).getTime();
      const timeElapsed = Math.floor((time - startTime) / 1e3);
      const timeLeft = retryIntervals[intervalIndex] - timeElapsed;
      countDownNum.textContent = timeLeft.toString();
      if (timeLeft <= 0) {
        retryRequests();
      }
    };
    this.add = function(url, data) {
      if (window.navigator.onLine) {
        return false;
      }
      requestQueue.add(url, data);
    };
  };
  return offlineRequestQueue;
}(H5P.RequestQueue, H5P.ConfirmationDialog);
H5P.ActionBar = function($, EventDispatcher) {
  function ActionBar(displayOptions) {
    EventDispatcher.call(this);
    var self = this;
    var hasActions = false;
    var $actions = H5P.jQuery('<ul class="h5p-actions"></ul>');
    var addActionButton = function(type, customClass) {
      var handler = function() {
        self.trigger(type);
      };
      const $actionList = H5P.jQuery("<li/>", {
        "class": "h5p-button h5p-noselect h5p-" + (customClass ? customClass : type),
        appendTo: $actions
      });
      const $actionButton = H5P.jQuery("<button/>", {
        tabindex: 0,
        "aria-label": H5P.t(type + "Description"),
        html: H5P.t(type),
        on: {
          click: handler,
          keypress: function(e) {
            if (e.which === 32) {
              handler();
              e.preventDefault();
            }
          }
        },
        appendTo: $actionList
      });
      H5P.Tooltip($actionButton.get(0));
      hasActions = true;
    };
    if (displayOptions.export || displayOptions.copy) {
      addActionButton("reuse", "export");
    }
    if (displayOptions.copyright) {
      addActionButton("copyrights");
    }
    if (displayOptions.embed) {
      addActionButton("embed");
    }
    if (displayOptions.icon) {
      const $h5pLogo = H5P.jQuery('<li><a class="h5p-link" href="http://h5p.org" target="_blank" aria-label="' + H5P.t("h5pDescription") + '"></a></li>').appendTo($actions);
      H5P.Tooltip($h5pLogo.find(".h5p-link").get(0));
      hasActions = true;
    }
    self.getDOMElement = function() {
      return $actions;
    };
    self.hasActions = function() {
      return hasActions;
    };
  }
  ActionBar.prototype = Object.create(EventDispatcher.prototype);
  ActionBar.prototype.constructor = ActionBar;
  return ActionBar;
}(H5P.jQuery, H5P.EventDispatcher);
H5P.Tooltip = function() {
  function Tooltip(triggeringElement, options) {
    H5P.Tooltip.uniqueId += 1;
    const tooltipId = "h5p-tooltip-" + H5P.Tooltip.uniqueId;
    options = options || {};
    options.classes = options.classes || [];
    options.ariaHidden = options.ariaHidden || true;
    let hover = false;
    let focus = false;
    const escapeFunction = function(e) {
      if (e.key === "Escape") {
        tooltip.classList.remove("h5p-tooltip-visible");
      }
    };
    const tooltip = document.createElement("div");
    tooltip.classList.add("h5p-tooltip");
    tooltip.id = tooltipId;
    tooltip.role = "tooltip";
    tooltip.innerHTML = options.text || triggeringElement.getAttribute("aria-label") || "";
    tooltip.setAttribute("aria-hidden", options.ariaHidden);
    tooltip.classList.add(...options.classes);
    triggeringElement.appendChild(tooltip);
    switch (options.position) {
      case "left":
        tooltip.classList.add("h5p-tooltip-left");
        break;
      case "right":
        tooltip.classList.add("h5p-tooltip-right");
        break;
      case "bottom":
        tooltip.classList.add("h5p-tooltip-bottom");
        break;
      default:
        options.position = "top";
    }
    if (!options.ariaHidden) {
      triggeringElement.setAttribute("aria-describedby", tooltipId);
    }
    triggeringElement.addEventListener("mouseenter", function() {
      showTooltip(true);
    });
    triggeringElement.addEventListener("mouseleave", function() {
      hideTooltip(true);
    });
    triggeringElement.addEventListener("focusin", function() {
      showTooltip(false);
    });
    triggeringElement.addEventListener("focusout", function() {
      hideTooltip(false);
    });
    tooltip.addEventListener("click", function(event) {
      event.stopPropagation();
    });
    new MutationObserver(function(mutations) {
      const ariaLabel = mutations[0].target.getAttribute("aria-label");
      if (ariaLabel) {
        tooltip.innerHTML = options.text || ariaLabel;
      }
    }).observe(triggeringElement, {
      attributes: true,
      attributeFilter: ["aria-label"]
    });
    new IntersectionObserver(function(entries) {
      entries.forEach((entry) => {
        const target = entry.target;
        const positionClass = "h5p-tooltip-" + options.position;
        if (entry.intersectionRatio === 0) {
          ["h5p-tooltip-down", "h5p-tooltip-left", "h5p-tooltip-right"].forEach(function(adjustmentClass) {
            if (adjustmentClass !== positionClass) {
              target.classList.remove(adjustmentClass);
            }
          });
        } else if (entry.intersectionRatio < 1 && (hover || focus)) {
          const targetRect = entry.boundingClientRect;
          const intersectionRect = entry.intersectionRect;
          if (intersectionRect.left > targetRect.left) {
            target.classList.add("h5p-tooltip-right");
            target.classList.remove(positionClass);
          } else if (intersectionRect.right < targetRect.right) {
            target.classList.add("h5p-tooltip-left");
            target.classList.remove(positionClass);
          }
          if (intersectionRect.top > targetRect.top) {
            target.classList.add("h5p-tooltip-down");
            target.classList.remove(positionClass);
          } else if (intersectionRect.bottom < targetRect.bottom) {
            target.classList.add("h5p-tooltip-up");
            target.classList.remove(positionClass);
          }
        }
      });
    }).observe(tooltip);
    const showTooltip = function(triggeredByHover) {
      if (triggeredByHover) {
        hover = true;
      } else {
        focus = true;
      }
      tooltip.classList.add("h5p-tooltip-visible");
      document.body.addEventListener("keydown", escapeFunction, true);
    };
    const hideTooltip = function(triggeredByHover) {
      if (triggeredByHover) {
        hover = false;
      } else {
        focus = false;
      }
      if (!hover && !focus) {
        tooltip.classList.remove("h5p-tooltip-visible");
        document.body.removeEventListener("keydown", escapeFunction, true);
      }
    };
    this.setText = function(text) {
      options.text = text;
      tooltip.innerHTML = options.text || triggeringElement.getAttribute("aria-label") || "";
    };
    this.getElement = function() {
      return tooltip;
    };
  }
  return Tooltip;
}();
H5P.Tooltip.uniqueId = -1;
H5P.getLibraryPath = function(library) {
  return H5PIntegration._libraryPaths[library];
};
H5P.getPath = function(path, contentId) {
  const hasProtocol = function(path2) {
    return path2.match(/^[a-z0-9]+:\\/\\//i);
  };
  if (hasProtocol(path)) {
    return path;
  }
  let prefix;
  if (contentId !== void 0) {
    prefix = H5PIntegration.url + "/content";
  } else if (window.H5PEditor !== void 0) {
    prefix = H5PEditor.filesPath;
  } else {
    return;
  }
  return prefix + "/" + path;
};
`;
const frameStyle = `/* General CSS for H5P. Licensed under the MIT License.*/
/* Custom H5P font to use for icons. */
@font-face {
  font-family: 'h5p';
  src:  url('data:application/vnd.ms-fontobject;base64,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QiQkQh4eMBESERESETAeHkIkTZoCBQECAgICAQUCICACBQECAgICAQUCbgMEAQICIAIFAQICAgIBBQKaAgQBAQICAQEEApoCBAECAQECAQQCIgECAQQCbgIDAgECAgECAwIiIm5CAgUBAgICAgEFAkIDBAECAgICAQRFAgQBAQICAQEEAkICBAECAQECAQQCAWABAQEBAQEBAwIDAwECAQEDAQMCAQQCAgYFBQcCAwUDAwIEBAMGAQEDAwMFAwIFAwMEAgEBAQEBAQECAwMDBAIBCAcLEQUBAQEBAwICAgECAwICBAIBAgcDBAYBAgYFBQYBAgMBAQMBAgIBAgILDAUGBgkEAQcFBQoEBAUDBAMFAgECAgEDAgQDAgUFCAcBBAUCAgEBAQMCAgMCAic8FgEBAQMCAgMBAgUDAgMCAQEBAwYFAwICBAIBAQIBBwsEAwECAwIDBQICAwEBAQECAwIEBAMFAQEEAwIEAQEBAQEBAQEBBAIBAQIBAQEBAgECAwIBAQIBBAcDAQICAgQCBAQEAwQDAQMBAgEFAwMDAQIBAwEBAQICBQQCBgMDAwIBAQIBAgEFAwQEAgQDAgICAQQCAgMDBgMBBAMDBQEBBAQDBAECAQMDCAMCAQICCAcEBwMDAQEBAQEBAQEBAQEBAQUDAwUCAQMCAgUCAwYDAgQCAQQBAgQCBAIDBAEBAwIBAgECAgIBAQICAQIBAgQCAgMBAQECAwEBAQEBAQEBAQIBAQMBAgEBAQEBAQIBAQEBAQMBAgMBAQQDBAQBAQIBAQEBAwICAgEEBQMCAgwBAgEBAQQCBAMFAwMBBAECBAICAgIDAQECAQICAwIBBAMBAgQDAQIBAwICBQQDAwECAQYBAQEDAQEEAgIDAQEBAQICAQEDAgIFAgMBAwMCAgMBAwQCAQIBAQMCBAoFAQIBAgEBAQECBQMCBQMCAwEEJSoKCTFbKi9MHBwcHBwcTC8waTk5aDAwTBwRGAYQIRE1Yit3AQIBAQEBAQEBAQEBAgQCBwEEAgIDBAMBAQIBAQEBAQEBAQEDAgIDBQYDAgcEBQcDBAoGBQgCAgEXKxICAQMHAwG0HkMkI0IfHjASERISERIwHh5DIyRCHx4wEhESEhESMB7+1zcCBAIBAq8DBAECAQECAQQDNwIEAgECbQIBAgQCNwIFAQIBAQICBAIBMzcCBAIB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');
  src:  url('data:application/vnd.ms-fontobject;base64,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QiQkQh4eMBESERESETAeHkIkTZoCBQECAgICAQUCICACBQECAgICAQUCbgMEAQICIAIFAQICAgIBBQKaAgQBAQICAQEEApoCBAECAQECAQQCIgECAQQCbgIDAgECAgECAwIiIm5CAgUBAgICAgEFAkIDBAECAgICAQRFAgQBAQICAQEEAkICBAECAQECAQQCAWABAQEBAQEBAwIDAwECAQEDAQMCAQQCAgYFBQcCAwUDAwIEBAMGAQEDAwMFAwIFAwMEAgEBAQEBAQECAwMDBAIBCAcLEQUBAQEBAwICAgECAwICBAIBAgcDBAYBAgYFBQYBAgMBAQMBAgIBAgILDAUGBgkEAQcFBQoEBAUDBAMFAgECAgEDAgQDAgUFCAcBBAUCAgEBAQMCAgMCAic8FgEBAQMCAgMBAgUDAgMCAQEBAwYFAwICBAIBAQIBBwsEAwECAwIDBQICAwEBAQECAwIEBAMFAQEEAwIEAQEBAQEBAQEBBAIBAQIBAQEBAgECAwIBAQIBBAcDAQICAgQCBAQEAwQDAQMBAgEFAwMDAQIBAwEBAQICBQQCBgMDAwIBAQIBAgEFAwQEAgQDAgICAQQCAgMDBgMBBAMDBQEBBAQDBAECAQMDCAMCAQICCAcEBwMDAQEBAQEBAQEBAQEBAQUDAwUCAQMCAgUCAwYDAgQCAQQBAgQCBAIDBAEBAwIBAgECAgIBAQICAQIBAgQCAgMBAQECAwEBAQEBAQEBAQIBAQMBAgEBAQEBAQIBAQEBAQMBAgMBAQQDBAQBAQIBAQEBAwICAgEEBQMCAgwBAgEBAQQCBAMFAwMBBAECBAICAgIDAQECAQICAwIBBAMBAgQDAQIBAwICBQQDAwECAQYBAQEDAQEEAgIDAQEBAQICAQEDAgIFAgMBAwMCAgMBAwQCAQIBAQMCBAoFAQIBAgEBAQECBQMCBQMCAwEEJSoKCTFbKi9MHBwcHBwcTC8waTk5aDAwTBwRGAYQIRE1Yit3AQIBAQEBAQEBAQEBAgQCBwEEAgIDBAMBAQIBAQEBAQEBAQEDAgIDBQYDAgcEBQcDBAoGBQgCAgEXKxICAQMHAwG0HkMkI0IfHjASERISERIwHh5DIyRCHx4wEhESEhESMB7+1zcCBAIBAq8DBAECAQECAQQDNwIEAgECbQIBAgQCNwIFAQIBAQICBAIBMzcCBAIB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') format('embedded-opentype'),
    url('data:font/ttf;base64,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') format('truetype'),
    url('data:font/woff;base64,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') format('woff'),
    url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWNvcmUtMjciLAoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIiwKCSJjb3B5cmlnaHQiOiAiSDVQIiwKCSJtYWpvclZlcnNpb24iOiAxLAoJIm1pbm9yVmVyc2lvbiI6IDEsCgkidmVyc2lvbiI6ICJWZXJzaW9uIDEuMSIsCgkiZm9udElkIjogImg1cC1jb3JlLTI3IiwKCSJwc05hbWUiOiAiaDVwLWNvcmUtMjciLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtY29yZS0yNyIKfQpdXT4KPC9qc29uPgo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Img1cC1jb3JlLTI3IiBob3Jpei1hZHYteD0iMTAyNCI+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU2NTsiIGdseXBoLW5hbWU9ImFycm93LWRvd24iIGRhdGEtdGFncz0iYXJyb3ctZG93biIgZD0iTTIzNCA1NDQuMzM0aDU1NmwtMjc4LTI3OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNTY2OyIgZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgZGF0YS10YWdzPSJhcnJvdy1sZWZ0IiBkPSJNMzgxIDE0My4zMzR2NTI0bDI2Mi0yNjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTU4ZTsiIGdseXBoLW5hbWU9ImNvbGFwc2UiIGRhdGEtdGFncz0iY29sYXBzZSIgZD0iTTUxMiA1NjMuMzM0bDI1Ni0yNTYtNjAtNjAtMTk2IDE5Ni0xOTYtMTk2LTYwIDYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU1OGY7IiBnbHlwaC1uYW1lPSJleHBhbmQiIGRhdGEtdGFncz0iZXhwYW5kIiBkPSJNNzA4IDU2My4zMzRsNjAtNjAtMjU2LTI1Ni0yNTYgMjU2IDYwIDYwIDE5Ni0xOTZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwMDsiIGdseXBoLW5hbWU9Im1vdmUiIGRhdGEtdGFncz0ibW92ZSIgZD0iTTM4Ni42NjIgODMxLjcyOGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek01NjYuMDY3IDgzMS43MjhoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiA2NzUuNDY1aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgNjc1LjQ2NWg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDUxOS4xaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgNTE5LjFoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNMzg2LjY2MiAzNjIuODM4aDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgMzYyLjgzOGg3MS4yN3YtNzEuMjdoLTcxLjI3djcxLjI3ek0zODYuNjYyIDIwNi40NzNoNzEuMjd2LTcxLjI3aC03MS4yN3Y3MS4yN3pNNTY2LjA2NyAyMDYuNDczaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTM4Ni42NjIgNTAuMjExaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6TTU2Ni4wNjcgNTAuMjExaDcxLjI3di03MS4yN2gtNzEuMjd2NzEuMjd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwMTsiIGdseXBoLW5hbWU9ImNoZWNrLW1hcmsiIGRhdGEtdGFncz0iY2hlY2stbWFyayIgZD0iTTQ1NC4zMDEgMzczLjkybC0xMTYuOTE3IDExNi45MTctODQuNzgxLTg0LjcwNyAyMDEuNjk2LTIwMS42OTcgMzE3LjA5NyAzMTcuMDk3LTg0Ljc4MSA4NC43MDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwMjsiIGdseXBoLW5hbWU9ImRyYWctdGV4dCIgZGF0YS10YWdzPSJkcmFnLXRleHQiIGQ9Ik02NjQuNTkgMzY4LjI3M2MtMTEuMzc1IDE1LjY1Ni0yNy4xNTUgMjQuMzQyLTQ3LjIxMyAyNC4zNDItMjEuMjg1IDAtMzcuNDI5LTEyLjg0NC00OC4zMTUtMjMuODUyaC0xLjgzM2MxLjIyNCAxMS4wMDctMC4yNDcgMjMuODUyLTAuMjQ3IDMwLjgyNHY1MS4wMDZoLTUwLjE1di0yMzMuNjIzaDQxLjIyMmw3LjgyOCAxOS41N2gzLjE3OWMxMS4zNzUtMTkuNTcgMjcuMDMyLTIxLjg5NCA0Ny4wOTEtMjEuODk0IDIwLjE4MiAwIDM2LjIwNSA3LjcwNiA0Ny45NDggMjMuMTE4czE3LjYxNSAzNy41NTMgMTcuNjE1IDY1LjY4NWMwIDI3LjI3Ni01Ljc0OSA0OS4wNDgtMTcuMTIzIDY0LjgyN3pNNjI1LjgxNiAyNjUuNDAzYy01LjYyNS04LjgwNy0xMy4zMzMtMTMuMjEtMjIuODc1LTEzLjIxLTExLjc0MSAwLTIxLjI4NSAzLjkxNS0yNi42NjMgMTEuODY1cy05LjE3MyAyMS4wMzgtOS4xNzMgMzkuMjYydjUuMDE1YzAgMTYuMjY3IDMuOTE1IDI3Ljg4OCA5LjI5NiAzNC45OCA1LjI2IDcuMDkzIDE0LjMxMiAxMC42NDMgMjUuODA4IDEwLjY0MyA5LjkwNyAwIDE3LjczNi00LjE2IDIzLjQ4NS0xMi41OTdzOC41NjMtMjAuOTE2IDguNTYzLTM3LjY3M2MwLTE2Ljc1OC0yLjgxNC0yOS40NzktOC40NDEtMzguMjg1ek03OTMuMzg5IDI1Mi4xOTJjOC45MjkgMCAxNy4yNDcgMS4yMjQgMjQuODMgMy41NDZzMTMuMDg3IDYuMTE1IDIyLjg3NSAxMS4xMzF2LTM5Ljc1M2MtOS43ODYtNC43NzEtMTUuMTY4LTguMDczLTIyLjc1LTkuOTA3LTcuNzA2LTEuODMzLTE3LjM2OC0yLjY5LTI4Ljk5MS0yLjY5LTUyLjk2MyAwLTc5LjUwNSAyOS4xMTEtNzkuNTA1IDg3LjMzNSAwIDI4Ljk5MSA3LjIxNyA1MS4wMDYgMjEuNjQ5IDY2LjI5N3MzNS4xMDUgMjIuODc1IDYyLjAxNiAyMi44NzVjMTkuNjkyIDAgMzcuMzA2LTMuOTE1IDUyLjk2My0xMS42MjJsLTEzLjctMzUuOTYyYy03LjM0IDIuOTM2LTE0LjA2NiA1LjM4Mi0yMC40MjggNy4yMTctNi4yMzcgMS44MzMtMTIuNTk3IDIuODE0LTE4LjgzNyAyLjgxNC0yNC4yMTkgMC0zNi4yMDUtMTcuMTIzLTM2LjIwNS01MS40OTUtMC4yNDctMzMuMTQ3IDExLjg2NS00OS43ODMgMzYuMDgzLTQ5Ljc4M3pNNDQzLjE5OSAzNzcuNjljLTEyLjIzMyA5LjkwNy0yNS41NjUgMTQuOTIzLTQ4LjMxNSAxNC45MjMtMjMuODUyIDAtNDUuNjIyLTUuMTM3LTY1LjE5NS0xNS40MTFsMTUuMTY4LTMxLjMxM2MxOC4zNDggOC4xOTUgMzMuMjcyIDEyLjM1MiA0Ni44NDggMTIuMzUyIDE3LjczNiAwIDI0LjgzLTguNjg0IDI0LjgzLTI1LjkzMXYtNy40NmwtMjcuODg4LTAuOTc5Yy0yNS40NDItMC44NTYtNDMuMTc4LTUuNzQ5LTU1LjktMTQuMzEyLTEyLjU5Ny04LjU2My0xOC44MzctMjIuMDE4LTE4LjgzNy00MC4xMiAwLTE3LjI0NyA0Ljc3MS0zMC44MjQgMTQuMTg4LTQwLjI0MyA5LjQxOS05LjI5NiAyMi4yNjItMTQuNTU3IDM4LjY1MS0xNC41NTcgMTMuMzMzIDAgMjQuMDk2IDAuODU2IDMyLjQxNSA0Ljc3MSA4LjMxNiAzLjc5MiAxNi4zOTEgOC41NjMgMjQuMjE5IDE4LjM0OGgxLjIyNGw5LjA1Mi0xOS41N2gyMy4zNjN2MTE0LjEyYzAgMjAuMzAzLTEuNTkxIDM1LjQ3My0xMy44MjIgNDUuMzh6TTQxNi42NTUgMjgzLjc1MWMwLTEwLjI3NS0xLjU5MS0xOC40NjktOC4wNzMtMjQuNzA5cy0xMy43LTkuMjk2LTI0LjQ2Mi05LjI5NmMtMTUuMDQ1IDAtMjIuMzgzIDYuNjA1LTIyLjM4MyAxOS42OTIgMCA5LjE3MyAzLjQyNCAxNS45MDIgMTAuMDMxIDIwLjQyOHMxNS4wNDUgNi44NSAyOC41IDcuMzRsMTYuMzkxIDAuNDg5di0xMy45NDJ6TTkwNC4wODYgNDg4Ljc1MmM4LjA3MyAwIDE0LjY3Ny02LjYwNSAxNC42NzctMTQuNjc3di0yOTAuODY4YzAtOC4wNzMtNi42MDUtMTQuNjc3LTE0LjY3Ny0xNC42NzdoLTYyMS42MTJjLTguMDczIDAtMTQuNjc3IDYuNjA1LTE0LjY3NyAxNC42Nzd2MjkwLjg2OGMwIDguMDczIDYuNjA1IDE0LjY3NyAxNC42NzcgMTQuNjc3aDYyMS42MTJ6TTkwNC4wODYgNTI1LjQ0OGgtNjIxLjYxMmMtMjguMzc4IDAtNTEuMzczLTIyLjk5NC01MS4zNzMtNTEuMzczdi0yOTAuODY4YzAtMjguMzc4IDIyLjk5NC01MS4zNzMgNTEuMzczLTUxLjM3M2g2MjEuNjEyYzI4LjM3OCAwIDUxLjM3MyAyMi45OTQgNTEuMzczIDUxLjM3M3YyOTAuODY4YzAgMjguMzc4LTIyLjk5NCA1MS4zNzMtNTEuMzczIDUxLjM3M3Ywek0yNTEuNTI3IDI2NS44OTNoLTY1LjQzOXYzMi43ODFoNjUuNDM5di0zMi43ODF6TTEzMy42MTQgMjY1Ljg5M2gtMzUuNTk1Yy0xNi4yNjcgMC0yOS40NzkgMTMuMjEtMjkuNDc5IDI5LjQ3OXY5LjQxOWgzMi43ODF2LTYuMTE1aDMyLjI5MXYtMzIuNzgxek0xMDEuNDQ1IDM3MC4yMjhoLTMyLjc4MXY2NS40MzloMzIuNzgxdi02NS40Mzl6TTEwMS40NDUgNTAxLjEwOGgtMzIuNzgxdjY1LjQzOWgzMi43ODF2LTY1LjQzOXpNNzYwLjYwOSA1MTEuOTkzaC0zMi43ODF2NjUuNDM5aDMyLjc4MXYtNjUuNDM5ek0xMDEuNDQ1IDYzMi4xMDZoLTMyLjc4MXYxNy4yNDdjMCAxNi4yNjcgMTMuMjEgMjkuNDc5IDI5LjQ3OSAyOS40NzloMjcuNjQzdi0zMi43ODFoLTI0LjM0MnYtMTMuOTQyek03MjcuNTg0IDY0Ni4wNTNoLTI0LjM0MnYzMi43ODFoMjcuNjQzYzE2LjI2NyAwIDI5LjQ3OS0xMy4yMSAyOS40NzktMjkuNDc5di0xNy4yNDdoLTMyLjc4MXYxMy45NDJ6TTY0OS42NjggNjQ2LjA1M2gtNjUuNDM5djMyLjc4MWg2NS40Mzl2LTMyLjc4MXpNNTE4LjY2NiA2NDYuMDUzaC02NS40Mzl2MzIuNzgxaDY1LjQzOXYtMzIuNzgxek0zODcuNjY0IDY0Ni4wNTNoLTY1LjQzOXYzMi43ODFoNjUuNDM5di0zMi43ODF6TTI1Ni43ODcgNjQ2LjA1M2gtNjUuNDM5djMyLjc4MWg2NS40Mzl2LTMyLjc4MXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNjAzOyIgZ2x5cGgtbmFtZT0ibWFyay10aGUtd29yZHMiIGRhdGEtdGFncz0ibWFyay10aGUtd29yZHMiIGQ9Ik01MzAuODU2IDQzNS44NzhjLTE0LjYwOCAwLTI0LjAzOS00LjUxNy0zMC42NzYtMTMuNDFzLTkuMjk4LTIzLjc3Mi05LjI5OC00NC4zNTd2LTYuMzc1YzAtMjMuMjQxIDIuMjU3LTM5Ljg0MSA5LjE2NC00OS44MDIgNi45MDgtMTAuMDkyIDE3LjI2NC0xNS4wMDcgMzIuMTM5LTE1LjAwNyAxMi4wODQgMCAyMS4zOCA1LjU3OCAyOC41NTMgMTYuNzMyczEwLjYyNSAyNy4zNTggMTAuNjI1IDQ4LjYwNmMwIDIxLjI0OC0zLjcxNyAzNy4xODQtMTAuODkxIDQ3LjgwOS03LjMwMyAxMC40OTItMTcuMTMyIDE1LjgwNC0yOS42MTYgMTUuODA0ek02NDYuMjY0IDYyNC40NmgtMjQ5LjY3MWMtNDIuNjI5IDAtNzguNjIxLTM1LjMyNi03OC42MjEtNzcuOTU1di0yNjkuOTkxYzAtNDIuNjI5IDM1Ljk4OS05MC4zMDcgNzguNjIxLTkwLjMwN2gyNDkuNjcxYzQyLjYyOSAwIDc2Ljg5NCAzNC43OTUgNzYuODk0IDc3LjQyM3YyODIuODczYzAgNDIuNjI5LTM0LjI2MyA3Ny45NTUtNzYuODk0IDc3Ljk1NXpNNjA4Ljk0NCAyODguNDY3Yy0xNC44NzYtMTkuNTIyLTM1LjA2MS0yOC41NTMtNjAuNjkyLTI4LjU1My0yNS4zNjYgMC00NS4yODYgMy4xODgtNTkuNjMxIDI4LjQxOWgtNC4xMTdsLTkuODI4LTI1LjIzMmgtNDcuNjc2djI5Ni4yODZoNjMuNzQ2di02NS43MzdjMC04Ljg5OC0zLjA1NS0yMy4yNDEtNC41MTctMzYuNTJoMi4yNTdjMTMuODExIDEzLjI4MiAzNC4xMjkgMjguOTUgNjEuMjIzIDI4Ljk1IDI1LjQ5OSAwIDQ1LjQxNy0xMS41NTUgNTkuODk1LTMxLjM0MiAxNC40NzctMTkuOTIyIDIxLjY0Ni00Ny45NDIgMjEuNjQ2LTgyLjYwMyAwLTM1LjcyNC03LjQzNy02NC4wMTItMjIuMzEyLTgzLjY2N3pNODc0LjE1MiAzMDkuNTgzYzExLjE1NSAwIDIxLjExNSAxLjQ2IDMwLjY3NiA0LjUxNyA5LjU2MiAyLjkyMSAxNi4yMDMgNy43IDI4LjE1NSAxMy45NDV2LTQ5LjgwMmMtMTEuOTUxLTUuOTc3LTE4LjQ2LTEwLjA5Mi0yOC4wMjEtMTIuMzUxcy0yMS41MTQtMy40NTItMzYuMTI0LTMuNDUyYy02Ni40MDIgMC05OS40NzEgMzYuMzg4LTk5LjQ3MSAxMDkuMjk2IDAgMzYuMjU1IDkuMDMwIDYzLjg3OSAyNy4wOTMgODMuMDAzczQzLjk1NyAyOC42ODYgNzcuNjkxIDI4LjY4NmMyNC43MDEgMCA0Ni43NDctNC43ODEgNjYuNDAyLTE0LjQ3N2wtMTcuMTMyLTQ1LjAyMmMtOS4xNjQgMy43MTctMTcuNjYyIDYuNzczLTI1LjYzMiA5LjAzMC03LjgzNSAyLjM5LTE1LjgwNCAzLjU4OC0yMy42NCAzLjU4OC0zMC4yNzggMC00NS40MTctMjEuNTE0LTQ1LjQxNy02NC40MDkgMC4xMzItNDEuNzAyIDE1LjEzOC02Mi41NDkgNDUuNDE3LTYyLjU0OXpNMjQ0LjQgNDgwLjIzNWMtMTUuMjcxIDEyLjQ4NS0zMS42MDggMTguNzI1LTYwLjE1OSAxOC43MjUtMjkuODggMC01Ni44NC02LjM3NS04MS40MDctMTkuMjU1bDE5LjEyNi0zOS4zMDljMjIuOTc1IDEwLjM1OCA0MS43MDIgMTUuNDA0IDU4LjY5OSAxNS40MDQgMjIuMTc5IDAgMzEuMjA5LTEwLjc1OCAzMS4yMDktMzIuNDA0di05LjI5OGwtMzQuOTI3LTEuMTk3Yy0zMS44NzItMS4xOTctNTQuMDUyLTcuMTcxLTY5Ljk4Ny0xNy45MjktMTUuODA0LTEwLjc1OC0yMy41MDYtMjcuNjI0LTIzLjUwNi01MC4xOTkgMC0yMS42NDYgNS45NzctMzguNjQ3IDE3Ljc5NS01MC4zMzMgMTEuNjg4LTExLjY4OCAyNy44OS0xOC4xOTUgNDguMzQyLTE4LjE5NSAxNi42MDEgMCAzMC4xNDcgMS40NiA0MC41MDUgNi4yNHMyMC40NTIgMTEuNDIgMzAuMjc4IDIzLjM3M2gxLjU5M2wxMS4yODctMjMuOTA2aDI3Ljc1N3YxNDEuNDM1YzAgMjUuNDk5LTEuMzI4IDQ0LjM1Ny0xNi42MDEgNTYuODR6TTIxMS44NjIgMzYyLjU2OWMwLTEyLjg4MS0xLjk4OS0yMy4xMDktOS45Ni0zMC45NDMtOC4wOTktNy43LTE3LjEzMi0xMS42ODgtMzAuNjc2LTExLjY4OC0xOC44NTggMC0yOC4wMjEgOC4yMzMtMjguMDIxIDI0LjU2OSAwIDExLjQyIDQuMjUgMTkuOTIyIDEyLjQ4NSAyNS40OTlzMTguODU4IDguNjMzIDM1LjcyNCA5LjE2NGwyMC40NTIgMC45M3YtMTcuNTN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwNDsiIGdseXBoLW5hbWU9Im11bHRpcGxlLWNob2ljZSIgZGF0YS10YWdzPSJtdWx0aXBsZS1jaG9pY2UiIGQ9Ik0yODQuNDIgNjkxLjM0NGwtMTI3LjY5NS0xMjcuNjk1Yy0yLjYxMS0yLjYxMS02LjM5OC00LjE3OC0xMC4wNTUtNC4xNzhzLTcuNDQ0IDEuNDM0LTEwLjA1NSA0LjE3OGwtNzMuOTAxIDczLjkwMWMtMi42MTEgMi43NDItNC4xNzggNi4zOTgtNC4xNzggMTAuMDU1czEuNDM0IDcuNDQ0IDQuMTc4IDEwLjA1NWwyMC4yMzggMjAuMjM4YzIuNjExIDIuNjExIDYuMzk4IDQuMTc4IDEwLjA1NSA0LjE3OHM3LjQ0NC0xLjQzNCAxMC4wNTUtNC4xNzhsNDMuNjExLTQzLjc0IDk3LjQwMiA5Ny41MzVjMi42MTEgMi42MTEgNi4zOTggNC4xNzggMTAuMDU1IDQuMTc4czcuNDQ0LTEuNDM0IDEwLjA1NS00LjE3OGwyMC4yMzgtMjAuMjM4YzIuNjExLTIuNjExIDQuMTc4LTYuMzk4IDQuMTc4LTEwLjA1NXMtMS41NjgtNy4zMTEtNC4xNzgtMTAuMDU1ek0yNDkuNDI2IDM0MC41MDNsLTIxLjI4MS0yMS4yODFjLTIuODc0LTIuODc0LTYuNzkxLTQuNDQtMTAuNTc1LTQuNDQtMy45MTcgMC03LjgzNCAxLjU2OC0xMC41NzUgNC40NGwtNDUuOTYxIDQ1Ljk2MS00Ni4wOTEtNDUuOTYxYy0yLjg3NC0yLjg3NC02Ljc5MS00LjQ0LTEwLjU3NS00LjQ0LTMuOTE3IDAtNy44MzQgMS41NjgtMTAuNTc1IDQuNDRsLTIxLjQxNCAyMS4yODFjLTIuODc0IDIuODc0LTQuNDQgNi43OTEtNC40NCAxMC41NzUgMCAzLjkxNyAxLjU2OCA3LjgzNCA0LjQ0IDEwLjU3NWw0NS45NjEgNDUuOTYxLTQ1Ljk2MSA0Ni4wOTFjLTIuODc0IDIuODc0LTQuNDQgNi43OTEtNC40NCAxMC41NzUgMCAzLjkxNyAxLjU2OCA3LjgzNCA0LjQ0IDEwLjU3NWwyMS4yODEgMjEuMjgxYzIuODc0IDIuODc0IDYuNzkxIDQuNDQgMTAuNTc1IDQuNDQgMy45MTcgMCA3LjgzNC0xLjU2OCAxMC41NzUtNC40NGw0NS45NjEtNDUuOTYxIDQ1Ljk2MSA0NS45NjFjMi44NzQgMi44NzQgNi43OTEgNC40NCAxMC41NzUgNC40NCAzLjkxNyAwIDcuODM0LTEuNTY4IDEwLjU3NS00LjQ0bDIxLjI4MS0yMS4yODFjMi44NzQtMi44NzQgNC40NC02Ljc5MSA0LjQ0LTEwLjU3NSAwLTMuOTE3LTEuNTY4LTcuODM0LTQuNDQtMTAuNTc1bC00NS45NjEtNDUuOTYxIDQ1Ljk2MS00NS45NjFjMi44NzQtMi44NzQgNC40NC02Ljc5MSA0LjQ0LTEwLjU3NSAwLjI2Mi0zLjkxNy0xLjMwNS03LjgzNC00LjE3OC0xMC43MDl6TTI0OS40MjYgMTAwLjUxOGwtMjEuMjgxLTIxLjI4MWMtMi44NzQtMi44NzQtNi43OTEtNC40NC0xMC41NzUtNC40NC0zLjkxNyAwLTcuODM0IDEuNTY4LTEwLjU3NSA0LjQ0bC00NS45NjEgNDUuOTYxLTQ1Ljk2MS00NS45NjFjLTIuODc0LTIuODc0LTYuNzkxLTQuNDQtMTAuNTc1LTQuNDQtMy45MTcgMC03LjgzNCAxLjU2OC0xMC41NzUgNC40NGwtMjEuNTQ0IDIxLjI4MWMtMi44NzQgMi44NzQtNC40NCA2Ljc5MS00LjQ0IDEwLjU3NSAwIDMuOTE3IDEuNTY4IDcuODM0IDQuNDQgMTAuNTc1bDQ1Ljk2MSA0NS45NjEtNDUuOTYxIDQ2LjIyMmMtMi44NzQgMi44NzQtNC40NCA2Ljc5MS00LjQ0IDEwLjU3NSAwIDMuOTE3IDEuNTY4IDcuODM0IDQuNDQgMTAuNTc1bDIxLjI4MSAyMS4yODFjMi44NzQgMi44NzQgNi43OTEgNC40NCAxMC41NzUgNC40NCAzLjkxNyAwIDcuODM0LTEuNTY4IDEwLjU3NS00LjQ0bDQ1Ljk2MS00NS45NjEgNDUuOTYxIDQ1Ljk2MWMyLjg3NCAyLjg3NCA2Ljc5MSA0LjQ0IDEwLjU3NSA0LjQ0IDMuOTE3IDAgNy44MzQtMS41NjggMTAuNTc1LTQuNDRsMjEuMjgxLTIxLjI4MWMyLjg3NC0yLjg3NCA0LjQ0LTYuNzkxIDQuNDQtMTAuNTc1IDAtMy45MTctMS41NjgtNy44MzQtNC40NC0xMC41NzVsLTQ1Ljk2MS00NS45NjEgNDUuOTYxLTQ1Ljk2MWMyLjg3NC0yLjg3NCA0LjQ0LTYuNzkxIDQuNDQtMTAuNTc1IDAuMjYyLTQuMDQ4LTEuMzA1LTcuOTY1LTQuMTc4LTEwLjgzN3pNOTY1LjQ2NiA2MTEuNjk2YzAtMjAuMjM4LTE2LjMyMy0zNi41NTktMzYuNTU5LTM2LjU1OWgtNTgxLjAyOWMtMjAuMjM4IDAtMzYuNTU5IDE2LjMyMy0zNi41NTkgMzYuNTU5djI2LjExNWMwIDIwLjIzOCAxNi4zMjMgMzYuNTU5IDM2LjU1OSAzNi41NTloNTgxLjAyOWMyMC4yMzggMCAzNi41NTktMTYuMzIzIDM2LjU1OS0zNi41NTl2LTI2LjExNXpNOTY1LjQ2NiAzODUuODEzYzAtMjAuMjM4LTE2LjMyMy0zNi41NTktMzYuNTU5LTM2LjU1OWgtNTgxLjAyOWMtMjAuMjM4IDAtMzYuNTU5IDE2LjMyMy0zNi41NTkgMzYuNTU5djI2LjExNWMwIDIwLjIzOCAxNi4zMjMgMzYuNTU5IDM2LjU1OSAzNi41NTloNTgxLjAyOWMyMC4yMzggMCAzNi41NTktMTYuMzIzIDM2LjU1OS0zNi41NTl2LTI2LjExNXpNOTY1LjQ2NiAxNTkuOTI5YzAtMjAuMjM4LTE2LjMyMy0zNi41NTktMzYuNTU5LTM2LjU1OWgtNTgxLjAyOWMtMjAuMjM4IDAtMzYuNTU5IDE2LjMyMy0zNi41NTkgMzYuNTU5djI2LjExNWMwIDIwLjIzOCAxNi4zMjMgMzYuNTU5IDM2LjU1OSAzNi41NTloNTgxLjAyOWMyMC4yMzggMCAzNi41NTktMTYuMzIzIDM2LjU1OS0zNi41NTl2LTI2LjExNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODg4OyIgZ2x5cGgtbmFtZT0iYXJyb3ctdXAtY2lyY2xlIiBkYXRhLXRhZ3M9ImFycm93LXVwLWNpcmNsZSIgZD0iTTUxMy4zNDQgNjY3LjczNWMtMTQ4LjYxNiAwLTI2NC43MjItMTIwLjc1LTI2MC4wNzctMjY5LjM2NyAwLTEyNS4zOTUgODguMjQxLTIzMi4yMTIgMjA4Ljk5MS0yNTUuNDM0djIxMy42MzZoLTkyLjg4NWMtMTMuOTMzIDAtMTMuOTMzIDkuMjg4LTkuMjg4IDE4LjU3N2wxMzkuMzI3IDE3MS44MzhjNC42NDUgOS4yODggMTMuOTMzIDkuMjg4IDIzLjIyMSA0LjY0NSAwIDAgNC42NDUtNC42NDUgNC42NDUtNC42NDVsMTM5LjMyNy0xNzEuODM4YzkuMjg4LTkuMjg4IDQuNjQ1LTE4LjU3Ny05LjI4OC0xOC41NzdoLTkyLjg4NXYtMjEzLjYzNmMxNDMuOTcyIDMyLjUxIDIzMi4yMTIgMTcxLjgzOCAxOTkuNzAzIDMxNS44MDgtMjMuMjIxIDEyMC43NS0xMzAuMDM5IDIwNC4zNDctMjUwLjc4OSAyMDguOTkxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4ODk7IiBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZSIgZGF0YS10YWdzPSJpbmZvLWNpcmNsZSIgZD0iTTUxMiA2NjUuNmMtMTQ0LjA3NyAwLTI2MC4yNjYtMTE2LjE5MS0yNjAuMjY2LTI2MC4yNjZzMTE2LjE5MS0yNjAuMjY2IDI2MC4yNjYtMjYwLjI2NiAyNjAuMjY2IDExNi4xOTEgMjYwLjI2NiAyNjAuMjY2djBjMCAxMzkuNDI5LTExNi4xOTEgMjU1LjYxOS0yNjAuMjY2IDI2MC4yNjZ6TTQ3MC4xNzEgNjE0LjQ3N2g4OC4zMDV2LTY5LjcxNGgtODguMzA1djY5LjcxNHpNNjAwLjMwNSAyMjQuMDc3aC0xODEuMjU3djUxLjEyM2g1MS4xMjN2MTYyLjY2NmgtNTEuMTIzdjUxLjEyM2gxMzkuNDI5di0yMTguNDM4aDQ2LjQ3N2wtNC42NDgtNDYuNDc3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGE7IiBnbHlwaC1uYW1lPSJzZWFyY2giIGRhdGEtdGFncz0ic2VhcmNoIiBkPSJNNzY5LjI2MyAyMDEuODNsLTExMC42OCAxMTAuNjhjNzEuOTQzIDk5LjYxMiA0OS44MDYgMjQzLjQ5NC00OS44MDYgMzE1LjQzN3MtMjQzLjQ5NCA0NC4yNy0zMTUuNDM3LTU1LjMzOWMtNzEuOTQzLTk5LjYxMi00OS44MDYtMjQzLjQ5NCA0OS44MDYtMzE1LjQzNyA3Ny40NzUtNTUuMzM5IDE4Mi42MjMtNTUuMzM5IDI2MC4wOTggMGwxMTAuNjgtMTEwLjY4YzUuNTMzLTUuNTMzIDExLjA2OC01LjUzMyAxNi42MDEgMCAwIDAgMCAwIDAgMGwzMy4yMDUgMzMuMjA1YzExLjA2OCA1LjUzMyAxMS4wNjggMTYuNjAxIDUuNTMzIDIyLjEzNyAwIDAgMCAwIDAgMHpNNDc1Ljk2IDI3OS4zMDVjLTg4LjU0NCAwLTE2MC40ODYgNzEuOTQzLTE2MC40ODYgMTYwLjQ4NnM3MS45NDMgMTYwLjQ4NiAxNjAuNDg2IDE2MC40ODYgMTYwLjQ4Ni03MS45NDMgMTYwLjQ4Ni0xNjAuNDg2LTcxLjk0My0xNjAuNDg2LTE2MC40ODYtMTYwLjQ4NnYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OGM7IiBnbHlwaC1uYW1lPSJmdWxsc2NyZWVuIiBkYXRhLXRhZ3M9ImZ1bGxzY3JlZW4iIGQ9Ik0zNTcuMDc1IDU1MS42NWM1LjczNyA1LjczNyAwIDUuNzM3LTUuNzM3IDUuNzM3bC0xMDMuMjg0IDExLjQ3NmMtNS43MzcgNS43MzctMTEuNDc2IDAtMTEuNDc2LTUuNzM3bDExLjQ3Ni0xMDkuMDIxYzAtNS43MzcgNS43MzctNS43MzcgNS43MzctNS43MzdsMTAzLjI4NCAxMDMuMjg0ek0yODIuNDg0IDQ4OC41MzJsNjMuMTE4LTYzLjExOGM1LjczNy01LjczNyAxMS40NzYtNS43MzcgMTcuMjEzIDBsMjIuOTUzIDIyLjk1M2M1LjczNyA1LjczNyA1LjczNyAxMS40NzYgMCAxNy4yMTNsLTYzLjExOCA1Ny4zNzktNDAuMTY2LTM0LjQyOXpNNzc1Ljk0NSA0NDguMzY2YzUuNzM3LTUuNzM3IDUuNzM3IDAgNS43MzcgNS43MzdsMTEuNDc2IDEwOS4wMjFjMCA1LjczNy01LjczNyAxMS40NzYtMTEuNDc2IDExLjQ3NmwtMTA5LjAyMS0xMS40NzZjLTUuNzM3IDAtNS43MzctNS43MzctNS43MzctNS43MzdsMTA5LjAyMS0xMDkuMDIxek03MTIuODMgNTIyLjk2MWwtNjMuMTE4LTYzLjExOGMtNS43MzctNS43MzctNS43MzctMTEuNDc2IDAtMTcuMjEzbDIyLjk1My0yMi45NTNjNS43MzctNS43MzcgMTEuNDc2LTUuNzM3IDE3LjIxMyAwbDYzLjExOCA2My4xMTgtNDAuMTY2IDQwLjE2NnpNNjc4LjQwMSAyNDEuODAxYy01LjczNy01LjczNyAwLTUuNzM3IDUuNzM3LTUuNzM3bDEwOS4wMjEtMTEuNDc2YzUuNzM3IDAgMTEuNDc2IDUuNzM3IDExLjQ3NiAxMS40NzZsLTE3LjIxMyAxMDMuMjg0YzAgNS43MzctNS43MzcgNS43MzctNS43MzcgNS43MzdsLTEwMy4yODQtMTAzLjI4NHpNNzQ3LjI1NiAzMTAuNjU2bC02My4xMTggNjMuMTE4Yy01LjczNyA1LjczNy0xMS40NzYgNS43MzctMTcuMjEzIDBsLTIyLjk1My0yMi45NTNjLTUuNzM3LTUuNzM3LTUuNzM3LTExLjQ3NiAwLTE3LjIxM2w2My4xMTgtNjMuMTE4IDQwLjE2NiA0MC4xNjZ6TTI1My43OTQgMzQ1LjA4NWMtNS43MzcgNS43MzctNS43MzcgMC01LjczNy01LjczN2wtMTEuNDc2LTEwOS4wMjFjMC01LjczNyA1LjczNy0xMS40NzYgMTEuNDc2LTExLjQ3NmwxMDkuMDIxIDExLjQ3NmM1LjczNyAwIDUuNzM3IDUuNzM3IDUuNzM3IDUuNzM3bC0xMDkuMDIxIDEwOS4wMjF6TTMyMi42NDkgMjcwLjQ5MWw2My4xMTggNjMuMTE4YzUuNzM3IDUuNzM3IDUuNzM3IDExLjQ3NiAwIDE3LjIxM2wtMjIuOTUzIDIyLjk1M2MtNS43MzcgNS43MzctMTEuNDc2IDUuNzM3LTE3LjIxMyAwbC02My4xMTgtNjMuMTE4IDQwLjE2Ni00MC4xNjZ6TTE1MC41MSA2NTQuOTM0di00OTkuMjAxaDcyMi45Nzl2NDk5LjIwMWgtNzIyLjk3OXpNODMzLjMyNCAxOTUuODk5aC02MzYuOTExdjQxMy4xM2g2MzYuOTExdi00MTMuMTN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg4ZTsiIGdseXBoLW5hbWU9Img1cCIgZGF0YS10YWdzPSJoNXAiIGQ9Ik04OTEuNDA2IDU1My4xOTFjLTIyLjMxOSAxNi43MzgtNTAuMjE2IDI3Ljg5Ny04OS4yNzMgMjcuODk3aC0xMzkuNDg3di02Ni45NTRoLTE1Ni4yMjVsLTExLjE1OS01NS43OTVjMTEuMTU5IDUuNTc5IDI3Ljg5NyAxMS4xNTkgMzkuMDU3IDExLjE1OXMyMi4zMTkgMCAzMy40NzYgMGMzMy40NzYgMCA2Ni45NTQtMTEuMTU5IDg5LjI3My0zMy40NzZzMzMuNDc2LTUwLjIxNiAzMy40NzYtODMuNjkyYzAtMjIuMzE5LTUuNTc5LTQ0LjYzNS0xNi43MzgtNjYuOTU0cy0yNy44OTctMzkuMDU3LTUwLjIxNi01MC4yMTZjLTUuNTc5LTUuNTc5LTE2LjczOCAwLTIyLjMxOS0xMS4xNTloMTE3LjE3djEzMy45MDhoNjYuOTU0YzQ0LjYzNSAwIDc4LjExMyAxMS4xNTkgMTAwLjQzIDI3Ljg5NyAyMi4zMTkgMjIuMzE5IDMzLjQ3NiA1MC4yMTYgMzMuNDc2IDgzLjY5MiAwIDM5LjA1Ny0xMS4xNTkgNjYuOTU0LTI3Ljg5NyA4My42OTJ2MHpNNzk2LjU1NSA0NDEuNjAyYy0xMS4xNTktNS41NzktMjIuMzE5LTExLjE1OS00NC42MzUtMTEuMTU5aC0zMy40NzZ2ODMuNjkyaDM5LjA1N2MyMi4zMTkgMCAzMy40NzYtNS41NzkgNDQuNjM1LTExLjE1OSA1LjU3OS01LjU3OSAxMS4xNTktMTYuNzM4IDExLjE1OS0yNy44OTcgMC0xNi43MzgtNS41NzktMjcuODk3LTE2LjczOC0zMy40NzZ2MHpNNTIzLjE2IDQwMi41NDVjLTE2LjczOCAwLTMzLjQ3Ni0xMS4xNTktNDQuNjM1LTI3Ljg5N2wtOTQuODUxIDE2LjczOCA0NC42MzUgMTk1LjI4MWgtOTQuODUxdi0xNTAuNjQ2aC0xMTcuMTd2MTUwLjY0NmgtMTExLjU4OXYtMzYyLjY2N2gxMTEuNTg5djEzMy45MDhoMTE3LjE3di0xMzMuOTA4aDEzOS40ODdjLTE2LjczOCAxMS4xNTktMzMuNDc2IDExLjE1OS00NC42MzUgMjIuMzE5cy0yMi4zMTkgMjIuMzE5LTI3Ljg5NyAzMy40NzZjLTUuNTc5IDExLjE1OS0xMS4xNTkgMjIuMzE5LTE2LjczOCAzOS4wNTdsOTQuODUxIDE2LjczOGM1LjU3OS0xNi43MzggMjIuMzE5LTI3Ljg5NyA0NC42MzUtMjcuODk3IDI3Ljg5NyAwIDUwLjIxNiAyMi4zMTkgNTAuMjE2IDUwLjIxNiAwIDIyLjMxOS0yMi4zMTkgNDQuNjM1LTUwLjIxNiA0NC42MzV2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODhmOyIgZ2x5cGgtbmFtZT0icmlnaHRzLW9mLXVzZSIgZGF0YS10YWdzPSJyaWdodHMtb2YtdXNlIiBkPSJNODc4LjI3NyAzOTMuMDE3YzAtNS45MDcgMC01LjkwNyAwLTUuOTA3LTIzLjYzMS0yMy42MzEtNDcuMjYxLTM1LjQ0OC03Ni43OTktNDEuMzU1LTExLjgxMyAwLTIzLjYzMS01LjkwNy0zNS40NDgtNS45MDdzLTE3LjcyNCAwLTI5LjUzNyAwYzAgMC01LjkwNyAwLTUuOTA3IDUuOTA3LTY0Ljk4NSA1OS4wNzktMTM1Ljg3NyAxMTguMTUzLTIwMC44NjMgMTgzLjEzOSAwIDAtNS45MDcgMC01LjkwNyAwLTIzLjYzMS01LjkwNy00Ny4yNjEtMTEuODEzLTcwLjg5Mi0xNy43MjRzLTUzLjE2OCAwLTc2Ljc5OSAxMS44MTNjLTE3LjcyNCAxMS44MTMtMjMuNjMxIDE3LjcyNC0yOS41MzcgMzUuNDQ4LTUuOTA3IDUuOTA3IDAgMjMuNjMxIDExLjgxMyAyMy42MzEgNDEuMzU1IDExLjgxMyA4OC42MTYgMjkuNTM3IDEyOS45NzEgNDcuMjYxIDExLjgxMyA1LjkwNyAyOS41MzcgNS45MDcgNDEuMzU1IDUuOTA3IDUuOTA3IDAgMTEuODEzLTUuOTA3IDExLjgxMy01LjkwNyA0MS4zNTUtMTcuNzI0IDgyLjcwOS0yOS41MzcgMTI0LjA2MC00Ny4yNjEgMCAwIDUuOTA3IDAgNS45MDcgMCAyOS41MzcgNS45MDcgNjQuOTg1IDE3LjcyNCA5NC41MjMgMjMuNjMxIDUuOTA3IDAgNS45MDcgMCA1LjkwNyAwbDEwNi4zNC0yMTIuNjc2ek0yNjkuNzg2IDM5OC45MjdjMTcuNzI0IDExLjgxMyAzNS40NDggNS45MDcgNTMuMTY4LTExLjgxMyAxMS44MTMtMTEuODEzIDExLjgxMy0yOS41MzcgNS45MDctNDcuMjYxIDE3LjcyNCA1LjkwNyAzNS40NDgtNS45MDcgNDEuMzU1LTE3LjcyNCAxMS44MTMtMTcuNzI0IDUuOTA3LTM1LjQ0OC01LjkwNy00Ny4yNjEgNS45MDcgMCAxMS44MTMgMCAxNy43MjQgMCAxMS44MTMtNS45MDcgMjMuNjMxLTExLjgxMyAyOS41MzctMjkuNTM3czAtMjkuNTM3LTUuOTA3LTM1LjQ0OGMtNS45MDctNS45MDctMTEuODEzLTExLjgxMy0xNy43MjQtMTcuNzI0cy0xMS44MTMtMTEuODEzLTE3LjcyNC0xNy43MjQtMzUuNDQ4LTE3LjcyNC01My4xNjggMGMtMjkuNTM3IDI5LjUzNy01My4xNjggNjQuOTg1LTgyLjcwOSA5NC41MjMtMTcuNzI0IDIzLjYzMS0zNS40NDggNDEuMzU1LTQ3LjI2MSA2NC45ODUtNS45MDcgMTEuODEzLTExLjgxMyAxNy43MjQtMTEuODEzIDI5LjUzNyAwIDUuOTA3IDAgMTcuNzI0IDUuOTA3IDIzLjYzMSAxMS44MTMgMTEuODEzIDE3LjcyNCAxNy43MjQgMjkuNTM3IDI5LjUzNyAxNy43MjQgMTcuNzI0IDQ3LjI2MSAxMS44MTMgNjQuOTg1LTUuOTA3LTUuOTA3IDAtNS45MDctNS45MDctNS45MDctMTEuODEzdjB6TTQxNy40NzcgMTkyLjE1OGwyOS41MzctMjkuNTM3YzE3LjcyNC0xNy43MjQgNDcuMjYxLTExLjgxMyA1OS4wNzkgNS45MDdsLTUuOTA3IDUuOTA3Yy0yMy42MzEgMjMuNjMxLTQ3LjI2MSA0Ny4yNjEtNzAuODkyIDcwLjg5Mi01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTNzNS45MDcgNS45MDcgMTEuODEzIDExLjgxM2M1LjkwNyAwIDExLjgxMyAwIDExLjgxMy01LjkwNyAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSAxMS44MTMtMTEuODEzIDI5LjUzNy0yOS41MzcgNDcuMjYxLTQ3LjI2MSA1LjkwNy0xMS44MTMgMTcuNzI0LTExLjgxMyAyOS41MzctMTEuODEzIDExLjgxMyA1LjkwNyAyMy42MzEgMTEuODEzIDI5LjUzNyAyMy42MzEgMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDEuMzU1IDQxLjM1NS04OC42MTYgODIuNzA5LTEyOS45NzEgMTI5Ljk3MS01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxMS44MTMgMCAxMS44MTMgMTEuODEzIDExLjgxMyAyMy42MzEgNS45MDcgMCAwIDUuOTA3IDAgNS45MDctNS45MDcgNDEuMzU1LTQxLjM1NSA4OC42MTYtODguNjE2IDEyOS45NzEtMTI5Ljk3MSA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyA1LjkwNy01LjkwNyAxNy43MjQgMCAzNS40NDggMTcuNzI0IDM1LjQ0OCAzNS40NDggMCA1LjkwNyAwIDUuOTA3IDAgNS45MDctNDcuMjYxIDQ3LjI2MS0xMDAuNDI5IDEwMC40MjktMTQ3LjY5MSAxNDcuNjkxLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxM3M1LjkwNyAxMS44MTMgNS45MDcgMTEuODEzYzUuOTA3IDAgMTEuODEzIDAgMTEuODEzLTUuOTA3IDUuOTA3LTUuOTA3IDUuOTA3LTUuOTA3IDExLjgxMy0xMS44MTMgMzUuNDQ4LTM1LjQ0OCA3MC44OTItNzAuODkyIDEwNi4zNC0xMDYuMzQgMTEuODEzLTExLjgxMyAyMy42MzEtMjMuNjMxIDI5LjUzNy0yOS41MzcgMCAwIDUuOTA3LTUuOTA3IDUuOTA3IDAgMjMuNjMxIDUuOTA3IDM1LjQ0OCAyOS41MzcgMjkuNTM3IDUzLjE2OGgzNS40NDhjMCAwIDAgMCAwIDAgMC01LjkwNyAwLTE3LjcyNCAwLTIzLjYzMS01LjkwNy0yOS41MzctMjMuNjMxLTQ3LjI2MS01My4xNjgtNTkuMDc5IDAgMC01LjkwNyAwLTUuOTA3LTUuOTA3LTExLjgxMy0yOS41MzctMzUuNDQ4LTUzLjE2OC02NC45ODUtNTMuMTY4LTUuOTA3IDAtNS45MDcgMC01LjkwNy01LjkwNy0xNy43MjQtMzUuNDQ4LTU5LjA3OS00Ny4yNjEtODguNjE2LTM1LjQ0OC01LjkwNyAwLTExLjgxMyA1LjkwNy0xMS44MTMgNS45MDctNS45MDctNS45MDctMTEuODEzLTExLjgxMy0yMy42MzEtMTcuNzI0LTI5LjUzNy0xMS44MTMtNTkuMDc5LTUuOTA3LTc2Ljc5OSAxMS44MTMtMTEuODEzIDExLjgxMy0xNy43MjQgMTcuNzI0LTI5LjUzNyAyOS41MzcgMTcuNzI0IDIzLjYzMSAyMy42MzEgMjkuNTM3IDI5LjUzNyA0MS4zNTV2MCAwek0yNTIuMDYyIDcwNi4xMjZjMjkuNTM3LTExLjgxMyA2NC45ODUtMjMuNjMxIDk0LjUyMy0yOS41MzcgMzUuNDQ4LTExLjgxMyA2NC45ODUtMjMuNjMxIDEwMC40MjktMjkuNTM3IDAgMCAwIDAgNS45MDcgMC0xNy43MjQtNS45MDctMzUuNDQ4LTExLjgxMy00Ny4yNjEtMTcuNzI0IDAgMC01LjkwNyAwLTUuOTA3IDAtNDcuMjYxIDExLjgxMy05NC41MjMgMjMuNjMxLTEzNS44NzcgNDEuMzU1LTUuOTA3IDAtNS45MDcgMC01LjkwNyAwbC03Ni43OTktMTgzLjEzOWMwLTExLjgxMyA1LjkwNy0xNy43MjQgMTEuODEzLTIzLjYzMXM1LjkwNy01LjkwNyA1LjkwNy0xMS44MTNjLTUuOTA3LTUuOTA3LTExLjgxMy0xNy43MjQtMjMuNjMxLTIzLjYzMS0xNy43MjQgMTcuNzI0LTI5LjUzNyAzNS40NDgtMjkuNTM3IDY0Ljk4NWw4OC42MTYgMjEyLjY3NmMtNS45MDctMTEuODEzIDUuOTA3IDUuOTA3IDE3LjcyNCAwdjB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTg5MDsiIGdseXBoLW5hbWU9ImRlbGV0ZS1jaXJjbGUiIGRhdGEtdGFncz0iZGVsZXRlLWNpcmNsZSIgZD0iTTUxMiA2NjUuNmMtMTQ3LjEwNyAwLTI2MC4yNjYtMTE4LjgxNy0yNjAuMjY2LTI2MC4yNjZzMTE4LjgxNy0yNjAuMjY2IDI2MC4yNjYtMjYwLjI2NiAyNjAuMjY2IDExOC44MTcgMjYwLjI2NiAyNjAuMjY2LTExMy4xNTggMjYwLjI2Ni0yNjAuMjY2IDI2MC4yNjZ6TTY1My40NDkgMzI2LjEyMmM1LjY1OS01LjY1OSA1LjY1OS0xNi45NzMgMC0yOC4yOWwtMzMuOTQ5LTMzLjk0OWMtNS42NTktNS42NTktMTYuOTczLTUuNjU5LTI4LjI5IDBsLTc5LjIxMiA3OS4yMTItNzkuMjEyLTc5LjIxMmMtNS42NTktNS42NTktMTYuOTczLTUuNjU5LTI4LjI5IDBsLTMzLjk0OSAzMy45NDljLTUuNjU5IDUuNjU5LTUuNjU5IDE2Ljk3MyAwIDI4LjI5bDg0Ljg3MSA3OS4yMTItNzkuMjEyIDc5LjIxMmMtNS42NTkgNS42NTktNS42NTkgMTYuOTczIDAgMjguMjlsMzMuOTQ5IDMzLjk0OWM1LjY1OSA1LjY1OSAxNi45NzMgNS42NTkgMjguMjkgMGw3My41NTQtODQuODcxIDc5LjIxMiA3OS4yMTJjNS42NTkgNS42NTkgMTYuOTczIDUuNjU5IDI4LjI5IDBsMzMuOTQ5LTMzLjk0OWM1LjY1OS01LjY1OSA1LjY1OS0xNi45NzMgMC0yOC4yOWwtNzkuMjEyLTczLjU1NCA3OS4yMTItNzkuMjEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4OTE7IiBnbHlwaC1uYW1lPSJ3aW5kb3ciIGRhdGEtdGFncz0id2luZG93IiBkPSJNMTg2LjgyMSA1MjcuOTg2Yy01LjcwNC01LjcwNCAwLTUuNzA0IDUuNzA0LTUuNzA0bDEwOC4zOTQtMTEuNDFjNS43MDQgMCAxMS40MSA1LjcwNCAxMS40MSAxMS40MWwtMTcuMTE0IDEwMi42ODdjMCA1LjcwNC01LjcwNCA1LjcwNC01LjcwNCA1LjcwNGwtMTAyLjY4Ny0xMDIuNjg3ek0yNTUuMjggNTkwLjc0MWwtNjIuNzUyIDYyLjc1MmMtNS43MDQgNS43MDQtMTEuNDEgNS43MDQtMTcuMTE0IDBsLTE3LjExNC0yMi44MjFjLTUuNzA0LTUuNzA0LTUuNzA0LTExLjQxIDAtMTcuMTE0bDYyLjc1Mi02Mi43NTIgMzQuMjI4IDM5LjkzNXpNNzM0LjQ5IDYyNC45NjljLTUuNzA0IDUuNzA0LTUuNzA0IDAtNS43MDQtNS43MDRsLTExLjQxLTEwOC4zOTRjMC01LjcwNCA1LjcwNC0xMS40MSAxMS40MS0xMS40MWwxMDguMzk0IDExLjQxYzUuNzA0IDAgNS43MDQgNS43MDQgNS43MDQgNS43MDRsLTEwOC4zOTQgMTA4LjM5NHpNNzk3LjI0MiA1NTAuODA3bDYyLjc1MiA2Mi43NTJjNS43MDQgNS43MDQgNS43MDQgMTEuNDEgMCAxNy4xMTRsLTIyLjgyMSAyMi44MjFjLTUuNzA0IDUuNzA0LTExLjQxIDUuNzA0LTE3LjExNCAwbC02Mi43NTItNjIuNzUyIDM5LjkzNS0zOS45MzV6TTgzMS40NzMgMjg4LjM4NGM1LjcwNCA1LjcwNCAwIDUuNzA0LTUuNzA0IDUuNzA0bC0xMDIuNjg3IDE3LjExNGMtNS43MDQgMC0xMS40MS01LjcwNC0xMS40MS0xMS40MWwxMS40MS0xMDguMzk0YzAtNS43MDQgNS43MDQtNS43MDQgNS43MDQtNS43MDRsMTAyLjY4NyAxMDIuNjg3ek03NjMuMDE0IDIyNS42MjlsNjIuNzUyLTYyLjc1MmM1LjcwNC01LjcwNCAxMS40MS01LjcwNCAxNy4xMTQgMGwyMi44MjEgMjIuODIxYzUuNzA0IDUuNzA0IDUuNzA0IDExLjQxIDAgMTcuMTE0bC02Mi43NTIgNjIuNzUyLTM5LjkzNS0zOS45MzV6TTI4My44MDQgMTkxLjQwMWM1LjcwNC01LjcwNCA1LjcwNCAwIDUuNzA0IDUuNzA0bDExLjQxIDEwOC4zOTRjMCA1LjcwNC01LjcwNCAxMS40MS0xMS40MSAxMS40MWwtMTA4LjM5NC0xMS40MWMtNS43MDQgMC01LjcwNC01LjcwNC01LjcwNC01LjcwNGwxMDguMzk0LTEwOC4zOTR6TTIyMS4wNTIgMjU5Ljg2bC02Mi43NTItNjIuNzUyYy01LjcwNC01LjcwNC01LjcwNC0xMS40MSAwLTE3LjExNGwyMi44MjEtMjIuODIxYzUuNzA0LTUuNzA0IDExLjQxLTUuNzA0IDE3LjExNCAwbDYyLjc1MiA2Mi43NTItMzkuOTM1IDM5LjkzNXpNMzM1LjE0OSA1MzMuNjkzdi0yMzkuNjA1aDM0Ny45OTh2MjM5LjYwNWgtMzQ3Ljk5OHpNNjM3LjUwNyAzMzQuMDIyaC0yNjIuNDI0djE1NC4wMzJoMjYyLjQyNHYtMTU0LjAzMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODkyOyIgZ2x5cGgtbmFtZT0iY29kZSIgZGF0YS10YWdzPSJjb2RlIiBkPSJNNDQ2LjUyMyAyODkuOTdjNi4yMzUtNi4yMzUgNi4yMzUtMTIuNDcyIDYuMjM1LTE4LjcwN3YtNjIuMzU5YzAtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzUtNi4yMzVsLTIzMC43MjggMTU1Ljg5N2MtNi4yMzUgNi4yMzUtNi4yMzUgMTIuNDcyLTYuMjM1IDE4LjcwN3Y0OS44ODZjMCA2LjIzNSA2LjIzNSAxMi40NzIgNi4yMzUgMTguNzA3bDIzMC43MjggMTU1Ljg5N2M2LjIzNSA2LjIzNSA2LjIzNSAwIDYuMjM1LTYuMjM1di02Mi4zNTljMC02LjIzNS02LjIzNS0xMi40NzItNi4yMzUtMTguNzA3bC0xNjIuMTM0LTExMi4yNDVjLTYuMjM1LTYuMjM1LTYuMjM1LTYuMjM1IDAtMTIuNDcybDE2Mi4xMzQtOTkuNzc2ek03MzMuMzc1IDM5NS45OGM2LjIzNSA2LjIzNSA2LjIzNSA2LjIzNSAwIDEyLjQ3MmwtMTU1Ljg5NyAxMTIuMjQ1Yy02LjIzNSA2LjIzNS02LjIzNSAxMi40NzItNi4yMzUgMTguNzA3djYyLjM1OWMwIDYuMjM1IDYuMjM1IDYuMjM1IDYuMjM1IDYuMjM1bDIzMC43MjgtMTU1Ljg5N2M2LjIzNS02LjIzNSA2LjIzNS0xMi40NzIgNi4yMzUtMTguNzA3di00OS44ODZjMC02LjIzNS02LjIzNS0xMi40NzItNi4yMzUtMTguNzA3bC0yMzAuNzI4LTE1NS44OTdjLTYuMjM1LTYuMjM1LTYuMjM1IDAtNi4yMzUgNi4yMzV2NjIuMzU5YzAgNi4yMzUgNi4yMzUgMTIuNDcyIDYuMjM1IDE4LjcwN2wxNTUuODk3IDk5Ljc3NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODkzOyIgZ2x5cGgtbmFtZT0iZG93bmxvYWQiIGRhdGEtdGFncz0iZG93bmxvYWQiIGQ9Ik0zNTMuMDUwIDQ5MC42OTRjLTExLjc3MyAwLTE3LjY2LTUuODg3LTUuODg3LTE3LjY2bDE1My4wNTktMTg4LjM4MmM1Ljg4Ny0xMS43NzMgMjMuNTQ3LTExLjc3MyAyOS40MzMgMGwxNTMuMDU5IDE4OC4zODJjNS44ODcgMTEuNzczIDUuODg3IDE3LjY2LTUuODg3IDE3LjY2aC0zMjMuNzgyek01NzAuODY1IDQ3OC45MnYxMzUuMzk5YzAgMTEuNzczLTExLjc3MyAyMy41NDctMjMuNTQ3IDIzLjU0N2gtNzAuNjQzYy0xMS43NzMgMC0yMy41NDctMTEuNzczLTIzLjU0Ny0yMy41NDd2LTE0MS4yODZoMTE3LjczOXpNNjQ3LjM5NSAzNDMuNTIxYy01Ljg4NyAwLTE3LjY2LTUuODg3LTIzLjU0Ny0xMS43NzNsLTc2LjUzLTk0LjE5Yy01Ljg4Ny01Ljg4Ny0xNy42Ni0xNy42Ni0yMy41NDctMjMuNTQ3IDAgMC01Ljg4Ny01Ljg4Ny0xMS43NzMtNS44ODdzLTE3LjY2IDExLjc3My0xNy42NiAxMS43NzNjLTUuODg3IDUuODg3LTE3LjY2IDE3LjY2LTIzLjU0NyAyMy41NDdsLTc2LjUzIDk0LjE5Yy01Ljg4NyA1Ljg4Ny0xNy42NiAxMS43NzMtMjMuNTQ3IDExLjc3M2gtMTIzLjYyNmMtNS44ODcgMC0xNy42Ni01Ljg4Ny0xNy42Ni0xNy42NnYtMTQxLjI4NmMwLTUuODg3IDUuODg3LTE3LjY2IDE3LjY2LTE3LjY2aDUyOS44MjRjNS44ODcgMCAxNy42NiA1Ljg4NyAxNy42NiAxNy42NnYxNDEuMjg2YzAgNS44ODctNS44ODcgMTcuNjYtMTcuNjYgMTcuNjZsLTEyOS41MTMtNS44ODd6TTMwMC4wNjcgMjMxLjY3MWMtMTcuNjYgMC0yOS40MzMgMTEuNzczLTI5LjQzMyAyOS40MzNzMTEuNzczIDI5LjQzMyAyOS40MzMgMjkuNDMzYzE3LjY2IDAgMjkuNDMzLTExLjc3MyAyOS40MzMtMjkuNDMzcy0xMS43NzMtMjkuNDMzLTI5LjQzMy0yOS40MzN2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODk0OyIgZ2x5cGgtbmFtZT0iZGVsZXRlIiBkYXRhLXRhZ3M9ImRlbGV0ZSIgZD0iTTYxNS4xMTEgNDA1LjMzNGwxMzQuMDQ1IDEzNC4wNDVjMTAuMzExIDEwLjMxMSAxMC4zMTEgMzAuOTM0IDAgNDEuMjQ1bC02MS44NjYgNjEuODY2Yy0xMC4zMTEgMTAuMzExLTMwLjkzNCAxMC4zMTEtNDEuMjQ1IDBsLTEzNC4wNDUtMTM0LjA0NS0xMzQuMDQ1IDEzNC4wNDVjLTEwLjMxMSAxMC4zMTEtMzAuOTM0IDEwLjMxMS00MS4yNDUgMGwtNjEuODY2LTYxLjg2NmMtMTAuMzExLTEwLjMxMS0xMC4zMTEtMzAuOTM0IDAtNDEuMjQ1bDEzNC4wNDUtMTM0LjA0NS0xMzQuMDQ1LTEzNC4wNDVjLTEwLjMxMS0xMC4zMTEtMTAuMzExLTMwLjkzNCAwLTQxLjI0NWw2MS44NjYtNjEuODY2YzEwLjMxMS0xMC4zMTEgMzAuOTM0LTEwLjMxMSA0MS4yNDUgMGwxMzQuMDQ1IDEzNC4wNDUgMTM0LjA0NS0xMzQuMDQ1YzEwLjMxMS0xMC4zMTEgMzAuOTM0LTEwLjMxMSA0MS4yNDUgMGw2MS44NjYgNjEuODY2YzEwLjMxMSAxMC4zMTEgMTAuMzExIDMwLjkzNCAwIDQxLjI0NWwtMTM0LjA0NSAxMzQuMDQ1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDA7IiBnbHlwaC1uYW1lPSJlZGl0LWltYWdlIiBkYXRhLXRhZ3M9ImVkaXQtaW1hZ2UiIGQ9Ik0zMDAuMzM2IDcyOC4zMzFjNjkuMDE4IDIzLjE0MiAxMzMuMzI1IDE0LjIzNCAxODkuMTMzLTMzLjI4IDU2LjYyNy00OC4xMjggNzcuNjE5LTExMC41OTIgNjMuMTgxLTE4My44MDgtMi4zNTUtMTIuMTg2IDAuMzA3LTE5LjQ1NiA4LjcwNC0yNy44NTMgOTMuOTAxLTkzLjM4OSAxNTYuNzc0LTE1Ni40NjcgMjUwLjQ3LTI1MC4xNjMgNS40MjctNS40MjcgMTAuOTU3LTEwLjg1NCAxNS42NjctMTYuODk2IDM5LjQyNC01MC4yNzggMTYuNzk0LTEyNC4wMDYtNDQuMjM3LTE0Mi4wMjktMzYuOTY2LTEwLjk1Ny02OC40MDMgMC05NS4zMzQgMjcuMDM0LTk1LjY0MiA5Ni4wNTEtMTYwLjk3MyAxNjAuOTczLTI1Ni42MTQgMjU3LjAyNC02Ljk2MyA2Ljk2My0xMi44IDguOTA5LTIyLjYzIDYuNzU4LTExNy43Ni0yNi4zMTctMjI5LjE3MSA2MC44MjYtMjMxLjczMSAxODEuNDUzLTAuNjE0IDI2LjQxOSAzLjU4NCA1Mi4zMjYgMTUuOTc0IDc3LjkyNiAzNC44MTYtMzQuODE2IDY4LjUwNi02Ny43ODkgMTAxLjI3NC0xMDEuNzg2IDEwLjQ0NS0xMC43NTIgMjAuOTkyLTE1LjM2IDM2LjA0NS0xNS4zNiAxNC42NDMgMCAyNS4xOSAzLjg5MSAzNC44MTYgMTQuODQ4IDEwLjc1MiAxMi4zOSAyMy4wNDAgMjMuMzQ3IDM0LjYxMSAzNS4wMjEgMTQuMzM2IDE0LjQzOCAxNC4zMzYgNDYuMDgwLTAuMjA1IDYwLjUxOC0zNS4xMjMgMzUuMjI2LTcwLjM0OSA3MC4zNDktMTA2LjU5OCAxMDYuNDk2IDMuODkxIDIuMjUzIDUuNjMyIDMuNDgyIDcuNDc1IDQuMDk2ek03MDMuNDg1IDE3MC4yNTFjLTAuNDEtMjQuMjY5IDIwLjY4NS00NS40NjYgNDQuODUxLTQ1LjE1OCAyMy43NTcgMC40MSA0NC4wMzIgMjAuOTkyIDQzLjkzIDQ0LjU0NC0wLjEwMiAyMy43NTctMjAuMjc1IDQ0LjAzMi00NC4yMzcgNDQuMTM0LTIzLjg1OSAwLjMwNy00NC4yMzctMTkuNjYxLTQ0LjU0NC00My41MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAxOyIgZ2x5cGgtbmFtZT0iaG91cmdsYXNzIiBkYXRhLXRhZ3M9ImhvdXJnbGFzcyIgZD0iTTczMy40MTQgOTYuMDg2Yy0xNDcuNzYzIDAtMjk1LjUyNiAwLTQ0My4yOSAwIDAgMi4wNDggMC4xMDIgNC4wOTYgMCA2LjE0NC0wLjMwNyAxMy44MjQtMS4wMjQgMzIuNjY2LTAuOTIyIDQ2LjQ5IDAuNDEgMzkuNzMxIDYuODYxIDc4LjEzMSAxOS4wNDYgMTE1LjIgMTcuMjAzIDUyLjIyNCA0My43MjUgOTYuMjU2IDgxLjMwNiAxMzAuMzU1IDQuNTA2IDQuMDk2IDkuMjE2IDcuODg1IDEzLjcyMiAxMS43NzYtMC4yMDUgMC43MTctMC4zMDcgMS4xMjYtMC40MSAxLjIyOS0xLjMzMSAxLjIyOS0yLjc2NSAyLjM1NS00LjE5OCAzLjU4NC0yOC4wNTggMjIuNjMtNTAuNjg4IDUxLjQwNS02OC40MDMgODUuNjA2LTMwLjYxOCA1OS4wODUtNDMuNTIgMTIzLjU5Ny00MS4xNjUgMTkyLjYxNCAwLjIwNSA3LjE2OCAwLjYxNCAxOC4zMyAwLjkyMiAyNS40OTggMTQ3Ljc2MyAwIDI5NS41MjYgMCA0NDMuMjkgMCAwLjIwNS0xLjMzMSAwLjUxMi0yLjY2MiAwLjYxNC0zLjk5NCAyLjY2Mi0zNi45NjYgMS4yMjktNzcuNzIyLTUuOTM5LTExMy44NjktMTQuMzM2LTcyLjkwOS00NC41NDQtMTMzLjgzNy05NS4wMjctMTc5LjQwNS00LjA5Ni0zLjY4Ni04LjI5NC03LjA2Ni0xMi4zOS0xMC41NDcgMC4yMDUtMC43MTcgMC4zMDctMS4xMjYgMC41MTItMS4zMzEgMC44MTktMC43MTcgMS42MzgtMS40MzQgMi40NTgtMi4xNSA0Mi4xODktMzMuODk0IDcxLjY4LTc5Ljg3MiA5MC45MzEtMTM1Ljc4MiAxMS43NzYtMzQuMjAyIDE4LjYzNy02OS44MzcgMjAuMDcwLTEwNi43MDEgMC44MTktMTkuNzYzLTAuNjE0LTQ0Ljg1MS0xLjEyNi02NC43MTd6TTY4Ny40MzcgMTM5LjI5OWMwIDYuNTU0IDAuMjA1IDEyLjQ5MyAwIDE4LjQzMi0xLjMzMSAzNy41ODEtNy4yNyA3NC4xMzgtMTkuODY2IDEwOC43NDktMTcuOTIgNDkuNTYyLTQ1LjU2OCA4OC4yNjktODguNjc4IDEwOC42NDYtMi40NTggMS4xMjYtMi45NyAzLjA3Mi0yLjk3IDUuODM3IDAuMTAyIDE2LjY5MSAwLjEwMiAzMy40ODUgMCA1MC4xNzYgMCAzLjk5NCAxLjMzMSA1LjQyNyA0LjA5NiA2Ljk2MyA5LjExNCA1LjMyNSAxOC40MzIgMTAuMjQgMjYuODI5IDE2Ljg5NiAyOS42OTYgMjMuNTUyIDQ5LjE1MiA1Ni45MzQgNjIuMzYyIDk1Ljc0NCAxMC4zNDIgMzAuNDEzIDE1Ljc3IDYyLjI1OSAxNy44MTggOTQuODIyIDAuNjE0IDkuMTE0IDAuMTAyIDE4LjIyNyAwLjEwMiAyNy41NDYtMTE2LjYzNCAwLTIzMy41NzQgMC0zNTEuMDI3IDAgMC4zMDctOC43MDQgMC42MTQtMTYuOTk4IDEuMDI0LTI1LjM5NSAxLjk0Ni0zNy4yNzQgOC40OTktNzMuMjE2IDIxLjUwNC0xMDcuMjEzIDE4LjEyNS00Ny4xMDQgNDUuMjYxLTgzLjU1OCA4Ni41MjgtMTAzLjExNyAyLjI1My0xLjAyNCAyLjg2Ny0yLjY2MiAyLjg2Ny01LjQyNy0wLjEwMi0xNy4yMDMtMC4xMDItMzQuNTA5IDAtNTEuNzEyIDAtMy4wNzItMS4wMjQtNC41MDYtMy4yNzctNS42MzItNS42MzItMi44NjctMTEuMzY2LTUuNzM0LTE2LjY5MS05LjIxNi0zNC4zMDQtMjIuNzMzLTU2LjgzMi01Ny43NTQtNzEuOTg3LTEwMC4xNDctMTIuNDkzLTM1LjEyMy0xOC4xMjUtNzEuOTg3LTE5LjY2MS0xMDkuODc1LTAuMjA1LTUuMzI1IDAtMTAuNzUyIDAtMTYuMjgyIDExNy4zNSAwLjIwNSAyMzQuMTg5IDAuMjA1IDM1MS4wMjcgMC4yMDV6TTQxMC4zNDIgNTU4LjYyN2M2OC4wOTYgMCAxMzUuMzczIDAgMjAzLjY3NCAwLTMuNzg5LTYuNTU0LTcuMTY4LTEyLjU5NS0xMC43NTItMTguMjI3LTEwLjk1Ny0xNi45OTgtMjQuMjY5LTMwLjYxOC0zOS43MzEtNDEuNDcycy0yNy43NS0yNS4yOTMtMzIuNzY4LTQ2LjU5MmMtMS42MzgtNi45NjMtMi43NjUtMTQuMzM2LTIuODY3LTIxLjYwNi0wLjMwNy0xNy4yMDMtMC4yMDUtMzQuNDA2IDAuMzA3LTUxLjcxMiAwLjcxNy0yOC4wNTggMTIuNDkzLTQ4Ljk0NyAzMi4xNTQtNjIuNTY2IDQzLjAwOC0zMC4wMDMgNjUuODQzLTc1Ljg3OCA3NS43NzYtMTMyLjUwNiAwLjMwNy0xLjYzOCAwLjMwNy0zLjM3OSAwLjYxNC01LjUzLTgzLjE0OSAwLTE2Ni4wOTMgMC0yNDkuMjQyIDAgMi42NjIgMjAuNjg1IDcuODg1IDQwLjM0NiAxNS40NjIgNTkuMDg1IDEzLjMxMiAzMi45NzMgMzIuNzY4IDU5LjE4NyA1OS40OTQgNzcuNzIyIDE2LjU4OSAxMS40NjkgMjguMzY1IDI3Ljk1NSAzMi4zNTggNTAuOTk1IDAuODE5IDQuODEzIDEuMzMxIDkuODMgMS40MzQgMTQuNzQ2IDAuMTAyIDE4LjYzNyAwLjYxNCAzNy4yNzQtMC4yMDUgNTUuODA4LTEuMTI2IDI0LjY3OC0xMS45ODEgNDMuMjEzLTI4LjU3IDU3LjEzOS05LjIxNiA3Ljc4Mi0xOC45NDQgMTQuNzQ2LTI3LjY0OCAyMy4xNDItMTEuOTgxIDExLjE2Mi0yMS4xOTcgMjUuMzk1LTI5LjQ5MSA0MS41NzR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMjsiIGdseXBoLW5hbWU9InBsdXMtaWNvbiIgZGF0YS10YWdzPSJwbHVzLWljb24iIGQ9Ik03NjcuNzg3IDM3MC41NmMwLTE5LjMyMy0xNS42NjQtMzQuOTg3LTM0Ljk4Ny0zNC45ODdoLTE1MS4wNDB2LTE1MS40NjdjMC0xOS4zMjMtMTUuNjY0LTM0Ljk4Ny0zNC45ODctMzQuOTg3aC02OS41NDdjLTE5LjMyMyAwLTM0Ljk4NyAxNS42NjQtMzQuOTg3IDM0Ljk4N3YxNTEuNDY3aC0xNTEuNDY3Yy0xOS4zMjMgMC0zNC45ODcgMTUuNjY0LTM0Ljk4NyAzNC45ODd2NjkuNTQ3YzAgMTkuMzIzIDE1LjY2NCAzNC45ODcgMzQuOTg3IDM0Ljk4N2gxNTEuNDY3djE1MS40NjdjMCAxOS4zMjMgMTUuNjY0IDM0Ljk4NyAzNC45ODcgMzQuOTg3aDY5LjU0N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd2LTE1MS40NjdoMTUxLjQ2N2MxOS4zMjMgMCAzNC45ODctMTUuNjY0IDM0Ljk4Ny0zNC45ODd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9InZpZGVvLXVwbG9hZC1pY29uIiBkYXRhLXRhZ3M9InZpZGVvLXVwbG9hZC1pY29uIiBkPSJNMzk1Ljg0OCAzNjUuODY4di0xMjhjMC0yMS4zMzMgMjEuMzMzLTQyLjY2NyA0Mi42NjctNDIuNjY3aDEyOGMyMS4zMzMgMCA0Mi42NjcgMTcuMDY3IDQyLjY2NyA0Mi42Njd2MTI4YzAgMjEuMzMzLTE3LjA2NyA0Mi42NjctNDIuNjY3IDQyLjY2N2gtMTI4Yy0yMS4zMzMgMC00Mi42NjctMTcuMDY3LTQyLjY2Ny00Mi42Njd6TTc5Ni45MTUgNTM2LjUzNGwtMTAyLjQgMTA2LjY2N2MtMTIuOCAxMi44LTM4LjQgMjEuMzMzLTU1LjQ2NyAyMS4zMzNoLTE0MC44bDIxLjMzMy00Mi42NjdoODkuNnYtMTM2LjUzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDE0MC44di0zNDEuMzMzaC00MjYuNjY3djMyOC41MzNoLTQyLjY2N3YtMzQxLjMzM2MwLTE3LjA2NyAxMi44LTI5Ljg2NyAyOS44NjctMjkuODY3aDQ0OGMxNy4wNjcgMCAyOS44NjcgMTIuOCAyOS44NjcgMjkuODY3djM4NGM0LjI2NyAxNy4wNjctOC41MzMgMzguNC0yMS4zMzMgNTEuMnpNNjUxLjg0OCA0OTMuODY4djEyMy43MzNjNC4yNjcgMCAxMi44LTQuMjY3IDEyLjgtOC41MzNsMTAyLjQtMTAyLjRjNC4yNjctNC4yNjcgNC4yNjctOC41MzMgOC41MzMtMTIuOGgtMTIzLjczM3pNNzM3LjE4MSAyMDMuNzM0djE5Ni4yNjdjMCA0LjI2Ny00LjI2NyA4LjUzMy04LjUzMyA4LjUzM3MtOC41MzMgMC0xMi44LTQuMjY3bC04OS42LTg5LjZ2LTI5Ljg2N2w4OS42LTg5LjZjOC41MzMtNC4yNjcgOC41MzMgMCAxMi44IDAgNC4yNjcgNC4yNjcgOC41MzMgNC4yNjcgOC41MzMgOC41MzN6TTM2MS43MTUgNTEwLjkzNHYxMzYuNTMzbDU5LjczMy01OS43MzNjOC41MzMtOC41MzMgMTcuMDY3LTQuMjY3IDI1LjYgMGwxMi44IDEyLjhjOC41MzMgOC41MzMgOC41MzMgMTcuMDY3IDAgMjUuNmwtMTE1LjIgMTA2LjY2N2MtOC41MzMgOC41MzMtMTcuMDY3IDguNTMzLTIxLjMzMyAwbC0xMTUuMi0xMTAuOTMzYy00LjI2Ny04LjUzMy00LjI2Ny0xNy4wNjcgMC0yNS42bDEyLjgtMTIuOGM4LjUzMy04LjUzMyAxNy4wNjctOC41MzMgMjEuMzMzIDBsNTkuNzMzIDU5LjczM3YtMTM2LjUzM2MwLTguNTMzIDguNTMzLTE3LjA2NyAxNy4wNjctMTcuMDY3aDI1LjZjMCAwIDE3LjA2NyA4LjUzMyAxNy4wNjcgMjEuMzMzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJwbGF5LWljb24iIGRhdGEtdGFncz0icGxheS1pY29uIiBkPSJNMzc1LjQ0NCA2NDAuMDI0YzgxLjA2NyA0Ni45MzMgMTg3LjczMyA0Ni45MzMgMjczLjA2NyAwIDQyLjY2Ny0yNS42IDcyLjUzMy01NS40NjcgOTguMTMzLTk4LjEzMyA3Mi41MzMtMTI4IDI5Ljg2Ny0yOTQuNC05OC4xMzMtMzcxLjItMTI4LTcyLjUzMy0yOTQuNC0yOS44NjctMzcxLjIgOTguMTMzLTQ2LjkzMyA4MS4wNjctNDYuOTMzIDE4Ny43MzMgMCAyNzMuMDY3IDIxLjMzMyA0Mi42NjcgNTUuNDY3IDcyLjUzMyA5OC4xMzMgOTguMTMzek02NDQuMjQ0IDM4OC4yOWMxMi44IDguNTMzIDEyLjggMjkuODY3IDAgMzguNGwtMTkyIDExMC45MzNjLTguNTMzIDQuMjY3LTEyLjggNC4yNjctMjEuMzMzIDBzLTEyLjgtMTIuOC0xMi44LTIxLjMzM3YtMjI2LjEzM2MwLTguNTMzIDQuMjY3LTE3LjA2NyAxMi44LTIxLjMzM3MxNy4wNjctNC4yNjcgMjEuMzMzIDBsMTkyIDExOS40Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNTsiIGdseXBoLW5hbWU9ImNvcHkiIGRhdGEtdGFncz0iY29weSIgZD0iTTcyMi4xMzMgNTgyLjUzNGgtMjQ3LjczM2MtNjUuODY3IDAtMTE5LjItNTMuMzMzLTExOS4yLTExOS4ydi0yODguNTMzYzAtNjUuODY3IDUzLjMzMy0xMTkuMiAxMTkuMi0xMTkuMmgyNDcuODY3YzY1Ljg2NyAwIDExOS4yIDUzLjMzMyAxMTkuMiAxMTkuMnYyODguNTMzYy0wLjI2NyA2NS44NjctNTMuNDY3IDExOS4yLTExOS4zMzMgMTE5LjJ6TTc3OC41MzMgMTc3Ljg2N2MwLTMxLjMzMy0yNS4wNjctNTYuNC01Ni40LTU2LjRoLTI0Ny44NjdjLTMxLjMzMyAwLTU2LjQgMjUuMDY3LTU2LjQgNTYuNHYyODUuNDY3YzAgMzEuMzMzIDI1LjA2NyA1Ni40IDU2LjQgNTYuNGgyNDcuNzMzYzMxLjMzMyAwIDU2LjQtMjUuMDY3IDU2LjQtNTYuNHYtMjg1LjQ2N3pNMjQ1LjIgMzQ3LjMzNHYyODguNTMzYzAgMzEuMzMzIDI1LjA2NyA1Ni40IDU2LjQgNTYuNGgyNDcuNzMzYzMxLjMzMyAwIDU2LjQtMjUuMDY3IDU2LjQtNTYuNHYtMTguOGg2Mi42Njd2MTguOGMwIDY1Ljg2Ny01My4zMzMgMTE5LjItMTE5LjIgMTE5LjJoLTI0Ny40NjdjLTY1Ljg2NyAwLTExOS4yLTUzLjMzMy0xMTkuMi0xMTkuMnYtMjg4LjUzM2MwLTY1Ljg2NyA1My4zMzMtMTE5LjIgMTE5LjItMTE5LjJoMTguOHY2Mi42NjdoLTE4LjhjLTMxLjQ2Ny0zLjA2Ny01Ni41MzMgMjItNTYuNTMzIDU2LjUzM3pNNjgxLjIgMzgxLjg2N2gtMTYzLjA2N2MtMTguOCAwLTMxLjMzMyAxMi41MzMtMzEuMzMzIDMxLjMzM3MxMi41MzMgMzEuMzMzIDMxLjMzMyAzMS4zMzNoMTYzLjA2N2MxOC44IDAgMzEuMzMzLTEyLjUzMyAzMS4zMzMtMzEuMzMzcy0xNS42LTMxLjMzMy0zMS4zMzMtMzEuMzMzek02ODEuMiAyODcuNzM0aC0xNjMuMDY3Yy0xOC44IDAtMzEuMzMzIDEyLjUzMy0zMS4zMzMgMzEuMzMzczEyLjUzMyAzMS4zMzMgMzEuMzMzIDMxLjMzM2gxNjMuMDY3YzE4LjggMCAzMS4zMzMtMTIuNTMzIDMxLjMzMy0zMS4zMzNzLTE1LjYtMzEuMzMzLTMxLjMzMy0zMS4zMzN6TTY4MS4yIDE5My42MDFoLTE2My4wNjdjLTE4LjggMC0zMS4zMzMgMTIuNTMzLTMxLjMzMyAzMS4zMzNzMTIuNTMzIDMxLjMzMyAzMS4zMzMgMzEuMzMzaDE2My4wNjdjMTguOCAwIDMxLjMzMy0xMi41MzMgMzEuMzMzLTMxLjMzM3MtMTUuNi0zMS4zMzMtMzEuMzMzLTMxLjMzM3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA2OyIgZ2x5cGgtbmFtZT0iZXhhbXBsZXMtaWNvbiIgZGF0YS10YWdzPSJleGFtcGxlcy1pY29uIiBkPSJNMjEzLjMzMyAyNTMuODY4Yzg5LjYgMzguNCAxODMuNDY3IDY4LjI2NyAyNzMuMDY3IDE3LjA2N3YyODEuNmMtNjguMjY3IDQ2LjkzMy0xNTcuODY3IDU1LjQ2Ny0yMzQuNjY3IDEyLjhsLTM4LjQtMzExLjQ2N3pNODEwLjY2NyAyNTMuODY4bC00Mi42NjcgMzE1LjczM2MtNzIuNTMzIDM4LjQtMTY2LjQgMzQuMTMzLTIzNC42NjctMTcuMDY3di0yODUuODY3YzkzLjg2NyA1MS4yIDE4Ny43MzMgMjEuMzMzIDI3Ny4zMzMtMTIuOHpNODMyIDYwOC4wMDFjLTUxLjIgMjkuODY3LTExMC45MzMgNDYuOTMzLTE3MC42NjcgNTUuNDY3LTUxLjIgMC0xMDIuNC04LjUzMy0xNDkuMzMzLTI5Ljg2Ny00Ni45MzMgMjEuMzMzLTk4LjEzMyAyOS44NjctMTQ5LjMzMyAyOS44NjctNTkuNzMzLTQuMjY3LTExOS40NjctMjUuNi0xNzAuNjY3LTU1LjQ2N2wtNjQtNDUyLjI2N2MwIDAgMjkuODY3LTE3LjA2NyAxMTAuOTMzIDIxLjMzMyA0Ni45MzMgMjUuNiAxMDIuNCAzNC4xMzMgMTU3Ljg2NyAyNS42IDQyLjY2Ny00LjI2NyA4NS4zMzMtMjEuMzMzIDExNS4yLTU1LjQ2N3YwYzI5Ljg2NyAzNC4xMzMgNzIuNTMzIDUxLjIgMTE1LjIgNTUuNDY3IDU1LjQ2NyA0LjI2NyAxMDYuNjY3LTQuMjY3IDE1Ny44NjctMjkuODY3IDgxLjA2Ny0zOC40IDExMC45MzMtMjEuMzMzIDExMC45MzMtMjEuMzMzbC02NCA0NTYuNTMzek03OTMuNiAyMDIuNjY4Yy00Mi42NjcgMjEuMzMzLTg5LjYgMzQuMTMzLTE0MC44IDM0LjEzMy04LjUzMyAwLTIxLjMzMyAwLTI5Ljg2NyAwLTQyLjY2Ny00LjI2Ny04MS4wNjctMTcuMDY3LTExNS4yLTQyLjY2Ny0zNC4xMzMgMjUuNi03Mi41MzMgMzguNC0xMTUuMiA0Mi42NjctMTIuOCAwLTIxLjMzMyAwLTM0LjEzMyAwLTQ2LjkzMyAwLTkzLjg2Ny04LjUzMy0xMzYuNTMzLTI5Ljg2Ny0yMS4zMzMtMTIuOC00Ni45MzMtMjEuMzMzLTcyLjUzMy0yNS42bDY0IDQxMy44NjdjNDYuOTMzIDI1LjYgOTguMTMzIDM4LjQgMTQ5LjMzMyA0Mi42NjcgNDYuOTMzIDAgOTMuODY3LTguNTMzIDEzNi41MzMtMjUuNmwxMi44LTguNTMzIDEyLjggNC4yNjdjNDIuNjY3IDE3LjA2NyA4OS42IDI1LjYgMTM2LjUzMyAyNS42IDUxLjItNC4yNjcgMTAyLjQtMTcuMDY3IDE0OS4zMzMtNDIuNjY3bDU5LjczMy00MTguMTMzYy0yOS44NjcgOC41MzMtNTEuMiAxNy4wNjctNzYuOCAyOS44Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNzsiIGdseXBoLW5hbWU9InR1dG9yaWFscy1pY29uIiBkYXRhLXRhZ3M9InR1dG9yaWFscy1pY29uIiBkPSJNODg3LjQ2OCA1MTYuMjY1bC0zNzUuNDY3LTExMC45MzNoLTQuMjY3bC0yMTcuNiA2OC4yNjdjLTIxLjMzMy0yNS42LTM0LjEzMy01OS43MzMtMzQuMTMzLTk4LjEzMyAyMS4zMzMtMTIuOCAyNS42LTM4LjQgMTIuOC01OS43MzMtNC4yNjctNC4yNjctOC41MzMtOC41MzMtMTIuOC0xMi44bDE3LjA2Ny0xNDUuMDY3YzAtNC4yNjcgMC00LjI2Ny00LjI2Ny04LjUzMyAwIDAgMCAwLTQuMjY3IDBoLTY0Yy00LjI2NyAwLTQuMjY3IDAtOC41MzMgNC4yNjcgMCA0LjI2Ny00LjI2NyA0LjI2Ny00LjI2NyA4LjUzM2wxNy4wNjcgMTQ1LjA2N2MtMTIuOCA4LjUzMy0xNy4wNjcgMjEuMzMzLTE3LjA2NyAzNC4xMzMgMCAxNy4wNjcgOC41MzMgMjkuODY3IDIxLjMzMyAzOC40IDAgMzguNCAxMi44IDc2LjggMzQuMTMzIDExMC45MzNsLTEwNi42NjcgMjkuODY3Yy04LjUzMyA0LjI2Ny04LjUzMyA4LjUzMy04LjUzMyAxNy4wNjcgMCA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2NyA0LjI2N2wzNzUuNDY3IDExOS40NjdoNC4yNjdsMzc1LjQ2Ny0xMjMuNzMzYzQuMjY3IDAgOC41MzMtNC4yNjcgOC41MzMtOC41MzNzLTQuMjY3LTguNTMzLTguNTMzLTEyLjh6TTcyNS4zMzQgMzE5Ljk5OWM0LjI2Ny00Ni45MzMtOTMuODY3LTg1LjMzMy0yMTMuMzMzLTg1LjMzM3MtMjEzLjMzMyAzOC40LTIxMy4zMzMgODUuMzMzbDQuMjY3IDEwNi42NjcgMTkyLTY0YzQuMjY3IDAgMTIuOCAwIDE3LjA2NyAwczEyLjggMCAxNy4wNjcgNC4yNjdsMTkyIDU5LjczMyA0LjI2Ny0xMDYuNjY3eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDg7IiBnbHlwaC1uYW1lPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZGF0YS10YWdzPSJpbmZvLWltcG9ydGFudC1kZXNjcmlwdGlvbiIgZD0iTTUxMiA3NDYuNjg0Yy0xODguNSAwLTM0MS4zLTE1Mi44LTM0MS4zLTM0MS4zczE1Mi44LTM0MS40IDM0MS4zLTM0MS40IDM0MS4zIDE1Mi44IDM0MS4zIDM0MS4zLTE1Mi44IDM0MS40LTM0MS4zIDM0MS40djB6TTUxMiA5Mi41ODRjLTE3Mi43IDAtMzEyLjcgMTQwLTMxMi43IDMxMi43czE0MCAzMTIuNyAzMTIuNyAzMTIuN2MxNzIuNyAwIDMxMi43LTE0MCAzMTIuNy0zMTIuNy0wLjItMTcyLjYtMTQwLjEtMzEyLjUtMzEyLjctMzEyLjd2MHpNNTEyIDY1NC44ODRjLTEzNy45IDAtMjQ5LjYtMTExLjgtMjQ5LjYtMjQ5LjZzMTExLjctMjQ5LjYgMjQ5LjYtMjQ5LjYgMjQ5LjYgMTExLjggMjQ5LjYgMjQ5LjYtMTExLjggMjQ5LjYtMjQ5LjYgMjQ5LjZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA5OyIgZ2x5cGgtbmFtZT0iaWNvbi1pbmZvIiBkYXRhLXRhZ3M9Imljb24taW5mbyIgZD0iTTQ2OC44NzUgNTQ0LjY0MWg4Ny40NjdjMC4wMjggMCAwLjA2MiAwIDAuMDk1IDAgNi4wNTYgMCAxMS40OTkgMi42MjkgMTUuMjQ4IDYuODA4IDMuOTc5IDQuMTUgNi40MTkgOS43NjkgNi40MTkgMTUuOTU3IDAgMC4wOTctMC4wMDEgMC4xOTQtMC4wMDIgMC4yOXY3MC4zODVjMC4wMDEgMC4wODIgMC4wMDIgMC4xNzkgMC4wMDIgMC4yNzYgMCA2LjE4OC0yLjQ0IDExLjgwNi02LjQwOSAxNS45NDYtMy43NTkgNC4xOS05LjIwMSA2LjgxOS0xNS4yNTcgNi44MTktMC4wMzMgMC0wLjA2NyAwLTAuMSAwaC04Ny40NjJjLTAuMDI4IDAtMC4wNjIgMC0wLjA5NSAwLTYuMDU2IDAtMTEuNDk5LTIuNjI5LTE1LjI0OC02LjgwOC0zLjk3OS00LjE1LTYuNDE5LTkuNzY5LTYuNDE5LTE1Ljk1NyAwLTAuMDk3IDAuMDAxLTAuMTk0IDAuMDAyLTAuMjl2LTY5Ljk1OWMtMC4wMDEtMC4wODItMC4wMDItMC4xNzktMC4wMDItMC4yNzYgMC02LjE4OCAyLjQ0LTExLjgwNiA2LjQwOS0xNS45NDYgMy43MTUtNC4zNzMgOS4yLTcuMTU5IDE1LjMzOC03LjI0NXpNNTk5LjAwOCAyNDEuNzA4aC0yMi4xODd2MjA5LjkyYzAuMDAxIDAuMDgyIDAuMDAyIDAuMTc5IDAuMDAyIDAuMjc2IDAgNi4xODgtMi40NCAxMS44MDYtNi40MDkgMTUuOTQ2LTMuNzU5IDQuMTktOS4yMDEgNi44MTktMTUuMjU3IDYuODE5LTAuMDMzIDAtMC4wNjcgMC0wLjEgMGgtMTMwLjEyOGMtMC4wMjggMC0wLjA2MiAwLTAuMDk1IDAtNi4wNTYgMC0xMS40OTktMi42MjktMTUuMjQ4LTYuODA4LTMuOTc5LTQuMTUtNi40MTktOS43NjktNi40MTktMTUuOTU3IDAtMC4wOTcgMC4wMDEtMC4xOTQgMC4wMDItMC4yOXYtNDYuNDkyYy0wLjAwMS0wLjA4Mi0wLjAwMi0wLjE3OS0wLjAwMi0wLjI3NiAwLTYuMTg4IDIuNDQtMTEuODA2IDYuNDA5LTE1Ljk0NiAzLjc1OS00LjE5IDkuMjAxLTYuODE5IDE1LjI1Ny02LjgxOSAwLjAzMyAwIDAuMDY3IDAgMC4xIDBoMjIuMTgydi0xMzkuOTQ3aC0yMi4xODdjLTAuMDI4IDAtMC4wNjIgMC0wLjA5NSAwLTYuMDU2IDAtMTEuNDk5LTIuNjI5LTE1LjI0OC02LjgwOC0zLjk3OS00LjE1LTYuNDE5LTkuNzY5LTYuNDE5LTE1Ljk1NyAwLTAuMDk3IDAuMDAxLTAuMTk0IDAuMDAyLTAuMjl2LTQ2LjQ5MmMtMC4wMDEtMC4wODItMC4wMDItMC4xNzktMC4wMDItMC4yNzYgMC02LjE4OCAyLjQ0LTExLjgwNiA2LjQwOS0xNS45NDYgMy43NTktNC4xOSA5LjIwMS02LjgxOSAxNS4yNTctNi44MTkgMC4wMzMgMCAwLjA2NyAwIDAuMSAwaDE3NC4wNzVjMC4wMjggMCAwLjA2MiAwIDAuMDk1IDAgNi4wNTYgMCAxMS40OTkgMi42MjkgMTUuMjQ4IDYuODA4IDMuOTc5IDQuMTUgNi40MTkgOS43NjkgNi40MTkgMTUuOTU3IDAgMC4wOTctMC4wMDEgMC4xOTQtMC4wMDIgMC4yOXY0Ni4wNjVjMC4wNDMgMC41MjcgMC4wNjcgMS4xNDEgMC4wNjcgMS43NjEgMCA1LjMwMi0xLjc5MSAxMC4xODUtNC44IDE0LjA3OS0zLjc0MiA0LjQyNC05LjM2IDcuMjQ3LTE1LjYzNiA3LjI0Ny0wLjQ4OSAwLTAuOTc1LTAuMDE3LTEuNDU2LTAuMDUxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGE7IiBnbHlwaC1uYW1lPSJwYXN0ZSIgZGF0YS10YWdzPSJwYXN0ZSIgZD0iTTM5NC40MDIgNzIzLjczNGgtNzUuMzMzYy02NS44NjcgMC0xMTkuMi01My4zMzMtMTE5LjItMTE5LjJ2LTI4OC41MzNjMC01Ni40IDM3LjYtMTAwLjQgODcuODY3LTExNnY2OS4wNjdjLTE1LjczMyA5LjQ2Ny0yNS4wNjcgMjUuMDY3LTI1LjA2NyA0Ny4wNjd2Mjg4LjRjMCAzMS4zMzMgMjUuMDY3IDU2LjQgNTYuNCA1Ni40aDEzMS43MzNjMCAwIDAgMCAzLjIgMy4ydjBjMCAzMS4zMzMtMjguMjY3IDU5LjYtNTkuNiA1OS42ek03MDQuODAyIDYxMy44NjdjMCAwLTI4LjI2NyAwLTQwLjggMC0xMi41MzMgMzQuNTMzLTQzLjg2NyA1OS42LTg0LjY2NyA1OS42cy02OS4wNjctMjUuMDY3LTgxLjYtNTkuNmMtMTIuNTMzIDAtNDAuOCAwLTQwLjggMC02NS44NjcgMC0xMTkuMi01My4zMzMtMTE5LjItMTE5LjJ2LTI4OC41MzNjMC02NS44NjcgNTMuMzMzLTExOS4yIDExOS4yLTExOS4yaDI0Ny44NjdjNjUuODY3IDAgMTE5LjIgNTMuMzMzIDExOS4yIDExOS4ydjI4NS40NjdjMy4yIDY1Ljg2Ny01My4yIDEyMi4yNjctMTE5LjIgMTIyLjI2N3pNNTgyLjUzNSA2MjYuNTM0YzIyIDAgNDAuOC0xOC44IDQwLjgtNDAuOHMtMTguOC00MC44LTQwLjgtNDAuOGMtMjIgMC00MC44IDE4LjgtNDAuOCA0MC44czE1LjczMyA0MC44IDQwLjggNDAuOHpNNzY0LjQwMiAyMDMuMDY3YzAtMzEuMzMzLTI1LjA2Ny01Ni40LTU2LjQtNTYuNGgtMjUwLjkzM2MtMzEuMzMzIDAtNTYuNCAyNS4wNjctNTYuNCA1Ni40djI4OC41MzNjMCAxOC44IDkuNDY3IDM3LjYgMjUuMDY3IDQ3LjA2N3YwYzAtNDMuODY3IDM0LjUzMy03OC40IDc4LjQtNzguNGgxNjBjNDMuODY3IDAgNzguNCAzNC41MzMgNzguNCA3OC40djBjMTIuNTMzLTkuNDY3IDIyLTI4LjI2NyAyMi00Ny4wNjd2LTI4OC41MzN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwYjsiIGdseXBoLW5hbWU9InJldXNlIiBkYXRhLXRhZ3M9InJldXNlIiBkPSJNNzM0Ljk3NCA2MjQuNzUxYy01NC42MDUgNjEuNjE5LTEzNC4xMjMgMTAwLjU3My0yMjIuOTc3IDEwMC41NzMtMTY0LjkzNiAwLTI5OC42NjEtMTMzLjcyNC0yOTguNjYxLTI5OC42NjFoNzQuNjY3YzAgMTIzLjcyMSAxMDAuMjcyIDIyMy45OTMgMjIzLjk5MyAyMjMuOTkzIDY4LjIxNCAwIDEyOC43NDctMzAuOTYgMTY5Ljc2Ni03OS4xMTlsLTcwLjIxMy03MC4yMTNoMTk5LjEwOXYxOTkuMTA5bC03NS42ODktNzUuNjg5ek01MTEuOTk5IDIwMi42NzFjLTY4LjIxNCAwLTEyOC43NDcgMzAuOTYtMTY5Ljc2NiA3OS4xMTlsNzAuMjEzIDcwLjIxM2gtMTk5LjEwOXYtMTk5LjEwOWw3NS42ODkgNzUuNjg5YzU0LjYwNS02MS42MTkgMTM0LjEyMy0xMDAuNTczIDIyMi45NzctMTAwLjU3MyAxNjQuOTM2IDAgMjk4LjY2MSAxMzMuNzI0IDI5OC42NjEgMjk4LjY2MWgtNzQuNjY3YzAtMTIzLjcyMS0xMDAuMjcyLTIyMy45OTMtMjIzLjk5My0yMjMuOTkzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGM7IiBnbHlwaC1uYW1lPSJpbmZvLW91dGxpbmVkIiBkYXRhLXRhZ3M9ImluZm8tb3V0bGluZWQiIGQ9Ik00NjcuMTk5IDE2MC4wMDNoODkuNTk5djI2OC44aC04OS41OTl2LTI2OC44ek01MTIgODMyLjAwMmMtMjQ3LjI5NiAwLTQ0OC4wMDEtMjAwLjcwNS00NDguMDAxLTQ0OC4wMDFzMjAwLjcwNS00NDguMDAxIDQ0OC4wMDEtNDQ4LjAwMSA0NDguMDAxIDIwMC43MDUgNDQ4LjAwMSA0NDguMDAxLTIwMC43MDUgNDQ4LjAwMS00NDguMDAxIDQ0OC4wMDF6TTUxMiAyNS42MDNjLTE5Ny41NjggMC0zNTguMzk4IDE2MC44My0zNTguMzk4IDM1OC4zOThzMTYwLjgzIDM1OC4zOTggMzU4LjM5OCAzNTguMzk4IDM1OC4zOTgtMTYwLjgzIDM1OC4zOTgtMzU4LjM5OC0xNjAuODMtMzU4LjM5OC0zNTguMzk4LTM1OC4zOTh6TTQ2Ny4xOTkgNTE4LjQwMWg4OS41OTl2ODkuNTk5aC04OS41OTl2LTg5LjU5OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBkOyIgZ2x5cGgtbmFtZT0ic3Bpbm5lciIgZGF0YS10YWdzPSJzcGlubmVyIiBkPSJNNjAwIDc4Ni42NjhjMC00OC42MDItMzkuMzk4LTg4LTg4LTg4cy04OCAzOS4zOTgtODggODggMzkuMzk4IDg4IDg4IDg4IDg4LTM5LjM5OCA4OC04OHpNNTEyIDExMmMtNDguNjAyIDAtODgtMzkuMzk4LTg4LTg4czM5LjM5OC04OCA4OC04OCA4OCAzOS4zOTggODggODgtMzkuMzk4IDg4LTg4IDg4ek04OTMuMzM0IDQ5My4zMzRjLTQ4LjYwMiAwLTg4LTM5LjM5OC04OC04OHMzOS4zOTgtODggODgtODggODggMzkuMzk4IDg4IDg4LTM5LjM5OCA4OC04OCA4OHpNMjE4LjY2NiA0MDUuMzM0YzAgNDguNjAyLTM5LjM5OCA4OC04OCA4OHMtODgtMzkuMzk4LTg4LTg4IDM5LjM5OC04OCA4OC04OCA4OCAzOS4zOTggODggODh6TTI0Mi4zNTcgMjIzLjY5MWMtNDguNjAyIDAtODgtMzkuMzk4LTg4LTg4czM5LjM5OC04OCA4OC04OCA4OCAzOS4zOTggODggODhjMCA0OC42LTM5LjQgODgtODggODh6TTc4MS42NDMgMjIzLjY5MWMtNDguNjAyIDAtODgtMzkuMzk4LTg4LTg4czM5LjM5OC04OCA4OC04OCA4OCAzOS4zOTggODggODhjMCA0OC42LTM5LjM5OCA4OC04OCA4OHpNMjQyLjM1NyA3NjIuOTc3Yy00OC42MDIgMC04OC0zOS4zOTgtODgtODhzMzkuMzk4LTg4IDg4LTg4IDg4IDM5LjM5OCA4OCA4OC0zOS40IDg4LTg4IDg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGU7IiBnbHlwaC1uYW1lPSJjb3B5LWVuYWJsZWQiIGRhdGEtdGFncz0iY29weS1lbmFibGVkIiBkPSJNNjE0LjUyNSA3ODcuOTU5aC0zMTcuNjcyYy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC00My44MTcgMjAuODgtODIuODQyIDUzLjIzMS0xMDcuODN2NzAuMzQ2Yy00LjQ1IDExLjI5Ny03LjAxNiAyMy45NjItNy4wMTYgMzcuNDg0djM3MC4zODhjMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjMTUuMjMyIDAgMjkuNjExLTMuNzY2IDQyLjEwNy0xMC42MTNoNjguMjk0Yy0yNC42NDYgMzQuNDAyLTY1LjAzOSA1Ni45OTctMTEwLjU3IDU2Ljk5N3pNNjc0LjQzMSAyNDYuMDcwaC0yMDkuMzI3Yy0xNC43MjEgMC0yMy4xMDUtOC4zODgtMjMuMTA1LTIzLjEwNXM4LjM4OC0yMy4xMDUgMjMuMTA1LTIzLjEwNWgyMDkuMzI3YzExLjEyNCAwIDIzLjEwNSA4Ljg5OSAyMy4xMDUgMjMuMTA1IDAgMTQuNzIxLTguMzg4IDIzLjEwNS0yMy4xMDUgMjMuMTA1ek02NzQuNDMxIDM2Ni45MTFoLTIwOS4zMjdjLTE0LjcyMSAwLTIzLjEwNS04LjM4OC0yMy4xMDUtMjMuMTA1czguMzg4LTIzLjEwNSAyMy4xMDUtMjMuMTA1aDIwOS4zMjdjMTEuMTI0IDAgMjMuMTA1IDguODk5IDIzLjEwNSAyMy4xMDUgMCAxNC43MjEtOC4zODggMjMuMTA1LTIzLjEwNSAyMy4xMDV6TTcyNi45NzggNjY0Ljg5N2gtMzE4LjAxNGMtNzQuOTY4IDAtMTM1LjktNjAuOTMxLTEzNS45LTEzNS45di0zNzAuMzg4YzAtNzQuOTY4IDYwLjkzMS0xMzUuOSAxMzUuOS0xMzUuOXYwaDMxOC4xODNjNzQuOTY4IDAgMTM1LjkgNjAuOTMxIDEzNS45IDEzNS45djM3MC4zODhjLTAuMzQyIDc0Ljk2OC02MS4yNzMgMTM1LjktMTM2LjA3MyAxMzUuOXpNODE2LjQ5NCAxNjIuNTQ1YzAtNDkuMjkyLTQwLjIyNC04OS41MTYtODkuNTE2LTg5LjUxNmgtMzE4LjE4M2MtNDkuMjkyIDAtODkuNTE2IDQwLjIyNC04OS41MTYgODkuNTE2djM2Ni40NDljMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjNDkuMjkyIDAgODkuNTE2LTQwLjIyNCA4OS41MTYtODkuNTE2di0zNDkuMzM0aDAuMTczdi0xNy4xMTV6TTY3NC40MzEgNDg3Ljc0OGgtMjA5LjMyN2MtMTQuNzIxIDAtMjMuMTA1LTguMzg4LTIzLjEwNS0yMy4xMDVzOC4zODgtMjMuMTA1IDIzLjEwNS0yMy4xMDVoMjA5LjMyN2MxMS4xMjQgMCAyMy4xMDUgOC44OTkgMjMuMTA1IDIzLjEwNSAwIDE0LjcyMS04LjM4OCAyMy4xMDUtMjMuMTA1IDIzLjEwNXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBmOyIgZ2x5cGgtbmFtZT0iY29weS1kaXNhYmxlZCIgZGF0YS10YWdzPSJjb3B5LWRpc2FibGVkIiBkPSJNNjE0LjUyNSA3ODcuOTU5aC0zMTcuNjcyYy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC00My44MTcgMjAuODgtODIuODQyIDUzLjIzMS0xMDcuODN2NzAuMzQ2Yy00LjQ1IDExLjI5Ny03LjAxNiAyMy45NjItNy4wMTYgMzcuNDg0djM3MC4zODhjMCA0OS4yOTIgNDAuMjI0IDg5LjUxNiA4OS41MTYgODkuNTE2aDMxOC4wMTRjMTUuMjMyIDAgMjkuNjExLTMuNzY2IDQyLjEwNy0xMC42MTNoNjguMjk0Yy0yNC42NDYgMzQuNDAyLTY1LjAzOSA1Ni45OTctMTEwLjU3IDU2Ljk5N3pNNzI2Ljk3OCA2NjQuODk3aC0zMTguMDE0Yy03NC45NjggMC0xMzUuOS02MC45MzEtMTM1LjktMTM1Ljl2LTM3MC4zODhjMC03NC45NjggNjAuOTMxLTEzNS45IDEzNS45LTEzNS45djBoMzE4LjE4M2M3NC45NjggMCAxMzUuOSA2MC45MzEgMTM1LjkgMTM1Ljl2MzcwLjM4OGMtMC4zNDIgNzQuOTY4LTYxLjI3MyAxMzUuOS0xMzYuMDczIDEzNS45ek04MTYuNDk0IDE2Mi41NDVjMC00OS4yOTItNDAuMjI0LTg5LjUxNi04OS41MTYtODkuNTE2aC0zMTguMTgzYy00OS4yOTIgMC04OS41MTYgNDAuMjI0LTg5LjUxNiA4OS41MTZ2MzY2LjQ0OWMwIDQ5LjI5MiA0MC4yMjQgODkuNTE2IDg5LjUxNiA4OS41MTZoMzE4LjAxNGM0OS4yOTIgMCA4OS41MTYtNDAuMjI0IDg5LjUxNi04OS41MTZ2LTM0OS4zMzRoMC4xNzN2LTE3LjExNXpNNzA5LjUyMSA0NDcuNTI0bC0yNy43MjggMjcuNTU1LTEwOS41NDQtMTA5LjU0NC0xMDkuNTQ0IDEwOS41NDQtMjcuNTU1LTI3LjU1NSAxMDkuNTQ0LTEwOS41NDQtMTA5LjU0NC0xMDkuNTQ0IDI3LjU1NS0yNy41NTUgMTA5LjU0NCAxMDkuNTQ0IDEwOS41NDQtMTA5LjU0NCAyNy41NTUgMjcuNTU1LTEwOS41NDQgMTA5LjU0NCAxMDkuNzEzIDEwOS41NDR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxMDsiIGdseXBoLW5hbWU9InBhc3RlLWVuYWJsZWQiIGRhdGEtdGFncz0icGFzdGUtZW5hYmxlZCIgZD0iTTQxMC4yMzcgMzUuOTQyYy03NS40MDIgMC0xMzYuNzkzIDYxLjM5NC0xMzYuNzkzIDEzNi43OTN2MzczLjAyNWMwIDc1LjQwMiA2MS4zOTQgMTM2Ljc5MyAxMzYuNzkzIDEzNi43OTNoNjQuODVsNC4xNTIgMTEuNDEzYzE1LjIxOSA0MS42NzggNDcuNzMyIDY1LjcxNSA4OS4yMzcgNjUuNzE1IDQyLjcxNiAwIDc4LjUxMi0yNS4wNzUgOTMuMjEyLTY1LjcxNWw0LjE1Mi0xMS40MTNoNjQuODVjMzcuMDA3IDAgNzMuNDk5LTE1LjkxMSA5OS43ODYtNDMuNTgxIDI1LjU5NC0yNi44MDUgMzguNzM3LTYxLjA0OCAzNy4wMDctOTYuMzI2di0zNjkuNzM4YzAtNzUuNDAyLTYxLjM5NC0xMzYuNzkzLTEzNi43OTMtMTM2Ljc5M2wtMzIwLjQ1My0wLjE3M3pNMzYwLjk0NyA2MTcuMzU2Yy0yNC43MjktMTUuMDQ2LTQwLjY0LTQ0LjYxOS00MC42NC03NS41NzV2LTM3My4wMjVjMC00OS44MDQgNDAuNDY3LTkwLjI3MSA5MC4yNzEtOTAuMjcxaDMyNC40MzJjNDMuNzU0IDAgODAuNDE1IDMxLjQ3NiA4OC41NDUgNzIuOTgxaDEuNzNsMC4xNzMgMTcuMjk1djM3My4wMjVjMCAyOC43MDgtMTQuMTgxIDU4LjYyNy0zNS4yNzcgNzQuNzFsLTI3LjY3IDIwLjkyM3YtMTcuNDY4YzAtNDcuMjEzLTM2LjgzNC04NC4wNDgtODQuMDQ4LTg0LjA0OGgtMjA3LjM1MWMtNDcuMjEzIDAtODQuMDQ4IDM2LjgzNC04NC4wNDggODQuMDQ4djEzLjQ4OWwtMjYuMTEzLTE2LjA4NHpNNTcyLjQ1MSA3MTIuMjk4Yy0yNy44NDMgMC00OC43NjYtMjAuOTIzLTQ4Ljc2Ni00OC43NjYgMC0yNi40NTkgMjIuMzA3LTQ4Ljc2NiA0OC43NjYtNDguNzY2czQ4Ljc2NiAyMi4zMDcgNDguNzY2IDQ4Ljc2NmMwLjE3MyAyNi4yODYtMjIuMTM0IDQ4Ljc2Ni00OC43NjYgNDguNzY2ek00MjIuMTY5IDc0Mi43MzZjNy43OCA4LjgxOCAxNi42MDMgMTYuNzc2IDI0LjM4MyAyNS41OTQgMS45MDMgMi4wNzYgMy44MDYgNC4zMjUgNS43MDkgNi40MDFoLTE1OC41ODVjLTc1Ljc0OCAwLTEzNy4zMTItNjEuNTY3LTEzNy4zMTItMTM3LjMxMnYtMzc0LjIzNmMwLTQ0Ljk2NSAyMS43ODgtODQuOTEzIDU1LjE2Ny0xMDkuOTg4djY4LjgyOWMtNS41MzYgMTIuMjc4LTguNDcyIDI2LjExMy04LjQ3MiA0MS4xNTl2Mzc0LjIzNmMwIDQ5LjgwNCA0MC42NCA5MC40NDQgOTAuNDQ0IDkwLjQ0NGgxMTYuNTYxYzMuNjMzIDUuMTkgNy43OCAxMC4yMDIgMTIuMTA1IDE0Ljg3M3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTExOyIgZ2x5cGgtbmFtZT0icGFzdGUtZGlzYWJsZWQiIGRhdGEtdGFncz0icGFzdGUtZGlzYWJsZWQiIGQ9Ik00MTAuMjM3IDM1Ljk0MmMtNzUuNDAyIDAtMTM2Ljc5MyA2MS4zOTQtMTM2Ljc5MyAxMzYuNzkzdjM3My4wMjVjMCA3NS40MDIgNjEuMzk0IDEzNi43OTMgMTM2Ljc5MyAxMzYuNzkzaDY0Ljg1bDQuMTUyIDExLjQxM2MxNS4yMTkgNDEuNjc4IDQ3LjczMiA2NS43MTUgODkuMjM3IDY1LjcxNSA0Mi43MTYgMCA3OC41MTItMjUuMDc1IDkzLjIxMi02NS43MTVsNC4xNTItMTEuNDEzaDY0Ljg1YzM3LjAwNyAwIDczLjQ5OS0xNS45MTEgOTkuNzg2LTQzLjU4MSAyNS41OTQtMjYuODA1IDM4LjczNy02MS4wNDggMzcuMDA3LTk2LjMyNnYtMzY5LjczOGMwLTc1LjQwMi02MS4zOTQtMTM2Ljc5My0xMzYuNzkzLTEzNi43OTNsLTMyMC40NTMtMC4xNzN6TTM2MC45NDcgNjE3LjM1NmMtMjQuNzI5LTE1LjA0Ni00MC42NC00NC42MTktNDAuNjQtNzUuNTc1di0zNzMuMDI1YzAtNDkuODA0IDQwLjQ2Ny05MC4yNzEgOTAuMjcxLTkwLjI3MWgzMjQuNDMyYzQzLjc1NCAwIDgwLjQxNSAzMS40NzYgODguNTQ1IDcyLjk4MWgxLjczbDAuMTczIDE3LjI5NXYzNzMuMDI1YzAgMjguNzA4LTE0LjE4MSA1OC42MjctMzUuMjc3IDc0LjcxbC0yNy42NyAyMC45MjN2LTE3LjQ2OGMwLTQ3LjIxMy0zNi44MzQtODQuMDQ4LTg0LjA0OC04NC4wNDhoLTIwNy4zNTFjLTQ3LjIxMyAwLTg0LjA0OCAzNi44MzQtODQuMDQ4IDg0LjA0OHYxMy40ODlsLTI2LjExMy0xNi4wODR6TTU3Mi40NTEgNzEyLjI5OGMtMjcuODQzIDAtNDguNzY2LTIwLjkyMy00OC43NjYtNDguNzY2IDAtMjYuNDU5IDIyLjMwNy00OC43NjYgNDguNzY2LTQ4Ljc2NnM0OC43NjYgMjIuMzA3IDQ4Ljc2NiA0OC43NjZjMC4xNzMgMjYuMjg2LTIyLjEzNCA0OC43NjYtNDguNzY2IDQ4Ljc2NnpNNDIyLjE2OSA3NDIuNzM2YzcuNzggOC44MTggMTYuNjAzIDE2Ljc3NiAyNC4zODMgMjUuNTk0IDEuOTAzIDIuMDc2IDMuODA2IDQuMzI1IDUuNzA5IDYuNDAxaC0xNTguNTg1Yy03NS43NDggMC0xMzcuMzEyLTYxLjU2Ny0xMzcuMzEyLTEzNy4zMTJ2LTM3NC4yMzZjMC00NC45NjUgMjEuNzg4LTg0LjkxMyA1NS4xNjctMTA5Ljk4OHY2OC44MjljLTUuNTM2IDEyLjI3OC04LjQ3MiAyNi4xMTMtOC40NzIgNDEuMTU5djM3NC4yMzZjMCA0OS44MDQgNDAuNjQgOTAuNDQ0IDkwLjQ0NCA5MC40NDRoMTE2LjU2MWMzLjYzMyA1LjE5IDcuNzggMTAuMjAyIDEyLjEwNSAxNC44NzN6TTcxOC41ODUgNDQyLjUxNWwtMjguMDE2IDI3Ljg0My0xMTAuNjgtMTEwLjY4LTExMC42OCAxMTAuNjgtMjcuODQzLTI3Ljg0MyAxMTAuNjgtMTEwLjY4LTExMC42OC0xMTAuNjggMjcuODQzLTI3Ljg0MyAxMTAuNjggMTEwLjY4IDExMC42OC0xMTAuNjggMjcuODQzIDI3Ljg0My0xMTAuNjggMTEwLjY4IDExMC44NTMgMTEwLjY4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTI7IiBnbHlwaC1uYW1lPSJidXR0b24tZGlzYWJsZWQiIGRhdGEtdGFncz0iYnV0dG9uLWRpc2FibGVkIiBkPSJNODUzLjMzMyA2NzcuOTEzbC02OC43NTQgNjguNzU0LTI3Mi41NzktMjcyLjU3OS0yNzIuNTc5IDI3Mi41NzktNjguNzU0LTY4Ljc1NCAyNzIuNTc5LTI3Mi41NzktMjcyLjU3OS0yNzIuNTc5IDY4Ljc1NC02OC43NTQgMjcyLjU3OSAyNzIuNTc5IDI3Mi41NzktMjcyLjU3OSA2OC43NTQgNjguNzU0LTI3Mi41NzkgMjcyLjU3OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTEzOyIgZ2x5cGgtbmFtZT0iYXVkaW8taWNvbiIgZGF0YS10YWdzPSJhdWRpby1pY29uIiBkPSJNNDcyLjggNTY4Ljg2N3YtMzE5LjNjMC0xMC4zLTguMy0xOC43LTE4LjYtMTguOC01IDAtOS45IDItMTMuNCA1LjZsLTk3LjggOTcuN2gtNzdjLTEwLjMgMC4yLTE4LjcgOC41LTE4LjggMTguOHYxMTIuNmMwLjIgMTAuMyA4LjUgMTguNyAxOC44IDE4LjhoNzYuOWw5Ny44IDk3LjhjNy40IDcuMyAxOS4zIDcuMiAyNi42LTAuMiAzLjQtMy41IDUuNC04LjEgNS40LTEzaDAuMXpNNTg1LjkgNDUxLjI2N2M4LjItMTIuNSAxMi42LTI3LjIgMTIuNi00Mi4xcy00LjQtMjkuNS0xMi42LTQyYy03LjktMTIuNi0xOS43LTIyLjQtMzMuNi0yNy45LTIuMy0xLjEtNC45LTEuNi03LjQtMS41LTUgMC05LjggMS45LTEzLjMgNS41LTMuOCAzLjUtNS45IDguNC01LjggMTMuNS0wLjEgMy44IDEuMiA3LjYgMy42IDEwLjVzNS4zIDUuNCA4LjYgNy40YzMuMyAyLjEgNi43IDQuMyAxMC4xIDYuOCAzLjYgMi44IDYuNiA2LjQgOC42IDEwLjUgNC43IDEwLjggNC43IDIzIDAgMzMuOC0yIDQuMS01IDcuNy04LjYgMTAuNS0zLjMgMi41LTYuNyA0LjctMTAuMSA2LjgtMy4zIDItNi4yIDQuNS04LjYgNy40LTIuNCAzLTMuNyA2LjctMy42IDEwLjUtMC4xIDUuMSAyLjEgMTAgNS44IDEzLjUgMy41IDMuNiA4LjMgNS41IDEzLjMgNS41IDIuNiAwLjEgNS4xLTAuNCA3LjQtMS41IDEzLjgtNSAyNS42LTE0LjYgMzMuNi0yNy4ydjB6TTY2My4zIDQ5Mi45NjdjMzMuNi01MC44IDMzLjYtMTE2LjggMC0xNjcuNi0xNi0yNS4xLTM5LjItNDQuNi02Ni42LTU2LjItMi40LTEtNC45LTEuNS03LjQtMS41LTUuMiAwLTEwLjEgMi4xLTEzLjYgNS44LTMuNyAzLjQtNS44IDguMy01LjggMTMuMyAwIDcuNyA0LjYgMTQuNiAxMS43IDE3LjUgNy44IDMuOCAxNS40IDguMiAyMi42IDEzIDUwLjYgMzYuOSA2MS44IDEwNy44IDI0LjkgMTU4LjQtNyA5LjYtMTUuNCAxOC0yNC45IDI0LjktNy4yIDQuOS0xNC43IDkuMy0yMi42IDEzLjEtNy4xIDIuOS0xMS43IDkuOC0xMS43IDE3LjUgMC4xIDEwLjQgOC42IDE4LjkgMTkgMTkgMi42IDAgNS4zLTAuNSA3LjctMS41IDI3LjMtMTEuMiA1MC42LTMwLjcgNjYuNy01NS43ek03NDEgNTM0LjQ2N2M2OS4zLTEwNS4xIDQwLjItMjQ2LjQtNjQuOS0zMTUuNy0xMS4yLTcuNC0yMy4xLTEzLjgtMzUuNC0xOS4xLTIuNS0xLTUuMS0xLjUtNy43LTEuNS0xMC40IDAuMi0xOC44IDguNi0xOSAxOSAwLjMgNy42IDQuOCAxNC40IDExLjcgMTcuNSAyLjIgMS4yIDQuNCAyLjIgNi43IDMuMXM0LjUgMS45IDYuNyAzLjFjOC40IDQuNSAxNi41IDkuNiAyNC4zIDE1LjEgMjQgMTcuNiA0My42IDQwLjcgNTcgNjcuMyAyNy4zIDUzLjkgMjcuMyAxMTcuNSAwIDE3MS40LTEzLjQgMjYuNy0zMyA0OS44LTU3IDY3LjQtNy44IDUuNS0xNS45IDEwLjYtMjQuMyAxNS4xLTIuMiAxLjItNC40IDIuMi02LjcgMy4xcy00LjUgMS45LTYuNyAzLjFjLTYuOSAzLjItMTEuNCA5LjktMTEuNyAxNy41IDAuMyAxMC40IDguOCAxOC42IDE5LjIgMTguNyAyLjYgMCA1LjMtMC41IDcuNy0xLjUgNDEtMTcuMyA3NS45LTQ2LjUgMTAwLjMtODMuOGgtMC4yeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTQ7IiBnbHlwaC1uYW1lPSJhdWRpby11cGxvYWQtaWNvbiIgZGF0YS10YWdzPSJhdWRpby11cGxvYWQtaWNvbiIgZD0iTTc5Ni45IDUzNi41NjdsLTEwMi40IDEwNi42Yy0xMi44IDEyLjgtMzguNCAyMS4zLTU1LjUgMjEuM2gtMTQwLjhsMjEuMy00Mi43aDg5LjZ2LTEzNi41YzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDE0MC44di0zNDEuM2gtNDI2LjZ2MzI4LjZoLTQyLjd2LTM0MS4zYzAtMTcuMSAxMi44LTI5LjkgMjkuOS0yOS45aDQ0OGMxNy4xIDAgMjkuOSAxMi44IDI5LjkgMjkuOXYzODRjNC4yIDE3LTguNiAzOC40LTIxLjQgNTEuMnpNNjUxLjggNDkzLjg2N3YxMjMuN2M0LjMgMCAxMi44LTQuMyAxMi44LTguNWwxMDIuNC0xMDIuNGM0LjMtNC4zIDQuMy04LjUgOC41LTEyLjhoLTEyMy43ek0zNjEuNyA1MTAuOTY3djEzNi41bDU5LjctNTkuN2M4LjUtOC41IDE3LjEtNC4zIDI1LjYgMGwxMi44IDEyLjhjOC41IDguNSA4LjUgMTcuMSAwIDI1LjZsLTExNS4yIDEwNi42Yy04LjUgOC41LTE3LjEgOC41LTIxLjMgMGwtMTE1LjItMTEwLjljLTQuMy04LjUtNC4zLTE3LjEgMC0yNS42bDEyLjgtMTIuOGM4LjUtOC41IDE3LjEtOC41IDIxLjMgMGw1OS43IDU5Ljd2LTEzNi41YzAtOC41IDguNS0xNy4xIDE3LjEtMTcuMWgyNS42YzAgMCAxNy4xIDguNiAxNy4xIDIxLjR6TTUzMi43IDM4MC40Njd2LTE4OGMwLTUuMi01LjItMTAuNC01LjItMTAuNGgtNS4yYy01LjIgMC01LjIgMC0xMC40IDUuMmwtNTcuNSA1Ny40aC00N2MtNS4yIDAtMTAuNCA1LjItMTAuNCAxMC40djYyLjdjMCA1LjIgNS4yIDEwLjQgMTAuNCAxMC40aDQ3bDU3LjUgNTcuNWM1LjIgNS4yIDEyLjggOS43IDE2LjUgNnM0LjMtNiA0LjMtMTEuMnpNNjE2LjMgMjA4LjE2N2MyMC45IDIwLjkgMzEuMyA0NyAzMS4zIDc4LjNzLTEwLjQgNTcuNS0zMS4zIDc4LjNjLTEwLjQgMTAuNC0yMC45IDEwLjQtMzEuMyAwcy0xMC40LTIwLjkgMC0zMS4zYzEwLjQtMTAuNCAxNS43LTI2LjEgMTUuNy00N3MtNS4yLTMxLjMtMTUuNy00N2MtMTAuNC0xMC40LTEwLjQtMjAuOSAwLTMxLjMgNS4yLTUuMiAxMC40LTUuMiAxNS43LTUuMnMxMC40LTAuMSAxNS42IDUuMnpNNjg5LjQgMTU1Ljg2N2MzMS4zIDM2LjYgNDcgNzguMyA0NyAxMjUuNCAwIDQ3LTE1LjcgODguOC00NyAxMjUuNC0xMC40IDE1LjctMjAuOSAxNS43LTMxLjMgMTAuNC0xMC40LTEwLjQtMTAuNC0yMC45LTUuMi0zMS4zIDIwLjktMjYuMSAzNi42LTYyLjcgMzYuNi05OS4ycy0xMC40LTczLjEtMzYuNi05OS4yYy0xMC40LTEwLjQtNS4yLTI2LjEgNS4yLTMxLjMgNS4yLTUuMiAxMC40LTUuMiAxNS43LTUuMnMxMC40LTAuMiAxNS42IDV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNTsiIGdseXBoLW5hbWU9Imh1Yi1pY29uIiBkYXRhLXRhZ3M9Imh1Yi1pY29uIiBob3Jpei1hZHYteD0iMzE1MSIgZD0iTTIwNzUuNzUgODI5LjgyOWMtNTIuODYxIDUwLjU0LTEzMi41NCA3MS40MjgtMjM4Ljc3OCA3MS40MjhoLTM0MS40MDZ2LTE4MC41MDJoLTQ0NS44MzlsLTM0LjgxMS0xNTAuMzMyYzEyNy4zODMgNjAuMDgxIDMwNC4wMTcgNTEuNTcyIDQxMC41MTMtNDYuNDE1IDExNC4yMzItMTA1LjcyMyAxMTguNjE2LTI4MC44MSA0Mi41NDctNDEwLjI1NS0yOS45MTgtNDkuODAzLTcxLjkzMi04OS41ODQtMTIyLjA4Mi0xMTUuOTk4LTIyLjgzNi0xMS4zODUtNDYuMzAxLTE1LjUxLTY3Ljk2Mi0yNC41MzVoMzQ2LjU2M3YzMzQuOTZoMTgwLjUwMmMxMjYuMDkzIDAgMjYxLjQ3IDM3LjY0OCAzMjAuNTIgMTU5LjYxNSA1My4zNzcgMTEwLjYyMSA0Mi44MDUgMjc0LjM2My00OS4yNTEgMzYxLjAwM3pNMTgzNC45MDkgNTQwLjI1NGMtMjIuOTUtMTkuNTk3LTYyLjY2LTI1Ljc4Ni0xMTkuMTMxLTI1Ljc4NmgtOTEuMjgzdjIwNi4yODdoMTAzLjE0NGM0NS42NDEgMCA5Ni40MzktNy4yMiAxMjQuMDMxLTQ3LjcwNCAxMC44ODQtMTUuOTM3IDE3LjM4LTM1LjYyNCAxNy4zOC01Ni44MjcgMC0zMC4xNzMtMTMuMTUzLTU3LjI3NC0zNC4wMzktNzUuODgyek0xMTA0LjY1IDQzMy43NThjLTUxLjMwOS0wLjIyNS05NS42MDMtMzAuMDMyLTExNi43MjgtNzMuMjM1bC0yNTguMiAzMC40MzEgMTE3LjA2OCA1MTAuMzA0aC0yMjcuOTQ4di0zODYuNzloLTMzNS4yMTh2Mzg2Ljc5aC0yODMuNjQ1di05MjguMjk1aDI4My42NDV2MzM1LjIxOGgzMzUuMjE4di0zMzUuMjE4aDM0Ny41OTVjLTEyMC4xNjMgMjcuNTkxLTIwMi4xNjIgMTE5LjM4OS0yMzUuOTQyIDIzNS40MjZsMjU3Ljg2IDM2LjYxNmMyMS44ODUtNDMuMTQ3IDY1LjkyLTcyLjIwMSAxMTYuNzQtNzIuMjAxIDcyLjA2MSAwIDEzMC40NzcgNTguNDE3IDEzMC40NzcgMTMwLjQ3NyAwIDcyLjAzNi01OC4zNzYgMTMwLjQzNi0xMzAuNDAzIDEzMC40Nzd6TTIzNDkuMDgxLTI3LjAzOGgtODguNzA0bDQwLjQ4NCAxOTIuMzY0YzQuMTI1IDE3Ljc5MiAxMC44MyA0Ni42NzMtMy4zNTIgNjIuMTQ0LTYuODE2IDYuMDAyLTE1LjgxOCA5LjY2NS0yNS42NzYgOS42NjUtNy45MDUgMC0xNS4yNi0yLjM1Ni0yMS40MDEtNi40MDQtMzguMDE3LTIyLjM0My01MS40MjYtODAuODc4LTYwLjcwOS0xMjAuNTg4bC0yOC44OC0xMzcuMTgxaC04OC43MDRsOTcuMjEzIDQ1OC45OTFoODguNzA0Yy0xMi42MzUtNTguMjc2LTI1Ljc4Ni0xMTUuNzc5LTQzLjA2My0xNzMuMDI0aDIuNTc4YzMyLjIzMyAzOS45NjggODguMTg4IDY3LjA0MyAxMzcuNDM5IDM5LjcxczQzLjA2My05MS4yODMgMzMuMjYzLTEzNy40Mzl6TTI1MDIuNzY2IDMwMy4wMjJoODguNzA0bC00MC4yMjYtMTkyLjM2NGMtNC4xMjUtMTcuNzkyLTEwLjgzLTQ2LjY3MyAzLjM1Mi02Mi4xNDQgNi42OTItNS42OSAxNS40MzMtOS4xNTEgMjQuOTgzLTkuMTUxIDguMjA2IDAgMTUuODE1IDIuNTU2IDIyLjA3NCA2LjkxNCAzOC4wMzYgMjIuMzUgNTEuNDQ2IDgwLjg4NSA2MC43MjggMTIwLjU5NWwyOC44OCAxMzYuNDA4aDg4LjcwNGwtNjkuODgtMzMwLjMxOGgtNjcuODE4bDYuMTg4IDYwLjg1NWgtMS44MDVjLTI5LjEzOC00NS42NDEtODEuMjI2LTgxLjc0MS0xMzcuMTgxLTYxLjg4Ni02MS44ODYgMjEuNjYtNTQuMTUxIDEwMC44MjMtNDMuODM2IDE1Mi4zOTV6TTMwMjkuNTczIDMwOC4xOGMxMjEuNDUyIDAgOTkuMDE4LTE3MS40NzcgNjYuMjctMjQzLjQyLTE3Ljg1MS00Mi45MDYtNTIuMjY2LTc1Ljg5MS05NS4wNDktOTEuNDM5LTEwLjIyNi0zLjY0MS0yMC43MjItNS41MzgtMzEuNjU5LTUuNTM4LTM0Ljc2OSAwLTY1LjA2MSAxOS4xNjgtODAuODg1IDQ3LjUxNGwtMi41NjEgMC40Ny0xNi41MDMtNDIuODA1aC02OC4wNzVsOTcuMjEzIDQ1OC45OTFoODguNzA0bC0xOC4zMDgtODQuODM2Yy03LjkyNy0zNS4wODktMTYuNzkyLTY0LjU3MS0yNy40MTUtOTMuMjAybDMuOTUgNS4wMTRjMTguMzg1IDI4LjE2OCA0OC45MzQgNDcuMDcxIDg0LjAxMyA0OS4yMzZ6TTI5OTMuOTg4IDIzNi4yMzdjLTc3LjM1OCAwLTExOC4zNTgtMjA2LjI4Ny0zNS44NDMtMTk3Ljc3OSA2NS40OTYgNy4yMiAxMTUuMjYzIDE5OC44MSAzNS44NDMgMTk4LjgxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTY7IiBnbHlwaC1uYW1lPSJjbG9zZSIgZGF0YS10YWdzPSJjbG9zZSIgZD0iTTk5Ni44MTEgNTkuNjZsLTExNy44MDYtMTE3LjgwNmMtMTguMTIzLTE4LjEyMy0zNi4yNDgtMjcuMTg2LTU0LjM3MS0yNy4xODZzLTQ1LjMwOSA5LjA2My01NC4zNzEgMjcuMTg2bC0yNTMuNzM0IDI1My43MzQtMjUzLjczNC0yNTMuNzM0Yy0xOC4xMjMtMTguMTIzLTM2LjI0OC0yNy4xODYtNTQuMzcxLTI3LjE4NnMtNDUuMzA5IDkuMDYzLTU0LjM3MSAyNy4xODZsLTEyNi44NjYgMTE3LjgwNmMtMTguMTIzIDE4LjEyMy0yNy4xODYgMzYuMjQ4LTI3LjE4NiA1NC4zNzFzOS4wNjMgNDUuMzA5IDI3LjE4NiA1NC4zNzFsMjUzLjczNCAyNTMuNzM0LTI1My43MzQgMjYyLjc5NWMtMTguMTIzIDE4LjEyMy0yNy4xODYgMzYuMjQ4LTI3LjE4NiA1NC4zNzFzOS4wNjMgNDUuMzA5IDI3LjE4NiA1NC4zNzFsMTE3LjgwNiAxMTcuODA2YzkuMDYzIDE4LjEyMyAzNi4yNDggMjcuMTg2IDU0LjM3MSAyNy4xODZzNDUuMzA5LTkuMDYzIDU0LjM3MS0yNy4xODZsMjUzLjczNC0yNTMuNzM0IDI1My43MzQgMjUzLjczNGMxOC4xMjMgMTguMTIzIDM2LjI0OCAyNy4xODYgNTQuMzcxIDI3LjE4NnM0NS4zMDktOS4wNjMgNTQuMzcxLTI3LjE4NmwxMTcuODA2LTExNy44MDZjMTguMTIzLTE4LjEyMyAyNy4xODYtMzYuMjQ4IDI3LjE4Ni01NC4zNzFzLTkuMDYzLTQ1LjMwOS0yNy4xODYtNTQuMzcxbC0yNTMuNzM0LTI1My43MzQgMjUzLjczNC0yNTMuNzM0YzE4LjEyMy0xOC4xMjMgMjcuMTg2LTM2LjI0OCAyNy4xODYtNTQuMzcxIDkuMDYzLTI3LjE4NiAwLTQ1LjMwOS0xOC4xMjMtNjMuNDM0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTc7IiBnbHlwaC1uYW1lPSJ1cGRhdGUiIGRhdGEtdGFncz0idXBkYXRlIiBkPSJNMTcuNDE1IDUzMi41NDljNTAuNzQgMjMwLjk1NSAyNTMuNjE4IDQwMS4yNDUgNDk2LjI3IDQwMS4yNDUgMTM2LjU2MyAwIDI2MC41MjktNTMuOTM3IDM1MS43NTYtMTQxLjY3MWw4NS40MTcgODUuNzRjNy41MzkgNy44ODkgMTguMTEgMTIuODI2IDI5LjgzNCAxMi45MzcgMjMuNjUzIDAgNDIuODExLTE5LjE1OCA0Mi44MTEtNDIuNzkxdi0yOTguNTQyYzAtMjMuNjMzLTE5LjE1OC00Mi43OTEtNDIuNzkxLTQyLjc5MWgtMjk4LjU0MmMtMjMuNjMzIDAtNDIuNzkxIDE5LjE1OC00Mi43OTEgNDIuNzkxIDAuMjI5IDExLjcyMyA1LjEzNyAyMi4yNTYgMTIuOTI4IDI5Ljg0NWw5MS41NjIgOTEuNTYyYy02MS4wMzcgNTguNTktMTQ0LjA3MyA5NC42NjgtMjM1LjUzNCA5NC42NjgtMTIzLjMzMiAwLTIzMS4zNDItNjUuNjAyLTI5MS4wMzktMTYzLjgxNi0xMy4wMzMtMjMuMTk0LTI0Ljc3NS00OC43OTktMzQuNDg0LTc1LjM4Mi0zLjg0LTEyLjQxMi0xMS43MzctMTguNjE3LTIxLjA5My0xOC42NzRoLTEyNC4zOTljLTExLjMyNiAwLjUyLTIwLjM3OCA5LjU3Mi0yMC44OTYgMjAuODUgMC4wODMgMS41MDggMC40NDEgMi44NjQgMS4wMjIgNC4wOTV6TTAuNDk3IDI5My43MTVjMCAyMy42MzMgMTkuMTU4IDQyLjc5MSA0Mi43OTEgNDIuNzkxaDI5OC41NDJjMjMuNjMzIDAgNDIuNzkxLTE5LjE1OCA0Mi43OTEtNDIuNzkxLTAuMjI5LTExLjcyMy01LjEzNy0yMi4yNTYtMTIuOTI4LTI5Ljg0NWwtOTEuNTYyLTkxLjU2MmM2MC43NTQtNTYuNiAxNDIuNTIzLTkxLjM0MiAyMzIuNDA3LTkxLjM0MiAxMjIuNTM2IDAgMjI5Ljk5MSA2NC41NjkgMjkwLjE5NyAxNjEuNTM4IDEzLjAzNSAyMy4xNDkgMjQuNzc3IDQ4Ljc1NCAzNC40NzkgNzUuMzQxIDMuODM0IDEyLjM5OSAxMS43MzIgMTguNjA0IDIxLjA4OCAxOC42NjFoMTMxLjM2NWMwLjM1NyAwLjAyMSAwLjc3NSAwLjAzMyAxLjE5NSAwLjAzMyAxMS4wNTAgMCAyMC4xODgtOC4xODYgMjEuNjgtMTguODI1bDAuMDEzLTAuMTE2Yy01Mi4zNjUtMjI5LjQzNi0yNTQuNjc4LTM5OC4wNTgtNDk2LjM3NS0zOTguMDU4LTAuNDIgMC0wLjg0MSAwLjAwMS0xLjI2MSAwLjAwMi0xMzYuNTQ2IDAuODQxLTI2MC40NjYgNTQuNDg5LTM1Mi40NTUgMTQxLjUzNmwtODYuMzM2LTg1LjgwOGMtNy41OTgtNy44LTE4LjEzMS0xMi43MDgtMjkuODEyLTEyLjkzNi0yMy42NzUtMC4wMDEtNDIuODMzIDE5LjE1OC00Mi44MzMgNDIuNzl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxODsiIGdseXBoLW5hbWU9InF1ZXN0aW9uLW91dGxpbmVkIiBkYXRhLXRhZ3M9InF1ZXN0aW9uLW91dGxpbmVkIiBkPSJNNTEyLjEzMy04NS4zMzNjLTI4MS43MzMgMC01MTAuNCAyMjguNjY3LTUxMC40IDUxMC40czIyOC42NjcgNTEwLjI2NyA1MTAuNCA1MTAuMjY3YzI4MS43MzMgMCA1MTAuNC0yMjguNTMzIDUxMC40LTUxMC40IDAtMjgxLjYtMjI4LjY2Ny01MTAuMjY3LTUxMC40LTUxMC4yNjd6TTg2LjggNDI1LjA2N2MwLTIzNC41MzMgMTkwLjY2Ny00MjUuMzMzIDQyNS4zMzMtNDI1LjMzMyAyMzQuNTMzIDAgNDI1LjMzMyAxOTAuNjY3IDQyNS4zMzMgNDI1LjMzM3MtMTkwLjY2NyA0MjUuMzMzLTQyNS4zMzMgNDI1LjMzM2MtMjM0LjUzMyAwLTQyNS4zMzMtMTkwLjgtNDI1LjMzMy00MjUuMzMzek02NDIuNCAzOTMuODY3Yy0zNC41MzMtMjAtNTUuODY3LTMyLjUzMy01NS44NjctNTMuODY3di0yMS4zMzNjMC0xMi05LjMzMy0yMS4yLTIxLjItMjEuMmgtMTA2LjI2N2MtMTIgMC0yMS4yIDkuMzMzLTIxLjIgMjEuMnY0NS4yYzAgODEuNzMzIDU4LjUzMyAxMDcuNiAxMDUuNiAxMjguOTMzIDM5Ljg2NyAxOC42NjcgNjQuNCAzMS4yIDY0LjQgNjEuMiAwIDM4LjUzMy00OC41MzMgNjcuMDY3LTkyLjQgNjcuMDY3LTIzLjIgMC00Ny44NjctNy4zMzMtNjMuMDY3LTE4LTE0LjY2Ny0xMC0yOC41MzMtMjQuNTMzLTUzLjItNTUuMi00LTUuMzMzLTEwLTgtMTYuNjY3LTgtNC42NjcgMC05LjMzMyAxLjMzMy0xMi42NjcgNGwtNzEuNzMzIDU0LjUzM2MtOC42NjcgNi42NjctMTAuNjY3IDE5LjMzMy00LjY2NyAyOC41MzMgNTQuNTMzIDg1Ljg2NyAxMzAuOTMzIDEyNy43MzMgMjMyIDEyNy43MzMgMTA4LjkzMyAwIDIzMS4yLTg2LjQgMjMxLjItMjAyIDAtOTQuNC02NS43MzMtMTMxLjYtMTE0LjI2Ny0xNTguOHpNNTg2LjUzMyAxMTYuNjY3YzAtMTItOS4zMzMtMjEuMi0yMS4yLTIxLjJoLTEwNi4yNjdjLTEyIDAtMjEuMiA5LjMzMy0yMS4yIDIxLjJ2MTA2LjI2N2MwIDEyIDkuMzMzIDIxLjIgMjEuMiAyMS4yaDEwNi4yNjdjMTIgMCAyMS4yLTkuMzMzIDIxLjItMjEuMnYtMTA2LjI2N3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTE5OyIgZ2x5cGgtbmFtZT0icXVhbGl0eS1hcHByb3ZlZCIgZGF0YS10YWdzPSJxdWFsaXR5LWFwcHJvdmVkIiBkPSJNNTExLjAzNS04NS4zMzNjLTI4Mi4zNTggMC41NTItNTExLjAzNSAyMjkuNTY3LTUxMS4wMzUgNTEyIDAgMjgyLjc3MSAyMjkuMjI5IDUxMiA1MTIgNTEyczUxMi0yMjkuMjI5IDUxMi01MTJjLTAuNTUyLTI4Mi44OTEtMjMwLjAxMi01MTItNTEyLjk3Ni01MTIgMCAwIDAgMCAwIDB6TTUxMS4wMzUgNzg3LjM5M2MtMjAwLjMwMSAwLTM2Mi42NjgtMTYyLjM2Ni0zNjIuNjY4LTM2Mi42NjhzMTYyLjM2Ni0zNjIuNjY4IDM2Mi42NjgtMzYyLjY2OGMyMDAuMzAxIDAgMzYyLjY2OCAxNjIuMzY2IDM2Mi42NjggMzYyLjY2OCAwLjAwMSAwLjU3NyAwLjAwMiAxLjI1MyAwLjAwMiAxLjk0MyAwIDIwMC40OTUtMTYyLjI2MiAzNjMuMDk0LTM2Mi42MiAzNjMuNjMyek00OTkuMzk3IDIwMC43MjhjLTcuNzA3LTcuNjU2LTE4LjMzNC0xMi4zODYtMzAuMDY3LTEyLjM4NnMtMjIuMzQ3IDQuNzMtMzAuMDY4IDEyLjM4N2wtMTkzLjk0MiAxOTMuOTQyYy03LjY1NiA3LjcwNy0xMi4zODYgMTguMzM0LTEyLjM4NiAzMC4wNjdzNC43MyAyMi4zNDcgMTIuMzg3IDMwLjA2OGw2Ny44NzUgNjcuODc1YzcuNzA3IDcuNjU2IDE4LjMzNCAxMi4zODYgMzAuMDY3IDEyLjM4NnMyMi4zNDctNC43MyAzMC4wNjgtMTIuMzg3bDk2Ljk2NS05Ni45NjUgMTgzLjI3IDE4My4yN2M3LjcwNyA3LjY1NiAxOC4zMzQgMTIuMzg2IDMwLjA2NyAxMi4zODZzMjIuMzQ3LTQuNzMgMzAuMDY4LTEyLjM4N2w2Ny44NzUtNjcuODc1YzcuODk2LTcuNjAzIDEyLjc5Ni0xOC4yNjEgMTIuNzk2LTMwLjA2N3MtNC45LTIyLjQ2My0xMi43ODktMzAuMDQ4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MWE7IiBnbHlwaC1uYW1lPSJhcnJvdy10aGljayIgZGF0YS10YWdzPSJhcnJvdy10aGljayIgZD0iTTk5NC4wNzcgMzg0LjY0MmMwLjEwMS0xLjUxNyAwLjE2NS0zLjI5MSAwLjE2NS01LjA4MyAwLTQyLjgxNi0zNC4wNTItNzcuNjgzLTc2LjU1My03OC45ODhsLTQ2Mi41MjItMC4wMDEgMTk1LjA0OS0xOTMuMzY4YzE1LjExMi0xNS4xOTUgMjQuNDUtMzYuMTQ0IDI0LjQ1LTU5LjI3NHMtOS4zMzktNDQuMDcyLTI0LjQ1My01OS4yNzdsLTQ5LjYwMS00OS42MDFjLTE1LjEwNC0xNC45ODQtMzUuODgzLTI0LjI4NC01OC44MjktMjQuMzgyLTAuMTY1IDAtMC4zMzUtMC4wMDEtMC41MDQtMC4wMDEtMjMuMDkzIDAtNDQuMDE2IDkuMzEyLTU5LjIxIDI0LjM4N2wtNDMwLjQ0NSA0MjguNzYzYy0xNC45ODQgMTUuMTA0LTI0LjI4NCAzNS44ODMtMjQuMzgyIDU4LjgyOSAwIDAuMTY1LTAuMDAxIDAuMzM1LTAuMDAxIDAuNTA0IDAgMjMuMDkzIDkuMzEyIDQ0LjAxNiAyNC4zODcgNTkuMjFsNDMwLjQ0NSA0MjcuMDgzYzE1LjE5MSAxNS40ODcgMzYuMzA5IDI1LjEyNCA1OS42NyAyNS4yMjMgMjMuMDk0LTAuMzM4IDQzLjg3Mi05LjkyOCA1OC44NTQtMjUuMjA1bDQ5LjYxMy00OC43NzRjMTUuMzYtMTUuMjM4IDI0Ljg2Ny0zNi4zNTcgMjQuODY3LTU5LjY5cy05LjUwNy00NC40NTItMjQuODY0LTU5LjY4OGwtMTkyLjUzLTE5Mi41M2g0NjIuNDAyYzQyLjYyMS0xLjMxNSA3Ni42NzMtMzYuMTczIDc2LjY3My03OC45OSAwLTEuNzg0LTAuMDU2LTMuNTU3LTAuMTczLTUuMzIxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MWI7IiBnbHlwaC1uYW1lPSJncmlkLXZpZXciIGRhdGEtdGFncz0iZ3JpZC12aWV3IiBkPSJNNDcyLjA1MyA1NDIuMzg1YzAtNDMuNjIzLTM1LjM2Mi03OC45ODUtNzguOTg1LTc4Ljk4NWgtMzE0LjA4M2MtNDMuNjIzIDAtNzguOTg1IDM1LjM2Mi03OC45ODUgNzguOTg1djI0MC42MTljMCA0My42MjMgMzUuMzYyIDc4Ljk4NSA3OC45ODUgNzguOTg1aDMxNS4wMDJjNDMuNjIzIDAgNzguOTg1LTM1LjM2MiA3OC45ODUtNzguOTg1ek00NzIuMDUzIDcwLjMzMWMwLTQzLjYyMy0zNS4zNjItNzguOTg1LTc4Ljk4NS03OC45ODVoLTMxNC4wODNjLTQzLjYyMyAwLTc4Ljk4NSAzNS4zNjItNzguOTg1IDc4Ljk4NXYyMzYuMDI2YzAgNDMuNjIzIDM1LjM2MiA3OC45ODUgNzguOTg1IDc4Ljk4NWgzMTUuMDAyYzQzLjYyMyAwIDc4Ljk4NS0zNS4zNjIgNzguOTg1LTc4Ljk4NXpNMTAyMy4wODEgNTQyLjM4NWMwLTQzLjYyMy0zNS4zNjItNzguOTg1LTc4Ljk4NS03OC45ODVoLTMxNC4wODNjLTQzLjYyMyAwLTc4Ljk4NSAzNS4zNjItNzguOTg1IDc4Ljk4NXYyNDAuNjE5YzAgNDMuNjIzIDM1LjM2MiA3OC45ODUgNzguOTg1IDc4Ljk4NWgzMTUuMDAyYzQzLjYyMyAwIDc4Ljk4NS0zNS4zNjIgNzguOTg1LTc4Ljk4NXpNMTAyMy4wODEgNzAuMzMxYzAtNDMuNjIzLTM1LjM2Mi03OC45ODUtNzguOTg1LTc4Ljk4NWgtMzE0LjA4M2MtNDMuNjIzIDAtNzguOTg1IDM1LjM2Mi03OC45ODUgNzguOTg1djIzNi4wMjZjMCA0My42MjMgMzUuMzYyIDc4Ljk4NSA3OC45ODUgNzguOTg1aDMxNS4wMDJjNDMuNjIzIDAgNzguOTg1LTM1LjM2MiA3OC45ODUtNzguOTg1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MWM7IiBnbHlwaC1uYW1lPSJsaXN0LXZpZXciIGRhdGEtdGFncz0ibGlzdC12aWV3IiBkPSJNMjkyLjU5IDY4MS4yNzdjMC4wMjAtMC41NDkgMC4wMjUtMS4yMDggMC4wMjUtMS44NTggMC0zMC42NzItMjQuMzY1LTU1LjY1LTU0Ljc5NS01Ni42NTRsLTE4Mi45MzktMC4wMDFjLTMwLjUxNSAwLjk5NC01NC44ODEgMjUuOTgyLTU0Ljg4MSA1Ni42NTUgMCAwLjY1IDAuMDE2IDEuMjk4IDAuMDM2IDEuOTU2bC0wLjAwMSAxMTcuODRjLTAuMDIwIDAuNTQ5LTAuMDI1IDEuMjA4LTAuMDI1IDEuODU4IDAgMzAuNjcyIDI0LjM2NSA1NS42NSA1NC43OTUgNTYuNjU0bDE4Mi45MzkgMC4wMDFjMzAuNTE1LTAuOTk0IDU0Ljg4MS0yNS45ODIgNTQuODgxLTU2LjY1NSAwLTAuNjUtMC4wMTYtMS4yOTgtMC4wMzYtMS45NTZ6TTI5Mi41OSAzNjcuNzAyYzAuMDIwLTAuNTQ5IDAuMDI1LTEuMjA4IDAuMDI1LTEuODU4IDAtMzAuNjcyLTI0LjM2NS01NS42NS01NC43OTUtNTYuNjU0bC0xODIuOTM5LTAuMDAxYy0zMC41MTUgMC45OTQtNTQuODgxIDI1Ljk4Mi01NC44ODEgNTYuNjU1IDAgMC42NSAwLjAxNiAxLjI5OCAwLjAzNiAxLjk1NmwtMC4wMDEgMTE3Ljg0Yy0wLjAyMCAwLjU0OS0wLjAyNSAxLjIwOC0wLjAyNSAxLjg1OCAwIDMwLjY3MiAyNC4zNjUgNTUuNjUgNTQuNzk1IDU2LjY1NGwxODIuOTM5IDAuMDAxYzMwLjUxNS0wLjk5NCA1NC44ODEtMjUuOTgyIDU0Ljg4MS01Ni42NTUgMC0wLjY1LTAuMDE2LTEuMjk4LTAuMDM2LTEuOTU2ek0yOTIuNTkgNTQuMTE5YzAuMDIwLTAuNTQ5IDAuMDI1LTEuMjA4IDAuMDI1LTEuODU4IDAtMzAuNjcyLTI0LjM2NS01NS42NS01NC43OTUtNTYuNjU0bC0xODIuOTM5LTAuMDAxYy0zMC41MTUgMC45OTQtNTQuODgxIDI1Ljk4Mi01NC44ODEgNTYuNjU1IDAgMC42NSAwLjAxNiAxLjI5OCAwLjAzNiAxLjk1NmwtMC4wMDEgMTE3Ljg0Yy0wLjAyMCAwLjU0OS0wLjAyNSAxLjIwOC0wLjAyNSAxLjg1OCAwIDMwLjY3MiAyNC4zNjUgNTUuNjUgNTQuNzk1IDU2LjY1NGwxODIuOTM5IDAuMDAxYzMwLjUxNS0wLjk5NCA1NC44ODEtMjUuOTgyIDU0Ljg4MS01Ni42NTUgMC0wLjY1LTAuMDE2LTEuMjk4LTAuMDM2LTEuOTU2ek0xMDIzLjk2NSA2ODEuMjc3YzAuMDIwLTAuNTQ5IDAuMDI1LTEuMjA4IDAuMDI1LTEuODU4IDAtMzAuNjcyLTI0LjM2NS01NS42NS01NC43OTUtNTYuNjU0bC01NDguNjIzLTAuMDAxYy0zMC41MTUgMC45OTQtNTQuODgxIDI1Ljk4Mi01NC44ODEgNTYuNjU1IDAgMC42NSAwLjAxNiAxLjI5OCAwLjAzNiAxLjk1NmwtMC4wMDEgMTE3Ljg0Yy0wLjAyMCAwLjU0OS0wLjAyNSAxLjIwOC0wLjAyNSAxLjg1OCAwIDMwLjY3MiAyNC4zNjUgNTUuNjUgNTQuNzk1IDU2LjY1NGw1NDguNjIzIDAuMDAxYzMwLjUxNS0wLjk5NCA1NC44ODEtMjUuOTgyIDU0Ljg4MS01Ni42NTUgMC0wLjY1LTAuMDE2LTEuMjk4LTAuMDM2LTEuOTU2ek0xMDIzLjk2NSAzNjcuNzAyYzAuMDIwLTAuNTQ5IDAuMDI1LTEuMjA4IDAuMDI1LTEuODU4IDAtMzAuNjcyLTI0LjM2NS01NS42NS01NC43OTUtNTYuNjU0bC01NDguNjIzLTAuMDAxYy0zMC41MTUgMC45OTQtNTQuODgxIDI1Ljk4Mi01NC44ODEgNTYuNjU1IDAgMC42NSAwLjAxNiAxLjI5OCAwLjAzNiAxLjk1NmwtMC4wMDEgMTE3Ljg0Yy0wLjAyMCAwLjU0OS0wLjAyNSAxLjIwOC0wLjAyNSAxLjg1OCAwIDMwLjY3MiAyNC4zNjUgNTUuNjUgNTQuNzk1IDU2LjY1NGw1NDguNjIzIDAuMDAxYzMwLjUxNS0wLjk5NCA1NC44ODEtMjUuOTgyIDU0Ljg4MS01Ni42NTUgMC0wLjY1LTAuMDE2LTEuMjk4LTAuMDM2LTEuOTU2ek0xMDIzLjk2NSA1NC4xMTljMC4wMjAtMC41NDkgMC4wMjUtMS4yMDggMC4wMjUtMS44NTggMC0zMC42NzItMjQuMzY1LTU1LjY1LTU0Ljc5NS01Ni42NTRsLTU0OC42MjMtMC4wMDFjLTMwLjUxNSAwLjk5NC01NC44ODEgMjUuOTgyLTU0Ljg4MSA1Ni42NTUgMCAwLjY1IDAuMDE2IDEuMjk4IDAuMDM2IDEuOTU2bC0wLjAwMSAxMTcuODRjLTAuMDIwIDAuNTQ5LTAuMDI1IDEuMjA4LTAuMDI1IDEuODU4IDAgMzAuNjcyIDI0LjM2NSA1NS42NSA1NC43OTUgNTYuNjU0bDU0OC42MjMgMC4wMDFjMzAuNTE1LTAuOTk0IDU0Ljg4MS0yNS45ODIgNTQuODgxLTU2LjY1NSAwLTAuNjUtMC4wMTYtMS4yOTgtMC4wMzYtMS45NTZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxZDsiIGdseXBoLW5hbWU9ImZpbHRlcnMiIGRhdGEtdGFncz0iZmlsdGVycyIgZD0iTTIxNy41NDMgODEzLjI1NnY5OC4yNDljMCAxNC45OTktMTIuMTYzIDI3LjE2Mi0yNy4xNjIgMjcuMTYyaC04Ljc4NWMtMTQuOTk5IDAtMjcuMTYyLTEyLjE2My0yNy4xNjItMjcuMTYydi05OC4yNDljLTYzLjc5Mi0xNC4xOS0xMTAuNzgtNzAuMy0xMTAuNzgtMTM3LjM4czQ2Ljk4OC0xMjMuMTg5IDEwOS44NDQtMTM3LjIwOGwwLjkzNi01OTIuODQxYzAtMTQuOTk5IDEyLjE2My0yNy4xNjIgMjcuMTYyLTI3LjE2Mmg3Ljk5YzE0Ljk5OSAwIDI3LjE2MiAxMi4xNjMgMjcuMTYyIDI3LjE2MnY1ODguNjY5YzY5LjU1MSA5LjE5MSAxMjIuNjY2IDY4LjEwOSAxMjIuNjY2IDEzOS40MzUgMCA3MS4wNDEtNTIuNjk5IDEyOS43NzItMTIxLjEzIDEzOS4yNDZ6TTU0OS44MiAzOTYuMzExdjUxNS4xODRjMCAxNC45OTktMTIuMTYzIDI3LjE2Mi0yNy4xNjIgMjcuMTYyaC00Ljc5NmMtMTQuOTk5IDAtMjcuMTYyLTEyLjE2My0yNy4xNjItMjcuMTYydi01MTMuNTkzYy03MS4zNTgtMTIuMTE0LTEyNS4wMjAtNzMuNDY5LTEyNS4wMjAtMTQ3LjM2NHM1My42NjItMTM1LjI2IDEyNC4xNDUtMTQ3LjI0MmwwLjg4NC0xNTkuODY5YzAtMTQuOTk5IDEyLjE2My0yNy4xNjIgMjcuMTYyLTI3LjE2Mmg0Ljc5NmMxNC45OTkgMCAyNy4xNjIgMTIuMTYzIDI3LjE2MiAyNy4xNjJ2MTU5Ljc0NWM2Ny4zMjUgMTUuNDMgMTE2LjggNzQuODI2IDExNi44IDE0NS43NzJzLTQ5LjQ2NCAxMzAuMzQyLTExNS43OTQgMTQ1LjU3OXpNOTgwLjM0NSA1NzMuNjI3Yy0wLjA3NSA2OS4yMTItNTEuMDIyIDEyNi40OTktMTE3LjQ1MyAxMzYuNDg5bC0wLjc2NCAyMDEuMzc5YzAgMTQuOTk5LTEyLjE2MyAyNy4xNjItMjcuMTYyIDI3LjE2MmgtNi4zODdjLTE0Ljk5OSAwLTI3LjE2Mi0xMi4xNjMtMjcuMTYyLTI3LjE2MnYtMjA1LjI3M2MtNTguMTctMTYuODQ5LTk5Ljk3Ny02OS42NDItOTkuOTc3LTEzMi4xOTFzNDEuODA3LTExNS4zNDIgOTktMTMxLjk1bDAuOTY3LTUwMC4yNTJjMC0xNC45OTkgMTIuMTYzLTI3LjE2MiAyNy4xNjItMjcuMTYyaDQuNzk2YzE0Ljk5OSAwIDI3LjE2MiAxMi4xNjMgMjcuMTYyIDI3LjE2MnY0OTYuMDIyYzY3LjYwOCA5LjMyOSAxMTkuMjA2IDY2LjQzNiAxMTkuODA5IDEzNS43MjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxZTsiIGdseXBoLW5hbWU9ImZlZWRiYWNrLWZvcnVtIiBkYXRhLXRhZ3M9ImZlZWRiYWNrLWZvcnVtIiBkPSJNNDcxLjU4IDIzNC4zMWMwIDEwOS4yODYgMTIzLjUwOSAxOTcuNjE0IDI3Ni4yMSAxOTcuNjE0czI3Ni4yMS04OC4zMjggMjc2LjIxLTE5Ny42MTRjLTQuNDkzLTY3Ljk4Ni00NS4yNTgtMTI1LjQ5NS0xMDIuOTU5LTE1My43MTkgOS4yMTQtMzcuMDgxIDI4Ljc3Mi02OC4yNyA1NC45MjEtOTIuNDMgNC42MjMtNS4zNiA5Ljg2My0xMC42IDguMzY3LTE4LjA4NnYwYy0xLjEwOS02Ljg0NC02Ljk3NS0xMi4wMDctMTQuMDQ5LTEyLjAwNy0wLjMyNSAwLTAuNjQ2IDAuMDExLTAuOTY1IDAuMDMyLTEzLjM1NCAxLjU5NS0yNS4yODggMy45Ni0zNi44ODIgNy4xNDItNTMuOTM5IDEzLjE4OC0xMDIuMzI0IDM4Ljk2My0xNDIuMzY1IDc0LjAzMS02LjMxOC0wLjcwOS0xNC4xNjctMC45MjMtMjIuMDY3LTAuOTIzcy0xNS43NDcgMC4yMTQtMjMuNTQyIDAuNjM1Yy0xNDkuMzctMC4wNDctMjcyLjg3OCA4Ni43ODQtMjcyLjg3OCAxOTUuMzIxek0zMzUuMzQ1IDMzMC44NzFjNTUuMzkxIDE0OS43MDcgMjI5LjA1MiAyNDcuNzY2IDQyOC4xNjIgMjQ3Ljc2NmgyOC40NDRjMC40MjEgNC45MzIgMC42NiAxMC42NzIgMC42NiAxNi40NjhzLTAuMjQgMTEuNTM3LTAuNzA5IDE3LjIxYzAuMDQ5IDE1Ni40NDktMTc3LjM1NCAyODIuOTUyLTM5Ny40MjQgMjgyLjk1MnMtMzk0LjQ3OC0xMjguNzQ5LTM5NC40NzgtMjg1LjE5MmM1LjMwNy05OC45NCA2NC4yODQtMTgyLjk1MSAxNDguMTQ0LTIyMy44NzItMTMuNTM3LTUyLjE2MS00MS4zNjctOTUuOTY4LTc4LjMzMS0xMzAuMDA3LTYuOTM1LTguNDE0LTE0LjQxOS0xNS4xNTEtMTIuMTc0LTI1LjYzdjBjMS40OTgtOS44MTEgOS44NzctMTcuMjQgMTkuOTkxLTE3LjI0IDAuMzQgMCAwLjY3OSAwLjAwOSAxLjAxNiAwLjAyNSAxOS4zMjUgMi4yOTUgMzYuNTkxIDUuNzExIDUzLjM2NSAxMC4zMTggNzYuNDUxIDE5LjU2IDE0NC45MzMgNTYuNzEgMjAxLjYwMSAxMDYuODk2IDMuMjMyLTEuMTkzLTIuMDA5IDEuMDUzIDEuNzM1IDAuMzA1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MWY7IiBnbHlwaC1uYW1lPSJpbmZvLWNpcmNsZTEiIGRhdGEtdGFncz0iaW5mby1jaXJjbGUiIGQ9Ik05NTUuMzEgNjg0LjA1N2M0My4xODYtNzMuNzE3IDY4LjY5LTE2Mi4zMzQgNjguNjktMjU2LjkwN3MtMjUuNTAyLTE4My4xODktNzAuMDA1LTI1OS4zNDdjLTQ0LjE3LTc1LjQyLTEwNy4yMjgtMTM4LjQ3OC0xODIuNjg0LTE4Mi42NjQtNzYuMTIxLTQ0LjQ4Ny0xNjQuNzM4LTY5Ljk4OS0yNTkuMzExLTY5Ljk4OXMtMTgzLjE4OSAyNS41MDItMjU5LjM0NyA3MC4wMDVjLTc1LjQyIDQ0LjE3LTEzOC40NzggMTA3LjIyOC0xODIuNjY0IDE4Mi42ODQtNDQuNDg3IDc2LjEyMS02OS45ODkgMTY0LjczOC02OS45ODkgMjU5LjMxMXMyNS41MDIgMTgzLjE4OSA3MC4wMDUgMjU5LjM0N2M0NC4yODMgNzUuMDM1IDEwNy4zMjMgMTM3Ljc2NSAxODIuNjY2IDE4MS42OTUgNzYuMTQgNDQuNDg5IDE2NC43NTQgNjkuOTkyIDI1OS4zMjYgNjkuOTkyczE4My4xODktMjUuNTAyIDI1OS4zNDctNzAuMDA1Yzc1LjMyNS00My45MTkgMTM4LjM2NS0xMDYuNjQ3IDE4Mi42NjgtMTgxLjc0N3pNNjgyLjk1IDEwNC41Njd2MTA2LjIzOWMwLjAxNiAwLjI5NyAwLjAyNSAwLjY0MyAwLjAyNSAwLjk4OSAwIDExLjItOS4wODIgMjAuMjgyLTIwLjI4MiAyMC4yODItMC4zNDkgMC0wLjY5NS0wLjAwOS0xLjAzOS0wLjAyN2wtNjUuNjI3IDAuMDAydjM0Ny42OTRjMC4wMTYgMC4yOTcgMC4wMjUgMC42NDMgMC4wMjUgMC45ODkgMCAxMS4yLTkuMDgyIDIwLjI4Mi0yMC4yODIgMjAuMjgyLTAuMzQ5IDAtMC42OTUtMC4wMDktMS4wMzktMC4wMjdsLTIxMS40NjYgMC4wMDJjLTAuMjk3IDAuMDE2LTAuNjQzIDAuMDI1LTAuOTg5IDAuMDI1LTExLjIgMC0yMC4yODItOS4wODItMjAuMjgyLTIwLjI4MiAwLTAuMzQ5IDAuMDA5LTAuNjk1IDAuMDI3LTEuMDM5bC0wLjAwMi0xMDYuMTkyYy0wLjAxNi0wLjI5Ny0wLjAyNS0wLjY0My0wLjAyNS0wLjk4OSAwLTExLjIgOS4wODItMjAuMjgyIDIwLjI4Mi0yMC4yODIgMC4zNDkgMCAwLjY5NSAwLjAwOSAxLjAzOSAwLjAyN2w2My42OTYtMC4wMDJ2LTIxMy40NDVoLTYzLjc0NGMtMC4yOTcgMC4wMTYtMC42NDMgMC4wMjUtMC45ODkgMC4wMjUtMTEuMiAwLTIwLjI4Mi05LjA4Mi0yMC4yODItMjAuMjgyIDAtMC4zNDkgMC4wMDktMC42OTUgMC4wMjctMS4wMzlsLTAuMDAyLTEwNi4xOTJjLTAuMDE2LTAuMjk3LTAuMDI1LTAuNjQzLTAuMDI1LTAuOTg5IDAtMTEuMiA5LjA4Mi0yMC4yODIgMjAuMjgyLTIwLjI4MiAwLjM0OSAwIDAuNjk1IDAuMDA5IDEuMDM5IDAuMDI3bDI5OC4zOS0wLjAwMmMwLjI5Ny0wLjAxNiAwLjY0My0wLjAyNSAwLjk4OS0wLjAyNSAxMS4yIDAgMjAuMjgyIDkuMDgyIDIwLjI4MiAyMC4yODIgMCAwLjM0OS0wLjAwOSAwLjY5NS0wLjAyNyAxLjAzOXpNNTk2LjAyNiA3MDQuMzM5djEwNi4yMzljMC4wMTYgMC4yOTcgMC4wMjUgMC42NDMgMC4wMjUgMC45ODkgMCAxMS4yLTkuMDgyIDIwLjI4Mi0yMC4yODIgMjAuMjgyLTAuMzQ5IDAtMC42OTUtMC4wMDktMS4wMzktMC4wMjdsLTEyNi40NzQgMC4wMDJjLTAuMjk3IDAuMDE2LTAuNjQzIDAuMDI1LTAuOTg5IDAuMDI1LTExLjIgMC0yMC4yODItOS4wODItMjAuMjgyLTIwLjI4MiAwLTAuMzQ5IDAuMDA5LTAuNjk1IDAuMDI3LTEuMDM5bC0wLjAwMi0xMDYuMTkyYy0wLjAxNi0wLjI5Ny0wLjAyNS0wLjY0My0wLjAyNS0wLjk4OSAwLTExLjIgOS4wODItMjAuMjgyIDIwLjI4Mi0yMC4yODIgMC4zNDkgMCAwLjY5NSAwLjAwOSAxLjAzOSAwLjAyN2wxMjcuNDQtMC4wMDJjMC4wMDcgMCAwLjAxNiAwIDAuMDIzIDAgMTEuMiAwIDIwLjI4MiA5LjA4MiAyMC4yODIgMjAuMjgyIDAgMC4zNC0wLjAwOSAwLjY3Ny0wLjAyNSAxLjAxNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTIwOyIgZ2x5cGgtbmFtZT0icmFkaW8iIGRhdGEtdGFncz0icmFkaW8iIGQ9Ik01MTItODUuMzMzYy0yODIuNzcgMC01MTIgMjI5LjIzLTUxMiA1MTJzMjI5LjIzIDUxMiA1MTIgNTEyYzI4Mi43NyAwIDUxMi0yMjkuMjMgNTEyLTUxMnMtMjI5LjIzLTUxMi01MTItNTEyek01MTIgODQ4LjgyOGMtMjMzLjE1MSAwLTQyMi4xNTgtMTg5LjAwNy00MjIuMTU4LTQyMi4xNThzMTg5LjAwNy00MjIuMTU4IDQyMi4xNTgtNDIyLjE1OGMyMzMuMTUxIDAgNDIyLjE1OCAxODkuMDA3IDQyMi4xNTggNDIyLjE1OHMtMTg5LjAwNyA0MjIuMTU4LTQyMi4xNTggNDIyLjE1OHpNNzIzLjU2MiA0MjYuNjY5YzAtMTE2Ljg0Mi05NC43MjEtMjExLjU2My0yMTEuNTYzLTIxMS41NjNzLTIxMS41NjMgOTQuNzIxLTIxMS41NjMgMjExLjU2M2MwIDExNi44NDIgOTQuNzIxIDIxMS41NjMgMjExLjU2MyAyMTEuNTYzczIxMS41NjMtOTQuNzIxIDIxMS41NjMtMjExLjU2M3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTIxOyIgZ2x5cGgtbmFtZT0iY2hlY2siIGRhdGEtdGFncz0iY2hlY2siIGQ9Ik05MDMuMzEyLTEwNi42NjVoLTc4Mi42MjNjLTc3LjMyMyAwLTE0MC4wMDYgNjIuNjgxLTE0MC4wMDYgMTQwLjAwNnY3ODYuNjUzYzAgNzcuMzIzIDYyLjY4MSAxNDAuMDA2IDE0MC4wMDYgMTQwLjAwNmg3ODIuNjIzYzc3LjMyMyAwIDE0MC4wMDYtNjIuNjgxIDE0MC4wMDYtMTQwLjAwNnYtNzg2LjY1M2MwLTc3LjMyMy02Mi42ODEtMTQwLjAwNi0xNDAuMDA2LTE0MC4wMDZ6TTEyMC42ODggODY2LjMyNmMtMjUuNTkxIDAtNDYuMzMzLTIwLjc0NC00Ni4zMzMtNDYuMzMzdi03ODYuNjUzYzAtMjUuNTkxIDIwLjc0NC00Ni4zMzMgNDYuMzMzLTQ2LjMzM2g3ODIuNjIzYzI1LjU5MSAwIDQ2LjMzMyAyMC43NDQgNDYuMzMzIDQ2LjMzM3Y3ODYuNjUzYzAgMjUuNTkxLTIwLjc0NCA0Ni4zMzMtNDYuMzMzIDQ2LjMzM3pNODY1LjAzNSA1NjUuMTYzYzAuMDAyLTAuMTMgMC4wMDItMC4yODMgMC4wMDItMC40MzQgMC0xMS4yNjgtNC42MjctMjEuNDU2LTEyLjA4Mi0yOC43NjhsLTM3NS43MDUtMzc1LjcwNWMtNy42MzQtNy41MzgtMTguMTMtMTIuMTkzLTI5LjcxNS0xMi4xOTNzLTIyLjA3NyA0LjY1NS0yOS43MTkgMTIuMTk2bC01OS40MjIgNTkuNDIyLTE2MC4xNTEgMTU4LjEzOGMtNy41MzggNy42MzQtMTIuMTkzIDE4LjEzLTEyLjE5MyAyOS43MTVzNC42NTUgMjIuMDc3IDEyLjE5NiAyOS43MTlsNTkuNDIyIDU5LjQyMmM3LjYzNCA3LjUzOCAxOC4xMyAxMi4xOTMgMjkuNzE1IDEyLjE5M3MyMi4wNzctNC42NTUgMjkuNzE5LTEyLjE5NmwxMjcuOTE2LTEyOC45MjEgMjg2LjA1NCAyODcuMDYzYzcuNjM0IDcuNTM4IDE4LjEzIDEyLjE5MyAyOS43MTUgMTIuMTkzczIyLjA3Ny00LjY1NSAyOS43MTktMTIuMTk2bDU5LjQyMi01OS40MjJjOC45MzgtNy4xOTEgMTQuNzE3LTE3Ljk5MSAxNS4xMDYtMzAuMTUzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MjI7IiBnbHlwaC1uYW1lPSJyYWRpby1lbXB0eSIgZGF0YS10YWdzPSJyYWRpby1lbXB0eSIgZD0iTTUxMi04NS4zMzNjLTI4Mi43NyAwLTUxMiAyMjkuMjMtNTEyIDUxMnMyMjkuMjMgNTEyIDUxMiA1MTJjMjgyLjc3IDAgNTEyLTIyOS4yMyA1MTItNTEycy0yMjkuMjMtNTEyLTUxMi01MTJ6TTUxMiA4NDguODI4Yy0yMzMuMTUyIDAtNDIyLjE1OS0xODkuMDA3LTQyMi4xNTktNDIyLjE1OXMxODkuMDA3LTQyMi4xNTkgNDIyLjE1OS00MjIuMTU5YzIzMy4xNTIgMCA0MjIuMTU5IDE4OS4wMDcgNDIyLjE1OSA0MjIuMTU5cy0xODkuMDA3IDQyMi4xNTktNDIyLjE1OSA0MjIuMTU5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MjM7IiBnbHlwaC1uYW1lPSJjaGVjay1lbXB0eSIgZGF0YS10YWdzPSJjaGVjay1lbXB0eSIgZD0iTTg4Ny42NTktODUuMzMzaC03NTEuMzE4Yy03NC4yMyAwLTEzNC40MDYgNjAuMTc0LTEzNC40MDYgMTM0LjQwNnY3NTUuMTg3YzAgNzQuMjMgNjAuMTc0IDEzNC40MDYgMTM0LjQwNiAxMzQuNDA2aDc1MS4zMThjNzQuMjMgMCAxMzQuNDA2LTYwLjE3NCAxMzQuNDA2LTEzNC40MDZ2LTc1NS4xODdjMC03NC4yMy02MC4xNzQtMTM0LjQwNi0xMzQuNDA2LTEzNC40MDZ6TTEzNi4zNCA4NDguNzM4Yy0yNC41NjcgMC00NC40OC0xOS45MTQtNDQuNDgtNDQuNDh2LTc1NS4xODdjMC0yNC41NjcgMTkuOTE0LTQ0LjQ4IDQ0LjQ4LTQ0LjQ4aDc1MS4zMThjMjQuNTY3IDAgNDQuNDggMTkuOTE0IDQ0LjQ4IDQ0LjQ4djc1NS4xODdjMCAyNC41NjctMTkuOTE0IDQ0LjQ4LTQ0LjQ4IDQ0LjQ4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MjQ7IiBnbHlwaC1uYW1lPSJhcnJvdy1saW5lIiBkYXRhLXRhZ3M9ImFycm93LWxpbmUiIGQ9Ik05OTUuODc4IDY3OS40MDZsLTQzLjcwMyA0My43MDNjLTE3LjU5MSAxNi41MDYtNDEuMzI2IDI2LjY0NS02Ny40MzIgMjYuNjQ1cy00OS44MzctMTAuMTM5LTY3LjQ4My0yNi42OTNsLTMwMy4zODctMzAzLjM4OS0zMDUuOTM1IDMwNC42OTJjLTE3LjQ2OCAxNi43ODEtNDEuMjQ0IDI3LjExNi02Ny40MzIgMjcuMTE2cy00OS45NTgtMTAuMzM1LTY3LjQ2NC0yNy4xNDhsLTQ0LjkyLTQ0LjkyYy0xNy4zNzEtMTcuMjA2LTI4LjEyMi00MS4wNjItMjguMTIyLTY3LjQzMnMxMC43NTItNTAuMjI2IDI4LjExMi02Ny40MjFsNDE0LjU4My00MTQuNTgzYzE3LjIwNi0xNy4zNzEgNDEuMDYyLTI4LjEyMiA2Ny40MzItMjguMTIyczUwLjIyNiAxMC43NTIgNjcuNDIxIDI4LjExMmw0MTguMzI5IDQxNC41ODNjMTcuMzcxIDE3LjIwNiAyOC4xMjIgNDEuMDYyIDI4LjEyMiA2Ny40MzJzLTEwLjc1MiA1MC4yMjYtMjguMTEyIDY3LjQyMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTI1OyIgZ2x5cGgtbmFtZT0iYWNjb3JkaW9uLWFycm93IiBkYXRhLXRhZ3M9ImFjY29yZGlvbi1hcnJvdyIgZD0iTTc4MC45OTYgMzgxLjgzM2wtNDQ4LjMzNi00NDguMzM2Yy0xMS40NTYtMTEuNTQ2LTI3LjI5NS0xOC43MjUtNDQuODE0LTE4LjgzLTM0Ljk3OSAwLjQ5OC02My4xODYgMjguNzA1LTYzLjY4MiA2My42MTd2ODk2LjcyYzAuNDk4IDM0Ljk1OCAyOC43MDUgNjMuMTY3IDYzLjYxNyA2My42NjMgMTcuNTg2LTAuMTAzIDMzLjQyNi03LjI4NCA0NC44NzctMTguODI2bDQ0OC4zNC00NDguMzRjMTEuNjMtMTEuNDAxIDE4LjgzOS0yNy4yNzYgMTguODM5LTQ0LjgzM3MtNy4yMDgtMzMuNDMyLTE4LjgyOC00NC44MjV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkyNjsiIGdseXBoLW5hbWU9InNlYXJjaDEiIGRhdGEtdGFncz0ic2VhcmNoIiBkPSJNOTQ0LjA2Ny04NS4zMzNjLTAuMDU1IDAtMC4xMjQgMC0wLjE5MSAwLTIxLjQ0NiAwLTQwLjg0MyA4Ljc2Ni01NC44MDUgMjIuOTExbC0yMTAuODU4IDIxMy42MDdjLTY4LjQxOC00Ny42MjEtMTUzLjI3Mi03Ni4wODQtMjQ0Ljc3NS03Ni4wODQtMjM4LjQ2NiAwLTQzMS43ODMgMTkzLjMxNi00MzEuNzgzIDQzMS43ODNzMTkzLjMxNiA0MzEuNzgzIDQzMS43ODMgNDMxLjc4M2MyMzguNDY2IDAgNDMxLjc4My0xOTMuMzE2IDQzMS43ODMtNDMxLjc4MyAwLTkxLjUwMy0yOC40NjMtMTc2LjM1NS03Ny4wMTctMjQ2LjE5MWwyMTEuNzgxLTIwOS40MzJjMTMuODMtMTQuMTg5IDIyLjM2MS0zMy42MDIgMjIuMzYxLTU1LjAwNiAwLTQzLjM0Ni0zNC45NzgtNzguNTIxLTc4LjI0OS03OC44Mzd6TTQzMi41MjYgNzgwLjA2NWMtMTUxLjg4OSAwLTI3NS4wMjAtMTIzLjEzMy0yNzUuMDIwLTI3NS4wMjBzMTIzLjEzMy0yNzUuMDIwIDI3NS4wMjAtMjc1LjAyMGMxNTEuODg5IDAgMjc1LjAyMCAxMjMuMTMzIDI3NS4wMjAgMjc1LjAyMHMtMTIzLjEzMyAyNzUuMDIwLTI3NS4wMjAgMjc1LjAyMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTI3OyIgZ2x5cGgtbmFtZT0ic2Nyb2xsYmFyLWJhcnMtaWNvbiIgZGF0YS10YWdzPSJzY3JvbGxiYXItYmFycy1pY29uIiBkPSJNODY1LjMwOSA3ODUuMzY0YzAtMjguNzQ1LTExLjk3Ny01MS41LTI4Ljc0NS01MS41aC02NDkuMTI3Yy0xNi43NjcgMC0yOC43NDUgMjIuNzU2LTI4Ljc0NSA1MS41djEwMS44MDJjMCAyOC43NDUgMTEuOTc3IDUxLjUgMjguNzQ1IDUxLjVoNjQ0LjM0YzE2Ljc2NyAwIDI4Ljc0NS0yMi43NTYgMjguNzQ1LTUxLjV6TTg2NS4zMDkgMzc2Ljk2NGMwLTI4Ljc0NS0xMS45NzctNTEuNS0yOC43NDUtNTEuNWgtNjQ5LjEyN2MtMTYuNzY3IDAtMjguNzQ1IDIyLjc1Ni0yOC43NDUgNTEuNXYxMDEuODAyYzAgMjguNzQ1IDExLjk3NyA1MS41IDI4Ljc0NSA1MS41aDY0NC4zNGMxNi43NjcgMCAyOC43NDUtMjIuNzU2IDI4Ljc0NS01MS41ek04NjUuMzA5LTMzLjgzM2MwLTI4Ljc0NS0xMS45NzctNTEuNS0yOC43NDUtNTEuNWgtNjQ5LjEyN2MtMTYuNzY3IDAtMjguNzQ1IDIyLjc1Ni0yOC43NDUgNTEuNXYxMDEuODAyYzAgMjguNzQ1IDExLjk3NyA1MS41IDI4Ljc0NSA1MS41aDY0NC4zNGMxNi43NjcgMCAyOC43NDUtMjIuNzU2IDI4Ljc0NS01MS41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5Mjg7IiBnbHlwaC1uYW1lPSJsb2FkaW5nLXNlYXJjaCIgZGF0YS10YWdzPSJsb2FkaW5nLXNlYXJjaCIgZD0iTTUxNC41ODYtNjYuNjU4Yy0yNzMuNzgxIDAtNDk1LjkxMSAyMjIuMTI5LTQ5NS45MTEgNDk1LjkxMSAwIDI0OS4xMDEgMTgzLjY3IDQ1NS4xNjMgNDIyLjQ3NyA0OTAuNzcxdi0xMzAuODljLTE2Ny42MzQtMzMuODYtMjkzLjkwNS0xODIuNTI0LTI5My45MDUtMzU5Ljg3OCAwLTIwMi42MDkgMTY0LjY4Mi0zNjcuMzM5IDM2Ny4zMzktMzY3LjMzOXMzNjcuMzg5IDE2NC43MzIgMzY3LjM4OSAzNjcuMzM5YzAgMTc3LjM1My0xMjYuMjcxIDMyNi4wMTgtMjkzLjg3NyAzNTkuODc4djEzMC44OWMyMzguNzI4LTM1LjYwOCA0MjIuNDA3LTI0MS42NyA0MjIuNDA3LTQ5MC43NzEgMC0yNzMuNzgxLTIyMi4xNC00OTUuOTExLTQ5NS45MjEtNDk1LjkxMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTI5OyIgZ2x5cGgtbmFtZT0iaW50ZXJhY3RpdmUtdmlkZW8iIGRhdGEtdGFncz0iaW50ZXJhY3RpdmUtdmlkZW8iIGQ9Ik03MzAuOTU5IDQzOS4zOTlsLTMzMy4wNzUgMjAyLjQ5NWMtMjkuOTAxIDE2LjY1NC02Ny41NjEtNC43MzEtNjcuNTYxLTM5Ljc0M3YtMzkzLjYzNWMwLTM0LjgyMSAzNy40NzEtNTYuMzk3IDY3LjU2MS0zOS43NDNsMzMzLjA3NSAxOTEuMTRjMzEuMDM2IDE3LjIyMSAzMS4wMzYgNjIuMDczIDAgNzkuNDg0ek05ODEuMzM0IDQwNS4zMzRjMCAyNTkuMjY5LTIxMC4wNjUgNDY5LjMzNC00NjkuMzM0IDQ2OS4zMzRzLTQ2OS4zMzQtMjEwLjA2NS00NjkuMzM0LTQ2OS4zMzQgMjEwLjA2NS00NjkuMzM0IDQ2OS4zMzQtNDY5LjMzNCA0NjkuMzM0IDIxMC4wNjUgNDY5LjMzNCA0NjkuMzM0ek0xMzMuNTA1IDQwNS4zMzRjMCAyMDkuMTE5IDE2OS4zNzYgMzc4LjQ5NSAzNzguNDk1IDM3OC40OTVzMzc4LjQ5NS0xNjkuMzc2IDM3OC40OTUtMzc4LjQ5NS0xNjkuMzc2LTM3OC40OTUtMzc4LjQ5NS0zNzguNDk1LTM3OC40OTUgMTY5LjM3Ni0zNzguNDk1IDM3OC40OTV6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkyYTsiIGdseXBoLW5hbWU9ImF1ZGlvIiBkYXRhLXRhZ3M9ImF1ZGlvIiBkPSJNMzk1LjI0OCA3MDEuMjY2bC0xNDIuMzUzLTE0Mi4zMjFoLTE2My4yOTZjLTIxLjIxNSAwLTM4LjQwMS0xNy4xODMtMzguNDAxLTM4LjQwMXYtMjMwLjQwMmMwLTIxLjIgMTcuMTgzLTM4LjQwMSAzOC40MDEtMzguNDAxaDE2My4yOTZsMTQyLjM1My0xNDIuMzIxYzI0LjA0OC0yNC4wNDggNjUuNTUyLTcuMTUzIDY1LjU1MiAyNy4xNTN2NTM3LjUzOGMwIDM0LjMzNy00MS41MzcgNTEuMTY4LTY1LjU1MiAyNy4xNTN6TTc2OC41NjEgNzgyLjk5NGMtMTcuODcyIDExLjcyOC00MS44ODggNi43ODQtNTMuNjE2LTExLjEyLTExLjc0NS0xNy44NzItNi43NTItNDEuODg4IDExLjEyLTUzLjYxNiAxMDYuMDMzLTY5LjU4NCAxNjkuMzEyLTE4Ni41NjEgMTY5LjMxMi0zMTIuOTNzLTYzLjI4MS0yNDMuMzQ2LTE2OS4zMTItMzEyLjkzYy0xNy44NzItMTEuNzExLTIyLjg2NC0zNS43NDQtMTEuMTItNTMuNiAxMS4yNjQtMTcuMTM2IDM1LjA4OS0yMy4yOTYgNTMuNjE2LTExLjEyIDEyNy44NzIgODMuOTM2IDIwNC4yNDEgMjI1LjEzNyAyMDQuMjQxIDM3Ny42NjdzLTc2LjM2OSAyOTMuNzEzLTIwNC4yNDEgMzc3LjY1MXpNODE5LjIwMSA0MDUuMzQ0YzAgMTAxLjY0OC01MS4yOTYgMTk1LjEwNC0xMzcuMjMyIDI0OS45ODYtMTcuOTAzIDExLjQyMy00MS42NDggNi4xMTEtNTIuOTkyLTExLjkzNnMtNi4wNDgtNDEuOTM2IDExLjg1NS01My4zNzdjNjMuNjAxLTQwLjYyNCAxMDEuNTY5LTEwOS42NDkgMTAxLjU2OS0xODQuNjczcy0zNy45NjktMTQ0LjA0OS0xMDEuNTY5LTE4NC42NzNjLTE3LjkwMy0xMS40MjMtMjMuMi0zNS4zMTItMTEuODU1LTUzLjM3NyAxMC40MTUtMTYuNTc2IDMzLjc5My0yNC4yMjQgNTIuOTkyLTExLjkzNiA4NS45MzYgNTQuODggMTM3LjIzMiAxNDguMzIgMTM3LjIzMiAyNDkuOTg2ek01OTIuMzY4IDUyOC4zMzdjLTE4LjUyOSAxMC4xMjctNDEuOTA0IDMuNDU2LTUyLjE3Ni0xNS4xMi0xMC4yMjQtMTguNTc2LTMuNDU2LTQxLjkyIDE1LjEyLTUyLjE3NiAyMC42NTYtMTEuMzQ0IDMzLjQ4OS0zMi43MDQgMzMuNDg5LTU1LjY5NiAwLTIzLjAwOC0xMi44MzItNDQuMzUyLTMzLjQ3My01NS42OTYtMTguNTc2LTEwLjI1Ni0yNS4zNDQtMzMuNTk5LTE1LjEyLTUyLjE3NiAxMC4yODgtMTguNjU3IDMzLjY4LTI1LjI4MSA1Mi4xNzYtMTUuMTIgNDUuMTY5IDI0Ljg4IDczLjIzMyA3MiA3My4yMzMgMTIzLjAwOXMtMjguMDY0IDk4LjExMy03My4yNDkgMTIyLjk3NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTJiOyIgZ2x5cGgtbmFtZT0idHJ1ZS1mYWxzZSIgZGF0YS10YWdzPSJ0cnVlLWZhbHNlIiBkPSJNNDMyLjA1NSA2OTguNDY0bC0yMjAuNzk3LTIyOC40MTJjLTcuNjE1LTcuNjE1LTIyLjg0Mi03LjYxNS0zOC4wNjYgMGwtMzAuNDUzIDMwLjQ1My04My43NDkgOTguOTc3Yy03LjYxNSA3LjYxNS03LjYxNSAyMi44NDIgMCAzOC4wNjZsMzAuNDUzIDMwLjQ1M2M3LjYxNSA3LjYxNSAyMi44NDIgNy42MTUgMzguMDY2IDBsNzYuMTM4LTc2LjEzOCAxNjcuNTAyIDE3NS4xMTZjMTUuMjI5IDcuNjE1IDMwLjQ1MyA3LjYxNSAzOC4wNjYgMGwzMC40NTMtMzAuNDUzYzcuNjE1LTcuNjE1IDcuNjE1LTE1LjIyOSA3LjYxNS0yMi44NDIgMCAwLTcuNjE1LTcuNjE1LTE1LjIyOS0xNS4yMjl2MHpNOTY1LjAxMSA3NC4xNDFsLTMwLjQ1My0zMC40NTNjLTcuNjE1LTcuNjE1LTIyLjg0Mi03LjYxNS0zMC40NTMgMCAwIDAgMCAwIDAgMGwtNjguNTI1IDY4LjUyNS02OC41MjUtNjguNTI1Yy03LjYxNS03LjYxNS0yMi44NDItNy42MTUtMzAuNDUzIDAgMCAwIDAgMCAwIDBsLTMwLjQ1MyAzMC40NTNjLTcuNjE1IDcuNjE1LTcuNjE1IDIyLjg0MiAwIDMwLjQ1M2w2OC41MjUgNjguNTI1LTY4LjUyNSA2OC41MjVjLTcuNjE1IDcuNjE1LTcuNjE1IDIyLjg0MiAwIDMwLjQ1M2wzMC40NTMgMzAuNDUzYzcuNjE1IDcuNjE1IDIyLjg0MiA3LjYxNSAzMC40NTMgMCAwIDAgMCAwIDAgMGw2OC41MjUtNjguNTI1IDY4LjUyNSA2OC41MjVjNy42MTUgNy42MTUgMjIuODQyIDcuNjE1IDMwLjQ1MyAwIDAgMCAwIDAgMCAwbDMwLjQ1My0zMC40NTNjNy42MTUtNy42MTUgNy42MTUtMjIuODQyIDAtMzAuNDUzbC02OC41MjUtNjguNTI1IDY4LjUyNS02OC41MjVjNy42MTUgMCA3LjYxNS0xNS4yMjkgMC0zMC40NTN2MHpNNzgyLjI4NSA3MzYuNTMybC01NzEuMDI5LTU5My44NjhjLTE1LjIyOS0xNS4yMjktMTUuMjI5LTM4LjA2NiAwLTUzLjI5NnYwYzE1LjIyOS0xNS4yMjkgMzguMDY2LTE1LjIyOSA1My4yOTYgMGw1NzEuMDI5IDU5My44NjhjMTUuMjI5IDE1LjIyOSAxNS4yMjkgMzguMDY2IDAgNTMuMjk2djBjLTE1LjIyOSAxNS4yMjktMzguMDY2IDE1LjIyOS01My4yOTYgMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTJjOyIgZ2x5cGgtbmFtZT0iZGlhbG9nLWNhcmRzIiBkYXRhLXRhZ3M9ImRpYWxvZy1jYXJkcyIgZD0iTTg4My4zNTUgNzI4LjQ0M2wtMzkzLjQ1OSAxNDIuOTc3Yy0yNy43MDcgMTAuMDQ2LTU4LjI3Mi00LjQ0My02OC4zMi0zMi4xNTJsLTE5LjM3OS01My41MzhoMTgyLjU4N2M0OC45MzkgMCA4OS40MTktMzkuMzM5IDg5LjQxOS04OC4yNzh2LTcwMi4yMTJjMCAwLjU4MSAwLjI5IDEuMjk1IDAuNDI1IDEuODc0bDI0MC43MjQgNjYzLjAyOWMxMC4wNDYgMjcuNzA3LTQuMzA4IDU4LjI3Mi0zMi4wMTYgNjguMzJ6TTYzMS4xMzUgNjk1LjE1M2MwIDI5LjQyNS0yMy44MjIgNTMuMjUtNTMuMjUgNTMuMjVoLTQxOC44NjdjLTI5LjQyNSAwLTUzLjI1LTIzLjgyMi01My4yNS01My4yNXYtNzA1Ljk2MWMwLTI5LjQyNSAyMy44MjItNTMuMjUgNTMuMjUtNTMuMjVoNDE4Ljg2N2MyOS40MjUgMCA1My4yNSAyMy44MjIgNTMuMjUgNTMuMjV2NzA1Ljk2MXpNMjU4LjA2MCAyNjguODNjLTQuNTk5LTEuMTM5LTkuNDY4LTIuNzI0LTE0LjY0NS0yLjcyNC0wLjEzNSAwLTAuMjkgMC0wLjU4MSAwLTIuNTg4IDAtNC44ODkgMi4wMTAtNS40NDggNC44ODktMC43MTUgMy4xNSAxLjU4NCA1LjMxMyAzLjQ0IDcuNDU4IDYuNjA4IDcuNDU4IDE0LjA2NiAxNC4wNjYgMTkuOTYgMjguMTMxLTI3LjU1MyAxNS45MzktNDUuMjEyIDQwLjYzMi00NS4yMTIgNjguMTg1IDAgNDguMDkxIDUzLjUzOCA4Ni45ODQgMTE5LjU4IDg2Ljk4NHMxMTkuNTgtMzguODkzIDExOS41OC04Ni45ODRjMC00OC4wOTEtNTMuNTM4LTg2Ljk4NC0xMTkuNTgtODYuOTg0LTEwLjMzNyAwLTIwLjM4MyAxLjAwNC0yOS44NTEgMi43MjQtMTQuMDY2LTEwLjA0Ni0zMC4xNDEtMTcuMjM2LTQ3LjIyMi0yMS42Nzl6TTQ5NC43NjQgMjM0LjkzOWMxLjg3NC0yLjE0NSA0LjAxOC00LjMwOCAzLjQ0LTcuNDU4LTAuNzE1LTMuMDE0LTMuMTUtNS4zMTMtNS44OTItNC44ODktNS4xNTkgMC43MTUtMTAuMDQ2IDEuNTg0LTE0LjY0NSAyLjcyNC0xNy4yMzYgNC40NDMtMzMuMTU1IDExLjc2Ni00Ny4yMjIgMjEuODEzLTkuNDY4LTEuNzItMTkuNTE0LTIuNzI0LTI5Ljg1MS0yLjcyNC0zMC43MjIgMC01OC45ODggOC40NjItODAuMjQyIDIyLjM5MyA0Ljg4OS0wLjI5IDEwLjA0Ni0wLjcxNSAxNC45MzYtMC43MTUgMzYuNTk1IDAgNzEuMDY0IDEwLjQ3MiA5Ny4zMiAyOS41NiAyOC40MjEgMjAuNjc0IDQ0LjA3MyA0OC44MDYgNDQuMDczIDc5LjIzNiAwIDguOTA3LTEuMjk1IDE3LjUwNS0zLjg4MyAyNS44MzMgMjguNzEyLTE1Ljc4NSA0Ny4zNzctNDAuOTAzIDQ3LjM3Ny02OS4zMjUgMC0yNy43MDctMTcuNjU5LTUyLjEwOS00NS4yMTItNjguMTg1IDUuNzM4LTE0LjIyMiAxMy4yMTYtMjAuODA5IDE5LjgwNC0yOC4yODZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkyZDsiIGdseXBoLW5hbWU9InF1ZXN0aW9ubmFpcmUiIGRhdGEtdGFncz0icXVlc3Rpb25uYWlyZSIgZD0iTTk2My4wODEgNzM1LjAzN2wtNTIuMDY2IDUyLjA4MGMtNi44OTcgNi44OTMtMTYuNDc1IDEwLjcyLTI2LjA0MiAxMC43Mi05LjU3MiAwLTE5LjE1NC0zLjgyNC0yNi4wMjktMTAuNzJsLTI1MS4xODctMjUxLjU3LTExMi41NzMgMTEyLjk1M2MtNi44OTMgNi44OTMtMTYuNDY0IDEwLjcyMS0yNi4wMzUgMTAuNzIxcy0xOS4xNDgtMy44MzYtMjYuMDM1LTEwLjcyMWwtNTIuMDc3LTUyLjA3MmMtNi44OTMtNi44OTMtMTAuNzItMTYuNDY0LTEwLjcyLTI2LjAzNXMzLjgzLTE5LjE1NCAxMC43Mi0yNi4wMzVsMTkwLjY4NC0xOTAuNjg0YzYuODg5LTYuODk3IDE2LjQ2MS0xMC43MiAyNi4wMzUtMTAuNzJzMTkuMTU0IDMuODE0IDI2LjAzNSAxMC43MmwzMjkuMjg4IDMyOS4yOTJjNi44OTMgNi44OTMgMTAuNzIgMTYuNDYxIDEwLjcyIDI2LjAyOSAwIDkuNTc2LTMuODE4IDE5LjE0OC0xMC43MiAyNi4wMzV6TTYwMC4yNTUgMjQ2Ljg3NnYtMTIzLjg3M2gtNDM5Ljg3OHY0MzkuODg5aDExMy41NzRjLTQuMDk3IDE0LjkzMy02LjQwNSAzMC4zODUtNi40MDUgNDUuOTk3IDAgMjIuMDYxIDQuMzkxIDQzLjg2IDEyLjQzOCA2NC4xOTNoLTIyOS43ODZ2LTY2MC4yNTFoNjYwLjI0MnYyNDkuNDExYy0yNC4wMTgtMTEuOTI5LTUwLjY1Mi0xOC41MjEtNzcuNzI2LTE4LjUyMS0xMC45MzIgMC0yMS43ODkgMS4xMzEtMzIuNDU2IDMuMTY1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MmU7IiBnbHlwaC1uYW1lPSJjb3Vyc2UtcHJlc2VudGF0aW9uIiBkYXRhLXRhZ3M9ImNvdXJzZS1wcmVzZW50YXRpb24iIGQ9Ik04ODkuNTA2IDc3NC42OTFoLTc1NS4wMTBjLTQzLjQ1MyAwLTgxLjQ3Ni0zOC4wMjMtODEuNDc2LTgxLjQ3NnYtNTA1LjE1MWMwLTQzLjQ1MyAzOC4wMjMtODEuNDc2IDgxLjQ3Ni04MS40NzZoMjExLjgzN3YtNzAuNjEzaDMzMS4zMzZ2NzAuNjEzaDIxMS44MzdjNDMuNDUzIDAgODEuNDc2IDM4LjAyMyA4MS40NzYgODEuNDc2djUwNS4xNTFjMCA0My40NTMtMzIuNTkxIDgxLjQ3Ni04MS40NzYgODEuNDc2ek04ODkuNTA2IDE4OC4wNjVoLTc1NS4wMTB2NDk5LjcxOGg3NTUuMDEwdi00OTkuNzE4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MmY7IiBnbHlwaC1uYW1lPSJpbnRlcmFjdGl2ZS1jb250ZW50IiBkYXRhLXRhZ3M9ImludGVyYWN0aXZlLWNvbnRlbnQiIGQ9Ik0xOTQuOTQ1IDQ3MC44N2MwIDE2Ni43NTEgMTM1LjM0NiAzMDIuMDk3IDMwMi4wOTcgMzAyLjA5N3MzMDIuMDk3LTEzNS4zNDYgMzAyLjA5Ny0zMDIuMDk3YzAtMjAuMTg4LTEuNDk1LTQwLjM4MS01Ljk4Mi01OS44MjIgMzcuMzg5LTIuOTkxIDcyLjUzMy0xMS45NjIgOTguNzAzLTI0LjY3NSA1Ljk4MiAyNy42NjUgOC45NzMgNTUuMzM2IDguOTczIDg0LjQ5NyAxLjQ5NSAyMjIuMDg2LTE4MC4yMTMgNDAzLjc5OC00MDMuNzk4IDQwMy43OTgtMjIyLjA4NiAwLTQwMy43OTgtMTgxLjcwOS00MDMuNzk4LTQwMy43OThzMTgxLjcwOS00MDMuNzk4IDQwMy43OTgtNDAzLjc5OGMxLjQ5NSAwIDQuNDg2IDAgNS45ODIgMGwtNDMuMzczIDEwNC42ODdjLTE0OC44MDYgMTcuMTk3LTI2NC43MTIgMTQzLjU3MS0yNjQuNzEyIDI5OS4xMDV6TTQzNC4yMzIgNjA2Ljk2NWM3Mi41MzMgMzAuNjU3IDE1OC41MjYtNC40ODYgMTg4LjQ0LTc4LjUxNWw1My44NDEtMTMwLjg2YzEyLjcxIDIuOTkxIDI0LjY3NSA1Ljk4MiAzNy4zODkgNy40NzggNS45ODIgMjAuMTg4IDguOTczIDQwLjM4MSA4Ljk3MyA2My41NjIgMCAxMjQuODc5LTEwMS42OTUgMjI2LjU3My0yMjYuNTczIDIyNi41NzNzLTIyNS44MjUtMTAwLjk0Ny0yMjUuODI1LTIyNS44MjVjMC05OC43MDMgNjMuNTYyLTE4My4yMDUgMTUyLjU0My0yMTMuMTEzbC02OC43OTQgMTYyLjI2NGMtMjcuNjY1IDc0LjAyOSA3LjQ3OCAxNTkuMjczIDgwLjAxMCAxODguNDR6TTg5NC44NTUgMzA5LjM1NWMtMTUuNzAyIDIwLjE4OC0zNi42NDEgMzcuMzg5LTU1LjMzNiAzNS4xNDUtNS45ODItMS40OTUtMTAuNDY4LTQuNDg2LTE1LjcwMi0yLjk5MS0xMC40NjggMS40OTUtMTguNjkyIDEwLjQ2OC0zMi4xNTMgMTEuOTYyLTExLjk2MiAxLjQ5NS0yMS42ODMtNy40NzgtMzIuMTUzLTcuNDc4cy0yMC4xODggOC45NzMtMzUuMTQ1IDcuNDc4Yy0xNC4yMDUtMS40OTUtMjQuNjc1LTExLjk2Mi0zNi42NDEtMTIuNzEtMTAuNDY4LTEuNDk1LTIxLjY4MyA0LjQ4Ni0zNS4xNDUgMS40OTUtMTUuNzAyLTQuNDg2LTI5LjE2MS0xMS45NjItMzYuNjQxLTIxLjY4My0xNC4yMDUgMjQuNjc1LTEwNC42ODcgMTg2LjE5Ny0xMzYuODQyIDE4NC43LTUyLjM0Ni0yLjk5MS00My4zNzMtNjguMDQ2LTMwLjY1Ny0xMDEuNjk1IDAgMCAxMTQuNDExLTI1Ny4yMzUgMTIzLjM4NC0yODAuNDEzIDE4LjY5Mi01MC44NDkgMTEuOTYyLTg0LjQ5NyAxMS45NjItODQuNDk3cy05Mi43MjIgMC0xMjEuODg5LTIwLjE4OGMtMTEuOTYyLTcuNDc4LTE4LjY5Mi0xNC4yMDUtMjAuMTg4LTI0LjY3NS01Ljk4Mi0yMy4xNzggMS40OTUtNDQuODY5IDIxLjY4My01NS4zMzYgMCAwIDI0Ni43NjMtMTUuNzAyIDM1NC40NDIgMzIuMTUzIDUzLjg0MSAyNC42NzUgODEuNTA1IDc1LjUyNCA5Mi43MjIgMTM3LjU4OSAyMC4xODggODMuNzQ5IDM4Ljg4NSAxNDUuODE0LTE1LjcwMiAyMDEuMTUxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MzA7IiBnbHlwaC1uYW1lPSJlbnRlcmZ1bGxzY3JlZW4iIGRhdGEtdGFncz0iZW50ZXIgZnVsbCBzY3JlZW4iIGQ9Ik0xMDUuOTEyLTEwLjc0aDkzLjIwMmwyOTkuNTc1IDI5OS41NzVjNi42NTYgNi42NTYgNi42NTYgMTMuMzE1IDAgMTkuOTcybC05OS44NTggOTMuMjAyYy02LjY1NiA2LjY1Ni0xMy4zMTUgNi42NTYtMTkuOTcyIDBsLTI1OS42MzItMjY2LjI4OC01OS45MTctNTkuOTE3IDQ2LjYtODYuNTQ0ek0yMjUuNzQxIDEyMi40MDRsLTE1OS43NzQgMTU5Ljc3NGMtMTMuMzE1IDYuNjU2LTE5Ljk3MiAwLTE5Ljk3Mi0xMy4zMTV2LTMxOS41NDVjMC02LjY1NiAwLTEzLjMxNSA2LjY1Ni0xMy4zMTVoMzI2LjIwNGM2LjY1NiAwIDEzLjMxNSAxMy4zMTUgNi42NTYgMTkuOTcybC0xNTkuNzc0IDE2Ni40M3pNODM4LjIwNCA3NDguMTc5aC05My4yMDJsLTMzLjI4NS0zMy4yODUtMTc5Ljc0Ni0xODYuNDAxYy02LjY1Ni02LjY1Ni02LjY1Ni0xMy4zMTUgMC0xOS45NzJsOTMuMjAyLTkzLjIwMmM2LjY1Ni02LjY1NiAxMy4zMTUtNi42NTYgMTkuOTcyIDBsMTc5Ljc0NiAxODYuNDAxIDU5LjkxNyA1OS45MTctNDYuNiA4Ni41NDR6TTc5OC4yNTkgNjk0LjkyM2wxNTkuNzc0LTE1OS43NzRjMTMuMzE1LTYuNjU2IDE5Ljk3MiAwIDE5Ljk3MiA2LjY1NnYzMjYuMjA0YzAgNi42NTYgMCA2LjY1Ni02LjY1NiA2LjY1NmgtMzI2LjIwNGMtNi42NTYgMC0xMy4zMTUtNi42NTYtNi42NTYtMTMuMzE1bDE1OS43NzQtMTY2LjQzeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MzE7IiBnbHlwaC1uYW1lPSJleGl0LWZ1bGwtc2NyZWVuIiBkYXRhLXRhZ3M9ImV4aXQtZnVsbC1zY3JlZW4iIGQ9Ik0zODkuOTQzIDMwMC43MTJoLTgxLjM2OGwtMjYxLjU0Ny0yNjEuNTQ3Yy01LjgxMy01LjgxMy01LjgxMy0xMS42MjYgMC0xNy40MzVsODEuMzY4LTgxLjM2OGM1LjgxMy01LjgxMyAxMS42MjYtNS44MTMgMTcuNDM1IDBsMjI2LjY3NiAyMzIuNDg3IDUyLjMwOCA1Mi4zMDgtMzQuODczIDc1LjU1OXpNMjg1LjMyMyAxODQuNDY5bDEzOS40OTEtMTM5LjQ5MWM1LjgxMy01LjgxMyAxNy40MzUgMCAxNy40MzUgNS44MTN2Mjg0Ljc5OWMwIDUuODEzLTUuODEzIDExLjYyNi0xMS42MjYgMTEuNjI2aC0yNzguOTg2Yy01LjgxMyAwLTExLjYyNi0xMS42MjYtNS44MTMtMTcuNDM1bDEzOS40OTEtMTQ1LjMwNHpNNzAzLjgwMiA1NzMuODg1aDgxLjM2OGwxOTEuODAzIDE5MS44MDNjNS44MTMgNS44MTMgNS44MTMgMTEuNjI2IDAgMTcuNDM1bC04MS4zNjggODcuMTgyYy01LjgxMyA1LjgxMy0xMS42MjYgNS44MTMtMTcuNDM1IDBsLTE1Ni45My0xNjIuNzQzLTU4LjEyMi01OC4xMjIgNDAuNjg3LTc1LjU1OXpNNzM4LjY3NSA2MjYuMTk3bC0xMzkuNDkxIDEzOS40OTFjLTUuODEzIDUuODEzLTE3LjQzNSAwLTE3LjQzNS0xMS42MjZ2LTI3OC45ODZjMC01LjgxMyA1LjgxMy0xMS42MjYgMTEuNjI2LTExLjYyNmgyNzguOTg2YzUuODEzIDAgMTEuNjI2IDExLjYyNiA1LjgxMyAxNy40MzVsLTEzOS40OTEgMTQ1LjMwNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTMyOyIgZ2x5cGgtbmFtZT0iYWRkIiBkYXRhLXRhZ3M9ImFkZCIgZD0iTTEwMjQgMzE4LjQ4M2MwLTE1LjMyNy01LjMzMS0yOC4yMS0xNS45OTMtMzguODcycy0yMy41NDUtMTUuOTkzLTM4Ljg3Mi0xNS45OTNoLTMxNS40MTl2LTMxNS40MTljMC0xNS4zMjctNS4zMzEtMjguMjEtMTUuOTkzLTM4Ljg3MnMtMjMuNTQ1LTE1Ljk5My0zOC44NzItMTUuOTkzaC0xNzMuNzAyYy0xNS4zMjcgMC0yOC4yMSA1LjMzMS0zOC44NzIgMTUuOTkzcy0xNS45OTMgMjMuNTQ1LTE1Ljk5MyAzOC44NzJ2MzE1LjQxOWgtMzE1LjQxOWMtMTUuMzI3IDAtMjguMjEgNS4zMzEtMzguODcyIDE1Ljk5M3MtMTUuOTkzIDIzLjU0NS0xNS45OTMgMzguODcydjE3My43MDJjMCAxNS4zMjcgNS4zMzEgMjguMjEgMTUuOTkzIDM4Ljg3MnMyMy41NDUgMTUuOTkzIDM4Ljg3MiAxNS45OTNoMzE1LjQxOXYzMTUuNDE5YzAgMTUuMzI3IDUuMzMxIDI4LjIxIDE1Ljk5MyAzOC44NzJzMjMuNTQ1IDE1Ljk5MyAzOC44NzIgMTUuOTkzaDE3My43MDJjMTUuMzI3IDAgMjguMjEtNS4zMzEgMzguODcyLTE1Ljk5M3MxNS45OTMtMjMuNTQ1IDE1Ljk5My0zOC44NzJ2LTMxNS40MTloMzE1LjQxOWMxNS4zMjcgMCAyOC4yMS01LjMzMSAzOC44NzItMTUuOTkzczE1Ljk5My0yMy41NDUgMTUuOTkzLTM4Ljg3MnYtMTczLjcwMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTMzOyIgZ2x5cGgtbmFtZT0iY2hlY2sxIiBkYXRhLXRhZ3M9ImNoZWNrIiBkPSJNMzk4LjExNCAzNDMuMzI0bC0yMzAuNzcyIDIzMC43NzItMTY3LjM0MS0xNjcuMTk2IDM5OC4xMS0zOTguMTEgNjI1Ljg5IDYyNS44OS0xNjcuMzQxIDE2Ny4xOTZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzNDsiIGdseXBoLW5hbWU9ImRlbGV0ZTEiIGRhdGEtdGFncz0iZGVsZXRlIiBkPSJNODc0LjU5OSA3NjcuOTMzYzY1LjMwNi02NS4zMDYgMTA5LjMxMi0xNDIuMDY2IDEzMi4yMi0yMzAuMjc5czIyLjkwNy0xNzYuNDI3IDAtMjY0LjY0Yy0yMi45MDctODguMjEzLTY2LjkxNC0xNjQuOTczLTEzMi4yMi0yMzAuMjc5cy0xNDIuMDY2LTEwOS4zMTItMjMwLjI3OS0xMzIuMjJjLTg4LjIxMy0yMi45MDctMTc2LjQyNy0yMi45MDctMjY0LjY0IDBzLTE2NC45NzMgNjYuOTE0LTIzMC4yNzkgMTMyLjIyYy02NS4zMDYgNjUuMzA2LTEwOS4zMTIgMTQyLjA2Ni0xMzIuMjIgMjMwLjI3OXMtMjIuOTA3IDE3Ni40MjcgMCAyNjQuNjRjMjIuOTA3IDg4LjIxMyA2Ni45MTQgMTY0Ljk3MyAxMzIuMjIgMjMwLjI3OXMxNDIuMDY2IDEwOS4zMTIgMjMwLjI3OSAxMzIuMjJjODguMjEzIDIyLjkwNyAxNzYuNDI3IDIyLjkwNyAyNjQuNjQgMCA4OC40MTQtMjIuNzA2IDE2NC45NzMtNjYuOTE0IDIzMC4yNzktMTMyLjIyek02ODEuNjk1IDE1My44NTVsODEuNzgzIDgxLjc4M2M0LjgyMyA0LjgyMyA3LjIzNCAxMC42NSA3LjIzNCAxNy40ODJzLTIuNDExIDEyLjY1OS03LjIzNCAxNy40ODJsLTEzNC40MyAxMzQuNDMgMTM0LjQzIDEzNC40M2M0LjgyMyA0LjgyMyA3LjIzNCAxMC42NSA3LjIzNCAxNy40ODJzLTIuNDExIDEyLjY1OS03LjIzNCAxNy40ODJsLTgxLjc4MyA4MS43ODNjLTQuODIzIDQuODIzLTEwLjY1IDcuMjM0LTE3LjQ4MiA3LjIzNHMtMTIuNjU5LTIuNDExLTE3LjQ4Mi03LjIzNGwtMTM0LjQzLTEzNC40My0xMzQuNDMgMTM0LjQzYy00LjgyMyA0LjgyMy0xMC42NSA3LjIzNC0xNy40ODIgNy4yMzRzLTEyLjY1OS0yLjQxMS0xNy40ODItNy4yMzRsLTgxLjc4My04MS43ODNjLTQuODIzLTQuODIzLTcuMjM0LTEwLjY1LTcuMjM0LTE3LjQ4MnMyLjQxMS0xMi42NTkgNy4yMzQtMTcuNDgybDEzNC40My0xMzQuNDMtMTM0LjQzLTEzNC40M2MtNC44MjMtNC44MjMtNy4yMzQtMTAuNjUtNy4yMzQtMTcuNDgyczIuNDExLTEyLjY1OSA3LjIzNC0xNy40ODJsODEuNzgzLTgxLjc4M2M0LjgyMy00LjgyMyAxMC42NS03LjIzNCAxNy40ODItNy4yMzRzMTIuNjU5IDIuNDExIDE3LjQ4MiA3LjIzNGwxMzQuNDMgMTM0LjQzIDEzNC40My0xMzQuNDNjNC44MjMtNC44MjMgMTAuNjUtNy4yMzQgMTcuNDgyLTcuMjM0czEyLjY1OSAyLjQxMSAxNy40ODIgNy4yMzR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzNTsiIGdseXBoLW5hbWU9Im1ldGFkYXRhIiBkYXRhLXRhZ3M9Im1ldGFkYXRhIiBkPSJNNDAxLjczMiAzNTIuMzI0Yy0yLjAzMiAwLjczOS00LjA2MyAwLjkyNC02LjA5NSAwLjczOS0xLjg0Ny0wLjM2OS00LjI0OC0wLjkyNC03LjM4OC0xLjg0N3MtNS43MjYtMS4yOTMtNy45NDItMS4yOTNjLTIuMjE2IDAtNC45ODcgMC43MzktOC42ODEgMi4yMTYtMi45NTUgMS4xMDgtNi44MzQgMy4xNC0xMS42MzYgNi4yOHMtOC4zMTIgNC45ODctOS45NzQgNS43MjZjLTEuMTA4IDAuNzM5LTMuNTA5IDIuMDMyLTcuMDE5IDMuODc5LTMuNjk0IDEuODQ3LTYuNDY1IDMuMzI1LTguNjgxIDQuNDMzcy00LjQzMyAyLjc3MS02LjgzNCA1LjE3MmMtMi40MDEgMi40MDEtMy44NzkgNC44MDItNC42MTggNy4zODgtMC43MzkgMi4yMTYtMS42NjIgNi40NjUtMi43NzEgMTMuMTE0LTEuMTA4IDYuNDY1LTIuNTg2IDExLjI2Ny00LjQzMyAxNC4wMzgtMi4yMTYgMy42OTQtNS4xNzIgNy4yMDMtOS4yMzUgMTAuODk4cy03LjU3MyA1LjM1Ni0xMC44OTggNS4zNTZjMi45NTUgMCAyLjk1NSAyLjQwMSAwIDcuMzg4LTIuOTU1IDQuODAyLTUuMzU2IDguNDk2LTcuNTczIDEwLjUyOC0wLjczOSAwLjczOS0yLjk1NSAzLjE0LTYuNDY1IDcuMDE5LTMuNjk0IDQuMDYzLTYuNjQ5IDcuMzg4LTkuMjM1IDEwLjM0M3MtNC42MTggNi4yOC02LjQ2NSA5Ljk3NGMtMS44NDcgMy44NzktMi4yMTYgNy4wMTktMS4xMDggOS40MiAwLjM2OSAwLjM2OSAwIDAuOTI0LTEuMTA4IDEuNjYycy0yLjQwMSAxLjQ3OC00LjA2MyAyLjIxNmMtMS42NjIgMC43MzktMy4xNCAxLjI5My00LjYxOCAxLjg0N3MtMi41ODYgMC43MzktMy4zMjUgMC43MzljMC43MzktMS40NzggMS40NzgtNC4wNjMgMi40MDEtNy45NDJzMS44NDctNi42NDkgMi45NTUtOC40OTZjMC43MzktMS40NzggMy44NzktNi42NDkgOS4yMzUtMTUuNyA5LjQyLTE1LjE0NiAxMy42NjgtMjYuNDEzIDEzLjExNC0zMy42MTYtMi4yMTYtMC43MzktMy42OTQtMC4zNjktNC40MzMgMS4xMDhzLTEuMjkzIDMuNTA5LTEuNjYyIDUuOTExYy0wLjM2OSAyLjU4Ni0wLjczOSA0LjQzMy0xLjEwOCA1LjM1Ni0xLjEwOCAyLjIxNi0zLjg3OSA0LjQzMy04LjQ5NiA3LjAxOXMtNy4zODggNC45ODctOC40OTYgNy41NzNjMC4zNjkgMCAwLjczOSAwLjE4NSAxLjI5MyAwLjU1NHMwLjkyNCAwLjU1NCAxLjI5MyAwLjU1NGMwLjM2OSAzLjMyNS0xLjQ3OCA3LjM4OC01LjcyNiAxMi41Ni00LjI0OCA0Ljk4Ny01LjkxMSA4LjY4MS01LjE3MiAxMC44OTgtMi45NTUgMi4yMTYtNS4zNTYgNi40NjUtNy41NzMgMTIuNzQ1cy00LjA2MyAxMC4zNDMtNS4zNTYgMTIuMTljLTEuNDc4IDIuMjE2LTMuMzI1IDQuMDYzLTUuMzU2IDUuNzI2cy00LjgwMiAzLjUwOS04LjEyNyA1LjM1NmMtMy4zMjUgMi4wMzItNS4zNTYgMy4zMjUtNi40NjUgNC4wNjMtMC43MzkgMC4zNjktMi4yMTYgMi4wMzItNC40MzMgNC44MDItMTIuMDA2IDE0LjQwNy0xNS41MTUgMjIuMzQ5LTEwLjg5OCAyMy4yNzMtNC42MTgtMS4xMDgtOC42ODEgMi40MDEtMTEuNjM2IDEwLjUyOC0zLjE0IDguMTI3LTQuMDYzIDE0LjQwNy0yLjk1NSAxOC42NTVsLTEuMTA4IDAuNTU0YzAuMzY5IDEuNDc4IDAuNTU0IDUuNzI2IDAuNTU0IDEyLjc0NXMwLjM2OSAxMy40ODMgMS4yOTMgMTkuMjA5YzAuOTI0IDUuNzI2IDIuNTg2IDguNjgxIDUuMTcyIDguNjgxLTIuNTg2LTAuMzY5LTQuNDMzIDEuODQ3LTUuNzI2IDYuODM0LTEuMjkzIDQuODAyLTEuMjkzIDguMzEyLTAuMTg1IDkuOTc0IDAuMzY5IDEuMTA4IDIuMDMyIDAuMzY5IDQuODAyLTIuMjE2IDIuOTU1LTIuNTg2IDQuNDMzLTQuMjQ4IDQuODAyLTQuODAyIDQuNjE4IDIuNTg2IDYuNDY1IDUuNzI2IDUuMzU2IDkuNzg5LTAuNzM5IDEuNDc4LTQuNjE4IDUuMTcyLTExLjQ1MiAxMS40NTItMTUuNTE1IDEwLjE1OS0yMy40NTcgMTQuOTYxLTIzLjgyNyAxNC41OTIgMi4yMTYgNC4wNjMgMS42NjIgNy4zODgtMS42NjIgMTAuMzQzLTMuNjk0LTIuMjE2LTUuNzI2LTIuNzcxLTYuMjgtMS42NjJzLTAuOTI0IDMuMTQtMS4yOTMgNS45MTFjLTAuMzY5IDIuOTU1LTEuMjkzIDQuNDMzLTIuNzcxIDQuODAyLTEuODQ3IDAuMzY5LTQuMDYzIDEuODQ3LTYuNDY1IDQuNDMzIDMyLjEzOSA1MS4zNDggNzQuODA1IDkxLjYxMyAxMjcuNjMxIDEyMC42MTIgMi4yMTYgMC4zNjkgNi4wOTUgMC41NTQgMTIuMDA2IDAuNTU0IDIuOTU1LTAuMzY5IDUuNTQxLTEuMjkzIDguMTI3LTIuNzcxczUuMTcyLTMuNTA5IDcuOTQyLTUuOTExYzIuNzcxLTIuNTg2IDQuODAyLTQuNDMzIDYuMjgtNS4zNTYgMC43MzkgMi4yMTYtMC4xODUgNS4zNTYtMi43NzEgOS43ODkgMC43MzkgMi4yMTYgNC42MTggNC40MzMgMTIuMDA2IDYuNDY1IDguMzEyIDEuMTA4IDEzLjY2OCAwLjkyNCAxNi4yNTQtMC41NTQtMi4yMTYgMy4zMjUtNS43MjYgNy43NTgtMTAuODk4IDEzLjQ4M2wtMi43NzEtMi43NzFjLTIuOTU1IDIuNTg2LTEwLjUyOCAxLjI5My0yMi43MTktMy44NzktMC43MzktMC4zNjktMi41ODYtMS4yOTMtNS4zNTYtMi45NTUtMi45NTUtMS42NjItNS4xNzItMi43NzEtNy4wMTktMy41MDktMi4yMTYtMC43MzktNC40MzMtMC45MjQtNi40NjUtMC41NTQgMTcuMzYyIDkuNDIgMzQuMzU1IDE2LjgwOCA1MC45NzggMjIuMzQ5IDEuMTA4LTAuNzM5IDIuOTU1LTIuMjE2IDUuMzU2LTQuNjE4IDIuNTg2LTIuNDAxIDQuNDMzLTQuMDYzIDUuOTExLTUuMTcyLTEuMTA4IDAuNzM5LTEuODQ3IDAuMzY5LTIuMjE2LTEuMTA4LTEuNDc4LTQuNDMzLTEuNDc4LTcuOTQyIDAtMTAuODk4IDEuODQ3LTIuNTg2IDQuMjQ4LTQuMDYzIDcuMzg4LTQuNDMzczYuODM0LTAuMTg1IDExLjA4MiAwLjU1NGM0LjQzMyAwLjczOSA3LjIwMyAxLjEwOCA4LjY4MSAxLjEwOGw1LjM1Ni0wLjU1NGMxMS42MzYtMS4xMDggMTYuMDY5IDAgMTMuNDgzIDMuMzI1IDEuMTA4LTEuNDc4IDIuNDAxLTQuNDMzIDMuODc5LTkuMDUxczMuMTQtNy43NTggNC44MDItOS40MmMxLjg0NyAxLjQ3OCAyLjIxNiA0LjA2MyAxLjEwOCA3LjU3My0xLjEwOCAzLjY5NC0xLjEwOCA2LjA5NSAwIDcuNTczIDAuMzY5IDAuNzM5IDEuNDc4IDEuNDc4IDMuMzI1IDIuMjE2czMuODc5IDEuNDc4IDYuMjggMi40MDFjMi40MDEgMC45MjQgMy44NzkgMS40NzggNC42MTggMS44NDcgMi4yMTYgMS40NzggMC43MzkgNC4wNjMtNC40MzMgNy41NzMtMC43MzkgMC4zNjktMi4yMTYgMC45MjQtNC42MTggMS42NjJzLTQuNDMzIDEuNDc4LTYuMjggMi4yMTZjLTEuODQ3IDAuNzM5LTMuNjk0IDEuNjYyLTUuNzI2IDIuOTU1cy0yLjk1NSAyLjc3MS0yLjc3MSA0LjQzM2MwLjE4NSAxLjY2MiAxLjEwOCAzLjY5NCAyLjk1NSA2LjI4IDIuMjE2IDEuODQ3IDUuNzI2IDIuNTg2IDEwLjUyOCAyLjIxNnM4LjY4MS0xLjI5MyAxMS4wODItMi43NzFjOS43ODktNS4zNTYgMTEuMjY3LTEwLjM0MyA0LjQzMy0xNC41OTIgMy42OTQtMC4zNjkgNy45NDItMS44NDcgMTMuMTE0LTQuNDMzIDQuOTg3LTIuNTg2IDcuMDE5LTUuMTcyIDUuOTExLTguMTI3IDIuOTU1IDUuMzU2IDUuNzI2IDguMTI3IDguNjgxIDguMTI3IDEuODQ3LTAuMzY5IDMuNTA5LTIuNzcxIDUuMTcyLTcuMzg4czIuNTg2LTcuMDE5IDIuOTU1LTcuMzg4YzIuOTU1LTQuMDYzIDUuNzI2LTQuODAyIDguNjgxLTIuNzcxIDIuOTU1IDIuMjE2IDUuOTExIDUuMzU2IDkuMDUxIDkuNDIgMy4xNCA0LjI0OCA0LjgwMiA2LjA5NSA1LjE3MiA1LjcyNi0zLjY5NCAxLjQ3OC00LjA2MyAyLjk1NS0xLjEwOCA0LjQzMyA1LjM1NiAzLjMyNSAxMC4zNDMgNC4yNDggMTQuNTkyIDIuNzcxIDEuMTA4LTAuNzM5IDIuNTg2LTIuNDAxIDQuNDMzLTQuODAyIDMuMzI1LTYuNDY1IDIuNzcxLTkuNjA1LTEuNjYyLTkuMjM1IDMuMzI1LTIuOTU1IDQuNjE4LTYuNDY1IDQuMDYzLTEwLjg5OHMtMy4zMjUtNi4yOC04LjQ5Ni01LjkxMWMtMS44NDcgMC00LjQzMyAwLjkyNC03Ljk0MiAyLjc3MXMtNi4wOTUgMi43NzEtNy45NDIgMi45NTVjLTEuODQ3IDAuMTg1LTQuNDMzLTAuNzM5LTcuNTczLTIuOTU1LTEuNDc4LTEuODQ3LTMuMzI1LTQuODAyLTUuNzI2LTkuMjM1cy00LjQzMy03LjM4OC02LjI4LTkuMjM1Yy01LjM1Ni01LjM1Ni0xNC40MDctNy4zODgtMjcuMTUyLTUuOTExIDEuMTA4IDAgMC45MjQtMS4xMDgtMC4xODUtMy4zMjUtMS4yOTMtMi4yMTYtMi45NTUtNC42MTgtNS4xNzItNy4zODhzLTMuNTA5LTQuMjQ4LTMuODc5LTQuNjE4Yy0zLjMyNS0zLjY5NC01LjM1Ni03Ljc1OC02LjQ2NS0xMi41NiAwLTAuNzM5LTAuMTg1LTMuMTQtMC41NTQtNy4zODhzLTEuMTA4LTcuMzg4LTIuMjE2LTkuNDJjNC40MzMgMS4xMDggNy43NTgtMS4xMDggMTAuMzQzLTYuNDY1IDIuMjE2LTQuOTg3IDIuMjE2LTcuNzU4IDAtOC4xMjcgMTIuMDA2IDEuODQ3IDIyLjM0OSAxLjEwOCAzMS41ODQtMi4yMTYgMTMuMTE0LTQuNjE4IDIwLjUwMi05LjQyIDIyLjM0OS0xNC4wMzggMi4yMTYgMy4zMjUgNy4zODggMy41MDkgMTUuNyAwLjU1NCAzLjMyNS0xLjg0NyA2LjA5NS03LjIwMyA4LjY4MS0xNi4yNTQgMS40NzgtNS4zNTYgMy44NzktMTAuMTU5IDcuMzg4LTE0LjAzOCAzLjUwOS00LjA2MyA3LjIwMy00Ljk4NyAxMS4wODItMy4zMjVsMS42NjIgMS4xMDhjMS40NzggMC43MzkgMi41ODYgMS4yOTMgMy41MDkgMS44NDdzMS44NDcgMS4yOTMgMi45NTUgMi4yMTZjMS4xMDggMC45MjQgMS42NjIgMS42NjIgMS44NDcgMi40MDFzLTAuMTg1IDEuNDc4LTAuNzM5IDIuMjE2Yy0yLjU4NiAyLjIxNi00LjQzMyA1LjE3Mi01LjcyNiA5LjA1MXMtMC45MjQgNy4yMDMgMC43MzkgOS45NzRjMS4xMDggMS40NzggNC4wNjMgMy42OTQgOC42ODEgNi40NjUgNC42MTggMi45NTUgNy41NzMgNS43MjYgOC42ODEgOC42ODEgMS40NzggNC42MTgtMC4zNjkgOC42ODEtNS4zNTYgMTEuNjM2LTQuOTg3IDMuMTQtNy41NzMgNS45MTEtNy41NzMgOC40OTYgMCAxLjg0NyAxLjEwOCA0LjA2MyAzLjUwOSA2LjQ2NSAyLjQwMSAyLjU4NiAzLjMyNSA0LjgwMiAyLjk1NSA3LjAxOSAwIDEuMTA4LTAuNTU0IDMuMzI1LTEuODQ3IDYuODM0cy0yLjAzMiA1LjkxMS0yLjIxNiA3LjU3M2MtMC4xODUgMS42NjIgMC41NTQgMy41MDkgMi40MDEgNS43MjYgMi41ODYgMS40NzggOC40OTYgMS4yOTMgMTcuOTE2LTAuMTg1IDkuNDItMS42NjIgMTUuNTE1LTMuMzI1IDE4LjQ3LTUuMTcyIDEuMTA4LTAuNzM5IDMuNTA5LTEuODQ3IDcuMDE5LTMuMzI1IDMuNjk0LTEuNDc4IDYuODM0LTIuOTU1IDkuNDItNC42MTggMi43NzEtMS42NjIgNC4yNDgtMy4xNCA0LjYxOC00LjYxOGgtMi43NzFjMi41ODYtMi4yMTYgNC4wNjMtNC42MTggNC42MTgtNy41NzNzLTAuNzM5LTQuOTg3LTQuMDYzLTYuNDY1YzIuMjE2IDAuMzY5IDQuOTg3LTAuMTg1IDguNjgxLTEuNjYyIDUuNzI2LTIuMjE2IDUuOTExLTQuMjQ4IDAuNTU0LTUuOTExIDEuMTA4IDAuMzY5IDIuNTg2IDAuNzM5IDQuNjE4IDEuMTA4czMuNTA5IDAuOTI0IDQuNjE4IDEuNjYyYzAuNzM5IDAuMzY5IDEuNjYyIDAuOTI0IDIuNzcxIDEuODQ3czEuODQ3IDEuNDc4IDIuNDAxIDEuNjYyYzAuNTU0IDAuMTg1IDEuMjkzIDAuMzY5IDIuNDAxIDAuNTU0czIuMjE2LTAuMTg1IDMuMzI1LTAuNzM5YzAuMzY5IDAgMS4xMDggMC45MjQgMi40MDEgMi43NzFzMi41ODYgMy42OTQgNC4wNjMgNS4zNTZjMS40NzggMS44NDcgMi43NzEgMi43NzEgMy44NzkgMi43NzFzMi4wMzItMC4zNjkgMi45NTUtMS4yOTNjMC45MjQtMC45MjQgMS42NjItMS44NDcgMi4yMTYtMi45NTVzMS4xMDgtMi4yMTYgMS42NjItMy41MDljMC41NTQtMS4yOTMgMC45MjQtMi4yMTYgMS4yOTMtMi45NTUgMC43MzktMS44NDcgMi40MDEtMy42OTQgNS4xNzItNS43MjZzNC40MzMtMy44NzkgNS4xNzItNS43MjZjMC4zNjktMS4xMDggMS4xMDgtMy44NzkgMi4yMTYtOC4xMjcgMS4xMDgtNC40MzMgMi41ODYtNy4zODggNC40MzMtOS4wNTFzNC40MzMtMi45NTUgOC4xMjctNC4wNjNjMC43MzktMC4zNjkgMi40MDEtMC4xODUgNC44MDIgMC41NTQgMi41ODYgMC43MzkgNC42MTggMC45MjQgNi4yOCAwLjU1NHMyLjQwMS0xLjg0NyAyLjQwMS00LjQzM2MyLjIxNiAyLjIxNiAzLjMyNSAzLjY5NCAzLjMyNSA0LjQzMyAwLjM2OS00LjYxOCAxLjQ3OC04LjQ5NiAzLjUwOS0xMS40NTJzNS4xNzItNC4yNDggOS40Mi0zLjg3OWwtMS4xMDgtMTIuMDA2Yy0xLjEwOC0xLjg0Ny0zLjg3OS0zLjE0LTguMTI3LTQuMDYzLTQuNDMzLTAuOTI0LTcuMDE5LTEuNjYyLTguMTI3LTIuNDAxLTEuMTA4LTAuMzY5LTMuNjk0LTIuNTg2LTcuOTQyLTYuNDY1LTQuMjQ4LTQuMDYzLTUuOTExLTYuMjgtNS4xNzItNy4wMTktNi4wOTUgNi44MzQtMTUuMzMgOC44NjYtMjcuNzA2IDUuOTExLTEzLjg1My0yLjIxNi0yMy4wODgtNC40MzMtMjguMjYtNi40NjUtNS43MjYtMi45NTUtOS43ODktNS41NDEtMTIuMDA2LTguMTI3LTAuMzY5LTAuMzY5LTAuOTI0LTEuNjYyLTEuODQ3LTMuODc5cy0xLjg0Ny00LjI0OC0yLjc3MS01LjkxMWMtMC45MjQtMS44NDctMS42NjItMi43NzEtMi40MDEtMi43NzEgMi4yMTYgMC4zNjkgNC42MTggMi4wMzIgNy4zODggNS4xNzJzNC40MzMgNC44MDIgNS4xNzIgNS4xNzJjOS40MiA2LjA5NSAxNy4xNzcgOC4zMTIgMjMuMjczIDYuNDY1IDcuOTQyLTIuMjE2IDkuMjM1LTQuOTg3IDMuODc5LTguNjgxLTAuNzM5LTAuNzM5LTIuNTg2LTAuOTI0LTUuNzI2LTAuNzM5cy01LjE3MiAwLTYuMjgtMC4xODVjMy4zMjUtMC43MzkgNS45MTEtMS42NjIgOC4xMjctMi45NTVzMi43NzEtMi45NTUgMS42NjItNS4xNzJjNS43MjYtMy4zMjUgNi44MzQtNi44MzQgMy4zMjUtMTAuODk4LTQuNjE4LTQuNjE4LTEwLjM0My02LjY0OS0xNi44MDgtNS45MTEgMS4xMDggMCAxLjEwOC0wLjczOSAwLTIuMjE2bC05LjIzNS01LjkxMWMtMC43MzktMC4zNjktMy4xNC0xLjI5My03LjAxOS0yLjc3MS00LjA2My0xLjQ3OC02LjY0OS0zLjE0LTguMTI3LTQuODAyLTEuMTA4LTEuNDc4LTEuNjYyLTMuNjk0LTEuNjYyLTYuNDY1IDAtMi45NTUtMC4xODUtNC45ODctMC41NTQtNi40NjVzLTEuODQ3LTEuODQ3LTQuNDMzLTEuMTA4Yy0xLjEwOC0yLjIxNi00LjQzMy0zLjg3OS05Ljk3NC01LjE3MnMtOS4yMzUtMy4xNC0xMS4wODItNS43MjZjMi4yMTYtMi45NTUgMi4wMzItNS43MjYtMC41NTQtOC42ODEtNC40MzMtMy42OTQtOC4xMjctMy4zMjUtMTEuNDUyIDEuMTA4LTEuODQ3LTAuNzM5LTMuMTQtMi41ODYtNC4wNjMtNS4zNTYtMC45MjQtMi45NTUtMi4yMTYtNC44MDItNC4wNjMtNS45MTEgMi41ODYtNC4wNjMgMi4yMTYtNi44MzQtMS4xMDgtOC42ODEgMC4zNjkgMCAxLjEwOC0wLjM2OSAyLjQwMS0xLjEwOHMyLjU4Ni0xLjY2MiA0LjA2My0yLjc3MWMxLjQ3OC0xLjEwOCAyLjQwMS0xLjY2MiAyLjc3MS0xLjY2Mi0xLjQ3OC0zLjMyNS0zLjUwOS00LjgwMi01LjkxMS00LjgwMiAyLjIxNi01LjcyNi0wLjU1NC0xMi4xOS04LjEyNy0xOS4wMjUtMS40NzgtMS40NzgtMy42OTQtMi45NTUtNi44MzQtNC40MzNzLTUuOTExLTIuNTg2LTguNDk2LTMuNTA5Yy0yLjU4Ni0wLjkyNC00LjA2My0xLjQ3OC00LjQzMy0xLjg0Ny0zLjY5NC0zLjMyNS02LjI4LTYuNjQ5LTguMTI3LTkuOTc0LTEuODQ3LTMuNTA5LTIuMDMyLTYuODM0LTAuNzM5LTkuOTc0IDEuMjkzLTMuMzI1IDQuNjE4LTUuMzU2IDkuOTc0LTYuNDY1bDAuMzY5LTMuNTA5YzY1LjAxNiA0OS4xMzEgMTQ2LjEwMSA3OC4zMTUgMjMzLjgzNiA3OC4zMTUgNDEuMTg5IDAgODEuMDg1LTYuNDY1IDExOC4yMTEtMTguMjg2LTQuMDYzIDY0LjgzMS0yMi4zNDkgMTI1LjIyOS01NS4wNDIgMTgxLjE5NS0zNy4zMSA2My45MDgtODcuOTE5IDExNC41MTctMTUxLjgyNyAxNTEuODI3cy0xMzMuNzI2IDU1Ljk2NS0yMDkuMjcgNTUuOTY1Yy03NS43MjkgMC0xNDUuMzYyLTE4LjY1NS0yMDkuMjctNTUuOTY1cy0xMTQuNTE3LTg3LjkxOS0xNTEuODI3LTE1MS44MjdjLTM3LjMxLTYzLjkwOC01NS45NjUtMTMzLjcyNi01NS45NjUtMjA5LjI3IDAtNzUuNzI5IDE4LjY1NS0xNDUuMzYyIDU1Ljk2NS0yMDkuMjdzODcuOTE5LTExNC41MTcgMTUxLjgyNy0xNTEuODI3YzM5LjE1Ny0yMi45MDMgODAuNzE2LTM4Ljc4OCAxMjQuMzA2LTQ3LjY1NC0zLjY5NCAyMS42MS01LjcyNiA0My45Ni01LjcyNiA2Ni40OTQgMS40NzggNzAuMzcyIDIwLjUwMiAxMzcuMDUxIDUzLjc0OSAxOTQuMzA5ek00ODAuNDE2IDQ3MS4yNzNjLTEuODQ3LTEuODQ3LTMuMzI1LTIuOTU1LTQuNjE4LTMuNTA5cy0yLjIxNi0wLjU1NC0yLjc3MS0wLjE4NWMtMC41NTQgMC4zNjktMS40NzggMS4xMDgtMi45NTUgMi40MDFzLTIuNzcxIDIuMjE2LTMuODc5IDIuOTU1Yy0xLjg0NyAxLjEwOC00Ljk4NyAyLjAzMi05LjQyIDIuNzcxLTQuNjE4IDAuNzM5LTcuMzg4IDEuNjYyLTguNDk2IDIuNzcxLTguNjgxLTYuNDY1LTEzLjg1My00LjgwMi0xNS43IDQuODAyLTAuNzM5LTEuODQ3LTAuNTU0LTQuMjQ4IDAuMTg1LTcuMzg4IDAuOTI0LTMuMTQgMS4yOTMtNC44MDIgMS4yOTMtNS4xNzItMi41ODYtNC42MTgtNi40NjUtNC45ODctMTIuMDA2LTEuMTA4LTIuMjE2IDIuMjE2LTcuMjAzIDIuNDAxLTE0Ljk2MSAwLjczOS03LjM4OC0xLjQ3OC0xMi41Ni0xLjg0Ny0xNS4xNDYtMC45MjQgMC4zNjktMC4xODUgMC45MjQtMC43MzkgMS44NDctMS40NzggMS4xMDgtMC43MzkgMS44NDctMS4yOTMgMi4yMTYtMS42NjItMC4zNjktMS40NzgtMC45MjQtMi41ODYtMS42NjItMy4zMjVzLTEuNDc4LTAuOTI0LTIuMjE2LTAuNzM5Yy0wLjczOSAwLjE4NS0xLjQ3OCAwLjE4NS0yLjQwMSAwcy0xLjY2Mi0wLjM2OS0yLjQwMS0wLjczOWMtMS40NzgtMS4xMDgtMy4zMjUtMi45NTUtNS4zNTYtNS43MjZzLTMuODc5LTQuNDMzLTQuODAyLTUuMTcyYzIuMjE2LTUuNzI2IDMuMTQtMTAuMTU5IDIuOTU1LTEzLjI5OXMtMC43MzktNy41NzMtMS42NjItMTMuNDgzYy0wLjkyNC01LjkxMS0xLjI5My0xMC43MTMtMS4yOTMtMTQuNDA3IDAtNS43MjYgMS42NjItMTIuNTYgNS4xNzItMjAuMTMzczcuNTczLTEyLjkyOSAxMi4xOS0xNS43YzIuNTg2LTEuNDc4IDYuODM0LTIuNDAxIDEzLjExNC0yLjc3MSAyLjAzMi0wLjE4NSAzLjg3OS0wLjE4NSA1LjU0MS0wLjE4NSAyMC42ODcgMzEuNTg0IDQ1Ljk5MSA1OS44NDQgNzQuNjIxIDg0LjA0MC0wLjM2OSAxLjEwOC0wLjczOSAyLjIxNi0wLjkyNCAzLjUwOS0wLjczOSAzLjY5NC0yLjc3MSA4LjEyNy02LjQ2NSAxMy4xMTR6TTM5Mi4zMTIgNDY5LjYxMWMtMC4xODUgMC0wLjE4NSAwLjE4NS0wLjM2OSAwLjE4NSAwLTAuMTg1IDAuMTg1LTAuMTg1IDAuMzY5LTAuMTg1ek05NjYuMDAzIDI4OS43MDljMjMuNDU3LTQwLjI2NiAzNS4yNzktODQuNDEgMzUuMjc5LTEzMi4yNDhzLTExLjgyMS05MS43OTgtMzUuMjc5LTEzMi4yNDhjLTIzLjQ1Ny00MC4yNjYtNTUuNDExLTcyLjIxOS05NS44NjEtOTUuODYxLTQwLjI2Ni0yMy40NTctODQuNDEtMzUuMjc5LTEzMi4yNDgtMzUuMjc5cy05MS43OTggMTEuODIxLTEzMi4yNDggMzUuMjc5Yy00MC4yNjYgMjMuNDU3LTcyLjIxOSA1NS40MTEtOTUuODYxIDk1Ljg2MS0yMy40NTcgNDAuMjY2LTM1LjI3OSA4NC40MS0zNS4yNzkgMTMyLjI0OHMxMS44MjEgOTEuNzk4IDM1LjI3OSAxMzIuMjQ4YzIzLjQ1NyA0MC4yNjYgNTUuNDExIDcyLjIxOSA5NS44NjEgOTUuODYxIDQwLjI2NiAyMy40NTcgODQuNDEgMzUuMjc5IDEzMi4yNDggMzUuMjc5czkxLjc5OC0xMS44MjEgMTMyLjI0OC0zNS4yNzljNDAuNDUtMjMuNjQyIDcyLjQwNC01NS41OTYgOTUuODYxLTk1Ljg2MXpNODI1LjgxMi03LjExMXY1NC44NTdjMCAzLjE0LTEuMTA4IDUuOTExLTMuMTQgNy45NDJzLTQuNjE4IDMuMTQtNy45NDIgMy4xNGgtMzIuNjkzdjE3NS40NjljMCAzLjE0LTEuMTA4IDUuOTExLTMuMTQgNy45NDJzLTQuNjE4IDMuMTQtNy45NDIgMy4xNGgtMTA5LjcxNGMtMy4xNCAwLTUuOTExLTEuMTA4LTcuOTQyLTMuMTRzLTMuMTQtNC42MTgtMy4xNC03Ljk0MnYtNTQuODU3YzAtMy4xNCAxLjEwOC01LjkxMSAzLjE0LTcuOTQyczQuNjE4LTMuMTQgNy45NDItMy4xNGgzMi44Nzd2LTEwOS41M2gtMzIuODc3Yy0zLjE0IDAtNS45MTEtMS4xMDgtNy45NDItMy4xNHMtMy4xNC00LjYxOC0zLjE0LTcuOTQydi01NC44NTdjMC0zLjE0IDEuMTA4LTUuOTExIDMuMTQtNy45NDJzNC42MTgtMy4xNCA3Ljk0Mi0zLjE0aDE1My42NzRjMy4xNCAwIDUuOTExIDEuMTA4IDcuOTQyIDMuMTQgMi4wMzIgMi4yMTYgMi45NTUgNC44MDIgMi45NTUgNy45NDJ6TTc4Mi4wMzggMzAwLjA1M3Y1NC44NTdjMCAzLjE0LTEuMTA4IDUuOTExLTMuMTQgNy45NDJzLTQuNjE4IDMuMTQtNy45NDIgMy4xNGgtNjUuNzU1Yy0zLjE0IDAtNS45MTEtMS4xMDgtNy45NDItMy4xNHMtMy4xNC00LjYxOC0zLjE0LTcuOTQydi01NC44NTdjMC0zLjE0IDEuMTA4LTUuOTExIDMuMTQtNy45NDJzNC42MTgtMy4xNCA3Ljk0Mi0zLjE0aDY1Ljc1NWMzLjE0IDAgNS45MTEgMS4xMDggNy45NDIgMy4xNCAyLjAzMiAyLjIxNiAzLjE0IDQuODAyIDMuMTQgNy45NDJ6TTczOC4wNzgtMTA2LjY2NmMtNDcuNjU0IDAtOTIuMzUyIDEyLjAwNi0xMzIuNjE4IDM1LjQ2M3MtNzIuNTg5IDU1Ljc4MS05Ni4yMzEgOTYuMjMxYy0yMy40NTcgNDAuMjY2LTM1LjQ2MyA4NC45NjQtMzUuNDYzIDEzMi42MThzMTIuMDA2IDkyLjM1MiAzNS40NjMgMTMyLjYxOGMyMy40NTcgNDAuMjY2IDU1Ljc4MSA3Mi41ODkgOTYuMjMxIDk2LjIzMSA0MC4yNjYgMjMuNDU3IDg0Ljk2NCAzNS40NjMgMTMyLjYxOCAzNS40NjNzOTIuMzUyLTEyLjAwNiAxMzIuNjE4LTM1LjQ2M2M0MC4yNjYtMjMuNDU3IDcyLjU4OS01NS43ODEgOTYuMjMxLTk2LjIzMXYwYzIzLjQ1Ny00MC4yNjYgMzUuNDYzLTg0Ljk2NCAzNS40NjMtMTMyLjYxOHMtMTIuMDA2LTkyLjM1Mi0zNS40NjMtMTMyLjYxOGMtMjMuNDU3LTQwLjI2Ni01NS43ODEtNzIuNTg5LTk2LjIzMS05Ni4yMzEtNDAuMjY2LTIzLjY0Mi04NC45NjQtMzUuNDYzLTEzMi42MTgtMzUuNDYzek03MzguMDc4IDQxOS45MjZjLTQ3LjI4NCAwLTkxLjYxMy0xMS44MjEtMTMxLjY5NC0zNS4wOTRzLTcyLjIxOS01NS40MTEtOTUuNDkyLTk1LjQ5MmMtMjMuMjczLTQwLjA4MS0zNS4wOTQtODQuMjI1LTM1LjA5NC0xMzEuNjk0czExLjgyMS05MS42MTMgMzUuMDk0LTEzMS42OTRjMjMuMjczLTQwLjA4MSA1NS40MTEtNzIuMjE5IDk1LjQ5Mi05NS40OTJzODQuMjI1LTM1LjA5NCAxMzEuNjk0LTM1LjA5NGM0Ny4yODQgMCA5MS42MTMgMTEuODIxIDEzMS42OTQgMzUuMDk0czcyLjIxOSA1NS40MTEgOTUuNDkyIDk1LjQ5MmMyMy4yNzMgNDAuMDgxIDM1LjA5NCA4NC4yMjUgMzUuMDk0IDEzMS42OTQgMCA0Ny4yODQtMTEuODIxIDkxLjYxMy0zNS4wOTQgMTMxLjY5NHYwYy0yMy4yNzMgNDAuMDgxLTU1LjQxMSA3Mi4yMTktOTUuNDkyIDk1LjQ5Mi00MC4wODEgMjMuMDg4LTg0LjQxIDM1LjA5NC0xMzEuNjk0IDM1LjA5NHpNODE0LjkxNS0xOC45MzJoLTE1My42NzRjLTMuNTA5IDAtNi4yOCAxLjEwOC04LjQ5NiAzLjMyNXMtMy4zMjUgNS4xNzItMy4zMjUgOC40OTZ2NTQuODU3YzAgMy41MDkgMS4xMDggNi4yOCAzLjMyNSA4LjQ5NnM1LjE3MiAzLjMyNSA4LjQ5NiAzLjMyNWgzMS45NTR2MTA3Ljg2N2gtMzEuOTU0Yy0zLjUwOSAwLTYuMjggMS4xMDgtOC40OTYgMy4zMjVzLTMuMzI1IDUuMTcyLTMuMzI1IDguNDk2djU1LjA0MmMwIDMuNTA5IDEuMTA4IDYuMjggMy4zMjUgOC40OTZzNS4xNzIgMy4zMjUgOC40OTYgMy4zMjVoMTA5LjcxNGMzLjUwOSAwIDYuMjgtMS4xMDggOC40OTYtMy4zMjVzMy4zMjUtNS4xNzIgMy4zMjUtOC40OTZ2LTE3NC41NDVoMzEuOTU0YzMuNTA5IDAgNi4yOC0xLjEwOCA4LjQ5Ni0zLjMyNXMzLjMyNS01LjE3MiAzLjMyNS04LjQ5NnYtNTQuODU3YzAtMy41MDktMS4xMDgtNi4yOC0zLjMyNS04LjQ5Ni0yLjAzMi0yLjQwMS00Ljk4Ny0zLjUwOS04LjMxMi0zLjUwOXpNNjYxLjI0MSA1Ny43MjFjLTIuOTU1IDAtNS4zNTYtMC45MjQtNy4yMDMtMi43NzFzLTIuNzcxLTQuMjQ4LTIuNzcxLTcuMjAzdi01NC44NTdjMC0yLjk1NSAwLjkyNC01LjM1NiAyLjc3MS03LjIwM3M0LjI0OC0yLjc3MSA3LjIwMy0yLjc3MWgxNTMuNjc0YzIuOTU1IDAgNS4zNTYgMC45MjQgNy4yMDMgMi43NzFzMi43NzEgNC4yNDggMi43NzEgNy4yMDN2NTQuODU3YzAgMi45NTUtMC45MjQgNS4zNTYtMi43NzEgNy4yMDNzLTQuMjQ4IDIuNzcxLTcuMjAzIDIuNzcxaC0zMy44MDF2MTc2LjU3N2MwIDIuOTU1LTAuOTI0IDUuMzU2LTIuNzcxIDcuMjAzcy00LjI0OCAyLjc3MS03LjIwMyAyLjc3MWgtMTA5LjcxNGMtMi45NTUgMC01LjM1Ni0wLjkyNC03LjIwMy0yLjc3MXMtMi43NzEtNC4yNDgtMi43NzEtNy4yMDN2LTU0Ljg1N2MwLTIuOTU1IDAuOTI0LTUuMzU2IDIuNzcxLTcuMjAzczQuMjQ4LTIuNzcxIDcuMjAzLTIuNzcxaDMzLjgwMXYtMTExLjU2MWgtMzMuOTg2ek03NzAuOTU1IDI4OC4yMzJoLTY1Ljc1NWMtMy41MDkgMC02LjI4IDEuMTA4LTguNDk2IDMuMzI1cy0zLjMyNSA1LjE3Mi0zLjMyNSA4LjQ5NnY1NC44NTdjMCAzLjUwOSAxLjEwOCA2LjI4IDMuMzI1IDguNDk2czUuMTcyIDMuMzI1IDguNDk2IDMuMzI1aDY1Ljc1NWMzLjUwOSAwIDYuMjgtMS4xMDggOC40OTYtMy4zMjVzMy4zMjUtNS4xNzIgMy4zMjUtOC40OTZ2LTU0Ljg1N2MwLTMuNTA5LTEuMTA4LTYuMjgtMy4zMjUtOC40OTZzLTQuOTg3LTMuMzI1LTguNDk2LTMuMzI1ek03MDUuMjAxIDM2NS4wNjhjLTIuOTU1IDAtNS4zNTYtMC45MjQtNy4yMDMtMi43NzFzLTIuNzcxLTQuMjQ4LTIuNzcxLTcuMjAzdi01NC44NTdjMC0yLjk1NSAwLjkyNC01LjM1NiAyLjc3MS03LjIwM3M0LjI0OC0yLjc3MSA3LjIwMy0yLjc3MWg2NS43NTVjMi45NTUgMCA1LjM1NiAwLjkyNCA3LjIwMyAyLjc3MXMyLjc3MSA0LjI0OCAyLjc3MSA3LjIwM3Y1NC44NTdjMCAyLjk1NS0wLjkyNCA1LjM1Ni0yLjc3MSA3LjIwM3MtNC4yNDggMi43NzEtNy4yMDMgMi43NzFoLTY1Ljc1NXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTM2OyIgZ2x5cGgtbmFtZT0iZWRpdCIgZGF0YS10YWdzPSJlZGl0IiBkPSJNNTY4LjMxNiA3MTcuNDYyYzUuMjQ0IDUuMjQ0IDExLjI2NiA3Ljk2NCAxOC4wNjQgNy45NjRzMTIuMDQzLTIuNzE5IDE1LjkyOC03Ljk2NGwyMjEuODItMjIxLjgyYzUuMjQ0LTQuMDc5IDcuOTY0LTkuMzIzIDcuOTY0LTE1LjkyOHMtMi43MTktMTIuNjI2LTcuOTY0LTE4LjA2NGwtNTIzLjY2Ny01MjMuNjY3LTI0My43NjktNDMuODk4Yy0xNS45MjgtMi43MTktMjkuOTEzIDEuOTQyLTQxLjk1NiAxMy45ODVzLTE2LjcwNSAyNi4wMjgtMTMuOTg1IDQxLjk1Nmw0My44OTggMjQzLjc2OSA1MjMuNjY3IDUyMy42Njd6TTE3Ni41MzYgNjkuODd2OTUuOTU0aC03MS44NjhsLTIzLjg5MS0xMjcuODA5IDYzLjkwNC02My45MDQgMTI3LjgwOSAyMy44OTF2NzEuODY4aC05NS45NTR6TTI0OC41OTkgMjM3Ljg4N2M1LjI0NC01LjI0NCAxMi4wNDMtNy45NjQgMjAuMDA3LTcuOTY0czE0LjU2OCAyLjcxOSAyMC4wMDcgNy45NjRsMzA3LjY3NCAzMDcuNjc0YzUuMjQ0IDUuMjQ0IDcuOTY0IDEyLjA0MyA3Ljk2NCAyMC4wMDdzLTIuNzE5IDE0LjU2OC03Ljk2NCAyMC4wMDdjLTUuMjQ0IDUuMjQ0LTEyLjA0MyA3Ljk2NC0yMC4wMDcgNy45NjRzLTE0LjU2OC0yLjcxOS0yMC4wMDctNy45NjRsLTMwNy42NzQtMzA3Ljg2OGMtNS4yNDQtNS4yNDQtNy45NjQtMTIuMDQzLTcuOTY0LTIwLjAwN3MyLjUyNS0xNC41NjggNy45NjQtMTkuODEyek05OTYuMDI5IDYzMy41NTFjMTguNjQ3IDE4LjY0NyAyNy45NyA0MS4zNzMgMjcuOTcgNjcuOTgzcy05LjMyMyA0OS4zMzctMjcuOTcgNjcuOTgzbC0xMTkuODQ1IDExOS44NDVjLTE4LjY0NyAxOC42NDctNDEuMzczIDI3Ljk3LTY3Ljk4MyAyNy45N3MtNDkuMzM3LTkuMzIzLTY3Ljk4My0yNy45N2wtOTIuMDY5LTkxLjg3NWMtNS4yNDQtNS4yNDQtNy45NjQtMTEuMjY2LTcuOTY0LTE4LjA2NHMyLjcxOS0xMi4wNDMgNy45NjQtMTUuOTI4bDIyMS44Mi0yMjEuODJjNC4wNzktNS4yNDQgOS4zMjMtNy45NjQgMTUuOTI4LTcuOTY0czEyLjYyNiAyLjcxOSAxOC4wNjQgNy45NjRsOTIuMDY5IDkxLjg3NXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTM3OyIgZ2x5cGgtbmFtZT0iZGV0YWlscy1hcnJvdyIgZGF0YS10YWdzPSJkZXRhaWxzLWFycm93IiBkPSJNNTEyIDkzOC42NjhsLTkwLjI0LTkwLjI0IDM1Ny4xMi0zNTcuNzZoLTc3OC44Nzl2LTEyNy45OTloNzc4Ljg3OWwtMzU3LjEyLTM1Ny43NiA5MC4yNC05MC4yNCA1MTEuOTk5IDUxMS45OTl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzODsiIGdseXBoLW5hbWU9ImNoZWNrMiIgZGF0YS10YWdzPSJjaGVjayAoMikiIGQ9Ik05MTAuMiA5MzguNjY3aC03OTYuNGMtNjIuNiAwLTExMy44LTUxLjItMTEzLjgtMTEzLjh2LTc5Ni40YzAtNjIuNiA1MS4yLTExMy44IDExMy44LTExMy44aDc5Ni40YzYyLjYgMCAxMTMuOCA1MS4yIDExMy44IDExMy44djc5Ni40YzAgNjIuNi01MS4yIDExMy44LTExMy44IDExMy44ek0zOTguMiAxNDIuMjY3bC0yODQuNCAyODQuNCA3OS42IDc5LjYgMjA0LjgtMjA0LjggNDMyLjQgNDMyLjQgNzkuNi03OS42LTUxMi01MTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzOTsiIGdseXBoLW5hbWU9InBsdXMxIiBkYXRhLXRhZ3M9InBsdXMgKDEpIiBkPSJNNTk3LjMzMyA1MTJ2NDI2LjY2N2gtMTcwLjY2N3YtNDI2LjY2N2gtNDI2LjY2N3YtMTcwLjY2N2g0MjYuNjY3di00MjYuNjY3aDE3MC42Njd2NDI2LjY2N2g0MjYuNjY3djE3MC42Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzYTsiIGdseXBoLW5hbWU9ImNsb3NlMSIgZGF0YS10YWdzPSJjbG9zZSAoMSkiIGQ9Ik0xMDI0IDgzNS41MzZsLTEwMy4xMzEgMTAzLjEzMS00MDguODY5LTQwOC44NjktNDA4Ljg2OSA0MDguODY5LTEwMy4xMzEtMTAzLjEzMSA0MDguODY5LTQwOC44NjktNDA4Ljg2OS00MDguODY5IDEwMy4xMzEtMTAzLjEzMSA0MDguODY5IDQwOC44NjkgNDA4Ljg2OS00MDguODY5IDEwMy4xMzEgMTAzLjEzMS00MDguODY5IDQwOC44Njl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzYjsiIGdseXBoLW5hbWU9Imh1Yi1pY29uMSIgZGF0YS10YWdzPSJodWItaWNvbiIgZD0iTTIzNy45IDczMC43bDM3LjQtNjVjNS40LTEwLjUgMTYuMy0xNy4xIDI4LjUtMTcuMWg2Ni40bDM5LjctNzEgOC45IDE0LjhjMy42IDYgOS42IDkuMiAyMC42IDExbDE0IDIuMy0zOS44IDcxLjEgMzEuMSA1NGM1LjMgMTAuNyA1LjMgMjEuOSAwIDMyLjZsLTAuMSAwLjMtMzcuNCA2NWMtNS40IDEwLjUtMTYuMyAxNy4xLTI4LjUgMTcuMWgtNzQuOGMtMTIuMiAwLTIzLjEtNi41LTI4LjUtMTcuMWwtMzcuNy02NS4yYy01LjMtMTAuNy01LjMtMjEuOSAwLTMyLjZsMC4yLTAuMnpNMjg3LjYgNzQ3LjJsMjYgNDcuMWg1My40bDI3LjYtNDcuMS0yNy42LTQ3LjFoLTUzLjRsLTI2IDQ3LjF6TTU5NC40IDYwMC45YzkuNy0zLjkgMTcuMi05IDIxLjMtMTQuNGw4LjgtMTEuOCA0MyA3MC40IDU4LjYtMS42YzEzLjcgMCAyNC44IDYuMSAzMC40IDE2LjlsMzkuNyA2My41YzUuMyAxMC43IDUuMyAyMS45IDAgMzIuNmwtMzUuNiA2NS4zLTAuNSAwLjhjLTUuNCA4LjEtMTYuMSAxNi4yLTI3LjkgMTYuM2wtNzMgMmMtMTMuNyAwLTI0LjgtNi4xLTMwLjQtMTYuOWwtMzkuNy02My41Yy01LjMtMTAuNy01LjMtMjEuOSAwLTMyLjZsMzIuMy01OS4yLTM4LTYzLjMgMTEtNC41ek02MzkuMiA3NDMuOWwyNy40IDQ1LjIgNTMuNS0xLjYgMjYtNDctMjcuNC00NS4yLTUzLjUgMS42LTI2IDQ3ek05NjguMSA0NTguNGwtMC4xIDAuMy0zNy4yIDY0LjZjLTEuMyAzLjEtNC40IDcuNy0xMy43IDEzLjMtNC42IDIuOC0xMC45IDYuMS0xNS4xIDYuMWgtNzQuOGMtMTIuMiAwLTIzLjEtNi41LTI4LjUtMTcuMWwtMzMuMS01Ny41LTc5LjMgMi4xIDUuNi0xNC4xYzMuMS03LjcgMy0xNS0wLjItMjQuNmwtNC4zLTEyLjggODAtMi4yIDMxLjItNTUuOWM1LjQtMTAuNiAxNi4zLTE3LjEgMjguNS0xNy4xaDc0LjljMTIuMiAwIDIzLjEgNi41IDI4LjUgMTcuMWwzNy42IDY1LjNjNS4zIDEwLjYgNS4zIDIxLjggMCAzMi41ek05MjAuMSA0NDQuMmwtMjcuNy00Ny4yaC01My40bC0yNS45IDQ3IDI3LjcgNDcuM2g1My40bDI1LjktNDcuMXpNNzcxLjEgMTkyLjljLTEwLjIgMTcuMy0yMC42IDM0LjYtMjAuNyAzNC44bC0wLjQgMC42LTAuNCAwLjVjLTYuMiA3LjctMTQuMyAxNS42LTI3LjUgMTUuNmgtNjMuNmwtMzUuNyA2My40LTkuMi0xMi4zYy00LjYtNi4xLTEyLjMtMTAuNC0yMS4yLTExLjlsLTE0LjEtMi4zIDM1LjMtNjIuOC0zMi41LTU2LjRjLTUuMy0xMC43LTUuMy0yMS45IDAtMzIuNmwwLjItMC40IDM5LjQtNjMuMWM1LjQtMTAuNCAxNi4zLTE2LjkgMjguNC0xNi45aDc0LjhjMTIuMiAwIDIzLjEgNi41IDI4LjUgMTdsMzUuMiA1OS42IDAuNSAwLjkgMC4zIDFjMC4zIDAuOSAwLjYgMS45IDEgMi45IDIuMyA2LjQgNS40IDE1LjEgMy40IDIzLTAuNCAzLjItMy44IDkuMS0yMS43IDM5LjR6TTc0MCAxNDUuOGwtMjcuNi00Ny4xaC01My41bC0yNy42IDQ3LjEgMjcuNiA0Ny4xaDUzLjVsMjcuNi00Ny4xek00MzEuNCAyODMuOWMtOS43IDMuOS0xNy4yIDktMjEuMyAxNC40bC04LjggMTEuOC00My03MC40LTYwLjUgMS42Yy0xMy43IDAtMjQuOC02LjEtMzAuNC0xNi45bC0zOS43LTYzLjRjLTUuMy0xMC43LTUuMy0yMS45IDAtMzIuNmwzNS42LTY1LjMgMC41LTAuOGM1LjQtOC4xIDE2LjEtMTYuMiAyNy45LTE2LjNsNzUtMmMxMy43IDAgMjQuOCA2LjEgMzAuNCAxNi45bDM5LjcgNjMuNGM1LjMgMTAuNyA1LjMgMjEuOSAwIDMyLjZsLTMyLjMgNTkuMiAzOCA2My4zLTExLjEgNC41ek0zODYuNiAxNDAuOWwtMjcuNC00NS4yLTUzLjUgMS42LTI2IDQ3IDI3LjQgNDUuMiA1My41LTEuNiAyNi00N3pNMjI5LjQgMzYyLjVsMzIgNTUuNiA3OS41LTIuMS00LjUgMTMuNWMtMy4yIDkuNi0zLjMgMTctMC4yIDI0LjZsNS4zIDEzLjMtNzkuOSAyLjItMzIuMiA1NmMtNS40IDEwLjUtMTYuMyAxNy4xLTI4LjUgMTcuMWgtNzQuOWMtMTIuMiAwLTIzLjEtNi41LTI4LjUtMTcuMWwtMzcuNi02NS4zYy01LjMtMTAuNy01LjMtMjEuOSAwLTMyLjZsMC4yLTAuMyAzNy4xLTYyLjVjMi45LTcuNSA5LjgtMTMuNSAxOS0xNi44IDIuNy0xLjMgNi40LTIuNyA5LjctMi43aDc0LjhjMTIuNCAwIDIzLjMgNi42IDI4LjcgMTcuMXpNMjE1IDQ0NC4ybC0yNy43LTQ3LjJoLTUzLjRsLTI1LjkgNDcgMjcuNyA0Ny4zaDUzLjRsMjUuOS00Ny4xek02MDUuNyAzMTkuOWwwLjQgMC41IDU5LjEgMTAyLjVjOC4xIDExLjMgOC4xIDI3LjIgMCAzOC41bC01OS4yIDEwMi40LTAuNCAwLjVjLTguMiAxMS0yMS4xIDE3LjgtMzMuNiAxNy44aC0xMTguMWMtMTEgMC0xOS4zLTMuMy0yNi44LTEwLjgtMi4xLTIuMS0zLjItNC4zLTMuOC01LjYtMC4xLTAuMi0wLjItMC40LTAuMy0wLjVsLTAuOC0wLjgtNTkuNS0xMDMuMWMtOC4xLTExLjMtOC4xLTI3LjIgMC0zOC41bDU4LjctMTAxLjdjNS44LTExLjIgMTktMTkgMzIuNC0xOWgxMjAuMmMxMiAwIDIyLjkgNi4yIDMxLjcgMTcuOHpNNjEzLjcgNDQ0LjFsLTUxLjMtODguNWgtMTAyLjdsLTUxLjMgODguNSA1MS4zIDg4LjVoMTAyLjdsNTEuMy04OC41eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5M2M7IiBnbHlwaC1uYW1lPSJpbmZvMSIgZGF0YS10YWdzPSJpbmZvICgxKSIgZD0iTTc0NS4xNCA1NC45NzRjLTAuNjk5IDI1LjgyNy0yMC45NDEgNDYuMDY5LTQ2Ljc2OCA0Ni43NjhoLTQ2LjA2OXY0MTguODEzYy0xLjM5NSAyNS44MjctMjEuNjM5IDQ2LjA2OS00Ni43NjggNDYuMDY5aC0yNzkuMjA5Yy0yNS44MjcgMC00Ni43NjgtMjAuOTQxLTQ3LjQ2NS00Ni43Njh2LTkyLjgzN2MwLjY5OS0yNS44MjcgMjAuOTQxLTQ2LjA2OSA0Ni43NjgtNDYuNzY4aDQ2Ljc2OHYtMjc5LjIwOWgtNDYuMDY5Yy0yNS44MjctMC42OTktNDYuMDY5LTIwLjk0MS00Ni43NjgtNDYuNzY4di05Mi44MzdjMC42OTktMjUuODI3IDIwLjk0MS00Ni4wNjkgNDYuNzY4LTQ2Ljc2OGgzNzIuMDQ1YzI1LjgyNyAwLjY5OSA0Ni4wNjkgMjAuOTQxIDQ2Ljc2OCA0Ni43Njh2OTMuNTM0ek02MzguMzQzIDkyNC43MDhjLTguMzc2IDkuMDc1LTIwLjI0MiAxMy45Ni0zMi44MDYgMTMuOTZoLTE4NS42NzNjLTI1LjgyNy0wLjY5OS00Ni4wNjktMjAuOTQxLTQ2Ljc2OC00Ni43Njh2LTEzOS42MDRjMC42OTktMjUuODI3IDIwLjk0MS00Ni4wNjkgNDYuNzY4LTQ2Ljc2OGgxODYuMzcyYzI1LjEyOSAxLjM5NSA0NS4zNzEgMjEuNjM5IDQ2LjA2OSA0Ni43Njh2MTM5LjYwNGMwIDEyLjU2NC01LjU4NCAyNC40My0xMy45NiAzMi44MDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzZDsiIGdseXBoLW5hbWU9ImV4YW1wbGVzXzIiIGRhdGEtdGFncz0iZXhhbXBsZXNfMiIgZD0iTTQ1MS4yIDc2Ny45OTZsMzAuNCA2NC4wMDEgNjAuOCAzMi4wMDEtNjAuOCAzMi4wMDEtMzAuNCA2NC4wMDEtMzAuNC02NC4wMDEtNjAuOC0zMi4wMDEgNjAuOC0zMi4wMDF6TTE3Ny42IDYzOS45OTRsNTAuNjU0IDEwNi42NjIgMTAxLjM0NiA1My4zNDEtMTAxLjM0NiA1My4zNDEtNTAuNjU0IDEwNi42NjItNTAuNjU0LTEwNi42NjItMTAxLjM0Ni01My4zNDEgMTAxLjM0Ni01My4zNDF6TTg0Ni40IDM4My45ODhsLTUwLjY1NC0xMDYuNjYyLTEwMS4zNDYtNTMuMzQxIDEwMS4zNDYtNTMuMzQxIDUwLjY1NC0xMDYuNjYyIDUwLjY1NCAxMDYuNjYyIDEwMS4zNDYgNTMuMzQxLTEwMS4zNDYgNTMuMzQxek05ODAuNTc5IDc3MS41MzZsLTE2MS4yMTUgMTY5LjcwNGMtMTEuODU2IDEyLjUyLTI3LjQxNyAxOC43Ni00Mi45NzggMTguNzZzLTMxLjEyMi02LjI0LTQyLjk5Ny0xOC43NmwtNjg5Ljk2Ni03MjYuMjk0Yy0yMy43NS0yNS0yMy43NS02NS41MjEgMC05MC41MDJsMTYxLjIxNS0xNjkuNzA0YzExLjg3NS0xMi41IDI3LjQzNi0xOC43NCA0Mi45NzgtMTguNzQgMTUuNTYxIDAgMzEuMTIyIDYuMjQgNDIuOTk3IDE4Ljc0bDY4OS45NjYgNzI2LjMxNGMyMy43NSAyNC45NjEgMjMuNzUgNjUuNTAxIDAgOTAuNDgyek03MDguNTU1IDU1My4wNzJsLTk2LjcyOSAxMDEuODIyIDE2NC41NCAxNzMuMjA0IDk2LjcyOS0xMDEuODIyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5M2U7IiBnbHlwaC1uYW1lPSJ0dXRvcmlhbHNfMiIgZGF0YS10YWdzPSJ0dXRvcmlhbHNfMiIgZD0iTTQ2Ny4xNyA2ODAuMDQxYy0xMTguNjU3IDc1Ljk5My0zMTAuODU0IDk2Ljg3NC00MDcuNTcyIDEwMi42MjgtMzIuNDk5IDEuOTI1LTU5LjU5OS0yMy45NzgtNTkuNTk5LTU2LjY4MXYtNDY2LjE2N2MwLTI5Ljk4MyAyMy4xOC01NC45ODYgNTIuOTc5LTU2LjU5NyA4Ny4zMTktNC43OTEgMjYzLjk3NS0yMi4zNDYgMzg2LjA3Mi04Ni42ODQgMTguNzQtOS44NzYgNDAuOTU5IDMuNTc4IDQwLjk1OSAyNC44MzZ2NTE0LjY4OGMtMC4wMjAgOS43NzEtNC42NCAxOC43MjYtMTIuODQgMjMuOTc4ek05NjQuMzgxIDc4Mi42NjljLTk2LjY5OC01LjczMy0yODguOTE0LTI2LjYzNS00MDcuNTUyLTEwMi42MjgtOC4yLTUuMjUyLTEyLjgyLTE0LjU2Mi0xMi44Mi0yNC4zMzR2LTUxNC4yNjljMC0yMS4zMjEgMjIuMjc5LTM0Ljc5NSA0MS4wNzktMjQuODk4IDEyMi4wNzggNjQuMjc2IDI5OC42MzQgODEuODMgMzg1LjkzMiA4Ni42MjIgMjkuOCAxLjYzMiA1Mi45NzkgMjYuNjM1IDUyLjk3OSA1Ni42MTh2NDY2LjIwOGMtMC4wMjAgMzIuNzAzLTI3LjEyIDU4LjYwNi01OS42MTkgNTYuNjgxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5OTE7IiBnbHlwaC1uYW1lPSJkcmFnLWFuZC1kcm9wIiBkYXRhLXRhZ3M9ImRyYWctYW5kLWRyb3AiIGQ9Ik02MjYuNDc2IDI4MC4yMDloLTM5NC4wMTVjLTQyLjU5NiAwLTc5Ljg2NyAzNy4yNzEtNzkuODY3IDc5Ljg2N3YyODcuNTIzYzAgNDIuNTk2IDM3LjI3MSA3OS44NjcgNzkuODY3IDc5Ljg2N2gzODguNjljNDIuNTk2IDAgNzkuODY3LTM3LjI3MSA3OS44NjctNzkuODY3djAtMjg3LjUyM2M1LjMyNi00Ny45MjItMzEuOTQ4LTc5Ljg2Ny03NC41NDQtNzkuODY3ek0yMzIuNDY0IDY3OS41NDdjLTE1Ljk3NCAwLTMxLjk0OC0xNS45NzQtMzEuOTQ4LTMxLjk0OHYwLTI4Ny41MjNjMC0xNS45NzQgMTUuOTc0LTMxLjk0OCAzMS45NDgtMzEuOTQ4aDM4OC42OWMxNS45NzQgMCAzMS45NDggMTUuOTc0IDMxLjk0OCAzMS45NDh2Mjg3LjUyM2MwIDE1Ljk3NC0xNS45NzQgMzEuOTQ4LTMxLjk0OCAzMS45NDhoLTM4OC42OXpNNzM4LjI5MSA4My4yMDFoLTY5LjIxOXY0Ny45MjJoNjkuMjE5di00Ny45MjJ6TTU5NC41MjggODMuMjAxaC02OS4yMTl2NDcuOTIyaDY5LjIxOXYtNDcuOTIyek00NTAuNzY4IDgzLjIwMWgtNTMuMjQ1Yy0xMC42NDggMC0yMS4yOTcgMC0yNi42MjIgNS4zMjZsMTUuOTc0IDQ3LjkyMmM1LjMyNiAwIDUuMzI2IDAgMTAuNjQ4IDBoNTMuMjQ1di01My4yNDV6TTgxOC4xNTggODguNTI3bC0xNS45NzQgNDcuOTIyYzE1Ljk3NCA1LjMyNiAyMS4yOTcgMTUuOTc0IDIxLjI5NyAzMS45NDhoNDcuOTIyYzAtMzcuMjcxLTIxLjI5Ny02OS4yMTktNTMuMjQ1LTc5Ljg2N3pNMzcwLjkwMSAxNjguMzk0aC00Ny45MjJ2NjkuMjE5aDQ3LjkyMnYtNjkuMjE5ek04NzEuNDA2IDIzNy42MTNoLTQ3LjkyMnY2OS4yMTloNDcuOTIydi02OS4yMTl6TTg3MS40MDYgMzgxLjM3NmgtNDcuOTIydjY5LjIxOWg0Ny45MjJ2LTY5LjIxOXpNODAyLjE4NyA0ODcuODY1Yy01LjMyNiAwLTUuMzI2IDAtMTAuNjQ4IDBoLTUzLjI0NXY0Ny45MjJoNTMuMjQ1YzEwLjY0OCAwIDIxLjI5NyAwIDI2LjYyMi01LjMyNmwtMTUuOTc0LTQyLjU5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTkyOyIgZ2x5cGgtbmFtZT0ic3VtbWFyeSIgZGF0YS10YWdzPSJzdW1tYXJ5IiBkPSJNODcxLjQxNSA3NDAuMTNoLTcxOC44MjRjLTE0LjQxNyAwLTI2LjM3LTExLjk1NC0yNi4zNy0yNi4zN3YtNTIuNzQ1YzAtMTQuNDE3IDExLjk1NC0yNi4zNyAyNi4zNy0yNi4zN2g3MTguODI0YzE0LjQxNyAwIDI2LjM3IDExLjk1NCAyNi4zNyAyNi4zN3Y1Mi43NDVjMCAxNC40Mi0xMS45NTQgMjYuMzctMjYuMzcgMjYuMzd6TTg3MS40MTUgNTcwLjM1MmgtNTU4LjEyYy0xNC40MTcgMC0yNi4zNy0xMS45NTQtMjYuMzctMjYuMzd2LTUyLjc0NWMwLTE0LjQxNyAxMS45NTQtMjYuMzcgMjYuMzctMjYuMzdoNTU4LjEyYzE0LjQxNyAwIDI2LjM3IDExLjk1NCAyNi4zNyAyNi4zN3Y1Mi43NDVjMCAxNC40MTctMTEuOTU0IDI2LjM3LTI2LjM3IDI2LjM3ek04NzEuNDE1IDM3My4xODhoLTU1OC4xMmMtMTQuNDE3IDAtMjYuMzctMTEuOTU0LTI2LjM3LTI2LjM3di01Mi43NDVjMC0xNC40MTcgMTEuOTU0LTI2LjM3IDI2LjM3LTI2LjM3aDU1OC4xMmMxNC40MTcgMCAyNi4zNyAxMS45NTQgMjYuMzcgMjYuMzd2NTIuNzQ1YzAgMTQuNDItMTEuOTU0IDI2LjM3LTI2LjM3IDI2LjM3ek04NzEuNDE1IDE3Ni4wMjRoLTU1OC4xMmMtMTQuNDE3IDAtMjYuMzctMTEuOTU0LTI2LjM3LTI2LjM3di01Mi43NDVjMC0xNC40MTcgMTEuOTU0LTI2LjM3IDI2LjM3LTI2LjM3aDU1OC4xMmMxNC40MTcgMCAyNi4zNyAxMS45NTQgMjYuMzcgMjYuMzd2NTIuNzQ1YzAgMTQuNDItMTEuOTU0IDI2LjM3LTI2LjM3IDI2LjM3ek0yMDEuNzkyIDU3MC4zNTJoLTQ5LjIwN2MtMTQuNDE3IDAtMjYuMzctMTEuOTU0LTI2LjM3LTI2LjM3di01Mi43NDVjMC0xNC40MTcgMTEuOTU0LTI2LjM3IDI2LjM3LTI2LjM3aDQ5LjIwN2MxNC40MTcgMCAyNi4zNyAxMS45NTQgMjYuMzcgMjYuMzd2NTIuNzQ1YzAgMTQuNDE3LTExLjk1NCAyNi4zNy0yNi4zNyAyNi4zN3pNMjAxLjc5MiAzNzMuMTg4aC00OS4yMDdjLTE0LjQxNyAwLTI2LjM3LTExLjk1NC0yNi4zNy0yNi4zN3YtNTIuNzQ1YzAtMTQuNDE3IDExLjk1NC0yNi4zNyAyNi4zNy0yNi4zN2g0OS4yMDdjMTQuNDE3IDAgMjYuMzcgMTEuOTU0IDI2LjM3IDI2LjM3djUyLjc0NWMwIDE0LjQyLTExLjk1NCAyNi4zNy0yNi4zNyAyNi4zN3pNMjAxLjc5MiAxNzYuMDI0aC00OS4yMDdjLTE0LjQxNyAwLTI2LjM3LTExLjk1NC0yNi4zNy0yNi4zN3YtNTIuNzQ1YzAtMTQuNDE3IDExLjk1NC0yNi4zNyAyNi4zNy0yNi4zN2g0OS4yMDdjMTQuNDE3IDAgMjYuMzcgMTEuOTU0IDI2LjM3IDI2LjM3djUyLjc0NWMwIDE0LjQyLTExLjk1NCAyNi4zNy0yNi4zNyAyNi4zN3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTkzOyIgZ2x5cGgtbmFtZT0ic2luZ2xlLWNob2ljZS1zZXQiIGRhdGEtdGFncz0ic2luZ2xlLWNob2ljZS1zZXQiIGQ9Ik04MjAuMjUgNDY0LjI2NmgtNDE0Ljc1OGMtMTUuOTY2IDAtMjkuMTk3LTEzLjIzMS0yOS4xOTctMjkuMTk3di01OC4zODljMC0xNS45NjYgMTMuMjMxLTI5LjE5NyAyOS4xOTctMjkuMTk3aDQxNC43NThjMTUuOTY2IDAgMjkuMTk3IDEzLjIzMSAyOS4xOTcgMjkuMTk3djU4LjM4OWMwLjAwMSAxNS45NjYtMTMuMjMxIDI5LjE5Ny0yOS4xOTcgMjkuMTk3ek04OTQuMzc5IDIzMS4xNmgtNDg4Ljg4N2MtMTUuOTY2IDAtMjkuMTk3LTEzLjIzMS0yOS4xOTctMjkuMTk3di01OC4zODljMC0xNS45NjYgMTMuMjMxLTI5LjE5NyAyOS4xOTctMjkuMTk3aDQ4OC44ODdjMTUuOTY2IDAgMjkuMTk3IDEzLjIzMSAyOS4xOTcgMjkuMTk3djU4LjM4OWMwIDE1Ljk2NC0xMy4yMzEgMjkuMTk3LTI5LjE5NyAyOS4xOTd6TTkwOS4yMTEgNjk3LjM2NmgtNTAzLjcxOGMtMTUuOTY2IDAtMjkuMTk3LTEzLjIzMS0yOS4xOTctMjkuMTk3di01OC4zODljMC0xNS45NjYgMTMuMjMxLTI5LjE5NyAyOS4xOTctMjkuMTk3aDUwMy43MThjMTUuOTY2IDAgMjkuMTk3IDEzLjIzMSAyOS4xOTcgMjkuMTk3djU4LjM4OWMwIDE1Ljk2Ni0xMy4yMzEgMjkuMTk3LTI5LjE5NyAyOS4xOTd6TTE4OS43MTcgNzA1LjkyMWMzNi45NjkgMCA2Ni45MzktMjkuOTY5IDY2LjkzOS02Ni45MzlzLTI5Ljk2OS02Ni45MzktNjYuOTM5LTY2LjkzOWMtMzYuOTY5IDAtNjYuOTM5IDI5Ljk2OS02Ni45MzkgNjYuOTM5czI5Ljk2OSA2Ni45MzkgNjYuOTM5IDY2LjkzOXpNMTg5LjcxNyA3MzYuMzI3Yy01My42ODEgMC05Ny4zNTktNDMuNjc4LTk3LjM1OS05Ny4zNTlzNDMuNjc4LTk3LjM1OSA5Ny4zNTktOTcuMzU5YzUzLjY4MSAwIDk3LjM1OSA0My42NzggOTcuMzU5IDk3LjM1OXMtNDMuNjc4IDk3LjM1OS05Ny4zNTkgOTcuMzU5djB6TTE4OS43MTcgMjM4LjY0OGMzNi45NjkgMCA2Ni45MzktMjkuOTY5IDY2LjkzOS02Ni45MzlzLTI5Ljk2OS02Ni45MzktNjYuOTM5LTY2LjkzOWMtMzYuOTY5IDAtNjYuOTM5IDI5Ljk2OS02Ni45MzkgNjYuOTM5czI5Ljk2OSA2Ni45MzkgNjYuOTM5IDY2LjkzOXpNMTg5LjcxNyAyNjkuMDYwYy01My42ODEgMC05Ny4zNTktNDMuNjc4LTk3LjM1OS05Ny4zNTlzNDMuNjc4LTk3LjM1OSA5Ny4zNTktOTcuMzU5YzUzLjY4MSAwIDk3LjM1OSA0My42NzggOTcuMzU5IDk3LjM1OXMtNDMuNjc4IDk3LjM1OS05Ny4zNTkgOTcuMzU5djB6TTI5My44NTQgNDA2LjcyMmMwLTU3LjUxLTQ2LjYyMS0xMDQuMTMxLTEwNC4xMzEtMTA0LjEzMXMtMTA0LjEzMSA0Ni42MjEtMTA0LjEzMSAxMDQuMTMxYzAgNTcuNTEgNDYuNjIxIDEwNC4xMzEgMTA0LjEzMSAxMDQuMTMxczEwNC4xMzEtNDYuNjIxIDEwNC4xMzEtMTA0LjEzMXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTk0OyIgZ2x5cGgtbmFtZT0iZmlsbC1pbi10aGUtYmxhbmtzIiBkYXRhLXRhZ3M9ImZpbGwtaW4tdGhlLWJsYW5rcyIgZD0iTTg5MS45NDUgMjM4LjgxaC0xNjEuNzE5Yy0xNi42MjUgMC0zMC40MS0xMy43NzgtMzAuNDEtMzAuNDF2LTYwLjgxYzAtMTYuNjI1IDEzLjc3OC0zMC40MSAzMC40MS0zMC40MWgxNjEuNzE5YzE2LjYyNSAwIDMwLjQxIDEzLjc3OCAzMC40MSAzMC40MXY2MC44MWMtMC4wMDEgMTYuNjI1LTEzLjc3OCAzMC40MS0zMC40MSAzMC40MXpNNDA4Ljg5NSA0NjYuMTM4aC0yODIuNDExYy0xNi42MjUgMC0zMC40MS0xMy43NzgtMzAuNDEtMzAuNDF2LTYwLjgxYzAtMTYuNjI1IDEzLjc3OC0zMC40MSAzMC40MS0zMC40MWgyODIuNDExYzE2LjYyNSAwIDMwLjQxIDEzLjc3OCAzMC40MSAzMC40MXY2MC44MWMtMC4wMDEgMTYuNjI3LTEzLjc3OCAzMC40MS0zMC40MSAzMC40MXpNODY0LjM0NiA0NjYuMTM4YzE2LjYyNSAwIDMwLjQxLTEzLjc3OCAzMC40MS0zMC40MXYtNjAuODFjMC0xNi42MjUtMTMuNzc4LTMwLjQxLTMwLjQxLTMwLjQxaC0zMjMuODgyYy0xNi42MjUgMC0zMC40MDggMTMuNzc4LTMwLjQwOCAzMC40MXY2MC44MWMwIDE2LjYyNSAxMy43NzggMzAuNDEgMzAuNDA4IDMwLjQxaDMyMy44ODJ6TTg2NC4zNDYgNDk5LjMyMWgtMzIzLjg4MmMtMzUuMDU4IDAtNjMuNTc5LTI4LjUyLTYzLjU3OS02My41OHYtNjAuODFjMC0zNS4wNTggMjguNTItNjMuNTggNjMuNTc5LTYzLjU4aDMyMy44ODJjMzUuMDU4IDAgNjMuNTggMjguNTIgNjMuNTggNjMuNTh2NjAuODFjLTAuMDAxIDM1LjA1OC0yOC41MjQgNjMuNTgtNjMuNTggNjMuNTh2MHpNNjA0LjQ0NyAyMzguODFjMTYuNjI1IDAgMzAuNDA4LTEzLjc3OCAzMC40MDgtMzAuNDF2LTYwLjgxYzAtMTYuNjI1LTEzLjc3OC0zMC40MS0zMC40MDgtMzAuNDFoLTI2OC41OGMtMTYuNjI1IDAtMzAuNDA4IDEzLjc3OC0zMC40MDggMzAuNDF2NjAuODFjMCAxNi42MjUgMTMuNzc4IDMwLjQxIDMwLjQwOCAzMC40MWgyNjguNTh6TTYwNC40NDcgMjcxLjk4NWgtMjY4LjU4Yy0zNS4wNTggMC02My41NzktMjguNTItNjMuNTc5LTYzLjU4di02MC44MWMwLTM1LjA1OCAyOC41Mi02My41OCA2My41NzktNjMuNThoMjY4LjU4YzM1LjA1OCAwIDYzLjU3OSAyOC41MiA2My41NzkgNjMuNTh2NjAuODFjMCAzNS4wNTgtMjguNTIgNjMuNTgtNjMuNTc5IDYzLjU4djB6TTU5Mi4wMTQgNjkzLjQ3MmMxNi42MjUgMCAzMC40MDgtMTMuNzc4IDMwLjQwOC0zMC40MXYtNjAuODFjMC0xNi42MjUtMTMuNzc4LTMwLjQxLTMwLjQwOC0zMC40MWgtMTQ0LjE2OGMtMTYuNjI1IDAtMzAuNDEgMTMuNzc4LTMwLjQxIDMwLjQxdjYwLjgxYzAgMTYuNjI1IDEzLjc3OCAzMC40MSAzMC40MSAzMC40MWgxNDQuMTY4ek01OTIuMDE0IDcyNi42NTNoLTE0NC4xNjhjLTM1LjA1OCAwLTYzLjU4LTI4LjUyLTYzLjU4LTYzLjU4di02MC44MWMwLTM1LjA1OCAyOC41Mi02My41OCA2My41OC02My41OGgxNDQuMTY4YzM1LjA1OCAwIDYzLjU3OSAyOC41MiA2My41NzkgNjMuNTh2NjAuODFjMCAzNS4wNTgtMjguNTIgNjMuNTgtNjMuNTc5IDYzLjU4djB6TTEyNi40ODggNTcxLjg0OGgxODAuMzI5YzE2LjYyNSAwIDMwLjQxIDEzLjc3OCAzMC40MSAzMC40MXY2MC44MWMwIDE2LjYyNS0xMy43NzggMzAuNDEtMzAuNDEgMzAuNDFoLTE4MC4zMjljLTE2LjYyNSAwLTMwLjQxLTEzLjc3OC0zMC40MS0zMC40MXYtNjAuODFjMC0xNi42MjcgMTMuNzc4LTMwLjQxIDMwLjQxLTMwLjQxek03MjUuMzk3IDU3MS44NDhoMTY3Ljk3OWMxNi42MjUgMCAzMC40MSAxMy43NzggMzAuNDEgMzAuNDF2NjAuODFjMCAxNi42MjUtMTMuNzc4IDMwLjQxLTMwLjQxIDMwLjQxaC0xNjcuOTc5Yy0xNi42MjUgMC0zMC40MS0xMy43NzgtMzAuNDEtMzAuNDF2LTYwLjgxYzAtMTYuNjI3IDEzLjc3OC0zMC40MSAzMC40MS0zMC40MXpNMTI2LjQ4OCAxMTcuMTc5aDgwLjE2MWMxNi42MjUgMCAzMC40MSAxMy43NzggMzAuNDEgMzAuNDF2NjAuODFjMCAxNi42MjUtMTMuNzc4IDMwLjQxLTMwLjQxIDMwLjQxaC04MC4xNjFjLTE2LjYyNSAwLTMwLjQxLTEzLjc3OC0zMC40MS0zMC40MXYtNjAuODFjMC0xNi42MjcgMTMuNzc4LTMwLjQxIDMwLjQxLTMwLjQxeiIgLz4KPC9mb250PjwvZGVmcz48L3N2Zz4=') format('svg');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'h5p-hub-publish';
  src: url('data:application/vnd.ms-fontobject;base64,mAoAAPQJAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAq8TIhwAAAAAAAAAAAAAAAAAAAAAAAA4AaAA1AHAALQBoAHUAYgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAzAAAADgBoADUAcAAtAGgAdQBiAAAAAAAAAQAAAAsAgAADADBPUy8yDxIGDgAAALwAAABgY21hcBdW0pIAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmGSvF1AAAAXgAAAX0aGVhZBid1HIAAAdsAAAANmhoZWEHwgPRAAAHpAAAACRobXR4NgABeAAAB8gAAABAbG9jYQqaCQAAAAgIAAAAIm1heHAAFABfAAAILAAAACBuYW1lOpEVUwAACEwAAAGGcG9zdAADAAAAAAnUAAAAIAADA9kBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkLA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpC//9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAACxA+8C4AAYAAABLgEjISIGBxQWFwEeATc2MDcBPgEnJiI1A+0JGAz8gBolAQoJAcASMxMBAQHAEgISAQECzQkKJRoNGAn+QBMBEgEBAcASMxMBAQACARf/wALpA8AAHwAzAAAlNCYrAREuASMhIgYdARQWOwERIyIGHQEUFhchPgE9AQMuASsBDgEHFR4BOwE+AT0BNCYnAukbFC4BGxL+6BMcGxQuLhMbGxMBdBQbawYRCboUGgEBGhS6ExsHB0wUGwGjExsbFF0TG/7oGxNdFBoBARoUXQNmBwcBGhSLFBsBGxOLChEGAAAAAAEAG//YA+UDqAAxAAABNiYnASYiBzAUMQcGFBcUMjEXISIGBw4BFxUGFhceATMhBw4BFzAyMRcWMjcBPgE1MQPlAQ0N/lQZRRkyGRgBwf4wEB0LCwsBAQsLCx0QAdDBGQEZATEZRRkBrQwNAb8QIAsBrRkYATEZRRgBwg0MDB8RVBAfDA0MvxhGGTIYGAGuCx4QAAABABIASwQAAzUAJgAAATQmLwEmIgc4ASMBJyYiBzgBFQcGFBc4ARcBFjI3OAExAT4BNTEHA/0JCVoSNBMB/lDBEzQTWRMSAQFHEzQTAjoJCQMCrwwXCVoSEv5PwhMSAVkTNBIB/rgSEgI6CRcNAwAAAQAA/8AEAAPAAAsAAAEnCQEHCQEXCQE3AQQAZ/5n/mdnAZn+Z2cBmQGZZ/5nA1ln/mcBmWf+Z/5nZwGZ/mdnAZkAAAABAAD/wAQAA8AACwAAAREjESEVIREzESE1AlWq/lUBq6oBqwIVAav+Var+VQGrqgADACz/wAPUA8AAHgA9AFwAABM1NCYrASIGHQEOARUUFhcTFBY7ATI2NRE+ATU0JicBETQmKwEiBhURDgEVFBYfARQWOwEyNj0BPgE1NCYnJTQmLwE0JisBIgYdAQ4BFRQWFxMUFjsBMjY1ET4BNdoQDAgMEC8/Pi8BEAwICxA0RkU0AUwQCwULEDZHRzUBEAsFCxAyQ0IyAa1DMgEQCwYMECs5OSoBEAwEDBAyRQNDYgsQEAtiC0wzMkwL/a8LEBALAk0HTzU2Tgj+XwIDCxAQC/3+CVM3OFIJoAsQEAugC1E1NVEMszRNB8oLEBALzQ1JLy9IDf4MCxAQCwHwB000AAAAAAEAAAB7BAADBQAkAAABJy4BIyIGBwkBLgEjIgYPAQ4BFRQWFwEeATMyNjcBPgE1NCYnA+QsDSMTFCMN/tH+zg0jExQjDS0NDw8NAZ8NIhQUIw0Bog0PDw0CvSsNDg4N/tEBMQwPDwwtDSMUEyMN/mENDw8NAZ8NIxMUIw0AAAAAAgAA/8AEAAPAAAMAEwAAAREhESUhIgYVERQWMyEyNjURNCYDjvzkAxz85C9DQy8DHC9DQwNO/OQDHHJDL/zkL0NDLwMcL0MAAgAA/8AEAAPAAA8AFgAAASEiBhURFBYzITI2NRE0JgkBNxcBFwEDjvzkL0NDLwMcL0ND/dH+5E/NAbFP/gADwEMv/OQvQ0MvAxwvQ/zkARxQzQGwT/4AAAEAAP/ABAADwAAIAAABBwEhFSEBFwECAFoBZfz1Awv+m1oCAAPAWv6agP6aWgIAAAEACP/NBAADvQBQAAABNiYnJicuAScmJxUeARcWFx4BBwYHDgEHBiInLgEnJicmNjc2Nz4BNzUGBw4BBwYHBgcOARcWFxYXHgEXFhcWFxYyNzY3Njc+ATc2Nz4BNTEEAAEdHRwoKGE4OD1AcCkiFRUOBgYVHWhFRplHRGkdFAcGDxUVISlwQD05OGMoKB0aDg4FCgoWExwcRSopLjAyMmYyMjAuKSlGGxwTFBUBwD55ODYuLkUXFwmHDUMzKS8vZTM0MEVpHB4eHGlFMDQzZS8vKTNDDYcJFhdFLi43MzY3bzg3NS4qKUUcGxMVCgoKChUTGxxFKSkuL2MzAAEAAAABTM2HyMSrXw889QALBAAAAAAA2r8hlAAAAADavyGUAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAABAEAAAAAAAAAAAAAAACAAAABAAAAAQAARcEAAAbBAAAEgQAAAAEAAAABAAALAQAAAAEAAAABAAAAAQAAAAEAAAIAAAAAAAKABQAHgBKAJYA4AEYAToBUgHUAhQCOAJkAnwC+gAAAAEAAAAQAF0AAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAK4AAQAAAAAAAwAHAIQAAQAAAAAABAAHAMMAAQAAAAAABQALAGMAAQAAAAAABgAHAJkAAQAAAAAACgAaABUAAwABBAkAAQAOAAcAAwABBAkAAgAOALUAAwABBAkAAwAOAIsAAwABBAkABAAOAMoAAwABBAkABQAWAG4AAwABBAkABgAOAKAAAwABBAkACgA0AC9oNXAtaHViAGgANQBwAC0AaAB1AGJGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5WZXJzaW9uIDEuMwBWAGUAcgBzAGkAbwBuACAAMQAuADNoNXAtaHViAGgANQBwAC0AaAB1AGJoNXAtaHViAGgANQBwAC0AaAB1AGJSZWd1bGFyAFIAZQBnAHUAbABhAHJoNXAtaHViAGgANQBwAC0AaAB1AGIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  src: url('data:application/vnd.ms-fontobject;base64,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') format('embedded-opentype'),
  url('data:font/ttf;base64,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') format('truetype'),
  url('data:font/woff;base64,d09GRgABAAAAAApAAAsAAAAACfQAAQADAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIGDmNtYXAAAAFoAAAAVAAAAFQXVtKSZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAABfQAAAX0GSvF1GhlYWQAAAe4AAAANgAAADYYndRyaGhlYQAAB/AAAAAkAAAAJAfCA9FobXR4AAAIFAAAAEAAAABANgABeGxvY2EAAAhUAAAAIgAAACIKmgkAbWF4cAAACHgAAAAgAAAAIAAUAF9uYW1lAAAImAAAAYYAAAGGOpEVU3Bvc3QAAAogAAAAIAAAACAAAwAAAAMD2QGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QsDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkL//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAALED7wLgABgAAAEuASMhIgYHFBYXAR4BNzYwNwE+AScmIjUD7QkYDPyAGiUBCgkBwBIzEwEBAcASAhIBAQLNCQolGg0YCf5AEwESAQEBwBIzEwEBAAIBF//AAukDwAAfADMAACU0JisBES4BIyEiBh0BFBY7AREjIgYdARQWFyE+AT0BAy4BKwEOAQcVHgE7AT4BPQE0JicC6RsULgEbEv7oExwbFC4uExsbEwF0FBtrBhEJuhQaAQEaFLoTGwcHTBQbAaMTGxsUXRMb/ugbE10UGgEBGhRdA2YHBwEaFIsUGwEbE4sKEQYAAAAAAQAb/9gD5QOoADEAAAE2JicBJiIHMBQxBwYUFxQyMRchIgYHDgEXFQYWFx4BMyEHDgEXMDIxFxYyNwE+ATUxA+UBDQ3+VBlFGTIZGAHB/jAQHQsLCwEBCwsLHRAB0MEZARkBMRlFGQGtDA0BvxAgCwGtGRgBMRlFGAHCDQwMHxFUEB8MDQy/GEYZMhgYAa4LHhAAAAEAEgBLBAADNQAmAAABNCYvASYiBzgBIwEnJiIHOAEVBwYUFzgBFwEWMjc4ATEBPgE1MQcD/QkJWhI0EwH+UMETNBNZExIBAUcTNBMCOgkJAwKvDBcJWhIS/k/CExIBWRM0EgH+uBISAjoJFw0DAAABAAD/wAQAA8AACwAAAScJAQcJARcJATcBBABn/mf+Z2cBmf5nZwGZAZln/mcDWWf+ZwGZZ/5n/mdnAZn+Z2cBmQAAAAEAAP/ABAADwAALAAABESMRIRUhETMRITUCVar+VQGrqgGrAhUBq/5Vqv5VAauqAAMALP/AA9QDwAAeAD0AXAAAEzU0JisBIgYdAQ4BFRQWFxMUFjsBMjY1ET4BNTQmJwERNCYrASIGFREOARUUFh8BFBY7ATI2PQE+ATU0JiclNCYvATQmKwEiBh0BDgEVFBYXExQWOwEyNjURPgE12hAMCAwQLz8+LwEQDAgLEDRGRTQBTBALBQsQNkdHNQEQCwULEDJDQjIBrUMyARALBgwQKzk5KgEQDAQMEDJFA0NiCxAQC2ILTDMyTAv9rwsQEAsCTQdPNTZOCP5fAgMLEBAL/f4JUzc4UgmgCxAQC6ALUTU1UQyzNE0HygsQEAvNDUkvL0gN/gwLEBALAfAHTTQAAAAAAQAAAHsEAAMFACQAAAEnLgEjIgYHCQEuASMiBg8BDgEVFBYXAR4BMzI2NwE+ATU0JicD5CwNIxMUIw3+0f7ODSMTFCMNLQ0PDw0Bnw0iFBQjDQGiDQ8PDQK9Kw0ODg3+0QExDA8PDC0NIxQTIw3+YQ0PDw0Bnw0jExQjDQAAAAACAAD/wAQAA8AAAwATAAABESERJSEiBhURFBYzITI2NRE0JgOO/OQDHPzkL0NDLwMcL0NDA0785AMcckMv/OQvQ0MvAxwvQwACAAD/wAQAA8AADwAWAAABISIGFREUFjMhMjY1ETQmCQE3FwEXAQOO/OQvQ0MvAxwvQ0P90f7kT80BsU/+AAPAQy/85C9DQy8DHC9D/OQBHFDNAbBP/gAAAQAA/8AEAAPAAAgAAAEHASEVIQEXAQIAWgFl/PUDC/6bWgIAA8Ba/pqA/ppaAgAAAQAI/80EAAO9AFAAAAE2JicmJy4BJyYnFR4BFxYXHgEHBgcOAQcGIicuAScmJyY2NzY3PgE3NQYHDgEHBgcGBw4BFxYXFhceARcWFxYXFjI3Njc2Nz4BNzY3PgE1MQQAAR0dHCgoYTg4PUBwKSIVFQ4GBhUdaEVGmUdEaR0UBwYPFRUhKXBAPTk4YygoHRoODgUKChYTHBxFKikuMDIyZjIyMC4pKUYbHBMUFQHAPnk4Ni4uRRcXCYcNQzMpLy9lMzQwRWkcHh4caUUwNDNlLy8pM0MNhwkWF0UuLjczNjdvODc1LiopRRwbExUKCgoKFRMbHEUpKS4vYzMAAQAAAAFMzYfIxKtfDzz1AAsEAAAAAADavyGUAAAAANq/IZQAAP/ABAADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAAEAAABAAAAAAAAAAAAAAAAAAAAEAQAAAAAAAAAAAAAAAIAAAAEAAAABAABFwQAABsEAAASBAAAAAQAAAAEAAAsBAAAAAQAAAAEAAAABAAAAAQAAAgAAAAAAAoAFAAeAEoAlgDgARgBOgFSAdQCFAI4AmQCfAL6AAAAAQAAABAAXQADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcArgABAAAAAAADAAcAhAABAAAAAAAEAAcAwwABAAAAAAAFAAsAYwABAAAAAAAGAAcAmQABAAAAAAAKABoAFQADAAEECQABAA4ABwADAAEECQACAA4AtQADAAEECQADAA4AiwADAAEECQAEAA4AygADAAEECQAFABYAbgADAAEECQAGAA4AoAADAAEECQAKADQAL2g1cC1odWIAaAA1AHAALQBoAHUAYkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALlZlcnNpb24gMS4zAFYAZQByAHMAaQBvAG4AIAAxAC4AM2g1cC1odWIAaAA1AHAALQBoAHUAYmg1cC1odWIAaAA1AHAALQBoAHUAYlJlZ3VsYXIAUgBlAGcAdQBsAGEAcmg1cC1odWIAaAA1AHAALQBoAHUAYgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=') format('woff'),
  url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWh1YiIsCgkiZGVzY3JpcHRpb24iOiAiRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4iLAoJIm1ham9yVmVyc2lvbiI6IDEsCgkibWlub3JWZXJzaW9uIjogMywKCSJ2ZXJzaW9uIjogIlZlcnNpb24gMS4zIiwKCSJmb250SWQiOiAiaDVwLWh1YiIsCgkicHNOYW1lIjogImg1cC1odWIiLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtaHViIgp9Cl1dPgo8L2pzb24+CjwvbWV0YWRhdGE+CjxkZWZzPgo8Zm9udCBpZD0iaDVwLWh1YiIgaG9yaXotYWR2LXg9IjEwMjQiPgo8Zm9udC1mYWNlIHVuaXRzLXBlci1lbT0iMTAyNCIgYXNjZW50PSI5NjAiIGRlc2NlbnQ9Ii02NCIgLz4KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjEwMjQiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDsiIGhvcml6LWFkdi14PSI1MTIiIGQ9IiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDA7IiBnbHlwaC1uYW1lPSJkcm9wZG93biIgZGF0YS10YWdzPSJkcm9wZG93biIgZD0iTTEwMDQuNjU0IDcxNy4wMDJjLTExLjUyNiAxMS41MjYtMjcuODUzIDE5LjIwOS00NS4xNDIgMTkuMjA5aC04OTUuMTYxYy0zNS41MzggMC02My4zOTEtMjcuODUzLTY0LjM1Mi02My4zOTEgMC0xNy4yODkgNi43MjQtMzMuNjE2IDE5LjIwOS00Ni4xMDNsNDQ3LjU4Mi00NDcuNTgyYzI0LjAxMy0yNC45NzIgNjMuMzkxLTI1LjkzMyA4OC4zNjMtMS45MiAwLjk2MSAwLjk2MSAwLjk2MSAwLjk2MSAxLjkyIDEuOTJsNDQ3LjU4MiA0NDcuNTgyYzI0Ljk3MiAyNC4wMTMgMjUuOTMzIDYzLjM5MSAxLjkyIDg4LjM2My0wLjk2MSAwLjk2MS0wLjk2MSAwLjk2MS0xLjkyIDEuOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImluZm8iIGRhdGEtdGFncz0iaW5mbyIgZD0iTTc0NS4xNCA3Ni4zMDdjLTAuNjk5IDI1LjgyNy0yMC45NDEgNDYuMDY5LTQ2Ljc2OCA0Ni43NjhoLTQ2LjA2OXY0MTguODEzYy0xLjM5NSAyNS44MjctMjEuNjM5IDQ2LjA2OS00Ni43NjggNDYuMDY5aC0yNzkuMjA5Yy0yNS44MjcgMC00Ni43NjgtMjAuOTQxLTQ3LjQ2NS00Ni43Njh2LTkyLjgzN2MwLjY5OS0yNS44MjcgMjAuOTQxLTQ2LjA2OSA0Ni43NjgtNDYuNzY4aDQ2Ljc2OHYtMjc5LjIwOWgtNDYuMDY5Yy0yNS44MjctMC42OTktNDYuMDY5LTIwLjk0MS00Ni43NjgtNDYuNzY4di05Mi44MzdjMC42OTktMjUuODI3IDIwLjk0MS00Ni4wNjkgNDYuNzY4LTQ2Ljc2OGgzNzIuMDQ1YzI1LjgyNyAwLjY5OSA0Ni4wNjkgMjAuOTQxIDQ2Ljc2OCA0Ni43Njh2OTMuNTM0ek02MzguMzQzIDk0Ni4wNDFjLTguMzc2IDkuMDc1LTIwLjI0MiAxMy45Ni0zMi44MDYgMTMuOTZoLTE4NS42NzNjLTI1LjgyNy0wLjY5OS00Ni4wNjktMjAuOTQxLTQ2Ljc2OC00Ni43Njh2LTEzOS42MDRjMC42OTktMjUuODI3IDIwLjk0MS00Ni4wNjkgNDYuNzY4LTQ2Ljc2OGgxODYuMzcyYzI1LjEyOSAxLjM5NSA0NS4zNzEgMjEuNjM5IDQ2LjA2OSA0Ni43Njh2MTM5LjYwNGMwIDEyLjU2NC01LjU4NCAyNC40My0xMy45NiAzMi44MDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMjsiIGdseXBoLW5hbWU9InRoaWNrLWFycm93IiBkYXRhLXRhZ3M9InRoaWNrLWFycm93IiBkPSJNOTk3LjE2MiA0NDYuNjUzYzAuNjM0IDIyLjE2Ny04LjIzNCA0NC4zMzYtMjQuNzAxIDU5LjUzN2wtNDI4Ljc4OSA0MjguNzg5Yy0zMi4zMDIgMzIuOTM2LTg1LjUwNSAzMy41NjgtMTE4LjQ0IDAuNjM0IDAgMC0wLjYzNC0wLjYzNC0wLjYzNC0wLjYzNGwtNDkuNDAzLTQ5LjQwM2MtMzIuOTM2LTMyLjMwMi0zMi45MzYtODQuODcxLTEuMjY2LTExNy44MDYgMC42MzQtMC42MzQgMC42MzQtMC42MzQgMS4yNjYtMS4yNjZsMTkyLjU0NC0xOTMuODFoLTQ2My42MjVjLTIxLjUzNSAwLjYzNC00MS44MDItOC4yMzQtNTUuNzM3LTI0LjcwMS0xNC41NjctMTYuNDY3LTIyLjE2Ny0zOC4wMDItMjEuNTM1LTU5LjUzN3YtODQuMjM4Yy0wLjYzNC0yMS41MzUgNi45NjctNDMuMDY4IDIxLjUzNS01OS41MzcgMTMuOTM1LTE2LjQ2NyAzNC4yMDItMjUuMzM1IDU1LjczNy0yNC43MDFoNDY0LjI1OWwtMTkzLjgxLTE5MC42NDRjLTMyLjkzNi0zMi45MzYtMzMuNTY4LTg2LjEzOC0wLjYzNC0xMTkuMDczIDAgMCAwLjYzNC0wLjYzNCAwLjYzNC0wLjYzNGw0OS40MDMtNDkuNDAzYzMyLjkzNi0zMi4zMDIgODYuMTM4LTMyLjMwMiAxMTkuMDczIDBsNDI5LjQyMyA0MjkuNDIzYzE1LjIwMSAxNS4yMDEgMjQuMDY3IDM1LjQ2OCAyNC43MDEgNTcuMDAzdjB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9ImNoZWNrIiBkYXRhLXRhZ3M9ImNoZWNrIiBkPSJNMTAyMS40NjkgNjg2LjU0MWMwIDE3LjA4NC02LjMyOCAzMi45MDMtMTguMzQ5IDQ0LjkyNGwtODkuODQ5IDg5LjIxNWMtMjQuNjc3IDI0LjY3Ny02NC41MzkgMjQuNjc3LTg5LjIxNSAwLjYzMyAwIDAgMCAwLTAuNjMzLTAuNjMzbC00MzIuMTU2LTQzMi43OS0xOTMuNjE2IDE5NC4yNWMtMjQuNjc3IDI0LjY3Ny02NC41MzkgMjQuNjc3LTg5LjIxNSAwLjYzMyAwIDAgMCAwLTAuNjMzLTAuNjMzbC04OS4yMTUtODkuMjE1Yy0yNC42NzctMjQuNjc3LTI0LjY3Ny02NC41MzktMC42MzMtODkuMjE1IDAgMCAwIDAgMC42MzMtMC42MzNsMzI3Ljc1NS0zMjcuNzU1YzI0LjY3Ny0yNC42NzcgNjQuNTM5LTI0LjY3NyA4OS4yMTUtMC42MzMgMCAwIDAgMCAwLjYzMyAwLjYzM2w1NjkuNDYgNTY5LjQ2YzEyLjAyMiAxMi4wMjIgMTguMzQ5IDI3Ljg0IDE4LjM0OSA0NC45MjR2MGwtMi41MzEtMy4xNjN6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9ImNsb3NlIiBkYXRhLXRhZ3M9ImNsb3NlIiBkPSJNMTAyNCA4NTYuODY5bC0xMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OS00MDguODY5LTQwOC44NjkgNDA4Ljg2OS0xMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OS00MDguODY5LTQwOC44NjktNDA4Ljg2OSAxMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OSA0MDguODY5IDQwOC44NjktNDA4Ljg2OSAxMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OSA0MDguODY5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDU7IiBnbHlwaC1uYW1lPSJwbHVzIiBkYXRhLXRhZ3M9InBsdXMiIGQ9Ik01OTcuMzMzIDUzMy4zMzN2NDI2LjY2N2gtMTcwLjY2N3YtNDI2LjY2N2gtNDI2LjY2N3YtMTcwLjY2N2g0MjYuNjY3di00MjYuNjY3aDE3MC42Njd2NDI2LjY2N2g0MjYuNjY3djE3MC42Njd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNjsiIGdseXBoLW5hbWU9ImZpbHRlcnMiIGRhdGEtdGFncz0iZmlsdGVycyIgZD0iTTIxNy41NDMgODM0LjU4OXY5OC4yNDljMCAxNC45OTktMTIuMTYzIDI3LjE2Mi0yNy4xNjIgMjcuMTYyaC04Ljc4NWMtMTQuOTk5IDAtMjcuMTYyLTEyLjE2My0yNy4xNjItMjcuMTYydi05OC4yNDljLTYzLjc5Mi0xNC4xOS0xMTAuNzgtNzAuMy0xMTAuNzgtMTM3LjM4czQ2Ljk4OC0xMjMuMTg5IDEwOS44NDQtMTM3LjIwOGwwLjkzNi01OTIuODQxYzAtMTQuOTk5IDEyLjE2My0yNy4xNjIgMjcuMTYyLTI3LjE2Mmg3Ljk5YzE0Ljk5OSAwIDI3LjE2MiAxMi4xNjMgMjcuMTYyIDI3LjE2MnY1ODguNjY5YzY5LjU1MSA5LjE5MSAxMjIuNjY2IDY4LjEwOSAxMjIuNjY2IDEzOS40MzUgMCA3MS4wNDEtNTIuNjk5IDEyOS43NzItMTIxLjEzIDEzOS4yNDZ6TTU0OS44MiA0MTcuNjQ0djUxNS4xODRjMCAxNC45OTktMTIuMTYzIDI3LjE2Mi0yNy4xNjIgMjcuMTYyaC00Ljc5NmMtMTQuOTk5IDAtMjcuMTYyLTEyLjE2My0yNy4xNjItMjcuMTYydi01MTMuNTkzYy03MS4zNTgtMTIuMTE0LTEyNS4wMjAtNzMuNDY5LTEyNS4wMjAtMTQ3LjM2NHM1My42NjItMTM1LjI2IDEyNC4xNDUtMTQ3LjI0MmwwLjg4NC0xNTkuODY5YzAtMTQuOTk5IDEyLjE2My0yNy4xNjIgMjcuMTYyLTI3LjE2Mmg0Ljc5NmMxNC45OTkgMCAyNy4xNjIgMTIuMTYzIDI3LjE2MiAyNy4xNjJ2MTU5Ljc0NWM2Ny4zMjUgMTUuNDMgMTE2LjggNzQuODI2IDExNi44IDE0NS43NzJzLTQ5LjQ2NCAxMzAuMzQyLTExNS43OTQgMTQ1LjU3OXpNOTgwLjM0NSA1OTQuOTZjLTAuMDc1IDY5LjIxMi01MS4wMjIgMTI2LjQ5OS0xMTcuNDUzIDEzNi40ODlsLTAuNzY0IDIwMS4zNzljMCAxNC45OTktMTIuMTYzIDI3LjE2Mi0yNy4xNjIgMjcuMTYyaC02LjM4N2MtMTQuOTk5IDAtMjcuMTYyLTEyLjE2My0yNy4xNjItMjcuMTYydi0yMDUuMjczYy01OC4xNy0xNi44NDktOTkuOTc3LTY5LjY0Mi05OS45NzctMTMyLjE5MXM0MS44MDctMTE1LjM0MiA5OS0xMzEuOTVsMC45NjctNTAwLjI1MmMwLTE0Ljk5OSAxMi4xNjMtMjcuMTYyIDI3LjE2Mi0yNy4xNjJoNC43OTZjMTQuOTk5IDAgMjcuMTYyIDEyLjE2MyAyNy4xNjIgMjcuMTYydjQ5Ni4wMjJjNjcuNjA4IDkuMzI5IDExOS4yMDYgNjYuNDM2IDExOS44MDkgMTM1LjcyMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA3OyIgZ2x5cGgtbmFtZT0iYXJyb3ctbGluZSIgZGF0YS10YWdzPSJhcnJvdy1saW5lIiBkPSJNOTk1Ljg3OCA3MDAuNzM5bC00My43MDMgNDMuNzAzYy0xNy41OTEgMTYuNTA2LTQxLjMyNiAyNi42NDUtNjcuNDMyIDI2LjY0NXMtNDkuODM3LTEwLjEzOS02Ny40ODMtMjYuNjkzbC0zMDMuMzg3LTMwMy4zODktMzA1LjkzNSAzMDQuNjkyYy0xNy40NjggMTYuNzgxLTQxLjI0NCAyNy4xMTYtNjcuNDMyIDI3LjExNnMtNDkuOTU4LTEwLjMzNS02Ny40NjQtMjcuMTQ4bC00NC45Mi00NC45MmMtMTcuMzcxLTE3LjIwNi0yOC4xMjItNDEuMDYyLTI4LjEyMi02Ny40MzJzMTAuNzUyLTUwLjIyNiAyOC4xMTItNjcuNDIxbDQxNC41ODMtNDE0LjU4M2MxNy4yMDYtMTcuMzcxIDQxLjA2Mi0yOC4xMjIgNjcuNDMyLTI4LjEyMnM1MC4yMjYgMTAuNzUyIDY3LjQyMSAyOC4xMTJsNDE4LjMyOSA0MTQuNTgzYzE3LjM3MSAxNy4yMDYgMjguMTIyIDQxLjA2MiAyOC4xMjIgNjcuNDMycy0xMC43NTIgNTAuMjI2LTI4LjExMiA2Ny40MjF6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwODsiIGdseXBoLW5hbWU9ImNoZWNrLWVtcHR5IiBkYXRhLXRhZ3M9ImNoZWNrLWVtcHR5IiBkPSJNOTEwLjIgODQ2LjJ2LTc5Ni40aC03OTYuNHY3OTYuNGg3OTYuNHpNOTEwLjIgOTYwaC03OTYuNGMtNjIuNiAwLTExMy44LTUxLjItMTEzLjgtMTEzLjh2LTc5Ni40YzAtNjIuNiA1MS4yLTExMy44IDExMy44LTExMy44aDc5Ni40YzYyLjYgMCAxMTMuOCA1MS4yIDExMy44IDExMy44djc5Ni40YzAgNjIuNi01MS4yIDExMy44LTExMy44IDExMy44eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDk7IiBnbHlwaC1uYW1lPSJjaGVjazEiIGRhdGEtdGFncz0iY2hlY2siIGQ9Ik05MTAuMiA5NjBoLTc5Ni40Yy02Mi42IDAtMTEzLjgtNTEuMi0xMTMuOC0xMTMuOHYtNzk2LjRjMC02Mi42IDUxLjItMTEzLjggMTEzLjgtMTEzLjhoNzk2LjRjNjIuNiAwIDExMy44IDUxLjIgMTEzLjggMTEzLjh2Nzk2LjRjMCA2Mi42LTUxLjIgMTEzLjgtMTEzLjggMTEzLjh6TTM5OC4yIDE2My42bC0yODQuNCAyODQuNCA3OS42IDc5LjYgMjA0LjgtMjA0LjggNDMyLjQgNDMyLjQgNzkuNi03OS42LTUxMi01MTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwYTsiIGdseXBoLW5hbWU9ImRldGFpbHMtYXJyb3ciIGRhdGEtdGFncz0iZGV0YWlscy1hcnJvdyIgZD0iTTUxMiA5NjAuMDAxbC05MC4yNC05MC4yNCAzNTcuMTItMzU3Ljc2aC03NzguODc5di0xMjcuOTk5aDc3OC44NzlsLTM1Ny4xMi0zNTcuNzYgOTAuMjQtOTAuMjQgNTExLjk5OSA1MTEuOTk5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGI7IiBnbHlwaC1uYW1lPSJTcGlubmVyIiBkYXRhLXRhZ3M9IlNwaW5uZXIiIGQ9Ik0xMDIzLjk1MyA0NDguMDcxYzEuMTM3IDgzLjAxNi0xOC4xOTUgMTY0Ljg5NS01Ni44NjEgMjM4LjgxNC03NS42MjUgMTQ1LjU2My0yMTYuMDY5IDI0NS42MzctMzc4LjEyMSAyNzAuMDg3di0xMzUuMzI4Yzg1LjI5MS0xNi40ODkgMTYyLjYyMS02My4xMTUgMjE3LjIwNy0xMzAuNzc5IDg5LjgzOS0xMDguMDM1IDExMi4wMTUtMjU3LjU3OCA1Ni44NjEtMzg3LjIxOS0zOC4wOTctOTEuNTQ1LTExMC4zMDktMTYzLjc1OC0yMDEuODU1LTIwMS44NTUtOTMuODItNDAuMzctMjAwLjE0OS00MC4zNy0yOTMuOTY5IDAtOTEuNTQ1IDM4LjA5Ny0xNjMuNzU4IDExMC4zMDktMjAxLjg1NSAyMDEuODU1LTU1LjE1NSAxMjkuNjQyLTMyLjk3OSAyNzkuMTg0IDU2Ljg2MSAzODcuMjE5IDU0LjU4NiA2Ny42NjMgMTMxLjkxNyAxMTQuMjg5IDIxNy4yMDcgMTMwLjc3OXYxMzUuMzI4Yy0xNjMuNzU4LTIyLjc0NS0zMDUuOTEtMTIzLjM4OC0zODIuMTAyLTI3MC4wODctNjkuOTM4LTEzNS4zMjgtNzYuMTkzLTI5NC41MzctMTcuMDU4LTQzNC45ODIgNTEuMTc0LTEyMy4zODggMTQ5LjU0Mi0yMjEuNzU2IDI3Mi45My0yNzIuMzYxIDEyNy4zNjctNTQuMDE3IDI3MC42NTUtNTQuMDE3IDM5OC4wMjMgMCAxMjIuODE5IDUxLjE3NCAyMjAuNjE5IDE0OC45NzUgMjcxLjc5MyAyNzEuNzkzIDI2LjcyNCA2MS45NzggNDAuMzcgMTI5LjA3MyA0MC45NCAxOTYuNzM4djB6IiAvPgo8L2ZvbnQ+PC9kZWZzPjwvc3ZnPg==') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

html.h5p-iframe, html.h5p-iframe > body {
  font-family: Sans-Serif; /* Use the browser's default sans-serif font. (Since Heletica doesn't look nice on Windows, and Arial on OS X.) */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.h5p-semi-fullscreen, .h5p-fullscreen, html.h5p-iframe .h5p-container {
  overflow: hidden;
}
.h5p-content {
  position: relative;
  background: #fefefe;
  border: 1px solid #EEE;
  border-bottom: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.h5p-noselect
{
  -khtml-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
html.h5p-iframe .h5p-content {
  font-size: 16px;
  line-height: 1.5em;
  width: 100%;
  height: auto;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
html.h5p-iframe .h5p-fullscreen .h5p-content,
html.h5p-iframe .h5p-semi-fullscreen .h5p-content {
  height: 100%;
}
.h5p-content.h5p-no-frame,
.h5p-fullscreen .h5p-content,
.h5p-semi-fullscreen .h5p-content {
  border: 0;
}
.h5p-container {
  position: relative;
  z-index: 1;
}
.h5p-iframe-wrapper.h5p-fullscreen {
  background-color: #000;
}
body.h5p-semi-fullscreen {
  position: fixed;
  width: 100%;
  height: 100%;
}
.h5p-container.h5p-semi-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  height: 100%;
  background-color: #FFF;
}

.h5p-content-controls {
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}
.h5p-fullscreen .h5p-content-controls {
  display: none;
}

.h5p-content-controls > a:link, .h5p-content-controls > a:visited, a.h5p-disable-fullscreen:link, a.h5p-disable-fullscreen:visited {
  color: #e5eef6;
}

.h5p-enable-fullscreen:before {
  font-family: 'H5P';
  content: "\\e88c";
}
.h5p-disable-fullscreen:before {
  font-family: 'H5P';
  content: "\\e891";
}
.h5p-enable-fullscreen, .h5p-disable-fullscreen {
  cursor: pointer;
  color: #EEE;
  background: rgb(0,0,0);
  background: rgba(0,0,0,0.3);
  line-height: 0.975em;
  font-size: 2em;
  width: 1.125em;
  height: 1em;
  text-indent: 0.04em;
}
.h5p-disable-fullscreen {
  line-height: 0.925em;
  width: 1.1em;
  height: 0.9em;
}

.h5p-enable-fullscreen:focus,
.h5p-disable-fullscreen:focus {
  outline-style: solid;
  outline-width: 1px;
  outline-offset: 0.25em;
}

.h5p-enable-fullscreen:hover, .h5p-disable-fullscreen:hover {
  background: rgba(0,0,0,0.5);
}
.h5p-semi-fullscreen .h5p-enable-fullscreen {
  display: none;
}

div.h5p-fullscreen {
  width: 100%;
  height: 100%;
}
.h5p-iframe-wrapper {
  width: auto;
  height: auto;
}

.h5p-fullscreen .h5p-iframe-wrapper,
.h5p-semi-fullscreen .h5p-iframe-wrapper {
  width: 100%;
  height: 100%;
}

.h5p-iframe-wrapper.h5p-semi-fullscreen {
  width: auto;
  height: auto;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100001;
}
.h5p-iframe-wrapper.h5p-semi-fullscreen .buttons {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
}
.h5p-iframe-wrapper iframe.h5p-iframe {
  /* Hack for IOS landscape / portrait */
  width: 10px;
  min-width: 100%;
  *width: 100%;
  /* End of hack */
  height: 100%;
  z-index: 10;
  overflow: hidden;
  border: 0;
  display: block;
}

.h5p-content ul.h5p-actions {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  list-style: none;
  padding: 0px 10px;
  margin: 0;
  height: 25px;
  font-size: 12px;
  background: #FAFAFA;
  border-top: 1px solid #EEE;
  border-bottom: 1px solid #EEE;
  clear: both;
  font-family: Sans-Serif;
}
.h5p-fullscreen .h5p-actions, .h5p-semi-fullscreen .h5p-actions {
  display: none;
}
.h5p-actions > .h5p-button {
  float: left;
  cursor: pointer;
  margin: 0 0.5em 0 0;
  background: none;
  padding: 0 0.75em 0 0.25em;
  vertical-align: top;
  color: #707070;
  text-decoration: none;
  outline: none;
  line-height: 22px;
}
.h5p-actions button:hover {
  color: #333;
}
.h5p-actions button:active,
.h5p-actions button:focus,
.h5p-actions .h5p-link:active,
.h5p-actions .h5p-link:focus {
  color: #666;
}
.h5p-actions button {
  display: inline-flex;
  padding: 0;
  margin: 0;
  color: #6A6A6A;
  position: relative;

  /* Disable default button style */
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;

  line-height: 2;
}
.h5p-actions button:focus,
.h5p-actions .h5p-link:focus {
  outline-style: solid;
  outline-width: thin;
  outline-offset: -2px;
  outline-color: #5981A1;
}
.h5p-actions button:before {
  font-family: 'H5P';
  font-size: 20px;
  line-height: 23px;
  vertical-align: bottom;
  padding-right: 0;
}
.h5p-actions > .h5p-button.h5p-export > button:before {
  content: "\\e90b";
}
.h5p-actions > .h5p-button.h5p-copyrights > button:before {
  content: "\\e88f";
}
.h5p-actions > .h5p-button.h5p-embed > button:before {
  content: "\\e892";
}
.h5p-actions .h5p-link {
  float: right;
  margin-right: 0;
  font-size: 2.0em;
  line-height: 23px;
  position: relative;
  color: #6a6a6a;
  text-decoration: none;
  outline: none;
}
.h5p-actions .h5p-link:before {
  font-family: 'H5P';
  content: "\\e88e";
  vertical-align: bottom;
}
.h5p-actions > li {
  margin: 0;
  list-style: none;
}
.h5p-popup-dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 100;
  padding: 2em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  opacity: 0;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  transition: opacity 0.2s;
  background:#000;
  background:rgba(0,0,0,0.75);
}
.h5p-popup-dialog.h5p-open {
  opacity: 1;
}
.h5p-popup-dialog .h5p-inner {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  background: #fff;
  height: 100%;
  max-height: 100%;
  position: relative;
}
.h5p-popup-dialog .h5p-inner > h2 {
  position: absolute;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  margin: 0;
  background: #eee;
  display: block;
  color: #656565;
  font-size: 1.25em;
  padding: 0.325em 0.5em 0.25em;
  line-height: 1.25em;
  border-bottom: 1px solid #ccc;
  z-index: 2;
}
.h5p-popup-dialog .h5p-inner > h2 > a {
  font-size: 12px;
  margin-left: 1em;
}
.h5p-embed-dialog .h5p-inner,
.h5p-reuse-dialog .h5p-inner,
.h5p-content-user-data-reset-dialog .h5p-inner {
  min-width: 316px;
  max-width: 400px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
.h5p-embed-dialog .h5p-embed-code-container,
.h5p-embed-size {
  resize: none;
  outline: none;
  width: 100%;
  padding: 0.375em 0.5em 0.25em;
  margin: 0;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 1px 2px 0 #d0d0d0 inset;
  font-size: 0.875em;
  letter-spacing: 0.065em;
  font-family: sans-serif;
  white-space: pre;
  line-height: 1.5em;
  height: 2.0714em;
  background: #f5f5f5;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.h5p-embed-dialog .h5p-embed-code-container:focus {
  height: 5em;
}
.h5p-embed-size {
  width: 3.5em;
  text-align: right;
  margin: 0.5em 0;
  line-height: 2em;
}
.h5p-popup-dialog .h5p-scroll-content {
  border-top: 2.25em solid transparent;
  padding: 1em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: #555555;
  z-index: 1;
}
.h5p-popup-dialog.h5p-open .h5p-scroll-content {
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}
.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar {
  width: 8px;
}
.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-track {
  background: #e0e0e0;
}
.h5p-popup-dialog .h5p-scroll-content::-webkit-scrollbar-thumb {
  box-shadow: 0 0 10px #000 inset;
  border-radius: 4px;
}
.h5p-popup-dialog .h5p-close {
  cursor: pointer;
  font-size: 2em;
  position: absolute;
  right: 0;
  top: 0;
  width: 1.125em;
  height: 1.125em;
  line-height: 1.125em;
  color: #656565;
  cursor: pointer;
  text-indent: -0.065em;
  z-index: 3
}
.h5p-popup-dialog .h5p-close:after {
  font-family: 'H5P';
  content: "\\e894";
}
.h5p-popup-dialog .h5p-close:hover:after,
.h5p-popup-dialog .h5p-close:focus:after {
  color: #454545;
}
.h5p-popup-dialog .h5p-close:active:after {
  color: #252525;
}
.h5p-poopup-dialog h2 {
  margin: 0.25em 0 0.5em;
}
.h5p-popup-dialog h3 {
  margin: 0.75em 0 0.25em;
}
.h5p-popup-dialog dl {
  margin: 0.25em 0 0.75em;
}
.h5p-popup-dialog dt {
  float: left;
  margin: 0 0.75em 0 0;
}
.h5p-popup-dialog dt:after {
  content: ':';
}
.h5p-popup-dialog dd {
  margin: 0;
}
.h5p-expander {
  cursor: pointer;
  font-size: 1.125em;
  margin: 0.5em 0 0;
  display: inline-block;
}
.h5p-expander:before {
  content: "+";
  width: 1em;
  display: inline-block;
  font-weight: bold;
}
.h5p-expander.h5p-open:before {
  content: "-";
  text-indent: 0.125em;
}
.h5p-expander:hover,
.h5p-expander:focus {
  color: #303030;
}
.h5p-expander:active {
  color: #202020;
}
.h5p-expander-content {
  display: none;
}
.h5p-expander-content p {
  margin: 0.5em 0;
}
.h5p-content-copyrights {
  border-left: 0.25em solid #d0d0d0;
  margin-left: 0.25em;
  padding-left: 0.25em;
}
.h5p-throbber {
  background: url('data:image/gif;base64,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') 10px center no-repeat;
  padding-left: 38px;
  min-height: 30px;
  line-height: 30px;
}
.h5p-dialog-ok-button {
  cursor: default;
  float: right;
  outline: none;
  border: 2px solid #ccc;
  padding: 0.25em 0.75em 0.125em;
  background: #eee;
}
.h5p-dialog-ok-button:hover,
.h5p-dialog-ok-button:focus {
  background: #fafafa;
}
.h5p-dialog-ok-button:active {
  background: #eeffee;
}
.h5p-big-button {
  line-height: 1.25;
  display: block;
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 1em 1em 1em 3.75em;
  text-align: left;
  border: 1px solid #dedede;
  background: linear-gradient(#ffffff, #f1f1f2);
  border-radius: 0.25em;
}
.h5p-big-button:before {
  font-family: 'h5p';
  content: "\\e893";
  line-height: 1;
  font-size: 3em;
  color: #2747f7;
  position: absolute;
  left: 0.125em;
  top: 0.125em;
}
.h5p-copy-button:before {
  content: "\\e905";
}
.h5p-big-button:hover {
  border: 1px solid #2747f7;
  background: #eff1fe;
}
.h5p-big-button:active {
  border: 1px solid #dedede;
  background: #dfe4fe;
}
.h5p-button-title {
  color: #2747f7;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.h5p-button-description {
  color: #757575;
}
.h5p-horizontal-line-text {
  border-top: 1px solid #dadada;
  line-height: 1;
  color: #474747;
  text-align: center;
  position: relative;
  margin: 1.25em 0;
}
.h5p-horizontal-line-text > span {
  background: white;
  padding: 0.5em;
  position: absolute;
  top: -1em;
  left: 50%;
  transform: translateX(-50%);
}
.h5p-toast {
  font-size: 0.75em;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  z-index: 110;
  position: absolute;
  padding: 0 0.5em;
  line-height: 2;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  top: 0;
  opacity: 1;
  visibility: visible;
  transition: opacity 1s;
}
.h5p-toast-disabled {
  opacity: 0;
  visibility: hidden;
}
.h5p-content code,
.h5peditor code {
  color: #3d3d3d;
  background: #e0e0e0;
  border-radius: 2px;
  padding: 0 5px;
}
.h5p-content pre > code,
.h5peditor pre > code {
  background-color: #fafafa;
  padding: 5px;
  display: block;
  line-height: normal;
  border: 1px solid #c7c7c7;
  border-left-width: 4px;
  max-width: 100%;
  white-space: pre;
  overflow: auto;
}


/* This is loaded as part of Core and not Editor since this needs to be outside the editor iframe */
.h5peditor-semi-fullscreen {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
}
iframe.h5peditor-semi-fullscreen {
  background: #fff;
  z-index: 100001;
}

.h5p-content.using-mouse *:not(textarea):focus {
  outline: none !important;
}

.h5p-content-hub-button:before {
  font-family: "h5p";
  margin-right: 0.5em;
  font-size: 0.7em;
  line-height: 1;
}

.h5p-content-hub-button.unpublish:before {
  content: "\\e916";
}

.h5p-content-hub-button.waiting:before,
.h5p-content-hub-button.sync:before {
  content: "\\e917";
}

.h5p-content-hub-button.waiting:before {
  display: inline-block;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.h5p-confirmation-dialog-background {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  background: rgba(44, 44, 44, 0.9);
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity 0.1s, linear 0s, visibility 0s linear 0s;
  transition: opacity 0.1s linear 0s, visibility 0s linear 0s;

  z-index: 201;
}

.h5p-confirmation-dialog-background.hidden {
  display: none;
}

.h5p-confirmation-dialog-background.hiding {
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 0.1s, linear 0s, visibility 0s linear 0.1s;
  transition: opacity 0.1s linear 0s, visibility 0s linear 0.1s;
}

.h5p-confirmation-dialog-popup:focus {
  outline: none;
}

.h5p-confirmation-dialog-popup {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  max-width: 35em;
  min-width: 25em;

  top: 2em;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);

  color: #555;
  box-shadow: 0 0 6px 6px rgba(10,10,10,0.3);

  -webkit-transition: transform 0.1s ease-in;
  transition: transform 0.1s ease-in;
}

.h5p-confirmation-dialog-popup.hidden {
  -webkit-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}

.h5p-confirmation-dialog-header {
  padding: 1.5em;
  background: #fff;
  color: #356593;
}

.h5p-confirmation-dialog-header-text {
  font-size: 1.25em;
}

.h5p-confirmation-dialog-body {
  background: #fafbfc;
  border-top: solid 1px #dde0e9;
  padding: 1.25em 1.5em;
}

.h5p-confirmation-dialog-text {
  margin-bottom: 1.5em;
}

.h5p-confirmation-dialog-buttons {
  float: right;
}

button.h5p-confirmation-dialog-exit:visited,
button.h5p-confirmation-dialog-exit:link,
button.h5p-confirmation-dialog-exit {
  position: absolute;
  background: none;
  border: none;
  font-size: 2.5em;
  top: -0.9em;
  right: -1.15em;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

button.h5p-confirmation-dialog-exit:focus,
button.h5p-confirmation-dialog-exit:hover {
  color: #E4ECF5;
}

.h5p-confirmation-dialog-exit:before {
  font-family: "H5P";
  content: "\\e890";
}

.h5p-core-button.h5p-confirmation-dialog-confirm-button {
  padding-left: 0.75em;
  margin-bottom: 0;
}

.h5p-core-button.h5p-confirmation-dialog-confirm-button:before {
  content: "\\e601";
  margin-top: -6px;
  display: inline-block;
}

.h5p-confirmation-dialog-popup.offline .h5p-confirmation-dialog-buttons {
  float: none;
  text-align: center;
}

.h5p-confirmation-dialog-popup.offline .count-down {
  font-family: Arial;
  margin-top: 0.15em;
  color: #000;
}

.h5p-confirmation-dialog-popup.offline .h5p-confirmation-dialog-confirm-button:before {
  content: "\\e90b";
  font-weight: normal;
  vertical-align: text-bottom;
}

.throbber-wrapper {
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(44, 44, 44, 0.9);
}

.throbber-wrapper.show {
  display: block;
}

.throbber-wrapper .throbber-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.throbber-wrapper .sending-requests-throbber{
  position: absolute;
  top: 7em;
  left: 50%;
  transform: translateX(-50%);
}

.throbber-wrapper .sending-requests-throbber:before {
  display: block;
  font-family: 'H5P';
  content: "\\e90b";
  color: white;
  font-size: 10em;
  animation: request-throbber 1.5s infinite linear;
}

@keyframes request-throbber {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(359deg);
  }
}
button.h5p-core-button:visited,
button.h5p-core-button:link,
button.h5p-core-button {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.2;
  padding: 0.5em 1.25em;
  border-radius: 2em;

  background: #2579c6;
  color: #fff;

  cursor: pointer;
  border: none;
  box-shadow: none;
  outline: none;

  display: inline-block;
  text-align: center;
  text-shadow: none;
  vertical-align: baseline;
  text-decoration: none;

  -webkit-transition: initial;
  transition: initial;
}
button.h5p-core-button:focus {
  background: #1f67a8;
}
button.h5p-core-button:hover {
  background: rgba(31, 103, 168, 0.83);
}
button.h5p-core-button:active {
  background: #104888;
}
button.h5p-core-button:before {
  font-family: 'H5P';
  padding-right: 0.15em;
  font-size: 1.5em;
  vertical-align: middle;
  line-height: 0.7;
}
button.h5p-core-cancel-button:visited,
button.h5p-core-cancel-button:link,
button.h5p-core-cancel-button {
  border: none;
  background: none;
  color: #a00;
  margin-right: 1em;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
}
button.h5p-core-cancel-button:hover,
button.h5p-core-cancel-button:focus {
  background: none;
  border: none;
  color: #e40000;
}
.h5p-tooltip {
  --translateX: -50%;
  --translateY: 0;

  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(var(--translateX)) translateY(var(--translateY));

  z-index: 4;

  font-size: 0.9rem;
  line-height: 1.5rem;

  padding: 0 0.5rem;
  white-space: nowrap;

  background: #000;
  color: #FFF;

  cursor: default;

  /* To hide the position adjustments and to get a bit more 
     pleasent popup effect */
  -webkit-animation: 800ms ease 0s normal forwards 1 fadein;
  animation: 800ms ease 0s normal forwards 1 fadein;
}

@keyframes fadein{
  0% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
}

@-webkit-keyframes fadein{
  0% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
}

.h5p-tooltip-bottom {
  top: 100%;
  bottom: auto;
}

.h5p-tooltip-left {
  --translateY: -50%;
  --translateX: 0;
  top: 50%;
  bottom: auto;
  left: auto;
  right: 100%;
}

.h5p-tooltip-right {
  --translateY: -50%;
  --translateX: 0;
  top: 50%;
  bottom: auto;
  left: 100%;
  right: auto;
}

.h5p-tooltip-visible {
  display: block;
}
`;
var render = function __render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm.srcdoc ? _c("iframe", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "!loading"
    }],
    ref: "iframe",
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "border": "none"
    },
    attrs: {
      "allow": _vm.fullscreen ? "fullscreen" : "fullscreen none"
    },
    on: {
      "load": _vm.iFrameLoaded
    }
  }) : _vm._e(), _vm.loading ? [_vm._t("default")] : _vm.error ? [_vm._t("error", null, {
    "error": _vm.error
  })] : _vm._e()], 2);
};
var staticRenderFns = [];
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script = {
  name: "H5p",
  props: {
    src: {
      type: String,
      required: true
    },
    contentId: {
      type: String,
      default: "default"
    },
    embed: {
      type: String,
      default: ""
    },
    resize: {
      type: String,
      default: ""
    },
    export: {
      type: String,
      default: ""
    },
    copy: {
      type: Boolean,
      default: false
    },
    copyright: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    css: {
      type: String,
      default: ""
    },
    l10n: {
      type: Object,
      default: () => ({})
    },
    integration: {
      type: Object,
      default: () => ({})
    },
    actor: {
      type: Object,
      default: null,
      validator: (val) => val ? ["mail,name", "homePage,name"].includes(Object.keys(val).sort().join(",")) : true
    }
  },
  data() {
    return {
      loading: true,
      listeners: false,
      error: void 0,
      srcdoc: "",
      height: null
    };
  },
  computed: {
    path() {
      return this.src.endsWith("/") ? this.src.slice(0, -1) : this.src;
    }
  },
  watch: {
    height(newHeight) {
      this.$emit("height-changed", newHeight);
    }
  },
  beforeDestroy() {
    var _a;
    window.removeEventListener("message", this.onMessage);
    (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
  },
  async mounted() {
    var _a, _b, _c;
    this.onMessage = (evt) => {
      if (evt.data.context !== "h5p")
        return;
      if (evt.data.action === "hello") {
        this.$refs.iframe.contentWindow.H5P.externalDispatcher.on("*", (ev) => {
          this.$emit(ev.type.toLowerCase(), ev.data);
        });
        this.resizeObserver = new ResizeObserver(this.triggerResize);
        this.resizeObserver.observe(this.$el);
        this.$refs.iframe.contentWindow.postMessage({ action: "hello", context: "h5p" }, "*");
        this.$emit("ready");
      } else if (evt.data.action === "prepareResize") {
        this.height = evt.data.clientHeight;
      }
    };
    window.addEventListener("message", this.onMessage);
    let h5p2;
    let content;
    let libraries;
    if ((_a = this.actor) == null ? void 0 : _a.homePage) {
      localStorage.H5PUserUUID = this.actor.name;
    }
    try {
      h5p2 = await this.getJSON("h5p.json");
      content = await this.getJSON("content", "content.json");
      libraries = await this.loadDependencies(h5p2.preloadedDependencies);
    } catch (e) {
      this.error = e;
      this.loading = false;
      return;
    }
    const { machineName, majorVersion, minorVersion } = h5p2.preloadedDependencies.find((dep) => dep.machineName === h5p2.mainLibrary);
    const h5pIntegration = {
      fullscreenDisabled: !this.fullscreen,
      l10n: {
        H5P: Object.assign({}, l10n.H5P, this.l10n)
      },
      url: this.path,
      contents: {
        [`cid-${this.contentId}`]: {
          embedCode: this.embed,
          resizeCode: this.resize,
          exportUrl: this.export,
          fullScreen: this.fullscreen,
          library: `${machineName} ${majorVersion}.${minorVersion}`,
          jsonContent: JSON.stringify(content),
          url: this.path,
          displayOptions: {
            frame: Boolean(this.export || this.embed || this.copyright || this.icon),
            export: Boolean(this.export),
            embed: Boolean(this.embed),
            copyright: this.copyright,
            icon: this.icon,
            copy: this.copy
          },
          metadata: {
            license: h5p2.license,
            defaultLanguage: h5p2.defaultLanguage,
            title: h5p2.title
          }
        }
      },
      _libraryPaths: Object.fromEntries(
        Object.entries(libraries).map(
          ([id, lib]) => [id, lib.path]
        )
      ),
      siteUrl: (_b = this.actor) == null ? void 0 : _b.homePage,
      user: ((_c = this.actor) == null ? void 0 : _c.mail) ? this.actor : void 0,
      ...this.integration
    };
    const { styles, scripts } = this.sortDependencies(libraries);
    const endScript = "<\/script>";
    const contentStyles = styles.map((style) => `<link rel="stylesheet" href="${style}">`).join("\n");
    const contentScripts = scripts.map((script) => `<script src="${script}">${endScript}`).join("\n");
    this.srcdoc = `<!doctype html>
<html class="h5p-iframe">
  <head>
    <base target="_parent">
    <style>${frameStyle}</style>
    ${contentStyles}
    <style>${this.css}</style>
    <script>H5PIntegration = ${JSON.stringify(h5pIntegration)};var H5P = H5P || {};H5P.externalEmbed = true;${endScript}
    <script>${frameScript.replace('use "strict";', "")}${endScript}
    ${contentScripts}
  </head>
  <body>
    <div class="h5p-content" data-content-id="${this.contentId}"/>
  </body>
</html>`;
  },
  methods: {
    iFrameLoaded() {
      if (this.loading) {
        this.$refs.iframe.contentDocument.open();
        this.$refs.iframe.contentDocument.write(this.srcdoc);
        this.$refs.iframe.contentDocument.close();
        this.loading = false;
      }
    },
    async getJSON(...url) {
      const resp = await fetch(this.path + "/" + url.join("/"), { credentials: "include" });
      if (!resp.ok) {
        let body = {};
        try {
          body = await resp.json();
        } catch {
        }
        throw new FetchError(resp, body);
      }
      return resp.json();
    },
    async loadDependencies(deps, libraryMap = {}) {
      await Promise.all(deps.map(async ({ machineName, majorVersion, minorVersion }) => {
        const id = `${machineName}-${majorVersion}.${minorVersion}`;
        if (libraryMap[id])
          return;
        try {
          libraryMap[id] = {
            library: await this.getJSON(id, "library.json"),
            path: id
          };
        } catch {
          libraryMap[id] = {
            library: await this.getJSON(machineName, "library.json"),
            path: machineName
          };
        }
        const libDeps = libraryMap[id].library.preloadedDependencies;
        if (libDeps) {
          this.loadDependencies(libDeps, libraryMap);
          libraryMap[id].dependencies = libDeps.map(({ machineName: machineName2, majorVersion: majorVersion2, minorVersion: minorVersion2 }) => `${machineName2}-${majorVersion2}.${minorVersion2}`);
        }
      }));
      return libraryMap;
    },
    sortDependencies(libraries) {
      const sorter = new Toposort();
      Object.entries(libraries).forEach(([id, { dependencies = [] }]) => sorter.add(id, dependencies));
      const sorted = sorter.sort().reverse();
      const styles = sorted.map((id) => libraries[id]).map(({ path, library }) => {
        var _a;
        return (_a = library.preloadedCss) == null ? void 0 : _a.map((file) => `${this.path}/${path}/${file.path}`);
      }).flat(1).filter(Boolean);
      const scripts = sorted.map((id) => libraries[id]).map(({ path, library }) => {
        var _a;
        return (_a = library.preloadedJs) == null ? void 0 : _a.map((file) => `${this.path}/${path}/${file.path}`);
      }).flat(1).filter(Boolean);
      return { styles, scripts };
    },
    triggerResize() {
      const H5P = this.$refs.iframe.contentWindow.H5P;
      H5P.trigger(H5P.instances[0], "resize");
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  null,
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const h5p = /* @__PURE__ */ function() {
  return __component__.exports;
}();
exports.default = h5p;
//# sourceMappingURL=vue-h5p.js.map
