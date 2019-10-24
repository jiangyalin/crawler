(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  "1Qz/": function(t, e, n) {},
  "1aRO": function(t, e, n) {
    "use strict";
    function s(t) {
      return Reflect.hasOwnMetadata("serializer:serializable", t)
    }
    function r() {
      return function(t) {
        Reflect.defineMetadata("serializer:serializable", !0, t)
      }
    }
    function i(i) {
      return function(t, e) {
        var n = {}
          , r = "serializer:props";
        Reflect.hasMetadata(r, t) && (n = Reflect.getMetadata(r, t)),
          n[e] = function(t, e) {
            var n = Object.create(null);
            switch (typeof e) {
              case "undefined":
                n.name = t;
                break;
              case "string":
                n.name = e;
                break;
              default:
                n.name = e.name || t,
                  n.type = e.type
            }
            return n
          }(e, i),
          Reflect.defineMetadata(r, n, t)
      }
    }
    function c(r, t) {
      var i = new t;
      if (!s(t))
        return i;
      var o = Reflect.getMetadata("serializer:props", t.prototype);
      return Object.keys(o).forEach(function(t) {
        var e = o[t]
          , n = r[e.name];
        void 0 !== n && (i[t] = function(t, e, n, r) {
          var i = n.type || Reflect.getMetadata("design:type", t, e)
            , o = i.name.toLowerCase();
          if (!s(i))
            switch (o) {
              case "number":
                return isNaN(r) ? void 0 : r;
              case "string":
                return "string" == typeof r ? r : void 0;
              case "boolean":
                return "boolean" == typeof r ? r : void 0;
              case "date":
                return isNaN(Date.parse(r)) ? void 0 : new Date(r);
              default:
                return r
            }
          if ("[object Array]" !== Object.prototype.toString.call(r))
            return c(r, i);
          var a = [];
          return r.forEach(function(t) {
            a.push(c(t, i))
          }),
            a
        }(i, t, e, n))
      }),
        i
    }
    n.d(e, "a", function() {
      return i
    }),
      n.d(e, "b", function() {
        return r
      }),
      n.d(e, "c", function() {
        return c
      })
  },
  "799b": function(t, e, n) {},
  Blr9: function(t, e, n) {
    "use strict";
    function c(t) {
      return !isNaN(parseFloat(t)) && isFinite(t)
    }
    function r() {
      return "undefined" != typeof window
    }
    var i = {
      webp: r(),
      fuzzyMatch: !0,
      whiteList: [],
      webpFallback: r() ? "png" : ""
    }
      , o = (a.prototype.set = function(t) {
      this.clear(),
        this.timer = setTimeout(t, this.debounceTime)
    }
      ,
      a.prototype.clear = function() {
        this.timer && clearTimeout(this.timer)
      }
      ,
      a);
    function a(t) {
      this.debounceTime = 1e3,
        this.timer = null,
        this.debounceTime = t
    }
    function s(t) {
      void 0 === t && (t = 1e3),
        this.MIN_TO_COLLAPSE = 2,
        this.warnings = [],
        this.errors = [],
        this.warningDebouncer = new o(t),
        this.errorDebouncer = new o(t)
    }
    var u = new (s.prototype.pushWarning = function(t) {
      var e = this;
      console.groupCollapsed ? (this.warnings.push(t),
        this.warningDebouncer.set(function() {
          return e.printWarnings()
        })) : console.warn("[BFS Warning]:", t)
    }
      ,
      s.prototype.printWarnings = function() {
        var t = this.warnings.length >= this.MIN_TO_COLLAPSE;
        for (t && console.groupCollapsed("[BFS Warning]: 有 " + this.warnings.length + " 个警告，点击查看."); 0 < this.warnings.length; ) {
          var e = this.warnings.shift();
          console.warn("[BFS Warning]:", e)
        }
        t && console.groupEnd()
      }
      ,
      s.prototype.pushError = function(t) {
        var e = this;
        console.groupCollapsed ? (this.errors.push(t),
          this.errorDebouncer.set(function() {
            return e.printError()
          })) : console.error("[BFS Error]:", t)
      }
      ,
      s.prototype.printError = function() {
        var t = this.errors.length >= this.MIN_TO_COLLAPSE;
        for (t && console.groupCollapsed("[BFS Error]: 有 " + this.errors.length + " 个错误，点击查看."); 0 < this.errors.length; ) {
          var e = this.errors.shift();
          console.error("[BFS Error]:", e)
        }
        t && console.groupEnd()
      }
      ,
      s)(1e3);
    function l(t, e) {
      void 0 === e && (e = !1),
      e && u.pushWarning(t)
    }
    function f(t, e) {
      void 0 === e && (e = !1),
      e && u.pushError(t)
    }
    var p = (h.prototype.set = function(t) {
      this.clear(),
      0 < t.length && (this.whiteList = t,
        this.setQuickMap())
    }
      ,
      h.prototype.get = function() {
        return this.whiteList
      }
      ,
      h.prototype.clear = function() {
        this.whiteList = [],
          this.initQuickMap()
      }
      ,
      h.prototype.initQuickMap = function() {
        this.whiteListQuickMap = {
          byWidth: [],
          byHeight: []
        }
      }
      ,
      h.prototype.setQuickMap = function() {
        var n = this;
        this.convertWhiteList().forEach(function(t) {
          if (c(t.width) && 0 < t.width && c(t.height) && 0 < t.height) {
            var e = t.width / t.height;
            n.whiteListQuickMap[e] || (n.whiteListQuickMap[e] = []),
              n.whiteListQuickMap[e].push(t)
          } else
            c(t.width) && 0 < t.width ? (n.whiteListQuickMap.byWidth || (n.whiteListQuickMap.byWidth = []),
              n.whiteListQuickMap.byWidth.push({
                width: t.width,
                height: "auto"
              })) : c(t.height) && 0 < t.height && (n.whiteListQuickMap.byHeight || (n.whiteListQuickMap.byHeight = []),
              n.whiteListQuickMap.byHeight.push({
                width: "auto",
                height: t.height
              }))
        }),
          this.sortQuickMap()
      }
      ,
      h.prototype.convertWhiteList = function() {
        return function(t) {
          return Array.from(new Set(t.map(function(t) {
            return JSON.stringify(t)
          }))).map(function(t) {
            return JSON.parse(t)
          })
        }(this.whiteList.map(function(t) {
          var e = t && t.split ? t.split("|") : [];
          return {
            width: e[0] && c(e[0].trim()) && 0 < parseInt(e[0].trim()) ? parseInt(e[0].trim()) : "auto",
            height: e[1] && c(e[1].trim()) && 0 < parseInt(e[1].trim()) ? parseInt(e[1].trim()) : "auto"
          }
        }))
      }
      ,
      h.prototype.sortQuickMap = function() {
        var n = this;
        Object.keys(this.whiteListQuickMap).forEach(function(t) {
          var e = n.whiteListQuickMap[t].sort(function(t, e) {
            return c(t.width) && c(e.width) ? t.width - e.width : c(t.height) && c(e.height) ? t.height - e.height : void 0
          });
          n.whiteListQuickMap[t] = e
        })
      }
      ,
      h.prototype.getMatchedSize = function(t, e) {
        var n = null;
        if (0 === this.whiteList.length)
          return t;
        var r = {
          width: "auto",
          height: "auto"
        };
        c(t.width) && 0 < t.width && c(t.height) && 0 < t.height ? n = t.width / t.height : c(t.width) && 0 < t.width ? n = "byWidth" : c(t.height) && 0 < t.height && (n = "byHeight");
        var i = n ? this.whiteListQuickMap[n] : [];
        if (i && 0 < i.length) {
          var o = e ? this.fuzzyMatch(i, t) : this.exactMatch(i, t);
          0 < o.length ? (r = o[0],
          t.width === r.width && t.height === r.height || l(t.width + " x " + t.height + " 在白名单中不存在，向上匹配得到 " + r.width + " x " + r.height)) : l("找不到与 " + t.width + " x " + t.height + " 匹配的白名单尺寸. 将使用原始尺寸.")
        } else
          l("找不到与 " + t.width + " x " + t.height + " 匹配的白名单尺寸. 将使用原始尺寸.");
        return r
      }
      ,
      h.prototype.fuzzyMatch = function(t, e) {
        return t.filter(function(t) {
          return c(t.width) ? t.width >= e.width : t.height >= e.height
        })
      }
      ,
      h.prototype.exactMatch = function(t, e) {
        return t.filter(function(t) {
          return c(t.width) ? t.width === e.width : t.height === e.height
        })
      }
      ,
      h);
    function h(t) {
      void 0 === t && (t = []),
        this.whiteList = [],
        this.whiteListQuickMap = {
          byWidth: [],
          byHeight: []
        },
      t.length && this.set(t)
    }
    var d = function() {
      if (!r())
        return !0;
      try {
        var t = document.createElement("canvas");
        if (!t.getContext || !t.getContext("2d"))
          return !1;
        try {
          return 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
        } catch (t) {
          return !1
        }
      } catch (t) {
        return !1
      }
    }();
    function v(t) {
      if (t && t.split)
        return t.split(".").pop().toLowerCase()
    }
    function y(t) {
      if (!t || !function(t) {
        return "string" == typeof t || t instanceof String
      }(t))
        return f("URL 应该为 string 类型."),
          !1;
      return -1 === ["jpg", "jpeg", "png", "webp", "gif"].indexOf(v(t)) ? (f(t + " 不是支持的文件格式."),
        !1) : ("webp" === v(t) && l(t + " 是webp格式的文件。建议通过配置参数 webp: true 使用webp格式，以便在不支持的浏览器上降级."),
      -1 !== t.indexOf("/bfs/") || (l(t + " 不是 bfs 路径."),
        !1))
    }
    function m(t, e) {
      return e && "" !== e ? t + "?" + e : t
    }
    function g(t) {
      var e = t;
      if (t && t.slice && t.indexOf) {
        var n = t.indexOf("@");
        -1 < n && (e = t.slice(0, n))
      }
      return e
    }
    function b(t, e, n) {
      return t += -1 === t.indexOf("@") ? "@" : "_",
        t += n + e
    }
    function w(t) {
      return -1 < t.indexOf("@")
    }
    var _ = (L.prototype.getImageLink = function(t, e, n, r) {
      void 0 === e && (e = "auto"),
      void 0 === n && (n = "auto"),
      void 0 === r && (r = {});
      var i = Object.assign({}, this.defaultOpts, r)
        , o = r.whiteList ? new p(r.whiteList) : this.whiteList
        , a = function(t) {
        var e = "";
        return t && t.split && (e = t.split("?")[1]),
          e
      }(t);
      return y(g(t = function(t) {
        var e = t;
        if (t && t.slice && t.indexOf) {
          var n = t.indexOf("?");
          -1 < n && (e = t.slice(0, n))
        }
        return e
      }(t))) ? m(t = function(t, e) {
        var n = v(g(t))
          , r = n;
        return e.webp && ("gif" !== n || e.s) && d && (r = "webp"),
        !d && "webp" === r && e.webpFallback && (r = e.webpFallback),
          w(t) || n === r ? w(t) && (t += "." + r) : t += "@." + r,
          t
      }(t = function(e, n) {
        return ["e", "p", "c", "rc", "a", "bl", "q", "o", "s"].forEach(function(t) {
          void 0 !== n[t] && (e = b(e, t, n[t]))
        }),
          e
      }(t = function(t) {
        return t
      }(t = function(t, e, n, r, i) {
        var o = r.getMatchedSize({
          width: e,
          height: n
        }, i.fuzzyMatch)
          , a = o.width
          , s = o.height;
        return c(a) && 0 < a && (t = b(t, "w", a)),
        c(s) && 0 < s && (t = b(t, "h", s)),
          t
      }(t = g(t), e, n, o, i), i.watermark), i), i), a) : m(t, a)
    }
      ,
      L.prototype.getWhiteList = function() {
        return this.whiteList.get()
      }
      ,
      L.prototype.setWhiteList = function(t) {
        void 0 === t && (t = []),
          this.whiteList.set(t)
      }
      ,
      L.prototype.clearWhiteList = function() {
        this.whiteList.clear()
      }
      ,
      L);
    function L(t) {
      void 0 === t && (t = {}),
        this.defaultOpts = i,
        this.whiteList = new p,
        Object.assign(this.defaultOpts, t),
        this.setWhiteList(this.defaultOpts.whiteList)
    }
    e.a = _
  },
  FDjc: function(t, e, n) {},
  J3ON: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return r
    });
    var a = n("fDnD");
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    function s(o, a, s, c) {
      return new (s || (s = Promise))(function(t, e) {
          function n(t) {
            try {
              i(c.next(t))
            } catch (t) {
              e(t)
            }
          }
          function r(t) {
            try {
              i(c.throw(t))
            } catch (t) {
              e(t)
            }
          }
          function i(e) {
            e.done ? t(e.value) : new s(function(t) {
                t(e.value)
              }
            ).then(n, r)
          }
          i((c = c.apply(o, a || [])).next())
        }
      )
    }
    function c(n, r) {
      var i, o, a, t, s = {
        label: 0,
        sent: function() {
          if (1 & a[0])
            throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return t = {
        next: e(0),
        throw: e(1),
        return: e(2)
      },
      "function" == typeof Symbol && (t[Symbol.iterator] = function() {
          return this
        }
      ),
        t;
      function e(e) {
        return function(t) {
          return function(e) {
            if (i)
              throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (i = 1,
                o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o),
                  0) : o.next) && !(a = a.call(o, e[1])).done)
                  return a;
                switch (o = 0,
                a && (e = [2 & e[0], a.value]),
                  e[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return s.label++,
                      {
                        value: e[1],
                        done: !1
                      };
                  case 5:
                    s.label++,
                      o = e[1],
                      e = [0];
                    continue;
                  case 7:
                    e = s.ops.pop(),
                      s.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      s.label = e[1];
                      break
                    }
                    if (6 === e[0] && s.label < a[1]) {
                      s.label = a[1],
                        a = e;
                      break
                    }
                    if (a && s.label < a[2]) {
                      s.label = a[2],
                        s.ops.push(e);
                      break
                    }
                    a[2] && s.ops.pop(),
                      s.trys.pop();
                    continue
                }
                e = r.call(n, s)
              } catch (t) {
                e = [6, t],
                  o = 0
              } finally {
                i = a = 0
              }
            if (5 & e[0])
              throw e[1];
            return {
              value: e[0] ? e[1] : void 0,
              done: !0
            }
          }([e, t])
        }
      }
    }
    var u = [66, 73, 76, 73, 67, 79, 77, 73, 67]
      , l = u.length;
    function r(r, i, o) {
      return s(this, void 0, void 0, function() {
        var e, n;
        return c(this, function(t) {
          switch (t.label) {
            case 0:
              if (!f(r) || !f(i))
                throw new TypeError("[Indexer] Both seasonId and episodeId should be number.");
              if (null,
              "string" == typeof o && (o = function(t) {
                for (var e = atob(t.split(",")[1] || t), n = new ArrayBuffer(e.length), r = new Uint8Array(n), i = 0; i < e.length; i++)
                  r[i] = e.charCodeAt(i);
                return r
              }(o)),
                e = null,
              !o.length || !function(n) {
                var r = !0;
                return u.some(function(t, e) {
                  if (n[e] !== u[e])
                    return !(r = !1)
                }),
                  r
              }(o))
                throw new TypeError("[Indexer] Invalid index data.");
              return e = o.slice(l),
                n = function(t, e) {
                  var n = new Uint8Array(new ArrayBuffer(8));
                  return n[0] = e,
                    n[1] = e >> 8,
                    n[2] = e >> 16,
                    n[3] = e >> 24,
                    n[4] = t,
                    n[5] = t >> 8,
                    n[6] = t >> 16,
                    n[7] = t >> 24,
                    n
                }(r, i),
                function(t, e) {
                  for (var n = 0, r = t.length; n < r; n++)
                    t[n] = t[n] ^ e[n % 8]
                }(e, n),
                [4, function(o) {
                  return s(this, void 0, void 0, function() {
                    var e, n, r, i;
                    return c(this, function(t) {
                      switch (t.label) {
                        case 0:
                          e = "index.dat",
                            r = n = null,
                            t.label = 1;
                        case 1:
                          return t.trys.push([1, 3, , 4]),
                            [4, Object(a.loadAsync)(o)];
                        case 2:
                          return n = t.sent(),
                            [3, 4];
                        case 3:
                          throw t.sent();
                        case 4:
                          if (!(i = n.files[e]))
                            throw new Error('[Indexer] Can not find file "' + e + '".');
                          t.label = 5;
                        case 5:
                          return t.trys.push([5, 7, , 8]),
                            [4, i.async("text")];
                        case 6:
                          return r = t.sent(),
                            [3, 8];
                        case 7:
                          throw t.sent();
                        case 8:
                          return [2, r]
                      }
                    })
                  })
                }(e)];
            case 1:
              return [2, t.sent()]
          }
        })
      })
    }
    function f(t) {
      return "number" == typeof t
    }
  },
  Y6y7: function(t, e, n) {
    var r, i, o;
    window,
      t.exports = (r = n("YKMj"),
        i = n("t/UT"),
        o = n("oCYn"),
        function(n) {
          var r = {};
          function i(t) {
            if (r[t])
              return r[t].exports;
            var e = r[t] = {
              i: t,
              l: !1,
              exports: {}
            };
            return n[t].call(e.exports, e, e.exports, i),
              e.l = !0,
              e.exports
          }
          return i.m = n,
            i.c = r,
            i.d = function(t, e, n) {
              i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
              })
            }
            ,
            i.r = function(t) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
              }),
                Object.defineProperty(t, "__esModule", {
                  value: !0
                })
            }
            ,
            i.t = function(e, t) {
              if (1 & t && (e = i(e)),
              8 & t)
                return e;
              if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
              var n = Object.create(null);
              if (i.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
              2 & t && "string" != typeof e)
                for (var r in e)
                  i.d(n, r, function(t) {
                    return e[t]
                  }
                    .bind(null, r));
              return n
            }
            ,
            i.n = function(t) {
              var e = t && t.__esModule ? function() {
                  return t.default
                }
                : function() {
                  return t
                }
              ;
              return i.d(e, "a", e),
                e
            }
            ,
            i.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            i.p = "/",
            i(i.s = "/7QA")
        }({
          "/7QA": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {};
            n.r(r),
              n.d(r, "AppComment", function() {
                return R
              });
            var i = {};
            n.r(i),
              n.d(i, "AppButton", function() {
                return T
              }),
              n.d(i, "DialogLayout", function() {
                return $
              }),
              n.d(i, "DropBox", function() {
                return H
              }),
              n.d(i, "ItemsControl", function() {
                return Z
              }),
              n.d(i, "ListView", function() {
                return it
              }),
              n.d(i, "MultiLineText", function() {
                return ut
              }),
              n.d(i, "VerticalCenter", function() {
                return F
              });
            var o = n("lwsE")
              , a = n.n(o)
              , s = n("W8MJ")
              , c = n.n(s)
              , u = n("a1gu")
              , l = n.n(u)
              , f = n("Nsbk")
              , p = n.n(f)
              , h = n("7W2i")
              , d = n.n(h)
              , v = n("cDf5")
              , y = n.n(v)
              , m = n("o0o1")
              , g = n.n(m)
              , b = !1
              , w = !1
              , _ = function() {
              function i(t) {
                a()(this, i),
                  this.option = null,
                  this.comment = null;
                var e = t.commentId
                  , n = t.commentType
                  , r = t.selector;
                e && n ? r ? (this.option = Object.assign({}, t, {
                  jumpId: t.jumpId || this.getJumpIdFromUrl()
                }),
                  this.init()) : console.error("[BiliComment] 需要传入节点选择器.") : console.error("[BiliComment] 需要指定评论 ID 和 Type.")
              }
              return c()(i, [{
                key: "initComment",
                value: function() {
                  var t = this.option
                    , e = t.commentId
                    , n = t.commentType
                    , r = t.selector
                    , i = t.jumpId
                    , o = t.noLevelLimit
                    , a = new window.bbComment(r,{
                    oid: e,
                    pageType: n,
                    jumpId: i,
                    noLevelLimit: o
                  });
                  this.comment = a
                }
              }, {
                key: "getJumpIdFromUrl",
                value: function() {
                  var t = null;
                  try {
                    var e = window.location.hash.match(/#reply\d+/g);
                    e && (t = e[0].match(/\d+/g)[0])
                  } catch (t) {
                    console.error("[BiliComment] 获取评论跳转 ID 失败, 将不做跳转:", t)
                  }
                  return t
                }
              }, {
                key: "init",
                value: function() {
                  return function(o, a, s, c) {
                    return new (s || (s = Promise))(function(t, e) {
                        function n(t) {
                          try {
                            i(c.next(t))
                          } catch (t) {
                            e(t)
                          }
                        }
                        function r(t) {
                          try {
                            i(c.throw(t))
                          } catch (t) {
                            e(t)
                          }
                        }
                        function i(e) {
                          e.done ? t(e.value) : new s(function(t) {
                              t(e.value)
                            }
                          ).then(n, r)
                        }
                        i((c = c.apply(o, a || [])).next())
                      }
                    )
                  }(this, void 0, void 0, g.a.mark(function t() {
                    return g.a.wrap(function(t) {
                      for (; ; )
                        switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0,
                              t.next = 3,
                              new Promise(function(t, e) {
                                  if (w || void 0 !== window.bbComment)
                                    return t();
                                  var n = document.createElement("link");
                                  n.rel = "stylesheet",
                                    n.href = "//static.hdslb.com/phoenix/dist/css/comment.min.css",
                                    n.onload = function() {
                                      w = !0,
                                        t()
                                    }
                                    ,
                                    n.onabort = function() {
                                      e(new Error("[BiliComment] 评论 CSS 加载已被取消."))
                                    }
                                    ,
                                    n.onerror = function() {
                                      e(new Error("[BiliComment] 评论 CSS 载入失败."))
                                    }
                                    ,
                                    document.head.appendChild(n)
                                }
                              );
                          case 3:
                            return t.next = 5,
                              new Promise(function(t, e) {
                                  if (b || void 0 !== window.bbComment)
                                    return t();
                                  var n = document.createElement("script");
                                  n.src = "//static.hdslb.com/phoenix/dist/js/comment.min.js",
                                    n.onload = function() {
                                      b = !0,
                                        t()
                                    }
                                    ,
                                    n.onabort = function() {
                                      e(new Error("[BiliComment] 评论 JS 加载已被取消."))
                                    }
                                    ,
                                    n.onerror = function() {
                                      e(new Error("[BiliComment] 评论 JS 载入失败."))
                                    }
                                    ,
                                    document.body.appendChild(n)
                                }
                              );
                          case 5:
                            this.initComment(),
                              t.next = 11;
                            break;
                          case 8:
                            t.prev = 8,
                              t.t0 = t.catch(0),
                              console.error("[BiliComment] 初始化失败:", t.t0);
                          case 11:
                          case "end":
                            return t.stop()
                        }
                    }, t, this, [[0, 8]])
                  }))
                }
              }]),
                i
            }()
              , L = n("i7/w")
              , k = n.n(L)
              , x = n("Aaa2")
              , S = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , O = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , C = function(t) {
              function e() {
                var t;
                return a()(this, e),
                  (t = l()(this, p()(e).apply(this, arguments))).comment = null,
                  t
              }
              return d()(e, t),
                c()(e, [{
                  key: "initComment",
                  value: function() {
                    var t = new _({
                      commentId: this.id,
                      commentType: this.type,
                      selector: this.commentMounter,
                      noLevelLimit: this.noLevelLimit
                    });
                    this.comment = t
                  }
                }, {
                  key: "mounted",
                  value: function() {
                    "number" == typeof this.id && "number" == typeof this.type ? this.initComment() : console.error("[components/app-comment] 评论 ID 和 Type 应为数字类型.")
                  }
                }, {
                  key: "commentMounter",
                  get: function() {
                    return this.$refs.commentMounter
                  }
                }]),
                e
            }(k.a);
            S([Object(x.Prop)({
              type: Number,
              default: 0
            }), O("design:type", Number)], C.prototype, "id", void 0),
              S([Object(x.Prop)({
                type: Number,
                default: 4
              }), O("design:type", Number)], C.prototype, "type", void 0),
              S([Object(x.Prop)({
                type: Boolean,
                default: !1
              }), O("design:type", Boolean)], C.prototype, "noLevelLimit", void 0);
            var j = C = S([x.Component], C);
            function E(t, e, n, r, i, o, a, s) {
              var c, u = "function" == typeof t ? t.options : t;
              if (e && (u.render = e,
                u.staticRenderFns = n,
                u._compiled = !0),
              r && (u.functional = !0),
              o && (u._scopeId = "data-v-" + o),
                a ? (c = function(t) {
                  (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(a)
                }
                  ,
                  u._ssrRegister = c) : i && (c = s ? function() {
                    i.call(this, this.$root.$options.shadowRoot)
                  }
                  : i),
                c)
                if (u.functional) {
                  u._injectStyles = c;
                  var l = u.render;
                  u.render = function(t, e) {
                    return c.call(e),
                      l(t, e)
                  }
                } else {
                  var f = u.beforeCreate;
                  u.beforeCreate = f ? [].concat(f, c) : [c]
                }
              return {
                exports: t,
                options: u
              }
            }
            n("hNEI");
            var R = E(j, function() {
              var t = this.$createElement
                , e = this._self._c || t;
              return e("div", {
                staticClass: "app-comment"
              }, [e("div", {
                ref: "commentMounter",
                staticClass: "comment-mounter"
              })])
            }, [], !1, null, "41e77c35", null).exports
              , I = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , P = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , M = function(t) {
              function e() {
                return a()(this, e),
                  l()(this, p()(e).apply(this, arguments))
              }
              return d()(e, t),
                c()(e, [{
                  key: "onClick",
                  value: function(t) {
                    this.$emit("click", t)
                  }
                }, {
                  key: "buttonStyle",
                  get: function() {
                    return {
                      width: "number" == typeof this.width ? this.width + "px" : this.width,
                      height: "number" == typeof this.height ? this.height + "px" : this.height
                    }
                  }
                }]),
                e
            }(k.a);
            I([Object(x.Prop)({
              type: [Number, String]
            }), P("design:type", Number)], M.prototype, "width", void 0),
              I([Object(x.Prop)({
                type: [Number, String]
              }), P("design:type", Number)], M.prototype, "height", void 0),
              I([Object(x.Prop)({
                type: String
              }), P("design:type", String)], M.prototype, "type", void 0),
              I([Object(x.Prop)({
                type: String,
                default: "primary"
              }), P("design:type", String)], M.prototype, "theme", void 0),
              I([Object(x.Prop)({
                type: Boolean,
                default: !1
              }), P("design:type", Boolean)], M.prototype, "disabled", void 0);
            var N = M = I([x.Component], M)
              , T = (n("bELQ"),
              E(N, function() {
                var t = this
                  , e = t.$createElement;
                return (t._self._c || e)("button", {
                  staticClass: "app-button",
                  class: t.theme,
                  style: t.buttonStyle,
                  attrs: {
                    type: t.type,
                    disabled: t.disabled
                  },
                  on: {
                    click: t.onClick
                  }
                }, [t._t("default")], 2)
              }, [], !1, null, "2814537a", null).exports)
              , F = (n("/8r8"),
              E({}, function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                  staticClass: "vertical-center dp-table h-100 m-auto"
                }, [e("div", {
                  staticClass: "dp-table-cell v-middle"
                }, [this._t("default")], 2)])
              }, [], !1, null, "a52ed26c", null).exports)
              , B = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , W = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , D = function(t) {
              function e() {
                var t;
                return a()(this, e),
                  (t = l()(this, p()(e).apply(this, arguments))).isShowLayout = !1,
                  t
              }
              return d()(e, t),
                c()(e, [{
                  key: "onBackgroundClick",
                  value: function() {
                    this.clickToClose && this.$emit("input", !1)
                  }
                }, {
                  key: "afterLeave",
                  value: function() {
                    this.isShowLayout = !1
                  }
                }, {
                  key: "onWatchValue",
                  value: function(t) {
                    t && (this.isShowLayout = !0)
                  }
                }, {
                  key: "created",
                  value: function() {
                    this.isShowLayout = this.value
                  }
                }]),
                e
            }(k.a);
            B([Object(x.Prop)({
              type: String,
              default: "rgba(0, 0, 0, .5)"
            }), W("design:type", String)], D.prototype, "backgroundColor", void 0),
              B([Object(x.Prop)({
                type: String
              }), W("design:type", String)], D.prototype, "backgrondEnterClass", void 0),
              B([Object(x.Prop)({
                type: String
              }), W("design:type", String)], D.prototype, "backgroundLeaveClass", void 0),
              B([Object(x.Prop)({
                type: String
              }), W("design:type", String)], D.prototype, "slotEnterClass", void 0),
              B([Object(x.Prop)({
                type: String
              }), W("design:type", String)], D.prototype, "slotLeaveClass", void 0),
              B([Object(x.Prop)({
                type: Boolean,
                default: !1
              }), W("design:type", Boolean)], D.prototype, "value", void 0),
              B([Object(x.Prop)({
                type: Boolean,
                default: !1
              }), W("design:type", Boolean)], D.prototype, "clickToClose", void 0),
              B([Object(x.Watch)("value"), W("design:type", Function), W("design:paramtypes", [Boolean]), W("design:returntype", void 0)], D.prototype, "onWatchValue", null);
            var Q = D = B([Object(x.Component)({
              components: {
                VerticalCenter: F
              }
            })], D)
              , $ = (n("oNJN"),
              E(Q, function() {
                var t = this
                  , e = t.$createElement
                  , n = t._self._c || e;
                return n("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShowLayout,
                    expression: "isShowLayout"
                  }],
                  staticClass: "dialog-layout"
                }, [n("transition", {
                  attrs: {
                    "enter-active-class": t.backgrondEnterClass,
                    "leave-active-class": t.backgroundLeaveClass
                  },
                  on: {
                    "after-leave": t.afterLeave
                  }
                }, [n("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.value,
                    expression: "value"
                  }],
                  staticClass: "layout-background",
                  style: {
                    "background-color": t.backgroundColor
                  },
                  on: {
                    click: t.onBackgroundClick
                  }
                })]), n("transition", {
                  attrs: {
                    "enter-active-class": t.slotEnterClass,
                    "leave-active-class": t.slotLeaveClass
                  }
                }, [n("vertical-center", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.value,
                    expression: "value"
                  }]
                }, [t._t("default")], 2)], 1)], 1)
              }, [], !1, null, "45efe843", null).exports)
              , A = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , J = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , z = function(t) {
              function e() {
                var t;
                return a()(this, e),
                  (t = l()(this, p()(e).apply(this, arguments))).isShowingList = !1,
                  t
              }
              return d()(e, t),
                c()(e, [{
                  key: "openList",
                  value: function() {
                    this.isShowingList = !0
                  }
                }, {
                  key: "closeList",
                  value: function() {
                    this.isShowingList = !1
                  }
                }, {
                  key: "toggleList",
                  value: function() {
                    this.isShowingList = !this.isShowingList
                  }
                }, {
                  key: "select",
                  value: function(t) {
                    this.$emit("input", t),
                      this.closeList()
                  }
                }, {
                  key: "setClosingEvent",
                  value: function() {
                    var t = this;
                    setTimeout(function() {
                      return window.addEventListener("click", t.closeList)
                    }, 1)
                  }
                }, {
                  key: "removeClosingEvent",
                  value: function() {
                    var t = this;
                    setTimeout(function() {
                      return window.removeEventListener("click", t.closeList)
                    }, 1)
                  }
                }, {
                  key: "onWatchListShowing",
                  value: function(t) {
                    t ? this.setClosingEvent() : this.removeClosingEvent()
                  }
                }, {
                  key: "onWatchDataList",
                  value: function(t) {
                    this.$emit("input", null)
                  }
                }]),
                e
            }(k.a);
            A([Object(x.Prop)({
              type: Array,
              default: function() {
                return []
              }
            }), J("design:type", Array)], z.prototype, "options", void 0),
              A([Object(x.Prop)({
                type: Object
              }), J("design:type", Object)], z.prototype, "value", void 0),
              A([Object(x.Prop)({
                type: String,
                default: "请选择..."
              }), J("design:type", String)], z.prototype, "defaultLabel", void 0),
              A([Object(x.Watch)("isShowingList"), J("design:type", Function), J("design:paramtypes", [Boolean]), J("design:returntype", void 0)], z.prototype, "onWatchListShowing", null),
              A([Object(x.Watch)("options"), J("design:type", Function), J("design:paramtypes", [Array]), J("design:returntype", void 0)], z.prototype, "onWatchDataList", null);
            var V = z = A([x.Component], z)
              , H = (n("M3W5"),
              E(V, function() {
                var n = this
                  , t = n.$createElement
                  , r = n._self._c || t;
                return r("div", {
                  staticClass: "dropbox-component",
                  class: {
                    "is-open": n.isShowingList
                  },
                  on: {
                    click: n.toggleList
                  }
                }, [r("div", {
                  staticClass: "current"
                }, [n._v(n._s(n.value ? n.value.label : n.defaultLabel))]), r("div", {
                  staticClass: "triangle",
                  class: {
                    "is-open": n.isShowingList
                  }
                }, [r("span", {
                  staticClass: "arrow-icon"
                })]), r("ul", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.isShowingList,
                    expression: "isShowingList"
                  }],
                  staticClass: "data-list"
                }, n._l(n.options, function(e) {
                  return r("li", {
                    directives: [{
                      name: "show",
                      rawName: "v-show",
                      value: e.label !== (n.value || {}).label,
                      expression: "item.label !== (value || {}).label"
                    }],
                    on: {
                      click: function(t) {
                        return n.select(e)
                      },
                      keyup: function(t) {
                        return t.type.indexOf("key") || 13 === t.keyCode ? n.select(e) : null
                      }
                    }
                  }, [n._v(n._s(e.label))])
                }), 0)])
              }, [], !1, null, "27293bb3", null).exports)
              , q = n("cQoj")
              , U = n.n(q)
              , G = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , Y = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , X = function(t) {
              function e() {
                var t;
                return a()(this, e),
                  (t = l()(this, p()(e).apply(this, arguments))).dataList = [],
                  t.page = 1,
                  t.hasMoreItems = !0,
                  t.inLoading = !1,
                  t.isLoadingFailed = !1,
                  t
              }
              return d()(e, t),
                c()(e, [{
                  key: "getItemIndex",
                  value: function(t) {
                    return this.dataList.indexOf(t)
                  }
                }, {
                  key: "removeItemByIndex",
                  value: function(t) {
                    t < 0 || t > this.dataList.length - 1 || this.dataList.splice(t, 1)
                  }
                }, {
                  key: "retry",
                  value: function() {
                    this.isLoadingFailed = !1,
                      this.loadData()
                  }
                }, {
                  key: "loadData",
                  value: function() {
                    return function(o, a, s, c) {
                      return new (s || (s = Promise))(function(t, e) {
                          function n(t) {
                            try {
                              i(c.next(t))
                            } catch (t) {
                              e(t)
                            }
                          }
                          function r(t) {
                            try {
                              i(c.throw(t))
                            } catch (t) {
                              e(t)
                            }
                          }
                          function i(e) {
                            e.done ? t(e.value) : new s(function(t) {
                                t(e.value)
                              }
                            ).then(n, r)
                          }
                          i((c = c.apply(o, a || [])).next())
                        }
                      )
                    }(this, void 0, void 0, g.a.mark(function t() {
                      var e, n, r, i, o = this;
                      return g.a.wrap(function(t) {
                        for (; ; )
                          switch (t.prev = t.next) {
                            case 0:
                              if (this.inLoading || !this.hasMoreItems || "function" != typeof this.invokeFunction || this.isLoadingFailed)
                                return t.abrupt("return");
                              t.next = 2;
                              break;
                            case 2:
                              return this.inLoading = !0,
                                e = this.$parent,
                                t.next = 6,
                                this.invokeFunction.call(e, {
                                  page: this.page,
                                  pageSize: this.loadCount
                                });
                            case 6:
                              if (n = t.sent,
                                r = n.data,
                                i = n.error,
                                this.inLoading = !1,
                                i)
                                return "function" == typeof this.onError && this.onError(i),
                                  this.isLoadingFailed = !0,
                                  t.abrupt("return");
                              t.next = 14;
                              break;
                            case 14:
                              r.forEach(function(t) {
                                return o.dataList.push(t)
                              }),
                                this.hasMoreItems = 0 < r.length,
                                this.updatePs(),
                                this.page++;
                            case 18:
                            case "end":
                              return t.stop()
                          }
                      }, t, this)
                    }))
                  }
                }, {
                  key: "initPs",
                  value: function() {
                    var t = this.$refs.dataList;
                    this.ps = new U.a(t,{
                      suppressScrollX: !0
                    }),
                      t.addEventListener("ps-y-reach-end", this.onScrollToEnd)
                  }
                }, {
                  key: "updatePs",
                  value: function() {
                    var t = this;
                    this.$nextTick(function() {
                      return t.ps && t.ps.update()
                    })
                  }
                }, {
                  key: "destroyPs",
                  value: function() {
                    this.ps && this.ps.destroy(),
                      this.ps = null,
                      this.$refs.dataList.removeEventListener("ps-y-reach-end", this.onScrollToEnd)
                  }
                }, {
                  key: "onScrollToEnd",
                  value: function() {
                    this.loadData()
                  }
                }, {
                  key: "resetState",
                  value: function() {
                    this.dataList = [],
                      this.page = 1,
                      this.hasMoreItems = !0,
                      this.inLoading = !1,
                      this.isLoadingFailed = !1
                  }
                }, {
                  key: "reset",
                  value: function() {
                    this.resetState(),
                      this.updatePs(),
                      this.loadData()
                  }
                }, {
                  key: "mounted",
                  value: function() {
                    this.initPs(),
                      this.loadData()
                  }
                }, {
                  key: "beforeDestroy",
                  value: function() {
                    this.destroyPs(),
                      this.resetState()
                  }
                }]),
                e
            }(k.a);
            G([Object(x.Prop)({
              type: Number,
              default: 10
            }), Y("design:type", Number)], X.prototype, "loadCount", void 0),
              G([Object(x.Prop)({
                type: Function
              }), Y("design:type", Function)], X.prototype, "invokeFunction", void 0),
              G([Object(x.Prop)({
                type: Function
              }), Y("design:type", Function)], X.prototype, "onError", void 0);
            var K = X = G([x.Component], X)
              , Z = (n("tBKS"),
              E(K, function() {
                var n = this
                  , t = n.$createElement
                  , r = n._self._c || t;
                return r("div", {
                  ref: "dataList",
                  staticClass: "items-control p-relative border-box"
                }, [r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.dataList.length,
                    expression: "dataList.length"
                  }],
                  staticClass: "p-relative"
                }, [n._l(n.dataList, function(t, e) {
                  return n._t("default", [r("p", [n._v(n._s(t))])], {
                    data: t,
                    index: e
                  })
                }), r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !n.isLoadingFailed,
                    expression: "!isLoadingFailed"
                  }],
                  staticClass: "status-controls"
                }, [r("span", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.inLoading,
                    expression: "inLoading"
                  }]
                }, [n._v("载入中... " + n._s(n.$emoji.happy()))]), r("span", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !n.hasMoreItems,
                    expression: "!hasMoreItems"
                  }]
                }, [n._v("木有更多惹 " + n._s(n.$emoji.helpless()))])]), r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.isLoadingFailed,
                    expression: "isLoadingFailed"
                  }],
                  staticClass: "status-controls"
                }, [n._t("errorControl", [r("div", {
                  staticClass: "error-hinter a-move-in-left"
                }, [r("p", [n._v("数据载入失败，非常抱歉 " + n._s(n.$emoji.sad()))]), r("p", [n._v("您可以点击下方按钮进行重试喔 " + n._s(n.$emoji.happy()))]), r("manga-button", {
                  attrs: {
                    theme: "error"
                  },
                  on: {
                    click: n.retry
                  }
                }, [n._v("重试")])], 1)])], 2)], 2), r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !n.dataList.length,
                    expression: "!dataList.length"
                  }]
                }, [n.isLoadingFailed ? [n._t("errorControl", [r("div", {
                  staticClass: "error-hinter a-move-in-left"
                }, [r("p", [n._v("数据载入失败，非常抱歉 " + n._s(n.$emoji.sad()))]), r("p", [n._v("您可以点击下方按钮进行重试喔 " + n._s(n.$emoji.happy()))]), r("manga-button", {
                  attrs: {
                    theme: "error"
                  },
                  on: {
                    click: n.retry
                  }
                }, [n._v("重新载入")])], 1)])] : [r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !n.inLoading,
                    expression: "!inLoading"
                  }],
                  staticClass: "p-relative"
                }, [n._t("emptyHinter")], 2), r("div", {
                  directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: n.inLoading,
                    expression: "inLoading"
                  }],
                  staticClass: "status-controls"
                }, [n._v("载入中... " + n._s(n.$emoji.happy()))])]], 2)])
              }, [], !1, null, "1c34f0ae", null).exports)
              , tt = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , et = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , nt = function(t) {
              function e() {
                var t;
                return a()(this, e),
                  (t = l()(this, p()(e).apply(this, arguments))).ps = null,
                  t
              }
              return d()(e, t),
                c()(e, [{
                  key: "initPs",
                  value: function() {
                    this.ps = new U.a(this.listContainer,{
                      suppressScrollX: this.noScrollX,
                      suppressScrollY: this.noScrollY
                    })
                  }
                }, {
                  key: "updatePs",
                  value: function() {
                    var t = this;
                    this.$nextTick(function() {
                      return t.ps.update()
                    })
                  }
                }, {
                  key: "destroyPs",
                  value: function() {
                    this.ps.destroy(),
                      this.ps = null
                  }
                }, {
                  key: "mounted",
                  value: function() {
                    this.initPs()
                  }
                }, {
                  key: "beforeDestroy",
                  value: function() {
                    this.destroyPs()
                  }
                }, {
                  key: "listContainer",
                  get: function() {
                    return this.$refs.listContainer
                  }
                }]),
                e
            }(k.a);
            tt([Object(x.Prop)({
              type: Boolean,
              default: !0
            }), et("design:type", Boolean)], nt.prototype, "noScrollX", void 0),
              tt([Object(x.Prop)({
                type: Boolean,
                default: !1
              }), et("design:type", Boolean)], nt.prototype, "noScrollY", void 0);
            var rt = nt = tt([x.Component], nt)
              , it = (n("RceT"),
              E(rt, function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                  staticClass: "list-view"
                }, [e("div", {
                  ref: "listContainer",
                  staticClass: "list-container"
                }, [this._t("default")], 2)])
              }, [], !1, null, "7d90615a", null).exports)
              , ot = function(t, e, n, r) {
              var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, n, r);
              else
                for (var s = t.length - 1; 0 <= s; s--)
                  (i = t[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(e, n, a) : i(e, n)) || a);
              return 3 < o && a && Object.defineProperty(e, n, a),
                a
            }
              , at = function(t, e) {
              if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
                return Reflect.metadata(t, e)
            }
              , st = function(t) {
              function e() {
                return a()(this, e),
                  l()(this, p()(e).apply(this, arguments))
              }
              return d()(e, t),
                c()(e, [{
                  key: "style",
                  get: function() {
                    return {
                      "max-height": this.displayLine * this.lineHeight + "em",
                      "line-height": this.lineHeight
                    }
                  }
                }, {
                  key: "titleForView",
                  get: function() {
                    var t = ((this.$slots.default || [])[0] || {
                      text: ""
                    }).text;
                    return this.title || t
                  }
                }]),
                e
            }(k.a);
            ot([Object(x.Prop)({
              type: Number,
              default: 2
            }), at("design:type", Number)], st.prototype, "displayLine", void 0),
              ot([Object(x.Prop)({
                type: Number,
                default: 1.3
              }), at("design:type", Number)], st.prototype, "lineHeight", void 0),
              ot([Object(x.Prop)({
                type: String,
                default: ""
              }), at("design:type", String)], st.prototype, "title", void 0);
            var ct = st = ot([x.Component], st)
              , ut = (n("mXtn"),
              E(ct, function() {
                var t = this
                  , e = t.$createElement;
                return (t._self._c || e)("div", {
                  staticClass: "multi-line-text",
                  style: t.style,
                  attrs: {
                    title: t.titleForView
                  }
                }, [t._t("default")], 2)
              }, [], !1, null, "12e8c17c", null).exports);
            n.d(e, "FirebirdComponent", function() {
              return lt
            }),
              n.d(e, "Business", function() {
                return r
              }),
              n.d(e, "Core", function() {
                return i
              });
            var lt = function() {
              function t() {
                a()(this, t)
              }
              return c()(t, null, [{
                key: "install",
                value: function(e) {
                  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Object.create(null)
                    , n = "string" == typeof t.prefix ? t.prefix : "jk";
                  [["app-comment", R], ["app-button", T], ["dialog-layout", $], ["dropbox", H], ["items-control", Z], ["list-view", it], ["multi-line-text", ut], ["vertical-center", F]].forEach(function(t) {
                    e.component("".concat(n, "-").concat(t[0]), t[1])
                  })
                }
              }]),
                t
            }()
          },
          "/8r8": function(t, e, n) {
            "use strict";
            var r = n("jQtC");
            n.n(r).a
          },
          "7W2i": function(t, e, n) {
            var r = n("SksO");
            t.exports = function(t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
              t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
                }
              }),
              e && r(t, e)
            }
          },
          "7vIo": function(t, e, n) {},
          "8WpC": function(t, e, n) {},
          Aaa2: function(t, e) {
            t.exports = r
          },
          FmSU: function(t, e, n) {},
          M3W5: function(t, e, n) {
            "use strict";
            var r = n("UNq5");
            n.n(r).a
          },
          Nsbk: function(e, t) {
            function n(t) {
              return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }
                ,
                n(t)
            }
            e.exports = n
          },
          PJYZ: function(t, e) {
            t.exports = function(t) {
              if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }
          },
          RceT: function(t, e, n) {
            "use strict";
            var r = n("7vIo");
            n.n(r).a
          },
          SksO: function(n, t) {
            function r(t, e) {
              return n.exports = r = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                  t
              }
                ,
                r(t, e)
            }
            n.exports = r
          },
          UNq5: function(t, e, n) {},
          VT8R: function(t, e, n) {},
          W8MJ: function(t, e) {
            function r(t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                  r.configurable = !0,
                "value"in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r)
              }
            }
            t.exports = function(t, e, n) {
              return e && r(t.prototype, e),
              n && r(t, n),
                t
            }
          },
          a1gu: function(t, e, n) {
            var r = n("cDf5")
              , i = n("PJYZ");
            t.exports = function(t, e) {
              return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
            }
          },
          bELQ: function(t, e, n) {
            "use strict";
            var r = n("VT8R");
            n.n(r).a
          },
          cDf5: function(e, t) {
            function n(t) {
              return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                  }
                  : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                  }
              )(t)
            }
            function r(t) {
              return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function(t) {
                  return n(t)
                }
                : e.exports = r = function(t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
                }
                ,
                r(t)
            }
            e.exports = r
          },
          cQoj: function(t, e) {
            t.exports = i
          },
          hNEI: function(t, e, n) {
            "use strict";
            var r = n("uClt");
            n.n(r).a
          },
          "i7/w": function(t, e) {
            t.exports = o
          },
          jQtC: function(t, e, n) {},
          jxvB: function(t, e, n) {},
          lwsE: function(t, e) {
            t.exports = function(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
            }
          },
          mLhc: function(P, t) {
            !function(t) {
              "use strict";
              var c, e = Object.prototype, u = e.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, i = n.iterator || "@@iterator", r = n.asyncIterator || "@@asyncIterator", o = n.toStringTag || "@@toStringTag", a = "object" == typeof P, s = t.regeneratorRuntime;
              if (s)
                a && (P.exports = s);
              else {
                (s = t.regeneratorRuntime = a ? P.exports : {}).wrap = b;
                var f = "suspendedStart"
                  , p = "suspendedYield"
                  , h = "executing"
                  , d = "completed"
                  , v = {}
                  , l = {};
                l[i] = function() {
                  return this
                }
                ;
                var y = Object.getPrototypeOf
                  , m = y && y(y(R([])));
                m && m !== e && u.call(m, i) && (l = m);
                var g = k.prototype = _.prototype = Object.create(l);
                L.prototype = g.constructor = k,
                  k.constructor = L,
                  k[o] = L.displayName = "GeneratorFunction",
                  s.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === L || "GeneratorFunction" === (e.displayName || e.name))
                  }
                  ,
                  s.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, k) : (t.__proto__ = k,
                    o in t || (t[o] = "GeneratorFunction")),
                      t.prototype = Object.create(g),
                      t
                  }
                  ,
                  s.awrap = function(t) {
                    return {
                      __await: t
                    }
                  }
                  ,
                  x(S.prototype),
                  S.prototype[r] = function() {
                    return this
                  }
                  ,
                  s.AsyncIterator = S,
                  s.async = function(t, e, n, r) {
                    var i = new S(b(t, e, n, r));
                    return s.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                      return t.done ? t.value : i.next()
                    })
                  }
                  ,
                  x(g),
                  g[o] = "Generator",
                  g[i] = function() {
                    return this
                  }
                  ,
                  g.toString = function() {
                    return "[object Generator]"
                  }
                  ,
                  s.keys = function(n) {
                    var r = [];
                    for (var t in n)
                      r.push(t);
                    return r.reverse(),
                      function t() {
                        for (; r.length; ) {
                          var e = r.pop();
                          if (e in n)
                            return t.value = e,
                              t.done = !1,
                              t
                        }
                        return t.done = !0,
                          t
                      }
                  }
                  ,
                  s.values = R,
                  E.prototype = {
                    constructor: E,
                    reset: function(t) {
                      if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = c,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = c,
                        this.tryEntries.forEach(j),
                        !t)
                        for (var e in this)
                          "t" === e.charAt(0) && u.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = c)
                    },
                    stop: function() {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type)
                        throw t.arg;
                      return this.rval
                    },
                    dispatchException: function(n) {
                      if (this.done)
                        throw n;
                      var r = this;
                      function t(t, e) {
                        return o.type = "throw",
                          o.arg = n,
                          r.next = t,
                        e && (r.method = "next",
                          r.arg = c),
                          !!e
                      }
                      for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var i = this.tryEntries[e]
                          , o = i.completion;
                        if ("root" === i.tryLoc)
                          return t("end");
                        if (i.tryLoc <= this.prev) {
                          var a = u.call(i, "catchLoc")
                            , s = u.call(i, "finallyLoc");
                          if (a && s) {
                            if (this.prev < i.catchLoc)
                              return t(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                              return t(i.finallyLoc)
                          } else if (a) {
                            if (this.prev < i.catchLoc)
                              return t(i.catchLoc, !0)
                          } else {
                            if (!s)
                              throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                              return t(i.finallyLoc)
                          }
                        }
                      }
                    },
                    abrupt: function(t, e) {
                      for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                          var i = r;
                          break
                        }
                      }
                      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                      var o = i ? i.completion : {};
                      return o.type = t,
                        o.arg = e,
                        i ? (this.method = "next",
                          this.next = i.finallyLoc,
                          v) : this.complete(o)
                    },
                    complete: function(t, e) {
                      if ("throw" === t.type)
                        throw t.arg;
                      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        v
                    },
                    finish: function(t) {
                      for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                          return this.complete(n.completion, n.afterLoc),
                            j(n),
                            v
                      }
                    },
                    catch: function(t) {
                      for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                          var r = n.completion;
                          if ("throw" === r.type) {
                            var i = r.arg;
                            j(n)
                          }
                          return i
                        }
                      }
                      throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                      return this.delegate = {
                        iterator: R(t),
                        resultName: e,
                        nextLoc: n
                      },
                      "next" === this.method && (this.arg = c),
                        v
                    }
                  }
              }
              function b(t, e, n, r) {
                var o, a, s, c, i = e && e.prototype instanceof _ ? e : _, u = Object.create(i.prototype), l = new E(r || []);
                return u._invoke = (o = t,
                    a = n,
                    s = l,
                    c = f,
                    function(t, e) {
                      if (c === h)
                        throw new Error("Generator is already running");
                      if (c === d) {
                        if ("throw" === t)
                          throw e;
                        return I()
                      }
                      for (s.method = t,
                             s.arg = e; ; ) {
                        var n = s.delegate;
                        if (n) {
                          var r = O(n, s);
                          if (r) {
                            if (r === v)
                              continue;
                            return r
                          }
                        }
                        if ("next" === s.method)
                          s.sent = s._sent = s.arg;
                        else if ("throw" === s.method) {
                          if (c === f)
                            throw c = d,
                              s.arg;
                          s.dispatchException(s.arg)
                        } else
                          "return" === s.method && s.abrupt("return", s.arg);
                        c = h;
                        var i = w(o, a, s);
                        if ("normal" === i.type) {
                          if (c = s.done ? d : p,
                          i.arg === v)
                            continue;
                          return {
                            value: i.arg,
                            done: s.done
                          }
                        }
                        "throw" === i.type && (c = d,
                          s.method = "throw",
                          s.arg = i.arg)
                      }
                    }
                ),
                  u
              }
              function w(t, e, n) {
                try {
                  return {
                    type: "normal",
                    arg: t.call(e, n)
                  }
                } catch (t) {
                  return {
                    type: "throw",
                    arg: t
                  }
                }
              }
              function _() {}
              function L() {}
              function k() {}
              function x(t) {
                ["next", "throw", "return"].forEach(function(e) {
                  t[e] = function(t) {
                    return this._invoke(e, t)
                  }
                })
              }
              function S(c) {
                var e;
                this._invoke = function(n, r) {
                  function t() {
                    return new Promise(function(t, e) {
                        !function e(t, n, r, i) {
                          var o = w(c[t], c, n);
                          if ("throw" !== o.type) {
                            var a = o.arg
                              , s = a.value;
                            return s && "object" == typeof s && u.call(s, "__await") ? Promise.resolve(s.__await).then(function(t) {
                              e("next", t, r, i)
                            }, function(t) {
                              e("throw", t, r, i)
                            }) : Promise.resolve(s).then(function(t) {
                              a.value = t,
                                r(a)
                            }, function(t) {
                              return e("throw", t, r, i)
                            })
                          }
                          i(o.arg)
                        }(n, r, t, e)
                      }
                    )
                  }
                  return e = e ? e.then(t, t) : t()
                }
              }
              function O(t, e) {
                var n = t.iterator[e.method];
                if (n === c) {
                  if (e.delegate = null,
                  "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                      e.arg = c,
                      O(t, e),
                    "throw" === e.method))
                      return v;
                    e.method = "throw",
                      e.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return v
                }
                var r = w(n, t.iterator, e.arg);
                if ("throw" === r.type)
                  return e.method = "throw",
                    e.arg = r.arg,
                    e.delegate = null,
                    v;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                  e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                  e.arg = c),
                  e.delegate = null,
                  v) : i : (e.method = "throw",
                  e.arg = new TypeError("iterator result is not an object"),
                  e.delegate = null,
                  v)
              }
              function C(t) {
                var e = {
                  tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                  e.afterLoc = t[3]),
                  this.tryEntries.push(e)
              }
              function j(t) {
                var e = t.completion || {};
                e.type = "normal",
                  delete e.arg,
                  t.completion = e
              }
              function E(t) {
                this.tryEntries = [{
                  tryLoc: "root"
                }],
                  t.forEach(C, this),
                  this.reset(!0)
              }
              function R(e) {
                if (e) {
                  var t = e[i];
                  if (t)
                    return t.call(e);
                  if ("function" == typeof e.next)
                    return e;
                  if (!isNaN(e.length)) {
                    var n = -1
                      , r = function t() {
                      for (; ++n < e.length; )
                        if (u.call(e, n))
                          return t.value = e[n],
                            t.done = !1,
                            t;
                      return t.value = c,
                        t.done = !0,
                        t
                    };
                    return r.next = r
                  }
                }
                return {
                  next: I
                }
              }
              function I() {
                return {
                  value: c,
                  done: !0
                }
              }
            }(function() {
              return this || "object" == typeof self && self
            }() || Function("return this")())
          },
          mXtn: function(t, e, n) {
            "use strict";
            var r = n("8WpC");
            n.n(r).a
          },
          o0o1: function(t, e, n) {
            t.exports = n("qySd")
          },
          oNJN: function(t, e, n) {
            "use strict";
            var r = n("FmSU");
            n.n(r).a
          },
          qySd: function(t, e, n) {
            var r = function() {
              return this || "object" == typeof self && self
            }() || Function("return this")()
              , i = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")
              , o = i && r.regeneratorRuntime;
            if (r.regeneratorRuntime = void 0,
              t.exports = n("mLhc"),
              i)
              r.regeneratorRuntime = o;
            else
              try {
                delete r.regeneratorRuntime
              } catch (t) {
                r.regeneratorRuntime = void 0
              }
          },
          tBKS: function(t, e, n) {
            "use strict";
            var r = n("jxvB");
            n.n(r).a
          },
          uClt: function(t, e, n) {}
        }))
  },
  ZcLj: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return i
    }),
      n.d(e, "b", function() {
        return c
      }),
      n.d(e, "c", function() {
        return l
      }),
      n.d(e, "d", function() {
        return f
      }),
      n.d(e, "e", function() {
        return h
      });
    var r = n("Qyje");
    var i = Object.freeze({
      addClass: function(t, e) {
        if (t.className.split(" ").indexOf(e) < 0) {
          var n = (t.className + " " + e).trim();
          t.className = n
        }
      },
      removeClass: function(t, e) {
        t.className = t.className.replace(new RegExp(" ?\\b" + e + "\\b","g"), "").trim()
      },
      hasClass: function(t, e) {
        return -1 < t.className.indexOf(e)
      }
    });
    function o(t) {
      return "number" == typeof t
    }
    function a(t, e, n, r) {
      return void 0 === r && (r = 1),
        o(n) ? n < t ? n.toString() : (n / t).toFixed(r) + " " + e : ""
    }
    var s = Object.freeze({
      tenThousand: function(t, e) {
        return void 0 === e && (e = 1),
          a(1e4, "万", t, e)
      },
      hundredMillion: function(t, e) {
        return void 0 === e && (e = 1),
          a(1e8, "亿", t, e)
      }
    })
      , c = Object.freeze({
      isNumber: o,
      LabelFormat: s,
      intFormat: function(t, e) {
        var n = parseInt(t, 10);
        return isNaN(n) ? e : n
      }
    });
    var u = 14;
    var l = Object.freeze({
      randomInt: function(t) {
        void 0 === t && (t = 1),
        20 < t && (t = 20);
        var e = Math.random();
        return e < .1 && (e += .1),
          Math.floor(e * Math.pow(10, t))
      },
      randomString: function(t) {
        void 0 === t && (t = 14);
        for (var e = Math.ceil(t / u), n = ""; 0 < e; )
          n += (Date.now() * Math.ceil(1e6 * Math.random())).toString(16).substr(0, u),
            e--;
        return n.substr(0, t)
      },
      randomItem: function(t) {
        return t[Math.floor(Math.random() * t.length)]
      }
    });
    var f = Object.freeze({
      sleep: function(e) {
        return new Promise(function(t) {
            setTimeout(t, e)
          }
        )
      }
    });
    function p() {
      return Object(r.parse)(window.location.search.replace("?", ""))
    }
    var h = Object.freeze({
      getAllQueryStringValues: p,
      getTargetQueryStringValue: function(e) {
        var n = p()
          , t = Object.keys(n).filter(function(t) {
          return t === e
        }).map(function(t) {
          return n[t]
        });
        return t.length ? t[0] : null
      }
    })
  },
  jXYe: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return f
    }),
      n.d(e, "b", function() {
        return h
      });
    var o = function(t, e) {
      void 0 === t && (t = 100),
      void 0 === e && (e = 1e3),
        this.queueLength = t,
        this.loadRetryTimeout = e
    }
      , a = (r.createFromPOJO = function(t) {
      return new r(t.spmId || "",t.logId || "")
    }
      ,
      r.prototype.combineWith = function(t) {
        return new r(t.spmId && t.spmId !== this.spmId ? t.spmId : this.spmId,t.logId && t.logId !== this.logId ? t.logId : this.logId)
      }
      ,
      r);
    function r(t, e) {
      void 0 === e && (e = ""),
        this.spmId = t,
        this.logId = e
    }
    var i, s, c = "002558", u = "002558", l = "002558";
    (s = i || (i = {})).clickSpmId = "biliMangaClickSpm",
      s.msg = "biliMangaMsg",
      s.showSpmId = "biliMangaExposedSpm",
      s.clickReportStop = "biliMangaClickStop",
      s.showReportStop = "biliMangaExposedStop",
      s.clickListeningFlag = "biliMangaClickSpyId",
      s.scrollListeningFlag = "biliMangaScrollSpyId";
    var f = (Object.defineProperty(p, "_liveReportMethod", {
      get: function() {
        var t = window.__statisObserver;
        return t && t.sendClickEvent
      },
      enumerable: !0,
      configurable: !0
    }),
      p._callLiveSendClickEvent = function(t, e, n) {
        try {
          var r = {
            logId: t.logId,
            sendStatus: "double",
            spm_id: t.spmId
          };
          e && (r.msg = e),
            p._liveReportMethod(r, n)
        } catch (t) {
          console.warn("Report Error:", t)
        }
      }
      ,
      p._checkElementInView = function(t) {
        var e = t.getBoundingClientRect()
          , n = e.top < window.innerHeight
          , r = 0 < e.bottom
          , i = e.left < window.innerWidth
          , o = 0 < e.right;
        return n && r && i && o
      }
      ,
      p._findClickReportTarget = function(t) {
        for (var e = t; e; ) {
          if (e.dataset[i.clickSpmId])
            return {
              spmId: e.dataset[i.clickSpmId],
              msg: e.dataset[i.msg] || ""
            };
          if (void 0 !== e.dataset[i.clickReportStop])
            return null;
          e = e.parentElement
        }
        return null
      }
      ,
      p.prototype.sendEvent = function(t) {
        var e = t.reportConfig
          , n = t.msg
          , r = t.event;
        this._sendEvent(a.createFromPOJO(e), {
          msg: n,
          event: r
        })
      }
      ,
      p.prototype.startClickReportObserver = function() {
        var r = this
          , t = i.clickListeningFlag + this._identity;
        void 0 === document.body.dataset[t] ? (document.body.dataset[t] = "",
          window.addEventListener("click", function(t) {
            var e = p._findClickReportTarget(t.target);
            if (e) {
              var n = {};
              if (e.msg)
                try {
                  n = JSON.parse(e.msg)
                } catch (t) {
                  console.warn("JSON Parse Fail: ", e.msg)
                }
              r._sendEvent(r._clickReportBaseConfig.combineWith(a.createFromPOJO({
                spmId: e.spmId
              })), {
                msg: n,
                event: t
              })
            }
          }, !0)) : this._isInDebugMode && console.warn("[StatisticsCollector]: Scroll event already listened.")
      }
      ,
      p.prototype.startScrollExposedReportObserver = function(t, e) {
        var n = this;
        void 0 === t && (t = window);
        var r = i.scrollListeningFlag + this._identity;
        void 0 === (t instanceof Window ? document.body : t).dataset[r] ? (document.body.dataset[r] = "",
        e && (this._scrollEventThrottle = e),
          this.triggerExposeReport(),
          t.addEventListener("scroll", function(t) {
            n.triggerExposeReport(t)
          })) : this._isInDebugMode && console.warn("[StatisticsCollector]: Scroll event already listened.")
      }
      ,
      p.prototype.triggerExposeReport = function(t) {
        var e = this;
        clearTimeout(this._scrollReportTimerHandle),
          this._scrollReportTimerHandle = setTimeout(function() {
            e._doExposeReport(t)
          }, this._scrollEventThrottle)
      }
      ,
      p.prototype._sendEvent = function(t, e) {
        var n = void 0 === e ? {} : e
          , r = n.msg
          , i = n.event;
        this._sendEventWhenReady(this._eventReportBaseConfig.combineWith(t), r, i)
      }
      ,
      p.prototype._doExposeReport = function(n) {
        var r = this;
        this._getScrollReportTargets().forEach(function(e) {
          var t = {};
          if (e.msg)
            try {
              t = JSON.parse(e.msg)
            } catch (t) {
              console.warn("JSON Parse Fail: ", e.msg)
            }
          r._sendEvent(r._exposeReportBaseConfig.combineWith(a.createFromPOJO({
            spmId: e.spmId
          })), {
            msg: t,
            event: n
          })
        })
      }
      ,
      p.prototype._checkLiveLibAndReportCache = function() {
        var t = this;
        if (clearTimeout(this._liveReportRetryTimerHandle),
          p._liveReportMethod) {
          if (0 === this._reportEventCache.length)
            return;
          this._reportEventCache.forEach(function(t) {
            p._callLiveSendClickEvent(t.config, t.msg, t.evt)
          }),
            this._reportEventCache = []
        } else
          this._liveReportRetryTimerHandle = setTimeout(function() {
            return t._checkLiveLibAndReportCache()
          }, this._liveConfig.loadRetryTimeout)
      }
      ,
      p.prototype._sendEventWhenReady = function(t, e, n) {
        p._liveReportMethod ? p._callLiveSendClickEvent(t, e, n) : (this._reportEventCache.push({
          config: t,
          msg: e,
          evt: n
        }),
        this._reportEventCache.length > this._liveConfig.queueLength && (this._reportEventCache = this._reportEventCache.slice(this._reportEventCache.length - this._liveConfig.queueLength)),
          this._checkLiveLibAndReportCache())
      }
      ,
      p.prototype._getScrollReportTargets = function() {
        return Array.prototype.slice.call(document.querySelectorAll("[data-bili-manga-exposed-spm]")).filter(function(t) {
          return p._checkElementInView(t)
        }).map(function(t) {
          var e = t.dataset[i.showSpmId];
          return delete t.dataset[i.showSpmId],
            t.dataset[i.showReportStop] = "1",
            {
              spmId: e,
              msg: t.dataset[i.msg] || ""
            }
        })
      }
      ,
      p);
    function p(t) {
      this._scrollEventThrottle = 100,
        this._reportEventCache = [],
      t || (t = {}),
        this._liveConfig = t.liveCollectorConfig || new o,
        this._isInDebugMode = !!t.debugMode;
      var e = t.baseReportConfigs || {}
        , n = e.eventReport
        , r = e.clickReport
        , i = e.exposeReport;
      this._eventReportBaseConfig = a.createFromPOJO(n || {
        logId: c
      }),
        this._clickReportBaseConfig = a.createFromPOJO(r || {
          logId: u
        }),
        this._exposeReportBaseConfig = a.createFromPOJO(i || {
          logId: l
        }),
        this._identity = Math.round(100 * Math.random()) + "" + Date.now()
    }
    var h = (d.install = function(t, e) {
      d._initCollector(e),
        d._initVueInstanceMethod(t),
        d._initVueDirective(t)
    }
      ,
      d._initVueDirective = function(t) {
        t.directive("click-report", function(t, e) {
          e.value ? t.dataset[i.clickSpmId] = e.value + "" : delete t.dataset[i.clickSpmId]
        }),
          t.directive("expose-report", {
            bind: function(t, e) {
              e.value && void 0 === t.dataset[i.showReportStop] ? t.dataset[i.showSpmId] = e.value : delete t.dataset[i.showSpmId]
            },
            componentUpdated: function(t, e) {
              e.value && void 0 === t.dataset[i.showReportStop] ? t.dataset[i.showSpmId] = e.value : delete t.dataset[i.showSpmId]
            }
          }),
          t.directive("report-msg", function(e, t) {
            if (t.value)
              try {
                e.dataset[i.msg] = JSON.stringify(t.value)
              } catch (t) {
                console.warn(t),
                  delete e.dataset[i.msg]
              }
            else
              delete e.dataset[i.msg]
          }),
          t.directive("click-report-stop", function(t, e) {
            t.dataset[i.clickReportStop] = "1"
          })
      }
      ,
      d._initVueInstanceMethod = function(t) {
        t.prototype.$sendStatisticsEvent = d._inst.sendEvent.bind(d._inst),
          t.prototype.$triggerStatisticsExposeReport = d._inst.triggerExposeReport.bind(d._inst)
      }
      ,
      d._initCollector = function(t) {
        if (!d._inst) {
          var e = t || {}
            , n = e.collectorInitConfig
            , r = e.enableClickReportObserver
            , i = e.enableExposeReportObserver
            , o = e.exposeReportObserverScrollContainer
            , a = e.collectorInstance;
          d._inst = a instanceof f ? a : new f(n),
          void 0 !== r && !r || d._inst.startClickReportObserver(),
          void 0 !== i && !i || d._inst.startScrollExposedReportObserver(o || window)
        }
      }
      ,
      d);
    function d() {}
  },
  otMs: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return s
    }),
      n.d(e, "b", function() {
        return d
      });
    var r = n("vDqi")
      , i = n.n(r)
      , o = function(t, e) {
      return (o = Object.setPrototypeOf || {
            __proto__: []
          }instanceof Array && function(t, e) {
            t.__proto__ = e
          }
          || function(t, e) {
            for (var n in e)
              e.hasOwnProperty(n) && (t[n] = e[n])
          }
      )(t, e)
    };
    function a(t, e) {
      function n() {
        this.constructor = t
      }
      o(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
          new n)
    }
    function f(o, a, s, c) {
      return new (s || (s = Promise))(function(t, e) {
          function n(t) {
            try {
              i(c.next(t))
            } catch (t) {
              e(t)
            }
          }
          function r(t) {
            try {
              i(c.throw(t))
            } catch (t) {
              e(t)
            }
          }
          function i(e) {
            e.done ? t(e.value) : new s(function(t) {
                t(e.value)
              }
            ).then(n, r)
          }
          i((c = c.apply(o, a || [])).next())
        }
      )
    }
    function p(n, r) {
      var i, o, a, t, s = {
        label: 0,
        sent: function() {
          if (1 & a[0])
            throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return t = {
        next: e(0),
        throw: e(1),
        return: e(2)
      },
      "function" == typeof Symbol && (t[Symbol.iterator] = function() {
          return this
        }
      ),
        t;
      function e(e) {
        return function(t) {
          return function(e) {
            if (i)
              throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (i = 1,
                o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o),
                  0) : o.next) && !(a = a.call(o, e[1])).done)
                  return a;
                switch (o = 0,
                a && (e = [2 & e[0], a.value]),
                  e[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return s.label++,
                      {
                        value: e[1],
                        done: !1
                      };
                  case 5:
                    s.label++,
                      o = e[1],
                      e = [0];
                    continue;
                  case 7:
                    e = s.ops.pop(),
                      s.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      s.label = e[1];
                      break
                    }
                    if (6 === e[0] && s.label < a[1]) {
                      s.label = a[1],
                        a = e;
                      break
                    }
                    if (a && s.label < a[2]) {
                      s.label = a[2],
                        s.ops.push(e);
                      break
                    }
                    a[2] && s.ops.pop(),
                      s.trys.pop();
                    continue
                }
                e = r.call(n, s)
              } catch (t) {
                e = [6, t],
                  o = 0
              } finally {
                i = a = 0
              }
            if (5 & e[0])
              throw e[1];
            return {
              value: e[0] ? e[1] : void 0,
              done: !0
            }
          }([e, t])
        }
      }
    }
    var s = (c.prototype.get = function(u, l) {
      return f(this, void 0, void 0, function() {
        var e, n, r, i, o, a, s, c;
        return p(this, function(t) {
          switch (t.label) {
            case 0:
              o = i = r = n = e = null,
                t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]),
                [4, this.axios.get(u, l)];
            case 2:
              return a = t.sent().data,
                s = l ? l.responseType : null,
                e = "arraybuffer" === s ? a : a.data,
                r = a.code,
                i = a.message || a.msg,
                o = 200,
                [3, 4];
            case 3:
              return c = t.sent(),
              (n = c).response && (o = n.response.status),
                [3, 4];
            case 4:
              return [2, {
                data: e,
                error: n,
                code: r,
                message: i,
                status: o
              }]
          }
        })
      })
    }
      ,
      c.prototype.post = function(c, u, l) {
        return f(this, void 0, void 0, function() {
          var e, n, r, i, o, a, s;
          return p(this, function(t) {
            switch (t.label) {
              case 0:
                o = i = r = n = e = null,
                  t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]),
                  [4, this.axios.post(c, u, l)];
              case 2:
                return a = t.sent().data,
                  e = a.data,
                  r = a.code,
                  i = a.message || a.msg,
                  o = 200,
                  [3, 4];
              case 3:
                return s = t.sent(),
                (n = s).response && (o = n.response.status),
                  [3, 4];
              case 4:
                return [2, {
                  data: e,
                  error: n,
                  code: r,
                  message: i,
                  status: o
                }]
            }
          })
        })
      }
      ,
      c.prototype.head = function(a, s) {
        return f(this, void 0, void 0, function() {
          var e, n, r, i, o;
          return p(this, function(t) {
            switch (t.label) {
              case 0:
                r = n = e = null,
                  t.label = 1;
              case 1:
                return t.trys.push([1, 3, , 4]),
                  [4, this.axios.head(a, s)];
              case 2:
                return i = t.sent().headers,
                  e = i,
                  r = 200,
                  [3, 4];
              case 3:
                return o = t.sent(),
                (n = o).response && (r = n.response.status),
                  [3, 4];
              case 4:
                return [2, {
                  data: e,
                  error: n,
                  code: null,
                  message: null,
                  status: r
                }]
            }
          })
        })
      }
      ,
      c);
    function c(t) {
      this.axios = null,
        t = t || Object.create(null),
        this.axios = i.a.create({
          timeout: t.timeout || 5e3
        })
    }
    var u;
    a(l, u = s),
      l.prototype.setInterceptors = function() {
        this.axios.interceptors.request.use(function(t) {
          return "post" === t.method.toLowerCase() && (t.data = t.data || {}),
            t.params = Object.assign({
              device: "h5",
              platform: "web"
            }, t.params),
            t.withCredentials = !0,
            t
        })
      }
    ;
    function l(t) {
      var e = u.call(this, t) || this;
      return e.setInterceptors(),
        e
    }
    var h, d = (a(v, h = s),
      v.prototype.setInterceptors = function() {
        this.axios.interceptors.request.use(function(t) {
          return "post" === t.method.toLowerCase() && (t.data = t.data || {}),
            t.params = Object.assign({
              device: "pc",
              platform: "web"
            }, t.params),
            t.withCredentials = !0,
            t
        })
      }
      ,
      v);
    function v(t) {
      var e = h.call(this, t) || this;
      return e.setInterceptors(),
        e
    }
  },
  pDEV: function(t, e, n) {
    "use strict";
    function r(n, r) {
      var i, o, a, t, s = {
        label: 0,
        sent: function() {
          if (1 & a[0])
            throw a[1];
          return a[1]
        },
        trys: [],
        ops: []
      };
      return t = {
        next: e(0),
        throw: e(1),
        return: e(2)
      },
      "function" == typeof Symbol && (t[Symbol.iterator] = function() {
          return this
        }
      ),
        t;
      function e(e) {
        return function(t) {
          return function(e) {
            if (i)
              throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (i = 1,
                o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o),
                  0) : o.next) && !(a = a.call(o, e[1])).done)
                  return a;
                switch (o = 0,
                a && (e = [2 & e[0], a.value]),
                  e[0]) {
                  case 0:
                  case 1:
                    a = e;
                    break;
                  case 4:
                    return s.label++,
                      {
                        value: e[1],
                        done: !1
                      };
                  case 5:
                    s.label++,
                      o = e[1],
                      e = [0];
                    continue;
                  case 7:
                    e = s.ops.pop(),
                      s.trys.pop();
                    continue;
                  default:
                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                      s = 0;
                      continue
                    }
                    if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                      s.label = e[1];
                      break
                    }
                    if (6 === e[0] && s.label < a[1]) {
                      s.label = a[1],
                        a = e;
                      break
                    }
                    if (a && s.label < a[2]) {
                      s.label = a[2],
                        s.ops.push(e);
                      break
                    }
                    a[2] && s.ops.pop(),
                      s.trys.pop();
                    continue
                }
                e = r.call(n, s)
              } catch (t) {
                e = [6, t],
                  o = 0
              } finally {
                i = a = 0
              }
            if (5 & e[0])
              throw e[1];
            return {
              value: e[0] ? e[1] : void 0,
              done: !0
            }
          }([e, t])
        }
      }
    }
    n.d(e, "a", function() {
      return o
    });
    var i = "https://static-s.bilibili.com/account/bili_quick_login.js";
    function o(n) {
      return void 0 === n && (n = {}),
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        function(o, a, s, c) {
          return new (s || (s = Promise))(function(t, e) {
              function n(t) {
                try {
                  i(c.next(t))
                } catch (t) {
                  e(t)
                }
              }
              function r(t) {
                try {
                  i(c.throw(t))
                } catch (t) {
                  e(t)
                }
              }
              function i(e) {
                e.done ? t(e.value) : new s(function(t) {
                    t(e.value)
                  }
                ).then(n, r)
              }
              i((c = c.apply(o, a || [])).next())
            }
          )
        }(this, void 0, void 0, function() {
          var e;
          return r(this, function(t) {
            switch (t.label) {
              case 0:
                return e = "function" == typeof n.callback ? n.callback : function() {
                  return window.location.reload()
                }
                  ,
                  window.biliQuickLogin ? [3, 2] : [4, new Promise(function(t, e) {
                      var n = document.createElement("script");
                      n.onload = function() {
                        t()
                      }
                        ,
                        n.onerror = function(t) {
                          console.error("[QuickLogin] Failed to load script:", t),
                            e(t)
                        }
                        ,
                        n.src = i,
                        document.body.appendChild(n)
                    }
                  )];
              case 1:
                t.sent(),
                  t.label = 2;
              case 2:
                return window.biliQuickLogin(e),
                  [2]
            }
          })
        })
    }
  },
  qQS4: function(t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "angry", function() {
        return o
      }),
      n.d(e, "happy", function() {
        return a
      }),
      n.d(e, "helpless", function() {
        return u
      }),
      n.d(e, "sad", function() {
        return c
      }),
      n.d(e, "shock", function() {
        return s
      });
    var r = {
      angry: [",,Ծ‸Ծ,,", "(╯‵□′)╯︵┻━┻", "╰（‵□′）╯"],
      happy: ["=‿=✧", "●ω●", "(°▽°)ﾉ", "(/ ▽ \\)", "(=・ω・=)", "(●'◡'●)ﾉ♥", "<(▰˘◡˘▰)>", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)", "(ง,,• ᴗ •,,)ง ✧", ">ㅂ<ﾉ ☆", "ヽ(✿ﾟ▽ﾟ)ノ", "✪ ω ✪", "(*ﾟ▽ﾟ*)"],
      shock: ["Σ( ° △ °|||)︴", "(ﾟДﾟ≡ﾟдﾟ)!?", "∑(っ °Д °;)っ", "Σ(ﾟдﾟ;)"],
      sad: ["＞︿＜", "＞△＜", "●︿●", "(´；ω；`)", "( ´･_･)ﾉ(._.`)"],
      helpless: ["◐▽◑", "ʅ（´◔౪◔）ʃ", "_(:3 」∠)_", "_(:3」∠ ❀)_", "_(┐「ε:)_", "←◡←", "_(•̀ᴗ•́ 」∠ ❀)_", "_φ(･ω･` )", "¯\\_(ツ)_/¯"]
    };
    function i(t) {
      var e = r[t];
      return e ? e[Math.floor(Math.random() * e.length)] : "( ´_ゝ｀)"
    }
    function o() {
      return i("angry")
    }
    function a() {
      return i("happy")
    }
    function s() {
      return i("shock")
    }
    function c() {
      return i("sad")
    }
    function u() {
      return i("helpless")
    }
  }
}]);
