
(function () {

  var data = {
    "resource": {
      "version": "1",

      "macros": [{
        "function": "__e"
      }, {
        "function": "__dee"
      }],
      "tags": [{
        "function": "__asprv",
        "vtp_globalName": "google_optimize",
        "vtp_listenForMutations": false,
        "tag_id": 6
      }, {
        "function": "__asprv",
        "tag_id": 7
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": ["macro", 1]
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "optimize.callback"
      }],
      "rules": [
        [
          ["if", 0],
          ["add", 0]
        ],
        [
          ["if", 1],
          ["add", 1]
        ]
      ]
    },
    "runtime": []









  };


  var ca, da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        }
      }
    },
    ea = function (a) {
      return a.raw = a
    },
    fa = function (a, b) {
      a.raw = b;
      return a
    },
    ha = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: da(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ja = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c
    },
    ka = "function" == typeof Object.create ? Object.create :
    function (a) {
      var b = function () {};
      b.prototype = a;
      return new b
    },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
  else {
    var ma;
    a: {
      var na = {
          a: !0
        },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.a;
        break a
      } catch (a) {}
      ma = !1
    }
    la = ma ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var pa = la,
    qa = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c];
      a.ln = b.prototype
    };
 
  var ra = this || self,
    sa = function (a) {
      return a
    };
  var ta = function () {},
    ua = function (a) {
      return "function" === typeof a
    },
    g = function (a) {
      return "string" === typeof a
    },
    va = function (a) {
      return "number" === typeof a && !isNaN(a)
    },
    xa = Array.isArray,
    za = function (a, b) {
      if (a && xa(a))
        for (var c = 0; c < a.length; c++)
          if (a[c] && b(a[c])) return a[c]
    },
    Aa = function (a, b) {
      if (!va(a) || !va(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
    },
    Ca = function (a, b) {
      for (var c = new Ba, d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++)
        if (c.get(b[e])) return !0;
      return !1
    },
    k = function (a,
      b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    },
    Da = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    },
    Ea = function (a) {
      return Math.round(Number(a)) || 0
    },
    Fa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a
    },
    Ga = function (a) {
      var b = [];
      if (xa(a))
        for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b
    },
    Ia = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
    },
    Ja = function () {
      return new Date(Date.now())
    },
    Ka = function () {
      return Ja().getTime()
    },
    Ba = function () {
      this.prefix = "gtm.";
      this.values = {}
    };
  Ba.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  };
  Ba.prototype.get = function (a) {
    return this.values[this.prefix + a]
  };
  var La = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c
    },
    Ma = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c()
          } catch (d) {}
        }
      }
    },
    Na = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    },
    Oa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c
    },
    Pa = function (a, b) {
      return a.substring(0, b.length) === b
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a,
      b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ra.test(d) && e && c.push(d)
      });
      return c.join(b)
    },
    Ta = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0)
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c
    };
  
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (null == a) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object"
    },
    Xa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b)
    },
    Ya = function (a) {
      if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (c) {
        return !1
      }
      for (var b in a);
      return void 0 ===
        b || Xa(a, b)
    },
    z = function (a, b) {
      var c = b || ("array" == Va(a) ? [] : {}),
        d;
      for (d in a)
        if (Xa(a, d)) {
          var e = a[d];
          "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e
        } return c
    };
  var Za = function (a) {
    if (void 0 == a || xa(a) || Ya(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0
    }
    return !1
  };

  function $a() {
    for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function bb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }
  var ab, cb;

  function db(a) {
    ab = ab || bb();
    cb = cb || $a();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | h >> 4,
        p = (h & 15) << 2 | l >> 6,
        q = l & 63;
      e || (q = 64, d || (p = 64));
      b.push(ab[m], ab[n], ab[p], ab[q])
    }
    return b.join("")
  }

  function eb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = cb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m
    }
    ab = ab || bb();
    cb = cb || $a();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)))
    }
  };
  var fb = {},
    gb = function (a, b) {
      fb[a] = fb[a] || [];
      fb[a][b] = !0
    },
    hb = function () {
      delete fb.GA4_EVENT
    },
    ib = function (a) {
      var b = fb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return db(c.join("")).replace(/\.+$/, "")
    };
  var jb = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0)
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
      if (c in a && a[c] === b) return c;
    return -1
  };
  var kb, lb = function () {
    if (void 0 === kb) {
      var a = null,
        b = ra.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {
            createHTML: sa,
            createScript: sa,
            createScriptURL: sa
          })
        } catch (c) {
          ra.console && ra.console.error(c.message)
        }
        kb = a
      } else kb = a
    }
    return kb
  };
  var mb = function (a) {
    this.h = a
  };
  mb.prototype.toString = function () {
    return this.h + ""
  };
  var nb = {};
  var ob, pb;
  a: {
    for (var qb = ["CLOSURE_FLAGS"], rb = ra, sb = 0; sb < qb.length; sb++)
      if (rb = rb[qb[sb]], null == rb) {
        pb = null;
        break a
      } pb = rb
  }
  var tb = pb && pb[610401301];
  ob = null != tb ? tb : !1;

  function ub() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b
    }
    return ""
  }
  var vb, wb = ra.navigator;
  vb = wb ? wb.userAgentData || null : null;

  function xb(a) {
    return ob ? vb ? vb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a)
    }) : !1 : !1
  }

  function yb(a) {
    return -1 != ub().indexOf(a)
  };

  function zb() {
    return ob ? !!vb && 0 < vb.brands.length : !1
  }

  function Ab() {
    return zb() ? !1 : yb("Opera")
  }

  function Bb() {
    return yb("Firefox") || yb("FxiOS")
  }

  function Cb() {
    return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk")
  };
  var Db = {},
    Eb = function (a) {
      this.h = a
    };
  Eb.prototype.toString = function () {
    return this.h.toString()
  };
  var Fb = function (a) {
    return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml"
  };
  /*

   SPDX-License-Identifier: Apache-2.0
  */
  var Gb = ea([""]),
    Hb = fa(["\x00"], ["\\0"]),
    Ib = fa(["\n"], ["\\n"]),
    Jb = fa(["\x00"], ["\\u0000"]);

  function Kb(a) {
    return -1 === a.toString().indexOf("`")
  }
  Kb(function (a) {
    return a(Gb)
  }) || Kb(function (a) {
    return a(Hb)
  }) || Kb(function (a) {
    return a(Ib)
  }) || Kb(function (a) {
    return a(Jb)
  });
  var Lb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

  function Mb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  };

  function Nb(a) {
    var b = a = Pb(a),
      c = lb(),
      d = c ? c.createHTML(b) : b;
    return new Eb(d, Db)
  }

  function Pb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a
  };
  var C = window,
    E = document,
    Qb = navigator,
    Rb = E.currentScript && E.currentScript.src,
    Sb = function (a, b) {
      var c = C[a];
      C[a] = void 0 === c ? b : c;
      return C[a]
    },
    Tb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b())
      })
    },
    Ub = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Vb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };

  function Wb(a, b, c) {
    b && k(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e)
    })
  }
  var Xb = function (a, b, c, d, e) {
      var f = E.createElement("script");
      Wb(f, d, Ub);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var h, l = Pb(a),
        m = lb(),
        n = m ? m.createScriptURL(l) : l;
      h = new mb(n, nb);
      f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
      var p, q, t, r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
      (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      Tb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = E.getElementsByTagName("script")[0] || E.body || E.head;
        u.parentNode.insertBefore(f, u)
      }
      return f
    },
    Yb = function () {
      if (Rb) {
        var a = Rb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3
      }
      return 1
    },
    Zb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || (h = E.createElement("iframe"), l = !0);
      Wb(h, c, Vb);
      d && k(d, function (n, p) {
        h.dataset[n] = p
      });
      f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
      if (l) {
        var m = E.body &&
          E.body.lastChild || E.body || E.head;
        m.parentNode.insertBefore(h, m)
      }
      Tb(h, b);
      void 0 !== a && (h.src = a);
      return h
    },
    $b = function (a, b, c, d) {
      var e = new Image(1, 1);
      Wb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b()
      };
      e.onerror = function () {
        e.onerror = null;
        c && c()
      };
      e.src = a
    },
    ac = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    bc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    },
    F = function (a) {
      C.setTimeout(a, 0)
    },
    cc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    },
    dc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b
    },
    ec = function (a) {
      var b = E.createElement("div"),
        c = b,
        d = Nb("A<div>" + a + "</div>");
      1 === c.nodeType && Mb(c);
      c.innerHTML = Fb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e
    },
    fc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement
      }
      return null
    },
    gc = function (a) {
      var b;
      try {
        b = Qb.sendBeacon && Qb.sendBeacon(a)
      } catch (c) {
        gb("TAGGING", 15)
      }
      b || $b(a)
    },
    hc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c
    },
    ic = function (a) {
      var b = {
        headers: {
          "Attribution-Reporting-Eligible": "trigger"
        },
        keepalive: !0,
        attributionReporting: {
          eventSourceEligible: !0,
          triggerEligible: !0
        }
      };
      try {
        C.fetch(a, b)
      } catch (c) {}
    },
    jc = function () {
      var a = C.performance;
      if (a && ua(a.now)) return a.now()
    },
    kc = function () {
      return C.performance || void 0
    };

  function lc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-"
    }
  }

  function mc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g"
    }
  }

  function nc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + lc(c) + lc(d);
      case 1:
        return "G2" + mc(c) + mc(d);
      default:
        return "g1--"
    }
  };
  var oc = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        }
      }
    };
    return {
      Ri: a("consent"),
      Bg: a("convert_case_to"),
      Cg: a("convert_false_to"),
      Dg: a("convert_null_to"),
      Eg: a("convert_true_to"),
      Fg: a("convert_undefined_to"),
      wm: a("debug_mode_metadata"),
      ma: a("function"),
      Mf: a("instance_name"),
      Vj: a("live_only"),
      Wj: a("malware_disabled"),
      Xj: a("metadata"),
      bk: a("original_activity_id"),
      Mm: a("original_vendor_template_id"),
      Lm: a("once_on_load"),
      Zj: a("once_per_event"),
      Kh: a("once_per_load"),
      Qm: a("priority_override"),
      Rm: a("respected_consent_types"),
      Ph: a("setup_tags"),
      sd: a("tag_id"),
      Uh: a("teardown_tags")
    }
  }();
  var Lc;
  var Mc = [],
    Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = {},
    Sc, Tc, Uc = function (a) {
      Tc = Tc || a
    },
    Vc = function (a) {},
    Wc, Xc = [],
    Yc = function (a, b) {
      var c = a[oc.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Rc[c],
        f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Xc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
      e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";
            else {
              var q;
              switch (b.type) {
                case 2:
                  q = Mc[p];
                  break;
                case 1:
                  q = Pc[p];
                  break;
                default:
                  n = "";
                  break a
              }
              var t = q && q[oc.Mf];
              n =
                t ? String(t) : ""
            }
          }
          b.name = n
        }
        e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name)
      }
      var r, u;
      e && (r = e(h));
      if (!e || f) u = Lc(c, l, b);
      f && d && (Za(r) ? typeof r !== typeof u && d.reportMacroDiscrepancy(d.id, c) : r !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? r : u
    },
    $c = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Zc(a[e], b, c));
      return d
    },
    Zc = function (a, b, c) {
      if (xa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Zc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Mc[f];
            if (!h || b.isBlocked(h)) return;
            c[f] = !0;
            var l = String(h[oc.Mf]);
            try {
              var m = $c(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Yc(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              Wc && (d = Wc.yk(d, m))
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), l), d = !1
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[Zc(a[n], b, c)] = Zc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = Zc(a[q], b, c);
              Tc &&
                (p = p || Tc.pl(t));
              d.push(t)
            }
            return Tc && p ? Tc.Ak(d) : d.join("");
          case "escape":
            d = Zc(a[1], b, c);
            if (Tc && xa(a[1]) && "macro" === a[1][0] && Tc.ql(a)) return Tc.Pl(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) pc[a[r]] && (d = pc[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Pc[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              ei: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[oc.ma] = a[1];
            var w = ad(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " +
              a[0] + ".");
        }
      }
      return a
    },
    ad = function (a, b, c) {
      try {
        return Sc($c(a, b, c))
      } catch (d) {
        JSON.stringify(a)
      }
      return 2
    },
    bd = function (a) {
      var b = a[oc.ma];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Rc[b]
    };
  var ed = function (a) {
      function b(t) {
        for (var r = 0; r < t.length; r++) d[t[r]] = !0
      }
      for (var c = [], d = [], e = cd(a), f = 0; f < Nc.length; f++) {
        var h = Nc[f],
          l = dd(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || [])
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Pc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p
    },
    dd = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1
      }
      return !0
    },
    cd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ad(Oc[c], a));
        return b[c]
      }
    };
  var fd = {
    yk: function (a, b) {
      b[oc.Bg] && "string" === typeof a && (a = 1 == b[oc.Bg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(oc.Dg) && null === a && (a = b[oc.Dg]);
      b.hasOwnProperty(oc.Fg) && void 0 === a && (a = b[oc.Fg]);
      b.hasOwnProperty(oc.Eg) && !0 === a && (a = b[oc.Eg]);
      b.hasOwnProperty(oc.Cg) && !1 === a && (a = b[oc.Cg]);
      return a
    }
  };
  var gd = [],
    hd = function (a) {
      return void 0 == gd[a] ? !1 : gd[a]
    };
  var vd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
    wd = new Ba;
  var Dd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

  function Ed(a, b) {
    for (var c = "", d = !0; 7 < a;) {
      var e = a & 31;
      a >>= 5;
      d ? d = !1 : e |= 32;
      c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
    }
    a <<= 2;
    d || (a |= 32);
    return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
  };
  var Gd = function (a) {
      return Fd ? E.querySelectorAll(a) : null
    },
    Hd = function (a, b) {
      if (!Fd) return null;
      if (Element.prototype.closest) try {
        return a.closest(b)
      } catch (e) {
        return null
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!E.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d
        } catch (e) {
          break
        }
        d = d.parentElement || d.parentNode
      } while (null !== d && 1 === d.nodeType);
      return null
    },
    Id = !1;
  if (E.querySelectorAll) try {
    var Jd = E.querySelectorAll(":root");
    Jd && 1 == Jd.length && Jd[0] == E.documentElement && (Id = !0)
  } catch (a) {}
  var Fd = Id;
  var K = function (a) {
    gb("GTM", a)
  };
  var L = {
      g: {
        ya: "ad_personalization",
        H: "ad_storage",
        N: "ad_user_data",
        P: "analytics_storage",
        ac: "region",
        Sd: "consent_updated",
        kf: "wait_for_update",
        Vi: "ads",
        vm: "all",
        Wi: "maps",
        Xi: "playstore",
        Yi: "search",
        Zi: "shopping",
        aj: "youtube",
        cj: "app_remove",
        dj: "app_store_refund",
        ej: "app_store_subscription_cancel",
        fj: "app_store_subscription_convert",
        gj: "app_store_subscription_renew",
        Gg: "add_payment_info",
        Hg: "add_shipping_info",
        bc: "add_to_cart",
        fc: "remove_from_cart",
        Ig: "view_cart",
        Gb: "begin_checkout",
        hc: "select_item",
        Xa: "view_item_list",
        kb: "select_promotion",
        Ya: "view_promotion",
        oa: "purchase",
        ic: "refund",
        Ba: "view_item",
        Jg: "add_to_wishlist",
        ij: "exception",
        jj: "first_open",
        kj: "first_visit",
        qa: "gtag.config",
        La: "gtag.get",
        lj: "in_app_purchase",
        jc: "page_view",
        mj: "screen_view",
        nj: "session_start",
        oj: "timing_complete",
        pj: "track_social",
        Td: "user_engagement",
        lb: "gclid",
        ra: "ads_data_redaction",
        ka: "allow_ad_personalization_signals",
        qf: "allow_custom_scripts",
        rf: "allow_display_features",
        Ud: "allow_enhanced_conversions",
        Za: "allow_google_signals",
        Ca: "allow_interest_groups",
        qj: "app_id",
        rj: "app_installer_id",
        sj: "app_name",
        tj: "app_version",
        Hb: "auid",
        uj: "auto_detection_enabled",
        Ib: "aw_remarketing",
        tf: "aw_remarketing_only",
        Vd: "discount",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        X: "items",
        Yd: "aw_merchant_id",
        Kg: "aw_basket_type",
        Hc: "campaign_content",
        Ic: "campaign_id",
        Jc: "campaign_medium",
        Kc: "campaign_name",
        Lc: "campaign",
        Mc: "campaign_source",
        Nc: "campaign_term",
        nb: "client_id",
        vj: "content_group",
        wj: "content_type",
        Ma: "conversion_cookie_prefix",
        kc: "conversion_id",
        Da: "conversion_linker",
        Jb: "conversion_api",
        Zd: "cookie_deprecation",
        Ra: "cookie_domain",
        Fa: "cookie_expires",
        Sa: "cookie_flags",
        mc: "cookie_name",
        Oc: "cookie_path",
        Na: "cookie_prefix",
        nc: "cookie_update",
        oc: "country",
        sa: "currency",
        ae: "customer_lifetime_value",
        Pc: "custom_map",
        Lg: "gcldc",
        xj: "debug_mode",
        Z: "developer_id",
        yj: "disable_merchant_reported_purchases",
        Qc: "dc_custom_params",
        zj: "dc_natural_search",
        Mg: "dynamic_event_settings",
        Ng: "affiliation",
        be: "checkout_option",
        uf: "checkout_step",
        Og: "coupon",
        Rc: "item_list_name",
        vf: "list_name",
        Aj: "promotions",
        Sc: "shipping",
        wf: "tax",
        ce: "engagement_time_msec",
        de: "enhanced_client_id",
        ee: "enhanced_conversions",
        Pg: "enhanced_conversions_automatic_settings",
        fe: "estimated_delivery_date",
        xf: "euid_logged_in_state",
        Tc: "event_callback",
        Bj: "event_category",
        ob: "event_developer_id_string",
        Cj: "event_label",
        Qg: "event",
        he: "event_settings",
        ie: "event_timeout",
        Dj: "description",
        Ej: "fatal",
        Fj: "experiments",
        yf: "firebase_id",
        je: "first_party_collection",
        ke: "_x_20",
        cb: "_x_19",
        Rg: "fledge",
        Sg: "flight_error_code",
        Tg: "flight_error_message",
        Ug: "fl_activity_category",
        Vg: "fl_activity_group",
        zf: "fl_advertiser_id",
        Wg: "fl_ar_dedupe",
        Af: "match_id",
        Xg: "fl_random_number",
        Yg: "tran",
        Zg: "u",
        me: "gac_gclid",
        qc: "gac_wbraid",
        ah: "gac_wbraid_multiple_conversions",
        bh: "ga_restrict_domain",
        eh: "ga_temp_client_id",
        ne: "gdpr_applies",
        fh: "geo_granularity",
        pb: "value_callback",
        eb: "value_key",
        zm: "google_ono",
        Kb: "google_signals",
        gh: "google_tld",
        oe: "groups",
        hh: "gsa_experiment_id",
        ih: "iframe_state",
        Uc: "ignore_referrer",
        Bf: "internal_traffic_results",
        rb: "is_legacy_converted",
        sb: "is_legacy_loaded",
        pe: "is_passthrough",
        qe: "_lps",
        Ga: "language",
        Cf: "legacy_developer_id_string",
        Ha: "linker",
        Vc: "accept_incoming",
        Lb: "decorate_forms",
        T: "domains",
        sc: "url_position",
        jh: "method",
        Gj: "name",
        Wc: "new_customer",
        kh: "non_interaction",
        Hj: "optimize_id",
        Ij: "page_hostname",
        Xc: "page_path",
        Ia: "page_referrer",
        tb: "page_title",
        lh: "passengers",
        mh: "phone_conversion_callback",
        Jj: "phone_conversion_country_code",
        nh: "phone_conversion_css_class",
        Kj: "phone_conversion_ids",
        oh: "phone_conversion_number",
        ph: "phone_conversion_options",
        Df: "_protected_audience_enabled",
        Yc: "quantity",
        se: "redact_device_info",
        Ef: "referral_exclusion_definition",
        Mb: "restricted_data_processing",
        Lj: "retoken",
        Mj: "sample_rate",
        Ff: "screen_name",
        ub: "screen_resolution",
        Nj: "search_term",
        Oa: "send_page_view",
        Nb: "send_to",
        Zc: "server_container_url",
        ad: "session_duration",
        te: "session_engaged",
        Gf: "session_engaged_time",
        vb: "session_id",
        ue: "session_number",
        bd: "delivery_postal_code",
        Am: "temporary_client_id",
        Hf: "topmost_url",
        Oj: "tracking_id",
        If: "traffic_type",
        wa: "transaction_id",
        Ob: "transport_url",
        qh: "trip_type",
        Pb: "update",
        wb: "url_passthrough",
        dd: "_user_agent_architecture",
        ed: "_user_agent_bitness",
        fd: "_user_agent_full_version_list",
        gd: "_user_agent_mobile",
        hd: "_user_agent_model",
        jd: "_user_agent_platform",
        kd: "_user_agent_platform_version",
        ld: "_user_agent_wow64",
        Aa: "user_data",
        rh: "user_data_auto_latency",
        sh: "user_data_auto_meta",
        th: "user_data_auto_multi",
        uh: "user_data_auto_selectors",
        vh: "user_data_auto_status",
        we: "user_data_mode",
        xe: "user_data_settings",
        Pa: "user_id",
        Ta: "user_properties",
        wh: "_user_region",
        xh: "us_privacy_string",
        da: "value",
        uc: "wbraid",
        yh: "wbraid_multiple_conversions",
        Eh: "_host_name",
        Fh: "_in_page_command",
        Gh: "_is_passthrough_cid",
        Rb: "non_personalized_ads",
        rd: "_sst_parameters",
        ab: "conversion_label",
        za: "page_location",
        qb: "global_developer_id_string",
        ve: "tc_privacy_string"
      }
    },
    ge = {},
    he = Object.freeze((ge[L.g.ka] = 1, ge[L.g.rf] = 1, ge[L.g.Ud] = 1, ge[L.g.Za] = 1, ge[L.g.X] = 1, ge[L.g.Ra] = 1, ge[L.g.Fa] = 1, ge[L.g.Sa] = 1, ge[L.g.mc] = 1, ge[L.g.Oc] = 1, ge[L.g.Na] =
      1, ge[L.g.nc] = 1, ge[L.g.Pc] = 1, ge[L.g.Z] = 1, ge[L.g.Mg] = 1, ge[L.g.Tc] = 1, ge[L.g.he] = 1, ge[L.g.ie] = 1, ge[L.g.je] = 1, ge[L.g.bh] = 1, ge[L.g.Kb] = 1, ge[L.g.gh] = 1, ge[L.g.oe] = 1, ge[L.g.Bf] = 1, ge[L.g.rb] = 1, ge[L.g.sb] = 1, ge[L.g.Ha] = 1, ge[L.g.Ef] = 1, ge[L.g.Mb] = 1, ge[L.g.Oa] = 1, ge[L.g.Nb] = 1, ge[L.g.Zc] = 1, ge[L.g.ad] = 1, ge[L.g.Gf] = 1, ge[L.g.bd] = 1, ge[L.g.Ob] = 1, ge[L.g.Pb] = 1, ge[L.g.xe] = 1, ge[L.g.Ta] = 1, ge[L.g.rd] = 1, ge));
  Object.freeze([L.g.za, L.g.Ia, L.g.tb, L.g.Ga, L.g.Ff, L.g.Pa, L.g.yf, L.g.vj]);
  var ie = {},
    je = Object.freeze((ie[L.g.cj] = 1, ie[L.g.dj] = 1, ie[L.g.ej] = 1, ie[L.g.fj] = 1, ie[L.g.gj] = 1, ie[L.g.jj] = 1, ie[L.g.kj] = 1, ie[L.g.lj] = 1, ie[L.g.nj] = 1, ie[L.g.Td] = 1, ie)),
    ke = {},
    le = Object.freeze((ke[L.g.Gg] = 1, ke[L.g.Hg] = 1, ke[L.g.bc] = 1, ke[L.g.fc] = 1, ke[L.g.Ig] = 1, ke[L.g.Gb] = 1, ke[L.g.hc] = 1, ke[L.g.Xa] = 1, ke[L.g.kb] = 1, ke[L.g.Ya] = 1, ke[L.g.oa] = 1, ke[L.g.ic] = 1, ke[L.g.Ba] = 1, ke[L.g.Jg] = 1, ke)),
    me = Object.freeze([L.g.ka, L.g.Za, L.g.nc, L.g.Uc, L.g.Pb]),
    ne = Object.freeze([].concat(me)),
    oe = Object.freeze([L.g.Fa, L.g.ie, L.g.ad, L.g.Gf,
      L.g.ce
    ]),
    pe = Object.freeze([].concat(oe)),
    qe = {},
    re = (qe[L.g.H] = "1", qe[L.g.P] = "2", qe[L.g.N] = "3", qe[L.g.ya] = "4", qe),
    se = {},
    te = Object.freeze((se[L.g.ka] = 1, se[L.g.Ud] = 1, se[L.g.Ca] = 1, se[L.g.Ib] = 1, se[L.g.tf] = 1, se[L.g.Vd] = 1, se[L.g.Wd] = 1, se[L.g.Xd] = 1, se[L.g.X] = 1, se[L.g.Yd] = 1, se[L.g.Ma] = 1, se[L.g.Da] = 1, se[L.g.Ra] = 1, se[L.g.Fa] = 1, se[L.g.Sa] = 1, se[L.g.Na] = 1, se[L.g.sa] = 1, se[L.g.ae] = 1, se[L.g.Z] = 1, se[L.g.yj] = 1, se[L.g.ee] = 1, se[L.g.fe] = 1, se[L.g.yf] = 1, se[L.g.je] = 1, se[L.g.rb] = 1, se[L.g.sb] = 1, se[L.g.Ga] = 1, se[L.g.Wc] = 1, se[L.g.za] =
      1, se[L.g.Ia] = 1, se[L.g.mh] = 1, se[L.g.nh] = 1, se[L.g.oh] = 1, se[L.g.ph] = 1, se[L.g.Mb] = 1, se[L.g.Oa] = 1, se[L.g.Nb] = 1, se[L.g.Zc] = 1, se[L.g.bd] = 1, se[L.g.wa] = 1, se[L.g.Ob] = 1, se[L.g.Pb] = 1, se[L.g.wb] = 1, se[L.g.Aa] = 1, se[L.g.Pa] = 1, se[L.g.da] = 1, se)),
    ue = {},
    we = Object.freeze((ue[L.g.Yi] = "s", ue[L.g.aj] = "y", ue[L.g.Xi] = "p", ue[L.g.Zi] = "h", ue[L.g.Vi] = "a", ue[L.g.Wi] = "m", ue));
  Object.freeze(L.g);
  var xe = {},
    ye = C.google_tag_manager = C.google_tag_manager || {},
    ze = Math.random();
  xe.Nf = "3bt0";
  xe.qd = Number("0") || 0;
  xe.ba = "dataLayer";
  xe.Ti = "";
  var Ae = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
    },
    Be = {
      __paused: 1,
      __tg: 1
    },
    Ce;
  for (Ce in Ae) Ae.hasOwnProperty(Ce) && (Be[Ce] = 1);
  var De = Fa(""),
    Ee, Fe = !1;
  Ee = Fe;
  var Ge, He = !1;
  Ge = He;
  var Ie, Je = !1;
  Ie = Je;
  var Ke, Le = !1;
  Le = !0;
  Ke = Le;
  xe.Gc = "www.googletagmanager.com";
  var Me = "" + xe.Gc + (Ee ? "/gtag/js" : "/gtm.js"),
    Ne = null,
    Oe = null,
    Pe = {},
    Qe = {},
    Re = {},
    Se = function () {
      var a = ye.sequence || 1;
      ye.sequence = a + 1;
      return a
    };
  xe.Si = "";
  var Te = "";
  xe.Ee = Te;
  var Ue = new Ba,
    Ve = {},
    We = {},
    Ze = {
      name: xe.ba,
      set: function (a, b) {
        z(Qa(a, b), Ve);
        Xe()
      },
      get: function (a) {
        return Ye(a, 2)
      },
      reset: function () {
        Ue = new Ba;
        Ve = {};
        Xe()
      }
    },
    Ye = function (a, b) {
      return 2 != b ? Ue.get(a) : $e(a)
    },
    $e = function (a) {
      var b, c = a.split(".");
      b = b || [];
      for (var d = Ve, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return
      }
      return d
    },
    af = function (a, b) {
      We.hasOwnProperty(a) || (Ue.set(a, b), z(Qa(a, b), Ve), Xe())
    },
    Xe = function (a) {
      k(We, function (b, c) {
        Ue.set(b, c);
        z(Qa(b), Ve);
        z(Qa(b,
          c), Ve);
        a && delete We[b]
      })
    },
    bf = function (a, b) {
      var c, d = 1 !== (void 0 === b ? 2 : b) ? $e(a) : Ue.get(a);
      "array" === Va(d) || "object" === Va(d) ? c = z(d) : c = d;
      return c
    };
  var jf = function (a) {
    var b = 1,
      c, d, e;
    if (a)
      for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b
  };
  var kf = [];

  function lf(a) {
    switch (a) {
      case 33:
        return 3;
      case 60:
        return 14;
      case 61:
        return 8;
      case 73:
        return 11;
      case 74:
        return 12;
      case 77:
        return 10;
      case 79:
        return 13;
      case 75:
        return 15
    }
  }

  function N(a) {
    kf[a] = !0;
    var b = lf(a);
    b && (gd[b] = !0)
  }
  N(5);
  N(6);
  N(11);
  N(7);
  N(8);
  N(19);
  N(9);
  N(10);
  N(13);
  N(14);
  N(15);
  N(22);
  N(17);
  N(23);
  N(26);
  N(27);
  N(28);
  N(29);
  N(31);
  N(32);
  N(35);
  N(37);
  N(41);
  N(42);
  N(43);
  N(45);
  N(46);
  N(50);
  N(53);
  N(56);
  N(57);
  N(58);
  N(59);
  N(62);
  N(63);
  N(64);
  N(66);
  N(67);
  N(68);
  N(69);
  N(70);
  N(75);
  N(77);
  N(78);
  N(81);
  N(83);
  N(88);

  N(94);

  N(103);
  N(105), N(92), N(52), N(106), N(107);
  N(61);

  function Q(a) {
    return !!kf[a]
  }
  var mf = !1;

  function nf(a) {}
  var of = Number('1');
  var pf = function (a) {
    gb("HEALTH", a)
  };
  var qf;
  try {
    qf = JSON.parse(eb("e30"))
  } catch (a) {
    K(123), pf(2), qf = {}
  }
  var rf = function () {
      return qf["0"] || ""
    },
    sf = function () {
      var a = !1;
      return a
    },
    tf = function () {
      var a = "";
      return a
    },
    uf = function () {
      var a = !1;
      return a
    },
    vf = function () {
      var a = "";
      return a
    };
  var wf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var xf = function (a) {
    xf[" "](a);
    return a
  };
  xf[" "] = function () {};
  var zf = function () {
    var a = yf,
      b = "ag";
    if (a.ag && a.hasOwnProperty(b)) return a.ag;
    var c = new a;
    return a.ag = c
  };
  var yf = function () {
    var a = {};
    this.h = function () {
      var b = wf.h,
        c = wf.defaultValue;
      return null != a[b] ? a[b] : c
    };
    this.C = function () {
      a[wf.h] = !0
    }
  };
  var Af = !1,
    Bf = !1,
    Cf = {},
    Df = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };

  function Ef() {
    var a = Sb("google_tag_data", {});
    return a.ics = a.ics || new Ff
  }
  var Ff = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = []
  };
  Ff.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    gb("TAGGING", 19);
    void 0 == b ? gb("TAGGING", 18) : Gf(this, a, "granted" === b, c, d, e, f)
  };
  Ff.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Gf(this, a[c], void 0, void 0, "", "", b)
  };
  var Gf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Hf(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        t = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) l[b] = t;
      q && C.setTimeout(function () {
        l[b] === t && t.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
      }, h)
    }
  };
  ca = Ff.prototype;
  ca.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in Cf) Cf.hasOwnProperty(d) && Cf[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var h = ha(c), l = h.next(); !l.done; l = h.next()) If(this, l.value)
    } else if (void 0 !== b && f !== b) {
      var m = ha(c);
      for (l = m.next(); !l.done; l = m.next()) If(this, l.value)
    }
  };
  ca.update = function (a, b) {
    this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c)
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Hf(m, l, d, e)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet
      };
      if ("" !== d || !1 !== h.declare) f[a] = n
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b)
  };
  ca.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Cf.hasOwnProperty(a)) {
      var e = b[Cf[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (hd(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Df.hasOwnProperty(a)) return Df[a] ? 3 : 4
    }
    return 0
  };
  ca.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l, m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;l = d.toUpperCase();
      if (Hf(p, n, l, e.toUpperCase())) {
        var q = {
          enabled: "granted" === b,
          region: p
        };
        if ("" !== l || !1 !== m.enabled) {
          h[a] = q;
          f = !0;
          break a
        }
      }
      f = !1
    }
    f && (this.usedSetCps = !0)
  };
  ca.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Hk: b
    })
  };
  var If = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      xa(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.si = !0)
    }
  };
  Ff.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.si) {
        d.si = !1;
        try {
          d.Hk({
            consentEventId: a,
            consentPriorityId: b
          })
        } catch (e) {}
      }
    }
  };

  function Hf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
  }
  var Mf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return (g(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0
        }
      })
    },
    Nf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return b.getConsentState(a)
    },
    Of = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet
    },
    Pf = function () {
      if (!zf().h()) return !1;
      var a = Ef();
      a.accessedAny = !0;
      return a.active
    },
    Qf = function () {
      var a = Ef();
      a.accessedDefault = !0;
      return a.usedDefault
    },
    Rf = function (a, b) {
      Ef().addListener(a,
        b)
    },
    Sf = function (a, b) {
      Ef().notifyListeners(a, b)
    },
    Tf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++)
          if (!Of(b[e])) return !0;
        return !1
      }
      if (c()) {
        var d = !1;
        Rf(b, function (e) {
          d || c() || (d = !0, a(e))
        })
      } else a({})
    },
    Uf = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Mf(n) && !f[n] && l.push(n)
        }
        return l
      }

      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0
      }
      var e = g(b) ? [b] : b,
        f = {},
        h = c();
      h.length !== e.length && (d(h), Rf(e, function (l) {
        function m(q) {
          0 !== q.length && (d(q), l.consentTypes = q, a(l))
        }
        var n = c();
        if (0 !== n.length) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : C.setTimeout(function () {
            m(c())
          }, 500)
        }
      }))
    };

  function Vf() {}

  function Wf() {};
  var Xf = [L.g.H, L.g.P, L.g.N, L.g.ya],
    Yf = function (a) {
      for (var b = a[L.g.ac], c = Array.isArray(b) ? b : [b], d = {
          Cd: 0
        }; d.Cd < c.length; d = {
          Cd: d.Cd
        }, ++d.Cd) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.ac) {
            var l = c[e.Cd],
              m = rf(),
              n = qf["1"] || "";
            Bf = !0;
            Af && gb("TAGGING", 20);
            Ef().declare(f, h, l, m, n)
          }
        }
      }(d))
    },
    Zf = function (a) {
      var b = a[L.g.ac];
      b && K(40);
      var c = a[L.g.kf];
      c && K(41);
      for (var d = xa(b) ? b : [b], e = {
          Dd: 0
        }; e.Dd < d.length; e = {
          Dd: e.Dd
        }, ++e.Dd) k(a, function (f) {
        return function (h, l) {
          if (h !== L.g.ac && h !== L.g.kf) {
            var m = d[f.Dd],
              n = Number(c),
              p = rf(),
              q = qf["1"] || "";
            Af = !0;
            Bf && gb("TAGGING", 20);
            Ef().default(h, l, m, p, q, n)
          }
        }
      }(e))
    },
    $f = function (a, b) {
      k(a, function (c, d) {
        Af = !0;
        Bf && gb("TAGGING", 20);
        Ef().update(c, d)
      });
      Sf(b.eventId, b.priorityId)
    },
    ag = function (a) {
      for (var b = a[L.g.ac], c = Array.isArray(b) ? b : [b], d = {
          Ed: 0
        }; d.Ed < c.length; d = {
          Ed: d.Ed
        }, ++d.Ed) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.ac) {
            var l = c[e.Ed],
              m = rf(),
              n = qf["1"] || "";
            Ef().setCps(f, h, l, m, n)
          }
        }
      }(d))
    },
    S = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Mf(b)
      })
    },
    bg = function (a,
      b) {
      Uf(a, b)
    },
    cg = function (a, b) {
      Tf(a, b)
    },
    dg = function () {
      var a = [L.g.H, L.g.ya, L.g.N];
      Ef().waitForUpdate(a, 500)
    },
    eg = function (a) {
      for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Ef().clearTimeout(d, void 0)
      }
      Sf()
    };
  var fg = function (a) {
      var b = String(a[oc.ma] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b
    },
    gg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
  var ig = function (a) {
      var b = hg();
      b.pending || (b.pending = []);
      za(b.pending, function (c) {
        return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
      }) || b.pending.push({
        target: a,
        onLoad: void 0
      })
    },
    jg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = []
    },
    hg = function () {
      var a = Sb("google_tag_data", {}),
        b = a.tidr;
      b || (b = new jg, a.tidr = b);
      return b
    };
  var kg = {},
    lg = !1,
    mg = {
      ctid: "OPT-KRW4XM3",
      Ie: "",
      oi: "OPT-KRW4XM3",
      ri: "OPT-KRW4XM3"
    };
  kg.nd = Fa("");
  var pg = function () {
      var a = ng();
      return lg ? a.map(og) : a
    },
    rg = function () {
      var a = qg();
      return lg ? a.map(og) : a
    },
    tg = function () {
      return sg(mg.ctid)
    },
    ug = function () {
      return sg(mg.Ie || "_" + mg.ctid)
    },
    ng = function () {
      return mg.oi ? mg.oi.split("|") : [mg.ctid]
    },
    qg = function () {
      return mg.ri ? mg.ri.split("|") : []
    },
    vg = function (a) {
      var b = hg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    },
    sg = function (a) {
      return lg ? og(a) : a
    },
    og = function (a) {
      return "siloed_" + a
    },
    wg = function (a) {
      a = String(a);
      return lg && 0 === a.indexOf("siloed_") ?
        a.substring(7) : a
    },
    xg = function () {
      var a = !1;
      if (a) {
        var b = hg();
        if (b.siloed) {
          for (var c = [], d = ng(), e = qg(), f = {}, h = 0; h < b.siloed.length; f = {
              wd: f.wd
            }, h++) f.wd = b.siloed[h], !lg && za(f.wd.isDestination ? e : d, function (l) {
            return function (m) {
              return m === l.wd.ctid
            }
          }(f)) ? lg = !0 : c.push(f.wd);
          b.siloed = c
        }
      }
    };

  function yg() {
    var a = hg();
    if (a.pending) {
      for (var b, c = [], d = !1, e = pg(), f = rg(), h = {}, l = 0; l < a.pending.length; h = {
          Bc: h.Bc
        }, l++) h.Bc = a.pending[l], za(h.Bc.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.Bc.target.ctid
        }
      }(h)) ? d || (b = h.Bc.onLoad, d = !0) : c.push(h.Bc);
      a.pending = c;
      if (b) try {
        b(ug())
      } catch (m) {}
    }
  }
  var zg = function () {
      for (var a = hg(), b = pg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = pg(), d.destinations = rg()) : a.container[b[c]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        }
      }
      for (var e = rg(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && K(93);
        h ? (h.state = 2, h.containers = pg(), h.destinations = rg()) : a.destination[e[f]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        }
      }
      a.canonical[ug()] = {};
      yg()
    },
    Ag = function (a) {
      return !!hg().container[a]
    },
    Bg = function () {
      return {
        ctid: tg(),
        isDestination: kg.nd
      }
    };

  function Cg(a) {
    var b = hg();
    (b.siloed = b.siloed || []).push(a)
  }
  var Dg = function () {
      var a = hg().container,
        b;
      for (b in a)
        if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1
    },
    Eg = function () {
      var a = {};
      k(hg().destination, function (b, c) {
        0 === c.state && (a[b] = c)
      });
      return a
    },
    Fg = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
    };
  var Gg = {
      sampleRate: "0.005000",
      Oi: "",
      Ni: Number("5"),
      mn: Number("")
    },
    Hg = [];

  function Ig(a) {
    Hg.push(a)
  }
  var Jg = !1,
    Kg;
  if (!(Kg = gg)) {
    var Lg = Math.random(),
      Mg = Gg.sampleRate;
    Kg = Lg < Number(Mg)
  }
  var Ng = Kg,
    Og = "https://www.googletagmanager.com/a?id=" + mg.ctid,
    Pg = void 0,
    Qg = {},
    Rg = void 0,
    Sg = new function () {
      var a = 5;
      0 < Gg.Ni && (a = Gg.Ni);
      this.h = 0;
      this.D = [];
      this.C = a
    },
    Tg = 1E3;

  function Ug(a, b) {
    var c = Pg;
    if (void 0 === c)
      if (b) c = Se();
      else return "";
    for (var d = [Og], e = 0; e < Hg.length; e++) {
      var f = Hg[e]({
        eventId: c,
        Fb: !!a,
        Ci: function () {
          Jg = !0
        }
      });
      "&" === f[0] && d.push(f)
    }
    d.push("&z=0");
    return d.join("")
  }

  function Vg() {
    Rg && (C.clearTimeout(Rg), Rg = void 0);
    if (void 0 !== Pg && Wg) {
      var a;
      (a = Qg[Pg]) || (a = Sg.h < Sg.C ? !1 : 1E3 > Ka() - Sg.D[Sg.h % Sg.C]);
      if (a || 0 >= Tg--) K(1), Qg[Pg] = !0;
      else {
        var b = Sg.h++ % Sg.C;
        Sg.D[b] = Ka();
        var c = Ug(!0);
        $b(c);
        if (Jg) {
          var d = c.replace("/a?", "/td?");
          $b(d)
        }
        Wg = Jg = !1
      }
    }
  }
  var Wg = !1;

  function Xg(a) {
    Qg[a] || (a !== Pg && (Vg(), Pg = a), Wg = !0, Rg || (Rg = C.setTimeout(Vg, 500)), 2022 <= Ug().length && Vg())
  }
  var Yg = Aa();

  function Zg() {
    Yg = Aa()
  }

  function $g() {
    return ["&v=3&t=t", "&pid=" + Yg].join("")
  };
  var ah = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.D = e;
      this.K = f;
      this.R = h;
      this.C = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ng && bh(a, a.K[b], a.R[b]) && (K(71), K(79));
      return void 0 !== a.K[b] ? a.K[b] : void 0 !== a.C[b] ? a.C[b] : c
    },
    ch = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.D);
      b(a.K);
      if (Ng)
        for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
          var f = d[e];
          if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
            K(71);
            K(80);
            break
          }
        }
      return Object.keys(c)
    },
    dh = function (a, b, c) {
      function d(m) {
        Ya(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p
        })
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.C[b]), d(a.K[b]), d(a.D[b]), d(a.M[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ng) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.C[b]), d(a.R[b]), d(a.D[b]), d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== h || bh(a, e, l)) K(71), K(81);
        f = h;
        e = l
      }
      return f ? e : void 0
    },
    eh = function (a) {
      var b = [L.g.Lc, L.g.Hc, L.g.Ic, L.g.Jc, L.g.Kc, L.g.Mc, L.g.Nc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d
        };
      if (e(a.h) || e(a.M) || e(a.D)) return c;
      e(a.K);
      if (Ng) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.R);
        bh(a, c, f) && (K(71), K(82));
        c = f;
        d = h
      }
      if (d) return c;
      e(a.C);
      return c
    },
    bh = function (a, b, c) {
      if (!Ng) return !1;
      try {
        if (b === c) return !1;
        var d = Va(b);
        if (d !== Va(c) || !(Ya(b) && Ya(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++)
            if (bh(a, b[e], c[e])) return !0
        } else {
          for (var f in c)
            if (!b.hasOwnProperty(f)) return !0;
          for (var h in b)
            if (!c.hasOwnProperty(h) || bh(a, b[h], c[h])) return !0
        }
      } catch (l) {
        K(72)
      }
      return !1
    },
    fh = function (a, b) {
      this.ze = a;
      this.Ae = b;
      this.K = {};
      this.Qb = {};
      this.h = {};
      this.M = {};
      this.C = {};
      this.yb = {};
      this.D = {};
      this.xb = function () {};
      this.Ea = function () {};
      this.R = !1
    },
    gh = function (a, b) {
      a.K = b;
      return a
    },
    hh = function (a, b) {
      a.Qb = b;
      return a
    },
    ih = function (a, b) {
      a.h = b;
      return a
    },
    jh = function (a, b) {
      a.M = b;
      return a
    },
    kh = function (a,
      b) {
      a.C = b;
      return a
    },
    lh = function (a, b) {
      a.yb = b;
      return a
    },
    mh = function (a, b) {
      a.D = b || {};
      return a
    },
    nh = function (a, b) {
      a.xb = b;
      return a
    },
    oh = function (a, b) {
      a.Ea = b;
      return a
    },
    ph = function (a, b) {
      a.R = b;
      return a
    },
    qh = function (a) {
      return new ah(a.ze, a.Ae, a.K, a.Qb, a.h, a.M, a.C, a.yb, a.D, a.xb, a.Ea, a.R)
    };

  function rh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c
  };
  var xh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c;
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d
    },
    yh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c()
        }
      }
    };
  var zh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1)
  };

  function Ah() {
    return ob ? !!vb && !!vb.platform : !1
  }

  function Bh() {
    return yb("iPhone") && !yb("iPod") && !yb("iPad")
  }

  function Ch() {
    Bh() || yb("iPad") || yb("iPod")
  };
  Ab();
  zb() || yb("Trident") || yb("MSIE");
  yb("Edge");
  !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge"); - 1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
  Ah() || yb("Macintosh");
  Ah() || yb("Windows");
  (Ah() ? "Linux" === vb.platform : yb("Linux")) || Ah() || yb("CrOS");
  Ah() || yb("Android");
  Bh();
  yb("iPad");
  yb("iPod");
  Ch();
  ub().toLowerCase().indexOf("kaios");
  var Dh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e
        }
        e += f + 1
      }
      return -1
    },
    Eh = /#|$/,
    Fh = function (a, b) {
      var c = a.search(Eh),
        d = Dh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    },
    Gh = /[?&]($|#)/,
    Hh = function (a, b, c) {
      for (var d, e = a.search(Eh), f = 0, h, l = []; 0 <= (h = Dh(a, f, b, e));) l.push(a.substring(f,
        h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace(Gh, "$1");
      var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q, t = d.indexOf("#");
        0 > t && (t = d.length);
        var r = d.indexOf("?"),
          u;
        0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
        q = [d.slice(0, r), u, d.slice(t)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
      } else m = d;
      return m
    };
  var Ih = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            xf(a.foo);
            b = !0;
            break a
          } catch (c) {}
          b = !1
        }
        return b
      } catch (c) {
        return !1
      }
    },
    Jh = function (a, b) {
      if (a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };

  function Kh(a) {
    if (!a || !E.head) return null;
    var b = Lh("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b
  }
  var Mh = function (a) {
      if (C.top == C) return 0;
      if (void 0 === a ? 0 : a) {
        var b = C.location.ancestorOrigins;
        if (b) return b[b.length - 1] == C.location.origin ? 1 : 2
      }
      return Ih(C.top) ? 1 : 2
    },
    Lh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase())
    };

  function Nh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Lh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = jb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1)
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1)
      };
      zh(e, "load", f);
      zh(e, "error", f)
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e)
  }
  var Ph = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Jh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
      });
      Oh(c, b)
    },
    Oh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        };
        d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
            eventSourceEligible: "true",
            triggerEligible: "false"
          } :
          e.headers = {
            "Attribution-Reporting-Eligible": "event-source"
          });
        c.fetch(a, e)
      } else Nh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
  var Qh = function () {};
  var Rh = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    },
    Sh = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.M = {};
      this.Ea = 0;
      var c;
      this.R = null != (c = b.im) ? c : 500;
      var d;
      this.K = null != (d = b.Ym) ? d : !1;
      this.D = null
    };
  qa(Sh, Qh);
  var Uh = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Th(a)
  };
  Sh.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.K
      },
      d = yh(function () {
        return a(c)
      }),
      e = 0; - 1 !== this.R && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d()
    }, this.R));
    var f = function (h, l) {
      clearTimeout(e);
      h ? (c = h, c.internalErrorState = Rh(c), c.internalBlockOnErrors = b.K, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c)
    };
    try {
      Vh(this, "addEventListener", f)
    } catch (h) {
      c.tcString =
        "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
    }
  };
  Sh.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vh(this, "removeEventListener", null, a.listenerId)
  };
  var Xh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a
          }
        }
        e = void 0
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = Wh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wh(a.purpose.consents, b)
        } else m = !0;
      else m = 1 === l ? a.purpose && a.vendor ? Wh(a.purpose.legitimateInterests,
        b) && Wh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m
    },
    Wh = function (a, b) {
      return !(!a || !a[b])
    },
    Vh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d)
      } else if (Th(a)) {
        Yh(a);
        var f = ++a.Ea;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage((h.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, h), "*")
        }
      } else c({}, !1)
    },
    Th = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator)
          } catch (l) {
            e = !1
          }
          if (e) {
            b = c;
            break a
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b
              }
            } catch (l) {}
            f = null
          }
          if (!(c = f)) break
        }
        b = null
      }
      a.h = b;
      return a.h
    },
    Yh = function (a) {
      a.D || (a.D = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.M[c.callId](c.returnValue, c.success)
        } catch (d) {}
      }, zh(a.C, "message", a.D))
    },
    Zh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Rh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
        (Ph({
          e: String(a.internalErrorState)
        }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
  var $h = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    ai = rh('', 500);

  function bi() {
    var a = ye.tcf || {};
    return ye.tcf = a
  }
  var ci = function () {
      return new Sh(C, {
        im: -1
      })
    },
    ji = function () {
      var a = bi(),
        b = ci();
      Uh(b) && di() && K(124);
      if ((ei() || Q(61)) && !a.active && Uh(b)) {
        ei() && (a.active = !0, a.Eb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Q(61) ? Ef().active = !0 : fi(), a.tcString = "tcunavailable");
        Q(61) && dg();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) gi(a), Q(61) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a);
            else {
              a.gdprApplies = c.gdprApplies;
              if (Q(61)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 ===
                  bi().enableAdvertiserConsentMode && (a.active = !0);
                if (ii(c) && di()) {
                  eg([L.g.H, L.g.ya, L.g.N]);
                  return
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in $h) $h.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c)
              } else if (ii(c)) {
                var h = {},
                  l;
                for (l in $h)
                  if ($h.hasOwnProperty(l))
                    if ("1" === l) {
                      var m, n = c,
                        p = !0;
                      p = void 0 === p ? !1 : p;
                      m = Zh(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Xh(n, "1",
                        0) : !1;
                      h["1"] = m
                    } else h[l] = Xh(c, l, $h[l]);
                d = h
              }
              d && (a.tcString = c.tcString || "tcempty", a.Eb = d, hi(a))
            }
          })
        } catch (c) {
          gi(a), Q(61) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a)
        }
      }
    };

  function gi(a) {
    a.type = "e";
    a.tcString = "tcunavailable"
  }

  function ii(a) {
    return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
  }

  function fi() {
    var a = {},
      b = (a[L.g.H] = "denied", a[L.g.kf] = ai, a);
    Zf(b)
  }
  var ei = function () {
      return !0 === C.gtag_enable_tcf_support
    },
    di = function () {
      var a = ei();
      return Q(61) ? !a && !0 !== bi().enableAdvertiserConsentMode : !a
    };

  function hi(a) {
    var b = {},
      c = (b[L.g.H] = a.Eb["1"] ? "granted" : "denied", b);
    if (Q(61)) {
      if (!0 !== a.gdprApplies) {
        eg([L.g.H, L.g.ya, L.g.N]);
        Ef().active = !0;
        return
      }
      c[L.g.ya] = a.Eb["3"] && a.Eb["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[L.g.N] = a.Eb["1"] && a.Eb["7"] ? "granted" : "denied" : eg([L.g.N])
    }
    $f(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: ki() || ""
    })
  }
  var ki = function () {
      var a = bi();
      if (a.active) return a.tcString
    },
    li = function () {
      var a = bi();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
    },
    mi = function (a) {
      if (!$h.hasOwnProperty(String(a))) return !0;
      var b = bi();
      return b.active && b.Eb ? !!b.Eb[String(a)] : !0
    };
  var ni = [L.g.H, L.g.P],
    oi = [L.g.H, L.g.P, L.g.N, L.g.ya],
    pi = {},
    qi = (pi[L.g.H] = 1, pi[L.g.P] = 2, pi);

  function ri(a) {
    if (void 0 === a) return 0;
    switch (T(a, L.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2
    }
  }
  var si = function (a) {
      var b = ri(a);
      if (3 === b) return !1;
      if (Q(52)) switch (Nf(L.g.ya)) {
        case 1:
        case 3:
          break;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          break;
        default:
          return !1
      }
      return !0
    },
    ti = function () {
      return Pf() || !Mf(L.g.H) || !Mf(L.g.P)
    },
    ui = function () {
      var a = {},
        b;
      for (b in qi) qi.hasOwnProperty(b) && (a[qi[b]] = Nf(b));
      var c = Q(38) && ni.every(function (e) {
          return Mf(e)
        }),
        d = Q(34);
      return c || d ? nc(a, 1) : nc(a, 0)
    },
    vi = {},
    wi = (vi[L.g.H] = 0, vi[L.g.P] = 1, vi[L.g.N] = 2, vi[L.g.ya] = 3, vi);

  function xi(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0
    }
  }
  var yi = function (a) {
      if (Q(35)) {
        for (var b = "1", c = 0; c < oi.length; c++) {
          var d = b,
            e, f = oi[c],
            h = Cf[f];
          e = void 0 === h ? 0 : wi.hasOwnProperty(h) ? 12 | wi[h] : 8;
          var l = Ef();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = e << 2 | xi(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [xi(m.declare) << 4 | xi(m.default) << 2 | xi(m.update)])
        }
        var n = b,
          p;
        p = "" + (Pf() << 2 | ri(a));
        return n + p
      }
      for (var q = "G1", t = 0; t < ni.length; t++) {
        var r;
        a: {
          var u = ni[t],
            v = Ef();v.accessedDefault = !0;
          switch ((v.entries[u] || {}).default) {
            case !0:
              r = 3;
              break a;
            case !1:
              r = 2;
              break a;
            default:
              r = 1
          }
        }
        switch (r) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-"
        }
      }
      return q
    },
    zi = function () {
      if (!Mf(L.g.N)) return "-";
      var a = {},
        b = Ef().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && (a[c] = {
        enabled: b[c].enabled,
        region: b[c].region
      });
      for (var d = {}, e = ha(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
        var h = f.value;
        d[h] = a[h].enabled
      }
      for (var l = "", m = ha(Object.keys(we)), n = m.next(); !n.done; n = m.next()) {
        var p =
          n.value;
        !1 !== d[p] && (l += we[p])
      }
      return "" === l ? "-" : l
    };

  function Ai() {
    var a = !!qf["6"],
      b = !1;
    Q(61) && (b = !di() && "1" === li());
    return a || b
  }
  var Bi = function () {
      return Ai() ? "1" : "0"
    },
    Ci = function () {
      return Ai() || Ef().usedSetCps || !Mf(L.g.N)
    },
    Di = function () {
      var a = "0",
        b = "0",
        c;
      var d = bi();
      c = d.active && Q(61) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
      var e = "0",
        f;
      var h = bi();
      f = h.active && Q(61) ? h.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
      var l = 0;
      qf["6"] && (l |= 1);
      "1" === li() && (l |= 2);
      ei() && (l |= 4);
      var m;
      var n = bi();
      m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (l |= 8);
      Ef().waitPeriodTimedOut && (l |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l]
    };
  var Ei = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m)
      }
    }
    return d
  };

  function Fi(a) {
    return "null" !== a.origin
  };
  var Ii = function (a, b, c, d) {
      return Gi(d) ? Ei(a, String(b || Hi()), c) : []
    },
    Li = function (a, b, c, d, e) {
      if (Gi(e)) {
        var f = Ji(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Ki(f, function (h) {
            return h.Ke
          }, b);
          if (1 === f.length) return f[0].id;
          f = Ki(f, function (h) {
            return h.Nd
          }, c);
          return f[0] ? f[0].id : void 0
        }
      }
    };

  function Mi(a, b, c, d) {
    var e = Hi(),
      f = window;
    Fi(f) && (f.document.cookie = a);
    var h = Hi();
    return e != h || void 0 != c && 0 <= Ii(b, h, !1, d).indexOf(c)
  }
  var Qi = function (a, b, c) {
      function d(r, u, v) {
        if (null == v) return delete h[u], r;
        h[u] = v;
        return r + "; " + u + "=" + v
      }

      function e(r, u) {
        if (null == u) return delete h[u], r;
        h[u] = !0;
        return r + "; " + u
      }
      if (!Gi(c.jb)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ni(b), f = a + "=" + b);
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.fn);
      f = d(f, "samesite",
        c.hn);
      c.jn && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Oi(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Pi(q, c.path) && Mi(t, a, b, c.jb)) return 0
        }
        return 1
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Pi(m, c.path) ? 1 : Mi(f, a, b, c.jb) ? 0 : 1
    },
    Ri = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Qi(a, b, c)
    };

  function Ki(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
    }
    return 0 < d.length ? d : e
  }

  function Ji(a, b, c) {
    for (var d = [], e = Ii(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m && (m = m.split("-"), d.push({
          id: h.join("."),
          Ke: 1 * m[0] || 1,
          Nd: 1 * m[1] || 1
        }))
      }
    }
    return d
  }
  var Ni = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a
    },
    Si = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ti = /(^|\.)doubleclick\.net$/i,
    Pi = function (a, b) {
      return Ti.test(window.document.location.hostname) || "/" === b && Si.test(a)
    },
    Hi = function () {
      return Fi(window) ? window.document.cookie : ""
    },
    Oi = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"]
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ti.test(e) || Si.test(e) || a.push("none");
      return a
    },
    Gi = function (a) {
      return a && zf().h() ? (g(a) ? [a] : a).every(function (b) {
        return Of(b) && Mf(b)
      }) : !0
    };
  var Ui = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ jf(a) & 2147483647) : String(b)
    },
    Vi = function (a) {
      return [Ui(a), Math.round(Ka() / 1E3)].join(".")
    },
    Yi = function (a, b, c, d, e) {
      var f = Wi(b);
      return Li(a, f, Xi(c), d, e)
    },
    Zi = function (a, b, c, d) {
      var e = "" + Wi(c),
        f = Xi(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".")
    },
    Wi = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length
    },
    Xi = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length -
        1
    };
  var $i = function () {
    ye.dedupe_gclid || (ye.dedupe_gclid = "" + Vi());
    return ye.dedupe_gclid
  };
  var aj = function () {
    var a = !1;
    return a
  };
  var bj = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7
    },
    cj = function (a, b) {
      var c = mg.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = mg.ctid;
      d.Xl = xe.qd;
      d.Zl = xe.Nf;
      d.Bl = kg.nd ? 2 : 1;
      d.Yh = mg.Ie;
      d.Yh !== a && (d.cf = a);
      Q(90) ? d.Fi = 1 : Q(89) && (d.Fi = 2);
      Ee ? (d.af = bj[c], d.af || (d.af = 0)) : d.af = Ke ? 13 : 10;
      Ie ? d.kg = 1 : aj() ? d.kg = 2 : d.kg = 3;
      var e;
      var f = d.af,
        h = d.kg;
      void 0 === f ? e = "" : (h || (h = 0), e = "" + Ed(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | h]);
      var l = d.Xm,
        m = 4 + e + (l ? "" + Ed(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [l] :
          ""),
        n, p = d.Zl;
      n = p && Dd.test(p) ? "" + Ed(3, 2) + p : "";
      var q, t = d.Xl;
      q = t ? "" + Ed(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [t] : "";
      var r;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) r = "";
        else {
          var x = v[1];
          r = "" + Ed(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.Bl || 0) + x
        }
      } else r = "";
      var y = d.Fi,
        A = d.Yh,
        B = d.cf,
        D = d.kn;
      return m + n + q + r + (y ? "" + Ed(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
        "") + (A ? "" + Ed(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [A.length] + A : "") + (B ? "" + Ed(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (D ? "" + Ed(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [D.length] + D : "")
    };
  var dj = void 0;

  function ej(a) {
    var b = "";
    var c = a.Fb;
    void 0 !== dj && (b = "&ual=" + Math.floor(dj), c && (dj = void 0));
    return b
  };
  Bb();
  Bh() || yb("iPod");
  yb("iPad");
  !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
  Cb();
  !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || Ch();
  var fj = {},
    gj = null,
    hj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!gj) {
        gj = {};
        for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = h.concat(l[m].split(""));
          fj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === gj[q] && (gj[q] = p)
          }
        }
      }
      for (var t = fj[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = t[x >> 2],
          D = t[(x & 3) << 4 | y >> 4],
          H = t[(y & 15) << 2 | A >> 6],
          G = t[A & 63];
        r[w++] = "" + B + D + H + G
      }
      var I = 0,
        J = u;
      switch (b.length - v) {
        case 2:
          I = b[v + 1], J = t[(I & 15) << 2] || u;
        case 1:
          var M = b[v];
          r[w] = "" + t[M >> 2] + t[(M & 3) << 4 | I >> 4] + J + u
      }
      return r.join("")
    };
  Object.freeze({});
  Object.freeze({});
  var ij = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

  function jj() {
    var a;
    return null != (a = C.google_tag_data) ? a : C.google_tag_data = {}
  }

  function kj() {
    var a = C.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d
    } else b = null;
    return b
  }

  function lj() {
    var a, b;
    return null != (b = null == (a = C.google_tag_data) ? void 0 : a.uach_promise) ? b : null
  }

  function mj() {
    var a, b;
    return "function" === typeof (null == (a = C.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
  }

  function nj() {
    if (!mj()) return null;
    var a = jj();
    if (a.uach_promise) return a.uach_promise;
    var b = C.navigator.userAgentData.getHighEntropyValues(ij).then(function (c) {
      null != a.uach || (a.uach = c);
      return c
    });
    return a.uach_promise = b
  };
  var tj = /:[0-9]+$/,
    uj = /^\d+\.fls\.doubleclick\.net$/,
    vj = function (a, b, c) {
      function d(p) {
        return hd(10) ? decodeURIComponent(p.replace(/\+/g, " ")) : decodeURIComponent(p).replace(/\+/g, " ")
      }
      for (var e = ha(a.split("&")), f = e.next(); !f.done; f = e.next()) {
        var h = ha(f.value.split("=")),
          l = h.next().value,
          m = ja(h);
        if (d(l) === b) {
          var n = m.join("=");
          return c ? n : d(n)
        }
      }
    },
    yj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = wj(a.protocol) || wj(C.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ?
        a.port : C.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(tj, "").toLowerCase());
      return xj(a, b, c, d, e)
    },
    xj = function (a, b, c, d, e) {
      var f, h = wj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = zj(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(tj, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length))
          }
          break;
        case "port":
          f = String(Number(a.port) ||
            ("http" === h ? 80 : "https" === h ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || gb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = vj(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href
      }
      return f
    },
    wj = function (a) {
      return a ?
        a.replace(":", "").toLowerCase() : ""
    },
    zj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c)
      }
      return b
    },
    Aj = function (a) {
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(tj, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      }
    },
    Bj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0"
      }

      function c(n) {
        return n.split("&").map(b).filter(function (p) {
          return void 0 !==
            p
        }).join("&")
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = Aj(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m
    },
    Cj = function (a) {
      var b = Aj(C.location.href),
        c = yj(b, "host", !1);
      if (c && c.match(uj)) {
        var d = yj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0]
      }
    };

  function Dj(a, b, c, d) {
    var e, f = Number(null != a.Bb ? a.Bb : void 0);
    0 !== f && (e = new Date((b || Ka()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      jb: d
    }
  };
  var Ej;
  var Ij = function () {
      var a = Fj,
        b = Gj,
        c = Hj(),
        d = function (h) {
          a(h.target || h.srcElement || {})
        },
        e = function (h) {
          b(h.target || h.srcElement || {})
        };
      if (!c.init) {
        ac(E, "mousedown", d);
        ac(E, "keyup", d);
        ac(E, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this)
        };
        c.init = !0
      }
    },
    Jj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Hj().decorators.push(f)
    },
    Kj = function (a, b, c) {
      for (var d = Hj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h =
          d[f],
          l;
        if (l = !c || h.forms) a: {
          var m = h.domains,
            n = a,
            p = !!h.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  l = !0;
                  break a
                }
              } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            l = !0;
            break a
          }
          l = !1
        }
        if (l) {
          var t = h.placement;
          void 0 == t && (t = h.fragment ? 2 : 1);
          t === b && Na(e, h.callback())
        }
      }
      return e
    };

  function Hj() {
    var a = Sb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b
  };
  var Lj = /(.*?)\*(.*?)\*(.*)/,
    Mj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Nj = /^(?:www\.|m\.|amp\.)+/,
    Oj = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Pj(a, b) {
    var c = [Qb.userAgent, (new Date).getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Ka() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Ej)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
        e[f] = h
      }
      d = e
    }
    Ej = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ej[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36)
  }

  function Qj() {
    return function (a) {
      var b = Aj(C.location.href),
        c = b.search.replace("?", ""),
        d = vj(c, "_gl", !0) || "";
      a.query = Rj(d) || {};
      var e = yj(b, "fragment"),
        f;
      var h = -1;
      if (Pa(e, "_gl=")) h = 4;
      else {
        var l = e.indexOf("&_gl=");
        0 < l && (h = l + 3 + 2)
      }
      if (0 > h) f = void 0;
      else {
        var m = e.indexOf("&", h);
        f = 0 > m ? e.substring(h) : e.substring(h, m)
      }
      a.fragment = Rj(f || "") || {}
    }
  }
  var Sj = function (a) {
      var b = Qj(),
        c = Hj();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Na(d, e.query), a && Na(d, e.fragment));
      return d
    },
    Rj = function (a) {
      try {
        var b = Tj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              h = eb(d[e + 1]);
            c[f] = h
          }
          gb("TAGGING", 6);
          return c
        }
      } catch (l) {
        gb("TAGGING", 8)
      }
    };

  function Tj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Lj.exec(d);
          if (f) {
            c = f;
            break a
          }
          d = decodeURIComponent(d)
        }
        c = void 0
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === Pj(l, p)) {
              m = !0;
              break a
            } m = !1
        }
        if (m) return l;
        gb("TAGGING", 7)
      }
    }
  }

  function Uj(a, b, c, d, e) {
    function f(q) {
      var t = q,
        r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(t),
        u = t;
      if (r) {
        var v = r[2],
          w = r[4];
        u = r[1];
        w && (u = u + v + w)
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var h = Oj.exec(c);
    if (!h) return "";
    var l = h[1],
      m = h[2] || "",
      n = h[3] || "",
      p = a + "=" + b;
    d ? 0 !== n.substring(1).length && e || (n = "#" + f(n.substring(1))) : m = "?" + f(m.substring(1));
    return "" + l + m + n
  }

  function Vj(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var t, r = [],
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var v = n[u];
            void 0 !== v && v === v && null !== v && "[object Object]" !== v.toString() && (r.push(u), r.push(db(String(v))))
          } var w = r.join("*");
        t = ["1", Pj(w), w].join("*");
        d ? (hd(13) || hd(11) || !p) && Wj("_gl", t, a, p, q) : Xj("_gl", t, a, p, q)
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Kj(b, 1, d),
      f = Kj(b, 2, d),
      h = Kj(b, 4, d),
      l = Kj(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    hd(11) && c(h, !0, !0);
    for (var m in l) l.hasOwnProperty(m) && Yj(m, l[m],
      a)
  }

  function Yj(a, b, c) {
    "a" === c.tagName.toLowerCase() ? Xj(a, b, c) : "form" === c.tagName.toLowerCase() && Wj(a, b, c)
  }

  function Xj(a, b, c, d, e) {
    if (c.href) {
      var f = Uj(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      Lb.test(f) && (c.href = f)
    }
  }

  function Wj(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var h = Uj(a, b, c.action, d, e);
          Lb.test(h) && (c.action = h)
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q)
        }
      }
    }
  }

  function Fj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a
          }
          c = c.parentNode;
          d--
        }
        b = null
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || Vj(e, e.hostname)
      }
    } catch (h) {}
  }

  function Gj(a) {
    try {
      if (a.action) {
        var b = yj(Aj(a.action), "host");
        Vj(a, b)
      }
    } catch (c) {}
  }
  var Zj = function (a, b, c, d) {
      Ij();
      Jj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    },
    ak = function (a, b) {
      Ij();
      Jj(a, [xj(C.location, "host", !0)], b, !0, !0)
    },
    bk = function () {
      var a = E.location.hostname,
        b = Mj.exec(E.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h)
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-")
      }
      var l = a.replace(Nj, ""),
        m = e.replace(Nj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length,
          l.length) === p
      }
      return n
    },
    ck = function (a, b) {
      return !1 === a ? !1 : a || b || bk()
    };
  var dk = ["1"],
    ek = {},
    fk = {},
    kk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = gk(a.prefix);
      if (!ek[c])
        if (hk(c, a.path, a.domain)) {
          var d = fk[gk(a.prefix)];
          ik(a, d ? d.id : void 0, d ? d.ig : void 0)
        } else {
          var e = Cj("auiddc");
          if (e) gb("TAGGING", 17), ek[c] = e;
          else if (b) {
            var f = gk(a.prefix),
              h = Vi();
            if (0 === jk(f, h, a)) {
              var l = Sb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = h)
            }
            hk(c, a.path, a.domain)
          }
        }
    };

  function ik(a, b, c) {
    var d = gk(a.prefix),
      e = ek[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ka() / 1E3)));
          jk(d, l, a, 1E3 * h)
        }
      }
    }
  }

  function jk(a, b, c, d) {
    var e = Zi(b, "1", c.domain, c.path),
      f = Dj(c, d);
    f.jb = lk();
    return Ri(a, e, f)
  }

  function hk(a, b, c) {
    var d = Yi(a, b, c, dk, lk());
    if (!d) return !1;
    mk(a, d);
    return !0
  }

  function mk(a, b) {
    var c = b.split(".");
    5 === c.length ? (ek[a] = c.slice(0, 2).join("."), fk[a] = {
      id: c.slice(2, 4).join("."),
      ig: Number(c[4]) || 0
    }) : 3 === c.length ? fk[a] = {
      id: c.slice(0, 2).join("."),
      ig: Number(c[2]) || 0
    } : ek[a] = b
  }

  function gk(a) {
    return (a || "_gcl") + "_au"
  }

  function nk(a) {
    function b() {
      Mf(c) && a()
    }
    var c = lk();
    Tf(function () {
      b();
      Mf(c) || Uf(b, c)
    }, c)
  }

  function ok(a) {
    var b = Sj(!0),
      c = gk(a.prefix);
    nk(function () {
      var d = b[c];
      if (d) {
        mk(c, d);
        var e = 1E3 * Number(ek[c].split(".")[1]);
        if (e) {
          gb("TAGGING", 16);
          var f = Dj(a, e);
          f.jb = lk();
          var h = Zi(d, "1", a.domain, a.path);
          Ri(c, h, f)
        }
      }
    })
  }

  function pk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Yi(a, e.path, e.domain, dk, lk());
      l && (h[a] = l);
      return h
    };
    nk(function () {
      Zj(f, b, c, d)
    })
  }

  function lk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
  };
  var qk = function (a) {
    for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        ug: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      })
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp
    });
    return b
  };

  function rk(a, b) {
    var c = qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].ug] || (d[c[e].ug] = []);
        var h = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          W: f[2]
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].ug].push(h)
      }
    }
    return d
  };
  var sk = /^\w+$/,
    tk = /^[\w-]+$/,
    uk = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    };

  function vk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
  }
  var wk = function () {
      return zf().h() ? Mf(vk()) : !0
    },
    xk = function (a) {
      function b() {
        var c = wk();
        c && a();
        return c
      }
      Tf(function () {
        b() || Uf(b, vk())
      }, vk())
    },
    zk = function (a) {
      return yk(a).map(function (b) {
        return b.W
      })
    },
    yk = function (a) {
      var b = [];
      if (!Fi(C) || !E.cookie) return b;
      var c = Ii(a, E.cookie, void 0, vk());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
          W: d.W
        }, e++) {
        var f = Ak(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.W = h.W;
          var m = h.timestamp,
            n = h.labels,
            p = za(b, function (q) {
              return function (t) {
                return t.W === q.W
              }
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Bk(p.labels, n || [])) : b.push({
            version: l,
            W: d.W,
            timestamp: m,
            labels: n
          })
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp
      });
      return Ck(b)
    };

  function Bk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d
  }

  function Dk(a) {
    return a && "string" == typeof a && a.match(sk) ? a : "_gcl"
  }
  var Fk = function () {
      var a = Aj(C.location.href),
        b = yj(a, "query", !1, void 0, "gclid"),
        c = yj(a, "query", !1, void 0, "gclsrc"),
        d = yj(a, "query", !1, void 0, "wbraid"),
        e = yj(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || vj(f, "gclid");
        c = c || vj(f, "gclsrc");
        d = d || vj(f, "wbraid")
      }
      return Ek(b, c, e, d)
    },
    Ek = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h)
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && tk.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(tk)) switch (b) {
        case void 0:
          f(a,
            "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha")
      }
      c && f(c, "dc");
      return e
    },
    Qk = function (a) {
      var b = Fk();
      xk(function () {
        Gk(b, !1, a)
      })
    };

  function Gk(a, b, c, d, e) {
    function f(w, x) {
      var y = Rk(w, h);
      y && (Ri(y, x, l), m = !0)
    }
    c = c || {};
    e = e || [];
    var h = Dk(c.prefix);
    d = d || Ka();
    var l = Dj(c, d, !0);
    l.jb = vk();
    var m = !1,
      n = Math.round(d / 1E3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".")
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        t = Rk("gb", h),
        r = !1;
      if (!b)
        for (var u = yk(t), v = 0; v < u.length; v++) u[v].W === q && u[v].labels && 0 < u[v].labels.length &&
          (r = !0);
      r || f("gb", p(q))
    }
  }
  var Tk = function (a, b) {
      var c = Sj(!0);
      xk(function () {
        for (var d = Dk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== uk[f]) {
            var h = Rk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Sk(l), Ka()),
                n;
              b: {
                var p = m;
                if (Fi(C))
                  for (var q = Ii(h, E.cookie, void 0, vk()), t = 0; t < q.length; ++t)
                    if (Sk(q[t]) > p) {
                      n = !0;
                      break b
                    } n = !1
              }
              if (!n) {
                var r = Dj(b, m, !0);
                r.jb = vk();
                Ri(h, l, r)
              }
            }
          }
        }
        Gk(Ek(c.gclid, c.gclsrc), !1, b)
      })
    },
    Rk = function (a, b) {
      var c = uk[a];
      if (void 0 !== c) return b + c
    },
    Sk = function (a) {
      return 0 !== Uk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) :
        0
    };

  function Ak(a) {
    var b = Uk(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      W: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    }
  }

  function Uk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !tk.test(a[2]) ? [] : a
  }
  var Vk = function (a, b, c, d, e) {
      if (xa(b) && Fi(C)) {
        var f = Dk(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Rk(a[m], f);
              if (n) {
                var p = Ii(n, E.cookie, void 0, vk());
                p.length && (l[n] = p.sort()[p.length - 1])
              }
            }
            return l
          };
        xk(function () {
          Zj(h, b, c, d)
        })
      }
    },
    Ck = function (a) {
      return a.filter(function (b) {
        return tk.test(b.W)
      })
    },
    Wk = function (a, b) {
      if (Fi(C)) {
        for (var c = Dk(b.prefix), d = {}, e = 0; e < a.length; e++) uk[a[e]] && (d[a[e]] = uk[a[e]]);
        xk(function () {
          k(d, function (f, h) {
            var l = Ii(c + h, E.cookie, void 0, vk());
            l.sort(function (r, u) {
              return Sk(u) -
                Sk(r)
            });
            if (l.length) {
              var m = l[0],
                n = Sk(m),
                p = 0 !== Uk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Uk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Gk(q, !0, b, n, p)
            }
          })
        })
      }
    };

  function Xk(a, b) {
    for (var c = 0; c < b.length; ++c)
      if (a[b[c]]) return !0;
    return !1
  }
  var Yk = function (a) {
      function b(e, f, h) {
        h && (e[f] = h)
      }
      if (Pf()) {
        var c = Fk();
        if (Xk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ak(function () {
            return d
          }, 3);
          ak(function () {
            var e = {};
            return e._up = "1", e
          }, 1)
        }
      }
    },
    Zk = function (a) {
      if (!hd(11)) return null;
      var b = Sj(!0).gad_source;
      if (null != b) return C.location.hash = "", b;
      if (hd(12)) {
        var c = Aj(C.location.href);
        b = yj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Fk();
        if (Xk(d, a)) return "0"
      }
      return null
    },
    $k = function (a) {
      var b =
        Zk(a);
      null != b && ak(function () {
        var c = {};
        return c.gad_source = b, c
      }, 4)
    },
    al = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!wk()) return e;
      var f = yk(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++) - 1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1E3), l.W].concat(l.labels || [], [b]).join("."),
          p = Dj(c, m, !0);
        p.jb = vk();
        Ri(a, n, p)
      }
      return e
    };

  function bl(a, b) {
    var c = Dk(b),
      d = Rk(a, c);
    if (!d) return 0;
    for (var e = yk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f
  }

  function cl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b
  }
  var dl = function (a) {
    var b = Math.max(bl("aw", a), cl(wk() ? rk() : {}));
    return Math.max(bl("gb", a), cl(wk() ? rk("_gac_gb", !0) : {})) > b
  };
  var jl = /[A-Z]+/,
    kl = /\s/,
    ll = function (a, b) {
      if (g(a)) {
        a = Ia(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (jl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && (f[1] = l[0], f.push(l[1]))
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || kl.test(f[m]) && ("AW" !== d || 1 !== m)) return
            }
            return {
              id: a,
              prefix: d,
              aa: d + "-" + f[0],
              O: f
            }
          }
        }
      }
    },
    nl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = ll(a[d], b);
        e && (c[e.id] = e)
      }
      ml(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l)
      });
      return f
    };

  function ml(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.O[1] && b.push(d.aa)
      } for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var ol = function (a, b, c, d) {
    var e = Yb(),
      f;
    if (1 === e) a: {
      var h = Me;h = h.toLowerCase();
      for (var l = "https://" + h, m = "http://" + h, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var t = p[q].src;
        if (t) {
          t = t.toLowerCase();
          if (0 === t.indexOf(m)) {
            f = 3;
            break a
          }
          1 === n && 0 === t.indexOf(l) && (n = 2)
        }
      }
      f = n
    }
    else f = e;
    return (2 === f || d || "http:" != C.location.protocol ? a : b) + c
  };
  var Al, Bl = !1,
    Cl = function (a) {
      if (!Bl) {
        Bl = !0;
        Al = Al || {}
      }
      return Al[a]
    };
  var Dl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = z(c.eventMetadata || {});
    this.isAborted = !1
  };
  Dl.prototype.copyToHitData = function (a, b, c) {
    var d = T(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && g(d) && Q(67)) try {
      d = c(d)
    } catch (e) {}
    void 0 !== d && (this.h[a] = d)
  };
  var El = function (a) {
      return a.metadata.source_canonical_id
    },
    Fl = function (a, b, c) {
      var d = Cl(a.target.aa);
      return d && d.hasOwnProperty(b) ? d[b] : c
    };

  function Gl(a) {
    return {
      getDestinationId: function () {
        return a.target.aa
      },
      getEventName: function () {
        return a.eventName
      },
      setEventName: function (b) {
        a.eventName = b
      },
      getHitData: function (b) {
        return a.h[b]
      },
      setHitData: function (b, c) {
        a.h[b] = c
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c)
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c)
      },
      getMetadata: function (b) {
        return a.metadata[b]
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c
      },
      isAborted: function () {
        return a.isAborted
      },
      abort: function () {
        a.isAborted = !0
      },
      getFromEventContext: function (b) {
        return T(a.s, b)
      },
      dn: function () {
        return a
      },
      getHitKeys: function () {
        return Object.keys(a.h)
      }
    }
  };

  function Ml(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Aj("" + c + b).href
    }
  }

  function Nl() {
    return !!xe.Ee && "SGTM_TOKEN" !== xe.Ee.split("@@").join("")
  }

  function Ol(a) {
    for (var b = ha([L.g.Zc, L.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d
    }
  };
  var Pl = "",
    Ql = [];

  function Rl(a) {
    var b = "";
    Pl && (b = "&dl=" + encodeURIComponent(Pl));
    0 < Ql.length && (b += "&tdp=" + Ql.join("."));
    a.Fb && (Pl = "", Ql.length = 0, b && a.Ci());
    return b
  };
  var Sl = [];

  function Tl(a) {
    if (!Sl.length) return "";
    var b = "&tdc=" + Sl.join("!");
    a.Fb && (a.Ci(), Sl.length = 0);
    return b
  };
  var Ul = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Vl = {},
    Wl = Object.freeze((Vl[L.g.Oa] = !0, Vl)),
    Xl = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Zl = function (a, b, c) {
      if (Ng && "config" === a && !(1 < ll(b).O.length)) {
        var d, e = Sb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = z(c.K);
        z(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Yl(d[l], f);
          m.length && (Xl && console.log(m), h.push(l))
        }
        h.length && (h.length && Ng && Sl.push(b + "*" + h.join(".")), gb("TAGGING", Ul[E.readyState] ||
          14));
        d[b] = f
      }
    };

  function $l(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c
  }

  function Yl(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var r = t[q];
        return void 0 === r ? Wl[q] : r
      },
      f;
    for (f in $l(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Va(l) || "array" === Va(l),
        p = "object" === Va(m) || "array" === Va(m);
      if (n && p) Yl(l, m, c, h);
      else if (n || p || l !== m) c[h] = !0
    }
    return Object.keys(c)
  };
  var am = {};

  function bm(a, b, c) {
    Ng && void 0 !== a && (am[a] = am[a] || [], am[a].push(c + b), Xg(a))
  }

  function cm(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = am[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete am[b];
    return d
  };
  var em = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("event", [b, a], e, d)
    },
    fm = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("get", [a, b], e, d)
    },
    gm = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.M = {};
      this.R = null;
      this.D = {};
      this.C = !1
    },
    hm = function (a, b, c, d) {
      var e = Ka();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d
    },
    im = function () {
      this.C = {};
      this.D = {};
      this.h = []
    },
    jm = function (a, b) {
      var c = b.aa;
      return a.C[c] = a.C[c] || new gm
    },
    km = function (a, b, c, d) {
      if (d.h) {
        var e = jm(a, d.h),
          f = e.R;
        if (f) {
          var h =
            z(c),
            l = z(e.K[d.h.id]),
            m = z(e.D),
            n = z(e.h),
            p = z(a.D),
            q = {};
          if (Ng) try {
            q = z(Ve)
          } catch (v) {
            K(72)
          }
          var t = d.h.prefix,
            r = function (v) {
              bm(d.messageContext.eventId, t, v)
            },
            u = qh(ph(oh(nh(mh(kh(jh(lh(ih(hh(gh(new fh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function () {
                if (r) {
                  var v = r;
                  r = void 0;
                  v("2");
                  if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                }
              }), function () {
                if (r) {
                  var v = r;
                  r = void 0;
                  v("3");
                  if (d.messageContext.onFailure) d.messageContext.onFailure()
                }
              }),
              !!d.messageContext.isGtmEvent));
          try {
            bm(d.messageContext.eventId, t, "1"), Zl(d.type, d.h.id, u), f(d.h.id, b, d.D, u)
          } catch (v) {
            bm(d.messageContext.eventId, t, "4")
          }
        }
      }
    };
  im.prototype.register = function (a, b, c) {
    var d = jm(this, a);
    3 !== d.status && (d.R = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush())
  };
  im.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === jm(this, c).status && (jm(this, c).status = 2, this.push("require", [{}], c, {})), jm(this, c).C && (d.deferrable = !1));
    this.h.push(new hm(a, c, b, d));
    d.deferrable || this.flush()
  };
  im.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Ab: e.Ab,
        Le: e.Le
      };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable) !h || jm(this, h).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== jm(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return
            }
            break;
          case "set":
            k(f.C[0], function (t, r) {
              z(Qa(t, r), b.D)
            });
            break;
          case "config":
            var l = jm(this, h);
            e.Ab = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Ab)
              }
            }(e));
            var m = !!e.Ab[L.g.Pb];
            delete e.Ab[L.g.Pb];
            var n = h.aa === h.id;
            m || (n ? l.D = {} : l.K[h.id] = {});
            l.C && m || km(this, L.g.qa, e.Ab, f);
            l.C = !0;
            n ? z(e.Ab, l.D) : (z(e.Ab, l.K[h.id]), K(70));
            d = !0;
            break;
          case "event":
            e.Le = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Le)
              }
            }(e));
            km(this, f.C[1], e.Le, f);
            break;
          case "get":
            var p = {},
              q = (p[L.g.eb] = f.C[0], p[L.g.pb] = f.C[1], p);
            km(this, L.g.La, q, f)
        }
        this.h.shift();
        lm(this, f)
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush()
  };
  var lm = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = jm(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
        else
          for (var e in a.C)
            if (a.C.hasOwnProperty(e)) {
              var f = a.C[e];
              if (f && f.M)
                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]()
            }
    },
    mm = function (a, b) {
      var c = dm,
        d = z(b);
      z(jm(c, a).h, d);
      jm(c, a).h = d
    },
    dm = new im;
  var Cm = function () {
    function a(b) {
      ye.pscdl = b
    }
    if (void 0 === ye.pscdl) try {
      "cookieDeprecationLabel" in Qb ? (a("pending"), Qb.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
    } catch (b) {
      a("error")
    }
  };

  function Gm(a) {
    var b = T(a.s, L.g.sb),
      c = T(a.s, L.g.rb);
    b && !c ? (a.eventName !== L.g.qa && a.eventName !== L.g.Td && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0)
  }

  function Hm(a) {
    a.h[L.g.Zd] = ye.pscdl
  };
  var Jm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Km = /^www.googleadservices.com$/,
    Mm = function (a) {
      a || (a = Lm());
      return a.om ? !1 : a.Zk || a.al || a.bl || a.Yf || a.Oe || a.Lk || a.Rk ? !0 : !1
    },
    Lm = function () {
      var a = {},
        b = Sj(!0);
      a.om = !!b._up;
      var c = Fk();
      a.Zk = void 0 !== c.aw;
      a.al = void 0 !== c.dc;
      a.bl = void 0 !== c.gbraid;
      var d = Aj(C.location.href),
        e = yj(d, "query", !1, void 0, "gad");
      a.Yf = void 0 !== e;
      if (!a.Yf) {
        var f = d.hash.replace("#", ""),
          h = vj(f, "gad");
        a.Yf = void 0 !== h
      }
      a.Oe = void 0;
      if (Q(75)) {
        var l = yj(d, "query", !1, void 0, "gad_source");
        a.Oe =
          l;
        if (void 0 === a.Oe) {
          var m = d.hash.replace("#", ""),
            n = vj(m, "gad_source");
          a.Oe = n
        }
      }
      var p = E.referrer ? yj(Aj(E.referrer), "host") : "";
      a.Rk = Jm.test(p);
      a.Lk = Km.test(p);
      return a
    };
  var Nm = function () {
      var a = C.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      }
    },
    Om = function (a) {
      if (E.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !C.getComputedStyle) return !0;
      var c = C.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h,
            f))
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = C.getComputedStyle(d, null))
      }
      return !1
    };
  var Jn = {
    jk: Number('') || 500,
    Rj: Number('') || 5E3,
    Hh: Number('') || 10,
    bj: Number('') || 5E3
  };

  function Kn(a) {
    return a.performance && a.performance.now() || Date.now()
  }
  var Ln = function (a, b) {
    var c;
    return c
  };
  var Mn = "https://" + xe.Gc,
    Nn = Mn + "/gtm/static/",
    On = Number('') || 5,
    Pn = Number('') || 50,
    Qn = Mn,
    Rn = Nn,
    Sn = !1,
    Tn = 0,
    Un = Aa();

  function co() {
    var a = !1;
    return a
  }

  function eo(a) {}

  function go(a, b, c) {}

  function Zn(a, b, c, d) {}

  function fo(a, b, c, d, e) {}

  function ho(a) {}

  function io(a, b, c, d) {}

  function jo() {
    return "attribution-reporting"
  }

  function ko(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
  };
  var lo = !1;

  function mo() {
    if (ko("join-ad-interest-group") && ua(Qb.joinAdInterestGroup)) return !0;
    lo || (Kh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), lo = !0);
    return ko("join-ad-interest-group") && ua(Qb.joinAdInterestGroup)
  }

  function no(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]')
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ka() - d) {
        gb("TAGGING", 9);
        return
      }
      try {
        c.parentNode.removeChild(c)
      } catch (e) {}
      c = void 0
    } else try {
      if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        gb("TAGGING", 10);
        return
      }
    } catch (e) {}
    Zb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ka()
    }, c)
  }

  function oo() {
    return "https://td.doubleclick.net"
  };
  var po = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    qo = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    ro = /^\d+\.fls\.doubleclick\.net$/,
    so = /;gac=([^;?]+)/,
    to = /;gacgb=([^;?]+)/,
    uo = /;gclaw=([^;?]+)/,
    vo = /;gclgb=([^;?]+)/;

  function wo(a, b) {
    if (ro.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(po) ? decodeURIComponent(c[1]) : ""
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].W);
      d.push(e + ":" + f.join(","))
    }
    return 0 < d.length ? d.join(";") : ""
  }
  var xo = function (a, b, c) {
    var d = wk() ? rk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = al("_gac_gb_" + h, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m
      });
      e.push(h + ":" + l.join(","))
    }
    return {
      Kk: f ? e.join(";") : "",
      Jk: wo(d, to)
    }
  };

  function yo(a, b, c) {
    if (ro.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(qo)) return [{
        W: d[1]
      }]
    } else return yk((a || "_gcl") + b);
    return []
  }
  var zo = function (a) {
      return yo(a, "_aw", uo).map(function (b) {
        return b.W
      }).join(".")
    },
    Ao = function (a) {
      return yo(a, "_gb", vo).map(function (b) {
        return b.W
      }).join(".")
    },
    Bo = function (a, b) {
      var c = al((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d
      }) ? "" : c.join(".")
    };
  var Co = function () {
    if (ua(C.__uspapi)) {
      var a = "";
      try {
        C.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
          }
        })
      } catch (b) {}
      return a
    }
  };
  var qp = {
    F: {
      wg: "ads_conversion_hit",
      Fc: "container_execute_start",
      zg: "container_setup_end",
      lf: "container_setup_start",
      xg: "container_blocking_end",
      yg: "container_execute_end",
      Ag: "container_yield_end",
      nf: "container_yield_start",
      Ah: "event_execute_end",
      zh: "event_evaluation_end",
      Jf: "event_evaluation_start",
      Bh: "event_setup_end",
      md: "event_setup_start",
      Ch: "ga4_conversion_hit",
      od: "page_load",
      Nm: "pageview",
      zb: "snippet_load",
      Qh: "tag_callback_error",
      Rh: "tag_callback_failure",
      Sh: "tag_callback_success",
      Th: "tag_execute_end",
      wc: "tag_execute_start"
    }
  };

  function rp() {
    function a(c, d) {
      var e = ib(d);
      e && b.push(c + "=" + e)
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("")
  };
  var sp = !1;
  var $p = function (a, b) {},
    aq = function (a, b) {},
    bq = function (a, b) {},
    cq = function (a, b) {},
    dq = function () {
      var a = {};
      return a
    },
    Sp = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b
    },
    eq = function () {},
    fq = function (a, b) {},
    gq = function (a, b, c) {};
  var hq = function (a, b) {
    var c, d = C.GooglebQhCsO;
    d || (d = {}, C.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0
  };
  var iq = function (a, b, c) {
    var d = Fh(a, "fmt");
    if (b) {
      var e = Fh(a, "random"),
        f = Fh(a, "label") || "";
      if (!e) return !1;
      var h = hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!hq(h, b)) return !1
    }
    d && 4 != d && (a = Hh(a, "rfmt", d));
    var l = Hh(a, "fmt", 4);
    Xb(l, function () {
      C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null, b())
    }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
    return !0
  };
  var zq = function () {
      this.h = {}
    },
    Aq = function (a, b, c) {
      null != c && (a.h[b] = c)
    },
    Bq = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
      }).join("&")
    },
    Dq = function (a, b, c, d) {};

  function Fq(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b]
  };
  var Hq = function (a) {
      var b = ug();
      Gq(b).event && Gq(b).event.push(a)
    },
    Iq = function () {
      var a = Gq(ug());
      return a.event ? a.event : []
    };

  function Gq(a) {
    var b, c = ye.r;
    c || (c = {
      container: {}
    }, ye.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d
  };
  var Jq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Kq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    Lq = {
      cl: ["ecl"],
      customPixels: ["customScripts",
        "html"
      ],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    Mq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Pq = function (a) {
      var b = Ye("gtm.allowlist") || Ye("gtm.whitelist");
      b && K(9);
      Ee && (b = ["google", "gtagfl",
        "lcl", "zone"
      ]);
      Nq() && (Ee ? K(116) : (K(117), Oq && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Oa(Ga(b), Kq),
        d = Ye("gtm.blocklist") || Ye("gtm.blacklist");
      d || (d = Ye("tagTypeBlacklist")) && K(3);
      d ? K(8) : d = [];
      Nq() && (d = Ga(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ga(d).indexOf("google") && K(2);
      var e = d && Oa(Ga(d), Lq),
        f = {};
      return function (h) {
        var l = h && h[oc.ma];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Qe[l] || [],
          n = a(l, m),
          p;
        p = Gq(ug()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](l, m)
        } catch (y) {
          n = !1
        }
        if (b) {
          var t;
          if (t = n) a: {
            if (0 > c.indexOf(l))
              if (m && 0 < m.length)
                for (var r = 0; r < m.length; r++) {
                  if (0 > c.indexOf(m[r])) {
                    K(11);
                    t = !1;
                    break a
                  }
                } else {
                  t = !1;
                  break a
                }
            t = !0
          }
          n = t
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;
          else {
            var w = Ca(e, m || []);
            w && K(10);
            u = w
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ca(e, Mq));
        return f[l] = x
      }
    },
    Oq = !1;
  Oq = !0;
  var Nq = function () {
      return Jq.test(C.location && C.location.hostname)
    },
    Qq = function () {
      lg && Gq(ug()).entity.push(function (a) {
        var b = {};
        b[oc.ma] = "__" + a;
        for (var c in void 0)(void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
        var d;
        if (bd(b)) {
          var e = b[oc.ma];
          if (!e) throw "Error: No function name given for function call.";
          var f = Rc[e];
          d = !!f && !!f.runInSiloedMode
        } else d = !!Fq(b[oc.ma], 4);
        return d
      })
    };
  var Sq = function (a, b, c, d) {
      if (!Rq() && !Ag(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + xe.ba,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        Q(51) && (e += "&gtm=" + cj());
        var h = Nl();
        h && (e += "&sign=" + xe.Ee);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Ge || Ie ? Ml(b, l + e) : void 0;
        if (!m) {
          var n = xe.Gc + l;
          h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ol("https://", "http://", n + e)
        }
        var p = a;
        d.siloed && (Cg({
          ctid: p,
          isDestination: !1
        }), p = og(p));
        var q = p,
          t = Bg();
        hg().container[q] = {
          state: 1,
          context: d,
          parent: t
        };
        ig({
          ctid: q,
          isDestination: !1
        });
        Xb(m)
      }
    },
    Tq = function (a, b, c) {
      var d;
      if (d = !Rq()) {
        var e = hg().destination[a];
        d = !(e && e.state)
      }
      if (d)
        if (Dg()) hg().destination[a] = {
          state: 0,
          transportUrl: b,
          context: c,
          parent: Bg()
        }, ig({
          ctid: a,
          isDestination: !0
        }), K(91);
        else {
          var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + xe.ba + "&cx=c";
          Q(51) && (f += "&gtm=" + cj());
          Nl() && (f += "&sign=" + xe.Ee);
          var h = Ge || Ie ? Ml(b, f) : void 0;
          h || (h = ol("https://", "http://", xe.Gc + f));
          var l = a;
          c.siloed && (Cg({
            ctid: l,
            isDestination: !0
          }), l = og(l));
          hg().destination[l] = {
            state: 1,
            context: c,
            parent: Bg()
          };
          ig({
            ctid: l,
            isDestination: !0
          });
          Xb(h)
        }
    };

  function Rq() {
    if (aj()) {
      return !0
    }
    return !1
  };
  var Uq = !1,
    Vq = 0,
    qr = [];

  function wr(a) {
    if (!Uq) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Uq = !0;
        for (var e = 0; e < qr.length; e++) F(qr[e])
      }
      qr.push = function () {
        for (var f = 0; f < arguments.length; f++) F(arguments[f]);
        return 0
      }
    }
  }

  function xr() {
    if (!Uq && 140 > Vq) {
      Vq++;
      try {
        E.documentElement.doScroll("left"), wr()
      } catch (a) {
        C.setTimeout(xr, 50)
      }
    }
  }
  var yr = function (a) {
    Uq ? a() : qr.push(a)
  };
  var zr = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: tg()
    }
  };
  var Br = function (a, b) {
      this.h = !1;
      this.K = [];
      this.M = {
        tags: []
      };
      this.R = !1;
      this.C = this.D = 0;
      Ar(this, a, b)
    },
    Cr = function (a, b, c, d) {
      if (Be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ya(d) && (e = z(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1
    },
    Dr = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && (e.status = c, e.executionTime = d)
    },
    Er = function (a) {
      if (!a.h) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.K.length = 0
      }
    },
    Ar = function (a, b, c) {
      void 0 !== b && Fr(a, b);
      c && C.setTimeout(function () {
        return Er(a)
      }, Number(c))
    },
    Fr =
    function (a, b) {
      var c = Ma(function () {
        return F(function () {
          b(tg(), a.M)
        })
      });
      a.h ? c() : a.K.push(c)
    },
    Gr = function (a) {
      a.D++;
      return Ma(function () {
        a.C++;
        a.R && a.C >= a.D && Er(a)
      })
    },
    Hr = function (a) {
      a.R = !0;
      a.C >= a.D && Er(a)
    };
  var Ir = {},
    Kr = function () {
      return C[Jr()]
    },
    Lr = !1;
  var Mr = function (a) {
      C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
      var b = C.GoogleAnalyticsObject;
      if (C[b]) C.hasOwnProperty(b);
      else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments)
        };
        c.l = Number(Ja());
        C[b] = c
      }
      return C[b]
    },
    Nr = function (a) {
      if (Pf()) {
        var b = Kr();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0)
      }
    };

  function Jr() {
    return C.GoogleAnalyticsObject || "ga"
  }
  var Or = function (a) {
      if (Ir[a] || Lr) return;
      var b = C[Jr()];
      ua(b) && (b("provide", a, ta), Ir[a] = !0);
    },
    Pr = function (a, b) {
      return function () {
        var c = Kr(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload",
              h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
          })
        }
      }
    };
  var Ur = {},
    Vr = {};

  function Wr(a, b) {
    if (Ng) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Ur[a] = "&e=" + c + "&eid=" + a;
      Xg(a)
    }
  }

  function Xr(a) {
    var b = a.eventId,
      c = a.Fb;
    if (!Ur[b]) return "";
    var d = Vr[b] ? "" : "&es=1";
    d += Ur[b];
    c && (Vr[b] = !0);
    return d
  };
  var Yr = {};

  function Zr(a, b) {
    Ng && (Yr[a] = Yr[a] || {}, Yr[a][b] = (Yr[a][b] || 0) + 1)
  }

  function $r(a) {
    var b = a.eventId,
      c = a.Fb,
      d = Yr[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Yr[b];
    return e.length ? "&md=" + e.join(".") : ""
  };
  var as = {},
    bs = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };

  function cs(a, b, c) {
    if (Ng) {
      as[a] = as[a] || [];
      var d = bs[b] || "0",
        e;
      e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === E ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Ya(c) ? "0" : "e";
      as[a].push("" + d + e)
    }
  }

  function ds(a) {
    var b = a.eventId,
      c = as[b] || [];
    if (!c.length) return "";
    a.Fb && delete as[b];
    return "&pcr=" + c.join(".")
  };
  var es = {},
    fs = {};

  function gs(a, b, c) {
    if (Ng && b) {
      var d = fg(b);
      es[a] = es[a] || [];
      es[a].push(c + d);
      var e = (bd(b) ? "1" : "2") + d;
      fs[a] = fs[a] || [];
      fs[a].push(e);
      Xg(a)
    }
  }

  function hs(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = es[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = fs[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete es[b], delete fs[b]);
    return d
  };

  function is(a, b, c, d) {
    var e = Pc[a],
      f = js(a, b, c, d);
    if (!f) return null;
    var h = Zc(e[oc.Ph], c, []);
    if (h && h.length) {
      var l = h[0];
      f = is(l.index, {
        onSuccess: f,
        onFailure: 1 === l.ei ? b.terminate : f,
        terminate: b.terminate
      }, c, d)
    }
    return f
  }

  function js(a, b, c, d) {
    function e() {
      if (f[oc.Wj]) l();
      else {
        var w = $c(f, c, []),
          x = w[oc.Ri];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!S(x[y])) {
              l();
              return
            } var A = Cr(c.Sb, String(f[oc.ma]), Number(f[oc.sd]), w[oc.Xj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var G = Ka() - H;
            gs(c.id, Pc[a], "5");
            Dr(c.Sb, A, "success", G);
            Q(24) && gq(c, f, qp.F.Sh);
            h()
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var G = Ka() - H;
            gs(c.id, Pc[a], "6");
            Dr(c.Sb, A, "failure", G);
            Q(24) && gq(c, f, qp.F.Rh);
            l()
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId =
          c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        gs(c.id, f, "1");
        var D = function () {
          pf(3);
          var G = Ka() - H;
          gs(c.id, f, "7");
          Dr(c.Sb, A, "exception", G);
          Q(24) && gq(c, f, qp.F.Qh);
          B || (B = !0, l())
        };
        Q(24) && fq(c, f);
        var H = Ka();
        try {
          Yc(w, {
            event: c,
            index: a,
            type: 1
          })
        } catch (G) {
          D(G)
        }
        Q(24) && gq(c, f, qp.F.Th)
      }
    }
    var f = Pc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Zc(f[oc.Uh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = is(p.index, {
          onSuccess: h,
          onFailure: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      h = q;
      l = 2 ===
        p.ei ? m : q
    }
    if (f[oc.Kh] || f[oc.Zj]) {
      var t = f[oc.Kh] ? Qc : c.gm,
        r = h,
        u = l;
      if (!t[a]) {
        e = Ma(e);
        var v = ks(a, t, e);
        h = v.onSuccess;
        l = v.onFailure
      }
      return function () {
        t[a](r, u)
      }
    }
    return e
  }

  function ks(a, b, c) {
    var d = [],
      e = [];
    b[a] = ls(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ms;
        for (var f = 0; f < d.length; f++) d[f]()
      },
      onFailure: function () {
        b[a] = ns;
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }

  function ls(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function ms(a) {
    a()
  }

  function ns(a, b) {
    b()
  };
  var ps = function (a, b) {
      return 1 === arguments.length ? os("config", a) : os("config", a, b)
    },
    qs = function (a, b, c) {
      c = c || {};
      c[L.g.Nb] = a;
      return os("event", b, c)
    };

  function os(a) {
    return arguments
  }
  var rs = function () {
    this.h = [];
    this.C = []
  };
  rs.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.h.push(e);
    for (var f = 0; f < this.C.length; f++) try {
      this.C[f](e)
    } catch (h) {}
  };
  rs.prototype.listen = function (a) {
    this.C.push(a)
  };
  rs.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c)
    }
    return a
  };
  rs.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e)
    }
    this.h = c;
    return b
  };
  var ts = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = mg.Ie;
      ss().enqueue(a, b, c)
    },
    vs = function () {
      var a = us;
      ss().listen(a)
    };

  function ss() {
    var a = ye.mb;
    a || (a = new rs, ye.mb = a);
    return a
  }
  var Ds = function (a) {
      var b = ye.zones;
      return b ? b.getIsAllowedFn(pg(), a) : function () {
        return !0
      }
    },
    Es = function () {
      Hq(function (a, b) {
        var c = ye.zones;
        return c ? c.isActive(pg(), b) : !0
      })
    };
  var Hs = function (a, b) {
    for (var c = [], d = 0; d < Pc.length; d++)
      if (a[d]) {
        var e = Pc[d];
        var f = Gr(b.Sb);
        try {
          var h = is(d, {
            onSuccess: f,
            onFailure: f,
            terminate: f
          }, b, d);
          if (h) {
            var l = e[oc.ma];
            if (!l) throw "Error: No function name given for function call.";
            var m = Rc[l];
            c.push({
              Hi: d,
              ui: (m ? m.priorityOverride || 0 : 0) || Fq(e[oc.ma], 1) || 0,
              execute: h
            })
          } else Fs(d, b), f()
        } catch (p) {
          f()
        }
      } c.sort(Gs);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length
  };

  function Gs(a, b) {
    var c, d = b.ui,
      e = a.ui;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Hi,
        l = b.Hi;
      f = h > l ? 1 : h < l ? -1 : 0
    }
    return f
  }

  function Fs(a, b) {
    if (Ng) {
      var c = function (d) {
        var e = b.isBlocked(Pc[d]) ? "3" : "4",
          f = Zc(Pc[d][oc.Ph], b, []);
        f && f.length && c(f[0].index);
        gs(b.id, Pc[d], e);
        var h = Zc(Pc[d][oc.Uh], b, []);
        h && h.length && c(h[0].index)
      };
      c(a)
    }
  }
  var Ks = !1,
    Is;
  var Ps = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(24)) {}
    if ("gtm.js" === d) {
      if (Ks) return !1;
      Ks = !0
    }
    var e, f = !1;
    if (Iq().every(function (t) {
        return t(d, b)
      })) e = Ds(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Ds(Number.MAX_SAFE_INTEGER)
    }
    Wr(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Pq(e),
        gm: [],
        logMacroError: function () {
          K(6);
          pf(0)
        },
        cachedModelValues: Ls(),
        checkPixieIncompatibility: Ms(b),
        Sb: new Br(function () {
          if (Q(24)) {}
          h &&
            h.apply(h, [].slice.call(arguments, 0))
        }, l),
        originalEventData: z(a)
      };
    Q(42) && (m.reportMacroDiscrepancy = Zr);
    Q(24) && bq(m.id, m.name);
    var n = ed(m);
    Q(24) && cq(m.id, m.name);
    f && (n = Ns(n));
    if (Q(24)) {}
    var p = Hs(n, m),
      q = !1;
    Hr(m.Sb);
    "gtm.js" !== d && "gtm.sync" !== d || Or(tg());
    return Os(n, p) || q
  };

  function Ms(a) {
    return function (b) {
      Za(b) || cs(a, "input", b)
    }
  }

  function Ls() {
    var a = {};
    a.event = bf("event", 1);
    a.ecommerce = bf("ecommerce", 1);
    a.gtm = bf("gtm");
    a.eventModel = bf("eventModel");
    return a
  }

  function Ns(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Pc[c][oc.ma]);
        if (Ae[d] || void 0 !== Pc[c][oc.bk] || Re[d] || Fq(d, 2)) b[c] = !0
      } return b
  }

  function Os(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Pc[c] && !Be[String(Pc[c][oc.ma])]) return !0;
    return !1
  }
  var Qs = {},
    Rs = {},
    Ss = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
          We: e.We,
          Qe: e.Qe
        }, f++) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (e.We = ll(h, b), e.We) {
            var l = rg();
            za(l, function (t) {
              return function (r) {
                return t.We.aa === r
              }
            }(e)) ? c.push(h) : d.push(h)
          }
        } else {
          var m = Qs[h] || [];
          e.Qe = {};
          m.forEach(function (t) {
            return function (r) {
              return t.Qe[r] = !0
            }
          }(e));
          for (var n = pg(), p = 0; p < n.length; p++)
            if (e.Qe[n[p]]) {
              c = c.concat(rg());
              break
            } var q = Rs[h] || [];
          q.length && (c = c.concat(q))
        }
      }
      return {
        Dl: c,
        Fl: d
      }
    },
    Ts = function (a) {
      k(Qs, function (b,
        c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1)
      })
    },
    Us = function (a) {
      k(Rs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1)
      })
    };
  var Vs = "HA GF G UA AW DC MC".split(" "),
    Ws = !1,
    Xs = !1;

  function Ys(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Se()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    }
  }
  var Zs = void 0,
    $s = void 0;

  function at(a, b, c) {
    var d = z(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f]
    }) && K(136);
    var e = z(b);
    z(c, e);
    ts(ps(pg()[0], e), a.eventId, d)
  }

  function bt(a) {
    for (var b = ha([L.g.Zc, L.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || dm.D[d];
      if (e) return e
    }
  }
  var ct = {
      config: function (a, b) {
        var c = Q(43),
          d = Ys(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length) return;
            e = a[2]
          }
          var f = ll(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!kg.nd) {
                var n = vg(Bg());
                if (Fg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Jl: vg(p),
                    Cl: q
                  };
                  break a
                }
              }
              m = void 0
            }
            var t = m;
            t && (h = t.Jl, l = t.Cl);
            Wr(d.eventId, "gtag.config");
            var r = f.aa,
              u = f.id !== r;
            if (u ? -1 === rg().indexOf(r) : -1 === pg().indexOf(r)) {
              if (!(c && b.inheritParentConfig || e[L.g.sb])) {
                var v = bt(e);
                if (u) Tq(r, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
                else if (c && void 0 !== h && -1 !== h.containers.indexOf(r)) {
                  var w = e;
                  Zs ? at(b, w, Zs) : $s || ($s = z(w))
                } else Sq(r, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                })
              }
            } else {
              if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                $s ? (at(b, $s, y), x = !1) : (!y[L.g.Pb] && De && Zs || (Zs = z(y)), x = !0);
                x && h.containers && h.containers.join(",");
                return
              }
              if (De && !u && !e[L.g.Pb]) {
                var A = Xs;
                Xs = !0;
                if (A) return
              }
              Ws || K(43);
              if (!b.noTargetGroup)
                if (u) {
                  Us(f.id);
                  var B = f.id,
                    D = e[L.g.oe] ||
                    "default";
                  D = String(D).split(",");
                  for (var H = 0; H < D.length; H++) {
                    var G = Rs[D[H]] || [];
                    Rs[D[H]] = G;
                    0 > G.indexOf(B) && G.push(B)
                  }
                } else {
                  Ts(f.id);
                  var I = f.id,
                    J = e[L.g.oe] || "default";
                  J = J.toString().split(",");
                  for (var M = 0; M < J.length; M++) {
                    var P = Qs[J[M]] || [];
                    Qs[J[M]] = P;
                    0 > P.indexOf(I) && P.push(I)
                  }
                } delete e[L.g.oe];
              var U = b.eventMetadata || {};
              U.hasOwnProperty("is_external_event") || (U.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = U;
              delete e[L.g.Tc];
              for (var R = u ? [f.id] : rg(), O = 0; O < R.length; O++) {
                var ba = e,
                  aa = z(b),
                  Z = ll(R[O], aa.isGtmEvent);
                Z && dm.push("config", [ba], Z, aa)
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          K(39);
          var c = Ys(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[L.g.N] && K(139), e[L.g.ya] && K(140));
          "default" === d ? Zf(e) : "update" === d ? $f(e, c) : "declare" === d ? b.fromContainerExecution && Yf(e) : Q(80) && "core_platform_services" === d && ag(e)
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2]
          }
          var e = d,
            f = {},
            h = (f.event = c, f);
          e && (h.eventModel =
            z(e), e[L.g.Tc] && (h.eventCallback = e[L.g.Tc]), e[L.g.ie] && (h.eventTimeout = e[L.g.ie]));
          var l = Ys(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
          var p;
          var q = d,
            t = q && q[L.g.Nb];
          void 0 === t && (t = Ye(L.g.Nb, 2), void 0 === t && (t = "default"));
          if (g(t) || xa(t)) {
            var r;
            b.isGtmEvent ? r = g(t) ? [t] : t : r = t.toString().replace(/\s+/g, "").split(",");
            var u = Ss(r, b.isGtmEvent),
              v = u.Dl,
              w = u.Fl;
            if (w.length)
              for (var x = bt(q), y = 0; y < w.length; y++) {
                var A =
                  ll(w[y], b.isGtmEvent);
                A && Tq(A.aa, x, {
                  source: 3,
                  fromContainerExecution: b.fromContainerExecution
                })
              }
            p = nl(v, b.isGtmEvent)
          } else p = void 0;
          var B = p;
          if (B) {
            Wr(m, c);
            for (var D = [], H = 0; H < B.length; H++) {
              var G = B[H],
                I = z(b);
              if (-1 !== Vs.indexOf(wg(G.prefix))) {
                var J = z(d),
                  M = I.eventMetadata || {};
                M.hasOwnProperty("is_external_event") || (M.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = M;
                delete J[L.g.Tc];
                em(c, J, G.id, I)
              }
              D.push(G.id)
            }
            h.eventModel = h.eventModel || {};
            0 < B.length ? h.eventModel[L.g.Nb] = D.join() : delete h.eventModel[L.g.Nb];
            Ws || K(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            h.eventModel[L.g.rb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h
          }
        }
      },
      get: function (a, b) {
        K(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ua(a[3])) {
          var c = ll(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ws || K(43);
            var f = bt();
            if (!za(rg(), function (l) {
                return c.aa === l
              })) Tq(c.aa, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });
            else if (-1 !== Vs.indexOf(wg(c.prefix))) {
              Ys(a, b);
              var h = {};
              Vf(z((h[L.g.eb] = d, h[L.g.pb] =
                e, h)));
              fm(d, function (l) {
                F(function () {
                  return e(l)
                })
              }, c.id, b)
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Ws = !0;
          var c = Ys(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Ya(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Ya(a[2]) || xa(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Ys(a, b),
            e = d.eventId,
            f = d.priorityId;
          z(c);
          var h = z(c);
          dm.push("set", [h],
            void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c
        }
      }
    },
    dt = {
      policy: !0
    };
  var et = function (a) {
      var b = C[xe.ba].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break
          } c && (b.end(), b.end = null)
      }
    },
    ft = function (a) {
      var b = C[xe.ba],
        c = b && b.hide;
      c && c.end && (c[a] = !0)
    };
  var gt = !1,
    ht = [];

  function it() {
    if (!gt) {
      gt = !0;
      for (var a = 0; a < ht.length; a++) F(ht[a])
    }
  }
  var jt = function (a) {
    gt ? F(a) : ht.push(a)
  };
  var st = function () {
      try {
        var a, b;
        var m, n = tg(),
          p = Gd('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
        m = p && 0 < p.length ? p[0] : null;
        b = m ? m.hasAttribute("gtm") ? "gtmo" : m.hasAttribute("async") ? "opta" : "opts" : "optu";
        b || (b = "gaoo");
        var q = lt(mt, m && m.src),
          t = q.Pd,
          r = q.Qd,
          u = q.Xe,
          v = q.Ye,
          w = q.Ne,
          x = q.ff,
          y = q.Bd,
          A = q.Zf,
          B = q.Ad;
        "h0" != y || nt || (y = "h3");
        ot = {
          Bd: y,
          Ad: B,
          Ik: a,
          Al: b,
          Zf: A,
          Ye: v,
          Ne: w,
          ff: x,
          Xe: u,
          Pd: t,
          Qd: r,
          hi: pt,
          Ii: qt
        };
        rt(ot)
      } catch (D) {}
    },
    tt = function () {
      var a = C.gaData,
        b = 0,
        c = void 0;
      if (a)
        for (var d in a)
          if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
            b += a[d].hitcount;
            var e = Number(a[d].first_hit);
            e && (!c || e < c) && (c = e)
          } return {
        ii: b,
        fi: c
      }
    },
    lt = function (a, b) {
      var c, d, e, f, h, l, m, n, p;
      var q = C.performance;
      if (q) {
        if (b) {
          var t = q.getEntriesByName(b)[0];
          if (t) {
            var r = q.getEntriesByType("resource"),
              u = 0;
            r && 0 < r.length && (u = r[0].startTime);
            f = Math.round(t.startTime - u);
            h = Math.round(t.duration);
            e = r.indexOf(t); - 1 === e && (e =
              void 0);
            l = Math.round(a - (t.startTime + t.duration))
          }
        }
        var v = q.timing;
        if (v.domContentLoadedEventStart) {
          var w = v.domContentLoadedEventStart - v.navigationStart;
          w && (d = Math.round(a - w))
        }
        var x = q.getEntriesByType("paint").filter(function (D) {
          return "first-contentful-paint" === D.name
        })[0];
        x && (c = Math.round(a - x.startTime))
      }
      var y = C[xe.ba].hide;
      if (y) {
        if (void 0 === y[tg()]) m = "h2";
        else {
          var A = !1;
          if (null === y.end)
            for (var B in y)
              if (y.hasOwnProperty(B) && Pa(B, tg()) && !0 === y[B]) {
                A = !0;
                break
              } m = A ? "h0" : "h1"
        }
        y.start && !isNaN(y.start) &&
          (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - y.start)) : p = a - y.start);
        isNaN(y.timeout) || (n = y.timeout)
      }
      return {
        Pd: d,
        Qd: c,
        Xe: e,
        Ye: f,
        Ne: h,
        ff: l,
        Bd: m,
        Zf: n,
        Ad: p
      }
    },
    rt = function (a, b) {
      b = void 0 === b ? "ol" : b;
      var c = function (e, f) {
          null != f && (d += e + encodeURIComponent(f))
        },
        d = Og + "&cv=1";
      c("&t=", b);
      c("&s=", a.Bd);
      c("&h=", a.Ad);
      c("&g=", a.Ik);
      c("&p=", a.Al);
      c("&o=", a.Zf);
      c("&l=", function () {
        var e = Ne;
        return e ? kt - Ea(e) : void 0
      }());
      c("&q=", a.Ye);
      c("&f=",
        a.Ne);
      c("&e=", a.ff);
      c("&i=", a.Xe);
      c("&d=", a.Pd);
      c("&c=", a.Qd);
      c("&tr=", a.km);
      c("&jl=", a.yl);
      c("&jf=", a.wl);
      c("&ji=", a.xl);
      c("&jq=", a.zl);
      c("&jd=", a.sl);
      c("&jx=", a.vl);
      c("&hc=", a.hi);
      c("&fh=", a.Ii);
      d += "&sr=0.050000";
      c("&ps=", ut);
      c("&cb=", Aa());
      $b(d);
    },
    vt = !1,
    kt, mt, nt, ut, ot, pt, qt;
  ut = Math.random(), vt = "0.050000" > ut;
  var wt = function () {
      if (!vt || kt) return;
      kt = Ka();
      mt = jc() || kt;
      nt = !!E.querySelector("body");
      var a = tt(),
        b = a.fi;
      pt = a.ii;
      qt = b ? kt - b : void 0;
      jt(st);
    },
    zt = function (a) {
      var b = xt;
      if (!vt) return;
      try {
        var c = Ka(),
          d = jc() || c,
          e = tt(),
          f = e.ii,
          h = e.fi,
          l = h ? c - h : void 0;
        jt(function () {
          var m = lt(d, b),
            n = m.Pd,
            p = m.Qd,
            q = m.Xe,
            t = m.Ye,
            r = m.Ne,
            u = m.ff,
            v = m.Bd,
            w = m.Ad,
            x = z(ot || {});
          z(a, x);
          z({
            Bd: v,
            Ad: w,
            Pd: n,
            Qd: p,
            xl: q,
            zl: t,
            sl: r,
            vl: u,
            hi: f,
            Ii: l
          }, x);
          rt(x, "od")
        })
      } catch (m) {}
    };
  var Bt = function (a) {
    if (At(a)) return a;
    this.h = a
  };
  Bt.prototype.getUntrustedMessageValue = function () {
    return this.h
  };
  var At = function (a) {
    return !a || "object" !== Va(a) || Ya(a) ? !1 : "getUntrustedMessageValue" in a
  };
  Bt.prototype.getUntrustedMessageValue = Bt.prototype.getUntrustedMessageValue;
  var Ct = 0,
    Dt = {},
    Et = [],
    Ft = [],
    Gt = !1,
    Ht = !1;

  function It(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
  }
  var Jt = function (a) {
      return C[xe.ba].push(a)
    },
    Kt = function (a, b) {
      if (!va(b) || 0 > b) b = 0;
      var c = ye[xe.ba],
        d = 0,
        e = !1,
        f = void 0;
      f = C.setTimeout(function () {
        e || (e = !0, a());
        f = void 0
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0))
      }
    };

  function Lt(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && af(e), af(e, f))
    });
    Ne || (Ne = a["gtm.start"]);
    wt();
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Se(), a["gtm.uniqueEventId"] = d, af("gtm.uniqueEventId", d));
    return Ps(a)
  }

  function Mt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Da(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
    }
    return !1
  }

  function Nt() {
    var a;
    if (Ft.length) a = Ft.shift();
    else if (Et.length) a = Et.shift();
    else return;
    var b;
    var c = a;
    if (Gt || !Mt(c.message)) b = c;
    else {
      Gt = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Se());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        h = {},
        l = {
          message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
          messageContext: {
            eventId: d - 1
          }
        };
      Et.unshift(l, c);
      if (Ng) {
        var m = mg.ctid;
        if (m) {
          var n, p = vg(Bg());
          n = p && p.context;
          var q, t = Aj(C.location.href);
          q = t.hostname + t.pathname;
          var r = n && n.fromContainerExecution,
            u = n && n.source,
            v = mg.Ie,
            w = kg.nd;
          Ng && (Pl || (Pl = q), Ql.push(m + ";" + v + ";" + (r ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
        }
      }
      b = f
    }
    return b
  }

  function Ot() {
    for (var a = !1, b; !Ht && (b = Nt());) {
      Ht = !0;
      delete Ve.eventModel;
      Xe();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Ht = !1;
      else {
        if (e.fromContainerExecution)
          for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
            var l = f[h],
              m = Ye(l, 1);
            if (xa(m) || Ya(m)) m = z(m);
            We[l] = m
          }
        try {
          if (ua(d)) try {
            d.call(Ze)
          } catch (D) {} else if (xa(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                r = Ye(p.join("."), 2);
              if (null != r) try {
                r[q].apply(r, t)
              } catch (D) {}
            }
          } else {
            var u =
              void 0,
              v = !1;
            if (Da(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = ct[d[0]];
                  if (w && (!e.fromContainerExecution || !dt[d[0]])) {
                    u = w(d, e);
                    break a
                  }
                }
                u = void 0
              }(v = u && "set" === d[0] && !!u.event) && K(101)
            }
            else u = d;
            if (u) {
              var x = Lt(u, e);
              a = x || a;
              v && x && K(113)
            }
          }
        } finally {
          e.fromContainerExecution && Xe(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Dt[String(y)] || [], B = 0; B < A.length; B++) Ft.push(Pt(A[B]));
            A.length && Ft.sort(It);
            delete Dt[String(y)];
            y > Ct && (Ct = y)
          }
          Ht = !1
        }
      }
    }
    return !a
  }

  function Qt() {
    if (Q(24)) {
      var a = Rt();
    }
    var b = Ot();
    if (Q(24)) {}
    try {
      et(tg())
    } catch (c) {}
    return b
  }

  function us(a) {
    if (Ct < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Dt[b] = Dt[b] || [];
      Dt[b].push(a)
    } else Ft.push(Pt(a)), Ft.sort(It), F(function () {
      Ht || Ot()
    })
  }

  function Pt(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    }
  }
  var St = function () {
      function a(f) {
        var h = {};
        if (At(f)) {
          var l = f;
          f = At(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0
        }
        return {
          message: f,
          messageContext: h
        }
      }
      var b = Sb(xe.ba, []),
        c = ye[xe.ba] = ye[xe.ba] || {};
      !0 === c.pruned && K(83);
      Dt = ss().get();
      vs();
      yr(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f))
        }
      });
      jt(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f))
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < ye.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++) f[h] = new Bt(arguments[h])
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q)
        });
        Et.push.apply(Et, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (K(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Ot() && p
      };
      var e = b.slice(0).map(function (f) {
        return a(f)
      });
      Et.push.apply(Et, e);
      if (Rt()) {
        if (Q(24)) {}
        F(Qt)
      }
    },
    Rt = function () {
      var a = !0;
      return a
    };

  function Tt(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ka();
    return b < c + 3E5 && b > c - 9E5
  }

  function Ut(a) {
    return a && 0 === a.indexOf("pending:") ? Tt(a.substr(8)) : !1
  };
  var ou = function () {};
  var pu = function () {};
  pu.prototype.toString = function () {
    return "undefined"
  };
  var qu = new pu;
  var Vu = C.clearTimeout,
    Wu = C.setTimeout,
    V = function (a, b, c, d) {
      if (aj()) {
        b && F(b)
      } else return Xb(a, b, c, d)
    },
    Xu = function () {
      return new Date
    },
    Yu = function () {
      return C.location.href
    },
    Zu = function (a) {
      return yj(Aj(a), "fragment")
    },
    $u = function (a) {
      return zj(Aj(a))
    },
    av = function (a, b) {
      return Ye(a, b || 2)
    },
    bv = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Jt(a)) : d = Jt(a);
      return d
    },
    cv = function (a, b) {
      C[a] = b
    },
    W = function (a, b, c) {
      b &&
        (void 0 === C[a] || c && !C[a]) && (C[a] = b);
      return C[a]
    },
    dv = function (a, b, c) {
      return Ii(a, b, void 0 === c ? !0 : !!c)
    },
    ev = function (a, b, c) {
      return 0 === Ri(a, b, c)
    },
    fv = function (a, b) {
      if (aj()) {
        b && F(b)
      } else Zb(a, b)
    },
    gv = function (a) {
      return !!Bu(a, "init", !1)
    },
    hv = function (a) {
      zu(a, "init", !0)
    },
    iv = function (a, b, c) {
      Za(a) || cs(c, b, a)
    };
  var jv = function (a) {
      if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
      var b = a.tagName.toUpperCase();
      return "SCRIPT" == b || "STYLE" == b || "LINK" == b
    },
    kv = function (a, b, c) {
      try {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
      } catch (d) {
        return d
      }
      return null
    },
    lv = function (a, b, c) {
      var d = a.getAttribute(b);
      return kv(a, b, c) ? 8 : function () {
        kv(a, b, d)
      }
    },
    ov = function (a, b, c) {
      var d, e, f = a.ownerDocument || a.document || document;
      c = (c || "").toLowerCase();
      "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" ==
        c ? (d = a, e = null) : (d = a.parentNode, e = a);
      if (!d || d == f) return {
        result: 1,
        kl: []
      };
      var h = mv(b, d);
      nv(h, "SCRIPT");
      nv(h, "NOSCRIPT");
      var l = [];
      if (h.firstChild)
        for (var m = h.firstChild; m;) {
          var n = m.nextSibling;
          l.push(m);
          d.insertBefore(m, e);
          m = n
        }
      var p = a.nextSibling;
      "replace" == c && d.removeChild(a);
      return {
        result: function () {
          for (; 0 < l.length;) d.removeChild(l.pop());
          "replace" == c && d.insertBefore(a, p)
        },
        kl: l.slice()
      }
    },
    pv = {
      SELECT: [1, '<select multiple="multiple">', "</select>"],
      FIELDSET: [1, "<fieldset>", "</fieldset>"],
      MAP: [1, "<map>",
        "</map>"
      ],
      OBJECT: [1, "<object>", "</object>"],
      TABLE: [1, "<table>", "</table>"],
      TBODY: [2, "<table><tbody>", "</tbody></table>"],
      COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
      TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
    },
    mv = function (a, b) {
      var c = 0,
        d = "",
        e = "",
        f = pv[b.tagName];
      null != f && (c = f[0], d = f[1], e = f[2]);
      var h = b.ownerDocument.createElement("div"),
        l = Nb(d + (a || "") + e);
      1 === h.nodeType && Mb(h);
      h.innerHTML = Fb(l);
      for (var m = h; 0 < c;) {
        var n = m.firstChild;
        if (null == n.firstChild) return b.ownerDocument.createElement("div");
        m = n;
        c--
      }
      return m
    },
    nv = function (a, b) {
      for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
        var f = c[e];
        f.parentNode.removeChild(f);
        d.push(f)
      }
    },
    qv = function (a) {
      var b = null,
        c = null;
      try {
        b = new Function("element", a)
      } catch (d) {
        c = d
      }
      return {
        Vf: b,
        error: c
      }
    },
    uv = function (a, b, c, d, e) {
      var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
      e && (f = e + "{" + f + "}");
      var h = document;
      if (h.createStyleSheet) {
        var l = rv(h),
          m = l.rules.length;
        l.insertRule(f, m);
        return function () {
          l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
          l.insertRule("x {}",
            m)
        }
      }
      var n = sv(f, h);
      tv(n, h);
      var p = n.parentNode;
      return function () {
        p.removeChild(n)
      }
    },
    vv = null,
    rv = function (a) {
      if (vv) return vv;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b];
        if (!c.href) {
          var d = c.ownerNode;
          if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return vv = c
        }
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return vv = a.styleSheets[0]
    },
    sv = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
      return c
    },
    tv = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a)
    },
    wv = function (a, b, c, d) {
      if (a.style.setProperty) try {
        var e = a.style.getPropertyValue(b),
          f = a.style.getPropertyPriority(b);
        a.style.setProperty(b, c, d ? "important" : "");
        return function () {
          a.style.setProperty(b, "", f);
          a.style.setProperty(b, e, f)
        }
      } catch (l) {}
      var h = a.style.cssText;
      a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
      return function () {
        a.style.cssText = h
      }
    },
    yv = function (a, b, c,
      d) {
      if (jv(a)) return 7;
      if (b) return xv(a, b, d);
      if (c && c.parentNode) {
        var e = a.parentNode,
          f = a.nextSibling;
        try {
          c.parentNode.insertBefore(a, c.nextSibling)
        } catch (h) {
          return 9
        }
        return function () {
          e.insertBefore(a, f)
        }
      }
      return 4
    },
    xv = function (a, b, c) {
      var d = a.parentNode,
        e = a.nextSibling;
      c = (c || "").toLowerCase();
      try {
        if ("bottom" == c) b.appendChild(a);
        else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);
        else if ("before" == c)
          if (b.parentNode) b.parentNode.insertBefore(a, b);
          else return 5;
        else if ("after" == c)
          if (b.parentNode) b.parentNode.insertBefore(a,
            b.nextSibling);
          else return 5
      } catch (f) {
        return 9
      }
      return function () {
        try {
          d.insertBefore(a, e)
        } catch (f) {}
      }
    },
    zv = function (a, b, c) {
      if (0 <= b && b < a.childNodes.length) {
        var d = a.childNodes[b];
        if (null != d && d.nodeType == Node.TEXT_NODE) {
          var e = d.nodeValue;
          d.nodeValue = c;
          return function () {
            d.nodeValue = e
          }
        }
        return 2
      }
      return 3
    },
    Av = function (a, b, c, d) {
      c ? d = c.nextSibling : d && (c = d.previousSibling);
      if (null != c && c.nodeType == Node.TEXT_NODE) {
        var e = c.nodeValue;
        c.nodeValue += a;
        return function () {
          c.nodeValue = e
        }
      }
      if (null != d && d.nodeType == Node.TEXT_NODE) {
        var f =
          d.nodeValue;
        d.nodeValue = a + d.nodeValue;
        return function () {
          d.nodeValue = f
        }
      }
      var h = (b.ownerDocument || b.document || document).createTextNode(a);
      d ? b.insertBefore(h, d) : b.appendChild(h);
      return function () {
        b.removeChild(h)
      }
    },
    Bv = function (a) {
      var b = document.createElement("a");
      a && (b.href = a);
      return b
    };

  function Fv(a, b) {
    function c(h) {
      var l = Aj(h),
        m = yj(l, "protocol"),
        n = yj(l, "host", !0),
        p = yj(l, "port"),
        q = yj(l, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q]
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0
  }

  function Gv(a) {
    return Hv(a) ? 1 : 0
  }

  function Hv(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = z(a, {});
        z({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Gv(e)) return !0
      }
      return !1
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var h = 0; h < vd.length; h++) {
              var l = vd[h];
              if (b[l]) {
                f = b[l](c);
                break a
              }
            }
          } catch (v) {}
          f = !1
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var t = a.ignore_case ? "i" : void 0;
        try {
          var r = String(c) + t,
            u = wd.get(r);
          u || (u = new RegExp(c, t), wd.set(r, u));
          q = u.test(b)
        } catch (v) {
          q = !1
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Fv(b, c)
    }
    return !1
  };

  function Iv() {
    var a = ["&cv=1", "&rv=" + xe.Nf, "&tc=" + Pc.filter(function (b) {
      return b
    }).length];
    xe.qd && a.push("&x=" + xe.qd);
    return a.join("")
  };
  var mw = function () {
      var a = !0;
      mi(7) && mi(9) && mi(10) || (a = !1);
      return a
    },
    nw = function () {
      var a = !0;
      mi(3) && mi(4) || (a = !1);
      return a
    };
  uf();

  function sx() {
    return C.gaGlobal = C.gaGlobal || {}
  }
  var tx = function () {
      var a = sx();
      a.hid = a.hid || Aa();
      return a.hid
    },
    ux = function (a, b) {
      var c = sx();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };
  var by = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C
    },
    cy = function (a, b) {
      a.h = b;
      return a
    };

  function dy(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
  }

  function ey(a, b) {
    var c = a || [];
    if (Array.isArray(c))
      for (var d = 0; d < c.length; d++) b(c[d])
  };
  var ty = window,
    uy = document,
    vy = function (a) {
      var b = ty._gaUserPrefs;
      if (b && b.ioo && b.ioo() || uy.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === ty["ga-disable-" + a]) return !0;
      try {
        var c = ty.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
      } catch (f) {}
      for (var d = Ei("AMP_TOKEN", String(uy.cookie), !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return uy.getElementById("__gaOptOutExtension") ? !0 : !1
    };

  function Ey(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c]
    });
    var b = a[L.g.Ta] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c]
    })
  };
  var My = function (a, b) {};

  function Ly(a, b) {
    var c = function () {};
    return c
  }

  function Ny(a, b, c) {};
  var Oy = Ly;
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);
  var Qy = encodeURI,
    X = encodeURIComponent,
    Ry = function (a, b, c) {
      $b(a, b, c)
    },
    Sy = function (a, b) {
      if (!a) return !1;
      var c = yj(Aj(a),
        "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, e = "." + e);
          if (0 <= f && c.indexOf(e, f) == f) return !0
        }
      }
      return !1
    },
    Ty = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null
    };
  var Wy = function (a) {
      if (!Uy[a]) {
        Uy[a] = !0;
        var b = C[a] || {};
        C[a] = b;
        var c = function (e) {
            return Vy[e]
          },
          d = b.get;
        b.get = d ? function (e) {
          return void 0 !== Vy[e] ? Vy[e] : d(e)
        } : c
      }
    },
    Zy = function (a, b) {
      Vy[a] = b;
      for (var c = Xy(a), d = 0; d < c.length; d++) Yy(c[d], a, b);
      c = Xy("");
      for (var e = 0; e < c.length; e++) Yy(c[e], a, b)
    },
    Yy = function (a, b, c) {
      try {
        a(c, b, tg())
      } catch (d) {}
    },
    Xy = function (a) {
      $y[a] = $y[a] || [];
      return $y[a]
    },
    Vy = {},
    $y = {},
    Uy = {};
  var az = function () {
      C.gaData = C.gaData || {};
      return C.gaData
    },
    bz = function (a, b) {
      b = void 0 === b ? !1 : b;
      C.gaData = C.gaData || {};
      var c = C.gaData,
        d = c.tracker_created;
      c.tracker_created = function (e) {
        b && a(e);
        d && ua(d) && d(e);
        b || a(e)
      }
    },
    cz = function (a) {
      var b = C[Jr()];
      try {
        if (ua(b) && ua(b.getAll)) return b.getAll().filter(function (c) {
          return c.get("trackingId") === a
        })
      } catch (c) {}
      return []
    },
    iz = function (a, b) {
      var c = dz[a];
      if (c) F(function () {
        return b(c)
      });
      else {
        var d = cz(a)[0];
        d ? (dz[a] = d, ez || (ez = d), F(function () {
          return b(d)
        })) : (fz[a] || (fz[a] = []), fz[a].push(b), gz || (gz = !0, bz(function (e) {
          var f = e.get("trackingId");
          if (fz[f]) {
            if (hz[f]) {
              hz[f] = !1;
              var h = C[Jr()];
              ua(h) && h("ga.require", "_" + tg())
            }
            ez || (ez = e);
            dz[f] = e;
            for (var l = fz[f], m; void 0 !== (m = l.shift());) m(e);
            fz[f] = void 0
          }
        })))
      }
    },
    jz = function (a, b, c, d) {
      var e = C[Jr()];
      if ("data" === b.hitType && c) {
        var f = C.gaData,
          h = Number(f && f[d] && f[d].first_hit),
          l = Ka();
        !isNaN(h) && l > h && (b.queueTime = Math.min(2E3, l + 100 - h))
      }
      try {
        var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
        e(m, b)
      } catch (n) {}
    },
    dz = {},
    fz = {},
    hz = {},
    ez, gz = !1,
    kz, lz = function (a, b, c) {
      iz(a, function (d) {
        F(function () {
          jz(d, b, c, a)
        })
      })
    },
    mz = function () {
      var a = !1;
      bz(function () {
        if (!a) {
          var b = C[Jr()];
          ua(b) && (b("ga.require", "__" + tg()), a = !0)
        }
      }, !0)
    },
    nz = function (a, b, c) {
      var d = az(),
        e = d[a] = d[a] || {};
      (e.pending_experiments = e.pending_experiments || {})[b] = c;
      e.experiments = e.experiments || {};
      e.experiments[b] = c
    },
    oz = function (a) {
      var b = az()[a];
      return b ? b.hitcount || 0 : 0
    },
    rz = function (a, b, c, d, e, f) {
      Zy(b, c);
      var h = d;
      if (d) {
        var l = xj(C.location, "host");
        xj(Aj(d), "host") === l && (d = "")
      }
      bz(function (q) {
        q.set("referrer",
          d ? d : void 0)
      }, !0);
      if (pz(a)) ye.ga4_referrer_override = h, qz(a, b, c, e, f);
      else {
        nz(a, b, c);
        for (var m = cz(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
        if (0 < oz(a)) {
          var p = m[0];
          p && jz(p, {
            hitType: "data"
          }, !0, a)
        }
      }
    },
    pz = function (a) {
      return !!a && "G-" === a.substring(0, 2)
    },
    qz = function (a, b, c, d, e) {
      if (pz(a)) {
        var f = qs(a, "experiment_impression", {
          experiment_id: b,
          variant_id: c
        });
        ts(f, d, {
          originatingEntity: e,
          deferrable: !0
        })
      } else nz(a, b, c), 0 < oz(a) && lz(a, {
        hitType: "data"
      }, !0)
    };

  var vz = function (a, b, c) {
      function d() {
        f || (f = !0, !0 !== sz && (sz = !1), tz(c), et(e))
      }
      xt = a;
      var e = "OPT-KRW4XM3_" + b,
        f = !1;
      ft(e);
      C.google_optimize = C.google_optimize || {};
      var h = C.google_optimize;
      h["OPT-KRW4XM3"] = h["OPT-KRW4XM3"] || {};
      h["OPT-KRW4XM3"].optimize_dyn = function (m) {
        m.split(",").forEach(function (n) {
          uz[n] = !0
        });
        sz = !0;
        d()
      };
      Xb(a, void 0, d);
      var l = C[xe.ba];
      C.setTimeout(function () {
        d()
      }, Number(l && l.hide && l.hide.timeout) || 1E4)
    },
    tz = function (a) {
      if (void 0 !== wz) {
        var b = wz - xz,
          c, d;
        sz ? c = Ka() - wz : d = Ka() - wz;
        zt({
          km: b,
          yl: c,
          wl: d
        })
      }
      uz.optimize_ready = !0;
      Jt({
        event: "opt.dyn"
      });
      Jt({
        event: "opt.js"
      });
      if (a && 0 < a.length) {
        var e = {};
        C[xe.ba].forEach(function (f) {
          var h = f.event;
          h && (e[h] = !0)
        });
        a.forEach(function (f) {
          e[f] && Jt({
            event: f
          })
        })
      }
      F(function () {
        Or("_" + tg())
      })
    },
    yz = function (a, b, c, d, e, f, h, l, m) {
      function n(w, x) {
        x && (r += "&" + w + "=" + encodeURIComponent(x))
      }
      xz = Ka();
      if (a || b || c) {
        var p = void 0;
        if (b) {
          var q = Fk().aw;
          q && (p = q[0])
        }
        if (f && (a || c || p)) {
          var t = 1,
            r, u = "OPT-KRW4XM3_" + t++;
          ft(u);
          var v = function (w) {
            kz = w;
            wz = Ka();
            a || b ? (r = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-KRW4XM3", a && n("cid", w), n("gclid",
              p), h && (n("gtm_auth", ""), n("gtm_preview", "")), (h || a) && n("cb", String(Math.random())), vz(r, t++, e)) : tz(e);
            et(u)
          };
          pz(d) ? ts(os("get", d, "client_id", v), l, {
            originatingEntity: m,
            deferrable: !0
          }) : (hz[d] = !0, iz(d, function (w) {
            return v(w.get("clientId"))
          }))
        } else tz(e)
      }
    },
    uz = {},
    xz, wz, sz, xt;
  var zz = function (a, b) {
    this.Ke = a;
    this.Nd = b
  };
  zz.prototype.toString = function () {
    var a = "" + this.Ke;
    1 < this.Nd && (a = a + "-" + this.Nd);
    return a
  };
  var Az = function (a, b) {
    this.C = a;
    this.h = b
  };
  Az.prototype.toString = function () {
    return this.h + "." + this.C
  };
  var Bz = function () {
      var a = Ye("optimize.cookie_path", 2);
      return g(a) ? a : "/"
    },
    Dz = function (a, b) {
      var c = new Cz(a, b);
      c.Kl();
      return c
    },
    Cz = function (a, b) {
      this.K = Math.floor(new Date / 864E5);
      this.D = a || "auto";
      this.h = b || Bz();
      this.C = new zz(Wi(this.D), Xi(this.h));
      this.O = [];
      this.map = {}
    };
  ca = Cz.prototype;
  ca.Qk = function (a) {
    if (!a) return "";
    var b = this.Wf(a);
    return b ? b.C : ""
  };
  ca.am = function (a, b, c, d, e) {
    var f, h;
    f = void 0 === f ? 10 : f;
    h = void 0 === h ? 3E3 : h;
    if (!a) return !1;
    void 0 == b && (b = "");
    this.ye(a, new Az(b, c));
    this.sk(e);
    return this.Uj(d,
      f, h)
  };
  ca.Wf = function (a) {
    return this.map[a]
  };
  ca.Ok = function () {
    for (var a = 0, b = 0; b < this.O.length; b++) "x" !== this.Wf(this.O[b]).C[0] && a++;
    return a
  };
  ca.ye = function (a, b) {
    a && ("" === b.C ? this.yi(a) : (this.map[a] || this.O.push(a), this.map[a] = b))
  };
  ca.fm = function (a) {
    for (var b = 0; b < a.length; b++) this.ye(a[b][0], a[b][1])
  };
  ca.yi = function (a) {
    var b = this.O.indexOf(a);
    0 <= b && this.O.splice(b, 1);
    delete this.map[a]
  };
  ca.Vl = function () {
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      this.map[c].h < this.K && a.push(c)
    }
    for (var d =
        0; d < a.length; d++) this.yi(a[d])
  };
  ca.Mk = function () {
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      a.push([c, this.map[c]])
    }
    return a
  };
  ca.Ek = function () {
    for (var a = 0, b = 0; b < this.O.length; b++) a = Math.max(a, this.map[this.O[b]].h);
    return 864E5 * a
  };
  ca.toString = function () {
    if (0 == this.O.length) return "";
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      a.push(c + "." + this.map[c].toString())
    }
    return "GAX1." + this.C.toString() + "." + a.join("!")
  };
  ca.Uj = function (a, b, c) {
    var d = new Date;
    this.Vl();
    var e = this.Ok();
    if (e >
      b || e > (a || 10) && Hi().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
    d.setTime(this.Ek());
    if ("auto" != this.D) return this.C = new zz(Wi(this.D), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
      path: this.h,
      domain: this.D,
      expires: d
    });
    for (var f = Oi(), h = 0; h < f.length; h++)
      if (this.C = new zz(Wi(f[h]), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
          path: this.h,
          domain: f[h],
          expires: d
        })) return !0;
    return !1
  };
  ca.Kl = function () {
    var a = Li("_gaexp", this.C.Ke, this.C.Nd);
    if (a) {
      var b = this.Ll(a);
      b &&
        this.fm(b.Mk())
    }
  };
  ca.Ll = function (a) {
    for (var b = new Cz(this.D, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
      var e = c[d].split(".");
      if (3 == e.length) {
        if (isNaN(Number(e[1]))) return;
        b.ye(e[0], new Az(e[2], Number(e[1])))
      }
    }
    return b
  };
  ca.sk = function (a) {
    a = a || {};
    var b = 0;
    a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.K - Ea(a[""]));
    for (var c = 0; c < this.O.length; c++) {
      var d = this.O[c];
      if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
        var e = this.Wf(d);
        e.h = Ea(a[d]) + b;
        this.ye(d, e)
      }
    }
  };
  var Iz = function () {
      Ez = Ka();
      var a = Fz;
      Fz = [];
      for (var b = 0; b < a.length; b++) a[b]();
      Gz && (Gz.takeRecords(), Fz.length || (Gz && (Gz.disconnect(), Gz = null), Hz && (C.clearTimeout(Hz), Hz = null)))
    },
    Kz = function () {
      var a = Ka() - Ez;
      a >= Jz ? (Hz && (C.clearTimeout(Hz), Hz = null), Iz()) : Hz || (Hz = C.setTimeout(function () {
        Iz();
        Hz = null
      }, Jz - a))
    },
    Lz = function (a) {
      if (!C.MutationObserver) return !1;
      try {
        return Gz || (Gz = new MutationObserver(Kz), Gz.observe(E.documentElement, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            characterData: !0
          }), Ez = Ka()), Fz.push(a),
          !0
      } catch (b) {
        return !1
      }
    },
    Gz = null,
    Fz = [],
    Jz = 0,
    Ez = 0,
    Hz = null;
  var Mz = function (a, b) {
      b && Lz(a) || C.setTimeout(a, 80)
    },
    Nz = function (a) {
      try {
        return Gd(a)
      } catch (b) {
        return null
      }
    },
    Rz = function (a) {
      if (Uq) return !0;
      for (; a;) {
        if (a.nextSibling) return !0;
        a = a.parentNode
      }
      return !1
    },
    bA = function (a, b) {
      for (var c = Nz(a.na) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.Ka && !Rz(f)) break;
          d.push(f)
        }
      }
      return d
    },
    cA = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b]
      }
    },
    dA = function (a, b) {
      a.gtmProgressiveApplied ||
        (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0
    },
    eA = function (a, b, c) {
      var d;
      var e = [];
      if (b.Qa)
        if (b.Qa.Qf) d = [{
          element: E.head
        }];
        else {
          var f = bA(b.Qa, b.id),
            h = null;
          b.ef && (h = bA(b.ef, b.id + "-t"));
          for (var l = 0; l < f.length; l++) {
            var m = f[l],
              n = void 0;
            if (null != h && (n = h.length > l ? h[l] : null, !n && !Uq && (null === b.ef.la || b.Xh + e.length < b.ef.la))) break;
            e.push({
              element: m,
              targetElement: n
            })
          }
          d = e
        }
      else d = e;
      var p = d;
      if (!Uq && b.pk && (!a || null == b.Qa.la || b.Qa.la != b.He + p.length)) return !1;
      for (var q = 0; q < p.length; q++) {
        var t = p[q].element,
          r = p[q].targetElement,
          u = void 0;
        b.He++;
        dA(t, b.id);
        r && (b.Xh++, u = b.id + "-t", dA(r, u));
        var v = b.tk(t, r);
        ua(v) && b.Cc.push(v);
        b.Cc.push(cA(t, b.id));
        r && u && b.Cc.push(cA(r, u))
      }
      if (b.Qa.la && b.Qa.la == b.He || Uq && (!c || b.He)) b.finished = !0;
      return !0
    },
    fA = function (a) {
      for (var b = {}, c = 0; c < a.fa.length; c++) {
        var d = a.fa[c];
        if (!d.Qa.Qf) {
          var e = b[d.Qa.na];
          e || (e = b[d.Qa.na] = Nz(d.Qa.na) || []);
          for (var f = 0; f < e.length; f++) {
            var h = e[f];
            h.gtmProgressiveApplied && h.gtmProgressiveApplied[d.id] || (dA(h, d.id), d.Cc.push(cA(h, d.id)))
          }
        }
      }
    },
    gA = function (a) {
      if (!a.rg) {
        for (var b =
            a.yd; b < a.fa.length; b++) {
          var c = a.fa[b],
            d = b == a.yd;
          if (!c.finished && !eA(d, c, a.Pi && a.Ki)) break;
          c.finished && d && a.yd++
        }
        a.fa.length > a.yd ? (!a.pending && a.Pi && (a.pending = !0, Mz(function () {
          a.pending = !1;
          gA(a)
        }, a.Ki)), Uq || a.ng || (a.ng = function () {
          F(function () {
            gA(a)
          })
        }, ac(E, "DOMContentLoaded", a.ng))) : fA(a)
      }
    },
    hA = {},
    iA = {},
    jA = void 0,
    kA = function (a, b, c, d) {
      var e = jA;
      if (!Fd || !e) return !1;
      var f = {
        id: e.id + ":" + e.fa.length,
        tk: b,
        Cc: [],
        pk: c,
        Qa: a,
        He: 0,
        ef: d || null,
        Xh: 0,
        finished: !1
      };
      e.fa.push(f);
      null === a ? (f.finished = !0, b(null)) : gA(e);
      return !0
    },
    lA = function (a) {
      var b = ta;
      try {
        b = uv(a, "visibility", "hidden", !0)
      } catch (c) {}
      return function () {
        ua(b) && b.apply();
        b = null
      }
    },
    mA = function (a, b, c, d) {
      var e = b;
      if (!Uq && !a.Qf) {
        var f = lA(a.na);
        qr.push(f);
        e = function (h, l) {
          var m = b(h, l);
          f();
          return m
        }
      }
      return kA(a, e, c, d)
    };
  var Y = {
    m: {}
  };
  Y.m.dee = ["google"],
    function () {
      (function (a) {
        Y.__dee = a;
        Y.__dee.o = "dee";
        Y.__dee.isVendorTemplate = !0;
        Y.__dee.priorityOverride = 0;
        Y.__dee.isInfrastructure = !1;
        Y.__dee.runInSiloedMode = !1
      })(function () {
        var a = !1;
        return a ? "gtm.sync" : "gtm.js"
      })
    }();
  Y.m.e = ["google"],
    function () {
      (function (a) {
        Y.__e = a;
        Y.__e.o = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !1;
        Y.__e.runInSiloedMode = !0
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event)
      })
    }();





  Y.m.asprv = ["google"],
    function () {
      function a() {
        bv({
          event: "optimize.domChange"
        });
        Lz(a)
      }(function (b) {
        Y.__asprv = b;
        Y.__asprv.o = "asprv";
        Y.__asprv.isVendorTemplate = !0;
        Y.__asprv.priorityOverride = 0;
        Y.__asprv.isInfrastructure = !1;
        Y.__asprv.runInSiloedMode = !1
      })(function (b) {
        var c = b.vtp_globalName,
          d = !!b.vtp_listenForMutations,
          e = av("eventModel");
        c && Wy(c);
        d && a();
        var f, h, l;
        e && (f = e.name || "", h = e.callback, l = e.remove);
        if (h && ua(h))
          if (f = String(f), !0 !== l) {
            var m = f,
              n = h;
            Xy(m).push(n);
            if ("" !== m) void 0 !== Vy[m] && Yy(n, m, Vy[m]);
            else
              for (var p in Vy) void 0 !== Vy[p] && Yy(n, p, Vy[p])
          } else {
            var q = h,
              t = Xy(f),
              r = t.indexOf(q);
            0 <= r && t.splice(r, 1)
          } b.vtp_gtmOnSuccess()
      })
    }();
















  var oA = {};
  oA.dataLayer = Ze;
  oA.callback = function (a) {
    Pe.hasOwnProperty(a) && ua(Pe[a]) && Pe[a]();
    delete Pe[a]
  };
  oA.bootstrap = 0;
  oA._spx = !1;

  function pA() {
    ye[tg()] = ye[tg()] || oA;
    zg();
    Dg() || k(Eg(), function (a, b) {
      Tq(a, b.transportUrl, b.context);
      K(92)
    });
    Na(Qe, Y.m);
    Q(66) && vg(Bg());
    Wc = fd
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      Tt(m) && (l = h.Pj)
    }
    if (!C["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Aj(E.referrer);
        c = "cct.google" === xj(d, "host")
      }
      if (!c) {
        var e = Ii("googTaggyReferrer");
        c = e.length && e[0].length
      }
      c && (C["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"))
    }
    if (Ke) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Ee ? (v = "OGT", w = "GTAG") : Ke && (w = v = "OPT");
          var x = C["google.tagmanager.debugui2.queue"];
          x || (x = [],
            C["google.tagmanager.debugui2.queue"] = x, Xb("https://" + xe.Gc + "/debug/bootstrap?id=" + mg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cj()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Rb,
              containerProduct: v,
              debug: !1,
              id: mg.ctid,
              targetRef: {
                ctid: mg.ctid,
                isDestination: kg.nd
              },
              aliases: ng(),
              destinations: qg()
            }
          };
          y.data.resume = function () {
            a()
          };
          xe.Si && (y.data.initialPublish = !0);
          x.push(y)
        },
        h = {
          Fm: 1,
          Qj: 2,
          ek: 3,
          Ui: 4,
          Pj: 5
        },
        l = void 0,
        m = void 0,
        n = yj(C.location, "query", !1, void 0, "gtm_debug");
      Tt(n) && (l = h.Qj);
      if (!l && E.referrer) {
        var p = Aj(E.referrer);
        "tagassistant.google.com" === xj(p, "host") && (l = h.ek)
      }
      if (!l) {
        var q = Ii("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Ui)
      }
      l || b();
      if (!l && Ut(m)) {
        var t = function () {
            if (r) return !0;
            r = !0;
            b();
            l && Rb ? f(l) : a()
          },
          r = !1;
        ac(E, "TADebugSignal", function () {
          t()
        }, !1);
        C.setTimeout(function () {
          t()
        }, 200)
      } else l && Rb ? f(l) : a()
    }
  })(function () {
    try {
      xg();
      if (Q(24)) {}
      zf().C();
      ji();
      (Q(112) || Q(113) ||
        Q(114)) && Cm();
      var a = ug();
      if (hg().canonical[a]) {
        var b = ye.zones;
        b && b.unregisterChild(pg());
      } else {
        Qq();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Mc.push(d[e]);
        for (var f = c.tags || [], h = 0; h < f.length; h++) Pc.push(f[h]);
        for (var l = c.predicates || [], m = 0; m < l.length; m++) Oc.push(l[m]);
        for (var n =
            c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], t = {}, r = 0; r < q.length; r++) {
            var u = q[r][0];
            t[u] = Array.prototype.slice.call(q[r], 1);
            "if" !== u && "unless" !== u || Vc(t[u])
          }
          Nc.push(t)
        }
        Rc = Y;
        Sc = Gv;
        pA();
        if (Q(33) && !Ke) {
          for (var v = qf["7"], w = v ? v.split("|") : [], x = {}, y = 0; y < w.length; y++) x[w[y]] = !0;
          for (var A = 0; A < Xf.length; A++) {
            var B = Xf[A],
              D = x[B] ? "granted" : "denied";
            Ef().implicit(B, D)
          }
        }
        St();
        Uq = !1;
        Vq = 0;
        if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) wr();
        else {
          ac(E, "DOMContentLoaded", wr);
          ac(E, "readystatechange",
            wr);
          if (E.createEventObject && E.documentElement.doScroll) {
            var H = !0;
            try {
              H = !C.frameElement
            } catch (P) {}
            H && xr()
          }
          ac(C, "load", wr)
        }
        gt = !1;
        "complete" === E.readyState ? it() : ac(C, "load", it);
        Ng && (Ig($g), C.setInterval(Zg, 864E5));
        Ig(Iv);
        Ig(Xr);
        Ig(rp);
        Ig(cm);
        Ig(hs);
        Ig(Tl);
        Ig(ej);
        Ig(Rl);
        Ig(ds);
        Q(42) && Ig($r);
        Jt({
          event: "gtm.js"
        });
        ou();
        pf(1);
        Es();
        Oe = Ka();
        oA.bootstrap = Oe;
        if (Q(24)) {}
      }
    } catch (P) {
      if (pf(4),
        Ng) {
        var M = Ug(!0, !0);
        $b(M)
      }
    }
  });

})()