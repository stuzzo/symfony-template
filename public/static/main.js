!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "./static/"),
    n((n.s = 9));
})([
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        for (
          /**!
           * @fileOverview Kickass library to create and place poppers near their reference elements.
           * @version 1.14.3
           * @license
           * Copyright (c) 2016 Federico Zivolo and contributors
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in all
           * copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
           * SOFTWARE.
           */
          var n =
              "undefined" != typeof window && "undefined" != typeof document,
            i = ["Edge", "Trident", "Firefox"],
            r = 0,
            o = 0;
          o < i.length;
          o += 1
        )
          if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
            r = 1;
            break;
          }
        var s =
          n && window.Promise
            ? function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function() {
                      (t = !1), e();
                    }));
                };
              }
            : function(e) {
                var t = !1;
                return function() {
                  t ||
                    ((t = !0),
                    setTimeout(function() {
                      (t = !1), e();
                    }, r));
                };
              };
        function a(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function l(e, t) {
          if (1 !== e.nodeType) return [];
          var n = getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function u(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function c(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = l(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + i) ? e : c(u(e));
        }
        var f = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);
        function h(e) {
          return 11 === e ? f : 10 === e ? d : f || d;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (
            var t = h(10) ? document.body : null, n = e.offsetParent;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === l(n, "position")
              ? p(n)
              : n
            : e
              ? e.ownerDocument.documentElement
              : document.documentElement;
        }
        function g(e) {
          return null !== e.parentNode ? g(e.parentNode) : e;
        }
        function m(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s,
            a,
            l = o.commonAncestorContainer;
          if ((e !== l && t !== l) || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) ||
              ("HTML" !== a && p(s.firstElementChild) !== s)
              ? p(l)
              : l;
          var u = g(e);
          return u.host ? m(u.host, t) : m(e, g(t).host);
        }
        function v(e) {
          var t =
              "top" ===
              (arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top")
                ? "scrollTop"
                : "scrollLeft",
            n = e.nodeName;
          if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t];
          }
          return e[t];
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"], 10) +
            parseFloat(e["border" + i + "Width"], 10)
          );
        }
        function b(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            h(10)
              ? n["offset" + e] +
                i["margin" + ("Height" === e ? "Top" : "Left")] +
                i["margin" + ("Height" === e ? "Bottom" : "Right")]
              : 0
          );
        }
        function _() {
          var e = document.body,
            t = document.documentElement,
            n = h(10) && getComputedStyle(t);
          return { height: b("Height", e, t, n), width: b("Width", e, t, n) };
        }
        var w = function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          E = (function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function(t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          T = function(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = n),
              e
            );
          },
          x =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        function C(e) {
          return x({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
          });
        }
        function A(e) {
          var t = {};
          try {
            if (h(10)) {
              t = e.getBoundingClientRect();
              var n = v(e, "top"),
                i = v(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? _() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            u = e.offsetWidth - s,
            c = e.offsetHeight - a;
          if (u || c) {
            var f = l(e);
            (u -= y(f, "x")), (c -= y(f, "y")), (r.width -= u), (r.height -= c);
          }
          return C(r);
        }
        function D(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = h(10),
            r = "HTML" === t.nodeName,
            o = A(e),
            s = A(t),
            a = c(e),
            u = l(t),
            f = parseFloat(u.borderTopWidth, 10),
            d = parseFloat(u.borderLeftWidth, 10);
          n &&
            "HTML" === t.nodeName &&
            ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var p = C({
            top: o.top - s.top - f,
            left: o.left - s.left - d,
            width: o.width,
            height: o.height
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
            var g = parseFloat(u.marginTop, 10),
              m = parseFloat(u.marginLeft, 10);
            (p.top -= f - g),
              (p.bottom -= f - g),
              (p.left -= d - m),
              (p.right -= d - m),
              (p.marginTop = g),
              (p.marginLeft = m);
          }
          return (
            (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
              (p = (function(e, t) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = v(t, "top"),
                  r = v(t, "left"),
                  o = n ? -1 : 1;
                return (
                  (e.top += i * o),
                  (e.bottom += i * o),
                  (e.left += r * o),
                  (e.right += r * o),
                  e
                );
              })(p, t)),
            p
          );
        }
        function S(e) {
          if (!e || !e.parentElement || h()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === l(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function N(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? S(e) : m(e, t);
          if ("viewport" === i)
            o = (function(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e.ownerDocument.documentElement,
                i = D(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : v(n),
                a = t ? 0 : v(n, "left");
              return C({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
              });
            })(s, r);
          else {
            var a = void 0;
            "scrollParent" === i
              ? "BODY" === (a = c(u(t))).nodeName &&
                (a = e.ownerDocument.documentElement)
              : (a = "window" === i ? e.ownerDocument.documentElement : i);
            var f = D(a, s, r);
            if (
              "HTML" !== a.nodeName ||
              (function e(t) {
                var n = t.nodeName;
                return (
                  "BODY" !== n &&
                  "HTML" !== n &&
                  ("fixed" === l(t, "position") || e(u(t)))
                );
              })(s)
            )
              o = f;
            else {
              var d = _(),
                h = d.height,
                p = d.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = h + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = p + f.left);
            }
          }
          return (
            (o.left += n), (o.top += n), (o.right -= n), (o.bottom -= n), o
          );
        }
        function k(e, t, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = N(n, i, o, r),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height }
            },
            l = Object.keys(a)
              .map(function(e) {
                return x({ key: e }, a[e], {
                  area: ((t = a[e]), t.width * t.height)
                });
                var t;
              })
              .sort(function(e, t) {
                return t.area - e.area;
              }),
            u = l.filter(function(e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            f = e.split("-")[1];
          return c + (f ? "-" + f : "");
        }
        function O(e, t, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return D(n, i ? S(t) : m(t, n), i);
        }
        function I(e) {
          var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
          return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function j(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
          };
          return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
          });
        }
        function L(e, t, n) {
          n = n.split("-")[0];
          var i = I(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
          return (
            (r[s] = t[s] + t[l] / 2 - i[l] / 2),
            (r[a] = n === a ? t[a] - i[u] : t[j(a)]),
            r
          );
        }
        function P(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function H(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function(e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function(e) {
                        return e[t] === n;
                      });
                    var i = P(e, function(e) {
                      return e[t] === n;
                    });
                    return e.indexOf(i);
                  })(e, "name", n)
                )
            ).forEach(function(e) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                a(n) &&
                ((t.offsets.popper = C(t.offsets.popper)),
                (t.offsets.reference = C(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function M(e, t) {
          return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function R(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i],
              o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function q(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function F(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function W(e, t) {
          Object.keys(t).forEach(function(n) {
            var i = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              F(t[n]) &&
              (i = "px"),
              (e.style[n] = t[n] + i);
          });
        }
        function B(e, t, n) {
          var i = P(e, function(e) {
              return e.name === t;
            }),
            r =
              !!i &&
              e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!r) {
            var o = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        var U = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start"
          ],
          V = U.slice(3);
        function $(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = V.indexOf(e),
            i = V.slice(n + 1).concat(V.slice(0, n));
          return t ? i.reverse() : i;
        }
        var Q = "flip",
          Y = "clockwise",
          K = "counterclockwise";
        var G = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = t.split("-")[1];
                  if (i) {
                    var r = e.offsets,
                      o = r.reference,
                      s = r.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      l = a ? "left" : "top",
                      u = a ? "width" : "height",
                      c = {
                        start: T({}, l, o[l]),
                        end: T({}, l, o[l] + o[u] - s[u])
                      };
                    e.offsets.popper = x({}, s, c[i]);
                  }
                  return e;
                }
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                  var n,
                    i = t.offset,
                    r = e.placement,
                    o = e.offsets,
                    s = o.popper,
                    a = o.reference,
                    l = r.split("-")[0];
                  return (
                    (n = F(+i)
                      ? [+i, 0]
                      : (function(e, t, n, i) {
                          var r = [0, 0],
                            o = -1 !== ["right", "left"].indexOf(i),
                            s = e.split(/(\+|\-)/).map(function(e) {
                              return e.trim();
                            }),
                            a = s.indexOf(
                              P(s, function(e) {
                                return -1 !== e.search(/,|\s/);
                              })
                            );
                          s[a] &&
                            -1 === s[a].indexOf(",") &&
                            console.warn(
                              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                            );
                          var l = /\s*,\s*|\s+/,
                            u =
                              -1 !== a
                                ? [
                                    s.slice(0, a).concat([s[a].split(l)[0]]),
                                    [s[a].split(l)[1]].concat(s.slice(a + 1))
                                  ]
                                : [s];
                          return (
                            (u = u.map(function(e, i) {
                              var r = (1 === i ? !o : o) ? "height" : "width",
                                s = !1;
                              return e
                                .reduce(function(e, t) {
                                  return "" === e[e.length - 1] &&
                                    -1 !== ["+", "-"].indexOf(t)
                                    ? ((e[e.length - 1] = t), (s = !0), e)
                                    : s
                                      ? ((e[e.length - 1] += t), (s = !1), e)
                                      : e.concat(t);
                                }, [])
                                .map(function(e) {
                                  return (function(e, t, n, i) {
                                    var r = e.match(
                                        /((?:\-|\+)?\d*\.?\d*)(.*)/
                                      ),
                                      o = +r[1],
                                      s = r[2];
                                    if (!o) return e;
                                    if (0 === s.indexOf("%")) {
                                      var a = void 0;
                                      switch (s) {
                                        case "%p":
                                          a = n;
                                          break;
                                        case "%":
                                        case "%r":
                                        default:
                                          a = i;
                                      }
                                      return (C(a)[t] / 100) * o;
                                    }
                                    return "vh" === s || "vw" === s
                                      ? (("vh" === s
                                          ? Math.max(
                                              document.documentElement
                                                .clientHeight,
                                              window.innerHeight || 0
                                            )
                                          : Math.max(
                                              document.documentElement
                                                .clientWidth,
                                              window.innerWidth || 0
                                            )) /
                                          100) *
                                          o
                                      : o;
                                  })(e, r, t, n);
                                });
                            })).forEach(function(e, t) {
                              e.forEach(function(n, i) {
                                F(n) &&
                                  (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
                              });
                            }),
                            r
                          );
                        })(i, s, a, l)),
                    "left" === l
                      ? ((s.top += n[0]), (s.left -= n[1]))
                      : "right" === l
                        ? ((s.top += n[0]), (s.left += n[1]))
                        : "top" === l
                          ? ((s.left += n[0]), (s.top -= n[1]))
                          : "bottom" === l &&
                            ((s.left += n[0]), (s.top += n[1])),
                    (e.popper = s),
                    e
                  );
                },
                offset: 0
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.boundariesElement || p(e.instance.popper);
                  e.instance.reference === n && (n = p(n));
                  var i = R("transform"),
                    r = e.instance.popper.style,
                    o = r.top,
                    s = r.left,
                    a = r[i];
                  (r.top = ""), (r.left = ""), (r[i] = "");
                  var l = N(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed
                  );
                  (r.top = o), (r.left = s), (r[i] = a), (t.boundaries = l);
                  var u = t.priority,
                    c = e.offsets.popper,
                    f = {
                      primary: function(e) {
                        var n = c[e];
                        return (
                          c[e] < l[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(c[e], l[e])),
                          T({}, e, n)
                        );
                      },
                      secondary: function(e) {
                        var n = "right" === e ? "left" : "top",
                          i = c[n];
                        return (
                          c[e] > l[e] &&
                            !t.escapeWithReference &&
                            (i = Math.min(
                              c[n],
                              l[e] - ("right" === e ? c.width : c.height)
                            )),
                          T({}, n, i)
                        );
                      }
                    };
                  return (
                    u.forEach(function(e) {
                      var t =
                        -1 !== ["left", "top"].indexOf(e)
                          ? "primary"
                          : "secondary";
                      c = x({}, c, f[t](e));
                    }),
                    (e.offsets.popper = c),
                    e
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                  var t = e.offsets,
                    n = t.popper,
                    i = t.reference,
                    r = e.placement.split("-")[0],
                    o = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(r),
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    u = s ? "width" : "height";
                  return (
                    n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                  );
                }
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                  var n;
                  if (!B(e.instance.modifiers, "arrow", "keepTogether"))
                    return e;
                  var i = t.element;
                  if ("string" == typeof i) {
                    if (!(i = e.instance.popper.querySelector(i))) return e;
                  } else if (!e.instance.popper.contains(i))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      e
                    );
                  var r = e.placement.split("-")[0],
                    o = e.offsets,
                    s = o.popper,
                    a = o.reference,
                    u = -1 !== ["left", "right"].indexOf(r),
                    c = u ? "height" : "width",
                    f = u ? "Top" : "Left",
                    d = f.toLowerCase(),
                    h = u ? "left" : "top",
                    p = u ? "bottom" : "right",
                    g = I(i)[c];
                  a[p] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[p] - g)),
                    a[d] + g > s[p] && (e.offsets.popper[d] += a[d] + g - s[p]),
                    (e.offsets.popper = C(e.offsets.popper));
                  var m = a[d] + a[c] / 2 - g / 2,
                    v = l(e.instance.popper),
                    y = parseFloat(v["margin" + f], 10),
                    b = parseFloat(v["border" + f + "Width"], 10),
                    _ = m - e.offsets.popper[d] - y - b;
                  return (
                    (_ = Math.max(Math.min(s[c] - g, _), 0)),
                    (e.arrowElement = i),
                    (e.offsets.arrow = (T((n = {}), d, Math.round(_)),
                    T(n, h, ""),
                    n)),
                    e
                  );
                },
                element: "[x-arrow]"
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                  if (M(e.instance.modifiers, "inner")) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = N(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed
                    ),
                    i = e.placement.split("-")[0],
                    r = j(i),
                    o = e.placement.split("-")[1] || "",
                    s = [];
                  switch (t.behavior) {
                    case Q:
                      s = [i, r];
                      break;
                    case Y:
                      s = $(i);
                      break;
                    case K:
                      s = $(i, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function(a, l) {
                      if (i !== a || s.length === l + 1) return e;
                      (i = e.placement.split("-")[0]), (r = j(i));
                      var u = e.offsets.popper,
                        c = e.offsets.reference,
                        f = Math.floor,
                        d =
                          ("left" === i && f(u.right) > f(c.left)) ||
                          ("right" === i && f(u.left) < f(c.right)) ||
                          ("top" === i && f(u.bottom) > f(c.top)) ||
                          ("bottom" === i && f(u.top) < f(c.bottom)),
                        h = f(u.left) < f(n.left),
                        p = f(u.right) > f(n.right),
                        g = f(u.top) < f(n.top),
                        m = f(u.bottom) > f(n.bottom),
                        v =
                          ("left" === i && h) ||
                          ("right" === i && p) ||
                          ("top" === i && g) ||
                          ("bottom" === i && m),
                        y = -1 !== ["top", "bottom"].indexOf(i),
                        b =
                          !!t.flipVariations &&
                          ((y && "start" === o && h) ||
                            (y && "end" === o && p) ||
                            (!y && "start" === o && g) ||
                            (!y && "end" === o && m));
                      (d || v || b) &&
                        ((e.flipped = !0),
                        (d || v) && (i = s[l + 1]),
                        b &&
                          (o =
                            "end" === o ? "start" : "start" === o ? "end" : o),
                        (e.placement = i + (o ? "-" + o : "")),
                        (e.offsets.popper = x(
                          {},
                          e.offsets.popper,
                          L(e.instance.popper, e.offsets.reference, e.placement)
                        )),
                        (e = H(e.instance.modifiers, e, "flip")));
                    }),
                    e
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = e.offsets,
                    r = i.popper,
                    o = i.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return (
                    (r[s ? "left" : "top"] =
                      o[n] - (a ? r[s ? "width" : "height"] : 0)),
                    (e.placement = j(t)),
                    (e.offsets.popper = C(r)),
                    e
                  );
                }
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                  if (!B(e.instance.modifiers, "hide", "preventOverflow"))
                    return e;
                  var t = e.offsets.reference,
                    n = P(e.instance.modifiers, function(e) {
                      return "preventOverflow" === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                  }
                  return e;
                }
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                  var n = t.x,
                    i = t.y,
                    r = e.offsets.popper,
                    o = P(e.instance.modifiers, function(e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var s,
                    a,
                    l = void 0 !== o ? o : t.gpuAcceleration,
                    u = A(p(e.instance.popper)),
                    c = { position: r.position },
                    f = {
                      left: Math.floor(r.left),
                      top: Math.round(r.top),
                      bottom: Math.round(r.bottom),
                      right: Math.floor(r.right)
                    },
                    d = "bottom" === n ? "top" : "bottom",
                    h = "right" === i ? "left" : "right",
                    g = R("transform");
                  if (
                    ((a = "bottom" === d ? -u.height + f.bottom : f.top),
                    (s = "right" === h ? -u.width + f.right : f.left),
                    l && g)
                  )
                    (c[g] = "translate3d(" + s + "px, " + a + "px, 0)"),
                      (c[d] = 0),
                      (c[h] = 0),
                      (c.willChange = "transform");
                  else {
                    var m = "bottom" === d ? -1 : 1,
                      v = "right" === h ? -1 : 1;
                    (c[d] = a * m),
                      (c[h] = s * v),
                      (c.willChange = d + ", " + h);
                  }
                  var y = { "x-placement": e.placement };
                  return (
                    (e.attributes = x({}, y, e.attributes)),
                    (e.styles = x({}, c, e.styles)),
                    (e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                  var t, n;
                  return (
                    W(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function(e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      W(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function(e, t, n, i, r) {
                  var o = O(r, t, e, n.positionFixed),
                    s = k(
                      n.placement,
                      o,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding
                    );
                  return (
                    t.setAttribute("x-placement", s),
                    W(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                    n
                  );
                },
                gpuAcceleration: void 0
              }
            }
          },
          z = (function() {
            function e(t, n) {
              var i = this,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              w(this, e),
                (this.scheduleUpdate = function() {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = s(this.update.bind(this))),
                (this.options = x({}, e.Defaults, r)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: []
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(x({}, e.Defaults.modifiers, r.modifiers)).forEach(
                  function(t) {
                    i.options.modifiers[t] = x(
                      {},
                      e.Defaults.modifiers[t] || {},
                      r.modifiers ? r.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function(e) {
                    return x({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function(e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function(e) {
                  e.enabled &&
                    a(e.onLoad) &&
                    e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var o = this.options.eventsEnabled;
              o && this.enableEventListeners(), (this.state.eventsEnabled = o);
            }
            return (
              E(e, [
                {
                  key: "update",
                  value: function() {
                    return function() {
                      if (!this.state.isDestroyed) {
                        var e = {
                          instance: this,
                          styles: {},
                          arrowStyles: {},
                          attributes: {},
                          flipped: !1,
                          offsets: {}
                        };
                        (e.offsets.reference = O(
                          this.state,
                          this.popper,
                          this.reference,
                          this.options.positionFixed
                        )),
                          (e.placement = k(
                            this.options.placement,
                            e.offsets.reference,
                            this.popper,
                            this.reference,
                            this.options.modifiers.flip.boundariesElement,
                            this.options.modifiers.flip.padding
                          )),
                          (e.originalPlacement = e.placement),
                          (e.positionFixed = this.options.positionFixed),
                          (e.offsets.popper = L(
                            this.popper,
                            e.offsets.reference,
                            e.placement
                          )),
                          (e.offsets.popper.position = this.options
                            .positionFixed
                            ? "fixed"
                            : "absolute"),
                          (e = H(this.modifiers, e)),
                          this.state.isCreated
                            ? this.options.onUpdate(e)
                            : ((this.state.isCreated = !0),
                              this.options.onCreate(e));
                      }
                    }.call(this);
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    return function() {
                      return (
                        (this.state.isDestroyed = !0),
                        M(this.modifiers, "applyStyle") &&
                          (this.popper.removeAttribute("x-placement"),
                          (this.popper.style.position = ""),
                          (this.popper.style.top = ""),
                          (this.popper.style.left = ""),
                          (this.popper.style.right = ""),
                          (this.popper.style.bottom = ""),
                          (this.popper.style.willChange = ""),
                          (this.popper.style[R("transform")] = "")),
                        this.disableEventListeners(),
                        this.options.removeOnDestroy &&
                          this.popper.parentNode.removeChild(this.popper),
                        this
                      );
                    }.call(this);
                  }
                },
                {
                  key: "enableEventListeners",
                  value: function() {
                    return function() {
                      this.state.eventsEnabled ||
                        (this.state = (function(e, t, n, i) {
                          (n.updateBound = i),
                            q(e).addEventListener("resize", n.updateBound, {
                              passive: !0
                            });
                          var r = c(e);
                          return (
                            (function e(t, n, i, r) {
                              var o = "BODY" === t.nodeName,
                                s = o ? t.ownerDocument.defaultView : t;
                              s.addEventListener(n, i, { passive: !0 }),
                                o || e(c(s.parentNode), n, i, r),
                                r.push(s);
                            })(r, "scroll", n.updateBound, n.scrollParents),
                            (n.scrollElement = r),
                            (n.eventsEnabled = !0),
                            n
                          );
                        })(
                          this.reference,
                          this.options,
                          this.state,
                          this.scheduleUpdate
                        ));
                    }.call(this);
                  }
                },
                {
                  key: "disableEventListeners",
                  value: function() {
                    return function() {
                      var e, t;
                      this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                        (this.state = ((e = this.reference),
                        (t = this.state),
                        q(e).removeEventListener("resize", t.updateBound),
                        t.scrollParents.forEach(function(e) {
                          e.removeEventListener("scroll", t.updateBound);
                        }),
                        (t.updateBound = null),
                        (t.scrollParents = []),
                        (t.scrollElement = null),
                        (t.eventsEnabled = !1),
                        t)));
                    }.call(this);
                  }
                }
              ]),
              e
            );
          })();
        (z.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (z.placements = U),
          (z.Defaults = G),
          (t.default = z);
      }.call(this, n(0));
  },
  function(e, t, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */ !(function(
      t,
      n
    ) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function(n, r) {
      "use strict";
      var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        f = o.indexOf,
        d = {},
        h = d.toString,
        p = d.hasOwnProperty,
        g = p.toString,
        m = g.call(Object),
        v = {},
        y = function(e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        b = function(e) {
          return null != e && e === e.window;
        },
        _ = { type: !0, src: !0, noModule: !0 };
      function w(e, t, n) {
        var i,
          r = (t = t || s).createElement("script");
        if (((r.text = e), n)) for (i in _) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r);
      }
      function E(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
            ? d[h.call(e)] || "object"
            : typeof e;
      }
      var T = function(e, t) {
          return new T.fn.init(e, t);
        },
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = E(e);
        return (
          !y(e) &&
          !b(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.3.1",
        constructor: T,
        length: 0,
        toArray: function() {
          return l.call(this);
        },
        get: function(e) {
          return null == e
            ? l.call(this)
            : e < 0
              ? this[e + this.length]
              : this[e];
        },
        pushStack: function(e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function(e) {
          return T.each(this, e);
        },
        map: function(e) {
          return this.pushStack(
            T.map(this, function(t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function() {
          return this.pushStack(l.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        eq: function(e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: o.sort,
        splice: o.splice
      }),
        (T.extend = T.fn.extend = function() {
          var e,
            t,
            n,
            i,
            r,
            o,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || y(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  s !== (i = e[t]) &&
                    (u && i && (T.isPlainObject(i) || (r = Array.isArray(i)))
                      ? (r
                          ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                          : (o = n && T.isPlainObject(n) ? n : {}),
                        (s[t] = T.extend(u, o, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
        T.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function(e) {
            throw new Error(e);
          },
          noop: function() {},
          isPlainObject: function(e) {
            var t, n;
            return !(
              !e ||
              "[object Object]" !== h.call(e) ||
              ((t = a(e)) &&
                ("function" !=
                  typeof (n = p.call(t, "constructor") && t.constructor) ||
                  g.call(n) !== m))
            );
          },
          isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function(e) {
            w(e);
          },
          each: function(e, t) {
            var n,
              i = 0;
            if (C(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          trim: function(e) {
            return null == e ? "" : (e + "").replace(x, "");
          },
          makeArray: function(e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function(e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
              !t(e[r], r) !== s && i.push(e[r]);
            return i;
          },
          map: function(e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (C(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && s.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return u.apply([], s);
          },
          guid: 1,
          support: v
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = o[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var A =
        /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        (function(e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            g,
            m,
            v,
            y,
            b,
            _ = "sizzle" + 1 * new Date(),
            w = e.document,
            E = 0,
            T = 0,
            x = se(),
            C = se(),
            A = se(),
            D = function(e, t) {
              return e === t && (f = !0), 0;
            },
            S = {}.hasOwnProperty,
            N = [],
            k = N.pop,
            O = N.push,
            I = N.push,
            j = N.slice,
            L = function(e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            P =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            R =
              "\\[" +
              H +
              "*(" +
              M +
              ")(?:" +
              H +
              "*([*^$|!~]?=)" +
              H +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              H +
              "*\\]",
            q =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            F = new RegExp(H + "+", "g"),
            W = new RegExp(
              "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
              "g"
            ),
            B = new RegExp("^" + H + "*," + H + "*"),
            U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            V = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
            $ = new RegExp(q),
            Q = new RegExp("^" + M + "$"),
            Y = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + q),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  H +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  H +
                  "*(?:([+-]|)" +
                  H +
                  "*(\\d+)|))" +
                  H +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  H +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  H +
                  "*((?:-\\d)?\\d*)" +
                  H +
                  "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            z = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ee = function(e, t, n) {
              var i = "0x" + t - 65536;
              return i != i || n
                ? t
                : i < 0
                  ? String.fromCharCode(i + 65536)
                  : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function() {
              d();
            },
            re = ye(
              function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            I.apply((N = j.call(w.childNodes)), w.childNodes),
              N[w.childNodes.length].nodeType;
          } catch (e) {
            I = {
              apply: N.length
                ? function(e, t) {
                    O.apply(e, j.call(t));
                  }
                : function(e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  }
            };
          }
          function oe(e, t, i, r) {
            var o,
              a,
              u,
              c,
              f,
              p,
              v,
              y = t && t.ownerDocument,
              E = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== E && 9 !== E && 11 !== E))
            )
              return i;
            if (
              !r &&
              ((t ? t.ownerDocument || t : w) !== h && d(t), (t = t || h), g)
            ) {
              if (11 !== E && (f = X.exec(e)))
                if ((o = f[1])) {
                  if (9 === E) {
                    if (!(u = t.getElementById(o))) return i;
                    if (u.id === o) return i.push(u), i;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    b(t, u) &&
                    u.id === o
                  )
                    return i.push(u), i;
                } else {
                  if (f[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return I.apply(i, t.getElementsByClassName(o)), i;
                }
              if (n.qsa && !A[e + " "] && (!m || !m.test(e))) {
                if (1 !== E) (y = t), (v = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (c = t.getAttribute("id"))
                      ? (c = c.replace(te, ne))
                      : t.setAttribute("id", (c = _)),
                      a = (p = s(e)).length;
                    a--;

                  )
                    p[a] = "#" + c + " " + ve(p[a]);
                  (v = p.join(",")), (y = (J.test(e) && ge(t.parentNode)) || t);
                }
                if (v)
                  try {
                    return I.apply(i, y.querySelectorAll(v)), i;
                  } catch (e) {
                  } finally {
                    c === _ && t.removeAttribute("id");
                  }
              }
            }
            return l(e.replace(W, "$1"), t, i, r);
          }
          function se() {
            var e = [];
            return function t(n, r) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            };
          }
          function ae(e) {
            return (e[_] = !0), e;
          }
          function le(e) {
            var t = h.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              i.attrHandle[n[r]] = t;
          }
          function ce(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function fe(e) {
            return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function de(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function he(e) {
            return function(t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && re(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function pe(e) {
            return ae(function(t) {
              return (
                (t = +t),
                ae(function(n, i) {
                  for (var r, o = e([], n.length, t), s = o.length; s--; )
                    n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = oe.support = {}),
          (o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
          (d = oe.setDocument = function(e) {
            var t,
              r,
              s = e ? e.ownerDocument || e : w;
            return s !== h && 9 === s.nodeType && s.documentElement
              ? ((p = (h = s).documentElement),
                (g = !o(h)),
                w !== h &&
                  (r = h.defaultView) &&
                  r.top !== r &&
                  (r.addEventListener
                    ? r.addEventListener("unload", ie, !1)
                    : r.attachEvent && r.attachEvent("onunload", ie)),
                (n.attributes = le(function(e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function(e) {
                  return (
                    e.appendChild(h.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = z.test(h.getElementsByClassName)),
                (n.getById = le(function(e) {
                  return (
                    (p.appendChild(e).id = _),
                    !h.getElementsByName || !h.getElementsByName(_).length
                  );
                })),
                n.getById
                  ? ((i.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (i.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((i.filter.ID = function(e) {
                      var t = e.replace(Z, ee);
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (i.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          i,
                          r,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            r = t.getElementsByName(e), i = 0;
                            (o = r[i++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (i.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                    }
                  : function(e, t) {
                      var n,
                        i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (i.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (m = []),
                (n.qsa = z.test(h.querySelectorAll)) &&
                  (le(function(e) {
                    (p.appendChild(e).innerHTML =
                      "<a id='" +
                      _ +
                      "'></a><select id='" +
                      _ +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + H + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + H + "*(?:value|" + P + ")"),
                      e.querySelectorAll("[id~=" + _ + "-]").length ||
                        m.push("~="),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      e.querySelectorAll("a#" + _ + "+*").length ||
                        m.push(".#.+[+~]");
                  }),
                  le(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        m.push("name" + H + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (p.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = z.test(
                  (y =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  le(function(e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      v.push("!=", q);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (t = z.test(p.compareDocumentPosition)),
                (b =
                  t || z.test(p.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (D = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        (1 &
                          (i =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e === h || (e.ownerDocument === w && b(w, e))
                            ? -1
                            : t === h || (t.ownerDocument === w && b(w, t))
                              ? 1
                              : c
                                ? L(c, e) - L(c, t)
                                : 0
                          : 4 & i
                            ? -1
                            : 1)
                      );
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                      if (!r || !o)
                        return e === h
                          ? -1
                          : t === h
                            ? 1
                            : r
                              ? -1
                              : o
                                ? 1
                                : c
                                  ? L(c, e) - L(c, t)
                                  : 0;
                      if (r === o) return ce(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; s[i] === a[i]; ) i++;
                      return i
                        ? ce(s[i], a[i])
                        : s[i] === w
                          ? -1
                          : a[i] === w
                            ? 1
                            : 0;
                    }),
                h)
              : h;
          }),
          (oe.matches = function(e, t) {
            return oe(e, null, null, t);
          }),
          (oe.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== h && d(e),
              (t = t.replace(V, "='$1']")),
              n.matchesSelector &&
                g &&
                !A[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var i = y.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {}
            return oe(t, h, null, [e]).length > 0;
          }),
          (oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== h && d(e), b(e, t);
          }),
          (oe.attr = function(e, t) {
            (e.ownerDocument || e) !== h && d(e);
            var r = i.attrHandle[t.toLowerCase()],
              o =
                r && S.call(i.attrHandle, t.toLowerCase())
                  ? r(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                  ? o.value
                  : null;
          }),
          (oe.escape = function(e) {
            return (e + "").replace(te, ne);
          }),
          (oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (oe.uniqueSort = function(e) {
            var t,
              i = [],
              r = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(D),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
              for (; r--; ) e.splice(i[r], 1);
            }
            return (c = null), e;
          }),
          (r = oe.getText = function(e) {
            var t,
              n = "",
              i = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += r(t);
            return n;
          }),
          ((i = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(Z, ee)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || oe.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && oe.error(e[0]),
                  e
                );
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2];
                return Y.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        $.test(n) &&
                        (t = s(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Z, ee).toLowerCase();
                return "*" === e
                  ? function() {
                      return !0;
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function(e) {
                var t = x[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                    x(e, function(e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function(e, t, n) {
                return function(i) {
                  var r = oe.attr(i, e);
                  return null == r
                    ? "!=" === t
                    : !t ||
                        ((r += ""),
                        "=" === t
                          ? r === n
                          : "!=" === t
                            ? r !== n
                            : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                                ? n && r.indexOf(n) > -1
                                : "$=" === t
                                  ? n && r.slice(-n.length) === n
                                  : "~=" === t
                                    ? (" " + r.replace(F, " ") + " ").indexOf(
                                        n
                                      ) > -1
                                    : "|=" === t &&
                                      (r === n ||
                                        r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function(e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === r
                  ? function(e) {
                      return !!e.parentNode;
                    }
                  : function(t, n, l) {
                      var u,
                        c,
                        f,
                        d,
                        h,
                        p,
                        g = o !== s ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a,
                        b = !1;
                      if (m) {
                        if (o) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                a
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            p = g = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [s ? m.firstChild : m.lastChild]), s && y)) {
                          for (
                            b =
                              (h =
                                (u =
                                  (c =
                                    (f = (d = m)[_] || (d[_] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  E && u[1]) && u[2],
                              d = h && m.childNodes[h];
                            (d = (++h && d && d[g]) || (b = h = 0) || p.pop());

                          )
                            if (1 === d.nodeType && ++b && d === t) {
                              c[e] = [E, h, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = h =
                              (u =
                                (c =
                                  (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === E &&
                              u[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++h && d && d[g]) || (b = h = 0) || p.pop()) &&
                            ((a
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[_] || (d[_] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [E, b]),
                              d !== t));

                          );
                        return (b -= r) === i || (b % i == 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function(e, t) {
                var n,
                  r =
                    i.pseudos[e] ||
                    i.setFilters[e.toLowerCase()] ||
                    oe.error("unsupported pseudo: " + e);
                return r[_]
                  ? r(t)
                  : r.length > 1
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ae(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--; )
                              e[(i = L(e, o[s]))] = !(n[i] = o[s]);
                          })
                        : function(e) {
                            return r(e, 0, n);
                          })
                    : r;
              }
            },
            pseudos: {
              not: ae(function(e) {
                var t = [],
                  n = [],
                  i = a(e.replace(W, "$1"));
                return i[_]
                  ? ae(function(e, t, n, r) {
                      for (var o, s = i(e, null, r, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function(e, r, o) {
                      return (
                        (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: ae(function(e) {
                return function(t) {
                  return oe(e, t).length > 0;
                };
              }),
              contains: ae(function(e) {
                return (
                  (e = e.replace(Z, ee)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: ae(function(e) {
                return (
                  Q.test(e || "") || oe.error("unsupported lang: " + e),
                  (e = e.replace(Z, ee).toLowerCase()),
                  function(t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function(t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function(e) {
                return e === p;
              },
              focus: function(e) {
                return (
                  e === h.activeElement &&
                  (!h.hasFocus || h.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: he(!1),
              disabled: he(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function(e) {
                return !i.pseudos.empty(e);
              },
              header: function(e) {
                return G.test(e.nodeName);
              },
              input: function(e) {
                return K.test(e.nodeName);
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function(e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: pe(function() {
                return [0];
              }),
              last: pe(function(e, t) {
                return [t - 1];
              }),
              eq: pe(function(e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: pe(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: pe(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: pe(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: pe(function(e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              })
            }
          }).pseudos.nth =
            i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = fe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = de(t);
          function me() {}
          function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function ye(e, t, n) {
            var i = t.dir,
              r = t.next,
              o = r || i,
              s = n && "parentNode" === o,
              a = T++;
            return t.first
              ? function(t, n, r) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s) return e(t, n, r);
                  return !1;
                }
              : function(t, n, l) {
                  var u,
                    c,
                    f,
                    d = [E, a];
                  if (l) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((c =
                            (f = t[_] || (t[_] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((u = c[o]) && u[0] === E && u[1] === a)
                            return (d[2] = u[2]);
                          if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function be(e) {
            return e.length > 1
              ? function(t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
              (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), u && t.push(a)));
            return s;
          }
          function we(e, t, n, i, r, o) {
            return (
              i && !i[_] && (i = we(i)),
              r && !r[_] && (r = we(r, o)),
              ae(function(o, s, a, l) {
                var u,
                  c,
                  f,
                  d = [],
                  h = [],
                  p = s.length,
                  g =
                    o ||
                    (function(e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  m = !e || (!o && t) ? g : _e(g, d, e, a, l),
                  v = n ? (r || (o ? e : p || i) ? [] : s) : m;
                if ((n && n(m, v, a, l), i))
                  for (u = _e(v, h), i(u, [], a, l), c = u.length; c--; )
                    (f = u[c]) && (v[h[c]] = !(m[h[c]] = f));
                if (o) {
                  if (r || e) {
                    if (r) {
                      for (u = [], c = v.length; c--; )
                        (f = v[c]) && u.push((m[c] = f));
                      r(null, (v = []), u, l);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (u = r ? L(o, f) : d[c]) > -1 &&
                        (o[u] = !(s[u] = f));
                  }
                } else (v = _e(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : I.apply(s, v);
              })
            );
          }
          function Ee(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                s = i.relative[e[0].type],
                a = s || i.relative[" "],
                l = s ? 1 : 0,
                c = ye(
                  function(e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                f = ye(
                  function(e) {
                    return L(t, e) > -1;
                  },
                  a,
                  !0
                ),
                d = [
                  function(e, n, i) {
                    var r =
                      (!s && (i || n !== u)) ||
                      ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                    return (t = null), r;
                  }
                ];
              l < o;
              l++
            )
              if ((n = i.relative[e[l].type])) d = [ye(be(d), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                  for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                  return we(
                    l > 1 && be(d),
                    l > 1 &&
                      ve(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(W, "$1"),
                    n,
                    l < r && Ee(e.slice(l, r)),
                    r < o && Ee((e = e.slice(r))),
                    r < o && ve(e)
                  );
                }
                d.push(n);
              }
            return be(d);
          }
          return (
            (me.prototype = i.filters = i.pseudos),
            (i.setFilters = new me()),
            (s = oe.tokenize = function(e, t) {
              var n,
                r,
                o,
                s,
                a,
                l,
                u,
                c = C[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (a = e, l = [], u = i.preFilter; a; ) {
                for (s in ((n && !(r = B.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                (n = !1),
                (r = U.exec(a)) &&
                  ((n = r.shift()),
                  o.push({ value: n, type: r[0].replace(W, " ") }),
                  (a = a.slice(n.length))),
                i.filter))
                  !(r = Y[s].exec(a)) ||
                    (u[s] && !(r = u[s](r))) ||
                    ((n = r.shift()),
                    o.push({ value: n, type: s, matches: r }),
                    (a = a.slice(n.length)));
                if (!n) break;
              }
              return t ? a.length : a ? oe.error(e) : C(e, l).slice(0);
            }),
            (a = oe.compile = function(e, t) {
              var n,
                r = [],
                o = [],
                a = A[e + " "];
              if (!a) {
                for (t || (t = s(e)), n = t.length; n--; )
                  (a = Ee(t[n]))[_] ? r.push(a) : o.push(a);
                (a = A(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      r = e.length > 0,
                      o = function(o, s, a, l, c) {
                        var f,
                          p,
                          m,
                          v = 0,
                          y = "0",
                          b = o && [],
                          _ = [],
                          w = u,
                          T = o || (r && i.find.TAG("*", c)),
                          x = (E += null == w ? 1 : Math.random() || 0.1),
                          C = T.length;
                        for (
                          c && (u = s === h || s || c);
                          y !== C && null != (f = T[y]);
                          y++
                        ) {
                          if (r && f) {
                            for (
                              p = 0,
                                s || f.ownerDocument === h || (d(f), (a = !g));
                              (m = e[p++]);

                            )
                              if (m(f, s || h, a)) {
                                l.push(f);
                                break;
                              }
                            c && (E = x);
                          }
                          n && ((f = !m && f) && v--, o && b.push(f));
                        }
                        if (((v += y), n && y !== v)) {
                          for (p = 0; (m = t[p++]); ) m(b, _, s, a);
                          if (o) {
                            if (v > 0)
                              for (; y--; ) b[y] || _[y] || (_[y] = k.call(l));
                            _ = _e(_);
                          }
                          I.apply(l, _),
                            c &&
                              !o &&
                              _.length > 0 &&
                              v + t.length > 1 &&
                              oe.uniqueSort(l);
                        }
                        return c && ((E = x), (u = w)), b;
                      };
                    return n ? ae(o) : o;
                  })(o, r)
                )).selector = e;
              }
              return a;
            }),
            (l = oe.select = function(e, t, n, r) {
              var o,
                l,
                u,
                c,
                f,
                d = "function" == typeof e && e,
                h = !r && s((e = d.selector || e));
              if (((n = n || []), 1 === h.length)) {
                if (
                  (l = h[0] = h[0].slice(0)).length > 2 &&
                  "ID" === (u = l[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  i.relative[l[1].type]
                ) {
                  if (
                    !(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(l.shift().value.length));
                }
                for (
                  o = Y.needsContext.test(e) ? 0 : l.length;
                  o-- && ((u = l[o]), !i.relative[(c = u.type)]);

                )
                  if (
                    (f = i.find[c]) &&
                    (r = f(
                      u.matches[0].replace(Z, ee),
                      (J.test(l[0].type) && ge(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(o, 1), !(e = r.length && ve(l))))
                      return I.apply(n, r), n;
                    break;
                  }
              }
              return (
                (d || a(e, h))(
                  r,
                  t,
                  !g,
                  n,
                  !t || (J.test(e) && ge(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable =
              _
                .split("")
                .sort(D)
                .join("") === _),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = le(function(e) {
              return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            le(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ue("type|href|height|width", function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function(e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ue("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function(e) {
              return null == e.getAttribute("disabled");
            }) ||
              ue(P, function(e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
              }),
            oe
          );
        })(n);
      (T.find = A),
        (T.expr = A.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = A.uniqueSort),
        (T.text = A.getText),
        (T.isXMLDoc = A.isXML),
        (T.contains = A.contains),
        (T.escapeSelector = A.escape);
      var D = function(e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && T(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        S = function(e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        N = T.expr.match.needsContext;
      function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function I(e, t, n) {
        return y(t)
          ? T.grep(e, function(e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
            ? T.grep(e, function(e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
              ? T.grep(e, function(e) {
                  return f.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
      }
      (T.filter = function(e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? T.find.matchesSelector(i, e)
              ? [i]
              : []
            : T.find.matches(
                e,
                T.grep(t, function(e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function(e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function() {
                  for (t = 0; t < i; t++) if (T.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) T.find(e, r[t], n);
            return i > 1 ? T.uniqueSort(n) : n;
          },
          filter: function(e) {
            return this.pushStack(I(this, e || [], !1));
          },
          not: function(e) {
            return this.pushStack(I(this, e || [], !0));
          },
          is: function(e) {
            return !!I(
              this,
              "string" == typeof e && N.test(e) ? T(e) : e || [],
              !1
            ).length;
          }
        });
      var j,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || j), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : L.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : s,
                  !0
                )
              ),
              O.test(i[1]) && T.isPlainObject(t))
            )
              for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = s.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(T)
            : T.makeArray(e, this);
      }).prototype =
        T.fn),
        (j = T(s));
      var P = /^(?:parents|prev(?:Until|All))/,
        H = { children: !0, contents: !0, next: !0, prev: !0 };
      function M(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function(e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function() {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function(e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof e && T(e);
          if (!N.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
        },
        index: function(e) {
          return e
            ? "string" == typeof e
              ? f.call(T(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
        },
        add: function(e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function(e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }
      }),
        T.each(
          {
            parent: function(e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
              return D(e, "parentNode");
            },
            parentsUntil: function(e, t, n) {
              return D(e, "parentNode", n);
            },
            next: function(e) {
              return M(e, "nextSibling");
            },
            prev: function(e) {
              return M(e, "previousSibling");
            },
            nextAll: function(e) {
              return D(e, "nextSibling");
            },
            prevAll: function(e) {
              return D(e, "previousSibling");
            },
            nextUntil: function(e, t, n) {
              return D(e, "nextSibling", n);
            },
            prevUntil: function(e, t, n) {
              return D(e, "previousSibling", n);
            },
            siblings: function(e) {
              return S((e.parentNode || {}).firstChild, e);
            },
            children: function(e) {
              return S(e.firstChild);
            },
            contents: function(e) {
              return k(e, "iframe")
                ? e.contentDocument
                : (k(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            }
          },
          function(e, t) {
            T.fn[e] = function(n, i) {
              var r = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = T.filter(i, r)),
                this.length > 1 &&
                  (H[e] || T.uniqueSort(r), P.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var R = /[^\x20\t\r\n\f]+/g;
      function q(e) {
        return e;
      }
      function F(e) {
        throw e;
      }
      function W(e, t, n, i) {
        var r;
        try {
          e && y((r = e.promise))
            ? r
                .call(e)
                .done(t)
                .fail(n)
            : e && y((r = e.then))
              ? r.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function(e) {
        e =
          "string" == typeof e
            ? (function(e) {
                var t = {};
                return (
                  T.each(e.match(R) || [], function(e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function() {
            for (r = r || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          u = {
            add: function() {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    T.each(n, function(n, i) {
                      y(i)
                        ? (e.unique && u.has(i)) || o.push(i)
                        : i && i.length && "string" !== E(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function() {
              return (
                T.each(arguments, function(e, t) {
                  for (var n; (n = T.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function(e) {
              return e ? T.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
              return o && (o = []), this;
            },
            disable: function() {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function() {
              return !o;
            },
            lock: function() {
              return (r = s = []), n || t || (o = n = ""), this;
            },
            locked: function() {
              return !!r;
            },
            fireWith: function(e, n) {
              return (
                r ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function() {
              return u.fireWith(this, arguments), this;
            },
            fired: function() {
              return !!i;
            }
          };
        return u;
      }),
        T.extend({
          Deferred: function(e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved"
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected"
                ]
              ],
              i = "pending",
              r = {
                state: function() {
                  return i;
                },
                always: function() {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                  return r.then(null, e);
                },
                pipe: function() {
                  var e = arguments;
                  return T.Deferred(function(n) {
                    T.each(t, function(t, i) {
                      var r = y(e[i[4]]) && e[i[4]];
                      o[i[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function(e, i, r) {
                  var o = 0;
                  function s(e, t, i, r) {
                    return function() {
                      var a = this,
                        l = arguments,
                        u = function() {
                          var n, u;
                          if (!(e < o)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              y(u)
                                ? r
                                  ? u.call(n, s(o, t, q, r), s(o, t, F, r))
                                  : (o++,
                                    u.call(
                                      n,
                                      s(o, t, q, r),
                                      s(o, t, F, r),
                                      s(o, t, q, t.notifyWith)
                                    ))
                                : (i !== q && ((a = void 0), (l = [n])),
                                  (r || t.resolveWith)(a, l));
                          }
                        },
                        c = r
                          ? u
                          : function() {
                              try {
                                u();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (i !== F && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? c()
                        : (T.Deferred.getStackHook &&
                            (c.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return T.Deferred(function(n) {
                    t[0][3].add(s(0, n, y(r) ? r : q, n.notifyWith)),
                      t[1][3].add(s(0, n, y(e) ? e : q)),
                      t[2][3].add(s(0, n, y(i) ? i : F));
                  }).promise();
                },
                promise: function(e) {
                  return null != e ? T.extend(e, r) : r;
                }
              },
              o = {};
            return (
              T.each(t, function(e, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function() {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function() {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function(e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = l.call(arguments),
              o = T.Deferred(),
              s = function(e) {
                return function(n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? l.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (W(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || y(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) W(r[n], s(n), o.reject);
            return o.promise();
          }
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function(e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function(e) {
          n.setTimeout(function() {
            throw e;
          });
        });
      var U = T.Deferred();
      function V() {
        s.removeEventListener("DOMContentLoaded", V),
          n.removeEventListener("load", V),
          T.ready();
      }
      (T.fn.ready = function(e) {
        return (
          U.then(e).catch(function(e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function(e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || U.resolveWith(s, [T]));
          }
        }),
        (T.ready.then = U.then),
        "complete" === s.readyState ||
        ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (s.addEventListener("DOMContentLoaded", V),
            n.addEventListener("load", V));
      var $ = function(e, t, n, i, r, o, s) {
          var a = 0,
            l = e.length,
            u = null == n;
          if ("object" === E(n))
            for (a in ((r = !0), n)) $(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            y(i) || (s = !0),
            u &&
              (s
                ? (t.call(e, i), (t = null))
                : ((u = t),
                  (t = function(e, t, n) {
                    return u.call(T(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        Q = /^-ms-/,
        Y = /-([a-z])/g;
      function K(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(Q, "ms-").replace(Y, K);
      }
      var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function X() {
        this.expando = T.expando + X.uid++;
      }
      (X.uid = 1),
        (X.prototype = {
          cache: function(e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                z(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                      }))),
              t
            );
          },
          set: function(e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[G(t)] = n;
            else for (i in t) r[G(i)] = t[i];
            return r;
          },
          get: function(e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function(e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function(e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in i
                    ? [t]
                    : t.match(R) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || T.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          }
        });
      var J = new X(),
        Z = new X(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function(e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                        ? +e
                        : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function(e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function(e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function(e, t) {
          Z.remove(e, t);
        },
        _data: function(e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function(e, t) {
          J.remove(e, t);
        }
      }),
        T.fn.extend({
          data: function(e, t) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = Z.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = G(i.slice(5))), ne(o, i, r[i]));
                J.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function() {
                  Z.set(this, e);
                })
              : $(
                  this,
                  function(t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e))
                        ? n
                        : void 0 !== (n = ne(o, e))
                          ? n
                          : void 0;
                    this.each(function() {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function(e) {
            return this.each(function() {
              Z.remove(this, e);
            });
          }
        }),
        T.extend({
          queue: function(e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = J.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(e, t, T.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function(e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = T._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  e,
                  function() {
                    T.dequeue(e, t);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: T.Callbacks("once memory").add(function() {
                  J.remove(e, [t + "queue", n]);
                })
              })
            );
          }
        }),
        T.fn.extend({
          queue: function(e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                  ? this
                  : this.each(function() {
                      var n = T.queue(this, e, t);
                      T._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          T.dequeue(this, e);
                    })
            );
          },
          dequeue: function(e) {
            return this.each(function() {
              T.dequeue(this, e);
            });
          },
          clearQueue: function(e) {
            return this.queue(e || "fx", []);
          },
          promise: function(e, t) {
            var n,
              i = 1,
              r = T.Deferred(),
              o = this,
              s = this.length,
              a = function() {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = J.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(t);
          }
        });
      var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = function(e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display &&
              T.contains(e.ownerDocument, e) &&
              "none" === T.css(e, "display"))
          );
        },
        ae = function(e, t, n, i) {
          var r,
            o,
            s = {};
          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.apply(e, i || [])), t)) e.style[o] = s[o];
          return r;
        };
      function le(e, t, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function() {
                return i.cur();
              }
            : function() {
                return T.css(e, t, "");
              },
          l = a(),
          u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          c = (T.cssNumber[t] || ("px" !== u && +l)) && re.exec(T.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            T.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= o);
          (c *= 2), T.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = u), (i.start = c), (i.end = r))),
          r
        );
      }
      var ue = {};
      function ce(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = ue[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (ue[i] = r),
          r)
        );
      }
      function fe(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
          (i = e[o]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((r[o] = J.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && se(i) && (r[o] = ce(i)))
              : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
      }
      T.fn.extend({
        show: function() {
          return fe(this, !0);
        },
        hide: function() {
          return fe(this);
        },
        toggle: function(e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function() {
                se(this) ? T(this).show() : T(this).hide();
              });
        }
      });
      var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
      function me(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
          void 0 === t || (t && k(e, t)) ? T.merge([e], n) : n
        );
      }
      function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ge.optgroup = ge.option),
        (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
        (ge.th = ge.td);
      var ye,
        be,
        _e = /<|&#?\w+;/;
      function we(e, t, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            f = t.createDocumentFragment(),
            d = [],
            h = 0,
            p = e.length;
          h < p;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ("object" === E(o)) T.merge(d, o.nodeType ? [o] : o);
            else if (_e.test(o)) {
              for (
                s = s || f.appendChild(t.createElement("div")),
                  a = (he.exec(o) || ["", ""])[1].toLowerCase(),
                  l = ge[a] || ge._default,
                  s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              T.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; (o = d[h++]); )
          if (i && T.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = T.contains(o.ownerDocument, o)),
            (s = me(f.appendChild(o), "script")),
            u && ve(s),
            n)
          )
            for (c = 0; (o = s[c++]); ) pe.test(o.type || "") && n.push(o);
        return f;
      }
      (ye = s.createDocumentFragment().appendChild(s.createElement("div"))),
        (be = s.createElement("input")).setAttribute("type", "radio"),
        be.setAttribute("checked", "checked"),
        be.setAttribute("name", "t"),
        ye.appendChild(be),
        (v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
      var Ee = s.documentElement,
        Te = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
      function Ae() {
        return !0;
      }
      function De() {
        return !1;
      }
      function Se() {
        try {
          return s.activeElement;
        } catch (e) {}
      }
      function Ne(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            Ne(e, a, n, i, t[a], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = De;
        else if (!r) return e;
        return (
          1 === o &&
            ((s = r),
            ((r = function(e) {
              return T().off(e), s.apply(this, arguments);
            }).guid =
              s.guid || (s.guid = T.guid++))),
          e.each(function() {
            T.event.add(this, t, r, i, n);
          })
        );
      }
      (T.event = {
        global: {},
        add: function(e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            g,
            m = J.get(e);
          if (m)
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && T.find.matchesSelector(Ee, r),
                n.guid || (n.guid = T.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) ||
                  (s = m.handle = function(t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                u = (t = (t || "").match(R) || [""]).length;
              u--;

            )
              (h = g = (a = Ce.exec(t[u]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                h &&
                  ((f = T.event.special[h] || {}),
                  (h = (r ? f.delegateType : f.bindType) || h),
                  (f = T.event.special[h] || {}),
                  (c = T.extend(
                    {
                      type: h,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && T.expr.match.needsContext.test(r),
                      namespace: p.join(".")
                    },
                    o
                  )),
                  (d = l[h]) ||
                    (((d = l[h] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, i, p, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (T.event.global[h] = !0));
        },
        remove: function(e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            g,
            m = J.hasData(e) && J.get(e);
          if (m && (l = m.events)) {
            for (u = (t = (t || "").match(R) || [""]).length; u--; )
              if (
                ((h = g = (a = Ce.exec(t[u]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  f = T.event.special[h] || {},
                    d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (c = d[o]),
                    (!r && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                      (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, p, m.handle)) ||
                    T.removeEvent(e, h, m.handle),
                  delete l[h]);
              } else for (h in l) T.event.remove(e, h + t[u], n, i, !0);
            T.isEmptyObject(l) && J.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a = T.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, "events") || {})[a.type] || [],
            c = T.event.special[a.type] || {};
          for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
          if (
            ((a.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, a))
          ) {
            for (
              s = T.event.handlers.call(this, a, u), t = 0;
              (r = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (i = (
                      (T.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function(e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = t[n]).selector + " ")] &&
                    (s[r] = i.needsContext
                      ? T(r, this).index(u) > -1
                      : T.find(r, this, null, [u]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function(e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function() {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function() {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function(t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
              });
            }
          });
        },
        fix: function(e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function() {
              if (this !== Se() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin"
          },
          blur: {
            trigger: function() {
              if (this === Se() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout"
          },
          click: {
            trigger: function() {
              if ("checkbox" === this.type && this.click && k(this, "input"))
                return this.click(), !1;
            },
            _default: function(e) {
              return k(e.target, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }),
        (T.removeEvent = function(e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function(e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ae
                  : De),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: De,
          isPropagationStopped: De,
          isImmediatePropagationStopped: De,
          isSimulated: !1,
          preventDefault: function() {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ae),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ae),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ae),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          }
        }),
        T.each(
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
            which: function(e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && xe.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                      ? 3
                      : 4 & t
                        ? 2
                        : 0
                  : e.which;
            }
          },
          T.event.addProp
        ),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
          },
          function(e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function(e) {
                var n,
                  i = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (i && (i === this || T.contains(this, i))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              }
            };
          }
        ),
        T.fn.extend({
          on: function(e, t, n, i) {
            return Ne(this, e, t, n, i);
          },
          one: function(e, t, n, i) {
            return Ne(this, e, t, n, i, 1);
          },
          off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                T(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = De),
              this.each(function() {
                T.event.remove(this, e, n, t);
              })
            );
          }
        });
      var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Le(e, t) {
        return (
          (k(e, "table") &&
            k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function He(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Me(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
          if (
            J.hasData(e) &&
            ((o = J.access(e)), (s = J.set(t, o)), (u = o.events))
          )
            for (r in (delete s.handle, (s.events = {}), u))
              for (n = 0, i = u[r].length; n < i; n++)
                T.event.add(t, r, u[r][n]);
          Z.hasData(e) &&
            ((a = Z.access(e)), (l = T.extend({}, a)), Z.set(t, l));
        }
      }
      function Re(e, t, n, i) {
        t = u.apply([], t);
        var r,
          o,
          s,
          a,
          l,
          c,
          f = 0,
          d = e.length,
          h = d - 1,
          p = t[0],
          g = y(p);
        if (g || (d > 1 && "string" == typeof p && !v.checkClone && Ie.test(p)))
          return e.each(function(r) {
            var o = e.eq(r);
            g && (t[0] = p.call(this, r, o.html())), Re(o, t, n, i);
          });
        if (
          d &&
          ((o = (r = we(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = T.map(me(r, "script"), Pe)).length; f < d; f++)
            (l = r),
              f !== h &&
                ((l = T.clone(l, !0, !0)), a && T.merge(s, me(l, "script"))),
              n.call(e[f], l, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, T.map(s, He), f = 0;
              f < a;
              f++
            )
              (l = s[f]),
                pe.test(l.type || "") &&
                  !J.access(l, "globalEval") &&
                  T.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? T._evalUrl && T._evalUrl(l.src)
                    : w(l.textContent.replace(je, ""), c, l));
        }
        return e;
      }
      function qe(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || T.cleanData(me(i)),
            i.parentNode &&
              (n && T.contains(i.ownerDocument, i) && ve(me(i, "script")),
              i.parentNode.removeChild(i));
        return e;
      }
      T.extend({
        htmlPrefilter: function(e) {
          return e.replace(ke, "<$1></$2>");
        },
        clone: function(e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            u,
            c = e.cloneNode(!0),
            f = T.contains(e.ownerDocument, e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (s = me(c), i = 0, r = (o = me(e)).length; i < r; i++)
              (a = o[i]),
                "input" === (u = (l = s[i]).nodeName.toLowerCase()) &&
                de.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== u && "textarea" !== u) ||
                    (l.defaultValue = a.defaultValue);
          if (t)
            if (n)
              for (
                o = o || me(e), s = s || me(c), i = 0, r = o.length;
                i < r;
                i++
              )
                Me(o[i], s[i]);
            else Me(e, c);
          return (
            (s = me(c, "script")).length > 0 && ve(s, !f && me(e, "script")), c
          );
        },
        cleanData: function(e) {
          for (
            var t, n, i, r = T.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (z(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? T.event.remove(n, i) : T.removeEvent(n, i, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        }
      }),
        T.fn.extend({
          detach: function(e) {
            return qe(this, e, !0);
          },
          remove: function(e) {
            return qe(this, e);
          },
          text: function(e) {
            return $(
              this,
              function(e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function() {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function() {
            return Re(this, arguments, function(e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Le(this, e).appendChild(e);
            });
          },
          prepend: function() {
            return Re(this, arguments, function(e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Le(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function() {
            return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function() {
            return Re(this, arguments, function(e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(me(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function(e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function() {
                return T.clone(this, e, t);
              })
            );
          },
          html: function(e) {
            return $(
              this,
              function(e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Oe.test(e) &&
                  !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(me(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function() {
            var e = [];
            return Re(
              this,
              arguments,
              function(t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(me(this)), n && n.replaceChild(t, this));
              },
              e
            );
          }
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
          },
          function(e, t) {
            T.fn[e] = function(e) {
              for (
                var n, i = [], r = T(e), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  T(r[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
        We = function(e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Be = new RegExp(oe.join("|"), "i");
      function Ue(e, t, n) {
        var i,
          r,
          o,
          s,
          a = e.style;
        return (
          (n = n || We(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              T.contains(e.ownerDocument, e) ||
              (s = T.style(e, t)),
            !v.pixelBoxStyles() &&
              Fe.test(s) &&
              Be.test(t) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ve(e, t) {
        return {
          get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      !(function() {
        function e() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              Ee.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 36 === c.offsetWidth || "absolute"),
              Ee.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          o,
          a,
          l,
          u = s.createElement("div"),
          c = s.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
          T.extend(v, {
            boxSizingReliable: function() {
              return e(), r;
            },
            pixelBoxStyles: function() {
              return e(), a;
            },
            pixelPosition: function() {
              return e(), i;
            },
            reliableMarginLeft: function() {
              return e(), l;
            },
            scrollboxSize: function() {
              return e(), o;
            }
          }));
      })();
      var $e = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        ze = s.createElement("div").style;
      function Xe(e) {
        var t = T.cssProps[e];
        return (
          t ||
            (t = T.cssProps[e] =
              (function(e) {
                if (e in ze) return e;
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                  n--;

                )
                  if ((e = Ge[n] + t) in ze) return e;
              })(e) || e),
          t
        );
      }
      function Je(e, t, n) {
        var i = re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function Ze(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += T.css(e, n + oe[s], !0, r)),
            i
              ? ("content" === n && (l -= T.css(e, "padding" + oe[s], !0, r)),
                "margin" !== n &&
                  (l -= T.css(e, "border" + oe[s] + "Width", !0, r)))
              : ((l += T.css(e, "padding" + oe[s], !0, r)),
                "padding" !== n
                  ? (l += T.css(e, "border" + oe[s] + "Width", !0, r))
                  : (a += T.css(e, "border" + oe[s] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l += Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5
              )
            )),
          l
        );
      }
      function et(e, t, n) {
        var i = We(e),
          r = Ue(e, t, i),
          o = "border-box" === T.css(e, "boxSizing", !1, i),
          s = o;
        if (Fe.test(r)) {
          if (!n) return r;
          r = "auto";
        }
        return (
          (s = s && (v.boxSizingReliable() || r === e.style[t])),
          ("auto" === r ||
            (!parseFloat(r) && "inline" === T.css(e, "display", !1, i))) &&
            ((r = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
          (r = parseFloat(r) || 0) +
            Ze(e, t, n || (o ? "border" : "content"), s, i, r) +
            "px"
        );
      }
      function tt(e, t, n, i, r) {
        return new tt.prototype.init(e, t, n, i, r);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              s,
              a = G(t),
              l = Qe.test(t),
              u = e.style;
            if (
              (l || (t = Xe(a)),
              (s = T.cssHooks[t] || T.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : u[t];
            "string" == (o = typeof n) &&
              (r = re.exec(n)) &&
              r[1] &&
              ((n = le(e, t, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" === o &&
                  (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function(e, t, n, i) {
          var r,
            o,
            s,
            a = G(t);
          return (
            Qe.test(t) || (t = Xe(a)),
            (s = T.cssHooks[t] || T.cssHooks[a]) &&
              "get" in s &&
              (r = s.get(e, !0, n)),
            void 0 === r && (r = Ue(e, t, i)),
            "normal" === r && t in Ke && (r = Ke[t]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        }
      }),
        T.each(["height", "width"], function(e, t) {
          T.cssHooks[t] = {
            get: function(e, n, i) {
              if (n)
                return !$e.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? et(e, t, i)
                  : ae(e, Ye, function() {
                      return et(e, t, i);
                    });
            },
            set: function(e, n, i) {
              var r,
                o = We(e),
                s = "border-box" === T.css(e, "boxSizing", !1, o),
                a = i && Ze(e, t, i, s, o);
              return (
                s &&
                  v.scrollboxSize() === o.position &&
                  (a -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      Ze(e, t, "border", !1, o) -
                      0.5
                  )),
                a &&
                  (r = re.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                Je(0, n, a)
              );
            }
          };
        }),
        (T.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function(e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ae(e, { marginLeft: 0 }, function() {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
          (T.cssHooks[e + t] = {
            expand: function(n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            }
          }),
            "margin" !== e && (T.cssHooks[e + t].set = Je);
        }),
        T.fn.extend({
          css: function(e, t) {
            return $(
              this,
              function(e, t, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = We(e), r = t.length; s < r; s++)
                    o[t[s]] = T.css(e, t[s], !1, i);
                  return o;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          }
        }),
        (T.Tween = tt),
        (tt.prototype = {
          constructor: tt,
          init: function(e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
          },
          run: function(e) {
            var t,
              n = tt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : tt.propHooks._default.set(this),
              this
            );
          }
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
          _default: {
            get: function(e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
            },
            set: function(e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[T.cssProps[e.prop]] &&
                    !T.cssHooks[e.prop])
                  ? (e.elem[e.prop] = e.now)
                  : T.style(e.elem, e.prop, e.now + e.unit);
            }
          }
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
          set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          }
        }),
        (T.easing = {
          linear: function(e) {
            return e;
          },
          swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing"
        }),
        (T.fx = tt.prototype.init),
        (T.fx.step = {});
      var nt,
        it,
        rt = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
      function st() {
        it &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(st)
            : n.setTimeout(st, T.fx.interval),
          T.fx.tick());
      }
      function at() {
        return (
          n.setTimeout(function() {
            nt = void 0;
          }),
          (nt = Date.now())
        );
      }
      function lt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r["margin" + (n = oe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function ut(e, t, n) {
        for (
          var i,
            r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function ct(e, t, n) {
        var i,
          r,
          o = 0,
          s = ct.prefilters.length,
          a = T.Deferred().always(function() {
            delete l.elem;
          }),
          l = function() {
            if (r) return !1;
            for (
              var t = nt || at(),
                n = Math.max(0, u.startTime + u.duration - t),
                i = 1 - (n / u.duration || 0),
                o = 0,
                s = u.tweens.length;
              o < s;
              o++
            )
              u.tweens[o].run(i);
            return (
              a.notifyWith(e, [u, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            );
          },
          u = a.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
              var i = T.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(i), i;
            },
            stop: function(t) {
              var n = 0,
                i = t ? u.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) u.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                  : a.rejectWith(e, [u, t]),
                this
              );
            }
          }),
          c = u.props;
        for (
          (function(e, t) {
            var n, i, r, o, s;
            for (n in e)
              if (
                ((r = t[(i = G(n))]),
                (o = e[n]),
                Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                n !== i && ((e[i] = o), delete e[n]),
                (s = T.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[i], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = r));
              else t[i] = r;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = ct.prefilters[o].call(u, e, c, u.opts)))
            return (
              y(i.stop) &&
                (T._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          T.map(c, ut, u),
          y(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          T.fx.timer(T.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (T.Animation = T.extend(ct, {
        tweeners: {
          "*": [
            function(e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            }
          ]
        },
        tweener: function(e, t) {
          y(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (ct.tweeners[n] = ct.tweeners[n] || []),
              ct.tweeners[n].unshift(t);
        },
        prefilters: [
          function(e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u,
              c,
              f = "width" in t || "height" in t,
              d = this,
              h = {},
              p = e.style,
              g = e.nodeType && se(e),
              m = J.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = T._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function() {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function() {
                d.always(function() {
                  s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), rt.test(r))) {
                if (
                  (delete t[i],
                  (o = o || "toggle" === r),
                  r === (g ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                h[i] = (m && m[i]) || T.style(e, i);
              }
            if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(h))
              for (i in (f &&
                1 === e.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (u = m && m.display) && (u = J.get(e, "display")),
                "none" === (c = T.css(e, "display")) &&
                  (u
                    ? (c = u)
                    : (fe([e], !0),
                      (u = e.style.display || u),
                      (c = T.css(e, "display")),
                      fe([e]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === T.css(e, "float") &&
                  (l ||
                    (d.done(function() {
                      p.display = u;
                    }),
                    null == u &&
                      ((c = p.display), (u = "none" === c ? "" : c))),
                  (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                d.always(function() {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = J.access(e, "fxshow", { display: u })),
                  o && (m.hidden = !g),
                  g && fe([e], !0),
                  d.done(function() {
                    for (i in (g || fe([e]), J.remove(e, "fxshow"), h))
                      T.style(e, i, h[i]);
                  })),
                  (l = ut(g ? m[i] : 0, i, d)),
                  i in m ||
                    ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        ],
        prefilter: function(e, t) {
          t ? ct.prefilters.unshift(e) : ct.prefilters.push(e);
        }
      })),
        (T.speed = function(e, t, n) {
          var i =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t)
                };
          return (
            T.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in T.fx.speeds
                  ? (i.duration = T.fx.speeds[i.duration])
                  : (i.duration = T.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function() {
              y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
            }),
            i
          );
        }),
        T.fn.extend({
          fadeTo: function(e, t, n, i) {
            return this.filter(se)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function(e, t, n, i) {
            var r = T.isEmptyObject(e),
              o = T.speed(t, n, i),
              s = function() {
                var t = ct(this, T.extend({}, e), o);
                (r || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function(e, t, n) {
            var i = function(e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function() {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = T.timers,
                  s = J.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ot.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function(e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function() {
                var t,
                  n = J.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = T.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          }
        }),
        T.each(["toggle", "show", "hide"], function(e, t) {
          var n = T.fn[t];
          T.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(lt(t, !0), e, i, r);
          };
        }),
        T.each(
          {
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" }
          },
          function(e, t) {
            T.fn[e] = function(e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function() {
          var e,
            t = 0,
            n = T.timers;
          for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (nt = void 0);
        }),
        (T.fx.timer = function(e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function() {
          it || ((it = !0), st());
        }),
        (T.fx.stop = function() {
          it = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function(e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function(t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function() {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function() {
          var e = s.createElement("input"),
            t = s
              .createElement("select")
              .appendChild(s.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = s.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ft,
        dt = T.expr.attrHandle;
      T.fn.extend({
        attr: function(e, t) {
          return $(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            T.removeAttr(this, e);
          });
        }
      }),
        T.extend({
          attr: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === o && T.isXMLDoc(e)) ||
                    (r =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? ft : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : null == (i = T.find.attr(e, t))
                        ? void 0
                        : i);
          },
          attrHooks: {
            type: {
              set: function(e, t) {
                if (!v.radioValue && "radio" === t && k(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              }
            }
          },
          removeAttr: function(e, t) {
            var n,
              i = 0,
              r = t && t.match(R);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          }
        }),
        (ft = {
          set: function(e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) {
          var n = dt[t] || T.find.attr;
          dt[t] = function(e, t, i) {
            var r,
              o,
              s = t.toLowerCase();
            return (
              i ||
                ((o = dt[s]),
                (dt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (dt[s] = o)),
              r
            );
          };
        });
      var ht = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;
      function gt(e) {
        return (e.match(R) || []).join(" ");
      }
      function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function vt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(R)) || [];
      }
      T.fn.extend({
        prop: function(e, t) {
          return $(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[T.propFix[e] || e];
          });
        }
      }),
        T.extend({
          prop: function(e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function(e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ht.test(e.nodeName) || (pt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
              }
            }
          },
          propFix: { for: "htmlFor", class: "className" }
        }),
        v.optSelected ||
          (T.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function(e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            }
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable"
          ],
          function() {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).addClass(e.call(this, t, mt(this)));
              });
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = mt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  r !== (a = gt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function(e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (y(e))
              return this.each(function(t) {
                T(this).removeClass(e.call(this, t, mt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = vt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((r = mt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  r !== (a = gt(i)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function(e, t) {
            var n = typeof e,
              i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
                ? this.each(function(n) {
                    T(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function() {
                    var t, r, o, s;
                    if (i)
                      for (r = 0, o = T(this), s = vt(e); (t = s[r++]); )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = mt(this)) && J.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : J.get(this, "__className__") || ""
                          ));
                  });
          },
          hasClass: function(e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + gt(mt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          }
        });
      var yt = /\r/g;
      T.fn.extend({
        val: function(e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = y(e)),
              this.each(function(n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? e.call(this, n, T(this).val()) : e)
                    ? (r = "")
                    : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = T.map(r, function(e) {
                          return null == e ? "" : e + "";
                        })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
              ? (t =
                  T.valHooks[r.type] || T.valHooks[r.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(r, "value"))
                ? n
                : "string" == typeof (n = r.value)
                  ? n.replace(yt, "")
                  : null == n
                    ? ""
                    : n
              : void 0;
        }
      }),
        T.extend({
          valHooks: {
            option: {
              get: function(e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : gt(T.text(e));
              }
            },
            select: {
              get: function(e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function(e, t) {
                for (
                  var n, i, r = e.options, o = T.makeArray(t), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    T.inArray(T.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }),
        T.each(["radio", "checkbox"], function() {
          (T.valHooks[this] = {
            set: function(e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            }
          }),
            v.checkOn ||
              (T.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var bt = /^(?:focusinfocus|focusoutblur)$/,
        _t = function(e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function(e, t, i, r) {
          var o,
            a,
            l,
            u,
            c,
            f,
            d,
            h,
            g = [i || s],
            m = p.call(e, "type") ? e.type : e,
            v = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = h = l = i = i || s),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !bt.test(m + T.event.triggered) &&
              (m.indexOf(".") > -1 &&
                ((m = (v = m.split(".")).shift()), v.sort()),
              (c = m.indexOf(":") < 0 && "on" + m),
              ((e = e[T.expando]
                ? e
                : new T.Event(m, "object" == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (d = T.event.special[m] || {}),
              r || !d.trigger || !1 !== d.trigger.apply(i, t)))
          ) {
            if (!r && !d.noBubble && !b(i)) {
              for (
                u = d.delegateType || m, bt.test(u + m) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                g.push(a), (l = a);
              l === (i.ownerDocument || s) &&
                g.push(l.defaultView || l.parentWindow || n);
            }
            for (o = 0; (a = g[o++]) && !e.isPropagationStopped(); )
              (h = a),
                (e.type = o > 1 ? u : d.bindType || m),
                (f =
                  (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) &&
                  f.apply(a, t),
                (f = c && a[c]) &&
                  f.apply &&
                  z(a) &&
                  ((e.result = f.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = m),
              r ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(g.pop(), t)) ||
                !z(i) ||
                (c &&
                  y(i[m]) &&
                  !b(i) &&
                  ((l = i[c]) && (i[c] = null),
                  (T.event.triggered = m),
                  e.isPropagationStopped() && h.addEventListener(m, _t),
                  i[m](),
                  e.isPropagationStopped() && h.removeEventListener(m, _t),
                  (T.event.triggered = void 0),
                  l && (i[c] = l))),
              e.result
            );
          }
        },
        simulate: function(e, t, n) {
          var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(i, null, t);
        }
      }),
        T.fn.extend({
          trigger: function(e, t) {
            return this.each(function() {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          }
        }),
        v.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
            var n = function(e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, t);
                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1);
              },
              teardown: function() {
                var i = this.ownerDocument || this,
                  r = J.access(i, t) - 1;
                r
                  ? J.access(i, t, r)
                  : (i.removeEventListener(e, n, !0), J.remove(i, t));
              }
            };
          });
      var wt = n.location,
        Et = Date.now(),
        Tt = /\?/;
      T.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var xt = /\[\]$/,
        Ct = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
      function St(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          T.each(t, function(t, r) {
            n || xt.test(e)
              ? i(e, r)
              : St(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== E(t)) i(e, t);
        else for (r in t) St(e + "[" + r + "]", t[r], n, i);
      }
      (T.param = function(e, t) {
        var n,
          i = [],
          r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function() {
            r(this.name, this.value);
          });
        else for (n in e) St(n, e[n], t, r);
        return i.join("&");
      }),
        T.fn.extend({
          serialize: function() {
            return T.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function() {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Dt.test(this.nodeName) &&
                  !At.test(e) &&
                  (this.checked || !de.test(e))
                );
              })
              .map(function(e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                    ? T.map(n, function(e) {
                        return { name: t.name, value: e.replace(Ct, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Ct, "\r\n") };
              })
              .get();
          }
        });
      var Nt = /%20/g,
        kt = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Pt = {},
        Ht = {},
        Mt = "*/".concat("*"),
        Rt = s.createElement("a");
      function qt(e) {
        return function(t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(R) || [];
          if (y(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Ft(e, t, n, i) {
        var r = {},
          o = e === Ht;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            T.each(e[a] || [], function(e, a) {
              var u = a(t, n, i);
              return "string" != typeof u || o || r[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!r["*"] && s("*"));
      }
      function Wt(e, t) {
        var n,
          i,
          r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
      }
      (Rt.href = wt.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              wt.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Mt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML
            },
            flatOptions: { url: !0, context: !0 }
          },
          ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
          },
          ajaxPrefilter: qt(Pt),
          ajaxTransport: qt(Ht),
          ajax: function(e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              o,
              a,
              l,
              u,
              c,
              f,
              d,
              h,
              p = T.ajaxSetup({}, t),
              g = p.context || p,
              m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
              v = T.Deferred(),
              y = T.Callbacks("once memory"),
              b = p.statusCode || {},
              _ = {},
              w = {},
              E = "canceled",
              x = {
                readyState: 0,
                getResponseHeader: function(e) {
                  var t;
                  if (c) {
                    if (!a)
                      for (a = {}; (t = It.exec(o)); )
                        a[t[1].toLowerCase()] = t[2];
                    t = a[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                  return c ? o : null;
                },
                setRequestHeader: function(e, t) {
                  return (
                    null == c &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (_[e] = t)),
                    this
                  );
                },
                overrideMimeType: function(e) {
                  return null == c && (p.mimeType = e), this;
                },
                statusCode: function(e) {
                  var t;
                  if (e)
                    if (c) x.always(e[x.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function(e) {
                  var t = e || E;
                  return i && i.abort(t), C(0, t), this;
                }
              };
            if (
              (v.promise(x),
              (p.url = ((e || p.url || wt.href) + "").replace(
                Lt,
                wt.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(R) || [
                ""
              ]),
              null == p.crossDomain)
            ) {
              u = s.createElement("a");
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = T.param(p.data, p.traditional)),
              Ft(Pt, p, t, x),
              c)
            )
              return x;
            for (d in ((f = T.event && p.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !jt.test(p.type)),
            (r = p.url.replace(kt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Nt, "+"))
              : ((h = p.url.slice(r.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((r += (Tt.test(r) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((r = r.replace(Ot, "$1")),
                  (h = (Tt.test(r) ? "&" : "?") + "_=" + Et++ + h)),
                (p.url = r + h)),
            p.ifModified &&
              (T.lastModified[r] &&
                x.setRequestHeader("If-Modified-Since", T.lastModified[r]),
              T.etag[r] && x.setRequestHeader("If-None-Match", T.etag[r])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              x.setRequestHeader("Content-Type", p.contentType),
            x.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || c))
              return x.abort();
            if (
              ((E = "abort"),
              y.add(p.complete),
              x.done(p.success),
              x.fail(p.error),
              (i = Ft(Ht, p, t, x)))
            ) {
              if (((x.readyState = 1), f && m.trigger("ajaxSend", [x, p]), c))
                return x;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function() {
                  x.abort("timeout");
                }, p.timeout));
              try {
                (c = !1), i.send(_, C);
              } catch (e) {
                if (c) throw e;
                C(-1, e);
              }
            } else C(-1, "No Transport");
            function C(e, t, s, a) {
              var u,
                d,
                h,
                _,
                w,
                E = t;
              c ||
                ((c = !0),
                l && n.clearTimeout(l),
                (i = void 0),
                (o = a || ""),
                (x.readyState = e > 0 ? 4 : 0),
                (u = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (_ = (function(e, t, n) {
                    for (
                      var i, r, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(p, x, s)),
                (_ = (function(e, t, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                          for (r in u)
                            if (
                              (a = r.split(" "))[1] === o &&
                              (s = u[l + " " + a[0]] || u["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = u[r])
                                : !0 !== u[r] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, _, x, u)),
                u
                  ? (p.ifModified &&
                      ((w = x.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[r] = w),
                      (w = x.getResponseHeader("etag")) && (T.etag[r] = w)),
                    204 === e || "HEAD" === p.type
                      ? (E = "nocontent")
                      : 304 === e
                        ? (E = "notmodified")
                        : ((E = _.state), (d = _.data), (u = !(h = _.error))))
                  : ((h = E), (!e && E) || ((E = "error"), e < 0 && (e = 0))),
                (x.status = e),
                (x.statusText = (t || E) + ""),
                u ? v.resolveWith(g, [d, E, x]) : v.rejectWith(g, [x, E, h]),
                x.statusCode(b),
                (b = void 0),
                f &&
                  m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? d : h]),
                y.fireWith(g, [x, E]),
                f &&
                  (m.trigger("ajaxComplete", [x, p]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return x;
          },
          getJSON: function(e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function(e, t) {
            return T.get(e, void 0, t, "script");
          }
        }),
        T.each(["get", "post"], function(e, t) {
          T[t] = function(e, n, i, r) {
            return (
              y(n) && ((r = r || i), (i = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (T._evalUrl = function(e) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
          });
        }),
        T.fn.extend({
          wrapAll: function(e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument)
                  .eq(0)
                  .clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function() {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function(e) {
            return y(e)
              ? this.each(function(t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function() {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function(e) {
            var t = y(e);
            return this.each(function(n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function(e) {
            return (
              this.parent(e)
                .not("body")
                .each(function() {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          }
        }),
        (T.expr.pseudos.hidden = function(e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function(e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function() {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Bt = { 0: 200, 1223: 204 },
        Ut = T.ajaxSettings.xhr();
      (v.cors = !!Ut && "withCredentials" in Ut),
        (v.ajax = Ut = !!Ut),
        T.ajaxTransport(function(e) {
          var t, i;
          if (v.cors || (Ut && !e.crossDomain))
            return {
              send: function(r, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(s, r[s]);
                (t = function(e) {
                  return function() {
                    t &&
                      ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                          ? "number" != typeof a.status
                            ? o(0, "error")
                            : o(a.status, a.statusText)
                          : o(
                              Bt[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function() {
                        4 === a.readyState &&
                          n.setTimeout(function() {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function() {
                t && t();
              }
            };
        }),
        T.ajaxPrefilter(function(e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function(e) {
              return T.globalEval(e), e;
            }
          }
        }),
        T.ajaxPrefilter("script", function(e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function(e) {
          var t, n;
          if (e.crossDomain)
            return {
              send: function(i, r) {
                (t = T("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function(e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function() {
                n && n();
              }
            };
        });
      var Vt,
        $t = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = $t.pop() || T.expando + "_" + Et++;
          return (this[e] = !0), e;
        }
      }),
        T.ajaxPrefilter("json jsonp", function(e, t, i) {
          var r,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (Qt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Qt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback = y(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Qt, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function() {
                return s || T.error(r + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function() {
                s = arguments;
              }),
              i.always(function() {
                void 0 === o ? T(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), $t.push(r)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument = (((Vt = s.implementation.createHTMLDocument("")
          .body).innerHTML =
          "<form></form><form></form>"),
        2 === Vt.childNodes.length)),
        (T.parseHTML = function(e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((i = (t = s.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href =
                      s.location.href),
                    t.head.appendChild(i))
                  : (t = s)),
              (r = O.exec(e)),
              (o = !n && []),
              r
                ? [t.createElement(r[1])]
                : ((r = we([e], t, o)),
                  o && o.length && T(o).remove(),
                  T.merge([], r.childNodes)));
          var i, r, o;
        }),
        (T.fn.load = function(e, t, n) {
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = gt(e.slice(a))), (e = e.slice(0, a))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              T.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function(e) {
                  (o = arguments),
                    s.html(
                      i
                        ? T("<div>")
                            .append(T.parseHTML(e))
                            .find(i)
                        : e
                    );
                })
                .always(
                  n &&
                    function(e, t) {
                      s.each(function() {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend"
          ],
          function(e, t) {
            T.fn[t] = function(e) {
              return this.on(t, e);
            };
          }
        ),
        (T.expr.pseudos.animated = function(e) {
          return T.grep(T.timers, function(t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function(e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              u = T.css(e, "position"),
              c = T(e),
              f = {};
            "static" === u && (e.style.position = "relative"),
              (a = c.offset()),
              (o = T.css(e, "top")),
              (l = T.css(e, "left")),
              ("absolute" === u || "fixed" === u) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (i = c.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              y(t) && (t = t.call(e, n, T.extend({}, a))),
              null != t.top && (f.top = t.top - a.top + s),
              null != t.left && (f.left = t.left - a.left + r),
              "using" in t ? t.using.call(e, f) : c.css(f);
          }
        }),
        T.fn.extend({
          offset: function(e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function(t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function() {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === T.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (r.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - T.css(i, "marginTop", !0),
                left: t.left - r.left - T.css(i, "marginLeft", !0)
              };
            }
          },
          offsetParent: function() {
            return this.map(function() {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || Ee;
            });
          }
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function(e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function(i) {
              return $(
                this,
                function(e, i, r) {
                  var o;
                  if (
                    (b(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function(e, t) {
          T.cssHooks[t] = Ve(v.pixelPosition, function(e, n) {
            if (n)
              return (n = Ue(e, t)), Fe.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function(e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function(n, i) {
              T.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return $(
                  this,
                  function(t, n, r) {
                    var o;
                    return b(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            o["scroll" + e],
                            t.body["offset" + e],
                            o["offset" + e],
                            o["client" + e]
                          ))
                        : void 0 === r
                          ? T.css(t, n, a)
                          : T.style(t, n, r, a);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function(e, t) {
            T.fn[t] = function(e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        T.fn.extend({
          hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          }
        }),
        T.fn.extend({
          bind: function(e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function(e, t) {
            return this.off(e, null, t);
          },
          delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function(e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          }
        }),
        (T.proxy = function(e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (i = l.call(arguments, 2)),
              ((r = function() {
                return e.apply(t || this, i.concat(l.call(arguments)));
              }).guid = e.guid = e.guid || T.guid++),
              r
            );
        }),
        (T.holdReady = function(e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = k),
        (T.isFunction = y),
        (T.isWindow = b),
        (T.camelCase = G),
        (T.type = E),
        (T.now = Date.now),
        (T.isNumeric = function(e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (i = function() {
            return T;
          }.apply(t, [])) || (e.exports = i);
      var Yt = n.jQuery,
        Kt = n.$;
      return (
        (T.noConflict = function(e) {
          return (
            n.$ === T && (n.$ = Kt), e && n.jQuery === T && (n.jQuery = Yt), T
          );
        }),
        r || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function(e, t, n) {
    /*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
    !(function(e, t, n) {
      "use strict";
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            i.forEach(function(t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      (t = t && t.hasOwnProperty("default") ? t.default : t),
        (n = n && n.hasOwnProperty("default") ? n.default : n);
      var a = (function(e) {
          var t = "transitionend";
          var n = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
              do {
                e += ~~(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function(t) {
              var n = t.getAttribute("data-target");
              (n && "#" !== n) || (n = t.getAttribute("href") || "");
              try {
                return e(document).find(n).length > 0 ? n : null;
              } catch (e) {
                return null;
              }
            },
            getTransitionDurationFromElement: function(t) {
              if (!t) return 0;
              var n = e(t).css("transition-duration");
              return parseFloat(n)
                ? ((n = n.split(",")[0]), 1e3 * parseFloat(n))
                : 0;
            },
            reflow: function(e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function(n) {
              e(n).trigger(t);
            },
            supportsTransitionEnd: function() {
              return Boolean(t);
            },
            isElement: function(e) {
              return (e[0] || e).nodeType;
            },
            typeCheckConfig: function(e, t, i) {
              for (var r in i)
                if (Object.prototype.hasOwnProperty.call(i, r)) {
                  var o = i[r],
                    s = t[r],
                    a =
                      s && n.isElement(s)
                        ? "element"
                        : ((l = s),
                          {}.toString
                            .call(l)
                            .match(/\s([a-z]+)/i)[1]
                            .toLowerCase());
                  if (!new RegExp(o).test(a))
                    throw new Error(
                      e.toUpperCase() +
                        ': Option "' +
                        r +
                        '" provided type "' +
                        a +
                        '" but expected type "' +
                        o +
                        '".'
                    );
                }
              var l;
            }
          };
          return (
            (e.fn.emulateTransitionEnd = function(t) {
              var i = this,
                r = !1;
              return (
                e(this).one(n.TRANSITION_END, function() {
                  r = !0;
                }),
                setTimeout(function() {
                  r || n.triggerTransitionEnd(i);
                }, t),
                this
              );
            }),
            (e.event.special[n.TRANSITION_END] = {
              bindType: t,
              delegateType: t,
              handle: function(t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              }
            }),
            n
          );
        })(t),
        l = (function(e) {
          var t = e.fn.alert,
            n = "close.bs.alert",
            i = "closed.bs.alert",
            o = "click.bs.alert.data-api",
            s = "alert",
            l = "fade",
            u = "show",
            c = (function() {
              function t(e) {
                this._element = e;
              }
              var o = t.prototype;
              return (
                (o.close = function(e) {
                  var t = this._element;
                  e && (t = this._getRootElement(e)),
                    this._triggerCloseEvent(t).isDefaultPrevented() ||
                      this._removeElement(t);
                }),
                (o.dispose = function() {
                  e.removeData(this._element, "bs.alert"),
                    (this._element = null);
                }),
                (o._getRootElement = function(t) {
                  var n = a.getSelectorFromElement(t),
                    i = !1;
                  return (
                    n && (i = e(n)[0]), i || (i = e(t).closest("." + s)[0]), i
                  );
                }),
                (o._triggerCloseEvent = function(t) {
                  var i = e.Event(n);
                  return e(t).trigger(i), i;
                }),
                (o._removeElement = function(t) {
                  var n = this;
                  if ((e(t).removeClass(u), e(t).hasClass(l))) {
                    var i = a.getTransitionDurationFromElement(t);
                    e(t)
                      .one(a.TRANSITION_END, function(e) {
                        return n._destroyElement(t, e);
                      })
                      .emulateTransitionEnd(i);
                  } else this._destroyElement(t);
                }),
                (o._destroyElement = function(t) {
                  e(t)
                    .detach()
                    .trigger(i)
                    .remove();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = e(this),
                      r = i.data("bs.alert");
                    r || ((r = new t(this)), i.data("bs.alert", r)),
                      "close" === n && r[n](this);
                  });
                }),
                (t._handleDismiss = function(e) {
                  return function(t) {
                    t && t.preventDefault(), e.close(this);
                  };
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(
              o,
              '[data-dismiss="alert"]',
              c._handleDismiss(new c())
            ),
            (e.fn.alert = c._jQueryInterface),
            (e.fn.alert.Constructor = c),
            (e.fn.alert.noConflict = function() {
              return (e.fn.alert = t), c._jQueryInterface;
            }),
            c
          );
        })(t),
        u = (function(e) {
          var t = "button",
            n = e.fn[t],
            i = "active",
            o = "btn",
            s = "focus",
            a = '[data-toggle^="button"]',
            l = '[data-toggle="buttons"]',
            u = "input",
            c = ".active",
            f = ".btn",
            d = "click.bs.button.data-api",
            h = "focus.bs.button.data-api blur.bs.button.data-api",
            p = (function() {
              function t(e) {
                this._element = e;
              }
              var n = t.prototype;
              return (
                (n.toggle = function() {
                  var t = !0,
                    n = !0,
                    r = e(this._element).closest(l)[0];
                  if (r) {
                    var o = e(this._element).find(u)[0];
                    if (o) {
                      if ("radio" === o.type)
                        if (o.checked && e(this._element).hasClass(i)) t = !1;
                        else {
                          var s = e(r).find(c)[0];
                          s && e(s).removeClass(i);
                        }
                      if (t) {
                        if (
                          o.hasAttribute("disabled") ||
                          r.hasAttribute("disabled") ||
                          o.classList.contains("disabled") ||
                          r.classList.contains("disabled")
                        )
                          return;
                        (o.checked = !e(this._element).hasClass(i)),
                          e(o).trigger("change");
                      }
                      o.focus(), (n = !1);
                    }
                  }
                  n &&
                    this._element.setAttribute(
                      "aria-pressed",
                      !e(this._element).hasClass(i)
                    ),
                    t && e(this._element).toggleClass(i);
                }),
                (n.dispose = function() {
                  e.removeData(this._element, "bs.button"),
                    (this._element = null);
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = e(this).data("bs.button");
                    i || ((i = new t(this)), e(this).data("bs.button", i)),
                      "toggle" === n && i[n]();
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document)
              .on(d, a, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(o) || (n = e(n).closest(f)),
                  p._jQueryInterface.call(e(n), "toggle");
              })
              .on(h, a, function(t) {
                var n = e(t.target).closest(f)[0];
                e(n).toggleClass(s, /^focus(in)?$/.test(t.type));
              }),
            (e.fn[t] = p._jQueryInterface),
            (e.fn[t].Constructor = p),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = n), p._jQueryInterface;
            }),
            p
          );
        })(t),
        c = (function(e) {
          var t = "carousel",
            n = "bs.carousel",
            i = "." + n,
            o = e.fn[t],
            l = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0
            },
            u = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean"
            },
            c = "next",
            f = "prev",
            d = "left",
            h = "right",
            p = {
              SLIDE: "slide" + i,
              SLID: "slid" + i,
              KEYDOWN: "keydown" + i,
              MOUSEENTER: "mouseenter" + i,
              MOUSELEAVE: "mouseleave" + i,
              TOUCHEND: "touchend" + i,
              LOAD_DATA_API: "load.bs.carousel.data-api",
              CLICK_DATA_API: "click.bs.carousel.data-api"
            },
            g = "carousel",
            m = "active",
            v = "slide",
            y = "carousel-item-right",
            b = "carousel-item-left",
            _ = "carousel-item-next",
            w = "carousel-item-prev",
            E = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]'
            },
            T = (function() {
              function o(t, n) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(n)),
                  (this._element = e(t)[0]),
                  (this._indicatorsElement = e(this._element).find(
                    E.INDICATORS
                  )[0]),
                  this._addEventListeners();
              }
              var T = o.prototype;
              return (
                (T.next = function() {
                  this._isSliding || this._slide(c);
                }),
                (T.nextWhenVisible = function() {
                  !document.hidden &&
                    e(this._element).is(":visible") &&
                    "hidden" !== e(this._element).css("visibility") &&
                    this.next();
                }),
                (T.prev = function() {
                  this._isSliding || this._slide(f);
                }),
                (T.pause = function(t) {
                  t || (this._isPaused = !0),
                    e(this._element).find(E.NEXT_PREV)[0] &&
                      (a.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (T.cycle = function(e) {
                  e || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (T.to = function(t) {
                  var n = this;
                  this._activeElement = e(this._element).find(E.ACTIVE_ITEM)[0];
                  var i = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                      e(this._element).one(p.SLID, function() {
                        return n.to(t);
                      });
                    else {
                      if (i === t) return this.pause(), void this.cycle();
                      var r = t > i ? c : f;
                      this._slide(r, this._items[t]);
                    }
                }),
                (T.dispose = function() {
                  e(this._element).off(i),
                    e.removeData(this._element, n),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (T._getConfig = function(e) {
                  return (e = s({}, l, e)), a.typeCheckConfig(t, e, u), e;
                }),
                (T._addEventListeners = function() {
                  var t = this;
                  this._config.keyboard &&
                    e(this._element).on(p.KEYDOWN, function(e) {
                      return t._keydown(e);
                    }),
                    "hover" === this._config.pause &&
                      (e(this._element)
                        .on(p.MOUSEENTER, function(e) {
                          return t.pause(e);
                        })
                        .on(p.MOUSELEAVE, function(e) {
                          return t.cycle(e);
                        }),
                      "ontouchstart" in document.documentElement &&
                        e(this._element).on(p.TOUCHEND, function() {
                          t.pause(),
                            t.touchTimeout && clearTimeout(t.touchTimeout),
                            (t.touchTimeout = setTimeout(function(e) {
                              return t.cycle(e);
                            }, 500 + t._config.interval));
                        }));
                }),
                (T._keydown = function(e) {
                  if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                      case 37:
                        e.preventDefault(), this.prev();
                        break;
                      case 39:
                        e.preventDefault(), this.next();
                    }
                }),
                (T._getItemIndex = function(t) {
                  return (
                    (this._items = e.makeArray(
                      e(t)
                        .parent()
                        .find(E.ITEM)
                    )),
                    this._items.indexOf(t)
                  );
                }),
                (T._getItemByDirection = function(e, t) {
                  var n = e === c,
                    i = e === f,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                  if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                    return t;
                  var s = (r + (e === f ? -1 : 1)) % this._items.length;
                  return -1 === s
                    ? this._items[this._items.length - 1]
                    : this._items[s];
                }),
                (T._triggerSlideEvent = function(t, n) {
                  var i = this._getItemIndex(t),
                    r = this._getItemIndex(
                      e(this._element).find(E.ACTIVE_ITEM)[0]
                    ),
                    o = e.Event(p.SLIDE, {
                      relatedTarget: t,
                      direction: n,
                      from: r,
                      to: i
                    });
                  return e(this._element).trigger(o), o;
                }),
                (T._setActiveIndicatorElement = function(t) {
                  if (this._indicatorsElement) {
                    e(this._indicatorsElement)
                      .find(E.ACTIVE)
                      .removeClass(m);
                    var n = this._indicatorsElement.children[
                      this._getItemIndex(t)
                    ];
                    n && e(n).addClass(m);
                  }
                }),
                (T._slide = function(t, n) {
                  var i,
                    r,
                    o,
                    s = this,
                    l = e(this._element).find(E.ACTIVE_ITEM)[0],
                    u = this._getItemIndex(l),
                    f = n || (l && this._getItemByDirection(t, l)),
                    g = this._getItemIndex(f),
                    T = Boolean(this._interval);
                  if (
                    (t === c
                      ? ((i = b), (r = _), (o = d))
                      : ((i = y), (r = w), (o = h)),
                    f && e(f).hasClass(m))
                  )
                    this._isSliding = !1;
                  else if (
                    !this._triggerSlideEvent(f, o).isDefaultPrevented() &&
                    l &&
                    f
                  ) {
                    (this._isSliding = !0),
                      T && this.pause(),
                      this._setActiveIndicatorElement(f);
                    var x = e.Event(p.SLID, {
                      relatedTarget: f,
                      direction: o,
                      from: u,
                      to: g
                    });
                    if (e(this._element).hasClass(v)) {
                      e(f).addClass(r),
                        a.reflow(f),
                        e(l).addClass(i),
                        e(f).addClass(i);
                      var C = a.getTransitionDurationFromElement(l);
                      e(l)
                        .one(a.TRANSITION_END, function() {
                          e(f)
                            .removeClass(i + " " + r)
                            .addClass(m),
                            e(l).removeClass(m + " " + r + " " + i),
                            (s._isSliding = !1),
                            setTimeout(function() {
                              return e(s._element).trigger(x);
                            }, 0);
                        })
                        .emulateTransitionEnd(C);
                    } else
                      e(l).removeClass(m),
                        e(f).addClass(m),
                        (this._isSliding = !1),
                        e(this._element).trigger(x);
                    T && this.cycle();
                  }
                }),
                (o._jQueryInterface = function(t) {
                  return this.each(function() {
                    var i = e(this).data(n),
                      r = s({}, l, e(this).data());
                    "object" == typeof t && (r = s({}, r, t));
                    var a = "string" == typeof t ? t : r.slide;
                    if (
                      (i || ((i = new o(this, r)), e(this).data(n, i)),
                      "number" == typeof t)
                    )
                      i.to(t);
                    else if ("string" == typeof a) {
                      if (void 0 === i[a])
                        throw new TypeError('No method named "' + a + '"');
                      i[a]();
                    } else r.interval && (i.pause(), i.cycle());
                  });
                }),
                (o._dataApiClickHandler = function(t) {
                  var i = a.getSelectorFromElement(this);
                  if (i) {
                    var r = e(i)[0];
                    if (r && e(r).hasClass(g)) {
                      var l = s({}, e(r).data(), e(this).data()),
                        u = this.getAttribute("data-slide-to");
                      u && (l.interval = !1),
                        o._jQueryInterface.call(e(r), l),
                        u &&
                          e(r)
                            .data(n)
                            .to(u),
                        t.preventDefault();
                    }
                  }
                }),
                r(o, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return l;
                    }
                  }
                ]),
                o
              );
            })();
          return (
            e(document).on(
              p.CLICK_DATA_API,
              E.DATA_SLIDE,
              T._dataApiClickHandler
            ),
            e(window).on(p.LOAD_DATA_API, function() {
              e(E.DATA_RIDE).each(function() {
                var t = e(this);
                T._jQueryInterface.call(t, t.data());
              });
            }),
            (e.fn[t] = T._jQueryInterface),
            (e.fn[t].Constructor = T),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = o), T._jQueryInterface;
            }),
            T
          );
        })(t),
        f = (function(e) {
          var t = "collapse",
            n = "bs.collapse",
            i = e.fn[t],
            o = { toggle: !0, parent: "" },
            l = { toggle: "boolean", parent: "(string|element)" },
            u = "show.bs.collapse",
            c = "shown.bs.collapse",
            f = "hide.bs.collapse",
            d = "hidden.bs.collapse",
            h = "click.bs.collapse.data-api",
            p = "show",
            g = "collapse",
            m = "collapsing",
            v = "collapsed",
            y = "width",
            b = "height",
            _ = {
              ACTIVES: ".show, .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            w = (function() {
              function i(t, n) {
                (this._isTransitioning = !1),
                  (this._element = t),
                  (this._config = this._getConfig(n)),
                  (this._triggerArray = e.makeArray(
                    e(
                      '[data-toggle="collapse"][href="#' +
                        t.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        t.id +
                        '"]'
                    )
                  ));
                for (var i = e(_.DATA_TOGGLE), r = 0; r < i.length; r++) {
                  var o = i[r],
                    s = a.getSelectorFromElement(o);
                  null !== s &&
                    e(s).filter(t).length > 0 &&
                    ((this._selector = s), this._triggerArray.push(o));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              var h = i.prototype;
              return (
                (h.toggle = function() {
                  e(this._element).hasClass(p) ? this.hide() : this.show();
                }),
                (h.show = function() {
                  var t,
                    r,
                    o = this;
                  if (
                    !(
                      this._isTransitioning ||
                      e(this._element).hasClass(p) ||
                      (this._parent &&
                        0 ===
                          (t = e.makeArray(
                            e(this._parent)
                              .find(_.ACTIVES)
                              .filter(
                                '[data-parent="' + this._config.parent + '"]'
                              )
                          )).length &&
                        (t = null),
                      t &&
                        (r = e(t)
                          .not(this._selector)
                          .data(n)) &&
                        r._isTransitioning)
                    )
                  ) {
                    var s = e.Event(u);
                    if (
                      (e(this._element).trigger(s), !s.isDefaultPrevented())
                    ) {
                      t &&
                        (i._jQueryInterface.call(
                          e(t).not(this._selector),
                          "hide"
                        ),
                        r || e(t).data(n, null));
                      var l = this._getDimension();
                      e(this._element)
                        .removeClass(g)
                        .addClass(m),
                        (this._element.style[l] = 0),
                        this._triggerArray.length > 0 &&
                          e(this._triggerArray)
                            .removeClass(v)
                            .attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                      var f = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                        d = a.getTransitionDurationFromElement(this._element);
                      e(this._element)
                        .one(a.TRANSITION_END, function() {
                          e(o._element)
                            .removeClass(m)
                            .addClass(g)
                            .addClass(p),
                            (o._element.style[l] = ""),
                            o.setTransitioning(!1),
                            e(o._element).trigger(c);
                        })
                        .emulateTransitionEnd(d),
                        (this._element.style[l] = this._element[f] + "px");
                    }
                  }
                }),
                (h.hide = function() {
                  var t = this;
                  if (!this._isTransitioning && e(this._element).hasClass(p)) {
                    var n = e.Event(f);
                    if (
                      (e(this._element).trigger(n), !n.isDefaultPrevented())
                    ) {
                      var i = this._getDimension();
                      if (
                        ((this._element.style[i] =
                          this._element.getBoundingClientRect()[i] + "px"),
                        a.reflow(this._element),
                        e(this._element)
                          .addClass(m)
                          .removeClass(g)
                          .removeClass(p),
                        this._triggerArray.length > 0)
                      )
                        for (var r = 0; r < this._triggerArray.length; r++) {
                          var o = this._triggerArray[r],
                            s = a.getSelectorFromElement(o);
                          if (null !== s)
                            e(s).hasClass(p) ||
                              e(o)
                                .addClass(v)
                                .attr("aria-expanded", !1);
                        }
                      this.setTransitioning(!0), (this._element.style[i] = "");
                      var l = a.getTransitionDurationFromElement(this._element);
                      e(this._element)
                        .one(a.TRANSITION_END, function() {
                          t.setTransitioning(!1),
                            e(t._element)
                              .removeClass(m)
                              .addClass(g)
                              .trigger(d);
                        })
                        .emulateTransitionEnd(l);
                    }
                  }
                }),
                (h.setTransitioning = function(e) {
                  this._isTransitioning = e;
                }),
                (h.dispose = function() {
                  e.removeData(this._element, n),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (h._getConfig = function(e) {
                  return (
                    ((e = s({}, o, e)).toggle = Boolean(e.toggle)),
                    a.typeCheckConfig(t, e, l),
                    e
                  );
                }),
                (h._getDimension = function() {
                  return e(this._element).hasClass(y) ? y : b;
                }),
                (h._getParent = function() {
                  var t = this,
                    n = null;
                  a.isElement(this._config.parent)
                    ? ((n = this._config.parent),
                      void 0 !== this._config.parent.jquery &&
                        (n = this._config.parent[0]))
                    : (n = e(this._config.parent)[0]);
                  var r =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]';
                  return (
                    e(n)
                      .find(r)
                      .each(function(e, n) {
                        t._addAriaAndCollapsedClass(
                          i._getTargetFromElement(n),
                          [n]
                        );
                      }),
                    n
                  );
                }),
                (h._addAriaAndCollapsedClass = function(t, n) {
                  if (t) {
                    var i = e(t).hasClass(p);
                    n.length > 0 &&
                      e(n)
                        .toggleClass(v, !i)
                        .attr("aria-expanded", i);
                  }
                }),
                (i._getTargetFromElement = function(t) {
                  var n = a.getSelectorFromElement(t);
                  return n ? e(n)[0] : null;
                }),
                (i._jQueryInterface = function(t) {
                  return this.each(function() {
                    var r = e(this),
                      a = r.data(n),
                      l = s(
                        {},
                        o,
                        r.data(),
                        "object" == typeof t && t ? t : {}
                      );
                    if (
                      (!a && l.toggle && /show|hide/.test(t) && (l.toggle = !1),
                      a || ((a = new i(this, l)), r.data(n, a)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === a[t])
                        throw new TypeError('No method named "' + t + '"');
                      a[t]();
                    }
                  });
                }),
                r(i, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return o;
                    }
                  }
                ]),
                i
              );
            })();
          return (
            e(document).on(h, _.DATA_TOGGLE, function(t) {
              "A" === t.currentTarget.tagName && t.preventDefault();
              var i = e(this),
                r = a.getSelectorFromElement(this);
              e(r).each(function() {
                var t = e(this),
                  r = t.data(n) ? "toggle" : i.data();
                w._jQueryInterface.call(t, r);
              });
            }),
            (e.fn[t] = w._jQueryInterface),
            (e.fn[t].Constructor = w),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = i), w._jQueryInterface;
            }),
            w
          );
        })(t),
        d = (function(e) {
          var t = "dropdown",
            i = "bs.dropdown",
            o = "." + i,
            l = e.fn[t],
            u = new RegExp("38|40|27"),
            c = {
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              CLICK: "click" + o,
              CLICK_DATA_API: "click.bs.dropdown.data-api",
              KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
              KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            f = "disabled",
            d = "show",
            h = "dropup",
            p = "dropright",
            g = "dropleft",
            m = "dropdown-menu-right",
            v = "position-static",
            y = '[data-toggle="dropdown"]',
            b = ".dropdown form",
            _ = ".dropdown-menu",
            w = ".navbar-nav",
            E = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            T = "top-start",
            x = "top-end",
            C = "bottom-start",
            A = "bottom-end",
            D = "right-start",
            S = "left-start",
            N = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic"
            },
            k = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string"
            },
            O = (function() {
              function l(e, t) {
                (this._element = e),
                  (this._popper = null),
                  (this._config = this._getConfig(t)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var b = l.prototype;
              return (
                (b.toggle = function() {
                  if (
                    !this._element.disabled &&
                    !e(this._element).hasClass(f)
                  ) {
                    var t = l._getParentFromElement(this._element),
                      i = e(this._menu).hasClass(d);
                    if ((l._clearMenus(), !i)) {
                      var r = { relatedTarget: this._element },
                        o = e.Event(c.SHOW, r);
                      if ((e(t).trigger(o), !o.isDefaultPrevented())) {
                        if (!this._inNavbar) {
                          if (void 0 === n)
                            throw new TypeError(
                              "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                            );
                          var s = this._element;
                          "parent" === this._config.reference
                            ? (s = t)
                            : a.isElement(this._config.reference) &&
                              ((s = this._config.reference),
                              void 0 !== this._config.reference.jquery &&
                                (s = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary &&
                              e(t).addClass(v),
                            (this._popper = new n(
                              s,
                              this._menu,
                              this._getPopperConfig()
                            ));
                        }
                        "ontouchstart" in document.documentElement &&
                          0 === e(t).closest(w).length &&
                          e(document.body)
                            .children()
                            .on("mouseover", null, e.noop),
                          this._element.focus(),
                          this._element.setAttribute("aria-expanded", !0),
                          e(this._menu).toggleClass(d),
                          e(t)
                            .toggleClass(d)
                            .trigger(e.Event(c.SHOWN, r));
                      }
                    }
                  }
                }),
                (b.dispose = function() {
                  e.removeData(this._element, i),
                    e(this._element).off(o),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper &&
                      (this._popper.destroy(), (this._popper = null));
                }),
                (b.update = function() {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (b._addEventListeners = function() {
                  var t = this;
                  e(this._element).on(c.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                  });
                }),
                (b._getConfig = function(n) {
                  return (
                    (n = s(
                      {},
                      this.constructor.Default,
                      e(this._element).data(),
                      n
                    )),
                    a.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (b._getMenuElement = function() {
                  if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = e(t).find(_)[0];
                  }
                  return this._menu;
                }),
                (b._getPlacement = function() {
                  var t = e(this._element).parent(),
                    n = C;
                  return (
                    t.hasClass(h)
                      ? ((n = T), e(this._menu).hasClass(m) && (n = x))
                      : t.hasClass(p)
                        ? (n = D)
                        : t.hasClass(g)
                          ? (n = S)
                          : e(this._menu).hasClass(m) && (n = A),
                    n
                  );
                }),
                (b._detectNavbar = function() {
                  return e(this._element).closest(".navbar").length > 0;
                }),
                (b._getPopperConfig = function() {
                  var e = this,
                    t = {};
                  "function" == typeof this._config.offset
                    ? (t.fn = function(t) {
                        return (
                          (t.offsets = s(
                            {},
                            t.offsets,
                            e._config.offset(t.offsets) || {}
                          )),
                          t
                        );
                      })
                    : (t.offset = this._config.offset);
                  var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: t,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary
                      }
                    }
                  };
                  return (
                    "static" === this._config.display &&
                      (n.modifiers.applyStyle = { enabled: !1 }),
                    n
                  );
                }),
                (l._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data(i);
                    if (
                      (n ||
                        ((n = new l(this, "object" == typeof t ? t : null)),
                        e(this).data(i, n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                (l._clearMenus = function(t) {
                  if (
                    !t ||
                    (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                  )
                    for (var n = e.makeArray(e(y)), r = 0; r < n.length; r++) {
                      var o = l._getParentFromElement(n[r]),
                        s = e(n[r]).data(i),
                        a = { relatedTarget: n[r] };
                      if (s) {
                        var u = s._menu;
                        if (
                          e(o).hasClass(d) &&
                          !(
                            t &&
                            (("click" === t.type &&
                              /input|textarea/i.test(t.target.tagName)) ||
                              ("keyup" === t.type && 9 === t.which)) &&
                            e.contains(o, t.target)
                          )
                        ) {
                          var f = e.Event(c.HIDE, a);
                          e(o).trigger(f),
                            f.isDefaultPrevented() ||
                              ("ontouchstart" in document.documentElement &&
                                e(document.body)
                                  .children()
                                  .off("mouseover", null, e.noop),
                              n[r].setAttribute("aria-expanded", "false"),
                              e(u).removeClass(d),
                              e(o)
                                .removeClass(d)
                                .trigger(e.Event(c.HIDDEN, a)));
                        }
                      }
                    }
                }),
                (l._getParentFromElement = function(t) {
                  var n,
                    i = a.getSelectorFromElement(t);
                  return i && (n = e(i)[0]), n || t.parentNode;
                }),
                (l._dataApiKeydownHandler = function(t) {
                  if (
                    (/input|textarea/i.test(t.target.tagName)
                      ? !(
                          32 === t.which ||
                          (27 !== t.which &&
                            ((40 !== t.which && 38 !== t.which) ||
                              e(t.target).closest(_).length))
                        )
                      : u.test(t.which)) &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    !this.disabled && !e(this).hasClass(f))
                  ) {
                    var n = l._getParentFromElement(this),
                      i = e(n).hasClass(d);
                    if (
                      (i || (27 === t.which && 32 === t.which)) &&
                      (!i || (27 !== t.which && 32 !== t.which))
                    ) {
                      var r = e(n)
                        .find(E)
                        .get();
                      if (0 !== r.length) {
                        var o = r.indexOf(t.target);
                        38 === t.which && o > 0 && o--,
                          40 === t.which && o < r.length - 1 && o++,
                          o < 0 && (o = 0),
                          r[o].focus();
                      }
                    } else {
                      if (27 === t.which) {
                        var s = e(n).find(y)[0];
                        e(s).trigger("focus");
                      }
                      e(this).trigger("click");
                    }
                  }
                }),
                r(l, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return N;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return k;
                    }
                  }
                ]),
                l
              );
            })();
          return (
            e(document)
              .on(c.KEYDOWN_DATA_API, y, O._dataApiKeydownHandler)
              .on(c.KEYDOWN_DATA_API, _, O._dataApiKeydownHandler)
              .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, O._clearMenus)
              .on(c.CLICK_DATA_API, y, function(t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  O._jQueryInterface.call(e(this), "toggle");
              })
              .on(c.CLICK_DATA_API, b, function(e) {
                e.stopPropagation();
              }),
            (e.fn[t] = O._jQueryInterface),
            (e.fn[t].Constructor = O),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = l), O._jQueryInterface;
            }),
            O
          );
        })(t),
        h = (function(e) {
          var t = e.fn.modal,
            n = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            i = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean"
            },
            o = "hide.bs.modal",
            l = "hidden.bs.modal",
            u = "show.bs.modal",
            c = "shown.bs.modal",
            f = "focusin.bs.modal",
            d = "resize.bs.modal",
            h = "click.dismiss.bs.modal",
            p = "keydown.dismiss.bs.modal",
            g = "mouseup.dismiss.bs.modal",
            m = "mousedown.dismiss.bs.modal",
            v = "click.bs.modal.data-api",
            y = "modal-scrollbar-measure",
            b = "modal-backdrop",
            _ = "modal-open",
            w = "fade",
            E = "show",
            T = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              STICKY_CONTENT: ".sticky-top",
              NAVBAR_TOGGLER: ".navbar-toggler"
            },
            x = (function() {
              function t(t, n) {
                (this._config = this._getConfig(n)),
                  (this._element = t),
                  (this._dialog = e(t).find(T.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._scrollbarWidth = 0);
              }
              var v = t.prototype;
              return (
                (v.toggle = function(e) {
                  return this._isShown ? this.hide() : this.show(e);
                }),
                (v.show = function(t) {
                  var n = this;
                  if (!this._isTransitioning && !this._isShown) {
                    e(this._element).hasClass(w) &&
                      (this._isTransitioning = !0);
                    var i = e.Event(u, { relatedTarget: t });
                    e(this._element).trigger(i),
                      this._isShown ||
                        i.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        e(document.body).addClass(_),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(this._element).on(h, T.DATA_DISMISS, function(e) {
                          return n.hide(e);
                        }),
                        e(this._dialog).on(m, function() {
                          e(n._element).one(g, function(t) {
                            e(t.target).is(n._element) &&
                              (n._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function() {
                          return n._showElement(t);
                        }));
                  }
                }),
                (v.hide = function(t) {
                  var n = this;
                  if (
                    (t && t.preventDefault(),
                    !this._isTransitioning && this._isShown)
                  ) {
                    var i = e.Event(o);
                    if (
                      (e(this._element).trigger(i),
                      this._isShown && !i.isDefaultPrevented())
                    ) {
                      this._isShown = !1;
                      var r = e(this._element).hasClass(w);
                      if (
                        (r && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(f),
                        e(this._element).removeClass(E),
                        e(this._element).off(h),
                        e(this._dialog).off(m),
                        r)
                      ) {
                        var s = a.getTransitionDurationFromElement(
                          this._element
                        );
                        e(this._element)
                          .one(a.TRANSITION_END, function(e) {
                            return n._hideModal(e);
                          })
                          .emulateTransitionEnd(s);
                      } else this._hideModal();
                    }
                  }
                }),
                (v.dispose = function() {
                  e.removeData(this._element, "bs.modal"),
                    e(window, document, this._element, this._backdrop).off(
                      ".bs.modal"
                    ),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (v.handleUpdate = function() {
                  this._adjustDialog();
                }),
                (v._getConfig = function(e) {
                  return (e = s({}, n, e)), a.typeCheckConfig("modal", e, i), e;
                }),
                (v._showElement = function(t) {
                  var n = this,
                    i = e(this._element).hasClass(w);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    i && a.reflow(this._element),
                    e(this._element).addClass(E),
                    this._config.focus && this._enforceFocus();
                  var r = e.Event(c, { relatedTarget: t }),
                    o = function() {
                      n._config.focus && n._element.focus(),
                        (n._isTransitioning = !1),
                        e(n._element).trigger(r);
                    };
                  if (i) {
                    var s = a.getTransitionDurationFromElement(this._element);
                    e(this._dialog)
                      .one(a.TRANSITION_END, o)
                      .emulateTransitionEnd(s);
                  } else o();
                }),
                (v._enforceFocus = function() {
                  var t = this;
                  e(document)
                    .off(f)
                    .on(f, function(n) {
                      document !== n.target &&
                        t._element !== n.target &&
                        0 === e(t._element).has(n.target).length &&
                        t._element.focus();
                    });
                }),
                (v._setEscapeEvent = function() {
                  var t = this;
                  this._isShown && this._config.keyboard
                    ? e(this._element).on(p, function(e) {
                        27 === e.which && (e.preventDefault(), t.hide());
                      })
                    : this._isShown || e(this._element).off(p);
                }),
                (v._setResizeEvent = function() {
                  var t = this;
                  this._isShown
                    ? e(window).on(d, function(e) {
                        return t.handleUpdate(e);
                      })
                    : e(window).off(d);
                }),
                (v._hideModal = function() {
                  var t = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function() {
                      e(document.body).removeClass(_),
                        t._resetAdjustments(),
                        t._resetScrollbar(),
                        e(t._element).trigger(l);
                    });
                }),
                (v._removeBackdrop = function() {
                  this._backdrop &&
                    (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (v._showBackdrop = function(t) {
                  var n = this,
                    i = e(this._element).hasClass(w) ? w : "";
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = b),
                      i && e(this._backdrop).addClass(i),
                      e(this._backdrop).appendTo(document.body),
                      e(this._element).on(h, function(e) {
                        n._ignoreBackdropClick
                          ? (n._ignoreBackdropClick = !1)
                          : e.target === e.currentTarget &&
                            ("static" === n._config.backdrop
                              ? n._element.focus()
                              : n.hide());
                      }),
                      i && a.reflow(this._backdrop),
                      e(this._backdrop).addClass(E),
                      !t)
                    )
                      return;
                    if (!i) return void t();
                    var r = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop)
                      .one(a.TRANSITION_END, t)
                      .emulateTransitionEnd(r);
                  } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(E);
                    var o = function() {
                      n._removeBackdrop(), t && t();
                    };
                    if (e(this._element).hasClass(w)) {
                      var s = a.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      e(this._backdrop)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                  } else t && t();
                }),
                (v._adjustDialog = function() {
                  var e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    e &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + "px"),
                    this._isBodyOverflowing &&
                      !e &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + "px");
                }),
                (v._resetAdjustments = function() {
                  (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (v._checkScrollbar = function() {
                  var e = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing =
                    e.left + e.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (v._setScrollbar = function() {
                  var t = this;
                  if (this._isBodyOverflowing) {
                    e(T.FIXED_CONTENT).each(function(n, i) {
                      var r = e(i)[0].style.paddingRight,
                        o = e(i).css("padding-right");
                      e(i)
                        .data("padding-right", r)
                        .css(
                          "padding-right",
                          parseFloat(o) + t._scrollbarWidth + "px"
                        );
                    }),
                      e(T.STICKY_CONTENT).each(function(n, i) {
                        var r = e(i)[0].style.marginRight,
                          o = e(i).css("margin-right");
                        e(i)
                          .data("margin-right", r)
                          .css(
                            "margin-right",
                            parseFloat(o) - t._scrollbarWidth + "px"
                          );
                      }),
                      e(T.NAVBAR_TOGGLER).each(function(n, i) {
                        var r = e(i)[0].style.marginRight,
                          o = e(i).css("margin-right");
                        e(i)
                          .data("margin-right", r)
                          .css(
                            "margin-right",
                            parseFloat(o) + t._scrollbarWidth + "px"
                          );
                      });
                    var n = document.body.style.paddingRight,
                      i = e(document.body).css("padding-right");
                    e(document.body)
                      .data("padding-right", n)
                      .css(
                        "padding-right",
                        parseFloat(i) + this._scrollbarWidth + "px"
                      );
                  }
                }),
                (v._resetScrollbar = function() {
                  e(T.FIXED_CONTENT).each(function(t, n) {
                    var i = e(n).data("padding-right");
                    void 0 !== i &&
                      e(n)
                        .css("padding-right", i)
                        .removeData("padding-right");
                  }),
                    e(T.STICKY_CONTENT + ", " + T.NAVBAR_TOGGLER).each(function(
                      t,
                      n
                    ) {
                      var i = e(n).data("margin-right");
                      void 0 !== i &&
                        e(n)
                          .css("margin-right", i)
                          .removeData("margin-right");
                    });
                  var t = e(document.body).data("padding-right");
                  void 0 !== t &&
                    e(document.body)
                      .css("padding-right", t)
                      .removeData("padding-right");
                }),
                (v._getScrollbarWidth = function() {
                  var e = document.createElement("div");
                  (e.className = y), document.body.appendChild(e);
                  var t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                }),
                (t._jQueryInterface = function(i, r) {
                  return this.each(function() {
                    var o = e(this).data("bs.modal"),
                      a = s(
                        {},
                        n,
                        e(this).data(),
                        "object" == typeof i && i ? i : {}
                      );
                    if (
                      (o || ((o = new t(this, a)), e(this).data("bs.modal", o)),
                      "string" == typeof i)
                    ) {
                      if (void 0 === o[i])
                        throw new TypeError('No method named "' + i + '"');
                      o[i](r);
                    } else a.show && o.show(r);
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return n;
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(v, T.DATA_TOGGLE, function(t) {
              var n,
                i = this,
                r = a.getSelectorFromElement(this);
              r && (n = e(r)[0]);
              var o = e(n).data("bs.modal")
                ? "toggle"
                : s({}, e(n).data(), e(this).data());
              ("A" !== this.tagName && "AREA" !== this.tagName) ||
                t.preventDefault();
              var c = e(n).one(u, function(t) {
                t.isDefaultPrevented() ||
                  c.one(l, function() {
                    e(i).is(":visible") && i.focus();
                  });
              });
              x._jQueryInterface.call(e(n), o, this);
            }),
            (e.fn.modal = x._jQueryInterface),
            (e.fn.modal.Constructor = x),
            (e.fn.modal.noConflict = function() {
              return (e.fn.modal = t), x._jQueryInterface;
            }),
            x
          );
        })(t),
        p = (function(e) {
          var t = "tooltip",
            i = ".bs.tooltip",
            o = e.fn[t],
            l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            u = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)"
            },
            c = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left"
            },
            f = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent"
            },
            d = "show",
            h = "out",
            p = {
              HIDE: "hide" + i,
              HIDDEN: "hidden" + i,
              SHOW: "show" + i,
              SHOWN: "shown" + i,
              INSERTED: "inserted" + i,
              CLICK: "click" + i,
              FOCUSIN: "focusin" + i,
              FOCUSOUT: "focusout" + i,
              MOUSEENTER: "mouseenter" + i,
              MOUSELEAVE: "mouseleave" + i
            },
            g = "fade",
            m = "show",
            v = ".tooltip-inner",
            y = ".arrow",
            b = "hover",
            _ = "focus",
            w = "click",
            E = "manual",
            T = (function() {
              function o(e, t) {
                if (void 0 === n)
                  throw new TypeError(
                    "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = e),
                  (this.config = this._getConfig(t)),
                  (this.tip = null),
                  this._setListeners();
              }
              var T = o.prototype;
              return (
                (T.enable = function() {
                  this._isEnabled = !0;
                }),
                (T.disable = function() {
                  this._isEnabled = !1;
                }),
                (T.toggleEnabled = function() {
                  this._isEnabled = !this._isEnabled;
                }),
                (T.toggle = function(t) {
                  if (this._isEnabled)
                    if (t) {
                      var n = this.constructor.DATA_KEY,
                        i = e(t.currentTarget).data(n);
                      i ||
                        ((i = new this.constructor(
                          t.currentTarget,
                          this._getDelegateConfig()
                        )),
                        e(t.currentTarget).data(n, i)),
                        (i._activeTrigger.click = !i._activeTrigger.click),
                        i._isWithActiveTrigger()
                          ? i._enter(null, i)
                          : i._leave(null, i);
                    } else {
                      if (e(this.getTipElement()).hasClass(m))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (T.dispose = function() {
                  clearTimeout(this._timeout),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    e(this.element)
                      .closest(".modal")
                      .off("hide.bs.modal"),
                    this.tip && e(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (T.show = function() {
                  var t = this;
                  if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                  var i = e.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(i);
                    var r = e.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (i.isDefaultPrevented() || !r) return;
                    var o = this.getTipElement(),
                      s = a.getUID(this.constructor.NAME);
                    o.setAttribute("id", s),
                      this.element.setAttribute("aria-describedby", s),
                      this.setContent(),
                      this.config.animation && e(o).addClass(g);
                    var l =
                        "function" == typeof this.config.placement
                          ? this.config.placement.call(this, o, this.element)
                          : this.config.placement,
                      u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c =
                      !1 === this.config.container
                        ? document.body
                        : e(this.config.container);
                    e(o).data(this.constructor.DATA_KEY, this),
                      e.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip
                      ) || e(o).appendTo(c),
                      e(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new n(this.element, o, {
                        placement: u,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: y },
                          preventOverflow: {
                            boundariesElement: this.config.boundary
                          }
                        },
                        onCreate: function(e) {
                          e.originalPlacement !== e.placement &&
                            t._handlePopperPlacementChange(e);
                        },
                        onUpdate: function(e) {
                          t._handlePopperPlacementChange(e);
                        }
                      })),
                      e(o).addClass(m),
                      "ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .on("mouseover", null, e.noop);
                    var f = function() {
                      t.config.animation && t._fixTransition();
                      var n = t._hoverState;
                      (t._hoverState = null),
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        n === h && t._leave(null, t);
                    };
                    if (e(this.tip).hasClass(g)) {
                      var d = a.getTransitionDurationFromElement(this.tip);
                      e(this.tip)
                        .one(a.TRANSITION_END, f)
                        .emulateTransitionEnd(d);
                    } else f();
                  }
                }),
                (T.hide = function(t) {
                  var n = this,
                    i = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE),
                    o = function() {
                      n._hoverState !== d &&
                        i.parentNode &&
                        i.parentNode.removeChild(i),
                        n._cleanTipClass(),
                        n.element.removeAttribute("aria-describedby"),
                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        t && t();
                    };
                  if ((e(this.element).trigger(r), !r.isDefaultPrevented())) {
                    if (
                      (e(i).removeClass(m),
                      "ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      (this._activeTrigger[w] = !1),
                      (this._activeTrigger[_] = !1),
                      (this._activeTrigger[b] = !1),
                      e(this.tip).hasClass(g))
                    ) {
                      var s = a.getTransitionDurationFromElement(i);
                      e(i)
                        .one(a.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                    this._hoverState = "";
                  }
                }),
                (T.update = function() {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (T.isWithContent = function() {
                  return Boolean(this.getTitle());
                }),
                (T.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (T.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (T.setContent = function() {
                  var t = e(this.getTipElement());
                  this.setElementContent(t.find(v), this.getTitle()),
                    t.removeClass(g + " " + m);
                }),
                (T.setElementContent = function(t, n) {
                  var i = this.config.html;
                  "object" == typeof n && (n.nodeType || n.jquery)
                    ? i
                      ? e(n)
                          .parent()
                          .is(t) || t.empty().append(n)
                      : t.text(e(n).text())
                    : t[i ? "html" : "text"](n);
                }),
                (T.getTitle = function() {
                  var e = this.element.getAttribute("data-original-title");
                  return (
                    e ||
                      (e =
                        "function" == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    e
                  );
                }),
                (T._getAttachment = function(e) {
                  return c[e.toUpperCase()];
                }),
                (T._setListeners = function() {
                  var t = this;
                  this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                      e(t.element).on(
                        t.constructor.Event.CLICK,
                        t.config.selector,
                        function(e) {
                          return t.toggle(e);
                        }
                      );
                    else if (n !== E) {
                      var i =
                          n === b
                            ? t.constructor.Event.MOUSEENTER
                            : t.constructor.Event.FOCUSIN,
                        r =
                          n === b
                            ? t.constructor.Event.MOUSELEAVE
                            : t.constructor.Event.FOCUSOUT;
                      e(t.element)
                        .on(i, t.config.selector, function(e) {
                          return t._enter(e);
                        })
                        .on(r, t.config.selector, function(e) {
                          return t._leave(e);
                        });
                    }
                    e(t.element)
                      .closest(".modal")
                      .on("hide.bs.modal", function() {
                        return t.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = s({}, this.config, {
                          trigger: "manual",
                          selector: ""
                        }))
                      : this._fixTitle();
                }),
                (T._fixTitle = function() {
                  var e = typeof this.element.getAttribute(
                    "data-original-title"
                  );
                  (this.element.getAttribute("title") || "string" !== e) &&
                    (this.element.setAttribute(
                      "data-original-title",
                      this.element.getAttribute("title") || ""
                    ),
                    this.element.setAttribute("title", ""));
                }),
                (T._enter = function(t, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(i)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(i, n)),
                    t && (n._activeTrigger["focusin" === t.type ? _ : b] = !0),
                    e(n.getTipElement()).hasClass(m) || n._hoverState === d
                      ? (n._hoverState = d)
                      : (clearTimeout(n._timeout),
                        (n._hoverState = d),
                        n.config.delay && n.config.delay.show
                          ? (n._timeout = setTimeout(function() {
                              n._hoverState === d && n.show();
                            }, n.config.delay.show))
                          : n.show());
                }),
                (T._leave = function(t, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(i)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(i, n)),
                    t && (n._activeTrigger["focusout" === t.type ? _ : b] = !1),
                    n._isWithActiveTrigger() ||
                      (clearTimeout(n._timeout),
                      (n._hoverState = h),
                      n.config.delay && n.config.delay.hide
                        ? (n._timeout = setTimeout(function() {
                            n._hoverState === h && n.hide();
                          }, n.config.delay.hide))
                        : n.hide());
                }),
                (T._isWithActiveTrigger = function() {
                  for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                  return !1;
                }),
                (T._getConfig = function(n) {
                  return (
                    "number" ==
                      typeof (n = s(
                        {},
                        this.constructor.Default,
                        e(this.element).data(),
                        "object" == typeof n && n ? n : {}
                      )).delay && (n.delay = { show: n.delay, hide: n.delay }),
                    "number" == typeof n.title &&
                      (n.title = n.title.toString()),
                    "number" == typeof n.content &&
                      (n.content = n.content.toString()),
                    a.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (T._getDelegateConfig = function() {
                  var e = {};
                  if (this.config)
                    for (var t in this.config)
                      this.constructor.Default[t] !== this.config[t] &&
                        (e[t] = this.config[t]);
                  return e;
                }),
                (T._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr("class").match(l);
                  null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (T._handlePopperPlacementChange = function(e) {
                  this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(e.placement));
                }),
                (T._fixTransition = function() {
                  var t = this.getTipElement(),
                    n = this.config.animation;
                  null === t.getAttribute("x-placement") &&
                    (e(t).removeClass(g),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
                }),
                (o._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data("bs.tooltip"),
                      i = "object" == typeof t && t;
                    if (
                      (n || !/dispose|hide/.test(t)) &&
                      (n ||
                        ((n = new o(this, i)), e(this).data("bs.tooltip", n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(o, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return f;
                    }
                  },
                  {
                    key: "NAME",
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: "DATA_KEY",
                    get: function() {
                      return "bs.tooltip";
                    }
                  },
                  {
                    key: "Event",
                    get: function() {
                      return p;
                    }
                  },
                  {
                    key: "EVENT_KEY",
                    get: function() {
                      return i;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return u;
                    }
                  }
                ]),
                o
              );
            })();
          return (
            (e.fn[t] = T._jQueryInterface),
            (e.fn[t].Constructor = T),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = o), T._jQueryInterface;
            }),
            T
          );
        })(t),
        g = (function(e) {
          var t = "popover",
            n = ".bs.popover",
            i = e.fn[t],
            o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            a = s({}, p.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }),
            l = s({}, p.DefaultType, { content: "(string|element|function)" }),
            u = "fade",
            c = "show",
            f = ".popover-header",
            d = ".popover-body",
            h = {
              HIDE: "hide" + n,
              HIDDEN: "hidden" + n,
              SHOW: "show" + n,
              SHOWN: "shown" + n,
              INSERTED: "inserted" + n,
              CLICK: "click" + n,
              FOCUSIN: "focusin" + n,
              FOCUSOUT: "focusout" + n,
              MOUSEENTER: "mouseenter" + n,
              MOUSELEAVE: "mouseleave" + n
            },
            g = (function(i) {
              var s, p;
              function g() {
                return i.apply(this, arguments) || this;
              }
              (p = i),
                ((s = g).prototype = Object.create(p.prototype)),
                (s.prototype.constructor = s),
                (s.__proto__ = p);
              var m = g.prototype;
              return (
                (m.isWithContent = function() {
                  return this.getTitle() || this._getContent();
                }),
                (m.addAttachmentClass = function(t) {
                  e(this.getTipElement()).addClass("bs-popover-" + t);
                }),
                (m.getTipElement = function() {
                  return (
                    (this.tip = this.tip || e(this.config.template)[0]),
                    this.tip
                  );
                }),
                (m.setContent = function() {
                  var t = e(this.getTipElement());
                  this.setElementContent(t.find(f), this.getTitle());
                  var n = this._getContent();
                  "function" == typeof n && (n = n.call(this.element)),
                    this.setElementContent(t.find(d), n),
                    t.removeClass(u + " " + c);
                }),
                (m._getContent = function() {
                  return (
                    this.element.getAttribute("data-content") ||
                    this.config.content
                  );
                }),
                (m._cleanTipClass = function() {
                  var t = e(this.getTipElement()),
                    n = t.attr("class").match(o);
                  null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (g._jQueryInterface = function(t) {
                  return this.each(function() {
                    var n = e(this).data("bs.popover"),
                      i = "object" == typeof t ? t : null;
                    if (
                      (n || !/destroy|hide/.test(t)) &&
                      (n ||
                        ((n = new g(this, i)), e(this).data("bs.popover", n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new TypeError('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(g, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return a;
                    }
                  },
                  {
                    key: "NAME",
                    get: function() {
                      return t;
                    }
                  },
                  {
                    key: "DATA_KEY",
                    get: function() {
                      return "bs.popover";
                    }
                  },
                  {
                    key: "Event",
                    get: function() {
                      return h;
                    }
                  },
                  {
                    key: "EVENT_KEY",
                    get: function() {
                      return n;
                    }
                  },
                  {
                    key: "DefaultType",
                    get: function() {
                      return l;
                    }
                  }
                ]),
                g
              );
            })(p);
          return (
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = i), g._jQueryInterface;
            }),
            g
          );
        })(t),
        m = (function(e) {
          var t = "scrollspy",
            n = e.fn[t],
            i = { offset: 10, method: "auto", target: "" },
            o = {
              offset: "number",
              method: "string",
              target: "(string|element)"
            },
            l = {
              ACTIVATE: "activate.bs.scrollspy",
              SCROLL: "scroll.bs.scrollspy",
              LOAD_DATA_API: "load.bs.scrollspy.data-api"
            },
            u = "dropdown-item",
            c = "active",
            f = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              NAV_ITEMS: ".nav-item",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            d = "offset",
            h = "position",
            p = (function() {
              function n(t, n) {
                var i = this;
                (this._element = t),
                  (this._scrollElement = "BODY" === t.tagName ? window : t),
                  (this._config = this._getConfig(n)),
                  (this._selector =
                    this._config.target +
                    " " +
                    f.NAV_LINKS +
                    "," +
                    this._config.target +
                    " " +
                    f.LIST_ITEMS +
                    "," +
                    this._config.target +
                    " " +
                    f.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  e(this._scrollElement).on(l.SCROLL, function(e) {
                    return i._process(e);
                  }),
                  this.refresh(),
                  this._process();
              }
              var p = n.prototype;
              return (
                (p.refresh = function() {
                  var t = this,
                    n =
                      this._scrollElement === this._scrollElement.window
                        ? d
                        : h,
                    i =
                      "auto" === this._config.method ? n : this._config.method,
                    r = i === h ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    e
                      .makeArray(e(this._selector))
                      .map(function(t) {
                        var n,
                          o = a.getSelectorFromElement(t);
                        if ((o && (n = e(o)[0]), n)) {
                          var s = n.getBoundingClientRect();
                          if (s.width || s.height)
                            return [e(n)[i]().top + r, o];
                        }
                        return null;
                      })
                      .filter(function(e) {
                        return e;
                      })
                      .sort(function(e, t) {
                        return e[0] - t[0];
                      })
                      .forEach(function(e) {
                        t._offsets.push(e[0]), t._targets.push(e[1]);
                      });
                }),
                (p.dispose = function() {
                  e.removeData(this._element, "bs.scrollspy"),
                    e(this._scrollElement).off(".bs.scrollspy"),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (p._getConfig = function(n) {
                  if (
                    "string" !=
                    typeof (n = s({}, i, "object" == typeof n && n ? n : {}))
                      .target
                  ) {
                    var r = e(n.target).attr("id");
                    r || ((r = a.getUID(t)), e(n.target).attr("id", r)),
                      (n.target = "#" + r);
                  }
                  return a.typeCheckConfig(t, n, o), n;
                }),
                (p._getScrollTop = function() {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (p._getScrollHeight = function() {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (p._getOffsetHeight = function() {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (p._process = function() {
                  var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                  if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i);
                  } else {
                    if (
                      this._activeTarget &&
                      e < this._offsets[0] &&
                      this._offsets[0] > 0
                    )
                      return (this._activeTarget = null), void this._clear();
                    for (var r = this._offsets.length; r--; ) {
                      this._activeTarget !== this._targets[r] &&
                        e >= this._offsets[r] &&
                        (void 0 === this._offsets[r + 1] ||
                          e < this._offsets[r + 1]) &&
                        this._activate(this._targets[r]);
                    }
                  }
                }),
                (p._activate = function(t) {
                  (this._activeTarget = t), this._clear();
                  var n = this._selector.split(",");
                  n = n.map(function(e) {
                    return (
                      e +
                      '[data-target="' +
                      t +
                      '"],' +
                      e +
                      '[href="' +
                      t +
                      '"]'
                    );
                  });
                  var i = e(n.join(","));
                  i.hasClass(u)
                    ? (i
                        .closest(f.DROPDOWN)
                        .find(f.DROPDOWN_TOGGLE)
                        .addClass(c),
                      i.addClass(c))
                    : (i.addClass(c),
                      i
                        .parents(f.NAV_LIST_GROUP)
                        .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                        .addClass(c),
                      i
                        .parents(f.NAV_LIST_GROUP)
                        .prev(f.NAV_ITEMS)
                        .children(f.NAV_LINKS)
                        .addClass(c)),
                    e(this._scrollElement).trigger(l.ACTIVATE, {
                      relatedTarget: t
                    });
                }),
                (p._clear = function() {
                  e(this._selector)
                    .filter(f.ACTIVE)
                    .removeClass(c);
                }),
                (n._jQueryInterface = function(t) {
                  return this.each(function() {
                    var i = e(this).data("bs.scrollspy");
                    if (
                      (i ||
                        ((i = new n(this, "object" == typeof t && t)),
                        e(this).data("bs.scrollspy", i)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                      i[t]();
                    }
                  });
                }),
                r(n, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  },
                  {
                    key: "Default",
                    get: function() {
                      return i;
                    }
                  }
                ]),
                n
              );
            })();
          return (
            e(window).on(l.LOAD_DATA_API, function() {
              for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--; ) {
                var i = e(t[n]);
                p._jQueryInterface.call(i, i.data());
              }
            }),
            (e.fn[t] = p._jQueryInterface),
            (e.fn[t].Constructor = p),
            (e.fn[t].noConflict = function() {
              return (e.fn[t] = n), p._jQueryInterface;
            }),
            p
          );
        })(t),
        v = (function(e) {
          var t = e.fn.tab,
            n = "hide.bs.tab",
            i = "hidden.bs.tab",
            o = "show.bs.tab",
            s = "shown.bs.tab",
            l = "click.bs.tab.data-api",
            u = "dropdown-menu",
            c = "active",
            f = "disabled",
            d = "fade",
            h = "show",
            p = ".dropdown",
            g = ".nav, .list-group",
            m = ".active",
            v = "> li > .active",
            y =
              '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            b = ".dropdown-toggle",
            _ = "> .dropdown-menu .active",
            w = (function() {
              function t(e) {
                this._element = e;
              }
              var l = t.prototype;
              return (
                (l.show = function() {
                  var t = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        e(this._element).hasClass(c)) ||
                      e(this._element).hasClass(f)
                    )
                  ) {
                    var r,
                      l,
                      u = e(this._element).closest(g)[0],
                      d = a.getSelectorFromElement(this._element);
                    if (u) {
                      var h = "UL" === u.nodeName ? v : m;
                      l = (l = e.makeArray(e(u).find(h)))[l.length - 1];
                    }
                    var p = e.Event(n, { relatedTarget: this._element }),
                      y = e.Event(o, { relatedTarget: l });
                    if (
                      (l && e(l).trigger(p),
                      e(this._element).trigger(y),
                      !y.isDefaultPrevented() && !p.isDefaultPrevented())
                    ) {
                      d && (r = e(d)[0]), this._activate(this._element, u);
                      var b = function() {
                        var n = e.Event(i, { relatedTarget: t._element }),
                          r = e.Event(s, { relatedTarget: l });
                        e(l).trigger(n), e(t._element).trigger(r);
                      };
                      r ? this._activate(r, r.parentNode, b) : b();
                    }
                  }
                }),
                (l.dispose = function() {
                  e.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (l._activate = function(t, n, i) {
                  var r = this,
                    o = ("UL" === n.nodeName
                      ? e(n).find(v)
                      : e(n).children(m))[0],
                    s = i && o && e(o).hasClass(d),
                    l = function() {
                      return r._transitionComplete(t, o, i);
                    };
                  if (o && s) {
                    var u = a.getTransitionDurationFromElement(o);
                    e(o)
                      .one(a.TRANSITION_END, l)
                      .emulateTransitionEnd(u);
                  } else l();
                }),
                (l._transitionComplete = function(t, n, i) {
                  if (n) {
                    e(n).removeClass(h + " " + c);
                    var r = e(n.parentNode).find(_)[0];
                    r && e(r).removeClass(c),
                      "tab" === n.getAttribute("role") &&
                        n.setAttribute("aria-selected", !1);
                  }
                  if (
                    (e(t).addClass(c),
                    "tab" === t.getAttribute("role") &&
                      t.setAttribute("aria-selected", !0),
                    a.reflow(t),
                    e(t).addClass(h),
                    t.parentNode && e(t.parentNode).hasClass(u))
                  ) {
                    var o = e(t).closest(p)[0];
                    o &&
                      e(o)
                        .find(b)
                        .addClass(c),
                      t.setAttribute("aria-expanded", !0);
                  }
                  i && i();
                }),
                (t._jQueryInterface = function(n) {
                  return this.each(function() {
                    var i = e(this),
                      r = i.data("bs.tab");
                    if (
                      (r || ((r = new t(this)), i.data("bs.tab", r)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                      r[n]();
                    }
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function() {
                      return "4.1.1";
                    }
                  }
                ]),
                t
              );
            })();
          return (
            e(document).on(l, y, function(t) {
              t.preventDefault(), w._jQueryInterface.call(e(this), "show");
            }),
            (e.fn.tab = w._jQueryInterface),
            (e.fn.tab.Constructor = w),
            (e.fn.tab.noConflict = function() {
              return (e.fn.tab = t), w._jQueryInterface;
            }),
            w
          );
        })(t);
      (function(e) {
        if (void 0 === e)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          t[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      })(t),
        (e.Util = a),
        (e.Alert = l),
        (e.Button = u),
        (e.Carousel = c),
        (e.Collapse = f),
        (e.Dropdown = d),
        (e.Modal = h),
        (e.Popover = g),
        (e.Scrollspy = m),
        (e.Tab = v),
        (e.Tooltip = p),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t, n(2), n(1));
  },
  function(e, t) {
    e.exports = (function() {
      var e,
        t,
        n = document.querySelector("html");
      return (
        (n.className += " " + i()),
        (n.className += " " + r()),
        (n.className +=
          " " +
          ("no-device" === r() && "ontouchstart" in document.documentElement
            ? "no-touch"
            : "ontouchstart" in document.documentElement
              ? "touch"
              : "no-touch")),
        (n.className +=
          " " +
          (function() {
            var e = navigator.userAgent || navigator.vendor || window.opera,
              t = "no-android";
            return (
              /android/i.test(e) &&
                ((t = e.indexOf("Android 5.") >= 0 ? "android-5" : "android-4"),
                e.indexOf("Chrome") >= 0 &&
                  e.indexOf("Safari") &&
                  (t += " android-chrome")),
              t
            );
          })()),
        {
          websocket: "function" == typeof window.WebSocket,
          webgl: ((e = document.createElement("canvas")),
          (t = e.getContext("webgl") || e.getContext("experimental-webgl")),
          t && t instanceof WebGLRenderingContext),
          touch: "ontouchstart" in document.documentElement,
          isIe: i()
        }
      );
      function i() {
        var e,
          t,
          n = window.navigator.userAgent;
        if ((e = n.indexOf("MSIE ")) > 0)
          return "ie" + parseInt(n.substring(e + 5, n.indexOf(".", e)), 10);
        if (n.indexOf("Trident/") > 0) {
          var i = n.indexOf("rv:");
          return "ie" + parseInt(n.substring(i + 3, n.indexOf(".", i)), 10);
        }
        return (t = n.indexOf("Edge/")) > 0
          ? "edge" + parseInt(n.substring(t + 5, n.indexOf(".", t)), 10)
          : "not-ie";
      }
      function r() {
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return /windows phone/i.test(e)
          ? "Windows Phone"
          : /android/i.test(e)
            ? "Android"
            : /iPad|iPhone|iPod/.test(e) && !window.MSStream
              ? "iOS"
              : "no-device";
      }
    })();
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = {
        projectName: "symfony-template",
        env: "local",
        baseUrl: "http://symfony-template.local",
        apiUrl: "http://symfony-template.local/",
        shareUrl: "http://symfony-template.local/",
        assetsUrl: "http://symfony-template.local/src/",
        liveReload: !1
      });
  },
  function(e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = o(n(6)),
      r = o(n(5));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function e() {
      (0, i.default)(this, e), (this.config = r.default);
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i,
      r = (i = n(7)) && i.__esModule ? i : { default: i };
    t.default = r.default;
  },
  function(e, t, n) {
    "use strict";
    var i,
      r = (i = n(8)) && i.__esModule ? i : { default: i };
    n(4), n(3), new r.default();
  }
]);
