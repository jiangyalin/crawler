!function(c) {
  function e(e) {
    for (var t, i, n = e[0], a = e[1], o = e[2], s = 0, r = []; s < n.length; s++)
      i = n[s],
      d[i] && r.push(d[i][0]),
        d[i] = 0;
    for (t in a)
      Object.prototype.hasOwnProperty.call(a, t) && (c[t] = a[t]);
    for (g && g(e); r.length; )
      r.shift()();
    return M.push.apply(M, o || []),
      u()
  }
  function u() {
    for (var e, t = 0; t < M.length; t++) {
      for (var i = M[t], n = !0, a = 1; a < i.length; a++) {
        var o = i[a];
        0 !== d[o] && (n = !1)
      }
      n && (M.splice(t--, 1),
        e = A(A.s = i[0]))
    }
    return e
  }
  var i = {}
    , l = {
    12: 0
  }
    , d = {
    12: 0
  }
    , M = [];
  function A(e) {
    if (i[e])
      return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return c[e].call(t.exports, t, t.exports, A),
      t.l = !0,
      t.exports
  }
  A.e = function(M) {
    var e = [];
    l[M] ? e.push(l[M]) : 0 !== l[M] && {
      4: 1,
      19: 1,
      20: 1,
      21: 1,
      26: 1,
      27: 1,
      28: 1,
      29: 1
    }[M] && e.push(l[M] = new Promise(function(e, n) {
        for (var t = "static/css/" + M + "." + {
          4: "b4c92278c0",
          15: "31d6cfe0d1",
          19: "8b262ce0cd",
          20: "3a94c05bd9",
          21: "56e8d5a354",
          26: "cdccd2ab46",
          27: "79c75a55ac",
          28: "ae7edd536d",
          29: "5316e5a7bd"
        }[M] + ".css", a = A.p + t, i = document.getElementsByTagName("link"), o = 0; o < i.length; o++) {
          var s = (c = i[o]).getAttribute("data-href") || c.getAttribute("href");
          if ("stylesheet" === c.rel && (s === t || s === a))
            return e()
        }
        var r = document.getElementsByTagName("style");
        for (o = 0; o < r.length; o++) {
          var c;
          if ((s = (c = r[o]).getAttribute("data-href")) === t || s === a)
            return e()
        }
        var u = document.createElement("link");
        u.rel = "stylesheet",
          u.type = "text/css",
          u.onload = e,
          u.onerror = function(e) {
            var t = e && e.target && e.target.src || a
              , i = new Error("Loading CSS chunk " + M + " failed.\n(" + t + ")");
            i.code = "CSS_CHUNK_LOAD_FAILED",
              i.request = t,
              delete l[M],
              u.parentNode.removeChild(u),
              n(i)
          }
          ,
          u.href = a,
          document.getElementsByTagName("head")[0].appendChild(u)
      }
    ).then(function() {
      l[M] = 0
    }));
    var i = d[M];
    if (0 !== i)
      if (i)
        e.push(i[2]);
      else {
        var t = new Promise(function(e, t) {
            i = d[M] = [e, t]
          }
        );
        e.push(i[2] = t);
        var n, o = document.createElement("script");
        o.charset = "utf-8",
          o.timeout = 120,
        A.nc && o.setAttribute("nonce", A.nc),
          o.src = function(e) {
            return A.p + "static/js/" + ({}[e] || e) + "." + {
              4: "b7ab300222",
              15: "c0e3f1cc0e",
              19: "248bab89b0",
              20: "8ea7d9b91d",
              21: "6dae029a93",
              26: "4b91c607f4",
              27: "292df6f141",
              28: "3e4b58caab",
              29: "687c2f2cbc"
            }[e] + ".js"
          }(M),
          n = function(e) {
            o.onerror = o.onload = null,
              clearTimeout(s);
            var t = d[M];
            if (0 !== t) {
              if (t) {
                var i = e && ("load" === e.type ? "missing" : e.type)
                  , n = e && e.target && e.target.src
                  , a = new Error("Loading chunk " + M + " failed.\n(" + i + ": " + n + ")");
                a.type = i,
                  a.request = n,
                  t[1](a)
              }
              d[M] = void 0
            }
          }
        ;
        var s = setTimeout(function() {
          n({
            type: "timeout",
            target: o
          })
        }, 12e4);
        o.onerror = o.onload = n,
          document.head.appendChild(o)
      }
    return Promise.all(e)
  }
    ,
    A.m = c,
    A.c = i,
    A.d = function(e, t, i) {
      A.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      })
    }
    ,
    A.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        })
    }
    ,
    A.t = function(t, e) {
      if (1 & e && (t = A(t)),
      8 & e)
        return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
        return t;
      var i = Object.create(null);
      if (A.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: t
        }),
      2 & e && "string" != typeof t)
        for (var n in t)
          A.d(i, n, function(e) {
            return t[e]
          }
            .bind(null, n));
      return i
    }
    ,
    A.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
        }
        : function() {
          return e
        }
      ;
      return A.d(t, "a", t),
        t
    }
    ,
    A.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    A.p = "//i0.hdslb.com/bfs/static/manga/pc/",
    A.oe = function(e) {
      throw console.error(e),
        e
    }
  ;
  var t = window.webpackJsonp = window.webpackJsonp || []
    , n = t.push.bind(t);
  t.push = e,
    t = t.slice();
  for (var a = 0; a < t.length; a++)
    e(t[a]);
  var g = n;
  M.push(["ODuK", 1, 0]),
    u()
}({
  "+6iS": function(e, t, i) {},
  "+7iW": function(e, t, i) {},
  "+8rY": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjUuMzI4MTI1LDUuNTYyNTAwMDIgQzIzLjYwOTM3NSw0LjQxNjY2NjY4IDIxLjczOTU4MzMsMy44NDM3NTAwMiAxOS43MTg3NSwzLjg0Mzc1MDAyIEMxOC4xMDQxNjY2LDMuODQzNzUwMDIgMTYuNTc4MTI1LDQuMjIzOTU4MzUgMTUuMTQwNjI1LDQuOTg0Mzc1MDIgQzEzLjcwMzEyNSw1Ljc0NDc5MTcgMTIuNDUzMTI1LDYuNzg2NDU4MzYgMTEuMzkwNjI1LDguMTA5Mzc1MDIgQzEwLjYwOTM3NSw5LjA3ODEyNTAxIDkuOTg2OTc5MTYsMTAuMjEzNTQxNyA5LjUyMzQzNzUsMTEuNTE1NjI1IEM5LjA1OTg5NTg0LDEyLjgxNzcwODQgOC44MDcyOTE2NywxNC4yMDMxMjUgOC43NjU2MjQ5OSwxNS42NzE4NzUgTDguNzY1NjI0OTksMTYuMzI4MTI1IEM4LjgwNzI5MTY2LDE3Ljc5Njg3NSA5LjA1OTg5NTgzLDE5LjE4MjI5MTcgOS41MjM0Mzc1LDIwLjQ4NDM3NSBDOS45ODY5NzkxOCwyMS43ODY0NTg0IDEwLjYwOTM3NSwyMi45MjE4NzUgMTEuMzkwNjI1LDIzLjg5MDYyNSBDMTIuNDUzMTI1LDI1LjIxMzU0MTcgMTMuNzAzMTI1LDI2LjI1NTIwODQgMTUuMTQwNjI1LDI3LjAxNTYyNSBDMTYuNTc4MTI1LDI3Ljc3NjA0MTcgMTguMTA0MTY2NywyOC4xNTYyNSAxOS43MTg3NSwyOC4xNTYyNSBDMjEuNzM5NTgzMywyOC4xNTYyNSAyMy42MDkzNzUsMjcuNTgzMzMzNCAyNS4zMjgxMjUsMjYuNDM3NSBDMjQuMDY3NzA4MywyNy41NjI1IDIyLjYzODAyMDgsMjguNDM3NSAyMS4wMzkwNjI1LDI5LjA2MjUgQzE5LjQ0MDEwNDEsMjkuNjg3NSAxNy43NjA0MTY2LDMwIDE2LDMwIEMxNS42OTc5MTY2LDMwIDE1LjQ3Mzk1ODMsMjkuOTk0NzkxNyAxNS4zMjgxMjUsMjkuOTg0Mzc1IEMxMy41MDUyMDgzLDI5LjkwMTA0MTcgMTEuNzcwODMzMywyOS40NzM5NTgzIDEwLjEyNSwyOC43MDMxMjUgQzguNDc5MTY2NjUsMjcuOTMyMjkxNyA3LjA2MjQ5OTk4LDI2LjkyNzA4MzQgNS44NzQ5OTk5OCwyNS42ODc1IEM0LjY4NzQ5OTk5LDI0LjQ0NzkxNjcgMy43NDQ3OTE2NiwyMi45ODQzNzUgMy4wNDY4NzQ5OSwyMS4yOTY4NzUgQzIuMzQ4OTU4MzMsMTkuNjA5Mzc1IDIsMTcuODQzNzUgMiwxNiBDMiwxNC4xMDQxNjY3IDIuMzY5NzkxNjcsMTIuMjkxNjY2NyAzLjEwOTM3NTAxLDEwLjU2MjUgQzMuODQ4OTU4MzUsOC44MzMzMzMzMyA0Ljg0Mzc1MDAyLDcuMzQzNzUgNi4wOTM3NTAwMSw2LjA5Mzc1MDAxIEM3LjM0Mzc1LDQuODQzNzUwMDIgOC44MzMzMzMzMywzLjg0ODk1ODM1IDEwLjU2MjUsMy4xMDkzNzUwMSBDMTIuMjkxNjY2NywyLjM2OTc5MTY3IDE0LjEwNDE2NjcsMiAxNiwyIEwxNi4wNDY4NzUsMiBDMTcuNzk2ODc1LDIuMDEwNDE2NjcgMTkuNDY2MTQ1OSwyLjMyNTUyMDg1IDIxLjA1NDY4NzUsMi45NDUzMTI1MSBDMjIuNjQzMjI5MiwzLjU2NTEwNDE4IDI0LjA2NzcwODQsNC40Mzc1MDAwMSAyNS4zMjgxMjUsNS41NjI1MDAwMiBMMjUuMzI4MTI1LDUuNTYyNTAwMDIgWiBNMzAsMTYgQzMwLDE4IDI5LjU5ODk1ODMsMTkuODg4MDIwOSAyOC43OTY4NzUsMjEuNjY0MDYyNSBDMjcuOTk0NzkxNywyMy40NDAxMDQyIDI2Ljg4NTQxNjcsMjQuOTg0Mzc1IDI1LjQ2ODc1LDI2LjI5Njg3NSBDMjQuMzg1NDE2NywyNi45NTMxMjUgMjMuMjI5MTY2NywyNy4yODEyNSAyMiwyNy4yODEyNSBDMjAuNTcyOTE2NywyNy4yODEyNSAxOS4yNDQ3OTE2LDI2Ljg0Mzc1IDE4LjAxNTYyNSwyNS45Njg3NSBDMTkuNjE5NzkxNiwyNS4zODU0MTY3IDIwLjk0MDEwNDEsMjQuMTcxODc1IDIxLjk3NjU2MjUsMjIuMzI4MTI1IEMyMy4wMTMwMjA4LDIwLjQ4NDM3NSAyMy41MzEyNSwxOC4zNzUgMjMuNTMxMjUsMTYgQzIzLjUzMTI1LDEzLjYzNTQxNjcgMjMuMDE1NjI1LDExLjUzMTI1IDIxLjk4NDM3NSw5LjY4NzUwMDAyIEMyMC45NTMxMjUsNy44NDM3NTAwMyAxOS42MzU0MTY2LDYuNjI1MDAwMDIgMTguMDMxMjUsNi4wMzEyNTAwMiBDMTkuMjcwODMzMyw1LjE2NjY2NjY5IDIwLjU5Mzc1LDQuNzM0Mzc1MDMgMjIsNC43MzQzNzUwMyBDMjMuMjM5NTgzMyw0LjczNDM3NTAzIDI0LjQxNjY2NjYsNS4wNzI5MTY2OSAyNS41MzEyNSw1Ljc1MDAwMDAyIEMyNi45Mzc1LDcuMDUyMDgzMzUgMjguMDMzODU0MSw4LjU4ODU0MTY5IDI4LjgyMDMxMjQsMTAuMzU5Mzc1IEMyOS42MDY3NzA4LDEyLjEzMDIwODQgMzAsMTQuMDEwNDE2NyAzMCwxNiBMMzAsMTYgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  "+J0b": function(e, t, i) {
    "use strict";
    var n, a, o, s;
    function r(e) {
      switch (e) {
        case n.FREE:
          return o.free;
        case n.POPULARITY:
          return o.popularity;
        case n.RISING:
          return o.rising;
        default:
          return null
      }
    }
    i.d(t, "a", function() {
      return n
    }),
      i.d(t, "b", function() {
        return o
      }),
      i.d(t, "c", function() {
        return r
      }),
      (a = n || (n = {})).POPULARITY = "ninnki",
      a.SUPPORT = "ouenn",
      a.RISING = "rising",
      a.FREE = "muryou",
      (s = o || (o = {}))[s.popularity = 0] = "popularity",
      s[s.free = 1] = "free",
      s[s.rising = 2] = "rising"
  },
  "+Lfg": function(e, t, i) {},
  "+cnd": function(e, t, i) {
    "use strict";
    var n = i("o0o1")
      , A = i.n(n)
      , a = i("yXPU")
      , s = i.n(a)
      , o = i("lwsE")
      , r = i.n(o)
      , c = i("W8MJ")
      , u = i.n(c)
      , M = i("a1gu")
      , l = i.n(M)
      , d = i("Nsbk")
      , g = i.n(d)
      , D = i("7W2i")
      , y = i.n(D)
      , N = i("vDqi")
      , p = i.n(N)
      , f = i("fLv1")
      , h = i("91CG")
      , j = function() {
      function e() {
        r()(this, e)
      }
      return u()(e, null, [{
        key: "getImageToken",
        value: function(e) {
          return h.a.post({
            url: "/twirp/comic.v1.Comic/ImageToken",
            data: {
              urls: JSON.stringify(e)
            }
          })
        }
      }]),
        e
    }()
      , I = i("SiI8")
      , w = i("Ubnt");
    i.d(t, "a", function() {
      return T
    });
    var T = function(e) {
      function o(e) {
        var t;
        r()(this, o),
          (t = l()(this, g()(o).call(this, document.createElement("canvas"), w.b.ReaderImage)))._token = "",
          t._tokenExpireTimer = null,
          t._imagePath = "",
          t._url = "",
          t._width = 0,
          t._height = 0,
          t._cancelToken = null;
        var i = e.width
          , n = e.height
          , a = e.imagePath;
        return t._width = i,
          t._height = n,
          t.element.width = i,
          t.element.height = n,
          t._imagePath = I.a.bfsLink(a.replace(".JPG", ".jpg"), i),
          t.resetState(),
          t
      }
      var t, i, n;
      return y()(o, e),
        u()(o, [{
          key: "loadToken",
          value: (n = s()(A.a.mark(function e() {
              var t, i, n;
              return A.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        j.getImageToken([this._imagePath]);
                    case 2:
                      if (t = e.sent,
                        i = t.data,
                        n = t.error)
                        throw n;
                      e.next = 7;
                      break;
                    case 7:
                      e.prev = 7,
                        this._token = i[0].token,
                        this._url = i[0].url,
                        this.startTokenExpireTimer(),
                        e.next = 16;
                      break;
                    case 13:
                      throw e.prev = 13,
                        e.t0 = e.catch(7),
                        new Error("Failed to access token from server response: " + e.t0.message);
                    case 16:
                    case "end":
                      return e.stop()
                  }
              }, e, this, [[7, 13]])
            })),
              function() {
                return n.apply(this, arguments)
              }
          )
        }, {
          key: "startTokenExpireTimer",
          value: function() {
            var e = this;
            clearTimeout(this._tokenExpireTimer),
              this._tokenExpireTimer = setTimeout(function() {
                e._token = ""
              }, f.a.TOKEN_LIFE_TIME)
          }
        }, {
          key: "resetState",
          value: function() {
            this.resetVM()
          }
        }, {
          key: "loadImage",
          value: (i = s()(A.a.mark(function e() {
              var d = this;
              return A.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", new Promise(function() {
                        var i = s()(A.a.mark(function e(i, t) {
                          var n, a, o, s, r, c, u, M, l;
                          return A.a.wrap(function(e) {
                            for (; ; )
                              switch (e.prev = e.next) {
                                case 0:
                                  if (n = d.vm,
                                    a = n.isLoaded,
                                    o = n.inLoading,
                                  a || o)
                                    return e.abrupt("return", i());
                                  e.next = 3;
                                  break;
                                case 3:
                                  if (d.vm.inLoading = !0,
                                    d._token) {
                                    e.next = 15;
                                    break
                                  }
                                  return e.prev = 5,
                                    e.next = 8,
                                    d.loadToken();
                                case 8:
                                  e.next = 15;
                                  break;
                                case 10:
                                  return e.prev = 10,
                                    e.t0 = e.catch(5),
                                    d.vm.inLoading = !1,
                                    d.vm.isLoadingFailed = !0,
                                    e.abrupt("return", t(e.t0));
                                case 15:
                                  return d.vm.progress = 0,
                                    s = null,
                                    r = p.a.CancelToken.source(),
                                    d._cancelToken = r,
                                    c = p.a.create(),
                                    u = "".concat(d._url, "?token=").concat(d._token),
                                    e.prev = 21,
                                    e.next = 24,
                                    c({
                                      url: u,
                                      responseType: "blob",
                                      onDownloadProgress: function(e) {
                                        d.vm.progress = Math.floor(e.loaded / e.total * 100)
                                      },
                                      timeout: f.a.IMAGE_REQUEST_TIME_OUT,
                                      cancelToken: r.token
                                    });
                                case 24:
                                  M = e.sent,
                                    s = M.data,
                                    e.next = 35;
                                  break;
                                case 28:
                                  if (e.prev = 28,
                                    e.t1 = e.catch(21),
                                    p.a.isCancel(e.t1))
                                    return d.vm.isAbortByUser = !0,
                                      e.abrupt("return", i());
                                  e.next = 33;
                                  break;
                                case 33:
                                  return d.vm.isLoadingFailed = !0,
                                    e.abrupt("return", t(e.t1));
                                case 35:
                                  (l = new Image).onload = function() {
                                    var e = l.width
                                      , t = l.height;
                                    d.element.width = e,
                                      d.element.height = t,
                                      d._context.drawImage(l, 0, 0),
                                      d.vm.inLoading = !1,
                                      d.vm.isLoaded = !0,
                                      i()
                                  }
                                    ,
                                    l.onerror = function(e) {
                                      d.vm.isLoadingFailed = !0,
                                        t(e)
                                    }
                                    ,
                                    l.src = URL.createObjectURL(s);
                                case 39:
                                case "end":
                                  return e.stop()
                              }
                          }, e, null, [[5, 10], [21, 28]])
                        }));
                        return function(e, t) {
                          return i.apply(this, arguments)
                        }
                      }()));
                    case 1:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "abort",
          value: function() {
            this._cancelToken && this._cancelToken.cancel()
          }
        }, {
          key: "destroy",
          value: function() {
            this.abort(),
              this.removeElement(),
              this.resetState()
          }
        }, {
          key: "reload",
          value: (t = s()(A.a.mark(function e() {
              return A.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return this.resetState(),
                        e.next = 3,
                        this.loadImage();
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return t.apply(this, arguments)
              }
          )
        }, {
          key: "appendTo",
          value: function(e) {
            e.appendChild(this._element)
          }
        }, {
          key: "removeElement",
          value: function() {
            var e = this._element
              , t = e.parentElement;
            t && t.removeChild(e);
            var i = document.createElement("canvas");
            i.width = this._width,
              i.height = this._height,
              this._element = i
          }
        }, {
          key: "url",
          get: function() {
            return this._url
          }
        }, {
          key: "width",
          get: function() {
            return this._width
          }
        }, {
          key: "height",
          get: function() {
            return this._height
          }
        }, {
          key: "_context",
          get: function() {
            var e = this.element.getContext("2d");
            try {
              e.__proto__.getImageData = function() {
                return console.log("有 ♂ 点 ♂ 骚"),
                  new ImageData(1,1)
              }
            } catch (e) {}
            return e
          }
        }]),
        o
    }(w.a)
  },
  "+r91": function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return M
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("cDf5")
      , c = i.n(o)
      , s = i("1aRO")
      , r = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : c()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , u = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : c()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , M = function e() {
      a()(this, e),
        this.gold = 0,
        this.coupon = 0,
        this.limitedFreeCoupon = 0,
        this.hasFirstReward = !1,
        this.unuseableGold = 0
    };
    r([Object(s.a)("remain_gold"), u("design:type", Number)], M.prototype, "gold", void 0),
      r([Object(s.a)("remain_coupon"), u("design:type", Number)], M.prototype, "coupon", void 0),
      r([Object(s.a)("remain_item"), u("design:type", Number)], M.prototype, "limitedFreeCoupon", void 0),
      r([Object(s.a)("first_reward"), u("design:type", Boolean)], M.prototype, "hasFirstReward", void 0),
      r([Object(s.a)("unusable_gold"), u("design:type", Number)], M.prototype, "unuseableGold", void 0),
      M = r([Object(s.b)()], M)
  },
  "/O4Y": function(e, t, i) {},
  0: function(e, t) {},
  1: function(e, t) {},
  "20sy": function(e, t, i) {
    e.exports = i.p + "img/563540f812849.png"
  },
  "2jGf": function(e, t, i) {},
  "2wKr": function(e, t, i) {
    "use strict";
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("a1gu")
      , s = i.n(o)
      , r = i("Nsbk")
      , c = i.n(r)
      , u = i("7W2i")
      , M = i.n(u)
      , l = i("cDf5")
      , d = i.n(l)
      , A = i("+B0l")
      , g = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , D = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , y = function(e) {
      function t() {
        return a()(this, t),
          s()(this, c()(t).apply(this, arguments))
      }
      return M()(t, e),
        t
    }(i("oCYn").default);
    g([Object(A.d)({
      type: [Number, String],
      default: 30
    }), D("design:type", Number)], y.prototype, "size", void 0),
      g([Object(A.d)({
        type: String,
        default: "#32aaff"
      }), D("design:type", String)], y.prototype, "color", void 0);
    var N = y = g([A.b], y)
      , p = (i("qhWt"),
      i("KHd+"))
      , f = Object(p.a)(N, function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("div", {
        staticClass: "dp-i-block v-middle"
      }, [t("svg", {
        staticClass: "progress-svg v-middle",
        style: {
          width: this.size + "px"
        },
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "22.8 22.8 45.7 45.7"
        }
      }, [t("circle", {
        staticClass: "circular-overlay",
        style: {
          stroke: this.color
        },
        attrs: {
          fill: "transparent",
          cx: "45.7",
          cy: "45.7",
          r: "20",
          "stroke-width": "5.7",
          "stroke-dasharray": "125.6",
          "stroke-dashoffset": "125.6"
        }
      })])])
    }, [], !1, null, "69a010ff", null);
    t.a = f.exports
  },
  "4ps3": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii43IiBkPSJNNCw4LjYgQzMuNjY4NjI5MTUsOC42IDMuNCw4LjMzMTM3MDg1IDMuNCw4IEMzLjQsNy42Njg2MjkxNSAzLjY2ODYyOTE1LDcuNCA0LDcuNCBMMTIsNy40IEMxMi4zMzEzNzA4LDcuNCAxMi42LDcuNjY4NjI5MTUgMTIuNiw4IEMxMi42LDguMzMxMzcwODUgMTIuMzMxMzcwOCw4LjYgMTIsOC42IEw0LDguNiBaIE00LDQuNiBDMy42Njg2MjkxNSw0LjYgMy40LDQuMzMxMzcwODUgMy40LDQgQzMuNCwzLjY2ODYyOTE1IDMuNjY4NjI5MTUsMy40IDQsMy40IEwxMiwzLjQgQzEyLjMzMTM3MDgsMy40IDEyLjYsMy42Njg2MjkxNSAxMi42LDQgQzEyLjYsNC4zMzEzNzA4NSAxMi4zMzEzNzA4LDQuNiAxMiw0LjYgTDQsNC42IFogTTQsMTIuNiBDMy42Njg2MjkxNSwxMi42IDMuNCwxMi4zMzEzNzA4IDMuNCwxMiBDMy40LDExLjY2ODYyOTIgMy42Njg2MjkxNSwxMS40IDQsMTEuNCBMMTIsMTEuNCBDMTIuMzMxMzcwOCwxMS40IDEyLjYsMTEuNjY4NjI5MiAxMi42LDEyIEMxMi42LDEyLjMzMTM3MDggMTIuMzMxMzcwOCwxMi42IDEyLDEyLjYgTDQsMTIuNiBaIi8+Cjwvc3ZnPgo="
  },
  "55sB": function(e, t, i) {},
  "5QqO": function(e, t, i) {
    "use strict";
    var n = i("Jd6w");
    i.n(n).a
  },
  "6+LV": function(e, t, i) {
    "use strict";
    var n, a;
    i.d(t, "a", function() {
      return n
    }),
      (a = n || (n = {}))[a.False = 0] = "False",
      a[a.True = 1] = "True"
  },
  "6Cld": function(e, t, i) {},
  "6GB1": function(e, t, i) {},
  "6MYt": function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return M
    });
    var n = i("o0o1")
      , l = i.n(n)
      , a = i("yXPU")
      , o = i.n(a)
      , s = i("lwsE")
      , r = i.n(s)
      , c = i("W8MJ")
      , u = i.n(c)
      , d = i("1aRO");
    function M(M) {
      return function() {
        function e() {
          r()(this, e)
        }
        var t, i;
        return u()(e, null, [{
          key: "get",
          value: (i = o()(l.a.mark(function e(t) {
              var i, n, a, o, s, r, c, u;
              return l.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return i = {
                        data: null,
                        error: null,
                        code: null,
                        message: null,
                        status: null
                      },
                        n = Object.assign({
                          params: t.data
                        }, t.config),
                        e.next = 4,
                        M.get(t.url, n);
                    case 4:
                      if (a = e.sent,
                        o = a.data,
                        s = a.error,
                        r = a.code,
                        c = a.message,
                        u = a.status,
                        s)
                        i.error = s;
                      else if (i.code = r,
                        i.message = c,
                        i.status = u,
                      void 0 !== t.type)
                        try {
                          i.data = Array.isArray(o) ? o.map(function(e) {
                            return Object(d.c)(e, t.type)
                          }) : Object(d.c)(o, t.type)
                        } catch (e) {
                          i.error = e
                        }
                      else
                        i.data = o;
                      return e.abrupt("return", i);
                    case 12:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })),
              function(e) {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "post",
          value: (t = o()(l.a.mark(function e(t) {
              var i, n, a, o, s, r, c;
              return l.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return i = {
                        data: null,
                        error: null,
                        code: null,
                        message: null,
                        status: null
                      },
                        e.next = 3,
                        M.post(t.url, t.data, t.config);
                    case 3:
                      if (n = e.sent,
                        a = n.data,
                        o = n.error,
                        s = n.code,
                        r = n.message,
                        c = n.status,
                        i.status = c,
                        o)
                        i.error = o;
                      else if (i.code = s,
                        i.message = r,
                      void 0 !== t.type)
                        try {
                          i.data = Array.isArray(a) ? a.map(function(e) {
                            return Object(d.c)(e, t.type)
                          }) : Object(d.c)(a, t.type)
                        } catch (e) {
                          i.error = e
                        }
                      else
                        i.data = a;
                      return e.abrupt("return", i);
                    case 12:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })),
              function(e) {
                return t.apply(this, arguments)
              }
          )
        }]),
          e
      }()
    }
  },
  "7dO1": function(e, t, i) {},
  "8HwU": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjUuMzI4MTI1LDUuNTYyNTAwMDIgQzIzLjYwOTM3NSw0LjQxNjY2NjY4IDIxLjczOTU4MzMsMy44NDM3NTAwMiAxOS43MTg3NSwzLjg0Mzc1MDAyIEMxOC4xMDQxNjY2LDMuODQzNzUwMDIgMTYuNTc4MTI1LDQuMjIzOTU4MzUgMTUuMTQwNjI1LDQuOTg0Mzc1MDIgQzEzLjcwMzEyNSw1Ljc0NDc5MTcgMTIuNDUzMTI1LDYuNzg2NDU4MzYgMTEuMzkwNjI1LDguMTA5Mzc1MDIgQzEwLjYwOTM3NSw5LjA3ODEyNTAxIDkuOTg2OTc5MTYsMTAuMjEzNTQxNyA5LjUyMzQzNzUsMTEuNTE1NjI1IEM5LjA1OTg5NTg0LDEyLjgxNzcwODQgOC44MDcyOTE2NywxNC4yMDMxMjUgOC43NjU2MjQ5OSwxNS42NzE4NzUgTDguNzY1NjI0OTksMTYuMzI4MTI1IEM4LjgwNzI5MTY2LDE3Ljc5Njg3NSA5LjA1OTg5NTgzLDE5LjE4MjI5MTcgOS41MjM0Mzc1LDIwLjQ4NDM3NSBDOS45ODY5NzkxOCwyMS43ODY0NTg0IDEwLjYwOTM3NSwyMi45MjE4NzUgMTEuMzkwNjI1LDIzLjg5MDYyNSBDMTIuNDUzMTI1LDI1LjIxMzU0MTcgMTMuNzAzMTI1LDI2LjI1NTIwODQgMTUuMTQwNjI1LDI3LjAxNTYyNSBDMTYuNTc4MTI1LDI3Ljc3NjA0MTcgMTguMTA0MTY2NywyOC4xNTYyNSAxOS43MTg3NSwyOC4xNTYyNSBDMjEuNzM5NTgzMywyOC4xNTYyNSAyMy42MDkzNzUsMjcuNTgzMzMzNCAyNS4zMjgxMjUsMjYuNDM3NSBDMjQuMDY3NzA4MywyNy41NjI1IDIyLjYzODAyMDgsMjguNDM3NSAyMS4wMzkwNjI1LDI5LjA2MjUgQzE5LjQ0MDEwNDEsMjkuNjg3NSAxNy43NjA0MTY2LDMwIDE2LDMwIEMxNS42OTc5MTY2LDMwIDE1LjQ3Mzk1ODMsMjkuOTk0NzkxNyAxNS4zMjgxMjUsMjkuOTg0Mzc1IEMxMy41MDUyMDgzLDI5LjkwMTA0MTcgMTEuNzcwODMzMywyOS40NzM5NTgzIDEwLjEyNSwyOC43MDMxMjUgQzguNDc5MTY2NjUsMjcuOTMyMjkxNyA3LjA2MjQ5OTk4LDI2LjkyNzA4MzQgNS44NzQ5OTk5OCwyNS42ODc1IEM0LjY4NzQ5OTk5LDI0LjQ0NzkxNjcgMy43NDQ3OTE2NiwyMi45ODQzNzUgMy4wNDY4NzQ5OSwyMS4yOTY4NzUgQzIuMzQ4OTU4MzMsMTkuNjA5Mzc1IDIsMTcuODQzNzUgMiwxNiBDMiwxNC4xMDQxNjY3IDIuMzY5NzkxNjcsMTIuMjkxNjY2NyAzLjEwOTM3NTAxLDEwLjU2MjUgQzMuODQ4OTU4MzUsOC44MzMzMzMzMyA0Ljg0Mzc1MDAyLDcuMzQzNzUgNi4wOTM3NTAwMSw2LjA5Mzc1MDAxIEM3LjM0Mzc1LDQuODQzNzUwMDIgOC44MzMzMzMzMywzLjg0ODk1ODM1IDEwLjU2MjUsMy4xMDkzNzUwMSBDMTIuMjkxNjY2NywyLjM2OTc5MTY3IDE0LjEwNDE2NjcsMiAxNiwyIEwxNi4wNDY4NzUsMiBDMTcuNzk2ODc1LDIuMDEwNDE2NjcgMTkuNDY2MTQ1OSwyLjMyNTUyMDg1IDIxLjA1NDY4NzUsMi45NDUzMTI1MSBDMjIuNjQzMjI5MiwzLjU2NTEwNDE4IDI0LjA2NzcwODQsNC40Mzc1MDAwMSAyNS4zMjgxMjUsNS41NjI1MDAwMiBMMjUuMzI4MTI1LDUuNTYyNTAwMDIgWiBNMzAsMTYgQzMwLDE4IDI5LjU5ODk1ODMsMTkuODg4MDIwOSAyOC43OTY4NzUsMjEuNjY0MDYyNSBDMjcuOTk0NzkxNywyMy40NDAxMDQyIDI2Ljg4NTQxNjcsMjQuOTg0Mzc1IDI1LjQ2ODc1LDI2LjI5Njg3NSBDMjQuMzg1NDE2NywyNi45NTMxMjUgMjMuMjI5MTY2NywyNy4yODEyNSAyMiwyNy4yODEyNSBDMjAuNTcyOTE2NywyNy4yODEyNSAxOS4yNDQ3OTE2LDI2Ljg0Mzc1IDE4LjAxNTYyNSwyNS45Njg3NSBDMTkuNjE5NzkxNiwyNS4zODU0MTY3IDIwLjk0MDEwNDEsMjQuMTcxODc1IDIxLjk3NjU2MjUsMjIuMzI4MTI1IEMyMy4wMTMwMjA4LDIwLjQ4NDM3NSAyMy41MzEyNSwxOC4zNzUgMjMuNTMxMjUsMTYgQzIzLjUzMTI1LDEzLjYzNTQxNjcgMjMuMDE1NjI1LDExLjUzMTI1IDIxLjk4NDM3NSw5LjY4NzUwMDAyIEMyMC45NTMxMjUsNy44NDM3NTAwMyAxOS42MzU0MTY2LDYuNjI1MDAwMDIgMTguMDMxMjUsNi4wMzEyNTAwMiBDMTkuMjcwODMzMyw1LjE2NjY2NjY5IDIwLjU5Mzc1LDQuNzM0Mzc1MDMgMjIsNC43MzQzNzUwMyBDMjMuMjM5NTgzMyw0LjczNDM3NTAzIDI0LjQxNjY2NjYsNS4wNzI5MTY2OSAyNS41MzEyNSw1Ljc1MDAwMDAyIEMyNi45Mzc1LDcuMDUyMDgzMzUgMjguMDMzODU0MSw4LjU4ODU0MTY5IDI4LjgyMDMxMjQsMTAuMzU5Mzc1IEMyOS42MDY3NzA4LDEyLjEzMDIwODQgMzAsMTQuMDEwNDE2NyAzMCwxNiBMMzAsMTYgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  "8XqL": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCwxNC41NDY4NTExIEw0LjAxNDYyNTcyLDE0LjU0Njg1MTEgQzQuMTY5NTUwMDYsMTMuMzI2ODU1NiA0LjQ1MjU4NDg5LDEyLjE1NzU1NzYgNC44NjM3MzAyNCwxMS4wMzg5NTczIEM1LjI3NDg3NTU4LDkuOTIwMzU2OTMgNS44MzExOTQ3Nyw4Ljg2OTgwNTIyIDYuNTMyNjg3ODIsNy44ODczMDIxNCBDNy4yMzQxODA4Niw2LjkwNDc5OTA2IDguMDQ0MjgzNDQsNi4wNTI2OTk5NiA4Ljk2Mjk5NTU2LDUuMzMxMDA0ODEgQzkuODgxNzA3NjksNC42MDkzMDk2NyAxMC45NjI2NTcsNC4wNDA1MjA2NCAxMi4yMDU4NDM1LDMuNjI0NjM3NzIgQzEzLjQ0OTAzLDMuMjA4NzU0NzkgMTQuNzg2NDcxMiwzLjAwMDU0MjIyIDE2LjIxODE2NywzIEMxOC40NTI2NTI2LDMgMjAuNDU1MDIyNSwzLjUxMDc3MTQ3IDIyLjIyNTI3NjgsNC41MzIzMTQ0IEMyMy45OTU1MzEsNS41NTM4NTczMyAyNS40MTc0NzY0LDcuMDIzMjc0MTkgMjYuNDkxMTEyOCw4Ljk0MDU2NDk2IEMyNy40OTcwMzc2LDEwLjc1MTAzODMgMjgsMTIuODkwOTEwNSAyOCwxNS4zNjAxODE1IEwyOCwxOC4wOTA1MzE1IEwxMS42NzY4Nzk4LDE4LjA5MDUzMTUgQzExLjY4NjYzMDMsMTkuMTY1MjEyIDExLjk0NTI4OSwyMC4wOTcyODg2IDEyLjQ1Mjg1NTcsMjAuODg2NzYxMyBDMTIuOTYwNDIyNSwyMS42NzYyMzQgMTMuNjIwNzQ2OSwyMi4yNjk0MjI5IDE0LjQzMzgyODgsMjIuNjY2MzI4MSBDMTUuMjQ2OTEwNywyMy4wNjMyMzMzIDE2LjE2MzQ1NiwyMy4zMzkyMjM0IDE3LjE4MzQ2NDgsMjMuNDk0Mjk4NCBDMTguMjAzNDczNiwyMy42NDkzNzM0IDE5LjIzMzc3NDYsMjMuNjY0MDEzNCAyMC4yNzQzNjc3LDIzLjUzODIxODMgQzIxLjMxNDk2MDksMjMuNDEyNDIzMiAyMi4zMjA4ODU3LDIzLjE4NzQwMTggMjMuMjkyMTQyMSwyMi44NjMxNTQxIEMyNC4yNjMzOTg0LDIyLjUzODkwNjQgMjUuMTAyNDgxNiwyMi4xMjk4MDEyIDI1LjgwOTM5MTYsMjEuNjM1ODM4NiBMMjUuODA5MzkxNiwyNy4xMTExNzg2IEMyNC45MTkzODkyLDI3LjY0MzYzODggMjMuODA5NDU5MywyOC4wODkwNzI4IDIyLjQ3OTYwMTksMjguNDQ3NDgwMyBDMjEuMTQ5NzQ0NCwyOC44MDU4ODc5IDE5LjYzODQxOTYsMjguOTg5OTcxNyAxNy45NDU2Mjc1LDI4Ljk5OTczMTcgQzE2LjI1MjgzNTQsMjkuMDA5NDkxNiAxNC43MjQ0NDczLDI4Ljc1MzAyMTQgMTMuMzYwNDYzMSwyOC4yMzAzMjExIEMxMS41MzIyNDc3LDI3LjUyMzI2NTkgMTAuMDI1NTI3MywyNi4zMTc5MTAzIDguODQwMzAxOTksMjQuNjE0MjU0MyBDNy42NTUwNzY2OCwyMi45MTA1OTgzIDcuMDUyOTg0MzksMjEuMTA5NjEzOCA3LjAzNDAyNTEyLDE5LjIxMTMwMDggQzcuMDA0NzczNjcsMTYuODY4MzY3MSA3LjU0MTU5MTksMTQuODczODA5OSA4LjY0NDQ3OTgsMTMuMjI3NjI5MyBDOS43NDczNjc3MSwxMS41ODE0NDg2IDExLjMxOTM2MjIsMTAuMjgzOTE1NiAxMy4zNjA0NjMxLDkuMzM1MDMwMTggQzEyLjg5NjIzMTgsOS45MTU3NDgwNiAxMi41MTg5NDIzLDEwLjUyMzMwNTggMTIuMjI4NTk0NiwxMS4xNTc3MDM1IEMxMS45MzgyNDY5LDExLjc5MjEwMTIgMTEuNzE1ODgxOCwxMi41NjQyMjI4IDExLjU2MTQ5OTEsMTMuNDc0MDY4NCBMMjAuNzc0ODkyNSwxMy40NzQwNjg0IEMyMC44NTIzNTQ3LDEyLjcyODUxNTYgMjAuODEzNjIzNiwxMi4wNTA3NDAzIDIwLjY1ODY5OTMsMTEuNDQwNzQyNSBDMjAuNTAzNzc0OSwxMC44MzA3NDQ3IDIwLjI3NjUzNDUsMTAuMzM5MjIyMSAxOS45NzY5NzgsOS45NjYxNzQ1NCBDMTkuNjc3NDIxNSw5LjU5MzEyNzAyIDE5LjMzNjQyNTUsOS4yNzEwNDgxOSAxOC45NTM5ODk5LDguOTk5OTM4MDcgQzE4LjU3MTU1NDMsOC43Mjg4Mjc5NSAxOC4xODIwNzY3LDguNTMwMzc1MzQgMTcuNzg1NTU3MSw4LjQwNDU4MDI1IEMxNy4zODkwMzc1LDguMjc4Nzg1MTUgMTcuMDI2MzczNyw4LjE3OTU1ODg1IDE2LjY5NzU2NTgsOC4xMDY5MDEzNCBDMTYuMzY4NzU3OCw4LjAzNDI0MzgyIDE2LjA5NzkxMTEsNy45OTMwMzUwOSAxNS44ODUwMjU2LDcuOTgzMjc1MTIgTDE1LjU2NTY5NzMsNy45Njg2MzUxOCBDMTQuMjU5Njc0Myw4LjAxNjg5Mjc4IDEzLjAwNDU3MDUsOC4yMzI0MjUzMiAxMS44MDAzODYsOC42MTUyMzI4MSBDMTAuNTk2MjAxNCw4Ljk5ODA0MDMgOS41MTUyNTIwNiw5LjUwMzkzMTc5IDguNTU3NTM4LDEwLjEzMjkwNzMgQzcuNTk5ODIzOTUsMTAuNzYxODgyNyA2Ljc0ODU1MjY2LDExLjQ0MjA5OCA2LjAwMzcyNDE0LDEyLjE3MzU1MzEgQzUuMjU4ODk1NjIsMTIuOTA1MDA4MiA0LjU5MTUyOTI3LDEzLjY5NjY0OTggNC4wMDE2MjUwOCwxNC41NDg0Nzc4IEw0LDE0LjU0Njg1MTEgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  "91CG": function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return s
    });
    var n = i("otMs")
      , a = i("6MYt")
      , o = new n.b
      , s = Object(a.a)(o)
  },
  "96Y2": function(e, t, n) {
    "use strict";
    var i = n("lwsE")
      , o = n.n(i)
      , a = n("W8MJ")
      , s = n.n(a)
      , r = n("a1gu")
      , c = n.n(r)
      , u = n("Nsbk")
      , M = n.n(u)
      , l = n("7W2i")
      , d = n.n(l)
      , A = n("cDf5")
      , g = n.n(A)
      , D = n("+B0l")
      , y = n("ewXD")
      , N = n("oCYn")
      , p = n("IdHk")
      , f = n("o0o1")
      , h = n.n(f)
      , j = n("yXPU")
      , I = n.n(j)
      , w = n("xvbi")
      , T = n.n(w)
      , v = n("t/UT")
      , E = n("Qyje")
      , z = n.n(E)
      , O = n("h3Yl")
      , L = n("nVpw")
      , m = n("ZojZ")
      , x = n("ZjbI")
      , b = n("TRC1")
      , k = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , S = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , C = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).ps = null,
          e.inLoading = !1,
          e.isLoadingFailed = !1,
          e.defaultCover = n("oD+a"),
          e.dataList = [],
          e
      }
      var i;
      return d()(t, e),
        s()(t, [{
          key: "createDetailPageUrl",
          value: function(e) {
            return x.a.detailPage(e, z.a.parse(this.urlQueryString))
          }
        }, {
          key: "createReaderPageUrl",
          value: function(e, t) {
            return x.a.readerPage(e, t, z.a.parse(this.urlQueryString))
          }
        }, {
          key: "initPs",
          value: function() {
            this.ps = new v.default(this.listContainer,{
              wheelPropagation: !1
            })
          }
        }, {
          key: "createText",
          value: function(e) {
            var t = e.lastReadEpisodeShortTitle
              , i = e.latestEpisodeShortTitle
              , n = "";
            return n += t ? "看到 ".concat(t) : "未看",
              n += " / ",
              n += e.status === O.b.Incoming ? "未开刊" : i || "--"
          }
        }, {
          key: "createText1",
          value: function(e) {
            switch (e.status) {
              case O.b.Incoming:
                return "未开刊";
              case O.b.OnShow:
                return "更新至 ".concat(e.latestEpisodeShortTitle);
              case O.b.Finished:
                return "共 ".concat(e.episodeCount, " 话")
            }
          }
        }, {
          key: "getHistoryList",
          value: (i = I()(h.a.mark(function e() {
              var t, i, n, a;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.inLoading)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      return this.inLoading = !0,
                        t = L.a.getFavListOrder() || b.a.FavouriteDesc,
                        e.next = 6,
                        L.a.getFavouriteManga(1, 3, t);
                    case 6:
                      if (i = e.sent,
                        n = i.data,
                        a = i.error,
                        this.inLoading = !1,
                        a)
                        return this.isLoadingFailed = !0,
                          m.a.error("追漫列表获取失败:", a),
                          e.abrupt("return");
                      e.next = 14;
                      break;
                    case 14:
                      this.dataList = n.filter(function(e) {
                        return e.status !== O.b.Offline
                      }),
                        this.updatePs();
                    case 16:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "updatePs",
          value: function() {
            var e = this;
            setTimeout(function() {
              e.ps && e.ps.update()
            }, 1)
          }
        }, {
          key: "retry",
          value: function() {
            this.isLoadingFailed = !1,
              this.getHistoryList()
          }
        }, {
          key: "mounted",
          value: function() {
            this.initPs(),
              this.getHistoryList()
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.ps.destroy(),
              this.ps = null
          }
        }, {
          key: "listContainer",
          get: function() {
            return this.$refs.listContainer
          }
        }]),
        t
    }(N.default);
    k([Object(D.d)({
      type: String,
      default: ""
    }), S("design:type", String)], C.prototype, "urlQueryString", void 0);
    var Q = C = k([D.b], C)
      , U = (n("CIp1"),
      n("ayH6"),
      n("KHd+"))
      , P = Object(U.a)(Q, function() {
      var i = this
        , e = i.$createElement
        , n = i._self._c || e;
      return n("div", {
        staticClass: "data-list border-box a-move-in-left"
      }, [n("div", {
        ref: "listContainer",
        staticClass: "list-container p-relative border-box over-hidden"
      }, [i._l(i.dataList, function(e, t) {
        return n("div", {
          staticClass: "data-item p-relative",
          class: {
            "is-last": t === i.dataList.length - 1
          }
        }, [n("a", {
          attrs: {
            href: i.createDetailPageUrl(e.seasonId),
            target: "_blank"
          }
        }, [n("div", {
          staticClass: "manga-cover p-relative bg-cover bg-center bg-no-repeat",
          style: {
            "background-image": "url(" + i.defaultCover + ")"
          },
          attrs: {
            role: "img",
            title: e.title
          }
        }, [n("img", {
          staticClass: "w-100 p-absolute p-zero",
          attrs: {
            src: i.$bfs.bfsLink(e.verticalCover, 200)
          }
        })])]), n("div", {
          staticClass: "text-section h-100 p-absolute border-box"
        }, [n("a", {
          attrs: {
            href: i.createDetailPageUrl(e.seasonId),
            target: "_blank"
          }
        }, [n("jk-multi-line-text", {
          staticClass: "manga-title",
          attrs: {
            title: e.title
          }
        }, [i._v(i._s(e.title))])], 1), n("div", {
          staticClass: "footer-text w-100 p-absolute border-box"
        }, [n("div", {
          staticClass: "text",
          attrs: {
            title: i.createText1(e)
          },
          domProps: {
            textContent: i._s(i.createText1(e))
          }
        }), n("a", {
          staticClass: "read-progress",
          attrs: {
            href: e.lastReadEpisodeId ? i.createReaderPageUrl(e.seasonId, e.lastReadEpisodeId) : i.createDetailPageUrl(e.seasonId),
            target: "_blank"
          }
        }, [n("div", {
          staticClass: "text",
          attrs: {
            title: i.createText(e)
          },
          domProps: {
            textContent: i._s(i.createText(e))
          }
        })])])])])
      }), i.inLoading ? [n("div", {
        staticClass: "loading-hinter t-center"
      }, [i._v("载入中... " + i._s(i.$emoji.happy()))])] : i.isLoadingFailed ? [n("div", {
        staticClass: "failure-hinter t-center"
      }, [n("span", [i._v("载入失败，要不")]), n("a", {
        staticClass: "pointer",
        on: {
          click: i.retry
        }
      }, [i._v("重试")]), n("span", [i._v("一下？" + i._s(i.$emoji.sad()))])])] : i.dataList.length ? i._e() : [n("div", {
        staticClass: "empty-hinter t-center"
      }, [i._v("您还没有看过漫画喔 " + i._s(i.$emoji.helpless()))])]], 2)])
    }, [], !1, null, "b6324bde", null).exports
      , Y = n("wLAv")
      , R = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , B = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , W = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).isPanelActive = !1,
          e.lens = null,
          e.enterTimer = null,
          e.leaveTimer = null,
          e.newFavNum = 0,
          e
      }
      var i;
      return d()(t, e),
        s()(t, [{
          key: "onMouseEnter",
          value: function(e) {
            var t = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.enterTimer = setTimeout(function() {
                t.isPanelActive = !0
              }, 250)
          }
        }, {
          key: "onMouseLeave",
          value: function() {
            var e = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.leaveTimer = setTimeout(function() {
                e.isPanelActive = !1
              }, 250)
          }
        }, {
          key: "initLens",
          value: function() {
            var e = new T.a(this.$refs.dropList);
            e.observe({
              deepWatch: !0
            }),
              this.lens = e
          }
        }, {
          key: "sendMyFollowSPM",
          value: function() {
            Y.a.sendEvent({
              spmId: "777.14.my_follow.click"
            })
          }
        }, {
          key: "mounted",
          value: function() {
            this.initLens(),
              this.getNewFavNum()
          }
        }, {
          key: "getNewFavNum",
          value: (i = I()(h.a.mark(function e() {
              var t;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        L.a.getInitInfo();
                    case 2:
                      t = e.sent,
                        this.newFavNum = t.data ? t.data.newFavNum : 0,
                      0 <= this.newFavNum && Y.a.sendEvent({
                        spmId: "777.14.update_reminder.show"
                      });
                    case 5:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "beforeDestroy",
          value: function() {
            this.lens.disconnect()
          }
        }]),
        t
    }(N.default);
    R([Object(D.d)({
      type: String,
      default: ""
    }), B("design:type", String)], W.prototype, "urlQueryString", void 0);
    var Z = W = R([Object(D.b)({
      components: {
        DataList: P
      }
    })], W)
      , G = (n("xZf4"),
      n("W4Px"),
      Object(U.a)(Z, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "manga-navbar-favourite-manga h-100 p-relative",
          on: {
            mouseenter: e.onMouseEnter,
            mouseleave: e.onMouseLeave
          }
        }, [i("a", {
          attrs: {
            href: "/account-center#/my-favourite",
            target: "_blank"
          },
          on: {
            click: e.sendMyFollowSPM
          }
        }, [i("button", {
          staticClass: "action-button app-button"
        }, [e._v("我的追漫"), e.newFavNum ? i("div", {
          staticClass: "red-dot"
        }) : e._e()])]), i("div", {
          staticClass: "drop-list p-absolute over-hidden"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isPanelActive,
            expression: "isPanelActive"
          }],
          ref: "dropList",
          staticClass: "size-ruler"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-move-out-top"
          }
        }, [e.isPanelActive ? i("data-list", {
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }) : e._e()], 1), i("div", {
          staticClass: "more-btn-container"
        }, [i("a", {
          attrs: {
            href: "/account-center#/my-favourite",
            target: "_blank"
          }
        }, [i("button", {
          staticClass: "more-button app-button w-100"
        }, [e._v("查看全部 >")])])])], 1)])], 1)])
      }, [], !1, null, "131f9974", null).exports)
      , F = n("aZbF")
      , q = n("z8gV")
      , H = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , _ = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , J = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).ps = null,
          e.inLoading = !1,
          e.isLoadingFailed = !1,
          e.defaultCover = n("oD+a"),
          e.dataList = [],
          e
      }
      var i;
      return d()(t, e),
        s()(t, [{
          key: "initPs",
          value: function() {
            this.ps = new v.default(this.listContainer,{
              wheelPropagation: !1
            })
          }
        }, {
          key: "createText1",
          value: function(e) {
            switch (e.status) {
              case F.b.ToBeOpened:
                return "未开刊";
              case F.b.OnShow:
                return "更新至 ".concat(e.latestEpisodeShortTitleFormatted);
              case F.b.Finished:
                return "共 ".concat(e.episodeCount, " 话")
            }
          }
        }, {
          key: "createText2",
          value: function(e) {
            return e.lastReadEpisodeShortTitleFormatted ? "阅读至 ".concat(e.lastReadEpisodeShortTitleFormatted) : "未看"
          }
        }, {
          key: "createDetailPageUrl",
          value: function(e) {
            return x.a.detailPage(e, z.a.parse(this.urlQueryString))
          }
        }, {
          key: "createReaderPageUrl",
          value: function(e, t) {
            return x.a.readerPage(e, t, z.a.parse(this.urlQueryString))
          }
        }, {
          key: "getHistoryList",
          value: (i = I()(h.a.mark(function e() {
              var t, i, n;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.inLoading)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      return this.inLoading = !0,
                        e.next = 5,
                        q.a.getReadHistory(1, 3);
                    case 5:
                      if (t = e.sent,
                        i = t.data,
                        n = t.error,
                        this.inLoading = !1,
                        n)
                        return this.isLoadingFailed = !0,
                          m.a.error("阅读记录获取失败:", n),
                          e.abrupt("return");
                      e.next = 13;
                      break;
                    case 13:
                      this.dataList = i.filter(function(e) {
                        return e.status !== F.b.Offline
                      }),
                        this.updatePs();
                    case 15:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "updatePs",
          value: function() {
            var e = this;
            setTimeout(function() {
              e.ps && e.ps.update()
            }, 1)
          }
        }, {
          key: "retry",
          value: function() {
            this.isLoadingFailed = !1,
              this.getHistoryList()
          }
        }, {
          key: "mounted",
          value: function() {
            this.initPs(),
              this.getHistoryList()
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.ps.destroy(),
              this.ps = null
          }
        }, {
          key: "listContainer",
          get: function() {
            return this.$refs.listContainer
          }
        }]),
        t
    }(N.default);
    H([Object(D.d)({
      type: String,
      default: ""
    }), _("design:type", String)], J.prototype, "urlQueryString", void 0);
    var V = J = H([D.b], J)
      , X = (n("dqcz"),
      n("DOug"),
      Object(U.a)(V, function() {
        var i = this
          , e = i.$createElement
          , n = i._self._c || e;
        return n("div", {
          staticClass: "data-list border-box a-move-in-left"
        }, [n("div", {
          ref: "listContainer",
          staticClass: "list-container p-relative border-box over-hidden"
        }, [i._l(i.dataList, function(e, t) {
          return n("div", {
            staticClass: "data-item p-relative",
            class: {
              "is-last": t === i.dataList.length - 1
            }
          }, [n("a", {
            attrs: {
              href: i.createDetailPageUrl(e.seasonId),
              target: "_blank"
            }
          }, [n("div", {
            staticClass: "manga-cover p-relative bg-cover bg-center bg-no-repeat",
            style: {
              "background-image": "url(" + i.defaultCover + ")"
            },
            attrs: {
              role: "img",
              title: e.title
            }
          }, [n("img", {
            staticClass: "w-100 p-absolute p-zero",
            attrs: {
              src: i.$bfs.bfsLink(e.verticalCover, 200)
            }
          })])]), n("div", {
            staticClass: "text-section h-100 p-absolute border-box"
          }, [n("a", {
            attrs: {
              href: i.createDetailPageUrl(e.seasonId),
              target: "_blank"
            }
          }, [n("jk-multi-line-text", {
            staticClass: "manga-title",
            attrs: {
              title: e.title
            }
          }, [i._v(i._s(e.title))])], 1), n("div", {
            staticClass: "footer-text w-100 p-absolute border-box"
          }, [n("div", {
            staticClass: "text",
            attrs: {
              title: i.createText1(e)
            },
            domProps: {
              textContent: i._s(i.createText1(e))
            }
          }), n("a", {
            staticClass: "read-progress",
            attrs: {
              href: i.createReaderPageUrl(e.seasonId, e.lastReadEpisodeId),
              target: "_blank"
            }
          }, [n("div", {
            staticClass: "text",
            attrs: {
              title: i.createText2(e)
            },
            domProps: {
              textContent: i._s(i.createText2(e))
            }
          })])])])])
        }), i.inLoading ? [n("div", {
          staticClass: "loading-hinter t-center"
        }, [i._v("载入中... " + i._s(i.$emoji.happy()))])] : i.isLoadingFailed ? [n("div", {
          staticClass: "failure-hinter t-center"
        }, [n("span", [i._v("载入失败，要不")]), n("a", {
          staticClass: "pointer",
          on: {
            click: i.retry
          }
        }, [i._v("重试")]), n("span", [i._v("一下？" + i._s(i.$emoji.sad()))])])] : i.dataList.length ? i._e() : [n("div", {
          staticClass: "empty-hinter t-center"
        }, [i._v("您还没有看过漫画喔 " + i._s(i.$emoji.helpless()))])]], 2)])
      }, [], !1, null, "54056cf2", null).exports)
      , K = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , $ = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , ee = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).isPanelActive = !1,
          e.lens = null,
          e.enterTimer = null,
          e.leaveTimer = null,
          e
      }
      return d()(t, e),
        s()(t, [{
          key: "onMouseEnter",
          value: function(e) {
            var t = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.enterTimer = setTimeout(function() {
                t.isPanelActive = !0
              }, 250)
          }
        }, {
          key: "onMouseLeave",
          value: function() {
            var e = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.leaveTimer = setTimeout(function() {
                e.isPanelActive = !1
              }, 250)
          }
        }, {
          key: "initLens",
          value: function() {
            var e = new T.a(this.$refs.dropList);
            e.observe({
              deepWatch: !0
            }),
              this.lens = e
          }
        }, {
          key: "mounted",
          value: function() {
            this.initLens()
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.lens.disconnect()
          }
        }]),
        t
    }(N.default);
    K([Object(D.d)({
      type: String,
      default: ""
    }), $("design:type", String)], ee.prototype, "urlQueryString", void 0);
    var te = ee = K([Object(D.b)({
      components: {
        DataList: X
      }
    })], ee)
      , ie = (n("QPWy"),
      n("GGxs"),
      Object(U.a)(te, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "manga-navbar-history-list h-100 p-relative",
          on: {
            mouseenter: e.onMouseEnter,
            mouseleave: e.onMouseLeave
          }
        }, [e._m(0), i("div", {
          staticClass: "drop-list p-absolute over-hidden"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isPanelActive,
            expression: "isPanelActive"
          }],
          ref: "dropList",
          staticClass: "size-ruler"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-move-out-top"
          }
        }, [e.isPanelActive ? i("data-list", {
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }) : e._e()], 1), i("div", {
          staticClass: "more-btn-container"
        }, [i("a", {
          attrs: {
            href: "/account-center#/read-history",
            target: "_blank"
          }
        }, [i("button", {
          staticClass: "more-button app-button w-100"
        }, [e._v("查看全部 >")])])])], 1)])], 1)])
      }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("a", {
          attrs: {
            href: "/account-center#/read-history",
            target: "_blank"
          }
        }, [t("button", {
          staticClass: "action-button app-button"
        }, [this._v("历史")])])
      }
      ], !1, null, "943b8a78", null).exports)
      , ne = n("f91u")
      , ae = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , oe = function(e) {
      function t() {
        return o()(this, t),
          c()(this, M()(t).apply(this, arguments))
      }
      var i;
      return d()(t, e),
        s()(t, [{
          key: "doLogin",
          value: (i = I()(h.a.mark(function e() {
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        ne.a.OpenQuickLoginPanel();
                    case 2:
                    case "end":
                      return e.stop()
                  }
              }, e)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "doRegister",
          value: function() {
            window.location.href = "https://passport.bilibili.com/register/phone.html"
          }
        }]),
        t
    }(N.default)
      , se = oe = ae([D.b], oe)
      , re = (n("yGUt"),
      n("a+mQ"),
      Object(U.a)(se, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "login-panel h-100 p-relative"
        }, [i("button", {
          staticClass: "action-button app-button",
          on: {
            click: e.doLogin
          }
        }, [e._v("登录")]), i("button", {
          staticClass: "action-button app-button",
          on: {
            click: e.doRegister
          }
        }, [e._v("注册")])])
      }, [], !1, null, "219231b4", null).exports)
      , ce = [function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("div", {
        staticClass: "manga-navbar-manga-logo"
      }, [t("img", {
        staticClass: "logo-img dp-i-block v-middle",
        attrs: {
          src: n("fqmh")
        }
      }), t("span", {
        staticClass: "dp-i-block v-middle"
      }, [this._v("哔哩哔哩漫画")])])
    }
    ]
      , ue = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Me = function(e) {
      function t() {
        return o()(this, t),
          c()(this, M()(t).apply(this, arguments))
      }
      return d()(t, e),
        s()(t, [{
          key: "isInIndexPage",
          get: function() {
            return "/" === window.location.pathname
          }
        }]),
        t
    }(N.default)
      , le = Me = ue([D.b], Me)
      , de = (n("OZ1m"),
      n("u7Bb"),
      Object(U.a)(le, function() {
        var e = this.$createElement;
        return (this._self._c || e)("a", {
          attrs: {
            href: "/",
            target: this.isInIndexPage ? "_self" : "_blank"
          }
        }, [this._m(0)])
      }, ce, !1, null, "0b3e0d9e", null).exports)
      , Ae = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , ge = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , De = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).navItems = [{
            label: "主站",
            link: "//www.bilibili.com",
            icon: n("MGnk")
          }, {
            label: "首页",
            link: "/"
          }, {
            label: "分类",
            link: "/classify#/",
            spmId: "777.14.typebutton.click"
          }, {
            label: "排行榜",
            link: "/ranking"
          }, {
            label: "下载 APP",
            link: "/app-download"
          }],
          e
      }
      return d()(t, e),
        s()(t, [{
          key: "createJumpUrl",
          value: function(e) {
            return this.urlQueryString ? e + "?" + this.urlQueryString : e
          }
        }, {
          key: "reportClickEvent",
          value: function(e) {
            e.spmId && (this.$sendStatisticsEvent ? this.$sendStatisticsEvent({
              reportConfig: {
                spmId: e.spmId
              }
            }) : console.warn("[Navbar]: Non statistics collector, skip reporting."))
          }
        }]),
        t
    }(N.default);
    Ae([Object(D.d)({
      type: String,
      default: ""
    }), ge("design:type", String)], De.prototype, "urlQueryString", void 0);
    var ye = De = Ae([D.b], De)
      , Ne = (n("bLsH"),
      n("fOTo"),
      Object(U.a)(ye, function() {
        var i = this
          , e = i.$createElement
          , n = i._self._c || e;
        return n("div", {
          staticClass: "nav-list h-100 p-relative"
        }, i._l(i.navItems, function(t, e) {
          return n("a", {
            staticClass: "dp-i-block h-100 v-middle",
            attrs: {
              href: i.createJumpUrl(t.link),
              target: "_blank"
            },
            on: {
              click: function(e) {
                return i.reportClickEvent(t)
              }
            }
          }, [n("button", {
            staticClass: "nav-item h-100 app-button",
            class: {
              first: 0 === e
            }
          }, [t.icon ? n("img", {
            staticClass: "item-icon v-middle",
            attrs: {
              src: t.icon
            }
          }) : i._e(), n("span", {
            staticClass: "item-label v-middle"
          }, [i._v(i._s(t.label))])])])
        }), 0)
      }, [], !1, null, "7e5e01b8", null).exports)
      , pe = n("Gi3i")
      , fe = n("rcyk")
      , he = n("vXCh")
      , je = n("RBbJ")
      , Ie = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , we = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Te = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).SUGGESTION_ITEM_HEIGHT = 30,
          e.SUGGESTION_COUNT_PER_PAGE = 5,
          e.SUGGESTION_LOAD_COUNT = 20,
          e.keyword = "",
          e.suggestionList = [],
          e.ps = null,
          e.isExpand = !1,
          e.inLoading = !1,
          e.placeholders = [],
          e.currentPlaceholderIndex = 0,
          e.placeholderTimer = null,
          e.isInputInFocus = !1,
          e.isImeInputStart = !1,
          e.selectedIndex = -1,
          e
      }
      var i, n, a;
      return d()(t, e),
        s()(t, [{
          key: "resetState",
          value: function() {
            this.inLoading = !1,
              this.isExpand = !1,
              this.selectedIndex = -1
          }
        }, {
          key: "observeInput",
          value: function() {
            this.keywordInput$.pipe(Object(pe.a)(500)).subscribe(this.getSuggestionList)
          }
        }, {
          key: "onSubmit",
          value: (a = I()(h.a.mark(function e() {
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      fe.a.goToSearchPage({
                        keyword: this.keyword || this.placeholders[this.currentPlaceholderIndex],
                        query: z.a.parse(this.urlQueryString)
                      });
                    case 1:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return a.apply(this, arguments)
              }
          )
        }, {
          key: "onInputFocus",
          value: function() {
            this.isInputInFocus = !0,
            this.suggestionList.length && this.openSuggestion()
          }
        }, {
          key: "onInputBlur",
          value: function() {
            this.isInputInFocus = !1
          }
        }, {
          key: "onImeInputStart",
          value: function() {
            this.isImeInputStart = !0
          }
        }, {
          key: "onImeInputEnd",
          value: function() {
            this.isImeInputStart = !1
          }
        }, {
          key: "onInputKeyDown",
          value: function(e) {
            if (this.suggestionList.length) {
              switch (e.key) {
                case "ArrowUp":
                  0 < this.selectedIndex && this.selectedIndex--;
                  break;
                case "ArrowDown":
                case "Tab":
                  this.selectedIndex < this.suggestionList.length - 1 && this.selectedIndex++;
                  break;
                default:
                  return
              }
              e.preventDefault(),
                this.selectSuggestionAsKeyword(),
                this.scrollPsToSelectedSuggestion()
            }
          }
        }, {
          key: "selectSuggestionAsKeyword",
          value: function() {
            var e = this.suggestionList[this.selectedIndex];
            this.keyword = this.filterHTML(e)
          }
        }, {
          key: "scrollPsToSelectedSuggestion",
          value: function() {
            var e = Math.ceil((this.selectedIndex + 1) / this.SUGGESTION_COUNT_PER_PAGE) - 1
              , t = this.SUGGESTION_COUNT_PER_PAGE * this.SUGGESTION_ITEM_HEIGHT * e;
            this.suggestionListElement.scrollTop = t
          }
        }, {
          key: "getSuggestionList",
          value: (n = I()(h.a.mark(function e() {
              var t, i, n, a;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = this.keyword,
                      this.inLoading || !t)
                        return t || (this.suggestionList = [],
                          this.resetState()),
                          e.abrupt("return");
                      e.next = 4;
                      break;
                    case 4:
                      return this.inLoading = !0,
                        this.suggestionList = [],
                        e.next = 8,
                        he.a.getSearchSuggestion(t, this.SUGGESTION_LOAD_COUNT);
                    case 8:
                      if (i = e.sent,
                        n = i.data,
                        a = i.error,
                        this.inLoading = !1,
                        a)
                        return m.a.error("搜索关键词获取失败:", a),
                          e.abrupt("return");
                      e.next = 15;
                      break;
                    case 15:
                      this.suggestionList = n,
                        this.selectedIndex = -1,
                        0 < n.length ? this.openSuggestion() : this.closeSuggestion(),
                        this.updatePs();
                    case 19:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return n.apply(this, arguments)
              }
          )
        }, {
          key: "getPlaceholders",
          value: (i = I()(h.a.mark(function e() {
              var t, i;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2,
                        he.a.getSearchPlaceHolder();
                    case 2:
                      t = e.sent,
                        i = t.data,
                      t.error || (this.placeholders = i.map(function(e) {
                        return e.title
                      }));
                    case 6:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "initPlaceholderTimer",
          value: function() {
            var t = this;
            this.placeholderTimer = setInterval(function() {
              if (!t.isInputInFocus) {
                var e = t.currentPlaceholderIndex;
                e < t.placeholders.length - 1 ? e++ : e = 0,
                  t.currentPlaceholderIndex = e
              }
            }, 5e3)
          }
        }, {
          key: "initPs",
          value: function() {
            this.ps = new v.default(this.suggestionListElement,{
              suppressScrollX: !0
            })
          }
        }, {
          key: "updatePs",
          value: function() {
            var e = this;
            this.$nextTick(function() {
              return e.ps.update()
            })
          }
        }, {
          key: "openSuggestion",
          value: function() {
            this.isExpand = !0
          }
        }, {
          key: "closeSuggestion",
          value: function() {
            this.isExpand = !1
          }
        }, {
          key: "goSearchPage",
          value: function(e) {
            fe.a.goToSearchPage({
              keyword: this.filterHTML(e)
            })
          }
        }, {
          key: "filterHTML",
          value: function(e) {
            return je.a.filterHTML(e)
          }
        }, {
          key: "created",
          value: function() {
            this.observeInput(),
              this.getPlaceholders()
          }
        }, {
          key: "mounted",
          value: function() {
            this.initPs(),
              this.initPlaceholderTimer(),
              window.addEventListener("click", this.closeSuggestion)
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.ps.destroy(),
              this.ps = null,
              window.removeEventListener("click", this.closeSuggestion),
              clearInterval(this.placeholderTimer)
          }
        }, {
          key: "suggestionListElement",
          get: function() {
            return this.$refs.suggestionList
          }
        }]),
        t
    }(N.default);
    Ie([Object(D.d)({
      type: String,
      default: ""
    }), we("design:type", String)], Te.prototype, "urlQueryString", void 0);
    var ve = Te = Ie([Object(D.b)({
      domStreams: ["keywordInput$"]
    })], Te)
      , Ee = (n("c3D1"),
      n("5QqO"),
      n("QT1a"),
      Object(U.a)(ve, function() {
        var i = this
          , e = i.$createElement
          , n = i._self._c || e;
        return n("div", {
          staticClass: "search-bar p-relative border-box",
          on: {
            click: function(e) {
              e.stopPropagation()
            }
          }
        }, [n("div", {
          staticClass: "search-bar-bg w-100 p-absolute p-zero ts-dot-4",
          class: {
            expand: i.isExpand
          }
        }), n("form", {
          staticClass: "p-relative",
          on: {
            submit: function(e) {
              return e.preventDefault(),
                i.onSubmit(e)
            }
          }
        }, [n("jk-vertical-center", [n("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !i.keyword.length && !i.isImeInputStart,
            expression: "!keyword.length && !isImeInputStart"
          }],
          staticClass: "placeholder-list w-100 h-100 p-absolute p-zero border-box over-hidden"
        }, i._l(i.placeholders, function(e) {
          return n("div", {
            staticClass: "placeholder-item t-over-hidden t-no-wrap ts-dot-4",
            style: {
              transform: "translate(0, " + -100 * i.currentPlaceholderIndex + "%)"
            }
          }, [i._v(i._s(e))])
        }), 0)]), n("jk-vertical-center", {
          staticClass: "p-relative"
        }, [n("input", {
          directives: [{
            name: "stream",
            rawName: "v-stream:input",
            value: i.keywordInput$,
            expression: "keywordInput$",
            arg: "input"
          }, {
            name: "model",
            rawName: "v-model",
            value: i.keyword,
            expression: "keyword"
          }],
          staticClass: "search-input v-middle",
          attrs: {
            title: "人……人家才不想让你搜索呢！哼！" + i.$emoji.angry()
          },
          domProps: {
            value: i.keyword
          },
          on: {
            compositionstart: i.onImeInputStart,
            compositionend: i.onImeInputEnd,
            focus: i.onInputFocus,
            blur: i.onInputBlur,
            keydown: i.onInputKeyDown,
            input: function(e) {
              e.target.composing || (i.keyword = e.target.value)
            }
          }
        }), n("button", {
          staticClass: "confirm-btn app-button v-middle pointer",
          attrs: {
            type: "submit"
          }
        }, [n("div", {
          staticClass: "search-icon bg-cover bg-center bg-no-repeat"
        })])])], 1), n("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: i.isExpand,
            expression: "isExpand"
          }],
          staticClass: "search-suggestion w-100 p-absolute border-box over-hidden",
          style: {
            height: i.SUGGESTION_ITEM_HEIGHT * i.SUGGESTION_COUNT_PER_PAGE + "px"
          }
        }, [n("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: i.isExpand,
            expression: "isExpand"
          }],
          ref: "suggestionList",
          staticClass: "data-list h-100 p-relative"
        }, i._l(i.suggestionList, function(t, e) {
          return n("div", {
            staticClass: "suggestion-item pointer t-no-wrap t-over-hidden border-box a-move-in-bottom",
            class: {
              selected: e === i.selectedIndex
            },
            style: {
              height: i.SUGGESTION_ITEM_HEIGHT + "px"
            },
            attrs: {
              title: i.filterHTML(t)
            },
            domProps: {
              innerHTML: i._s(t)
            },
            on: {
              click: function(e) {
                return i.goSearchPage(t)
              }
            }
          })
        }), 0)])])
      }, [], !1, null, "e8d20032", null).exports)
      , ze = n("qQS4")
      , Oe = n("ZxM/")
      , Le = n("AMMt")
      , me = n("CnmV")
      , xe = n("rm82")
      , be = n("GdVg")
      , ke = [function() {
      var e = this.$createElement
        , t = this._self._c || e;
      return t("div", {
        staticClass: "f-left"
      }, [t("img", {
        staticClass: "item-icon v-middle",
        attrs: {
          src: n("gtSF")
        }
      }), t("span", {
        staticClass: "v-middle"
      }, [this._v("漫币")])])
    }
      , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("div", {
          staticClass: "f-left"
        }, [t("img", {
          staticClass: "item-icon v-middle",
          attrs: {
            src: n("GW4A")
          }
        }), t("span", {
          staticClass: "v-middle"
        }, [this._v("漫读券")])])
      }
      , function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("div", {
          staticClass: "f-left"
        }, [t("img", {
          staticClass: "item-icon v-middle",
          attrs: {
            src: n("VCHA")
          }
        }), t("span", {
          staticClass: "v-middle"
        }, [this._v("限免卡")])])
      }
    ]
      , Se = n("ZcLj")
      , Ce = n("reI8")
      , Qe = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Ue = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Pe = function(e) {
      function t() {
        return o()(this, t),
          c()(this, M()(t).apply(this, arguments))
      }
      return d()(t, e),
        s()(t, [{
          key: "goAccountCenter",
          value: function() {
            fe.a.goAccountCenter({
              openInNewWindow: !0
            })
          }
        }, {
          key: "createJumpUrl",
          value: function() {
            return x.a.accountCenter()
          }
        }, {
          key: "createJumpMyLimitCouponUrl",
          value: function() {
            return x.a.accountCenter({
              subPage: Ce.a.MyLimitFreeCouponPage
            })
          }
        }, {
          key: "username",
          get: function() {
            return this.userState.nickname || "神秘用户 " + ze.helpless()
          }
        }, {
          key: "coin",
          get: function() {
            return this.walletState.gold || 0
          }
        }, {
          key: "coupon",
          get: function() {
            return this.walletState.coupon || 0
          }
        }, {
          key: "limitedFreeCoupon",
          get: function() {
            return this.walletState.limitedFreeCoupon || 0
          }
        }]),
        t
    }(N.default);
    Qe([Object(D.d)({
      type: String,
      default: ""
    }), Ue("design:type", String)], Pe.prototype, "urlQueryString", void 0);
    var Ye = Pe = Qe([Object(D.b)({
      filters: {
        labelFormat: function(e) {
          return Se.b.LabelFormat.tenThousand(e || 0)
        }
      },
      subscriptions: function() {
        return {
          userState: p.b,
          walletState: be.b
        }
      }
    })], Pe)
      , Re = (n("aZ12"),
      n("TXC7"),
      Object(U.a)(Ye, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "user-info-panel border-box"
        }, [i("div", {
          staticClass: "user-name t-center t-no-wrap t-over-hidden",
          attrs: {
            title: e.username
          }
        }, [e._v(e._s(e.username))]), i("a", {
          attrs: {
            href: e.createJumpUrl(),
            target: "_blank"
          }
        }, [i("div", {
          staticClass: "info-item f-clear"
        }, [e._m(0), i("div", {
          staticClass: "f-right",
          attrs: {
            title: "漫币：" + e.coin
          }
        }, [e._v(e._s(e._f("labelFormat")(e.coin)))])])]), i("a", {
          attrs: {
            href: e.createJumpUrl(),
            target: "_blank"
          }
        }, [i("div", {
          staticClass: "info-item f-clear"
        }, [e._m(1), i("div", {
          staticClass: "f-right",
          attrs: {
            title: "漫读券：" + e.coupon
          }
        }, [e._v(e._s(e._f("labelFormat")(e.coupon)))])])]), i("a", {
          attrs: {
            href: e.createJumpMyLimitCouponUrl(),
            target: "_blank"
          }
        }, [i("div", {
          staticClass: "info-item f-clear"
        }, [e._m(2), i("div", {
          staticClass: "f-right",
          attrs: {
            title: "限免卡：" + e.limitedFreeCoupon
          }
        }, [e._v(e._s(e._f("labelFormat")(e.limitedFreeCoupon)))])])])])
      }, ke, !1, null, "16657f76", null).exports)
      , Be = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , We = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Ze = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).lens = null,
          e.walletAction$ = be.a,
          e.userAction$ = p.a,
          e.coin = 0,
          e.coupon = 0,
          e.enterTimer = null,
          e.leaveTimer = null,
          e.isPanelActive = !1,
          e.isUserDataEverFetched = !1,
          e
      }
      var i;
      return d()(t, e),
        s()(t, [{
          key: "onMouseEnter",
          value: function(e) {
            var t = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.enterTimer = setTimeout(function() {
                t.isPanelActive = !0,
                  t.getUserData(),
                  t.getWalletData()
              }, 250)
          }
        }, {
          key: "onMouseLeave",
          value: function() {
            var e = this;
            clearTimeout(this.enterTimer),
              clearTimeout(this.leaveTimer),
              this.leaveTimer = setTimeout(function() {
                e.isPanelActive = !1
              }, 250)
          }
        }, {
          key: "getUserData",
          value: (i = I()(h.a.mark(function e() {
              var t, i;
              return h.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.isUserDataEverFetched)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      return e.next = 4,
                        me.a.getUserData();
                    case 4:
                      if (t = e.sent,
                        i = t.data,
                        t.error)
                        return Le.a.error("用户数据获取失败，请稍后再试，非常抱歉 " + ze.sad()),
                          e.abrupt("return");
                      e.next = 10;
                      break;
                    case 10:
                      p.a.next(function() {
                        return i
                      }),
                        this.isUserDataEverFetched = !0;
                    case 12:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "getWalletData",
          value: function() {
            xe.a.refreshWalletData()
          }
        }, {
          key: "initLens",
          value: function() {
            var e = new T.a(this.$refs.dropList);
            e.observe({
              deepWatch: !0
            }),
              this.lens = e
          }
        }, {
          key: "createJumpUrl",
          value: function() {
            return x.a.accountCenter()
          }
        }, {
          key: "mounted",
          value: function() {
            this.initLens()
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.lens.disconnect()
          }
        }]),
        t
    }(N.default);
    Be([Object(D.d)({
      type: String,
      default: ""
    }), We("design:type", String)], Ze.prototype, "urlQueryString", void 0),
      Be([Object(Oe.a)({
        isShowQuickLoginPanel: !1
      }), We("design:type", Function), We("design:paramtypes", []), We("design:returntype", Promise)], Ze.prototype, "getUserData", null),
      Be([Object(Oe.a)({
        isShowQuickLoginPanel: !1
      }), We("design:type", Function), We("design:paramtypes", []), We("design:returntype", void 0)], Ze.prototype, "getWalletData", null);
    var Ge = Ze = Be([Object(D.b)({
      components: {
        InfoPanel: Re
      },
      subscriptions: function() {
        return {
          userState: p.b,
          walletState: be.b
        }
      }
    })], Ze)
      , Fe = (n("BFcb"),
      n("tXh4"),
      Object(U.a)(Ge, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "user-panel p-relative",
          on: {
            mouseenter: e.onMouseEnter,
            mouseleave: e.onMouseLeave
          }
        }, [i("div", {
          staticClass: "drop-list p-absolute over-hidden"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isPanelActive,
            expression: "isPanelActive"
          }],
          ref: "dropList",
          staticClass: "size-ruler"
        }, [i("transition", {
          attrs: {
            "leave-active-class": "a-move-out-top"
          }
        }, [i("info-panel", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isPanelActive,
            expression: "isPanelActive"
          }],
          staticClass: "a-move-in-bottom",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        })], 1), i("div", {
          staticClass: "logout-btn-container"
        }, [i("a", {
          attrs: {
            href: "//passport.bilibili.com/login?act=exit"
          }
        }, [i("button", {
          staticClass: "logout-button app-button w-100"
        }, [e._v("退出登录")])])])], 1)])], 1), i("a", {
          attrs: {
            href: e.createJumpUrl(),
            target: "_blank"
          }
        }, [i("div", {
          staticClass: "user-avatar b-circle bg-cover bg-center pointer ts-dot-4",
          class: {
            "large-mode": e.isPanelActive
          },
          style: {
            "background-image": "url(" + e.$bfs.bfsLink(e.userState.avatar, 120) + ")"
          },
          attrs: {
            role: "img"
          }
        })])])
      }, [], !1, null, "48ff9ece", null).exports)
      , qe = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , He = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , _e = function(e) {
      function t() {
        var e;
        return o()(this, t),
          (e = c()(this, M()(t).apply(this, arguments))).isHideNavbar = !1,
          e.lastScrollTop = 0,
          e
      }
      return d()(t, e),
        s()(t, [{
          key: "onScroll",
          value: function(e) {
            var t = y.a.getScrollTop();
            this.isHideNavbar = 100 < t && 0 < t - this.lastScrollTop,
              this.lastScrollTop = t
          }
        }, {
          key: "mounted",
          value: function() {
            this.isFixMode || window.addEventListener("scroll", this.onScroll)
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.isFixMode || window.removeEventListener("scroll", this.onScroll)
          }
        }, {
          key: "isLogin",
          get: function() {
            return 0 < this.userState.uid
          }
        }]),
        t
    }(N.default);
    qe([Object(D.d)({
      type: Boolean,
      default: !1
    }), He("design:type", Boolean)], _e.prototype, "isFixMode", void 0),
      qe([Object(D.d)({
        type: Boolean,
        default: !0
      }), He("design:type", Boolean)], _e.prototype, "isShowSearchBar", void 0),
      qe([Object(D.d)({
        type: Boolean,
        default: !0
      }), He("design:type", Boolean)], _e.prototype, "isShowNavLink", void 0),
      qe([Object(D.d)({
        type: Boolean,
        default: !0
      }), He("design:type", Boolean)], _e.prototype, "isShowLogo", void 0),
      qe([Object(D.d)({
        type: String,
        default: ""
      }), He("design:type", String)], _e.prototype, "urlQueryString", void 0);
    var Je = _e = qe([Object(D.b)({
      components: {
        FavouriteManga: G,
        HistoryList: ie,
        MangaLogo: de,
        NavList: Ne,
        SearchBar: Ee,
        UserPanel: Fe,
        LoginPanel: re
      },
      subscriptions: function() {
        return {
          userState: p.b
        }
      }
    })], _e)
      , Ve = (n("ZMJr"),
      n("Z9iJ"),
      n("qXxY"),
      Object(U.a)(Je, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("nav", {
          staticClass: "manga-navbar p-relative ts-dot-4",
          class: [e.isHideNavbar ? "hide-mode" : ""]
        }, [i("div", {
          staticClass: "size-ruler dp-flex align-center space-between h-100 m-auto t-no-wrap"
        }, [i("div", {
          staticClass: "left-part h-100"
        }, [i("jk-vertical-center", {
          staticClass: "h-100"
        }, [e.isShowLogo ? i("manga-logo", {
          staticClass: "manga-logo dp-i-block v-middle"
        }) : e._e(), e.isShowNavLink ? i("nav-list", {
          staticClass: "dp-i-block v-middle",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }) : e._e()], 1)], 1), e._t("centerPart"), i("div", {
          staticClass: "right-part h-100"
        }, [i("jk-vertical-center", {
          staticClass: "h-100"
        }, [i("search-bar", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isShowSearchBar,
            expression: "isShowSearchBar"
          }],
          staticClass: "dp-i-block v-middle",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }), e.isLogin ? [i("user-panel", {
          staticClass: "dp-i-block v-middle",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }), i("history-list", {
          staticClass: "dp-i-block v-middle",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        }), i("favourite-manga", {
          staticClass: "dp-i-block v-middle",
          attrs: {
            "url-query-string": e.urlQueryString
          }
        })] : [i("login-panel", {
          staticClass: "dp-i-block v-middle"
        })]], 2)], 1)], 2)])
      }, [], !1, null, "607c047e", null));
    t.a = Ve.exports
  },
  "9ljz": function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return c
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("ZojZ")
      , c = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "getItem",
        value: function(e) {
          try {
            return localStorage.getItem(e)
          } catch (e) {
            return r.a.error("Failed to get data from local storage:", e),
              null
          }
        }
      }, {
        key: "setItem",
        value: function(e, t) {
          try {
            localStorage.setItem(e, t)
          } catch (e) {
            r.a.error("Failed to set data to local storage:", e)
          }
        }
      }]),
        e
    }()
  },
  AMMt: function(e, t, i) {
    "use strict";
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("ZcLj")
      , c = i("oCYn")
      , u = i("a1gu")
      , M = i.n(u)
      , l = i("Nsbk")
      , d = i.n(l)
      , A = i("7W2i")
      , g = i.n(A)
      , D = i("cDf5")
      , y = i.n(D)
      , N = i("+B0l")
      , p = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , f = function(e) {
      function t() {
        var e;
        return a()(this, t),
          (e = M()(this, d()(t).apply(this, arguments))).hinters = [],
          e
      }
      return g()(t, e),
        s()(t, [{
          key: "createStyle",
          value: function(e) {
            var t = {
              maxWidth: "400px",
              padding: "15px",
              "margin-top": "10px",
              color: "#fff",
              "box-sizing": "border-box",
              "border-radius": "5px"
            };
            switch (e) {
              case "info":
                t["background-color"] = "#2196F3";
                break;
              case "success":
                t["background-color"] = "#4CAF50";
                break;
              case "warning":
                t["background-color"] = "#FF9800";
                break;
              case "error":
                t["background-color"] = "#FF5722"
            }
            return t
          }
        }, {
          key: "addHinter",
          value: function(e) {
            var t = this
              , i = {
              id: r.c.randomString(),
              text: e.text,
              type: e.type,
              timeout: e.timeout
            };
            this.hinters.push(i),
              setTimeout(function() {
                var e = t.hinters.indexOf(i);
                -1 < e && t.hinters.splice(e, 1)
              }, i.timeout)
          }
        }]),
        t
    }(c.default)
      , h = f = p([N.b], f)
      , j = (i("tecp"),
      i("KHd+"))
      , I = Object(j.a)(h, function() {
      var t = this
        , e = t.$createElement
        , i = t._self._c || e;
      return i("div", {
        staticClass: "snake-hinter p-fixed"
      }, [i("transition-group", {
        staticClass: "container",
        attrs: {
          "leave-active-class": "a-move-out-top",
          tag: "div"
        }
      }, t._l(t.hinters, function(e) {
        return i("div", {
          key: e.id,
          staticClass: "snake-hinter-item a-move-in-top ts-dot-2",
          style: t.createStyle(e.type)
        }, [i("span", {
          staticClass: "text"
        }, [t._v(t._s(e.text))])])
      }), 0)], 1)
    }, [], !1, null, "08fec2bd", null).exports;
    i.d(t, "a", function() {
      return v
    });
    var w = null
      , T = !1
      , v = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "hint",
        value: function(e, t, i) {
          var n = 1 < arguments.length && void 0 !== t ? t : "info"
            , a = 2 < arguments.length && void 0 !== i ? i : 3e3;
          w.snakeHinter.addHinter({
            text: e,
            type: n,
            timeout: a
          })
        }
      }, {
        key: "info",
        value: function(e, t) {
          this.hint(e, "info", t)
        }
      }, {
        key: "success",
        value: function(e, t) {
          this.hint(e, "success", t)
        }
      }, {
        key: "warning",
        value: function(e, t) {
          this.hint(e, "warning", t)
        }
      }, {
        key: "error",
        value: function(e, t) {
          this.hint(e, "error", t)
        }
      }, {
        key: "init",
        value: function() {
          if (!T) {
            w = new c.default({
              components: {
                SnakeHinter: I
              },
              template: '<div><snake-hinter ref="snakeHinter"></snake-hinter></div>',
              computed: {
                snakeHinter: function() {
                  return this.$refs.snakeHinter
                }
              }
            });
            var e = document.createElement("div");
            e.id = "hinter-element-" + r.c.randomString(),
              document.body.appendChild(e),
              w.$mount(e),
              T = !0
          }
        }
      }]),
        e
    }()
  },
  B7eG: function(e, t, i) {
    "use strict";
    var n, a;
    i.d(t, "a", function() {
      return n
    }),
      (a = n || (n = {}))[a.NotAvailable = -1] = "NotAvailable",
      a[a.SinglePage = 0] = "SinglePage",
      a[a.DoublePage = 1] = "DoublePage"
  },
  BFcb: function(e, t, i) {
    "use strict";
    var n = i("jc5v");
    i.n(n).a
  },
  BeNJ: function(e, t, i) {},
  BgRQ: function(e, t, i) {
    "use strict";
    var n = i("+Lfg");
    i.n(n).a
  },
  C0Cn: function(e, t, i) {},
  CIp1: function(e, t, i) {
    "use strict";
    var n = i("W4SE");
    i.n(n).a
  },
  COaM: function(e, t, i) {
    "use strict";
    i.d(t, "c", function() {
      return x
    }),
      i.d(t, "f", function() {
        return o
      }),
      i.d(t, "e", function() {
        return u
      }),
      i.d(t, "d", function() {
        return A
      }),
      i.d(t, "b", function() {
        return D
      }),
      i.d(t, "a", function() {
        return N
      });
    var n, a, o, s, r, c, u, M, l, d, A, g, D, y, N, p, f = i("lwsE"), h = i.n(f), j = i("W8MJ"), I = i.n(j), w = i("cDf5"), T = i.n(w), v = i("1aRO"), E = i("ZS4h"), z = i("6+LV"), O = i("XGqN"), L = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : T()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }, m = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : T()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }, x = function() {
      function e() {
        h()(this, e),
          this._id = 0,
          this._seasonId = 0,
          this.authorName = [],
          this.episodeList = [],
          this.title = "",
          this.comicType = n.Manga,
          this.evaluate = "",
          this.defaultReaderMode = o.Manga,
          this.horizontalCover = "",
          this.verticalCover = "",
          this.squareCover = "",
          this.onShowStatus = u.Incoming,
          this.status = r.Online,
          this.releaseTime = "",
          this.payMode = l.Free,
          this.isLimited = z.a.True,
          this.lastReadEpisodeOrder = 0,
          this._lastReadEpisodeShortTitle = "",
          this.lastReadEpisodeId = 0,
          this.latestEpisodeOrder = 0,
          this._latestEpisodeShortTitle = "",
          this._allowedReaderMode = 0,
          this.styles = [],
          this.total = 0,
          this.updateSchedule = "",
          this._isFavourite = z.a.False,
          this.discountType = A.None,
          this.discount = 0,
          this.discountEndTime = "",
          this.epDiscountType = D.NoDiscount,
          this.batchDiscountType = N.NoDiscount,
          this.hasFavActivity = !1,
          this.favFreeAmount = 0
      }
      return I()(e, [{
        key: "id",
        get: function() {
          return this._id || this._seasonId
        }
      }, {
        key: "lastReadEpisodeShortTitle",
        get: function() {
          return this._lastReadEpisodeShortTitle
        }
      }, {
        key: "lastReadEpisodeShortTitleFormatted",
        get: function() {
          return E.a.formatShortTitle(this._lastReadEpisodeShortTitle)
        }
      }, {
        key: "lastReadEpisodeShortTitleFormattedPrefix",
        get: function() {
          return E.a.formatShortTitle(this._lastReadEpisodeShortTitle, "第")
        }
      }, {
        key: "latestEpisodeShortTitle",
        get: function() {
          return this._latestEpisodeShortTitle
        }
      }, {
        key: "latestEpisodeShortTitleFormatted",
        get: function() {
          return E.a.formatShortTitle(this._latestEpisodeShortTitle)
        }
      }, {
        key: "allowedReaderMode",
        get: function() {
          var t = this;
          return [o.Landscape, o.Manga, o.Horizontal, o.Scrolling].filter(function(e) {
            return (t._allowedReaderMode | e) === t._allowedReaderMode
          })
        }
      }, {
        key: "isFavourite",
        get: function() {
          return this._isFavourite === z.a.True
        }
      }, {
        key: "onShowStatusText",
        get: function() {
          switch (this.onShowStatus) {
            case u.Incoming:
              return "未开刊";
            case u.Finished:
              return "已完结";
            case u.OnShow:
              return "连载中"
          }
        }
      }, {
        key: "episodeStatusText",
        get: function() {
          switch (this.onShowStatus) {
            case u.Finished:
              return "[已完结] 共 ".concat(this.total, " 话");
            case u.Incoming:
              return "未开刊";
            case u.OnShow:
              return "更新至 ".concat(this.latestEpisodeShortTitleFormatted || "--")
          }
        }
      }]),
        e
    }();
    L([Object(v.a)("id"), m("design:type", Number)], x.prototype, "_id", void 0),
      L([Object(v.a)("season_id"), m("design:type", Number)], x.prototype, "_seasonId", void 0),
      L([Object(v.a)("author_name"), m("design:type", Array)], x.prototype, "authorName", void 0),
      L([Object(v.a)({
        name: "ep_list",
        type: O.b
      }), m("design:type", Array)], x.prototype, "episodeList", void 0),
      L([Object(v.a)(), m("design:type", String)], x.prototype, "title", void 0),
      L([Object(v.a)("comic_type"), m("design:type", Number)], x.prototype, "comicType", void 0),
      L([Object(v.a)("evaluate"), m("design:type", String)], x.prototype, "evaluate", void 0),
      L([Object(v.a)("page_default"), m("design:type", Number)], x.prototype, "defaultReaderMode", void 0),
      L([Object(v.a)("horizontal_cover"), m("design:type", String)], x.prototype, "horizontalCover", void 0),
      L([Object(v.a)("vertical_cover"), m("design:type", String)], x.prototype, "verticalCover", void 0),
      L([Object(v.a)("square_cover"), m("design:type", String)], x.prototype, "squareCover", void 0),
      L([Object(v.a)("is_finish"), m("design:type", Number)], x.prototype, "onShowStatus", void 0),
      L([Object(v.a)("status"), m("design:type", Number)], x.prototype, "status", void 0),
      L([Object(v.a)("release_time"), m("design:type", String)], x.prototype, "releaseTime", void 0),
      L([Object(v.a)("pay_mode"), m("design:type", Number)], x.prototype, "payMode", void 0),
      L([Object(v.a)("is_limit"), m("design:type", Number)], x.prototype, "isLimited", void 0),
      L([Object(v.a)("read_order"), m("design:type", Number)], x.prototype, "lastReadEpisodeOrder", void 0),
      L([Object(v.a)("read_short_title"), m("design:type", String)], x.prototype, "_lastReadEpisodeShortTitle", void 0),
      L([Object(v.a)("read_epid"), m("design:type", Number)], x.prototype, "lastReadEpisodeId", void 0),
      L([Object(v.a)("last_ord"), m("design:type", Number)], x.prototype, "latestEpisodeOrder", void 0),
      L([Object(v.a)("last_short_title"), m("design:type", String)], x.prototype, "_latestEpisodeShortTitle", void 0),
      L([Object(v.a)("page_allow"), m("design:type", Number)], x.prototype, "_allowedReaderMode", void 0),
      L([Object(v.a)(), m("design:type", Array)], x.prototype, "styles", void 0),
      L([Object(v.a)("total"), m("design:type", Number)], x.prototype, "total", void 0),
      L([Object(v.a)("renewal_time"), m("design:type", String)], x.prototype, "updateSchedule", void 0),
      L([Object(v.a)("fav"), m("design:type", Number)], x.prototype, "_isFavourite", void 0),
      L([Object(v.a)("discount_type"), m("design:type", Number)], x.prototype, "discountType", void 0),
      L([Object(v.a)("discount"), m("design:type", Number)], x.prototype, "discount", void 0),
      L([Object(v.a)("discount_end"), m("design:type", String)], x.prototype, "discountEndTime", void 0),
      L([Object(v.a)("ep_discount_type"), m("design:type", Number)], x.prototype, "epDiscountType", void 0),
      L([Object(v.a)("batch_discount_type"), m("design:type", Number)], x.prototype, "batchDiscountType", void 0),
      L([Object(v.a)("has_fav_activity"), m("design:type", Boolean)], x.prototype, "hasFavActivity", void 0),
      L([Object(v.a)("fav_free_amount"), m("design:type", Number)], x.prototype, "favFreeAmount", void 0),
      x = L([Object(v.b)()], x),
      (a = n || (n = {}))[a.OnePage = 0] = "OnePage",
      a[a.Manga = 1] = "Manga",
      (s = o || (o = {}))[s.NotAvailable = -1] = "NotAvailable",
      s[s.Scrolling = 1] = "Scrolling",
      s[s.Horizontal = 2] = "Horizontal",
      s[s.Manga = 4] = "Manga",
      s[s.Landscape = 8] = "Landscape",
      (c = r || (r = {}))[c.Offline = -1] = "Offline",
      c[c.Online = 0] = "Online",
      (M = u || (u = {}))[M.OnShow = 0] = "OnShow",
      M[M.Finished = 1] = "Finished",
      M[M.Incoming = -1] = "Incoming",
      (d = l || (l = {}))[d.Free = 0] = "Free",
      d[d.Pay = 1] = "Pay",
      (g = A || (A = {}))[g.None = 0] = "None",
      g[g.Discount = 1] = "Discount",
      g[g.FreeForLimit = 2] = "FreeForLimit",
      g[g.FreeForAppointChapters = 3] = "FreeForAppointChapters",
      (y = D || (D = {}))[y.NoDiscount = 0] = "NoDiscount",
      y[y.Discount = 1] = "Discount",
      (p = N || (N = {}))[p.NoDiscount = 0] = "NoDiscount",
      p[p.Discount = 1] = "Discount"
  },
  CSES: function(e, t, i) {},
  CnmV: function(e, t, i) {
    "use strict";
    var n = i("o0o1")
      , u = i.n(n)
      , a = i("yXPU")
      , o = i.n(a)
      , s = i("lwsE")
      , r = i.n(s)
      , c = i("W8MJ")
      , M = i.n(c)
      , l = i("qQS4")
      , d = i("XH3h")
      , A = i("AMMt")
      , g = i("otMs")
      , D = i("6MYt")
      , y = new g.a;
    y.axios.interceptors.request.use(function(e) {
      return e.withCredentials = !0,
        e
    });
    var N = Object(D.a)(y)
      , p = i("ZojZ")
      , f = i("IdHk");
    i.d(t, "a", function() {
      return h
    });
    var h = function() {
      function e() {
        r()(this, e)
      }
      var t, i;
      return M()(e, null, [{
        key: "getUserData",
        value: (i = o()(u.a.mark(function e() {
            var t, i, n, a, o, s, r, c;
            return u.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return t = {
                      data: null,
                      error: null,
                      code: null,
                      message: null,
                      status: null
                    },
                      e.next = 3,
                      N.get({
                        url: "https://api.bilibili.com/x/web-interface/nav"
                      });
                  case 3:
                    return i = e.sent,
                      n = i.data,
                      a = i.error,
                      o = i.code,
                      s = i.message,
                      r = i.status,
                      a ? t.error = a : (t.code = o,
                        t.message = s,
                        t.status = r,
                        c = new d.a,
                      0 === o && (c.avatar = n.face,
                        c.biliCoin = n.wallet.bcoin_balance,
                        c.level = n.level_info.current_level,
                        c.nickname = n.uname,
                        c.uid = n.mid),
                        t.data = c),
                      e.abrupt("return", t);
                  case 11:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function() {
              return i.apply(this, arguments)
            }
        )
      }, {
        key: "refreshUserData",
        value: (t = o()(u.a.mark(function e() {
            var t, i, n;
            return u.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getUserData();
                  case 2:
                    if (t = e.sent,
                      i = t.data,
                      n = t.error)
                      return A.a.error("用户数据获取失败，可能会影响您的使用，请刷新页面，非常抱歉 " + l.sad()),
                        p.a.error("用户数据获取失败:", n),
                        e.abrupt("return");
                    e.next = 9;
                    break;
                  case 9:
                    f.a.next(function() {
                      return i
                    });
                  case 10:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          })),
            function() {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }()
  },
  DOug: function(e, t, i) {
    "use strict";
    var n = i("YB9p");
    i.n(n).a
  },
  DdwP: function(e, t, i) {},
  E7aQ: function(e, t, i) {
    "use strict";
    var n, a;
    i.d(t, "a", function() {
      return n
    }),
      (a = n || (n = {})).Light = "light",
      a.Dark = "dark"
  },
  EKx8: function(e, t, i) {},
  EfIP: function(e, t, i) {},
  FmG3: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+cmVhZGVyX29wdGlvbl9pY288L3RpdGxlPjxwYXRoIGQ9Ik0xMi44NSwxLjY4bDcuNjYsNC40M2ExLjY4LDEuNjgsMCwwLDEsLjg1LDEuNDd2OC44NGExLjY4LDEuNjgsMCwwLDEtLjg1LDEuNDdsLTcuNjYsNC40M2ExLjcyLDEuNzIsMCwwLDEtMS43LDBMMy40OSwxNy44OWExLjY4LDEuNjgsMCwwLDEtLjg1LTEuNDdWNy41OGExLjY4LDEuNjgsMCwwLDEsLjg1LTEuNDdsNy42Ni00LjQzQTEuNzIsMS43MiwwLDAsMSwxMi44NSwxLjY4Wm0tLjcsMS4yMWEuMzIuMzIsMCwwLDAtLjMsMEw0LjE5LDcuMzJBLjMuMywwLDAsMCw0LDcuNTh2OC44NGEuMy4zLDAsMCwwLC4xNS4yNmw3LjY2LDQuNDNhLjMyLjMyLDAsMCwwLC4zLDBsNy42Ni00LjQzYS4zLjMsMCwwLDAsLjE1LS4yNlY3LjU4YS4zLjMsMCwwLDAtLjE1LS4yNlpNMTIsMTUuN0EzLjcsMy43LDAsMSwxLDE1LjcsMTIsMy43LDMuNywwLDAsMSwxMiwxNS43Wm0wLTEuNEEyLjMsMi4zLDAsMSwwLDkuNywxMiwyLjMsMi4zLDAsMCwwLDEyLDE0LjNaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eTowLjg5OTk5OTk3NjE1ODE0MjE7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4="
  },
  FuT8: function(e, t, i) {
    "use strict";
    var n = i("kfwj");
    i.n(n).a
  },
  GGxs: function(e, t, i) {
    "use strict";
    var n = i("hrAu");
    i.n(n).a
  },
  GW4A: function(e, t) {
    e.exports = "data:image/png;base64,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"
  },
  GdVg: function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
      return r
    }),
      i.d(t, "a", function() {
        return s
      });
    var n = i("26FU")
      , a = i("dC0D")
      , o = new (i("+r91").a)
      , s = new n.a(function(e) {
        return e
      }
    )
      , r = s.pipe(Object(a.a)(function(e, t) {
      return t(e)
    }, o))
  },
  HcuV: function(e, t, i) {},
  Hsxi: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICB3aWR0aD0iMzYwcHgiIGhlaWdodD0iMzYwcHgiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgIGZpbGw9Im5vbmUiCiAgICAgICAgZD0iTTAuMDAwLDAuMDAwIEwzNjAuMDAwLDAuMDAwIEwzNjAuMDAwLDM2MC4wMDAgTDAuMDAwLDM2MC4wMDAgTDAuMDAwLDAuMDAwIFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJyZ2IoMjU1LCA3NywgNTkpIgogICAgICAgIGQ9Ik0yMDguMDAwLDM1NS4wMDAgTDE1My4wMDAsMzU1LjAwMCBDMTUwLjIzOSwzNTUuMDAwIDE0OC4wMDAsMzUyLjc2MSAxNDguMDAwLDM1MC4wMDAgTDE0OC4wMDAsMjk1LjQwNiBDMTQ4LjAwMCwyOTIuNjQ1IDE1MC4yMzksMjkwLjQwNiAxNTMuMDAwLDI5MC40MDYgTDIwOC4wMDAsMjkwLjQwNiBDMjEwLjc2MSwyOTAuNDA2IDIxMy4wMDAsMjkyLjY0NSAyMTMuMDAwLDI5NS40MDYgTDIxMy4wMDAsMzUwLjAwMCBDMjEzLjAwMCwzNTIuNzYxIDIxMC43NjEsMzU1LjAwMCAyMDguMDAwLDM1NS4wMDAgWk0yMDguMDAwLDI1My40MjcgTDE1My4wMDAsMjUzLjQyNyBDMTUwLjIzOSwyNTMuNDI3IDE0OC4wMDAsMjUxLjE4OCAxNDguMDAwLDI0OC40MjcgTDE0OC4wMDAsMTAuMDAwIEMxNDguMDAwLDcuMjM5IDE1MC4yMzksNS4wMDAgMTUzLjAwMCw1LjAwMCBMMjA4LjAwMCw1LjAwMCBDMjEwLjc2MSw1LjAwMCAyMTMuMDAwLDcuMjM5IDIxMy4wMDAsMTAuMDAwIEwyMTMuMDAwLDI0OC40MjcgQzIxMy4wMDAsMjUxLjE4OCAyMTAuNzYxLDI1My40MjcgMjA4LjAwMCwyNTMuNDI3IFoiLz4KPC9zdmc+Cg=="
  },
  HxQE: function(e, t, i) {},
  IX4l: function(e, t, i) {
    "use strict";
    var n = i("skzo");
    i.n(n).a
  },
  IdHk: function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
      return r
    }),
      i.d(t, "a", function() {
        return s
      });
    var n = i("26FU")
      , a = i("dC0D")
      , o = new (i("XH3h").a)
      , s = new n.a(function(e) {
        return e
      }
    )
      , r = s.pipe(Object(a.a)(function(e, t) {
      return t(e)
    }, o))
  },
  IsZQ: function(e, t, i) {},
  JBbL: function(e, t, i) {
    "use strict";
    var n = i("Jbuo");
    i.n(n).a
  },
  Jbuo: function(e, t, i) {},
  Jd6w: function(e, t, i) {},
  KTcK: function(e, t, i) {
    "use strict";
    var n = i("LmNX");
    i.n(n).a
  },
  KqvJ: function(e, t, i) {},
  L0w8: function(e, t, i) {
    "use strict";
    var n = i("CSES");
    i.n(n).a
  },
  LmNX: function(e, t, i) {},
  MGnk: function(e, t) {
    e.exports = "data:image/png;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8="
  },
  Malv: function(e, t, i) {},
  Naq3: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+bmF2X2Nsb3NlX2ljbzwvdGl0bGU+PHBhdGggZD0iTTEyLDEwLjg3bDUuNDMtNS40NGEuODEuODEsMCwwLDEsMS4xNCwxLjE0TDEzLjEzLDEybDUuNDQsNS40M2EuODEuODEsMCwwLDEtMS4xNCwxLjE0TDEyLDEzLjEzLDYuNTcsMTguNTdhLjgxLjgxLDAsMCwxLTEuMTQtMS4xNEwxMC44NywxMiw1LjQzLDYuNTdBLjgxLjgxLDAsMCwxLDYuNTcsNS40M1oiIHN0eWxlPSJmaWxsOiM2YzcyN2UiLz48L3N2Zz4="
  },
  O4FU: function(e, t, i) {
    "use strict";
    var n = i("DdwP");
    i.n(n).a
  },
  ODuK: function(e, t, a) {
    "use strict";
    a.r(t);
    a("mNvP"),
      a("201c"),
      a("rNO/");
    var i = a("Y6y7")
      , D = a("qQS4")
      , n = a("+B0l")
      , o = a("0/uQ")
      , y = a("oCYn")
      , s = a("zhlO")
      , r = (a("FDjc"),
      a("1Qz/"),
      a("799b"),
      a("faiq"),
      a("qcRv"),
      a("yyZF"),
      a("dLNy"),
      a("E7aQ"))
      , c = a("SiI8")
      , N = a("AMMt")
      , u = a("yhYn")
      , M = a("t5Pa")
      , p = a("CnmV")
      , l = a("IdHk")
      , d = a("OW6k")
      , A = a("2wKr")
      , g = a("YMW7")
      , f = a("hEH1")
      , h = a("lwsE")
      , j = a.n(h)
      , I = a("W8MJ")
      , w = a.n(I)
      , T = a("a1gu")
      , v = a.n(T)
      , E = a("Nsbk")
      , z = a.n(E)
      , O = a("7W2i")
      , L = a.n(O)
      , m = a("cDf5")
      , x = a.n(m)
      , b = a("ZcLj")
      , k = a("ZojZ")
      , S = a("o0o1")
      , C = a.n(S)
      , Q = a("yXPU")
      , U = a.n(Q)
      , P = a("1aRO")
      , Y = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , R = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , B = function e() {
      j()(this, e),
        this.seasonId = 0,
        this.seasonTitle = "",
        this.title = "",
        this.shortTitle = ""
    };
    Y([Object(P.a)("comic_id"), R("design:type", Number)], B.prototype, "seasonId", void 0),
      Y([Object(P.a)("comic_title"), R("design:type", String)], B.prototype, "seasonTitle", void 0),
      Y([Object(P.a)("title"), R("design:type", String)], B.prototype, "title", void 0),
      Y([Object(P.a)("short_title"), R("design:type", String)], B.prototype, "shortTitle", void 0),
      B = Y([Object(P.b)()], B);
    var W, Z, G, F, q = a("COaM"), H = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "createPageTitle",
        value: function(e, t) {
          var i = t.shortTitle
            , n = e.title
            , a = "";
          return i && (a += i + " - "),
          n && (a += n + " - "),
            a += "漫画全集在线观看 - 哔哩哔哩漫画"
        }
      }]),
        e
    }(), _ = a("91CG"), J = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "getEpisodeData",
        value: function(e) {
          return _.a.post({
            url: "/twirp/comic.v1.Comic/GetEpisode",
            type: B,
            data: {
              id: e
            }
          })
        }
      }]),
        e
    }(), V = a("nVpw"), X = a("yH7B"), K = a("hxfU"), $ = a("f8jW"), ee = a("wsd6"), te = a("blo6"), ie = a("z8gV"), ne = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "removeTargetItem",
        value: function(e, t) {
          var i = t.indexOf(e);
          -1 < i && t.splice(i, 1)
        }
      }]),
        e
    }(), ae = "BilibiliManga:ReaderMode", oe = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "getReaderModeFromStorage",
        value: function() {
          var e = b.b.intFormat(localStorage.getItem(ae), q.f.NotAvailable);
          return e !== q.f.Scrolling && e !== q.f.Horizontal && e !== q.f.Manga && e !== q.f.Landscape ? q.f.NotAvailable : e
        }
      }, {
        key: "setReaderModeToStorage",
        value: function(e) {
          localStorage.setItem(ae, e.toString())
        }
      }]),
        e
    }(), se = a("fLv1");
    (Z = W || (W = {}))[Z.VeryPoor = .4] = "VeryPoor",
      Z[Z.Poor = .5] = "Poor",
      Z[Z.Normal = .7] = "Normal",
      Z[Z.Good = .85] = "Good",
      Z[Z.VeryHigh = 1] = "VeryHigh",
      (F = G || (G = {}))[F.VeryPoor = 350] = "VeryPoor",
      F[F.Poor = 450] = "Poor",
      F[F.Normal = 800] = "Normal",
      F[F.Good = 1100] = "Good",
      F[F.VeryHigh = 1600] = "VeryHigh";
    var re = a("B7eG")
      , ce = a("Ubnt")
      , ue = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).call(this, document.createElement("div"), ce.b.BlankImage))
      }
      return L()(t, e),
        t
    }(ce.a)
      , Me = a("+cnd")
      , le = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , de = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Ae = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "onInput",
          value: function(e) {
            this.$emit("input", e)
          }
        }, {
          key: "closePanel",
          value: function() {
            this.onInput(!1)
          }
        }]),
        t
    }(y.default);
    le([Object(n.d)({
      type: Boolean,
      default: !1
    }), de("design:type", Boolean)], Ae.prototype, "value", void 0),
      le([Object(n.d)({
        type: Number,
        default: 0
      }), de("design:type", Number)], Ae.prototype, "episodeId", void 0);
    var ge = Ae = le([Object(n.b)({
      components: {
        AppComment: i.Business.AppComment
      }
    })], Ae)
      , De = (a("sg5y"),
      a("KHd+"))
      , ye = Object(De.a)(ge, function() {
      var e = this
        , t = e.$createElement
        , i = e._self._c || t;
      return i("jk-dialog-layout", {
        staticClass: "comment-dialog-ctnr",
        attrs: {
          value: e.value,
          "slot-enter-class": "a-move-in-top",
          "slot-leave-class": "a-scale-out",
          "background-enter-class": "a-fade-in",
          "background-leave-class": "a-fade-out",
          "background-color": "rgba(0, 0, 0, .8)",
          "click-to-close": !0
        },
        on: {
          input: e.onInput
        },
        nativeOn: {
          keydown: function(e) {
            e.stopPropagation()
          },
          keyup: function(e) {
            e.stopPropagation()
          }
        }
      }, [i("div", {
        staticClass: "episode-comment p-relative"
      }, [i("div", {
        staticClass: "header-section p-relative"
      }, [i("div", [e._v("单话评论")]), i("button", {
        staticClass: "close-button app-button p-absolute",
        on: {
          click: e.closePanel
        }
      }, [i("img", {
        attrs: {
          src: a("Naq3"),
          width: "20"
        }
      })])]), i("div", {
        staticClass: "comment-container border-box"
      }, [e.value ? i("app-comment", {
        attrs: {
          id: e.episodeId,
          type: 29,
          "no-level-limit": !0
        }
      }) : e._e()], 1)])])
    }, [], !1, null, "53ab0f70", null).exports
      , Ne = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , pe = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , fe = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        t
    }(y.default);
    Ne([Object(n.d)({
      type: Boolean,
      default: !1
    }), pe("design:type", Boolean)], fe.prototype, "isShowPreEpisodeToast", void 0),
      Ne([Object(n.d)({
        type: Boolean,
        default: !1
      }), pe("design:type", Boolean)], fe.prototype, "isShowNexEpisodeToast", void 0);
    var he = fe = Ne([n.b], fe)
      , je = (a("qYKv"),
      Object(De.a)(he, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [e.isShowPreEpisodeToast || e.isShowNexEpisodeToast ? i("div", {
          staticClass: "episode-toast a-fade-in"
        }, [i("div", {
          staticClass: "toast-content"
        }, [e._v(e._s(e.isShowPreEpisodeToast ? "没有上一话啦" : "没有下一话啦"))])]) : e._e()])
      }, [], !1, null, "fc078798", null).exports)
      , Ie = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , we = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Te = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "onClick",
          value: function(e) {
            this.$emit("click", e)
          }
        }]),
        t
    }(y.default);
    Ie([Object(n.d)({
      default: !1
    }), we("design:type", Boolean)], Te.prototype, "round", void 0);
    var ve = Te = Ie([n.b], Te)
      , Ee = (a("gR/J"),
      Object(De.a)(ve, function() {
        var e = this
          , t = e.$createElement;
        return (e._self._c || t)("button", {
          staticClass: "floating-button app-button none-select",
          class: {
            circle: e.round
          },
          on: {
            click: e.onClick
          }
        }, [e._t("default")], 2)
      }, [], !1, null, "5da64f43", null).exports)
      , ze = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Oe = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Le = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments)))._isShowToast = !1,
          e.enterTimer = null,
          e
      }
      return L()(t, e),
        w()(t, [{
          key: "onMouseEnter",
          value: function() {
            var e = this;
            this.externalControl || (clearTimeout(this.enterTimer),
              this.enterTimer = setTimeout(function() {
                e._isShowToast = !0
              }, 300))
          }
        }, {
          key: "onMouseLeave",
          value: function() {
            this.externalControl || (clearTimeout(this.enterTimer),
              this._isShowToast = !1)
          }
        }, {
          key: "isShowToast",
          get: function() {
            return this.externalControl ? this.value : this._isShowToast
          }
        }]),
        t
    }(y.default);
    ze([Object(n.d)({
      type: String,
      default: "left"
    }), Oe("design:type", String)], Le.prototype, "mode", void 0),
      ze([Object(n.d)({
        type: Boolean,
        default: !1
      }), Oe("design:type", Boolean)], Le.prototype, "externalControl", void 0),
      ze([Object(n.d)({
        type: Boolean,
        default: !1
      }), Oe("design:type", Boolean)], Le.prototype, "value", void 0);
    var me = Le = ze([n.b], Le)
      , xe = (a("FuT8"),
      Object(De.a)(me, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "hover-toast-container p-relative",
          on: {
            mouseenter: e.onMouseEnter,
            mouseleave: e.onMouseLeave
          }
        }, [i("transition", {
          attrs: {
            "enter-active-class": "a-scale-in-ease",
            "leave-active-class": "a-scale-out-ease"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isShowToast,
            expression: "isShowToast"
          }],
          staticClass: "animation-element w-100 h-100 p-absolute"
        }, [i("div", {
          staticClass: "hover-toast p-absolute border-box",
          class: e.mode
        }, [e._t("default")], 2)])]), i("div", {
          staticClass: "p-relative"
        }, [e._t("activator")], 2)], 1)
      }, [], !1, null, "2d03e36a", null).exports)
      , be = a("26FU")
      , ke = a("dC0D")
      , Se = {
      seasonData: new q.c,
      episodeDetail: new B,
      isFavourite: !1
    }
      , Ce = new be.a(function(e) {
        return e
      }
    )
      , Qe = Ce.pipe(Object(ke.a)(function(e, t) {
      return t(e)
    }, Se));
    var Ue = "BilibiliManga:IsAppendBlankPageInDouble"
      , Pe = "BilibiliManga:HorizontalMode"
      , Ye = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "checkIsAppendBlankPageInDoubleMode",
        value: function() {
          return "true" === localStorage.getItem(Ue)
        }
      }, {
        key: "setBlankPageAppendingInDoubleMode",
        value: function(e) {
          localStorage.setItem(Ue, e ? "true" : "false")
        }
      }, {
        key: "getHorizontalModeFromStorage",
        value: function() {
          var e = b.b.intFormat(localStorage.getItem(Pe), re.a.NotAvailable);
          return e !== re.a.DoublePage && e !== re.a.SinglePage ? re.a.NotAvailable : e
        }
      }, {
        key: "setHorizontalModeToStorage",
        value: function(e) {
          localStorage.setItem(Pe, e.toString())
        }
      }]),
        e
    }()
      , Re = {
      readerMode: se.a.DEFAULT_PAGING_MODE,
      horizontalMode: se.a.DEFAULT_HORIZONTAL_MODE,
      isAllowDirectionChange: !1,
      isAllowHorizontal: !1,
      isAllowVerticalMode: !1,
      isAllowDisplayMessageBox: !1,
      isAddBlankPage: Ye.checkIsAppendBlankPageInDoubleMode()
    }
      , Be = new be.a(function(e) {
        return e
      }
    )
      , We = Be.pipe(Object(ke.a)(function(e, t) {
      return t(e)
    }, Re));
    var Ze = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Ge = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Fe = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "displayPageCount",
          get: function() {
            return this.isAddBlankPage && this.isInDoublePageMode ? this.pageCount - 1 : this.pageCount
          }
        }, {
          key: "displayPage",
          get: function() {
            var e = this.pageIndex + 1;
            return this.isInDoublePageMode && (this.isAddBlankPage && (e -= 1),
            e < 1 && (e = 1),
            999 < e && (e = 999),
            e > this.displayPageCount && (e = null)),
              e
          }
        }, {
          key: "displayNextPage",
          get: function() {
            var e = this.displayPage + 1;
            return e > this.displayPageCount && (e = 0),
            999 < e && (e = 999),
              e
          }
        }, {
          key: "isInMangaMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Manga
          }
        }, {
          key: "isInScrollingMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Scrolling
          }
        }, {
          key: "isInHorizontalMode",
          get: function() {
            return this.isInMangaMode || this.readerSettingState.readerMode === q.f.Horizontal
          }
        }, {
          key: "isInDoublePageMode",
          get: function() {
            return this.readerSettingState.horizontalMode === re.a.DoublePage && this.isInHorizontalMode
          }
        }, {
          key: "isMangaLayout",
          get: function() {
            return this.mangaInfoState.seasonData.defaultReaderMode === q.f.Manga
          }
        }, {
          key: "isAddBlankPage",
          get: function() {
            return this.readerSettingState.isAddBlankPage
          }
        }, {
          key: "isInAddBlankPageMode",
          get: function() {
            return this.isAddBlankPage && 1 === this.displayPage
          }
        }]),
        t
    }(y.default);
    Ze([Object(n.d)({
      type: Number,
      default: 0
    }), Ge("design:type", Number)], Fe.prototype, "pageIndex", void 0),
      Ze([Object(n.d)({
        type: Number,
        default: 0
      }), Ge("design:type", Number)], Fe.prototype, "pageCount", void 0),
      Ze([Object(n.d)({
        type: String,
        default: "--"
      }), Ge("design:type", String)], Fe.prototype, "shortTitle", void 0),
      Ze([Object(n.d)({
        type: Boolean,
        default: !1
      }), Ge("design:type", Boolean)], Fe.prototype, "showProgress", void 0),
      Ze([Object(n.d)({
        type: Boolean,
        default: !1
      }), Ge("design:type", Boolean)], Fe.prototype, "onlyShowEpisode", void 0);
    var qe = Fe = Ze([Object(n.b)({
      subscriptions: function() {
        return {
          mangaInfoState: Qe,
          readerSettingState: We
        }
      }
    })], Fe)
      , He = (a("L0w8"),
      Object(De.a)(qe, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "info-hud none-select"
        }, [e.onlyShowEpisode ? [i("div", [e._v(e._s(e.shortTitle))])] : [e.isInDoublePageMode ? i("div", {
          staticClass: "hinter-image-container double"
        }, [i("img", {
          staticClass: "hinter-image ts-dot-4 v-middle",
          class: {
            flip: e.isInMangaMode
          },
          attrs: {
            src: a("r4XI"),
            height: "32"
          }
        }), i("span", {
          staticClass: "current-page p-absolute ts-dot-4 a-fade-in",
          class: [e.isMangaLayout ? e.isInAddBlankPageMode ? "left-position" : "right-position" : e.isInAddBlankPageMode ? "right-position" : "left-position"]
        }, [e._v(e._s(e.displayPage || ""))]), i("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.isInAddBlankPageMode,
            expression: "!isInAddBlankPageMode"
          }],
          staticClass: "next-page p-absolute ts-dot-4 a-fade-in",
          class: [e.isMangaLayout ? "left-position" : "right-position"]
        }, [e._v(e._s(e.displayNextPage || ""))])]) : i("div", {
          staticClass: "hinter-image-container single"
        }, [i("img", {
          staticClass: "hinter-image ts-dot-4 v-middle",
          class: {
            flip: e.isInMangaMode,
            rotate: e.isInScrollingMode
          },
          attrs: {
            src: a("ll70"),
            height: "32"
          }
        }), i("span", {
          staticClass: "current-page p-absolute a-fade-in"
        }, [e._v(e._s(e.displayPage || ""))])]), i("div", {
          staticClass: "info-text dp-i-block v-middle",
          staticStyle: {
            "margin-left": "8px"
          }
        }, [i("div", [e._v(e._s(e.displayPageCount) + "P")]), i("div", [e._v(e._s(e.shortTitle))])]), i("manga-progress", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.showProgress,
            expression: "showProgress"
          }],
          staticClass: "v-middle",
          staticStyle: {
            "margin-left": "10px"
          },
          attrs: {
            size: 14,
            title: "当前有图片或章节正在载入 " + e.$emoji.happy()
          }
        })]], 2)
      }, [], !1, null, "eb8f99c0", null).exports)
      , _e = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Je = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Ve = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).isShowMessage = e.isShowDirection,
          e.showTimer = 0,
          e
      }
      var i, n, a;
      return L()(t, e),
        w()(t, [{
          key: "onWatchIsShowDirection",
          value: (a = U()(C.a.mark(function e(t) {
              var i = this;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      this.isShowMessage = t,
                      null !== this.showTimer && clearTimeout(this.showTimer),
                        this.showTimer = window.setTimeout(function() {
                          i.isShowMessage = !1
                        }, 3e3);
                    case 3:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e) {
                return a.apply(this, arguments)
              }
          )
        }, {
          key: "onWatchIsNormalReadModel",
          value: (n = U()(C.a.mark(function e(t) {
              var i = this;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      this.isShowDirection && (this.isShowMessage = !0,
                      null !== this.showTimer && clearTimeout(this.showTimer),
                        this.showTimer = window.setTimeout(function() {
                          i.isShowMessage = !1
                        }, 3e3));
                    case 1:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e) {
                return n.apply(this, arguments)
              }
          )
        }, {
          key: "created",
          value: function() {
            this.isShowMessage = this.isShowDirection
          }
        }, {
          key: "mounted",
          value: (i = U()(C.a.mark(function e() {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.isShowMessage)
                        return e.next = 3,
                          b.d.sleep(3e3);
                      e.next = 4;
                      break;
                    case 3:
                      this.isShowMessage = !1;
                    case 4:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "isAllowDisplayMessageBox",
          get: function() {
            return this.readerSettingState.isAllowDisplayMessageBox
          }
        }]),
        t
    }(y.default);
    _e([Object(n.d)({
      type: Boolean,
      default: !1
    }), Je("design:type", Boolean)], Ve.prototype, "isNormalReadModel", void 0),
      _e([Object(n.d)({
        type: Boolean,
        default: !0
      }), Je("design:type", Boolean)], Ve.prototype, "isShowDirection", void 0),
      _e([Object(n.g)("isShowDirection"), Je("design:type", Function), Je("design:paramtypes", [Boolean]), Je("design:returntype", Promise)], Ve.prototype, "onWatchIsShowDirection", null),
      _e([Object(n.g)("isNormalReadModel"), Je("design:type", Function), Je("design:paramtypes", [Boolean]), Je("design:returntype", Promise)], Ve.prototype, "onWatchIsNormalReadModel", null);
    var Xe = Ve = _e([Object(n.b)({
      subscriptions: function() {
        return {
          readerSettingState: We
        }
      }
    })], Ve)
      , Ke = (a("QNd3"),
      Object(De.a)(Xe, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: e.isShowMessage && e.isAllowDisplayMessageBox,
            expression: "isShowMessage && isAllowDisplayMessageBox"
          }],
          staticClass: "message-box none-select a-fade-in"
        }, [i("div", {
          staticClass: "img-container"
        }, [i("img", {
          staticClass: "arrow-image ts-dot-4",
          class: {
            flip: e.isNormalReadModel
          },
          attrs: {
            src: a("pfP6")
          }
        })]), i("div", {
          staticClass: "direction-text"
        }, [e._v("当前阅读器翻页方向")]), i("div", {
          staticClass: "direction-content"
        }, [e._v(e._s(e.isNormalReadModel ? "从右向左" : "从左向右"))])])])
      }, [], !1, null, "6bbc3074", null).exports)
      , $e = a("ZxM/")
      , et = a("XGqN")
      , tt = {
      isFavourite: !0
    }
      , it = new be.a(function(e) {
        return e
      }
    )
      , nt = it.pipe(Object(ke.a)(function(e, t) {
      return t(e)
    }, tt));
    var at = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "setLock",
        value: function(i, n) {
          it.next(function(e) {
            var t = Object.assign({}, e);
            return "boolean" == typeof t[i] && (t[i] = n),
              t
          })
        }
      }, {
        key: "lock",
        value: function(e) {
          this.setLock(e, !0)
        }
      }, {
        key: "release",
        value: function(e) {
          this.setLock(e, !1)
        }
      }]),
        e
    }()
      , ot = a("f91u")
      , st = a("rm82")
      , rt = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , ct = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , ut = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).delayTimer = null,
          e
      }
      return L()(t, e),
        w()(t, [{
          key: "onInput",
          value: function(e) {
            var t = this
              , i = e.target.value;
            this.delay ? (clearTimeout(this.delayTimer),
              this.delayTimer = setTimeout(function() {
                t.$emit("input", b.b.intFormat(i, 0))
              }, this.delay)) : this.$emit("input", b.b.intFormat(i, 0))
          }
        }, {
          key: "sliderWidth",
          get: function() {
            return "number" == typeof this.width ? this.width + "px" : this.width
          }
        }, {
          key: "isEdgeBrowser",
          get: function() {
            try {
              return -1 < window.navigator.userAgent.indexOf("Edge")
            } catch (e) {
              return !1
            }
          }
        }, {
          key: "newvalue",
          get: function() {
            return this.isInDoublePage ? this.value : this.value - 1
          }
        }, {
          key: "newMaximum",
          get: function() {
            return this.isInDoublePage ? this.maximum : this.maximum - 1
          }
        }]),
        t
    }(y.default);
    rt([Object(n.d)({
      type: Number,
      default: 0
    }), ct("design:type", Number)], ut.prototype, "value", void 0),
      rt([Object(n.d)({
        type: Number,
        default: 0
      }), ct("design:type", Number)], ut.prototype, "minimum", void 0),
      rt([Object(n.d)({
        type: Number,
        default: 100
      }), ct("design:type", Number)], ut.prototype, "maximum", void 0),
      rt([Object(n.d)({
        type: Number,
        default: 1
      }), ct("design:type", Number)], ut.prototype, "step", void 0),
      rt([Object(n.d)({
        type: Boolean,
        default: !1
      }), ct("design:type", Boolean)], ut.prototype, "hideIndicator", void 0),
      rt([Object(n.d)({
        type: [String, Number],
        default: 200
      }), ct("design:type", Object)], ut.prototype, "width", void 0),
      rt([Object(n.d)({
        type: Number,
        default: 0
      }), ct("design:type", Number)], ut.prototype, "delay", void 0),
      rt([Object(n.d)({
        type: Boolean,
        default: !1
      }), ct("design:type", Boolean)], ut.prototype, "isInDoublePage", void 0);
    var Mt = ut = rt([n.b], ut)
      , lt = (a("VGwN"),
      a("XJva"),
      Object(De.a)(Mt, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "slider-component p-relative"
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !e.hideIndicator,
            expression: "!hideIndicator"
          }],
          staticClass: "progress-indicator"
        }, [e._v(e._s(e.value) + " / " + e._s(e.maximum))]), i("div", {
          staticClass: "slider-body",
          style: {
            width: e.sliderWidth
          }
        }, [i("input", {
          staticClass: "range-input",
          class: {
            edge: e.isEdgeBrowser
          },
          attrs: {
            type: "range",
            max: e.newMaximum,
            min: e.minimum,
            step: e.step
          },
          domProps: {
            value: e.newvalue
          },
          on: {
            input: e.onInput,
            change: e.onInput
          }
        })])])
      }, [], !1, null, "0b30e136", null).exports)
      , dt = a("96Y2")
      , At = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , gt = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Dt = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "onClick",
          value: function(e) {
            this.$emit("click", e)
          }
        }]),
        t
    }(y.default);
    At([Object(n.d)({
      type: String,
      default: ""
    }), gt("design:type", String)], Dt.prototype, "imgUrl", void 0),
      At([Object(n.d)({
        type: String,
        default: ""
      }), gt("design:type", String)], Dt.prototype, "label", void 0),
      At([Object(n.d)({
        type: Number,
        default: 24
      }), gt("design:type", Number)], Dt.prototype, "iconSize", void 0),
      At([Object(n.d)({
        type: Boolean,
        default: !1
      }), gt("design:type", Boolean)], Dt.prototype, "disabled", void 0),
      At([Object(n.d)({
        type: Boolean,
        default: !1
      }), gt("design:type", Boolean)], Dt.prototype, "loading", void 0);
    var yt = Dt = At([n.b], Dt)
      , Nt = (a("IX4l"),
      Object(De.a)(yt, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("button", {
          staticClass: "action-button app-button t-center",
          attrs: {
            disabled: e.disabled
          },
          on: {
            click: e.onClick
          }
        }, [e.loading ? [i("manga-progress", {
          attrs: {
            size: "20"
          }
        })] : [i("img", {
          style: {
            width: e.iconSize + "px",
            height: e.iconSize + "px"
          },
          attrs: {
            src: e.imgUrl,
            width: e.iconSize
          }
        }), i("br"), i("span", [e._v(e._s(e.label))]), e._t("default")]], 2)
      }, [], !1, null, "01e2848b", null).exports)
      , pt = a("t/UT")
      , ft = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , ht = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , jt = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).ps = null,
          e
      }
      var i;
      return L()(t, e),
        w()(t, [{
          key: "onWatchEpisodeList",
          value: function() {
            this.updatePs()
          }
        }, {
          key: "initPs",
          value: function() {
            this.ps = new pt.default(this.$refs.episodeList)
          }
        }, {
          key: "updatePs",
          value: function() {
            this.ps && this.ps.update()
          }
        }, {
          key: "destroyPs",
          value: function() {
            this.ps && this.ps.destroy(),
              this.ps = null
          }
        }, {
          key: "episodeSwitch",
          value: (i = U()(C.a.mark(function e(t) {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.t0 = this,
                        e.t1 = t,
                        e.next = 4,
                        te.a.getPageHistory(t);
                    case 4:
                      e.t2 = e.sent,
                        e.t3 = {
                          episodeId: e.t1,
                          pageIndex: e.t2,
                          loadInForce: !0
                        },
                        e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                    case 7:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e) {
                return i.apply(this, arguments)
              }
          )
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
          key: "isSeasonFreeForLimit",
          get: function() {
            return this.mangaSeason.discountType === q.d.FreeForLimit
          }
        }]),
        t
    }(y.default);
    ft([Object(n.d)({
      type: Object,
      default: function() {
        return new q.c
      }
    }), ht("design:type", q.c)], jt.prototype, "mangaSeason", void 0),
      ft([Object(n.d)({
        type: Array,
        default: function() {
          return []
        }
      }), ht("design:type", Array)], jt.prototype, "episodeList", void 0),
      ft([Object(n.d)({
        type: Number,
        default: 0
      }), ht("design:type", Number)], jt.prototype, "currentEpisodeId", void 0),
      ft([Object(n.d)({
        type: Array,
        default: function() {
          return []
        }
      }), ht("design:type", Array)], jt.prototype, "loadingEpisodeIds", void 0),
      ft([Object(n.d)({
        type: Array,
        default: function() {
          return []
        }
      }), ht("design:type", Array)], jt.prototype, "failedEpisodeIds", void 0),
      ft([Object(n.g)("episodeList"), ht("design:type", Function), ht("design:paramtypes", []), ht("design:returntype", void 0)], jt.prototype, "onWatchEpisodeList", null),
      ft([Object(n.e)("onUiEpisodeSwitch"), ht("design:type", Function)], jt.prototype, "onUiEpisodeSwitch", void 0);
    var It = jt = ft([Object(n.b)({
      subscriptions: function() {
        return {
          readerSettingState: We
        }
      }
    })], jt)
      , wt = (a("JBbL"),
      Object(De.a)(It, function() {
        var i = this
          , e = i.$createElement
          , n = i._self._c || e;
        return n("div", {
          staticClass: "episode-list border-box"
        }, [n("div", {
          staticClass: "panel-title t-center"
        }, [i._v("全部章节（" + i._s(i.episodeList.length) + "）")]), n("div", {
          ref: "episodeList",
          staticClass: "data-list p-relative"
        }, [i.episodeList.length ? i._l(i.episodeList, function(t) {
          return n("button", {
            staticClass: "list-item app-button dp-block w-100 p-relative t-no-wrap t-over-hidden",
            class: {
              selected: t.id === i.currentEpisodeId,
              read: 1 === t.readStatus
            },
            on: {
              click: function(e) {
                return i.episodeSwitch(t.id)
              }
            }
          }, [n("div", {
            staticClass: "label dp-i-block v-middle"
          }, [i._v(i._s(t.shortTitle))]), n("div", {
            staticClass: "indicators dp-i-block v-middle"
          }, [n("manga-progress", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: -1 < i.loadingEpisodeIds.indexOf(t.id),
              expression: "loadingEpisodeIds.indexOf(item.id) > -1"
            }],
            staticClass: "v-middle",
            staticStyle: {
              "margin-left": "5px"
            },
            attrs: {
              size: 20
            }
          }), n("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: -1 < i.failedEpisodeIds.indexOf(t.id),
              expression: "failedEpisodeIds.indexOf(item.id) > -1"
            }],
            staticClass: "error-icon v-middle",
            staticStyle: {
              "margin-left": "5px"
            },
            attrs: {
              src: a("hTcJ"),
              width: "16",
              title: "此章节载入失败了，您可点击重试 " + i.$emoji.sad()
            }
          }), (i.isSeasonFreeForLimit || t.isInFree) && t.isLocked ? n("div", {
            staticClass: "free-for-limit-hinter dp-inline v-middle"
          }, [i._v("限免")]) : [n("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: t.isLocked && !i.isSeasonFreeForLimit,
              expression: "item.isLocked && !isSeasonFreeForLimit"
            }],
            staticClass: "lock-icon v-middle",
            staticStyle: {
              "margin-left": "5px"
            },
            attrs: {
              src: a("nJp/"),
              width: "16",
              title: "此章节还未解锁 " + i.$emoji.shock()
            }
          }), n("img", {
            directives: [{
              name: "show",
              rawName: "v-show",
              value: 1 === t.payMode && (!t.isLocked || i.isSeasonFreeForLimit),
              expression: "item.payMode === 1 && (!item.isLocked || isSeasonFreeForLimit)"
            }],
            staticClass: "unlock-icon v-middle",
            staticStyle: {
              "margin-left": "5px"
            },
            attrs: {
              src: a("Q1DG"),
              width: "16",
              title: "此章节已经解锁了喔 " + i.$emoji.happy()
            }
          })]], 2)])
        }) : [n("div", {
          staticClass: "empty-hint t-center"
        }, [i._v("木有章节可以跳转 " + i._s(i.$emoji.shock()))])]], 2)])
      }, [], !1, null, "6866865a", null).exports)
      , Tt = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , vt = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Et = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "mangaSeasonTitle",
          get: function() {
            return this.mangaSeason.title ? this.mangaSeason.title : "--"
          }
        }, {
          key: "getMangaId",
          get: function() {
            return "/detail/mc" + this.mangaSeason.id
          }
        }, {
          key: "getEpisodeId",
          get: function() {
            var t = this
              , i = "第 -- 话";
            return this.mangaSeason.episodeList.map(function(e) {
              e.id === t.currentEpisodeId && (i = e.shortTitleFormattedPrefix)
            }),
              i
          }
        }]),
        t
    }(y.default);
    Tt([Object(n.d)({
      type: q.c,
      default: function() {
        return new q.c
      }
    }), vt("design:type", q.c)], Et.prototype, "mangaSeason", void 0),
      Tt([Object(n.d)({
        type: Number,
        default: 0
      }), vt("design:type", Number)], Et.prototype, "currentEpisodeId", void 0);
    var zt = Et = Tt([n.b], Et)
      , Ot = (a("KTcK"),
      Object(De.a)(zt, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("div", {
          staticClass: "read-nav h-100 p-realetive v-middle dp-table"
        }, [i("div", {
          staticClass: "h-100 v-middle dp-table-cell"
        }, [i("ul", {
          staticClass: "read-navul h-100 v-middle"
        }, [e._m(0), i("li", {
          staticClass: "read-li h-100 v-middle"
        }, [i("span", {
          staticClass: "next-icon next-icon1"
        }, [e._v(">")]), i("a", {
          staticClass: "home-page manga-title",
          attrs: {
            href: e.getMangaId,
            title: e.mangaSeasonTitle
          }
        }, [e._v(e._s(e.mangaSeasonTitle))])]), i("li", {
          staticClass: "read-li h-100 v-middle"
        }, [i("span", {
          staticClass: "next-icon"
        }, [e._v(">")]), i("span", {
          staticClass: "spisode"
        }, [e._v(e._s(e.getEpisodeId))])])])])])
      }, [function() {
        var e = this.$createElement
          , t = this._self._c || e;
        return t("li", {
          staticClass: "read-li h-100 v-middle"
        }, [t("a", {
          staticClass: "home-page",
          attrs: {
            href: "/"
          }
        }, [this._v("首页")])])
      }
      ], !1, null, "d44ac502", null).exports)
      , Lt = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , mt = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , xt = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).observer = null,
          e.height = "0",
          e
      }
      return L()(t, e),
        w()(t, [{
          key: "switchHorizontalMode",
          value: function(t) {
            Be.next(function(e) {
              return Object.assign({}, e, {
                horizontalMode: t
              })
            }),
              Ye.setHorizontalModeToStorage(t)
          }
        }, {
          key: "calcHeight",
          value: function() {
            this.height = window.getComputedStyle(this.sizeRuler).height
          }
        }, {
          key: "initLens",
          value: function() {
            var e = this;
            if (MutationObserver) {
              var t = new MutationObserver(function() {
                  e.calcHeight()
                }
              );
              t.observe(this.$el, {
                subtree: !0,
                childList: !0,
                attributes: !0
              }),
                this.observer = t
            }
          }
        }, {
          key: "mounted",
          value: function() {
            this.initLens(),
              this.calcHeight()
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.observer && this.observer.disconnect(),
              this.observer = null
          }
        }, {
          key: "isInHorizontalMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Horizontal || this.readerSettingState.readerMode === q.f.Manga
          }
        }, {
          key: "isInScrollingMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Scrolling
          }
        }, {
          key: "isInMangaMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Manga
          }
        }, {
          key: "sizeRuler",
          get: function() {
            return this.$refs.sizeRuler
          }
        }]),
        t
    }(y.default);
    Lt([Object(n.d)({
      type: Boolean,
      default: !1
    }), mt("design:type", Boolean)], xt.prototype, "value", void 0),
      Lt([Object(n.d)({
        type: Boolean,
        default: !1
      }), mt("design:type", Boolean)], xt.prototype, "isOpen", void 0),
      Lt([Object(n.e)("switchReaderMode"), mt("design:type", Function)], xt.prototype, "switchReaderMode", void 0);
    var bt = xt = Lt([Object(n.b)({
      subscriptions: function() {
        return {
          readerSettingState: We
        }
      }
    })], xt)
      , kt = (a("XB72"),
      a("O4FU"),
      Object(De.a)(bt, function() {
        var t = this
          , e = t.$createElement
          , i = t._self._c || e;
        return i("transition", {
          attrs: {
            "leave-active-class": "a-scale-out-ease"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.value,
            expression: "value"
          }],
          staticClass: "reader-setting ts-dot-4",
          style: {
            height: t.height
          }
        }, [i("div", {
          ref: "sizeRuler",
          staticClass: "size-ruler border-box"
        }, [i("div", {
          staticClass: "section a-scale-in-ease"
        }, [i("div", {
          staticClass: "section-title"
        }, [t._v("阅读模式")]), i("div", {
          staticClass: "section-content"
        }, [i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.read_option.click",
            expression: "'777.17.read_option.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "1"
            },
            expression: "{ways:'1'}"
          }],
          staticClass: "app-button",
          class: {
            selected: t.isInHorizontalMode
          },
          attrs: {
            disabled: !t.readerSettingState.isAllowHorizontal
          },
          on: {
            click: function(e) {
              return t.switchReaderMode(2)
            }
          }
        }, [t._v("左右翻页")]), i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.read_option.click",
            expression: "'777.17.read_option.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "2"
            },
            expression: "{ways:'2'}"
          }],
          staticClass: "app-button",
          class: {
            selected: t.isInScrollingMode
          },
          attrs: {
            disabled: !t.readerSettingState.isAllowVerticalMode
          },
          on: {
            click: function(e) {
              return t.switchReaderMode(1)
            }
          }
        }, [t._v("上下滚动")])])]), i("transition", {
          attrs: {
            "leave-active-class": "a-scale-out-ease"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isInHorizontalMode,
            expression: "isInHorizontalMode"
          }],
          staticClass: "section a-scale-in-ease"
        }, [i("div", {
          staticClass: "section-title"
        }, [t._v("页面模式")]), i("div", {
          staticClass: "section-content"
        }, [i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.page_option.click",
            expression: "'777.17.page_option.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "1"
            },
            expression: "{ways:'1'}"
          }],
          staticClass: "app-button",
          class: {
            selected: 1 === t.readerSettingState.horizontalMode
          },
          on: {
            click: function(e) {
              return t.switchHorizontalMode(1)
            }
          }
        }, [t._v("双页")]), i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.page_option.click",
            expression: "'777.17.page_option.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "2"
            },
            expression: "{ways:'2'}"
          }],
          staticClass: "app-button",
          class: {
            selected: 0 === t.readerSettingState.horizontalMode
          },
          on: {
            click: function(e) {
              return t.switchHorizontalMode(0)
            }
          }
        }, [t._v("单页")])])])]), i("transition", {
          attrs: {
            "leave-active-class": "a-scale-out-ease"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isInHorizontalMode,
            expression: "isInHorizontalMode"
          }],
          staticClass: "section a-scale-in-ease"
        }, [i("div", {
          staticClass: "section-title"
        }, [t._v("翻页方向")]), i("div", {
          staticClass: "section-content"
        }, [i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.direction.click",
            expression: "'777.17.direction.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "1"
            },
            expression: "{ways:'1'}"
          }],
          staticClass: "app-button",
          class: {
            selected: !t.isInMangaMode
          },
          on: {
            click: function(e) {
              return t.switchReaderMode(2)
            }
          }
        }, [t._v("普通模式")]), i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.direction.click",
            expression: "'777.17.direction.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              ways: "2"
            },
            expression: "{ways:'2'}"
          }],
          staticClass: "app-button",
          class: {
            selected: t.isInMangaMode
          },
          on: {
            click: function(e) {
              return t.switchReaderMode(4)
            }
          }
        }, [t._v("日漫模式")])])])])], 1)])])
      }, [], !1, null, "be233f8c", null).exports)
      , St = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , Ct = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , Qt = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).isShowEpisodeList = !1,
          e.isShowReaderSetting = !1,
          e
      }
      var i, n;
      return L()(t, e),
        w()(t, [{
          key: "onEpisodeSwitchButtonClick",
          value: (n = U()(C.a.mark(function e(t) {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return e.t0 = this,
                        e.t1 = t,
                        e.next = 4,
                        te.a.getPageHistory(t);
                    case 4:
                      e.t2 = e.sent,
                        e.t3 = {
                          episodeId: e.t1,
                          pageIndex: e.t2
                        },
                        e.t0.$emit.call(e.t0, "episode-switch", e.t3);
                    case 7:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e) {
                return n.apply(this, arguments)
              }
          )
        }, {
          key: "onPageSwitch",
          value: function(e) {
            this.isInDoublePage && (e = 2 * (e - 1)),
              this.$emit("page-switch", e)
          }
        }, {
          key: "closePanel",
          value: function() {
            if (this.isAnyPanelOpen)
              return this.closeAllPanels();
            this.$emit("input", !1)
          }
        }, {
          key: "openEpisodeList",
          value: function() {
            this.closeAllPanels(),
              this.isShowEpisodeList = !0
          }
        }, {
          key: "closeEpisodeList",
          value: function() {
            this.isShowEpisodeList = !1
          }
        }, {
          key: "onSettingButtonClick",
          value: function() {
            this.isShowReaderSetting ? this.closeReaderSetting() : this.openReaderSetting()
          }
        }, {
          key: "openReaderSetting",
          value: function() {
            this.closeAllPanels(),
              this.isShowReaderSetting = !0
          }
        }, {
          key: "closeReaderSetting",
          value: function() {
            this.isShowReaderSetting = !1
          }
        }, {
          key: "closeAllPanels",
          value: function() {
            this.closeEpisodeList(),
              this.closeReaderSetting()
          }
        }, {
          key: "doPageMatching",
          value: function() {
            this.$emit("page-matching")
          }
        }, {
          key: "goLogin",
          value: function() {
            var e = this;
            ot.a.OpenQuickLoginPanel(function() {
              e.toggleFavourite(),
                p.a.refreshUserData(),
                st.a.refreshWalletData()
            })
          }
        }, {
          key: "toggleFavourite",
          value: (i = U()(C.a.mark(function e() {
              var t, i, n, a, o;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.isInFavourite)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      if (at.lock("isFavourite"),
                        t = !this.isFavourite)
                        return e.next = 7,
                          V.a.addFavourite([this.mangaSeason.id]);
                      e.next = 10;
                      break;
                    case 7:
                      e.t0 = e.sent,
                        e.next = 13;
                      break;
                    case 10:
                      return e.next = 12,
                        V.a.removeFavourite([this.mangaSeason.id]);
                    case 12:
                      e.t0 = e.sent;
                    case 13:
                      if (i = e.t0,
                        n = i.error,
                        a = i.code,
                        at.release("isFavourite"),
                        n)
                        return N.a.error("操作失败，请稍后再试，非常抱歉 " + D.sad()),
                          k.a.error("追漫操作失败:", n),
                          e.abrupt("return");
                      e.next = 21;
                      break;
                    case 21:
                      if (0 === a)
                        return o = t ? "已加入豪华午餐 " + D.happy() : "我已经不再喜欢你了 " + D.helpless(),
                          N.a.success(o),
                          Ce.next(function(e) {
                            return Object.assign({}, e, {
                              isFavourite: t
                            })
                          }),
                          e.abrupt("return");
                      e.next = 26;
                      break;
                    case 26:
                      N.a.error("[".concat(a, "] 操作失败，请稍后再试，非常抱歉 ") + D.sad()),
                        k.a.error("操作追漫失败: 服务器返回装填码 " + a);
                    case 28:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "openEpisodeComment",
          value: function() {
            this.$emit("open-comment")
          }
        }, {
          key: "onMouseMove",
          value: function(e) {
            this.$emit("mouse-move-ui")
          }
        }, {
          key: "onMouseLeave",
          value: function(e) {
            this.$emit("mouse-leave-ui")
          }
        }, {
          key: "onUiClick",
          value: function(e) {
            this.$emit("ui-any-click")
          }
        }, {
          key: "onZoomOut",
          value: function() {
            this.$emit("zoom-step-out")
          }
        }, {
          key: "onZoomIn",
          value: function() {
            this.$emit("zoom-step-in")
          }
        }, {
          key: "onZoomReset",
          value: function() {
            this.$emit("zoom-reset")
          }
        }, {
          key: "mounted",
          value: function() {
            window.addEventListener("click", this.closeAllPanels)
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            window.removeEventListener("click", this.closeAllPanels)
          }
        }, {
          key: "displayZoomFactor",
          get: function() {
            return (100 * this.zoomFactor).toFixed(0) + "%"
          }
        }, {
          key: "commentCount",
          get: function() {
            var t = this
              , e = this.mangaSeason.episodeList.find(function(e) {
              return e.id === t.currentEpisodeId
            });
            return e ? e.commentCount : 0
          }
        }, {
          key: "isInHorizontalMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Horizontal || this.readerSettingState.readerMode === q.f.Manga
          }
        }, {
          key: "isInDoublePage",
          get: function() {
            return this.isInHorizontalMode && this.readerSettingState.horizontalMode === re.a.DoublePage
          }
        }, {
          key: "isAnyPanelOpen",
          get: function() {
            return this.isShowEpisodeList || this.isShowReaderSetting
          }
        }, {
          key: "episodeList",
          get: function() {
            return ((this.mangaSeason || Object.create(null)).episodeList || []).slice().sort(function(e, t) {
              return e.ord - t.ord
            })
          }
        }, {
          key: "pageIndex$",
          get: function() {
            var e = this.pageIndex;
            return this.isInDoublePage && (e = Math.floor(this.pageIndex / 2)),
            e + 1
          }
        }, {
          key: "getMinimum",
          get: function() {
            return this.isInDoublePage ? 1 : 0
          }
        }, {
          key: "pageCount$",
          get: function() {
            var e = this.pageCount;
            return this.isInDoublePage && (e = Math.ceil(this.pageCount / 2)),
            e || 1
          }
        }, {
          key: "isFavourite",
          get: function() {
            return this.mangaInfoState && this.mangaInfoState.isFavourite
          }
        }, {
          key: "isDoFavouriteButtonDisabled",
          get: function() {
            return this.loadingStatusState && this.loadingStatusState.isFavourite
          }
        }, {
          key: "isInFavourite",
          get: function() {
            return this.loadingStatusState.isFavourite
          }
        }, {
          key: "isShowPageMatchingButton",
          get: function() {
            return (this.readerSettingState.readerMode === q.f.Horizontal || this.readerSettingState.readerMode === q.f.Manga) && this.readerSettingState.horizontalMode === re.a.DoublePage
          }
        }]),
        t
    }(y.default);
    St([Object(n.d)({
      type: Boolean,
      default: !1
    }), Ct("design:type", Boolean)], Qt.prototype, "value", void 0),
      St([Object(n.d)({
        type: Number,
        default: 1
      }), Ct("design:type", Number)], Qt.prototype, "zoomFactor", void 0),
      St([Object(n.d)({
        type: q.c,
        default: function() {
          return new q.c
        }
      }), Ct("design:type", q.c)], Qt.prototype, "mangaSeason", void 0),
      St([Object(n.d)({
        type: Number,
        default: 0
      }), Ct("design:type", Number)], Qt.prototype, "currentEpisodeId", void 0),
      St([Object(n.d)({
        type: et.b,
        default: null
      }), Ct("design:type", et.b)], Qt.prototype, "prevEpisode", void 0),
      St([Object(n.d)({
        type: et.b,
        default: null
      }), Ct("design:type", et.b)], Qt.prototype, "nextEpisode", void 0),
      St([Object(n.d)({
        type: Number,
        default: 0
      }), Ct("design:type", Number)], Qt.prototype, "pageIndex", void 0),
      St([Object(n.d)({
        type: Number,
        default: 0
      }), Ct("design:type", Number)], Qt.prototype, "pageCount", void 0),
      St([Object(n.d)({
        type: Array,
        default: function() {
          return []
        }
      }), Ct("design:type", Array)], Qt.prototype, "loadingEpisodeIds", void 0),
      St([Object(n.d)({
        type: Array,
        default: function() {
          return []
        }
      }), Ct("design:type", Array)], Qt.prototype, "failedEpisodeIds", void 0),
      St([Object($e.a)(), Ct("design:type", Function), Ct("design:paramtypes", []), Ct("design:returntype", Promise)], Qt.prototype, "toggleFavourite", null);
    var Ut, Pt, Yt = Qt = St([Object(n.b)({
      components: {
        EpisodeList: wt,
        MangaNavbar: dt.a,
        ReaderSetting: kt,
        Slider: lt,
        ReadNav: Ot,
        ActionButton: Nt
      },
      subscriptions: function() {
        return {
          readerSettingState: We,
          mangaInfoState: Qe,
          loadingStatusState: nt
        }
      }
    })], Qt), Rt = (a("dQCb"),
      Object(De.a)(Yt, function() {
        var t = this
          , e = t.$createElement
          , i = t._self._c || e;
        return i("transition", {
          attrs: {
            "leave-active-class": "a-fade-out"
          }
        }, [i("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.value,
            expression: "value"
          }],
          staticClass: "manga-reader-ui",
          on: {
            click: t.onUiClick
          }
        }, [i("div", {
          staticClass: "navbar-container w-100 p-absolute p-zero a-move-in-bottom",
          on: {
            mousemove: t.onMouseMove,
            mouseleave: t.onMouseLeave
          }
        }, [i("manga-navbar", {
          staticClass: "manga-navbar",
          attrs: {
            "is-show-nav-link": !1,
            "is-show-search-bar": !1
          },
          scopedSlots: t._u([t.mangaSeason ? {
            key: "centerPart",
            fn: function() {
              return [i("read-nav", {
                attrs: {
                  "manga-season": t.mangaSeason,
                  "current-episode-id": t.currentEpisodeId
                }
              })]
            },
            proxy: !0
          } : null], null, !0)
        })], 1), i("div", {
          staticClass: "action-bar-container w-100 p-absolute a-move-in-top",
          on: {
            mousemove: t.onMouseMove,
            mouseleave: t.onMouseLeave
          }
        }, [i("jk-vertical-center", {
          staticClass: "action-bar-content m-auto"
        }, [i("div", {
          staticClass: "t-center t-no-wrap"
        }, [i("div", {
          staticClass: "zoomer dp-i-block v-middle t-center"
        }, [i("span", {
          staticClass: "v-middle zoom-btn btn-minus bg-center bg-no-repeat pointer",
          on: {
            click: t.onZoomOut
          }
        }), i("span", {
          staticClass: "v-middle zoom-display t-center pointer",
          on: {
            click: t.onZoomReset
          }
        }, [t._v(t._s(t.displayZoomFactor))]), i("span", {
          staticClass: "v-middle zoom-btn btn-plus bg-center bg-no-repeat pointer",
          on: {
            click: t.onZoomIn
          }
        })]), i("div", {
          staticClass: "page-slider dp-i-block v-middle"
        }, [i("slider", {
          attrs: {
            value: t.pageIndex$,
            "is-in-double-page": t.isInDoublePage,
            minimum: t.getMinimum,
            maximum: t.pageCount$,
            width: 323
          },
          on: {
            input: t.onPageSwitch
          }
        })], 1), i("div", {
          staticClass: "action-buttons"
        }, [i("button", {
          staticClass: "app-button",
          attrs: {
            disabled: !t.prevEpisode
          },
          on: {
            click: function(e) {
              t.prevEpisode && t.onEpisodeSwitchButtonClick(t.prevEpisode.id)
            }
          }
        }, [i("span", {
          staticClass: "v-middle pageup"
        }, [t._v("上一话")]), i("img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.failedEpisodeIds.includes((t.prevEpisode || {}).id),
            expression: "failedEpisodeIds.includes((prevEpisode || {}).id)"
          }],
          staticClass: "v-middle",
          attrs: {
            width: "16",
            src: a("Hsxi"),
            title: "上一话加载失败了，您可进入章节后重新载入 " + t.$emoji.happy()
          }
        })]), i("button", {
          staticClass: "app-button",
          attrs: {
            disabled: !t.nextEpisode
          },
          on: {
            click: function(e) {
              t.nextEpisode && t.onEpisodeSwitchButtonClick(t.nextEpisode.id)
            }
          }
        }, [i("span", {
          staticClass: "v-middle pagedown"
        }, [t._v("下一话")]), i("img", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.failedEpisodeIds.includes((t.nextEpisode || {}).id),
            expression: "failedEpisodeIds.includes((nextEpisode || {}).id)"
          }],
          staticClass: "v-middle",
          attrs: {
            width: "16",
            src: a("Hsxi"),
            title: "下一话加载失败了，您可进入章节后重新载入 " + t.$emoji.happy()
          }
        })]), i("div", {
          staticClass: "episode-list-button dp-i-block v-middle p-relative"
        }, [i("button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.contents.click",
            expression: "'777.17.contents.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              manga_id: t.mangaSeason.id + "",
              manga_num: t.currentEpisodeId + ""
            },
            expression: "{manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + ''}"
          }],
          staticClass: "app-button",
          on: {
            click: function(e) {
              t.isShowEpisodeList ? t.closeEpisodeList() : t.openEpisodeList()
            }
          }
        }, [i("span", {
          staticClass: "v-middle toc"
        }, [t._v("目录")])]), i("transition", {
          attrs: {
            "leave-active-class": "a-scale-out-ease"
          }
        }, [i("episode-list", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShowEpisodeList,
            expression: "isShowEpisodeList"
          }],
          staticClass: "episode-list p-absolute a-scale-in-ease",
          attrs: {
            "current-episode-id": t.currentEpisodeId,
            "episode-list": t.episodeList,
            "loading-episode-ids": t.loadingEpisodeIds,
            "failed-episode-ids": t.failedEpisodeIds,
            "manga-season": t.mangaSeason
          },
          nativeOn: {
            click: function(e) {
              e.stopPropagation()
            }
          }
        })], 1)], 1)]), i("div", {
          staticClass: "divider"
        }), i("div", {
          staticClass: "action-buttons"
        }, [i("div", {
          staticClass: "reader-setting-buttons dp-i-block p-relative v-middle"
        }, [i("action-button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.comment.click",
            expression: "'777.17.comment.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              manga_id: t.mangaSeason.id + "",
              manga_num: t.currentEpisodeId + ""
            },
            expression: "{ manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + '' }"
          }],
          staticClass: "comment-button p-relative v-middle",
          attrs: {
            "img-url": a("PzWz"),
            label: "单话评论"
          },
          on: {
            click: t.openEpisodeComment
          }
        }, [t.commentCount ? i("span", {
          staticClass: "episode-comment-count p-absolute"
        }, [t._v(t._s(t.commentCount))]) : t._e()]), i("action-button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.follow_icon.click",
            expression: "'777.17.follow_icon.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              manga_id: t.mangaSeason.id + "",
              manga_num: t.currentEpisodeId + ""
            },
            expression: "{manga_id: mangaSeason.id + '', manga_num: currentEpisodeId + ''}"
          }],
          staticClass: "fav-toggle-button v-middle",
          attrs: {
            disabled: t.isDoFavouriteButtonDisabled,
            label: t.isFavourite ? "已追" : "追漫",
            loading: t.isInFavourite,
            "img-url": t.isFavourite ? a("T2P2") : a("d5oT")
          },
          on: {
            click: t.toggleFavourite
          }
        }), i("div", {
          staticClass: "setting-button-container dp-i-block p-relative v-middle"
        }, [i("action-button", {
          staticClass: "setting-button p-relative v-middle",
          attrs: {
            "img-url": a("FmG3"),
            label: "阅读设置"
          },
          on: {
            click: t.onSettingButtonClick
          }
        }), i("reader-setting", {
          staticClass: "reader-setting p-absolute a-scale-in-ease",
          nativeOn: {
            click: function(e) {
              e.stopPropagation()
            }
          },
          model: {
            value: t.isShowReaderSetting,
            callback: function(e) {
              t.isShowReaderSetting = e
            },
            expression: "isShowReaderSetting"
          }
        })], 1)], 1)])])])], 1)])])
      }, [], !1, null, "30251da8", null).exports), Bt = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "getImageSizeByQuality",
        value: function(e, t, i) {
          var n = {
            width: 0,
            height: 0
          }
            , a = e / t
            , o = Math.floor(e * i);
          switch (i) {
            case W.VeryPoor:
              o > G.VeryPoor && (o = G.VeryPoor);
              break;
            case W.Poor:
              o > G.Poor && (o = G.Poor);
              break;
            case W.Normal:
              o > G.Normal && (o = G.Normal);
              break;
            case W.Good:
              o > G.Good && (o = G.Good);
              break;
            case W.VeryHigh:
              o > G.VeryHigh && (o = G.VeryHigh)
          }
          return n.width = o,
            n.height = Math.floor(o / a),
            n
        }
      }]),
        e
    }(), Wt = a("J3ON"), Zt = a("vDqi"), Gt = a.n(Zt).a.create();
    (Pt = Ut || (Ut = {}))[Pt.Normal = 0] = "Normal",
      Pt[Pt.EpisodeNeedToBePurchased = 1] = "EpisodeNeedToBePurchased",
      Pt[Pt.EpisodeIsOffline = 2] = "EpisodeIsOffline";
    var Ft, qt, Ht = function() {
      function e() {
        j()(this, e)
      }
      var t, i, n;
      return w()(e, null, [{
        key: "getIndexFileUrl",
        value: (n = U()(C.a.mark(function e(t) {
            var i, n, a, o, s;
            return C.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = {
                      data: null,
                      error: null,
                      code: null
                    },
                      e.next = 3,
                      _.a.post({
                        url: "/twirp/comic.v1.Comic/GetImageIndex",
                        data: {
                          ep_id: t
                        }
                      });
                  case 3:
                    if (n = e.sent,
                      a = n.data,
                      o = n.error,
                      s = n.code,
                      o)
                      return i.error = o,
                        e.abrupt("return", i);
                    e.next = 10;
                    break;
                  case 10:
                    e.t0 = s,
                      e.next = 0 === e.t0 ? 13 : 1 === e.t0 ? 16 : 501 === e.t0 ? 18 : 20;
                    break;
                  case 13:
                    return i.code = Ut.Normal,
                      i.data = a,
                      e.abrupt("break", 20);
                  case 16:
                    return i.code = Ut.EpisodeNeedToBePurchased,
                      e.abrupt("break", 20);
                  case 18:
                    return i.code = Ut.EpisodeIsOffline,
                      e.abrupt("break", 20);
                  case 20:
                    return e.abrupt("return", i);
                  case 21:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e) {
              return n.apply(this, arguments)
            }
        )
      }, {
        key: "getIndexFileFromBfs",
        value: (i = U()(C.a.mark(function e(t) {
            var i, n, a, o;
            return C.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return n = i = null,
                      e.prev = 2,
                      e.next = 5,
                      Gt.get(t, {
                        responseType: "arraybuffer"
                      });
                  case 5:
                    a = e.sent,
                      o = a.data,
                      i = o,
                      e.next = 13;
                    break;
                  case 10:
                    e.prev = 10,
                      e.t0 = e.catch(2),
                      n = e.t0;
                  case 13:
                    return e.abrupt("return", {
                      data: i,
                      error: n
                    });
                  case 14:
                  case "end":
                    return e.stop()
                }
            }, e, null, [[2, 10]])
          })),
            function(e) {
              return i.apply(this, arguments)
            }
        )
      }, {
        key: "decodeIndexFile",
        value: (t = U()(C.a.mark(function e(t) {
            var i, n, a;
            return C.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return n = i = null,
                      e.prev = 2,
                      a = new Uint8Array(t.indexData),
                      e.t0 = JSON,
                      e.next = 7,
                      Object(Wt.a)(t.seasonId, t.episodeId, a);
                  case 7:
                    e.t1 = e.sent,
                      i = e.t0.parse.call(e.t0, e.t1),
                      e.next = 14;
                    break;
                  case 11:
                    e.prev = 11,
                      e.t2 = e.catch(2),
                      n = e.t2;
                  case 14:
                    return e.abrupt("return", {
                      data: i,
                      error: n
                    });
                  case 15:
                  case "end":
                    return e.stop()
                }
            }, e, null, [[2, 11]])
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }(), _t = function() {
      function e() {
        j()(this, e)
      }
      var n;
      return w()(e, null, [{
        key: "loadTargetEpisodeImages",
        value: (n = U()(C.a.mark(function e(t, i, s) {
            var n, a, o, r, c, u, M, l, d, A, g, D, y, N, p;
            return C.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return n = {
                      data: null,
                      error: null,
                      code: null
                    },
                      e.next = 3,
                      Ht.getIndexFileUrl(i);
                  case 3:
                    if (a = e.sent,
                      o = a.data,
                      r = a.error,
                      c = a.code,
                      r)
                      return n.error = r,
                        e.abrupt("return", n);
                    e.next = 10;
                    break;
                  case 10:
                    e.t0 = c,
                      e.next = e.t0 === Ut.EpisodeIsOffline ? 13 : e.t0 === Ut.EpisodeNeedToBePurchased ? 15 : 17;
                    break;
                  case 13:
                    return n.code = Ft.EpisodeIsOffline,
                      e.abrupt("return", n);
                  case 15:
                    return n.code = Ft.EpisodeNeedToPurchase,
                      e.abrupt("return", n);
                  case 17:
                    return u = o.host + o.path,
                      e.next = 20,
                      Ht.getIndexFileFromBfs(u);
                  case 20:
                    if (M = e.sent,
                      l = M.data,
                      d = M.error)
                      return n.error = d,
                        e.abrupt("return", n);
                    e.next = 26;
                    break;
                  case 26:
                    return e.next = 28,
                      Ht.decodeIndexFile({
                        seasonId: t,
                        episodeId: i,
                        indexData: l
                      });
                  case 28:
                    if (A = e.sent,
                      g = A.data,
                      D = A.error)
                      return n.error = D,
                        e.abrupt("return", n);
                    e.next = 34;
                    break;
                  case 34:
                    if (Array.isArray(g.pics)) {
                      e.next = 37;
                      break
                    }
                    return n.error = new Error("index.pics is not an array."),
                      e.abrupt("return", n);
                  case 37:
                    return y = g.sizes.slice(),
                      N = g.pics.slice(),
                      p = N.map(function(e, t) {
                        var i = y[t]
                          , n = Bt.getImageSizeByQuality(i.cx, i.cy, s)
                          , a = n.width
                          , o = n.height;
                        return new Me.a({
                          width: a,
                          height: o,
                          imagePath: e
                        })
                      }),
                      n.data = p,
                      e.abrupt("return", n);
                  case 42:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e, t, i) {
              return n.apply(this, arguments)
            }
        )
      }]),
        e
    }();
    (qt = Ft || (Ft = {}))[qt.Normal = 0] = "Normal",
      qt[qt.EpisodeIsOffline = 1] = "EpisodeIsOffline",
      qt[qt.EpisodeNeedToPurchase = 2] = "EpisodeNeedToPurchase";
    var Jt = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "assignTargetEpisodeAsPurchased",
        value: function(e, t) {
          var i = e.episodeList.find(function(e) {
            return e.id === t
          });
          i && (i.isLocked = !1)
        }
      }]),
        e
    }()
      , Vt = a("9ljz")
      , Xt = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "getHintAutoDisplayStatus",
        value: function() {
          return "false" !== Vt.a.getItem(this.STORAGE_KEY)
        }
      }, {
        key: "setHintAutoDisplayStatus",
        value: function(e) {
          Vt.a.setItem(this.STORAGE_KEY, e ? "true" : "false")
        }
      }]),
        e
    }();
    Xt.STORAGE_KEY = "BilibiliManga:IsAutoDisplayPageMatchingHint";
    var Kt = a("SOox")
      , $t = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , ei = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , ti = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "tryToPurchaseEpisode",
        value: function(e) {
          return Kt.a.purchaseEpisode({
            purchaseMethod: X.b.AutoPurchase,
            episodeId: e
          })
        }
      }]),
        e
    }();
    $t([Object($e.a)({
      isShowQuickLoginPanel: !1
    }), ei("design:type", Function), ei("design:paramtypes", [Number]), ei("design:returntype", Promise)], ti, "tryToPurchaseEpisode", null);
    var ii, ni, ai = function() {
      function e() {
        j()(this, e)
      }
      return w()(e, null, [{
        key: "getPrevEpisodeData",
        value: function(e, t) {
          var i = null
            , n = t.episodeList || []
            , a = n.indexOf(e)
            , o = a + 1;
          return -1 < a && o <= n.length - 1 && (i = n[o]),
            i
        }
      }, {
        key: "getNextEpisodeData",
        value: function(e, t) {
          var i = null
            , n = t.episodeList || []
            , a = n.indexOf(e) - 1;
          return -1 < a && (i = n[a]),
            i
        }
      }]),
        e
    }(), oi = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }, si = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    };
    (ni = ii || (ii = {}))[ni.none = 0] = "none",
      ni[ni.Retry = 1] = "Retry",
      ni[ni.CountdownBack = 2] = "CountdownBack";
    var ri = function(e) {
      function t() {
        var e;
        return j()(this, t),
          (e = v()(this, z()(t).apply(this, arguments))).seasonId = 0,
          e.episodeId = 0,
          e.isFirstInitFinished = !1,
          e.zoomFactor = 1,
          e.errorType = ii.none,
          e.errorPageTypeMap = Object.assign({}, ii),
          e.errorMessage = "",
          e.isAllowPrevNextEpisodeAutoLoad = !1,
          e.isAddBlankPage = Ye.checkIsAppendBlankPageInDoubleMode(),
          e.imageQuality = W.Good,
          e.allEpisodeReaderImages = {},
          e.pageIndex = 0,
          e.loadedEpisodeIds = [],
          e.loadingEpisodeIds = [],
          e.failedEpisodeIds = [],
          e.offlineEpisodeIds = [],
          e.toPurchaseEpisodeIds = [],
          e.inPurchaseEpisodeIds = [],
          e.isSeasonInLoading = !1,
          e.isLoadingFailed = !1,
          e.isUiOpen = !0,
          e.isShowPurchasePanel = !1,
          e.isShowComment = !1,
          e.uiCloseTimer = 0,
          e.noEpisodeHinterTimer = 0,
          e.isShowNoPrevEpisodeToast = !1,
          e.isShowNoNextEpisodeToast = !1,
          e.isShowShortcutsInfo = !1,
          e.isShowPageMatchingHint = !1,
          e.episodeOrd = 0,
          e.isPageHistoryInSet = !1,
          e.uiScreenTriggerOpenTimer = null,
          e
      }
      var i, n, a, o, s, r, c, u, M, l, d;
      return L()(t, e),
        w()(t, [{
          key: "lockPrevNextEpisodeAutoLoad",
          value: function() {
            this.isAllowPrevNextEpisodeAutoLoad = !1
          }
        }, {
          key: "releasePrevNextEpisodeAutoLoad",
          value: function() {
            this.isAllowPrevNextEpisodeAutoLoad = !0
          }
        }, {
          key: "getReaderUi",
          value: function() {
            return this.$refs.readerUi
          }
        }, {
          key: "onUiDisplayStateChange",
          value: function(e) {
            this.isUiOpen = e
          }
        }, {
          key: "clearErrorAndReInit",
          value: function() {
            this.errorType = ii.none,
              this.errorMessage = "",
              this.$emit("re-init")
          }
        }, {
          key: "closePageMatchingHoverToast",
          value: function() {
            this.isShowPageMatchingHint = !1,
              Xt.setHintAutoDisplayStatus(!1)
          }
        }, {
          key: "createReaderViewsForEpisode",
          value: function(e) {
            var t = Array.isArray(this.allEpisodeReaderImages[e]) ? this.allEpisodeReaderImages[e].slice() : [];
            return this.toPurchaseEpisodeIds.includes(e) ? t.push(new ue) : this.isInHorizontalMode && this.isInDoublePageMode && this.isAddBlankPage && (t = [new ue].concat(t)),
              t
          }
        }, {
          key: "openUi",
          value: function(e) {
            this.clearUiCloseTimer(),
              this.isUiOpen = !0,
            "number" == typeof e && this.reportToolbarDisplayEvent(e)
          }
        }, {
          key: "toggleUi",
          value: function() {
            this.isUiOpen = !this.isUiOpen
          }
        }, {
          key: "closeUi",
          value: function(e) {
            var t = this
              , i = 0 < arguments.length && void 0 !== e ? e : 0;
            if (i)
              this.uiCloseTimer = window.setTimeout(function() {
                t.isUiOpen = !1;
                var e = t.getReaderUi();
                e && e.closePanel()
              }, i);
            else {
              this.isUiOpen = !1;
              var n = this.getReaderUi();
              n && n.closePanel()
            }
          }
        }, {
          key: "clearUiCloseTimer",
          value: function() {
            clearTimeout(this.uiCloseTimer)
          }
        }, {
          key: "onUiClick",
          value: function() {
            this.clearUiCloseTimer()
          }
        }, {
          key: "openPurchasePanel",
          value: function() {
            this.isShowPurchasePanel = !0
          }
        }, {
          key: "closePurchasePanel",
          value: function() {
            this.isShowPurchasePanel = !1
          }
        }, {
          key: "openEpisodeComment",
          value: function() {
            this.isShowComment = !0
          }
        }, {
          key: "getSeasonData",
          value: (d = U()(C.a.mark(function e() {
              var t, i, n;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.isSeasonInLoading)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      return this.isSeasonInLoading = !0,
                        e.next = 5,
                        K.a.getSeasonData(this.seasonId);
                    case 5:
                      if (t = e.sent,
                        i = t.data,
                        n = t.error,
                        this.isSeasonInLoading = !1,
                        n)
                        throw n;
                      e.next = 11;
                      break;
                    case 11:
                      Ce.next(function(e) {
                        return Object.assign({}, e, {
                          seasonData: i
                        })
                      });
                    case 12:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return d.apply(this, arguments)
              }
          )
        }, {
          key: "getMangaEpisodeDetail",
          value: (l = U()(C.a.mark(function e() {
              var t, i, n;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.episodeId) {
                        e.next = 3;
                        break
                      }
                      return k.a.warn("this.episodeId should have not been empty but it was."),
                        e.abrupt("return");
                    case 3:
                      return e.next = 5,
                        J.getEpisodeData(this.episodeId);
                    case 5:
                      if (t = e.sent,
                        i = t.data,
                        n = t.error)
                        throw n;
                      e.next = 10;
                      break;
                    case 10:
                      Ce.next(function(e) {
                        return Object.assign({}, e, {
                          episodeDetail: i
                        })
                      });
                    case 11:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return l.apply(this, arguments)
              }
          )
        }, {
          key: "getFavouriteState",
          value: (M = U()(C.a.mark(function e() {
              var t, i, n;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = this.seasonId,
                        this.seasonId) {
                        e.next = 3;
                        break
                      }
                      return e.abrupt("return");
                    case 3:
                      return at.lock("isFavourite"),
                        e.next = 6,
                        V.a.hasFavourite(t);
                    case 6:
                      i = e.sent,
                        n = i.data,
                      i.error || Ce.next(function(e) {
                        return Object.assign({}, e, {
                          isFavourite: n
                        })
                      }),
                        at.release("isFavourite");
                    case 11:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return M.apply(this, arguments)
              }
          )
        }, {
          key: "initReaderMode",
          value: function() {
            var e = this.seasonData
              , t = -1 < e.allowedReaderMode.indexOf(q.f.Horizontal) || -1 < e.allowedReaderMode.indexOf(q.f.Manga)
              , i = -1 < e.allowedReaderMode.indexOf(q.f.Horizontal) && -1 < e.allowedReaderMode.indexOf(q.f.Manga)
              , n = -1 < e.allowedReaderMode.indexOf(q.f.Scrolling)
              , a = oe.getReaderModeFromStorage();
            e.allowedReaderMode.indexOf(a) < 0 && (a = e.defaultReaderMode),
            a === q.f.Landscape && (a = q.f.Horizontal);
            var o = Ye.getHorizontalModeFromStorage();
            o === re.a.NotAvailable && (o = re.a.DoublePage),
              Be.next(function(e) {
                return Object.assign({}, e, {
                  isAllowDisplayMessageBox: !0,
                  isAllowDirectionChange: i,
                  isAllowHorizontal: t,
                  isAllowVerticalMode: n,
                  readerMode: a,
                  horizontalMode: o
                })
              })
          }
        }, {
          key: "loadTargetEpisodeImages",
          value: (u = U()(C.a.mark(function e(t, i) {
              var n, a, o, s, r, c, u, M, l, d, A, g = this;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (a = (n = i || {
                        loadInForce: !1,
                        stopIfNeedPurchase: !1
                      }).loadInForce,
                        o = n.stopIfNeedPurchase,
                      this.offlineEpisodeIds.includes(t) || !a && (this.loadingEpisodeIds.includes(t) || this.loadedEpisodeIds.includes(t) || this.failedEpisodeIds.includes(t)))
                        return e.abrupt("return");
                      e.next = 4;
                      break;
                    case 4:
                      return this.loadingEpisodeIds.push(t),
                        ne.removeTargetItem(t, this.failedEpisodeIds),
                        e.next = 8,
                        _t.loadTargetEpisodeImages(this.seasonId, t, this.imageQuality);
                    case 8:
                      if (s = e.sent,
                        r = s.data,
                        c = s.error,
                        u = s.code,
                        ne.removeTargetItem(t, this.loadingEpisodeIds),
                        c)
                        return N.a.error("漫画数据载入失败，非常抱歉，您可稍后重试 " + D.sad()),
                          k.a.error("Episode ".concat(t, " 载入失败:"), c),
                        this.failedEpisodeIds.includes(t) || this.failedEpisodeIds.push(t),
                          e.abrupt("return");
                      e.next = 18;
                      break;
                    case 18:
                      if (u !== Ft.EpisodeNeedToPurchase) {
                        e.next = 40;
                        break
                      }
                      if (o)
                        return e.abrupt("return");
                      e.next = 21;
                      break;
                    case 21:
                      if (this.inPurchaseEpisodeIds.includes(t))
                        return e.abrupt("return");
                      e.next = 23;
                      break;
                    case 23:
                      return this.inPurchaseEpisodeIds.push(t),
                        e.next = 26,
                        ti.tryToPurchaseEpisode(t);
                    case 26:
                      if (M = e.sent,
                        l = M.error,
                        d = M.code,
                        A = M.data,
                        ne.removeTargetItem(t, this.inPurchaseEpisodeIds),
                      l || d !== X.c.Success) {
                        e.next = 38;
                        break
                      }
                      return N.a.success("自动购买成功，已自动扣除 " + A.autoUseItem + " " + D.happy()),
                        Jt.assignTargetEpisodeAsPurchased(this.seasonData, t),
                        this.seasonData.episodeList.some(function(e) {
                          if (e.id === t)
                            return !(e.isLocked = !1)
                        }),
                        p.a.refreshUserData(),
                        setTimeout(function() {
                          return g.reloadCurrentEpisodeImage(t)
                        }, 1),
                        e.abrupt("return");
                    case 38:
                      return this.toPurchaseEpisodeIds.includes(t) || this.toPurchaseEpisodeIds.push(t),
                        e.abrupt("return");
                    case 40:
                      if (u === Ft.EpisodeIsOffline)
                        return this.offlineEpisodeIds.includes(t) || this.offlineEpisodeIds.push(t),
                          e.abrupt("return");
                      e.next = 43;
                      break;
                    case 43:
                      y.default.set(this.allEpisodeReaderImages, t, r),
                        this.loadedEpisodeIds.push(t);
                    case 45:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e, t) {
                return u.apply(this, arguments)
              }
          )
        }, {
          key: "showEpisodeLoadingHint",
          value: function(t) {
            var e = this.seasonData.episodeList.find(function(e) {
              return e.id === t
            }).shortTitle;
            N.a.info("章节 ".concat(e, " 正在载入中，请稍等喔 ") + D.happy())
          }
        }, {
          key: "goToEpisode",
          value: (c = U()(C.a.mark(function e(t) {
              var i, n, a, o, s = this;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (i = t.episodeId,
                        n = t.loadInForce,
                      (a = t.pageIndex) < 0 && (a = 0),
                      this.episodeId !== i || n) {
                        e.next = 5;
                        break
                      }
                      return e.abrupt("return");
                    case 5:
                      if (this.loadingEpisodeIds.includes(i))
                        return this.showEpisodeLoadingHint(i),
                          e.abrupt("return");
                      e.next = 9;
                      break;
                    case 9:
                      return e.prev = 9,
                        this.episodeId = i,
                        e.next = 13,
                        this.getMangaEpisodeDetail();
                    case 13:
                      if (0 === this.episodeDetail.seasonId)
                        return this.errorType = ii.CountdownBack,
                          this.errorMessage = "漫画单话数据不存在或已下线",
                          e.abrupt("return");
                      e.next = 19;
                      break;
                    case 19:
                      if (this.episodeDetail.seasonId !== this.seasonId)
                        return this.errorType = ii.CountdownBack,
                          this.errorMessage = "漫画单话与季度数据不匹配",
                          e.abrupt("return");
                      e.next = 23;
                      break;
                    case 23:
                      e.next = 29;
                      break;
                    case 25:
                      e.prev = 25,
                        e.t0 = e.catch(9),
                        this.errorType = ii.Retry,
                        this.errorMessage = "漫画单话数据加载失败";
                    case 29:
                      return e.next = 31,
                        this.loadTargetEpisodeImages(i, {
                          loadInForce: n
                        });
                    case 31:
                      if (this.offlineEpisodeIds.includes(i))
                        return this.errorType = ii.CountdownBack,
                          this.errorMessage = "漫画单话数据不存在或已下线",
                          e.abrupt("return");
                      e.next = 35;
                      break;
                    case 35:
                      if ((o = this.seasonData.episodeList.find(function(e) {
                        return e.id === s.episodeId
                      })) && (this.episodeOrd = o.ord),
                        this.setPageTitle(),
                        this.setMetaData(),
                        this.replaceHistoryState(),
                        this.destroyOtherEpisodeImages(),
                        this.loadedEpisodeIds.includes(i))
                        return e.next = 45,
                          ie.a.setReadHistory(this.seasonId, i);
                      e.next = 45;
                      break;
                    case 45:
                      return this.toPurchaseEpisodeIds.includes(i) ? (this.closePurchasePanel(),
                        this.$nextTick(function() {
                          return s.openPurchasePanel()
                        })) : this.closePurchasePanel(),
                        e.next = 49,
                        b.d.sleep(10);
                    case 49:
                      this.goTargetPage(a);
                    case 50:
                    case "end":
                      return e.stop()
                  }
              }, e, this, [[9, 25]])
            })),
              function(e) {
                return c.apply(this, arguments)
              }
          )
        }, {
          key: "onPurchaseDone",
          value: function(e) {
            var t = this;
            ne.removeTargetItem(this.episodeId, this.toPurchaseEpisodeIds),
              this.closePurchasePanel(),
              this.reloadCurrentEpisodeImage(),
              ie.a.setReadHistory(this.seasonId, this.episodeId),
              e.forEach(function(e) {
                return Jt.assignTargetEpisodeAsPurchased(t.seasonData, e)
              })
          }
        }, {
          key: "reloadCurrentEpisodeImage",
          value: (r = U()(C.a.mark(function e() {
              var t, i = arguments;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return t = 0 < i.length && void 0 !== i[0] ? i[0] : this.episodeId,
                        e.next = 3,
                        this.loadTargetEpisodeImages(t, {
                          loadInForce: !0
                        });
                    case 3:
                      this.autoLoadImages();
                    case 4:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return r.apply(this, arguments)
              }
          )
        }, {
          key: "clearNoEpisodeHintTimer",
          value: function() {
            window.clearTimeout(this.noEpisodeHinterTimer)
          }
        }, {
          key: "showNoPrevEpisodeHint",
          value: function() {
            var e = this;
            this.isShowNoPrevEpisodeToast = !0,
              this.clearNoEpisodeHintTimer(),
              this.noEpisodeHinterTimer = window.setTimeout(function() {
                e.isShowNoPrevEpisodeToast = !1
              }, 3e3)
          }
        }, {
          key: "showNoNextEpisodeHint",
          value: function() {
            var e = this;
            this.isShowNoNextEpisodeToast = !0,
              this.clearNoEpisodeHintTimer(),
              this.noEpisodeHinterTimer = window.setTimeout(function() {
                e.isShowNoNextEpisodeToast = !1
              }, 3e3)
          }
        }, {
          key: "goPrevPage",
          value: function() {
            var e = this.pageIndex - 1
              , t = this.readerSettingState
              , i = t.horizontalMode
              , n = t.readerMode
              , a = i === re.a.DoublePage && (n === q.f.Horizontal || n === q.f.Manga);
            e % 2 != 0 && a && e--,
              !this.prevEpisodeData && e < 0 ? (e = 0,
                this.showNoPrevEpisodeHint()) : this.isShowNoNextEpisodeToast = !1,
              this.goTargetPage(e)
          }
        }, {
          key: "goNextPage",
          value: function() {
            var e = this.pageIndex + 1;
            e % 2 != 0 && this.isInDoublePageMode && e++,
              !this.nextEpisodeData && e > this.episodeReaderViews.length - 1 ? (e = this.episodeReaderViews.length - 1,
                this.showNoNextEpisodeHint()) : this.isShowNoNextEpisodeToast = !1,
            this.preventExtraPagingInDoublePageMode() && this.goTargetPage(e)
          }
        }, {
          key: "preventExtraPagingInDoublePageMode",
          value: function() {
            if (this.isInDoublePageMode && !this.nextEpisodeData) {
              var e = this.episodeReaderViews.length;
              if (Math.ceil(e / 2) <= Math.floor(this.pageIndex / 2) + 1)
                return !1
            }
            return !0
          }
        }, {
          key: "goTargetPage",
          value: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : 0;
            if (this.isInHorizontalMode) {
              var i = 0 < this.episodeReaderViews.length;
              if (t < 0 && i) {
                var n = this.prevEpisodeData;
                if (n) {
                  var a = this.createReaderViewsForEpisode(n.id)
                    , o = a.length < 1 ? 0 : this.isInDoublePageMode && a.length % 2 == 0 ? a.length - 2 : a.length - 1;
                  this.goToEpisode({
                    episodeId: n.id,
                    pageIndex: o
                  })
                }
                return
              }
              if (t > this.episodeReaderViews.length - 1 && i) {
                var s = this.nextEpisodeData;
                return void (s && this.goToEpisode({
                  episodeId: s.id
                }))
              }
              if (i && t <= se.a.LOAD_PREF_EPISODE_BEFORE && this.isAllowPrevNextEpisodeAutoLoad) {
                var r = this.prevEpisodeData;
                r && this.loadTargetEpisodeImages(r.id, {
                  stopIfNeedPurchase: !0
                })
              }
              if (i && t >= this.episodeReaderViews.length - se.a.LOAD_NEXT_EPISODE_BEFORE && this.isAllowPrevNextEpisodeAutoLoad) {
                var c = this.nextEpisodeData;
                c && this.loadTargetEpisodeImages(c.id, {
                  stopIfNeedPurchase: !0
                })
              }
              if (!i)
                return void (this.pageIndex = 0)
            }
            this.pageIndex = t,
            this.isInHorizontalMode && this.destroyImages(),
              this.autoLoadImages(),
              this.setPageHistory()
          }
        }, {
          key: "setPageHistory",
          value: (s = U()(C.a.mark(function e() {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (this.isPageHistoryInSet)
                        return e.abrupt("return");
                      e.next = 2;
                      break;
                    case 2:
                      if (this.isPageHistoryInSet = !0,
                      this.pageIndex >= this.episodeReaderViews.length - 1)
                        return e.next = 7,
                          te.a.removeHistory(this.episodeId);
                      e.next = 9;
                      break;
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      return e.next = 11,
                        te.a.addRecord(this.episodeId, this.pageIndex);
                    case 11:
                      this.isPageHistoryInSet = !1;
                    case 12:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return s.apply(this, arguments)
              }
          )
        }, {
          key: "autoLoadImages",
          value: function() {
            var i = this.pageIndex - se.a.PREV_IMAGE_LOAD_COUNT
              , n = this.pageIndex + se.a.NEXT_IMAGE_LOAD_COUNT;
            this.episodeReaderViews.filter(function(e, t) {
              return t <= n && i <= t && e instanceof Me.a
            }).forEach(function() {
              var t = U()(C.a.mark(function e(t) {
                return C.a.wrap(function(e) {
                  for (; ; )
                    switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2,
                          t.loadImage();
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                }, e)
              }));
              return function(e) {
                return t.apply(this, arguments)
              }
            }())
          }
        }, {
          key: "destroyOtherEpisodeImages",
          value: function() {
            var t = this;
            Object.keys(this.allEpisodeReaderImages).filter(function(e) {
              return e !== t.episodeId.toString()
            }).forEach(function(e) {
              t.allEpisodeReaderImages[e].forEach(function(e) {
                e instanceof Me.a && e.destroy()
              })
            })
          }
        }, {
          key: "destroyImages",
          value: function() {
            var i = this.pageIndex - se.a.IN_MEMORY_IMAGE_PREV
              , n = this.pageIndex + se.a.IN_MEMORY_IMAGE_NEXT;
            this.episodeReaderImages.filter(function(e, t) {
              return t < i || n < t
            }).forEach(function(e) {
              e instanceof Me.a && e.destroy()
            })
          }
        }, {
          key: "replaceHistoryState",
          value: function() {
            var e = this.seasonData
              , t = this.episodeId
              , i = this.episodeDetail;
            if (e && t && i) {
              var n = e.id
                , a = H.createPageTitle(e, i)
                , o = window.location.search;
              window.history.replaceState({
                seasonId: n,
                episodeId: t
              }, a, "/mc".concat(n, "/").concat(t).concat(o))
            }
          }
        }, {
          key: "doPageMatching",
          value: function() {
            if (this.isInHorizontalMode && this.isInDoublePageMode) {
              var e = !Ye.checkIsAppendBlankPageInDoubleMode();
              this.updateAddBlankPageState(e),
              this.pageIndex >= this.episodeReaderViews.length && this.goTargetPage(this.pageIndex - 2)
            }
          }
        }, {
          key: "updateAddBlankPageState",
          value: function(t) {
            this.isAddBlankPage = t,
              Ye.setBlankPageAppendingInDoubleMode(t),
              Be.next(function(e) {
                return Object.assign({}, e, {
                  isAddBlankPage: t
                })
              })
          }
        }, {
          key: "onUiEpisodeSwitch",
          value: (o = U()(C.a.mark(function e(t) {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return this.lockPrevNextEpisodeAutoLoad(),
                        e.next = 3,
                        this.goToEpisode(t);
                    case 3:
                      this.releasePrevNextEpisodeAutoLoad();
                    case 4:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function(e) {
                return o.apply(this, arguments)
              }
          )
        }, {
          key: "goPrevEpisode",
          value: (a = U()(C.a.mark(function e() {
              var t, i;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = this.prevEpisodeData)
                        return i = t.id,
                          e.t0 = this,
                          e.t1 = i,
                          e.next = 7,
                          te.a.getPageHistory(i);
                      e.next = 10;
                      break;
                    case 7:
                      e.t2 = e.sent,
                        e.t3 = {
                          episodeId: e.t1,
                          pageIndex: e.t2
                        },
                        e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                    case 10:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return a.apply(this, arguments)
              }
          )
        }, {
          key: "goNextEpisode",
          value: (n = U()(C.a.mark(function e() {
              var t, i;
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = this.nextEpisodeData)
                        return i = t.id,
                          e.t0 = this,
                          e.t1 = i,
                          e.next = 7,
                          te.a.getPageHistory(i);
                      e.next = 10;
                      break;
                    case 7:
                      e.t2 = e.sent,
                        e.t3 = {
                          episodeId: e.t1,
                          pageIndex: e.t2
                        },
                        e.t0.onUiEpisodeSwitch.call(e.t0, e.t3);
                    case 10:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            })),
              function() {
                return n.apply(this, arguments)
              }
          )
        }, {
          key: "switchReaderMode",
          value: function(t) {
            Be.next(function(e) {
              return Object.assign({}, e, {
                readerMode: t
              })
            }),
              this.zoomFactor = 1,
              oe.setReaderModeToStorage(t)
          }
        }, {
          key: "clearScreenTriggerOpenTimer",
          value: function() {
            clearTimeout(this.uiScreenTriggerOpenTimer),
              this.uiScreenTriggerOpenTimer = null
          }
        }, {
          key: "onMouseMove",
          value: function(e) {
            var t = this
              , i = e.clientY
              , n = window.innerHeight;
            i <= 50 || n - i <= 50 ? this.uiScreenTriggerOpenTimer || (this.uiScreenTriggerOpenTimer = setTimeout(function() {
              t.openUi(3)
            }, 500)) : this.clearScreenTriggerOpenTimer()
          }
        }, {
          key: "reportToolbarDisplayEvent",
          value: function(e) {
            this.seasonId && this.episodeData && this.$sendStatisticsEvent({
              reportConfig: {
                spmId: "777.17.toobar.click"
              },
              msg: {
                manga_id: this.seasonId + "",
                manga_num: this.episodeData.id + "",
                type: e
              }
            })
          }
        }, {
          key: "onMouseMoveUi",
          value: function() {
            this.clearUiCloseTimer()
          }
        }, {
          key: "onMouseLeaveUi",
          value: function() {
            this.clearScreenTriggerOpenTimer(),
              this.closeUi(1500)
          }
        }, {
          key: "onUiAnyClick",
          value: function() {
            this.clearUiCloseTimer()
          }
        }, {
          key: "onKeyUpHandler",
          value: function(e) {
            var t = e.key
              , i = e.altKey
              , n = e.ctrlKey
              , a = e.shiftKey
              , o = e.metaKey
              , s = !(n || i || a || o)
              , r = n && !i && !a
              , c = a && !n && !i
              , u = 1 < this.zoomFactor
              , M = this.readerSettingState.readerMode === q.f.Manga
              , l = this.isInHorizontalMode
              , d = this.isInDoublePageMode
              , A = this.seasonData.allowedReaderMode
              , g = A.includes(q.f.Manga) || A.includes(q.f.Horizontal);
            if (r) {
              if ("ArrowLeft" === t && g)
                return this.switchReaderMode(q.f.Manga);
              if ("ArrowRight" === t && g)
                return this.switchReaderMode(q.f.Horizontal);
              if ("ArrowDown" === t && A.includes(q.f.Scrolling))
                return this.switchReaderMode(q.f.Scrolling)
            }
            if (c && !u) {
              if ("ArrowLeft" === t)
                return M ? this.goNextEpisode() : this.goPrevEpisode(),
                  void this.closeUi();
              if ("ArrowRight" === t)
                return M ? this.goPrevEpisode() : this.goNextEpisode(),
                  void this.closeUi()
            }
            switch (t) {
              case "ArrowLeft":
                return void (s && l && !u && (M ? this.goNextPage() : this.goPrevPage(),
                  this.closeUi()));
              case "ArrowRight":
                return void (s && l && !u && (M ? this.goPrevPage() : this.goNextPage(),
                  this.closeUi()));
              case "ArrowUp":
              case "PageUp":
              case "Backspace":
                return void (l && s && !u && (this.goPrevPage(),
                  this.closeUi()));
              case "ArrowDown":
              case "PageDown":
              case " ":
                return void (l && s && !u && (this.goNextPage(),
                  this.closeUi()));
              case "Home":
                return void (l && s && (this.goTargetPage(0),
                  this.closeUi()));
              case "End":
                return void (l && s && (this.goTargetPage(this.episodeReaderViews.length - 1),
                  this.closeUi()));
              case "c":
                return void (d && s && this.doPageMatching());
              case "Enter":
                return void (i || this.toggleUi())
            }
          }
        }, {
          key: "setPageTitle",
          value: function() {
            var e = H.createPageTitle(this.seasonData, this.episodeDetail);
            ee.a.setPageTitle(e)
          }
        }, {
          key: "setMetaData",
          value: function() {
            var e = this.seasonData.title
              , t = this.episodeDetail.shortTitle
              , i = this.episodeDetail.title
              , n = "".concat(e, "漫画, ").concat(e, "全集");
            t && (n += ", ".concat(t)),
            i && (n += ", ".concat(i)),
              n += " , 哔哩哔哩漫画, bilibili 漫画官方网站",
              $.a.setKeywords(n);
            var a = this.seasonData.evaluate;
            $.a.setDescription(a)
          }
        }, {
          key: "openShortcutsInfo",
          value: function() {
            this.isShowShortcutsInfo = !0
          }
        }, {
          key: "onWatchIsInDoublePageMode",
          value: function(e) {
            e && Xt.getHintAutoDisplayStatus() && (this.isShowPageMatchingHint = !0)
          }
        }, {
          key: "init",
          value: (i = U()(C.a.mark(function e(t, i) {
              return C.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      return this.seasonId = t,
                        e.prev = 1,
                        this.lockPrevNextEpisodeAutoLoad(),
                        e.next = 5,
                        this.getSeasonData();
                    case 5:
                      if (0 === this.seasonData.id)
                        return this.errorType = ii.CountdownBack,
                          this.errorMessage = "漫画季度数据不存在或已下线",
                          e.abrupt("return");
                      e.next = 9;
                      break;
                    case 9:
                      return this.initReaderMode(),
                        e.t0 = this,
                        e.t1 = i,
                        e.next = 14,
                        te.a.getPageHistory(i);
                    case 14:
                      return e.t2 = e.sent,
                        e.t3 = {
                          episodeId: e.t1,
                          pageIndex: e.t2
                        },
                        e.next = 18,
                        e.t0.goToEpisode.call(e.t0, e.t3);
                    case 18:
                      this.getFavouriteState(),
                        this.isFirstInitFinished = !0,
                        this.releasePrevNextEpisodeAutoLoad(),
                        e.next = 29;
                      break;
                    case 23:
                      e.prev = 23,
                        e.t4 = e.catch(1),
                        this.errorType = ii.Retry,
                        this.errorMessage = "漫画阅读器初始化失败 " + (e.t4 && e.t4.message),
                        N.a.error("漫画加载失败，请稍后再试，非常抱歉 " + D.sad()),
                        k.a.error("漫画数据初始化失败:", e.t4);
                    case 29:
                    case "end":
                      return e.stop()
                  }
              }, e, this, [[1, 23]])
            })),
              function(e, t) {
                return i.apply(this, arguments)
              }
          )
        }, {
          key: "initWatchers",
          value: function() {
            this.$watch("isInDoublePageMode", this.onWatchIsInDoublePageMode, {
              immediate: !0
            })
          }
        }, {
          key: "onZoomIn",
          value: function() {
            this.zoomFactor - 2 < Number.EPSILON && (this.zoomFactor += .1)
          }
        }, {
          key: "onZoomOut",
          value: function() {
            this.zoomFactor - .5 > Number.EPSILON && (this.zoomFactor -= .1)
          }
        }, {
          key: "onZoomReset",
          value: function() {
            this.zoomFactor = 1
          }
        }, {
          key: "onWheel",
          value: function(e) {
            var t = e.deltaY
              , i = e.ctrlKey
              , n = e.detail
              , a = (t || n) < 0;
            i && (e.preventDefault(),
              e.stopPropagation(),
              a ? this.onZoomIn() : this.onZoomOut())
          }
        }, {
          key: "created",
          value: function() {
            this.initWatchers()
          }
        }, {
          key: "mounted",
          value: function() {
            this.closeUi(2e3),
              window.addEventListener("keyup", this.onKeyUpHandler)
          }
        }, {
          key: "beforeDestroy",
          value: function() {
            this.clearUiCloseTimer(),
              this.clearNoEpisodeHintTimer(),
              window.removeEventListener("keyup", this.onKeyUpHandler)
          }
        }, {
          key: "seasonData",
          get: function() {
            return this.mangaInfoState ? this.mangaInfoState.seasonData : new q.c
          }
        }, {
          key: "episodeDetail",
          get: function() {
            return this.mangaInfoState ? this.mangaInfoState.episodeDetail : new B
          }
        }, {
          key: "isUiOpenOrAnyPanelShowing",
          get: function() {
            return this.isUiOpen || this.isShowPurchasePanel
          }
        }, {
          key: "isShowDirectionSwitchHint",
          get: function() {
            var e = this.readerSettingState.readerMode;
            return !this.isShowPurchasePanel && e !== q.f.Scrolling
          }
        }, {
          key: "isNormalReadModel",
          get: function() {
            var e = this.readerSettingState.readerMode;
            return 2 !== e && (4 === e || void 0)
          }
        }, {
          key: "episodeData",
          get: function() {
            var t = this
              , e = null;
            return this.seasonData && (e = this.seasonData.episodeList.find(function(e) {
              return e.id === t.episodeId
            })),
              e
          }
        }, {
          key: "prevEpisodeData",
          get: function() {
            var e = this.episodeData;
            return e ? ai.getPrevEpisodeData(e, this.seasonData) : null
          }
        }, {
          key: "nextEpisodeData",
          get: function() {
            var e = this.episodeData;
            return e ? ai.getNextEpisodeData(e, this.seasonData) : null
          }
        }, {
          key: "episodeReaderImages",
          get: function() {
            return Array.isArray(this.allEpisodeReaderImages[this.episodeId]) ? this.allEpisodeReaderImages[this.episodeId].slice() : []
          }
        }, {
          key: "episodeReaderViews",
          get: function() {
            return this.createReaderViewsForEpisode(this.episodeId)
          }
        }, {
          key: "isAnyImageInLoading",
          get: function() {
            return 0 < this.episodeReaderImages.map(function(e) {
              return e.vm
            }).filter(function(e) {
              return e.inLoading
            }).length
          }
        }, {
          key: "isPrevOrNextEpisodeInLoading",
          get: function() {
            return this.prevEpisodeData && this.nextEpisodeData && (this.loadingEpisodeIds.includes(this.prevEpisodeData.id) || this.loadingEpisodeIds.includes(this.nextEpisodeData.id))
          }
        }, {
          key: "isInHorizontalMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Horizontal || this.readerSettingState.readerMode === q.f.Manga
          }
        }, {
          key: "isInDoublePageMode",
          get: function() {
            return this.isInHorizontalMode && this.readerSettingState.horizontalMode === re.a.DoublePage
          }
        }, {
          key: "isInVerticalMode",
          get: function() {
            return this.readerSettingState.readerMode === q.f.Scrolling
          }
        }, {
          key: "isCurrentEpisodeNeedToPurchase",
          get: function() {
            return this.toPurchaseEpisodeIds.includes(this.episodeId)
          }
        }]),
        t
    }(y.default);
    oi([Object(n.f)("goToEpisode"), si("design:type", Function), si("design:paramtypes", [Object]), si("design:returntype", Promise)], ri.prototype, "goToEpisode", null),
      oi([Object(n.f)("onUiEpisodeSwitch"), si("design:type", Function), si("design:paramtypes", [Object]), si("design:returntype", Promise)], ri.prototype, "onUiEpisodeSwitch", null),
      oi([Object(n.f)("switchReaderMode"), si("design:type", Function), si("design:paramtypes", [Number]), si("design:returntype", void 0)], ri.prototype, "switchReaderMode", null);
    var ci = ri = oi([Object(n.b)({
      components: {
        HorizontalMode: function() {
          return a.e(20).then(a.bind(null, "VztH"))
        },
        VerticalMode: function() {
          return a.e(21).then(a.bind(null, "bqNt"))
        },
        PurchasePanel: function() {
          return Promise.all([a.e(4), a.e(19)]).then(a.bind(null, "I/1m"))
        },
        PurchasePlaceholder: function() {
          return a.e(29).then(a.bind(null, "M1pz"))
        },
        ShortcutsInfo: function() {
          return a.e(26).then(a.bind(null, "jSF1"))
        },
        CountdownErrorPage: function() {
          return a.e(27).then(a.bind(null, "d5ph"))
        },
        RetryErrorPage: function() {
          return a.e(28).then(a.bind(null, "nTv8"))
        },
        InfoHud: He,
        ReaderUi: Rt,
        MessageBox: Ke,
        FloatingButton: Ee,
        EpisodeComment: ye,
        EpisodeToast: je,
        HoverToast: xe
      },
      subscriptions: function() {
        return {
          readerSettingState: We,
          mangaInfoState: Qe
        }
      }
    })], ri)
      , ui = (a("BgRQ"),
      Object(De.a)(ci, function() {
        var t = this
          , e = t.$createElement
          , i = t._self._c || e;
        return i("div", {
          staticClass: "manga-reader p-relative",
          on: {
            contextmenu: function(e) {
              e.preventDefault(),
                e.stopPropagation(),
                t.isUiOpenOrAnyPanelShowing ? t.closeUi() : t.openUi(2)
            },
            click: function(e) {
              return e.stopPropagation(),
                t.onUiClick(e)
            },
            "!wheel": function(e) {
              return t.onWheel(e)
            },
            mousemove: t.onMouseMove
          }
        }, [t.errorType === t.errorPageTypeMap.CountdownBack ? [i("countdown-error-page", {
          attrs: {
            message: t.errorMessage
          }
        })] : t.errorType === t.errorPageTypeMap.Retry ? [i("retry-error-page", {
          attrs: {
            message: t.errorMessage
          },
          on: {
            retry: t.clearErrorAndReInit
          }
        })] : t.isSeasonInLoading ? [i("jk-vertical-center", {
          staticClass: "h-100"
        }, [i("p", [t._v("载入中 " + t._s(t.$emoji.happy()))])])] : [i("div", {
          staticClass: "reader-body w-100 h-100 p-absolute p-zero",
          on: {
            "!click": function(e) {
              return t.closeUi()
            }
          }
        }, [t.isInHorizontalMode ? i("horizontal-mode", {
          staticClass: "h-100",
          attrs: {
            "page-index": t.pageIndex,
            "image-list": t.episodeReaderViews,
            "horizontal-mode": t.readerSettingState.horizontalMode,
            "reader-mode": t.readerSettingState.readerMode,
            "manga-default-reader-mode": t.seasonData.defaultReaderMode,
            "zoom-factor": t.zoomFactor
          },
          on: {
            "go-prev": t.goPrevPage,
            "go-next": t.goNextPage,
            "zoom-step-in": t.onZoomIn,
            "zoom-step-out": t.onZoomOut
          }
        }) : t._e(), t.isInVerticalMode ? i("vertical-mode", {
          staticClass: "h-100",
          attrs: {
            "page-index": t.pageIndex,
            "image-list": t.episodeReaderViews,
            "prev-episode-data": t.prevEpisodeData,
            "next-episode-data": t.nextEpisodeData,
            "is-hide-ep-switch-button": t.isCurrentEpisodeNeedToPurchase,
            "zoom-factor": t.zoomFactor
          },
          on: {
            "page-switch": t.goTargetPage
          }
        }) : t._e()], 1), i("info-hud", {
          staticClass: "info-hud p-absolute info-layer",
          attrs: {
            "page-index": t.pageIndex,
            "page-count": t.episodeReaderViews.length,
            "short-title": (t.episodeData || {}).shortTitleFormattedPrefix,
            "show-progress": t.isAnyImageInLoading || t.isPrevOrNextEpisodeInLoading,
            "only-show-episode": t.episodeReaderImages.length < 1
          }
        }), i("message-box", {
          staticClass: "message-box p-absolute info-layer",
          attrs: {
            "is-normal-read-model": t.isNormalReadModel,
            "is-show-direction": t.isShowDirectionSwitchHint
          }
        }), i("episode-toast", {
          staticClass: "episode-toast p-absolute info-layer",
          attrs: {
            "is-show-pre-episode-toast": t.isShowNoPrevEpisodeToast,
            "is-show-nex-episode-toast": t.isShowNoNextEpisodeToast
          }
        }), i("purchase-placeholder", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isCurrentEpisodeNeedToPurchase,
            expression: "isCurrentEpisodeNeedToPurchase"
          }],
          on: {
            click: t.openPurchasePanel
          }
        }), i("div", {
          on: {
            "!click": function(e) {
              return t.closeUi()
            }
          }
        }, [i("purchase-panel", {
          ref: "purchasePanel",
          staticClass: "purchase-panel",
          attrs: {
            "manga-season": t.seasonData,
            "episode-id": t.episodeId,
            "episode-ord": t.episodeOrd,
            "short-title": t.episodeDetail.shortTitle
          },
          on: {
            "purchase-done": t.onPurchaseDone
          },
          model: {
            value: t.isShowPurchasePanel,
            callback: function(e) {
              t.isShowPurchasePanel = e
            },
            expression: "isShowPurchasePanel"
          }
        })], 1), i("div", {
          staticClass: "floating-buttons p-absolute info-layer"
        }, [i("div", {
          staticClass: "t-right"
        }, [i("floating-button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.question_icon.click",
            expression: "'777.17.question_icon.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              manga_id: t.seasonData.id + "",
              manga_num: t.episodeId + ""
            },
            expression: "{manga_id: seasonData.id + '', manga_num: episodeId + ''}"
          }],
          staticClass: "shortcuts-info",
          attrs: {
            round: "",
            title: "快捷键说明"
          },
          on: {
            click: t.openShortcutsInfo
          }
        }, [t._v("?")])], 1), i("transition", {
          attrs: {
            "enter-active-class": "a-scale-in-ease",
            "leave-active-class": "a-scale-out-ease"
          }
        }, [t.isInDoublePageMode ? i("hover-toast", {
          staticClass: "page-matching-button",
          attrs: {
            "external-control": !0,
            mode: "left"
          },
          model: {
            value: t.isShowPageMatchingHint,
            callback: function(e) {
              t.isShowPageMatchingHint = e
            },
            expression: "isShowPageMatchingHint"
          }
        }, [i("floating-button", {
          directives: [{
            name: "click-report",
            rawName: "v-click-report",
            value: "777.17.cross_page.click",
            expression: "'777.17.cross_page.click'"
          }, {
            name: "report-msg",
            rawName: "v-report-msg",
            value: {
              manga_id: t.seasonData.id + "",
              manga_num: t.episodeId + "",
              target_ways: t.isAddBlankPage ? "2" : "1"
            },
            expression: "{manga_id: seasonData.id + '', manga_num: episodeId + '', target_ways: isAddBlankPage ? '2': '1'}"
          }],
          staticStyle: {
            width: "130px"
          },
          attrs: {
            slot: "activator",
            title: "当您在并页模式阅读时，如果出现合并不正确的情况，请点击进行修正"
          },
          on: {
            click: t.doPageMatching
          },
          slot: "activator"
        }, [i("span", [t._v("更改跨页匹配")]), i("span", {
          staticStyle: {
            "margin-left": "5px",
            opacity: ".5"
          }
        }, [t._v("(C)")])]), i("div", [i("span", {
          staticClass: "dp-i-block v-middle"
        }, [t._v("如果跨页内容不匹配，可以尝试点击修正")]), i("button", {
          staticClass: "app-button dp-i-block v-middle",
          staticStyle: {
            padding: "0",
            margin: "0 0 0 10px"
          },
          on: {
            click: t.closePageMatchingHoverToast
          }
        }, [i("img", {
          staticClass: "v-middle",
          attrs: {
            src: a("ys8D"),
            width: "18",
            height: "18"
          }
        })])])], 1) : t._e()], 1), i("div", [i("floating-button", {
          staticClass: "ui-opener",
          on: {
            click: function(e) {
              return t.openUi(1)
            }
          }
        }, [i("img", {
          staticClass: "v-middle",
          attrs: {
            src: a("4ps3")
          }
        }), i("span", {
          staticClass: "v-middle",
          staticStyle: {
            "margin-left": "8px"
          }
        }, [t._v("显示工具栏")])])], 1)], 1), i("reader-ui", {
          ref: "readerUi",
          attrs: {
            value: t.isUiOpenOrAnyPanelShowing,
            "manga-season": t.seasonData,
            "current-episode-id": t.episodeId,
            "prev-episode": t.prevEpisodeData,
            "next-episode": t.nextEpisodeData,
            "page-index": t.pageIndex,
            "page-count": t.episodeReaderViews.length,
            "loading-episode-ids": t.loadingEpisodeIds,
            "failed-episode-ids": t.failedEpisodeIds,
            "zoom-factor": t.zoomFactor
          },
          on: {
            input: t.onUiDisplayStateChange,
            "episode-switch": t.onUiEpisodeSwitch,
            "page-switch": t.goTargetPage,
            "page-matching": t.doPageMatching,
            "open-comment": t.openEpisodeComment,
            "mouse-move-ui": t.onMouseMoveUi,
            "mouse-leave-ui": t.onMouseLeaveUi,
            "ui-any-click": t.onUiAnyClick,
            "zoom-step-in": t.onZoomIn,
            "zoom-step-out": t.onZoomOut,
            "zoom-reset": t.onZoomReset
          }
        }), i("episode-comment", {
          ref: "episodeComment",
          attrs: {
            "episode-id": t.episodeId
          },
          model: {
            value: t.isShowComment,
            callback: function(e) {
              t.isShowComment = e
            },
            expression: "isShowComment"
          }
        }), i("shortcuts-info", {
          model: {
            value: t.isShowShortcutsInfo,
            callback: function(e) {
              t.isShowShortcutsInfo = e
            },
            expression: "isShowShortcutsInfo"
          }
        })]], 2)
      }, [], !1, null, "1ea81b93", null).exports)
      , Mi = (a("hjyT"),
      Object(De.a)({}, function() {
        var e = this
          , t = e.$createElement
          , i = e._self._c || t;
        return i("jk-vertical-center", [i("div", {
          staticClass: "incorrect-url t-center"
        }, [i("p", [e._v("走错门了吧骚年 " + e._s(e.$emoji.angry()))]), i("p", [e._v("请注意 URL 的正确性喔 " + e._s(e.$emoji.helpless()))]), i("a", {
          attrs: {
            href: "/classify"
          }
        }, [i("manga-button", [e._v("返回")])], 1)])])
      }, [], !1, null, "6cb6ce87", null).exports)
      , li = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : x()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , di = function(e) {
      function t() {
        return j()(this, t),
          v()(this, z()(t).apply(this, arguments))
      }
      return L()(t, e),
        w()(t, [{
          key: "initReader",
          value: function() {
            this.mangaReader && this.mangaReader.init(this.seasonId, this.episodeId)
          }
        }, {
          key: "refresh",
          value: function() {
            window.location.reload()
          }
        }, {
          key: "mounted",
          value: function() {
            this.initReader()
          }
        }, {
          key: "seasonId",
          get: function() {
            try {
              return b.b.intFormat(window.location.href.match(/\/mc(\d+)/)[1], 0)
            } catch (e) {
              return k.a.error("未正确获取 SeasonId:", e),
                0
            }
          }
        }, {
          key: "episodeId",
          get: function() {
            try {
              return b.b.intFormat(window.location.href.match(/\/(\d+)/)[1], 0)
            } catch (e) {
              return k.a.error("未正确获取 SeasonId:", e),
                0
            }
          }
        }, {
          key: "mangaReader",
          get: function() {
            return this.$refs.mangaReader
          }
        }]),
        t
    }(y.default)
      , Ai = di = li([Object(n.b)({
      components: {
        MangaReader: ui,
        UrlIncorrect: Mi
      }
    })], di)
      , gi = Object(De.a)(Ai, function() {
      var e = this
        , t = e.$createElement
        , i = e._self._c || t;
      return i("div", {
        staticClass: "reader-layout w-100 h-100 p-absolute p-zero"
      }, [e.seasonId && e.episodeId ? [i("manga-reader", {
        ref: "mangaReader",
        staticClass: "w-100 h-100 p-absolute p-zero",
        on: {
          "re-init": e.refresh
        }
      })] : [i("url-incorrect")]], 2)
    }, [], !1, null, "1e9118ec", null).exports;
    y.default.use(s.a),
      y.default.use(i.FirebirdComponent),
      function() {
        try {
          HTMLCanvasElement.prototype.toDataURL = void 0,
            HTMLCanvasElement.prototype.toBlob = void 0
        } catch (e) {}
      }(),
      y.default.component("manga-button", d.a),
      y.default.component("manga-progress", A.a),
      Object(f.a)(y.default),
      u.a.switchTheme(r.a.Dark, !1),
      y.default.prototype.$emoji = D,
      y.default.prototype.$bfs = c.a,
      N.a.init(),
      new n.a({
        name: "manga-app",
        element: "#app-vm",
        RootComponent: M.a.checkIsOldBrowser() ? g.a : gi
      }).start(),
      Object(o.a)(p.a.getUserData()).subscribe(function(e) {
        var t = e.error
          , i = e.code
          , n = e.data;
        t || 0 !== i || l.a.next(function() {
          return n
        })
      })
  },
  OShF: function(e, t, i) {},
  OW6k: function(e, t, i) {
    "use strict";
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("a1gu")
      , c = i.n(r)
      , u = i("Nsbk")
      , M = i.n(u)
      , l = i("7W2i")
      , d = i.n(l)
      , A = i("cDf5")
      , g = i.n(A)
      , D = i("+B0l")
      , y = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , N = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : g()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , p = function(e) {
      function t() {
        return a()(this, t),
          c()(this, M()(t).apply(this, arguments))
      }
      return d()(t, e),
        s()(t, [{
          key: "onClick",
          value: function(e) {
            this.$emit("click", e)
          }
        }, {
          key: "buttonStyle",
          get: function() {
            var e = {};
            return "string" != typeof this.width && "number" != typeof this.width || (e.width = "number" == typeof this.width ? this.width + "px" : this.width,
              e.padding = "0"),
            "string" != typeof this.height && "number" != typeof this.height || (e.height = "number" == typeof this.height ? this.height + "px" : this.height,
              e.padding = "0"),
              e
          }
        }]),
        t
    }(i("oCYn").default);
    y([Object(D.d)({
      type: [Number, String]
    }), N("design:type", Object)], p.prototype, "width", void 0),
      y([Object(D.d)({
        type: [Number, String]
      }), N("design:type", Object)], p.prototype, "height", void 0),
      y([Object(D.d)({
        type: String
      }), N("design:type", String)], p.prototype, "type", void 0),
      y([Object(D.d)({
        type: String,
        default: "primary"
      }), N("design:type", String)], p.prototype, "theme", void 0),
      y([Object(D.d)({
        type: Boolean,
        default: !1
      }), N("design:type", Boolean)], p.prototype, "disabled", void 0);
    var f = p = y([D.b], p)
      , h = (i("aGao"),
      i("KHd+"))
      , j = Object(h.a)(f, function() {
      var e = this
        , t = e.$createElement;
      return (e._self._c || t)("button", {
        staticClass: "manga-button",
        class: e.theme,
        style: e.buttonStyle,
        attrs: {
          type: e.type,
          disabled: e.disabled
        },
        on: {
          click: e.onClick
        }
      }, [e._t("default")], 2)
    }, [], !1, null, "b8e7c12a", null);
    t.a = j.exports
  },
  OZ1m: function(e, t, i) {
    "use strict";
    var n = i("fp99");
    i.n(n).a
  },
  PzWz: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+6ZiF6K+75ZmoLeivhOiuui0wPC90aXRsZT48cGF0aCBkPSJNMTQuMDcsMTguNDVhLjY2LjY2LDAsMCwxLC40My0uMTVoNC45YTEuOSwxLjksMCwwLDAsMS45LTEuOVY1LjZhMS45LDEuOSwwLDAsMC0xLjktMS45SDQuNkExLjksMS45LDAsMCwwLDIuNyw1LjZWMTYuNGExLjksMS45LDAsMCwwLDEuOSwxLjlIMTBhLjcuNywwLDAsMSwuNy43djIuMDdaTTQuNiwxOS43YTMuMywzLjMsMCwwLDEtMy4zLTMuM1Y1LjZBMy4zLDMuMywwLDAsMSw0LjYsMi4zSDE5LjRhMy4zLDMuMywwLDAsMSwzLjMsMy4zVjE2LjRhMy4zLDMuMywwLDAsMS0zLjMsMy4zSDE0Ljc0bC00LjMxLDMuMzVBLjcuNywwLDAsMSw5LjMsMjIuNVYxOS43Wk04LDkuN0EuNy43LDAsMCwxLDgsOC4zaDhhLjcuNywwLDAsMSwwLDEuNFptMCw0LjVhLjcuNywwLDAsMSwwLTEuNGg1YS43LjcsMCwwLDEsMCwxLjRaIiBzdHlsZT0iZmlsbDojZmZmIi8+PC9zdmc+"
  },
  Q1DG: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij48dGl0bGU+5bey5LuY6LS5PC90aXRsZT48cGF0aCBkPSJNOC41LDdWNWEzLjUsMy41LDAsMCwxLDcsMFY2aC0yVjVhMS41LDEuNSwwLDAsMC0zLDBWN2guMjJhMS41NCwxLjU0LDAsMCwxLC43Ny4xMywxLDEsMCwwLDEsLjM4LjM4LDEuNTQsMS41NCwwLDAsMSwuMTMuNzd2My4xNkEyLjg1LDIuODUsMCwwLDEsMTEuNzMsMTNhMS44MSwxLjgxLDAsMCwxLS43NS43NUEyLjg1LDIuODUsMCwwLDEsOS40NCwxNEg0LjU2QTIuODUsMi44NSwwLDAsMSwzLDEzLjczLDEuODEsMS44MSwwLDAsMSwyLjI3LDEzLDIuODUsMi44NSwwLDAsMSwyLDExLjQ0VjguMjhhMS41NCwxLjU0LDAsMCwxLC4xMy0uNzcsMSwxLDAsMCwxLC4zOC0uMzhBMS41NCwxLjU0LDAsMCwxLDMuMjgsN1oiIHN0eWxlPSJmaWxsOiNkYmRiZGI7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4K"
  },
  QNd3: function(e, t, i) {
    "use strict";
    var n = i("q7j2");
    i.n(n).a
  },
  QPWy: function(e, t, i) {
    "use strict";
    var n = i("EKx8");
    i.n(n).a
  },
  QT1a: function(e, t, i) {
    "use strict";
    var n = i("HcuV");
    i.n(n).a
  },
  RBbJ: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "filterHTML",
        value: function(e) {
          var t = document.createElement("div");
          return t.innerHTML = e,
            t.textContent
        }
      }]),
        e
    }()
  },
  "S8+f": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuNzAxMTcyNSwyOS4yOTU0OTM0IEwxMy4zMTUxNzY0LDI5LjY4ODAyMDMgQzEwLjE0NDA1MzIsMjkuMDM4MTY4NyA3LjQ5ODAxNzksMjcuNDg3OTczMyA1LjI1NzI0NjMxLDI1LjMwOTk4NTggQzIuOTc4NTkzODUsMjMuMDk1MTMwMSAxLjgxMDY0NDU3LDIwLjM2NjQ4OTQgMS4zNzMwOTU3MiwxNy4yOTI3NTk3IEwxLjA2OTE2OTkzLDE4LjE3NDUwMjEgQzEuMDc0MDYyNSwxNi43NTEwMDI5IDEuMDMzNjkxNDEsMTUuMzI5MDM3NiAxLjM1ODkxNjAzLDEzLjkxMTg2OSBDMS4yMzkyNjc1OSwxNC4wODM2MDQ4IDEuMTE5NjQ4NDQsMTQuMjU1NDUyMSAxLDE0LjQyNzI0MzYgQzEuNTI1MDg3OTIsMTIuMzg0OTg4MiAyLjAzNTE0NjU0LDEwLjM0Mzk1OTkgMy43MDQyMTg4OSw4LjgwMDQwMTg0IEM1LjAyNzgyMjQ3LDcuNTc2MzMxNDQgNi41ODM0NTczMSw3LjAyODQzOTE4IDguNDIzNDc2OTMsNy4yNDMwNjcwNCBDOC41MjUxMzcxLDcuMjU0OTE5NTQgOC42MjU1MDgxOSw3LjI3ODUxMjk4IDguNzI1NTU3MDMsNy4zMDA1MTY4IEM4Ljc3NDEzMTI1LDcuMzExMTcwMTEgOC44MjA1Mzc1LDcuMzMwNzc1NTQgOC44Nzc0NjEzMyw3LjM0OTQ2MDY1IEw4LjY1MDU4NjMyLDguNjE2MTQ0MjcgQzkuODE0MTcwMzYsNi45NjY2Mzg4NSAxMS4xMzk5NDE5LDUuNzI5MTgyMSAxMy4zNTU5NTc2LDUuODU3ODAyNjQgQzEzLjI5MDE4NjIsNS45MjQ1NjcwOCAxMy4yMjY2MTE5LDUuOTkzMzY3MzUgMTMuMTU4MzIwOSw2LjA1NzY0OTczIEMxMi4xODYzMDkyLDYuOTcyOTEzNzEgMTEuNDkyOTEwNyw4LjAzMjQ3MTQxIDExLjE5MTU2Myw5LjMyMTY4ODcyIEMxMC44NjU3ODE3LDEwLjcxNTQ1OSAxMS4yNDE0ODQ5LDExLjkzMjM5IDEyLjEwNTcxMzQsMTMuMDU0OTE5NCBDMTIuNTUwNjc0NCwxMy42MzI5NTg4IDEyLjM5NzgwMzMsMTQuMjY5ODcwMyAxMi4zMTg4MTg5LDE0Ljg5NTY4MjMgQzEyLjI4NjQ1MDEsMTQuOTExOTQxNSAxMi4yNTQwOTY2LDE0LjkyODIyODIgMTIuMjIxNzU4NCwxNC45NDQ1NDI1IEMxMi4xMzI0OTA4LDE0LjgzOTU0MzMgMTIuMDU0MTgwMiwxNC43MjM1ODQgMTEuOTUyMzQ0MywxNC42MzExMDY2IEMxMC4zNzEwNDU0LDEzLjE5NDU4MzcgOC4wMzc4MTI4NSwxMy42MjAxODYgNy4xNDk5MTI0MiwxNS41Mjg5OTYyIEM2LjQ1Mzk5NDQxLDE3LjAyNTExNjQgNi44MTI4ODExNSwxOC4zOTY4MjcxIDcuODA2MzM4MjMsMTkuNjYyMjgzNiBDNy45Mjg5NDU2NiwxOS44MTg1MTM1IDguMDcyNTAwMzUsMTkuOTU5NzM5NSA4LjI1NjgzNjMsMjAuMDc1MTQxIEM4LjIwMzk1NTQ0LDIwLjAwOTIxMzIgOC4xNTE0MjYxNCwxOS45NDI5Nzg3IDguMDk4MTM1MTIsMTkuODc3MzI5OCBDNy4yMTk2Mzg5OCwxOC43OTUzNDk5IDYuODE2MjUwMjksMTcuNjAxNzA1NiA3LjIxNzY0NjgsMTYuMjQ2MjI1OCBDNy41NTQxODAwMiwxNS4xMDk2OTY2IDguNjY5ODYzNjcsMTQuMjQ3Njk5MiA5Ljc1NTAxOTk3LDE0LjI0MTE3MzMgQzEwLjIwMjkxMDYsMTQuMjM4NDEyNCAxMC41NzkyODc2LDE0LjM1MjAyOTEgMTAuOTUzOTk0NiwxNC41OTgwODcgQzEwLjAxNDgyNDcsMTUuNjE4NjAxMSA5Ljk1MzU2NDksMTYuODUyOTkwMiAxMC4wNzg4MDksMTguMDk4MzM5MyBDMTAuMjAxMjcsMTkuMzE1NTIxMyAxMC44MzEyNywyMC4yOTg4NjA0IDExLjg2NDgwNTIsMjEuMDM3NjQ3NyBDMTEuOTQ2OTI0NCwyMS4wOTYzNTI0IDEyLjA0NzA2MTEsMjEuMTQ0MDEzNCAxMi4xMDQ0NTM3LDIxLjIyMDMxNTYgQzEyLjQ3MTU0MzUsMjEuNzA3ODAyIDEzLjAwNzk0MDEsMjEuODU1NDE0NCAxMy41OTI1MDA2LDIxLjk1NTAzMTIgQzE0LjEyNjQwNjksMjIuMDQ2MDMwNSAxNC42NDkzNTYyLDIyLjE5NjE4MDcgMTUuMTc1NDY5NSwyMi4zMjY1MzAzIEMxNS4yNTA0MTA5LDIyLjM0NTEzMTggMTUuMzE1NzQyOSwyMi4zOTg3ODg3IDE1LjQ1MDY1NSwyMi40NzExNTg3IEwxNC40NjMxNzQ1LDIyLjQ3MTE1ODcgQzE0Ljc0MzM0MDUsMjIuNzg2MDE2OSAxNS4xMTE3NDg4LDIyLjkxMDkwMDQgMTUuNDk1NTY3MSwyMy4wMDU1MjUyIEMxNi4zODExNTMxLDIzLjIyMzg5MDEgMTcuMjU0OTYxOCwyMy4wNzc0NDg5IDE4LjEyNDk5MTEsMjIuOTE0Nzc2OSBDMTguNjQ0NTQxOSwyMi44MTc2MTQzIDE5LjE1ODIzMzMsMjIuNjkyMTczIDE5LjcwODA0NzgsMjIuNTcyMDU4MyBMMTkuNTg3ODcyLDIyLjk2NDkxOTkgQzIwLjAwODI4MjIsMjIuNzY0MzE5OCAyMC4zMjk5NjE5LDIyLjUxNzc4NzggMjAuNTg4NDE4OSwyMi4xODc5NTM3IEMyMC43MDQ1ODExLDIyLjAzOTcyNzcgMjAuODI0NDYzOSwyMS44ODg4ODAzIDIwLjk2OTUxMjcsMjEuNzY4NDg2OCBDMjEuMDU2ODc2LDIxLjY5NjAwNTIgMjEuMTk1OTQ4MywyMS42Nzk4MDIyIDIxLjMxMjMxNTUsMjEuNjM4MTY1IEMyMS4zNDA1ODcsMjEuODA1NDY2NiAyMS4zNTk4MDU3LDIxLjkxOTI1MDYgMjEuMzc4OTY1OSwyMi4wMzMwMzQ1IEMyMS41MDk1NDIsMjEuOTg5NjEyNiAyMS42NTkxNjEyLDIxLjk3MTgxOTkgMjEuNzY3NTU5NiwyMS44OTg1ODU0IEMyMi41Mjk1NzE0LDIxLjM4NDAxOTUgMjIuOTg4NDE5MSwyMC42NTI4NDU4IDIzLjI2NTI0NTMsMTkuODI5NTg1MSBDMjMuNTM2NDc1NywxOS4wMjI4MzQzIDIzLjczMzQwOTMsMTguMTkzNDY2MSAyMy45NzczNjQ0LDE3LjMyMjU0NDQgQzI0LjA5NDA4MzIsMTcuNTM4Mzk5MyAyNC4yMTIxNDk2LDE3Ljc1Njc2NDIgMjQuMzYxMywxOC4wMzI4MDE5IEMyNC40NzczNDQ5LDE3LjQwOTgwNjcgMjQuNjY0MjI5NywxNi44MTg3OTkyIDI0LjY3OTYxMDYsMTYuMjIzNjM2NCBDMjQuNzAxMzQ4OCwxNS4zODY4MjIgMjQuNjAwNjU1NSwxNC41NDY3NzI2IDI0LjU0MjI2NjgsMTMuNzA4NjQ3NSBDMjQuNTE2NTE0OCwxMy4zMzkwNDQ3IDI0LjQ2NjIxMjEsMTIuOTcxMDAzNyAyNC40MjAxNTc0LDEyLjUzODA5NDYgQzI0Ljk5ODE1NTUsMTIuODUwMDgwMyAyNS4zNTc4MzMzLDEzLjI3MTQ5OTQgMjUuNjczMDA5LDEzLjc1OTg3ODIgQzI1LjY4ODg1ODcsMTIuNDk0ODk1NyAyNS42NzkzNjY1LDExLjIxNjA4MDcgMjUuMTI3MjM3NSwxMC4wNDU3Nzg4IEMyNC41NzkwMDUxLDguODgzNDUzIDIzLjgyNTE5NjUsNy44MjY3MTIwMSAyMi43Nzk0NzM3LDYuOTg2OTY5MzggQzIzLjMxMzE3NDksNi44NzcxNDU1MSAyMy45NzI0MTMzLDcuMTU3NzI5MDQgMjUuMzA1NjU1NSw4LjAzNTkwMTY2IEMyNC44MTMzMjE1LDcuMjEyNDQ1NzYgMjQuMTk3NDEzMyw2LjQ3MzI2ODA5IDIzLjQ2NTI4NDMsNS44MzY5NDIyNCBDMjIuNzQyMDYxNiw1LjIwODM2OTMyIDIxLjk2MjczNTQsNC42MzgzODk1OCAyMS4yMDc1NDk4LDQgQzIyLjAyMzExNjMsNC4zMDk5NDk4NCAyMi44NDY2MjIyLDQuNjAyNTI1MzEgMjMuNjUxNzg4Miw0LjkzNTI4NzczIEMyNC4zMTczMjU0LDUuMjEwMzc3MjcgMjQuODkwNDMwOSw1LjYyNDIzODY4IDI1LjQxNDgxNTcsNi4xMDU2MTc1IEMyNi4zODMwNDgxLDYuOTk0Mzg3NjUgMjcuMzg2MTczMiw3Ljg1MDcyMzc4IDI4LjE2ODY2MzUsOC45MTQ1NzYyNyBDMjguMTI1MTI4Myw4LjgzMjk3NTMgMjguMDg1NTc3NSw4Ljc0OTI1NDgyIDI4LjAzNzQxMzUsOC42NzAxNjM3OCBDMjcuMzgxMzY4NSw3LjU5MjE3MTk2IDI2LjUzOTAyNDcsNi42NTU1MTc3MSAyNS41ODM1MDcxLDUuODEzODIyOSBDMjUuMzE0MTgwOSw1LjU3NjU0OTggMjUuMjIxMjUxMiw1LjMzODA3NzUgMjUuMzEyODA0LDQuOTUzNzc3NjMgQzI1Ljk4MDU2NzcsNS40MjI3MTgyOSAyNi42MzQzNTY4LDUuODYyNTQzNjQgMjcuMTQ2NDk1NCw2LjUwNjQ1NTA5IEwyNy4yNDA1Njc3LDYuMjUyNTg4NDkgQzI5LjU4MTAwNzMsOC4yMDQ2MjU0OCAzMC4yOTcxMTA4LDEwLjY4NTQ1MTMgMjkuOTk3MDUyMiwxMy41MjM5NDM3IEMzMC4wMjk5NTI2LDEzLjUzMDYwOSAzMC4wNjI5MTE2LDEzLjUzNzIxODUgMzAuMDk1NzUzNCwxMy41NDM4MjggQzMwLjI1MTY3MTQsMTMuMjE0Nzc0NyAzMC40MDc2MTg3LDEyLjg4NTcyMTUgMzAuNTkwNzUzNCwxMi40OTg5Njc0IEMzMC43MDEyMzIsMTMuMDcyNDYxMSAzMC44MjcwMDM0LDEzLjYwNTc2NzggMzAuOTAzNDA5NywxNC4xNDUyOTM2IEMzMS4xMDIwMTMyLDE1LjU0NzU0MTkgMzEuMDMwMDg5NCwxNi45MTg2NjcgMzAuMzQ3Nzk0NCwxOC4yMTc4MTI1IEMzMC4wOTUyODQ3LDE4LjY5ODU0OTkgMjkuODk1MjQ1NiwxOS4yMDQxMDc4IDI5LjY1Nzk0MDksMTkuNjkyNDg2NiBDMjkuNTM3NDQyOCwxOS45NDA1ODAzIDI5LjQ5NjkyNTMsMjAuMTcxNzQ1OSAyOS41NjkzMTc4LDIwLjQ1MTEwMjMgQzI5Ljc4ODA3NzYsMjEuMjk0NjY1NiAyOS42NjU5NjgyLDIyLjEwMjAzIDI5LjE5NDc1NzMsMjIuODU2MSBDMjguMjc1MzkyLDI0LjMyNzMxNiAyNy4wNjYzMDk5LDI1LjUxMjYyMTcgMjUuNDYxODY2NSwyNi4zMTQ3MTUyIEMyNS4zNTAyNzQ3LDI2LjM3MDQ5MTcgMjUuMjYzMjA0MywyNi40NzUyMTIgMjUuMTczODc4MiwyNi41NjU0MzA1IEMyNS4xMTgyMTQxLDI2LjYyMTc5MjYgMjUuMDc2NTUzOSwyNi42OTE3MDg0IDI1LjAzNDI0OTMsMjYuNzU4ODkxMSBDMjQuMjQzNTg1MSwyOC4wMTU1MzUgMjMuMDA3OTAxNSwyOC42MTUzODMgMjEuNTYzMDk2NywyOC45NDYzODg1IEMxOS45MDY1NjM0LDI5LjMyNTg2MzcgMTguMjQxNTYzNCwyOS42MTAxODQzIDE2LjUzMDc0MywyOS41ODcxNDg2IEMxNi40ODI1MjAzLDI5LjU4NjUzNSAxNi40MzQxNTEyLDI5LjU5MzE0NDUgMTYuMzEwNjA2MiwyOS42MDEzNDM3IEMxNi40Nzk1MzIsMjkuNzQ4MzQyNiAxNi42MDEyMzEyLDI5Ljg1NDE3ODQgMTYuNzY2OTkzLDI5Ljk5ODMzMjcgQzE1LjMyNTQxMDksMzAuMDI3MzkyMiAxNC4wMjI3ODM5LDI5LjY3MjkwNDkgMTIuNzM5MDgyNiwyOS4yMjMxNzkyIEwxMi43MDExNzI1LDI5LjI5NTQ5MzQgWiBNMTAuMDI4MjYxMSwxNiBDMTAuODgwNzU3MiwxNi43NDI3MjI3IDExLjc4NzExNjYsMTcuMjI4OTcxMiAxMi44ODQ2MzM1LDE3LjI4OTQxNDcgQzEzLjQxOTk3NDksMTcuMzE4OTU0MyAxMy45MDQ3NDQ1LDE3LjE3OTI3NDUgMTQuMzY2MDU1MywxNi45MDUzNDM4IEMxNS4zNTc3OTgyLDE2LjMxNjYxMTQgMTYuMzYzODc4NiwxNi4zNzkyMjY1IDE3LjM1OTMwMzUsMTYuODk5ODU5MSBDMTcuNjg0OTkzNywxNy4wNzAyMjAxIDE3LjkwMzk4OTQsMTcuMzQ1NDg3MSAxNy45ODMyNjQyLDE3LjcxMjAxOCBDMTguMDU3NDA2NCwxOC4wNTUxMzQzIDE3Ljg4MTA2MDYsMTguMjY4MDM2OSAxNy41MzY0NTgyLDE4LjIwMDI5ODkgQzE3LjA4MTcwMjUsMTguMTEwOTg0IDE2LjcyMzQ4NzksMTguMjMxODQzMSAxNi4zNzUxNDc4LDE4LjUyNjQwNDIgQzE2LjA1NTM5OSwxOC43OTY4ODI2IDE1LjY4NDkzODksMTkuMDA2NjExMiAxNS4zNDQzODEyLDE5LjI1MzYxOTMgQzE0LjQ1NDQ1MTQsMTkuODk5MTc1OCAxMy40MzMzOTE5LDE5Ljk4OTM1MzkgMTIuMzc5Mzg5NiwxOS45OTk5MDU3IEMxMS45ODgwMzcsMjAuMDAzODAzNSAxMS42OTIzMzI4LDE5Ljg4Njg3IDExLjM5OTY0MTEsMTkuNjQ2NzM4NyBDMTAuMjQ5MDk3OCwxOC43MDI0NzI3IDkuODg5NDA0NzksMTcuNDcxMzU3NyAxMC4wMjgyNjExLDE2IFogTTUuNDA1NTQ0NTMsNiBMNSw1LjY3MDA3ODQzIEM5LjE1ODY2NjQ1LDEuNzg1MTY4OTYgMTcuMDM5Mzk2NCwwLjU3ODI2ODQwMSAyMyw0LjA0NDQ0OTI0IEMyMi43ODk0MTI3LDMuOTcwNTcwNDEgMjIuNTg0NDA5NywzLjg4MDY4MTI0IDIyLjM2NzMxNzEsMy44MjU5MTE1NSBDMjEuNzU4MTIyNCwzLjY3MjIyNjg4IDIxLjE0MjM5MzYsMy41MzczODA4MSAyMC41MzE5NjEyLDMuMzg3MDE2MjYgQzE5Ljc5NTcxMTgsMy4yMDU2MzkzMyAxOS4wNzI5MDQ3LDIuOTczNTk5ODIgMTguMzI1Nzc0NywyLjgzNjcxMjUgQzEzLjQ5ODk2MywxLjk1MjE4MzMgOS4yNjE4MDEyNCwyLjkzMzkzMDUzIDUuNjM5NTMzNTYsNS44MTMxMzg3MiBDNS41NzMxMjc3Nyw1Ljg2NTk2NTUyIDUuNTA2OTIzNDcsNS45MTkwMzgyNiA1LjQwNTU0NDUzLDYgWiBNMTEuOTgxNDEwMiwxMyBDMTEuMTQ1NzUzNywxMS44NTk3MjAzIDEwLjc1MjUxNzksMTAuNTYwODc2MiAxMS4xNjUxNzM1LDkgQzExLjYzMDg1NTYsOS41NTEyODkzMSAxMi4yMjMyNTAzLDkuNTE1NTYwNTkgMTIuODA0OTY3MSw5LjUzMzkyNjEyIEMxMy4zNzY3NjIzLDkuNTUyMDAwNjUgMTMuOTUwMjgxNyw5LjU1OTcyODQgMTQuNTE5MDgyMyw5LjYxNjc2NTAxIEMxNC45MjY2MjU5LDkuNjU3NjY3MTIgMTUuMDI3OTU5Nyw5LjgxNTg0MzUgMTQuOTkzODY5MiwxMC4yNTQ2NzYzIEMxNC45NDUxNjg1LDEwLjg4MjE3NjEgMTQuNzQ3MjgwMSwxMS4zOTQ0Mzg2IDE0LjE2MDc1MzYsMTEuNzA0MjI3NiBDMTMuNDIzNjQ4MSwxMi4wOTM1MjUyIDEyLjcyMDUxMjEsMTIuNTU2MjIwMiAxMS45ODE0MTAyLDEzIEwxMS45ODE0MTAyLDEzIFogTTIsOSBDMi4wOTkxNDM4Myw3LjU1MDY0MDkzIDIuNDMzMjUzNzksNi4xODA3ODQxMiAzLjcwOTk0MjY2LDUgQzMuNzk1ODE5ODEsNS45MTA0ODIxIDQuMTk2MTI3NDQsNi42MjU0NjQ1MSA1LDcuMjAzNjk2MjMgQzMuODA1NzYxMzQsNy42MTM0NjY5NyAyLjg2NDAzMDY3LDguMjUyMzE2MzQgMiw5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="
  },
  SOox: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return h
    });
    var n = i("o0o1")
      , c = i.n(n)
      , a = i("yXPU")
      , o = i.n(a)
      , s = i("lwsE")
      , r = i.n(s)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("cDf5")
      , d = i.n(l)
      , A = i("1aRO")
      , g = i("ZxM/")
      , D = i("uS9E")
      , y = i("91CG")
      , N = i("yH7B")
      , p = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , f = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , h = function() {
      function e() {
        r()(this, e)
      }
      var t, i, n;
      return M()(e, null, [{
        key: "getEpisodePurchaseInfo",
        value: function(e) {
          return y.a.post({
            url: "/twirp/comic.v1.Comic/GetEpisodeBuyInfo",
            data: {
              ep_id: e
            },
            type: D.c
          })
        }
      }, {
        key: "purchaseEpisode",
        value: (n = o()(c.a.mark(function e(t) {
            var i, n, a, o, s, r;
            return c.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = {
                      buy_method: t.purchaseMethod
                    },
                      t.episodeId ? i.ep_id = t.episodeId : i.comic_id = t.seasonId,
                    t.couponId && (i.coupon_id = t.couponId),
                    t.payGoldAmount && (i.pay_amount = t.payGoldAmount),
                    t.autoPurchaseCouponsStatus && (i.auto_pay_coupons_status = t.autoPurchaseCouponsStatus),
                    t.autoPayGoldStatus && (i.auto_pay_gold_status = t.autoPayGoldStatus),
                    t.withOrdScope && (i.with_ord_scope = !0,
                      i.start_ord = t.startOrd,
                      i.limit = t.limit),
                      n = {
                        data: null,
                        error: null,
                        code: N.c.Success
                      },
                      e.next = 10,
                      y.a.post({
                        data: i,
                        url: "/twirp/comic.v1.Comic/BuyEpisode",
                        type: j
                      });
                  case 10:
                    if (a = e.sent,
                      o = a.code,
                      s = a.error,
                      r = a.data,
                      s)
                      return n.error = s,
                        e.abrupt("return", n);
                    e.next = 17;
                    break;
                  case 17:
                    n.data = r,
                      e.t0 = o,
                      e.next = 1 === e.t0 ? 21 : 2 === e.t0 ? 23 : 3 === e.t0 ? 25 : 4 === e.t0 ? 27 : 5 === e.t0 ? 29 : 31;
                    break;
                  case 21:
                    return n.code = N.c.NoEnoughCoupon,
                      e.abrupt("break", 33);
                  case 23:
                    return n.code = N.c.NoEnoughGold,
                      e.abrupt("break", 33);
                  case 25:
                    return n.code = N.c.AutoPurchaseSettingHasBeenChanged,
                      e.abrupt("break", 33);
                  case 27:
                    return n.code = N.c.PayAmountMayChanged,
                      e.abrupt("break", 33);
                  case 29:
                    return n.code = N.c.CanNotPurchaseViaCoupon,
                      e.abrupt("break", 33);
                  case 31:
                    return n.code = N.c.Success,
                      e.abrupt("break", 33);
                  case 33:
                    return e.abrupt("return", n);
                  case 34:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e) {
              return n.apply(this, arguments)
            }
        )
      }, {
        key: "rentEpisode",
        value: function(e, t) {
          return y.a.post({
            data: {
              ep_id: e,
              item_id: t
            },
            url: "/twirp/comic.v1.Comic/RentEpisode"
          })
        }
      }, {
        key: "getPurchasedManga",
        value: (i = o()(c.a.mark(function e(t) {
            return c.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", y.a.post({
                      url: "twirp/user.v1.User/GetAutoBuyComics",
                      data: {
                        pay_type: t.payType || 100,
                        page_num: t.pageNum || 1,
                        page_size: t.loadCount || 15
                      },
                      type: D.a
                    }));
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e) {
              return i.apply(this, arguments)
            }
        )
      }, {
        key: "setAutoPurchaseType",
        value: (t = o()(c.a.mark(function e(t) {
            return c.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", y.a.post({
                      url: "/twirp/user.v1.User/UpdateAutoBuyComic",
                      data: {
                        id: t.id,
                        gold_status: t.goldStatus,
                        coupon_status: t.couponStatus
                      }
                    }));
                  case 1:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }();
    p([Object(g.a)({
      isShowQuickLoginPanel: !1
    }), f("design:type", Function), f("design:paramtypes", [Object]), f("design:returntype", Promise)], h, "purchaseEpisode", null),
      p([Object(g.a)({
        isShowQuickLoginPanel: !1
      }), f("design:type", Function), f("design:paramtypes", [Number, Number]), f("design:returntype", Promise)], h, "rentEpisode", null);
    var j = function e() {
      r()(this, e),
        this.autoUseItem = ""
    };
    p([Object(A.a)("auto_use_item"), f("design:type", String)], j.prototype, "autoUseItem", void 0),
      j = p([Object(A.b)()], j)
  },
  SX9C: function(e, t, i) {},
  SbUT: function(e, t, i) {},
  SiI8: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return l
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("Blr9")
      , c = i("ZojZ")
      , u = new r.a
      , M = new r.a({
      webp: !1
    })
      , l = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "bfsLink",
        value: function(t, e, i) {
          try {
            return t = this.bfsHttps(t),
              u.getImageLink(t, e, i)
          } catch (e) {
            return c.a.error("[BfsService.bfsLink] ".concat(t, " 解析错误:"), e),
              t
          }
        }
      }, {
        key: "bfsLinkWithoutWebp",
        value: function(t, e, i) {
          try {
            return M.getImageLink(t, e, i)
          } catch (e) {
            return c.a.error("[BfsService.bfsLinkWithoutWebp] ".concat(t, " 解析错误:"), e),
              t
          }
        }
      }, {
        key: "bfsHttps",
        value: function(e) {
          return e.replace("http://", "//")
        }
      }]),
        e
    }()
  },
  Svax: function(e, t, i) {},
  T2P2: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+5oiR55qELeW3sui/vTwvdGl0bGU+PHBhdGggZD0iTTEyLDE4LjQ4LDYuNDMsMjEuMjJhLjcuNywwLDAsMS0xLS43M2wuODgtNi4xNEwyLDkuOWEuNy43LDAsMCwxLC4zOC0xLjE4TDguNDksNy42NmwyLjg5LTUuNDlhLjcxLjcxLDAsMCwxLDEuMjQsMGwyLjg5LDUuNDksNi4xMiwxLjA2QS43LjcsMCwwLDEsMjIsOS45bC00LjMyLDQuNDUuODgsNi4xNGEuNy43LDAsMCwxLTEsLjczWiIgc3R5bGU9ImZpbGw6I2ZmYTAxNTtmaWxsLXJ1bGU6ZXZlbm9kZCIvPjwvc3ZnPg=="
  },
  TRC1: function(e, t, i) {
    "use strict";
    var n, a;
    i.d(t, "a", function() {
      return n
    }),
      (a = n || (n = {}))[a.FavouriteDesc = 1] = "FavouriteDesc",
      a[a.UpdateDesc = 2] = "UpdateDesc",
      a[a.RecentReadDesc = 3] = "RecentReadDesc"
  },
  TXC7: function(e, t, i) {
    "use strict";
    var n = i("2jGf");
    i.n(n).a
  },
  U4U7: function(e, t, i) {},
  Ubnt: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return l
    }),
      i.d(t, "b", function() {
        return a
      });
    function n() {
      u()(this, n),
        this.inLoading = !1,
        this.isLoaded = !1,
        this.isLoadingFailed = !1,
        this.isAbortByUser = !1,
        this.progress = 0
    }
    var a, o, s = i("W8MJ"), r = i.n(s), c = i("lwsE"), u = i.n(c), M = i("oCYn"), l = function() {
      function i(e, t) {
        u()(this, i),
          this._element = null,
          this._type = null,
          this._vm = M.default.observable(new n),
          this._element = e,
          this._type = t
      }
      return r()(i, [{
        key: "getRect",
        value: function() {
          try {
            return this._element.getBoundingClientRect()
          } catch (e) {
            return console.warn('[Bilibili Manga] Use getBoundingClientRect to a "detached" element in IE will throw the "-2147467259" exception.\nSo I think you are viewing this page by IE, and I have helped you to caught this error.\nIE is an outdated browser so just replace it - Microsoft Edge insider is good for an example.\n', e),
              {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
              }
          }
        }
      }, {
        key: "resetVM",
        value: function() {
          this._vm.inLoading = !1,
            this._vm.isLoaded = !1,
            this._vm.isLoadingFailed = !1,
            this._vm.isAbortByUser = !1,
            this._vm.progress = 0
        }
      }, {
        key: "element",
        get: function() {
          return this._element
        }
      }, {
        key: "type",
        get: function() {
          return this._type
        }
      }, {
        key: "vm",
        get: function() {
          return this._vm
        }
      }, {
        key: "rect",
        get: function() {
          return this.getRect()
        }
      }, {
        key: "heightWidthRatio",
        get: function() {
          return this.getRect().height / this.rect.width
        }
      }, {
        key: "isBringIntoView",
        get: function() {
          var e = window.innerWidth || document.documentElement.clientWidth
            , t = window.innerHeight || document.documentElement.clientHeight
            , i = this.rect
            , n = i.width
            , a = i.height
            , o = i.left
            , s = i.top;
          return o < e && 0 < o + n && s < t * (2 / 3) && 0 < s + a
        }
      }]),
        i
    }();
    (o = a || (a = {}))[o.ReaderImage = 0] = "ReaderImage",
      o[o.BlankImage = 1] = "BlankImage",
      o[o.PurchaseHinter = 2] = "PurchaseHinter"
  },
  VCHA: function(e, t) {
    e.exports = "data:image/png;base64,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"
  },
  VGwN: function(e, t, i) {
    "use strict";
    var n = i("eG9a");
    i.n(n).a
  },
  "W+cc": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNCwxNC41NDY4NTExIEw0LjAxNDYyNTcyLDE0LjU0Njg1MTEgQzQuMTY5NTUwMDYsMTMuMzI2ODU1NiA0LjQ1MjU4NDg5LDEyLjE1NzU1NzYgNC44NjM3MzAyNCwxMS4wMzg5NTczIEM1LjI3NDg3NTU4LDkuOTIwMzU2OTMgNS44MzExOTQ3Nyw4Ljg2OTgwNTIyIDYuNTMyNjg3ODIsNy44ODczMDIxNCBDNy4yMzQxODA4Niw2LjkwNDc5OTA2IDguMDQ0MjgzNDQsNi4wNTI2OTk5NiA4Ljk2Mjk5NTU2LDUuMzMxMDA0ODEgQzkuODgxNzA3NjksNC42MDkzMDk2NyAxMC45NjI2NTcsNC4wNDA1MjA2NCAxMi4yMDU4NDM1LDMuNjI0NjM3NzIgQzEzLjQ0OTAzLDMuMjA4NzU0NzkgMTQuNzg2NDcxMiwzLjAwMDU0MjIyIDE2LjIxODE2NywzIEMxOC40NTI2NTI2LDMgMjAuNDU1MDIyNSwzLjUxMDc3MTQ3IDIyLjIyNTI3NjgsNC41MzIzMTQ0IEMyMy45OTU1MzEsNS41NTM4NTczMyAyNS40MTc0NzY0LDcuMDIzMjc0MTkgMjYuNDkxMTEyOCw4Ljk0MDU2NDk2IEMyNy40OTcwMzc2LDEwLjc1MTAzODMgMjgsMTIuODkwOTEwNSAyOCwxNS4zNjAxODE1IEwyOCwxOC4wOTA1MzE1IEwxMS42NzY4Nzk4LDE4LjA5MDUzMTUgQzExLjY4NjYzMDMsMTkuMTY1MjEyIDExLjk0NTI4OSwyMC4wOTcyODg2IDEyLjQ1Mjg1NTcsMjAuODg2NzYxMyBDMTIuOTYwNDIyNSwyMS42NzYyMzQgMTMuNjIwNzQ2OSwyMi4yNjk0MjI5IDE0LjQzMzgyODgsMjIuNjY2MzI4MSBDMTUuMjQ2OTEwNywyMy4wNjMyMzMzIDE2LjE2MzQ1NiwyMy4zMzkyMjM0IDE3LjE4MzQ2NDgsMjMuNDk0Mjk4NCBDMTguMjAzNDczNiwyMy42NDkzNzM0IDE5LjIzMzc3NDYsMjMuNjY0MDEzNCAyMC4yNzQzNjc3LDIzLjUzODIxODMgQzIxLjMxNDk2MDksMjMuNDEyNDIzMiAyMi4zMjA4ODU3LDIzLjE4NzQwMTggMjMuMjkyMTQyMSwyMi44NjMxNTQxIEMyNC4yNjMzOTg0LDIyLjUzODkwNjQgMjUuMTAyNDgxNiwyMi4xMjk4MDEyIDI1LjgwOTM5MTYsMjEuNjM1ODM4NiBMMjUuODA5MzkxNiwyNy4xMTExNzg2IEMyNC45MTkzODkyLDI3LjY0MzYzODggMjMuODA5NDU5MywyOC4wODkwNzI4IDIyLjQ3OTYwMTksMjguNDQ3NDgwMyBDMjEuMTQ5NzQ0NCwyOC44MDU4ODc5IDE5LjYzODQxOTYsMjguOTg5OTcxNyAxNy45NDU2Mjc1LDI4Ljk5OTczMTcgQzE2LjI1MjgzNTQsMjkuMDA5NDkxNiAxNC43MjQ0NDczLDI4Ljc1MzAyMTQgMTMuMzYwNDYzMSwyOC4yMzAzMjExIEMxMS41MzIyNDc3LDI3LjUyMzI2NTkgMTAuMDI1NTI3MywyNi4zMTc5MTAzIDguODQwMzAxOTksMjQuNjE0MjU0MyBDNy42NTUwNzY2OCwyMi45MTA1OTgzIDcuMDUyOTg0MzksMjEuMTA5NjEzOCA3LjAzNDAyNTEyLDE5LjIxMTMwMDggQzcuMDA0NzczNjcsMTYuODY4MzY3MSA3LjU0MTU5MTksMTQuODczODA5OSA4LjY0NDQ3OTgsMTMuMjI3NjI5MyBDOS43NDczNjc3MSwxMS41ODE0NDg2IDExLjMxOTM2MjIsMTAuMjgzOTE1NiAxMy4zNjA0NjMxLDkuMzM1MDMwMTggQzEyLjg5NjIzMTgsOS45MTU3NDgwNiAxMi41MTg5NDIzLDEwLjUyMzMwNTggMTIuMjI4NTk0NiwxMS4xNTc3MDM1IEMxMS45MzgyNDY5LDExLjc5MjEwMTIgMTEuNzE1ODgxOCwxMi41NjQyMjI4IDExLjU2MTQ5OTEsMTMuNDc0MDY4NCBMMjAuNzc0ODkyNSwxMy40NzQwNjg0IEMyMC44NTIzNTQ3LDEyLjcyODUxNTYgMjAuODEzNjIzNiwxMi4wNTA3NDAzIDIwLjY1ODY5OTMsMTEuNDQwNzQyNSBDMjAuNTAzNzc0OSwxMC44MzA3NDQ3IDIwLjI3NjUzNDUsMTAuMzM5MjIyMSAxOS45NzY5NzgsOS45NjYxNzQ1NCBDMTkuNjc3NDIxNSw5LjU5MzEyNzAyIDE5LjMzNjQyNTUsOS4yNzEwNDgxOSAxOC45NTM5ODk5LDguOTk5OTM4MDcgQzE4LjU3MTU1NDMsOC43Mjg4Mjc5NSAxOC4xODIwNzY3LDguNTMwMzc1MzQgMTcuNzg1NTU3MSw4LjQwNDU4MDI1IEMxNy4zODkwMzc1LDguMjc4Nzg1MTUgMTcuMDI2MzczNyw4LjE3OTU1ODg1IDE2LjY5NzU2NTgsOC4xMDY5MDEzNCBDMTYuMzY4NzU3OCw4LjAzNDI0MzgyIDE2LjA5NzkxMTEsNy45OTMwMzUwOSAxNS44ODUwMjU2LDcuOTgzMjc1MTIgTDE1LjU2NTY5NzMsNy45Njg2MzUxOCBDMTQuMjU5Njc0Myw4LjAxNjg5Mjc4IDEzLjAwNDU3MDUsOC4yMzI0MjUzMiAxMS44MDAzODYsOC42MTUyMzI4MSBDMTAuNTk2MjAxNCw4Ljk5ODA0MDMgOS41MTUyNTIwNiw5LjUwMzkzMTc5IDguNTU3NTM4LDEwLjEzMjkwNzMgQzcuNTk5ODIzOTUsMTAuNzYxODgyNyA2Ljc0ODU1MjY2LDExLjQ0MjA5OCA2LjAwMzcyNDE0LDEyLjE3MzU1MzEgQzUuMjU4ODk1NjIsMTIuOTA1MDA4MiA0LjU5MTUyOTI3LDEzLjY5NjY0OTggNC4wMDE2MjUwOCwxNC41NDg0Nzc4IEw0LDE0LjU0Njg1MTEgWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  W4Px: function(e, t, i) {
    "use strict";
    var n = i("EfIP");
    i.n(n).a
  },
  W4SE: function(e, t, i) {},
  XB72: function(e, t, i) {
    "use strict";
    var n = i("U4U7");
    i.n(n).a
  },
  XGqN: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return n
    }),
      i.d(t, "b", function() {
        return j
      }),
      i.d(t, "c", function() {
        return u
      });
    var n, a, o, s, r, c, u, M, l = i("lwsE"), d = i.n(l), A = i("W8MJ"), g = i.n(A), D = i("cDf5"), y = i.n(D), N = i("1aRO"), p = i("ZS4h"), f = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }, h = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : y()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }, j = function() {
      function e() {
        d()(this, e),
          this.id = 0,
          this.ord = 0,
          this.isLocked = !1,
          this.isInFree = !1,
          this.payMode = o.Free,
          this.payGold = 0,
          this.readStatus = r.UnRead,
          this._shortTitle = "",
          this.allImageSize = 0,
          this.commentCount = 0,
          this.unlockType = n.Locked,
          this.unlockUntil = ""
      }
      return g()(e, [{
        key: "shortTitle",
        get: function() {
          return this._shortTitle
        }
      }, {
        key: "shortTitleFormatted",
        get: function() {
          return p.a.formatShortTitle(this._shortTitle)
        }
      }, {
        key: "shortTitleFormattedPrefix",
        get: function() {
          return p.a.formatShortTitle(this._shortTitle, "第")
        }
      }]),
        e
    }();
    f([Object(N.a)(), h("design:type", Number)], j.prototype, "id", void 0),
      f([Object(N.a)(), h("design:type", Number)], j.prototype, "ord", void 0),
      f([Object(N.a)("is_locked"), h("design:type", Boolean)], j.prototype, "isLocked", void 0),
      f([Object(N.a)("is_in_free"), h("design:type", Boolean)], j.prototype, "isInFree", void 0),
      f([Object(N.a)("pay_mode"), h("design:type", Number)], j.prototype, "payMode", void 0),
      f([Object(N.a)("pay_gold"), h("design:type", Number)], j.prototype, "payGold", void 0),
      f([Object(N.a)("read"), h("design:type", Number)], j.prototype, "readStatus", void 0),
      f([Object(N.a)("short_title"), h("design:type", String)], j.prototype, "_shortTitle", void 0),
      f([Object(N.a)("size"), h("design:type", Number)], j.prototype, "allImageSize", void 0),
      f([Object(N.a)("comments"), h("design:type", Number)], j.prototype, "commentCount", void 0),
      f([Object(N.a)("unlock_type"), h("design:type", Number)], j.prototype, "unlockType", void 0),
      f([Object(N.a)("unlock_expire_at"), h("design:type", String)], j.prototype, "unlockUntil", void 0),
      j = f([Object(N.b)()], j),
      (a = n || (n = {}))[a.Locked = 0] = "Locked",
      a[a.CoinOrCoupon = 1] = "CoinOrCoupon",
      a[a.WaitFree = 2] = "WaitFree",
      a[a.LimitedFree = 3] = "LimitedFree",
      (s = o || (o = {}))[s.Free = 0] = "Free",
      s[s.Pay = 1] = "Pay",
      (c = r || (r = {}))[c.UnRead = 0] = "UnRead",
      c[c.Read = 1] = "Read",
      (M = u || (u = {}))[M.None = 0] = "None",
      M[M.Discount = 1] = "Discount"
  },
  XH3h: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return o
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = function e() {
      a()(this, e),
        this.avatar = "",
        this.biliCoin = 0,
        this.level = 0,
        this.nickname = "--",
        this.uid = 0
    }
  },
  XJva: function(e, t, i) {
    "use strict";
    var n = i("uQLG");
    i.n(n).a
  },
  XmzZ: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIuNzAxMTcyNSwyOS4yOTU0OTM0IEwxMy4zMTUxNzY0LDI5LjY4ODAyMDMgQzEwLjE0NDA1MzIsMjkuMDM4MTY4NyA3LjQ5ODAxNzksMjcuNDg3OTczMyA1LjI1NzI0NjMxLDI1LjMwOTk4NTggQzIuOTc4NTkzODUsMjMuMDk1MTMwMSAxLjgxMDY0NDU3LDIwLjM2NjQ4OTQgMS4zNzMwOTU3MiwxNy4yOTI3NTk3IEwxLjA2OTE2OTkzLDE4LjE3NDUwMjEgQzEuMDc0MDYyNSwxNi43NTEwMDI5IDEuMDMzNjkxNDEsMTUuMzI5MDM3NiAxLjM1ODkxNjAzLDEzLjkxMTg2OSBDMS4yMzkyNjc1OSwxNC4wODM2MDQ4IDEuMTE5NjQ4NDQsMTQuMjU1NDUyMSAxLDE0LjQyNzI0MzYgQzEuNTI1MDg3OTIsMTIuMzg0OTg4MiAyLjAzNTE0NjU0LDEwLjM0Mzk1OTkgMy43MDQyMTg4OSw4LjgwMDQwMTg0IEM1LjAyNzgyMjQ3LDcuNTc2MzMxNDQgNi41ODM0NTczMSw3LjAyODQzOTE4IDguNDIzNDc2OTMsNy4yNDMwNjcwNCBDOC41MjUxMzcxLDcuMjU0OTE5NTQgOC42MjU1MDgxOSw3LjI3ODUxMjk4IDguNzI1NTU3MDMsNy4zMDA1MTY4IEM4Ljc3NDEzMTI1LDcuMzExMTcwMTEgOC44MjA1Mzc1LDcuMzMwNzc1NTQgOC44Nzc0NjEzMyw3LjM0OTQ2MDY1IEw4LjY1MDU4NjMyLDguNjE2MTQ0MjcgQzkuODE0MTcwMzYsNi45NjY2Mzg4NSAxMS4xMzk5NDE5LDUuNzI5MTgyMSAxMy4zNTU5NTc2LDUuODU3ODAyNjQgQzEzLjI5MDE4NjIsNS45MjQ1NjcwOCAxMy4yMjY2MTE5LDUuOTkzMzY3MzUgMTMuMTU4MzIwOSw2LjA1NzY0OTczIEMxMi4xODYzMDkyLDYuOTcyOTEzNzEgMTEuNDkyOTEwNyw4LjAzMjQ3MTQxIDExLjE5MTU2Myw5LjMyMTY4ODcyIEMxMC44NjU3ODE3LDEwLjcxNTQ1OSAxMS4yNDE0ODQ5LDExLjkzMjM5IDEyLjEwNTcxMzQsMTMuMDU0OTE5NCBDMTIuNTUwNjc0NCwxMy42MzI5NTg4IDEyLjM5NzgwMzMsMTQuMjY5ODcwMyAxMi4zMTg4MTg5LDE0Ljg5NTY4MjMgQzEyLjI4NjQ1MDEsMTQuOTExOTQxNSAxMi4yNTQwOTY2LDE0LjkyODIyODIgMTIuMjIxNzU4NCwxNC45NDQ1NDI1IEMxMi4xMzI0OTA4LDE0LjgzOTU0MzMgMTIuMDU0MTgwMiwxNC43MjM1ODQgMTEuOTUyMzQ0MywxNC42MzExMDY2IEMxMC4zNzEwNDU0LDEzLjE5NDU4MzcgOC4wMzc4MTI4NSwxMy42MjAxODYgNy4xNDk5MTI0MiwxNS41Mjg5OTYyIEM2LjQ1Mzk5NDQxLDE3LjAyNTExNjQgNi44MTI4ODExNSwxOC4zOTY4MjcxIDcuODA2MzM4MjMsMTkuNjYyMjgzNiBDNy45Mjg5NDU2NiwxOS44MTg1MTM1IDguMDcyNTAwMzUsMTkuOTU5NzM5NSA4LjI1NjgzNjMsMjAuMDc1MTQxIEM4LjIwMzk1NTQ0LDIwLjAwOTIxMzIgOC4xNTE0MjYxNCwxOS45NDI5Nzg3IDguMDk4MTM1MTIsMTkuODc3MzI5OCBDNy4yMTk2Mzg5OCwxOC43OTUzNDk5IDYuODE2MjUwMjksMTcuNjAxNzA1NiA3LjIxNzY0NjgsMTYuMjQ2MjI1OCBDNy41NTQxODAwMiwxNS4xMDk2OTY2IDguNjY5ODYzNjcsMTQuMjQ3Njk5MiA5Ljc1NTAxOTk3LDE0LjI0MTE3MzMgQzEwLjIwMjkxMDYsMTQuMjM4NDEyNCAxMC41NzkyODc2LDE0LjM1MjAyOTEgMTAuOTUzOTk0NiwxNC41OTgwODcgQzEwLjAxNDgyNDcsMTUuNjE4NjAxMSA5Ljk1MzU2NDksMTYuODUyOTkwMiAxMC4wNzg4MDksMTguMDk4MzM5MyBDMTAuMjAxMjcsMTkuMzE1NTIxMyAxMC44MzEyNywyMC4yOTg4NjA0IDExLjg2NDgwNTIsMjEuMDM3NjQ3NyBDMTEuOTQ2OTI0NCwyMS4wOTYzNTI0IDEyLjA0NzA2MTEsMjEuMTQ0MDEzNCAxMi4xMDQ0NTM3LDIxLjIyMDMxNTYgQzEyLjQ3MTU0MzUsMjEuNzA3ODAyIDEzLjAwNzk0MDEsMjEuODU1NDE0NCAxMy41OTI1MDA2LDIxLjk1NTAzMTIgQzE0LjEyNjQwNjksMjIuMDQ2MDMwNSAxNC42NDkzNTYyLDIyLjE5NjE4MDcgMTUuMTc1NDY5NSwyMi4zMjY1MzAzIEMxNS4yNTA0MTA5LDIyLjM0NTEzMTggMTUuMzE1NzQyOSwyMi4zOTg3ODg3IDE1LjQ1MDY1NSwyMi40NzExNTg3IEwxNC40NjMxNzQ1LDIyLjQ3MTE1ODcgQzE0Ljc0MzM0MDUsMjIuNzg2MDE2OSAxNS4xMTE3NDg4LDIyLjkxMDkwMDQgMTUuNDk1NTY3MSwyMy4wMDU1MjUyIEMxNi4zODExNTMxLDIzLjIyMzg5MDEgMTcuMjU0OTYxOCwyMy4wNzc0NDg5IDE4LjEyNDk5MTEsMjIuOTE0Nzc2OSBDMTguNjQ0NTQxOSwyMi44MTc2MTQzIDE5LjE1ODIzMzMsMjIuNjkyMTczIDE5LjcwODA0NzgsMjIuNTcyMDU4MyBMMTkuNTg3ODcyLDIyLjk2NDkxOTkgQzIwLjAwODI4MjIsMjIuNzY0MzE5OCAyMC4zMjk5NjE5LDIyLjUxNzc4NzggMjAuNTg4NDE4OSwyMi4xODc5NTM3IEMyMC43MDQ1ODExLDIyLjAzOTcyNzcgMjAuODI0NDYzOSwyMS44ODg4ODAzIDIwLjk2OTUxMjcsMjEuNzY4NDg2OCBDMjEuMDU2ODc2LDIxLjY5NjAwNTIgMjEuMTk1OTQ4MywyMS42Nzk4MDIyIDIxLjMxMjMxNTUsMjEuNjM4MTY1IEMyMS4zNDA1ODcsMjEuODA1NDY2NiAyMS4zNTk4MDU3LDIxLjkxOTI1MDYgMjEuMzc4OTY1OSwyMi4wMzMwMzQ1IEMyMS41MDk1NDIsMjEuOTg5NjEyNiAyMS42NTkxNjEyLDIxLjk3MTgxOTkgMjEuNzY3NTU5NiwyMS44OTg1ODU0IEMyMi41Mjk1NzE0LDIxLjM4NDAxOTUgMjIuOTg4NDE5MSwyMC42NTI4NDU4IDIzLjI2NTI0NTMsMTkuODI5NTg1MSBDMjMuNTM2NDc1NywxOS4wMjI4MzQzIDIzLjczMzQwOTMsMTguMTkzNDY2MSAyMy45NzczNjQ0LDE3LjMyMjU0NDQgQzI0LjA5NDA4MzIsMTcuNTM4Mzk5MyAyNC4yMTIxNDk2LDE3Ljc1Njc2NDIgMjQuMzYxMywxOC4wMzI4MDE5IEMyNC40NzczNDQ5LDE3LjQwOTgwNjcgMjQuNjY0MjI5NywxNi44MTg3OTkyIDI0LjY3OTYxMDYsMTYuMjIzNjM2NCBDMjQuNzAxMzQ4OCwxNS4zODY4MjIgMjQuNjAwNjU1NSwxNC41NDY3NzI2IDI0LjU0MjI2NjgsMTMuNzA4NjQ3NSBDMjQuNTE2NTE0OCwxMy4zMzkwNDQ3IDI0LjQ2NjIxMjEsMTIuOTcxMDAzNyAyNC40MjAxNTc0LDEyLjUzODA5NDYgQzI0Ljk5ODE1NTUsMTIuODUwMDgwMyAyNS4zNTc4MzMzLDEzLjI3MTQ5OTQgMjUuNjczMDA5LDEzLjc1OTg3ODIgQzI1LjY4ODg1ODcsMTIuNDk0ODk1NyAyNS42NzkzNjY1LDExLjIxNjA4MDcgMjUuMTI3MjM3NSwxMC4wNDU3Nzg4IEMyNC41NzkwMDUxLDguODgzNDUzIDIzLjgyNTE5NjUsNy44MjY3MTIwMSAyMi43Nzk0NzM3LDYuOTg2OTY5MzggQzIzLjMxMzE3NDksNi44NzcxNDU1MSAyMy45NzI0MTMzLDcuMTU3NzI5MDQgMjUuMzA1NjU1NSw4LjAzNTkwMTY2IEMyNC44MTMzMjE1LDcuMjEyNDQ1NzYgMjQuMTk3NDEzMyw2LjQ3MzI2ODA5IDIzLjQ2NTI4NDMsNS44MzY5NDIyNCBDMjIuNzQyMDYxNiw1LjIwODM2OTMyIDIxLjk2MjczNTQsNC42MzgzODk1OCAyMS4yMDc1NDk4LDQgQzIyLjAyMzExNjMsNC4zMDk5NDk4NCAyMi44NDY2MjIyLDQuNjAyNTI1MzEgMjMuNjUxNzg4Miw0LjkzNTI4NzczIEMyNC4zMTczMjU0LDUuMjEwMzc3MjcgMjQuODkwNDMwOSw1LjYyNDIzODY4IDI1LjQxNDgxNTcsNi4xMDU2MTc1IEMyNi4zODMwNDgxLDYuOTk0Mzg3NjUgMjcuMzg2MTczMiw3Ljg1MDcyMzc4IDI4LjE2ODY2MzUsOC45MTQ1NzYyNyBDMjguMTI1MTI4Myw4LjgzMjk3NTMgMjguMDg1NTc3NSw4Ljc0OTI1NDgyIDI4LjAzNzQxMzUsOC42NzAxNjM3OCBDMjcuMzgxMzY4NSw3LjU5MjE3MTk2IDI2LjUzOTAyNDcsNi42NTU1MTc3MSAyNS41ODM1MDcxLDUuODEzODIyOSBDMjUuMzE0MTgwOSw1LjU3NjU0OTggMjUuMjIxMjUxMiw1LjMzODA3NzUgMjUuMzEyODA0LDQuOTUzNzc3NjMgQzI1Ljk4MDU2NzcsNS40MjI3MTgyOSAyNi42MzQzNTY4LDUuODYyNTQzNjQgMjcuMTQ2NDk1NCw2LjUwNjQ1NTA5IEwyNy4yNDA1Njc3LDYuMjUyNTg4NDkgQzI5LjU4MTAwNzMsOC4yMDQ2MjU0OCAzMC4yOTcxMTA4LDEwLjY4NTQ1MTMgMjkuOTk3MDUyMiwxMy41MjM5NDM3IEMzMC4wMjk5NTI2LDEzLjUzMDYwOSAzMC4wNjI5MTE2LDEzLjUzNzIxODUgMzAuMDk1NzUzNCwxMy41NDM4MjggQzMwLjI1MTY3MTQsMTMuMjE0Nzc0NyAzMC40MDc2MTg3LDEyLjg4NTcyMTUgMzAuNTkwNzUzNCwxMi40OTg5Njc0IEMzMC43MDEyMzIsMTMuMDcyNDYxMSAzMC44MjcwMDM0LDEzLjYwNTc2NzggMzAuOTAzNDA5NywxNC4xNDUyOTM2IEMzMS4xMDIwMTMyLDE1LjU0NzU0MTkgMzEuMDMwMDg5NCwxNi45MTg2NjcgMzAuMzQ3Nzk0NCwxOC4yMTc4MTI1IEMzMC4wOTUyODQ3LDE4LjY5ODU0OTkgMjkuODk1MjQ1NiwxOS4yMDQxMDc4IDI5LjY1Nzk0MDksMTkuNjkyNDg2NiBDMjkuNTM3NDQyOCwxOS45NDA1ODAzIDI5LjQ5NjkyNTMsMjAuMTcxNzQ1OSAyOS41NjkzMTc4LDIwLjQ1MTEwMjMgQzI5Ljc4ODA3NzYsMjEuMjk0NjY1NiAyOS42NjU5NjgyLDIyLjEwMjAzIDI5LjE5NDc1NzMsMjIuODU2MSBDMjguMjc1MzkyLDI0LjMyNzMxNiAyNy4wNjYzMDk5LDI1LjUxMjYyMTcgMjUuNDYxODY2NSwyNi4zMTQ3MTUyIEMyNS4zNTAyNzQ3LDI2LjM3MDQ5MTcgMjUuMjYzMjA0MywyNi40NzUyMTIgMjUuMTczODc4MiwyNi41NjU0MzA1IEMyNS4xMTgyMTQxLDI2LjYyMTc5MjYgMjUuMDc2NTUzOSwyNi42OTE3MDg0IDI1LjAzNDI0OTMsMjYuNzU4ODkxMSBDMjQuMjQzNTg1MSwyOC4wMTU1MzUgMjMuMDA3OTAxNSwyOC42MTUzODMgMjEuNTYzMDk2NywyOC45NDYzODg1IEMxOS45MDY1NjM0LDI5LjMyNTg2MzcgMTguMjQxNTYzNCwyOS42MTAxODQzIDE2LjUzMDc0MywyOS41ODcxNDg2IEMxNi40ODI1MjAzLDI5LjU4NjUzNSAxNi40MzQxNTEyLDI5LjU5MzE0NDUgMTYuMzEwNjA2MiwyOS42MDEzNDM3IEMxNi40Nzk1MzIsMjkuNzQ4MzQyNiAxNi42MDEyMzEyLDI5Ljg1NDE3ODQgMTYuNzY2OTkzLDI5Ljk5ODMzMjcgQzE1LjMyNTQxMDksMzAuMDI3MzkyMiAxNC4wMjI3ODM5LDI5LjY3MjkwNDkgMTIuNzM5MDgyNiwyOS4yMjMxNzkyIEwxMi43MDExNzI1LDI5LjI5NTQ5MzQgWiBNMTAuMDI4MjYxMSwxNiBDMTAuODgwNzU3MiwxNi43NDI3MjI3IDExLjc4NzExNjYsMTcuMjI4OTcxMiAxMi44ODQ2MzM1LDE3LjI4OTQxNDcgQzEzLjQxOTk3NDksMTcuMzE4OTU0MyAxMy45MDQ3NDQ1LDE3LjE3OTI3NDUgMTQuMzY2MDU1MywxNi45MDUzNDM4IEMxNS4zNTc3OTgyLDE2LjMxNjYxMTQgMTYuMzYzODc4NiwxNi4zNzkyMjY1IDE3LjM1OTMwMzUsMTYuODk5ODU5MSBDMTcuNjg0OTkzNywxNy4wNzAyMjAxIDE3LjkwMzk4OTQsMTcuMzQ1NDg3MSAxNy45ODMyNjQyLDE3LjcxMjAxOCBDMTguMDU3NDA2NCwxOC4wNTUxMzQzIDE3Ljg4MTA2MDYsMTguMjY4MDM2OSAxNy41MzY0NTgyLDE4LjIwMDI5ODkgQzE3LjA4MTcwMjUsMTguMTEwOTg0IDE2LjcyMzQ4NzksMTguMjMxODQzMSAxNi4zNzUxNDc4LDE4LjUyNjQwNDIgQzE2LjA1NTM5OSwxOC43OTY4ODI2IDE1LjY4NDkzODksMTkuMDA2NjExMiAxNS4zNDQzODEyLDE5LjI1MzYxOTMgQzE0LjQ1NDQ1MTQsMTkuODk5MTc1OCAxMy40MzMzOTE5LDE5Ljk4OTM1MzkgMTIuMzc5Mzg5NiwxOS45OTk5MDU3IEMxMS45ODgwMzcsMjAuMDAzODAzNSAxMS42OTIzMzI4LDE5Ljg4Njg3IDExLjM5OTY0MTEsMTkuNjQ2NzM4NyBDMTAuMjQ5MDk3OCwxOC43MDI0NzI3IDkuODg5NDA0NzksMTcuNDcxMzU3NyAxMC4wMjgyNjExLDE2IFogTTUuNDA1NTQ0NTMsNiBMNSw1LjY3MDA3ODQzIEM5LjE1ODY2NjQ1LDEuNzg1MTY4OTYgMTcuMDM5Mzk2NCwwLjU3ODI2ODQwMSAyMyw0LjA0NDQ0OTI0IEMyMi43ODk0MTI3LDMuOTcwNTcwNDEgMjIuNTg0NDA5NywzLjg4MDY4MTI0IDIyLjM2NzMxNzEsMy44MjU5MTE1NSBDMjEuNzU4MTIyNCwzLjY3MjIyNjg4IDIxLjE0MjM5MzYsMy41MzczODA4MSAyMC41MzE5NjEyLDMuMzg3MDE2MjYgQzE5Ljc5NTcxMTgsMy4yMDU2MzkzMyAxOS4wNzI5MDQ3LDIuOTczNTk5ODIgMTguMzI1Nzc0NywyLjgzNjcxMjUgQzEzLjQ5ODk2MywxLjk1MjE4MzMgOS4yNjE4MDEyNCwyLjkzMzkzMDUzIDUuNjM5NTMzNTYsNS44MTMxMzg3MiBDNS41NzMxMjc3Nyw1Ljg2NTk2NTUyIDUuNTA2OTIzNDcsNS45MTkwMzgyNiA1LjQwNTU0NDUzLDYgWiBNMTEuOTgxNDEwMiwxMyBDMTEuMTQ1NzUzNywxMS44NTk3MjAzIDEwLjc1MjUxNzksMTAuNTYwODc2MiAxMS4xNjUxNzM1LDkgQzExLjYzMDg1NTYsOS41NTEyODkzMSAxMi4yMjMyNTAzLDkuNTE1NTYwNTkgMTIuODA0OTY3MSw5LjUzMzkyNjEyIEMxMy4zNzY3NjIzLDkuNTUyMDAwNjUgMTMuOTUwMjgxNyw5LjU1OTcyODQgMTQuNTE5MDgyMyw5LjYxNjc2NTAxIEMxNC45MjY2MjU5LDkuNjU3NjY3MTIgMTUuMDI3OTU5Nyw5LjgxNTg0MzUgMTQuOTkzODY5MiwxMC4yNTQ2NzYzIEMxNC45NDUxNjg1LDEwLjg4MjE3NjEgMTQuNzQ3MjgwMSwxMS4zOTQ0Mzg2IDE0LjE2MDc1MzYsMTEuNzA0MjI3NiBDMTMuNDIzNjQ4MSwxMi4wOTM1MjUyIDEyLjcyMDUxMjEsMTIuNTU2MjIwMiAxMS45ODE0MTAyLDEzIEwxMS45ODE0MTAyLDEzIFogTTIsOSBDMi4wOTkxNDM4Myw3LjU1MDY0MDkzIDIuNDMzMjUzNzksNi4xODA3ODQxMiAzLjcwOTk0MjY2LDUgQzMuNzk1ODE5ODEsNS45MTA0ODIxIDQuMTk2MTI3NDQsNi42MjU0NjQ1MSA1LDcuMjAzNjk2MjMgQzMuODA1NzYxMzQsNy42MTM0NjY5NyAyLjg2NDAzMDY3LDguMjUyMzE2MzQgMiw5IFoiLz4KICA8L2c+Cjwvc3ZnPgo="
  },
  YB9p: function(e, t, i) {},
  YMW7: function(e, t, n) {
    "use strict";
    var i = n("lwsE")
      , a = n.n(i)
      , o = n("a1gu")
      , s = n.n(o)
      , r = n("Nsbk")
      , c = n.n(r)
      , u = n("7W2i")
      , M = n.n(u)
      , l = n("cDf5")
      , d = n.n(l)
      , A = n("+B0l")
      , g = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , D = function(e) {
      function t() {
        return a()(this, t),
          s()(this, c()(t).apply(this, arguments))
      }
      return M()(t, e),
        t
    }(n("oCYn").default)
      , y = D = g([A.b], D)
      , N = (n("pjcQ"),
      n("KHd+"))
      , p = Object(N.a)(y, function() {
      var e = this
        , t = e.$createElement
        , i = e._self._c || t;
      return i("jk-vertical-center", {
        staticClass: "old-browsers w-100 h-100 p-fixed p-zero t-center"
      }, [i("div", {
        staticClass: "hint-text"
      }, [i("img", {
        attrs: {
          src: n("20sy"),
          width: "288",
          height: "240"
        }
      }), i("p", [e._v("邀请您使用以下新版浏览器 " + e._s(e.$emoji.happy()))])]), i("div", {
        staticClass: "divider"
      }), i("div", {
        staticClass: "browser-list-container"
      }, [i("p", {
        staticStyle: {
          "font-size": "14px"
        }
      }, [e._v("以下四款官方正版浏览器任君挑选")]), i("div", {
        staticClass: "browser-list"
      }, [i("a", {
        staticClass: "list-item",
        attrs: {
          href: "https://www.microsoftedgeinsider.com"
        }
      }, [i("img", {
        staticClass: "list-img",
        attrs: {
          src: n("8XqL")
        }
      }), i("img", {
        staticClass: "list-img activated",
        attrs: {
          src: n("W+cc")
        }
      }), i("div", {
        staticClass: "label"
      }, [e._v("Edge")]), i("div", {
        staticClass: "vendor"
      }, [e._v("微软")])]), i("a", {
        staticClass: "list-item",
        attrs: {
          href: "https://www.google.cn/intl/zh-CN/chrome"
        }
      }, [i("img", {
        staticClass: "list-img",
        attrs: {
          src: n("xaVA")
        }
      }), i("img", {
        staticClass: "list-img activated",
        attrs: {
          src: n("kHPA")
        }
      }), i("div", {
        staticClass: "label"
      }, [e._v("Chrome")]), i("div", {
        staticClass: "vendor"
      }, [e._v("谷歌")])]), i("a", {
        staticClass: "list-item",
        attrs: {
          href: "https://www.mozilla.org/zh-CN/firefox/new"
        }
      }, [i("img", {
        staticClass: "list-img",
        attrs: {
          src: n("S8+f")
        }
      }), i("img", {
        staticClass: "list-img activated",
        attrs: {
          src: n("XmzZ")
        }
      }), i("div", {
        staticClass: "label"
      }, [e._v("Firefox")]), i("div", {
        staticClass: "vendor"
      }, [e._v("火狐")])]), i("a", {
        staticClass: "list-item",
        attrs: {
          href: "https://www.opera.com/zh-cn"
        }
      }, [i("img", {
        staticClass: "list-img",
        attrs: {
          src: n("+8rY")
        }
      }), i("img", {
        staticClass: "list-img activated",
        attrs: {
          src: n("8HwU")
        }
      }), i("div", {
        staticClass: "label"
      }, [e._v("Opera")]), i("div", {
        staticClass: "vendor"
      }, [e._v("欧朋")])])])]), i("div", {
        staticClass: "copyright"
      }, [i("span", [e._v("© 2019 哔哩哔哩漫画")]), i("br"), i("span", [e._v("# Carry Your World #")])])])
    }, [], !1, null, "e423b1c2", null);
    t.a = p.exports
  },
  "YR+q": function(e, t, i) {},
  Z9iJ: function(e, t, i) {
    "use strict";
    var n = i("YR+q");
    i.n(n).a
  },
  ZMJr: function(e, t, i) {
    "use strict";
    var n = i("cP0u");
    i.n(n).a
  },
  ZS4h: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "formatShortTitle",
        value: function(e, t) {
          var i = 1 < arguments.length && void 0 !== t ? t : "";
          return i && (i = "".concat(i, " ")),
            /^(\d+|[\uFF10-\uFF19]+)$/.test(e) ? "".concat(i).concat(e, " 话") : e
        }
      }]),
        e
    }()
  },
  ZjbI: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return l
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("Qyje")
      , c = i.n(r)
      , u = i("reI8")
      , M = i("+J0b")
      , l = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "home",
        value: function(e) {
          return u.b.Home + this.createQueryString(e)
        }
      }, {
        key: "classify",
        value: function(e) {
          var t = this.createQueryString(e);
          return t ? u.b.Classify + "#/" + t : u.b.Classify
        }
      }, {
        key: "detailPage",
        value: function(e, t) {
          return u.b.Detail + e + this.createQueryString(t)
        }
      }, {
        key: "readerPage",
        value: function(e, t, i) {
          return u.b.Reader + e + "/" + t + this.createQueryString(i)
        }
      }, {
        key: "searchPage",
        value: function(e, t) {
          return u.b.Search + this.createQueryString(Object.assign({}, t, {
            keyword: e
          }))
        }
      }, {
        key: "accountCenter",
        value: function(e) {
          var t = 0 < arguments.length && void 0 !== e ? e : {}
            , i = t.query
            , n = t.subPage;
          return n || (n = u.a.None),
          u.b.AccountCenter + this.createQueryString(i) + "#/" + n
        }
      }, {
        key: "ranking",
        value: function(e, t) {
          var i = 0 < arguments.length && void 0 !== e ? e : M.a.POPULARITY
            , n = 1 < arguments.length ? t : void 0
            , a = this.createQueryString(n);
          return u.b.Ranking + a + "#/" + i
        }
      }, {
        key: "createQueryString",
        value: function(e) {
          var t = c.a.stringify(e);
          return t ? "?" + t : ""
        }
      }]),
        e
    }()
  },
  ZojZ: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "info",
        value: function() {
          try {
            for (var e, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            (e = console).log.apply(e, ["[Info]"].concat(i))
          } catch (e) {}
        }
      }, {
        key: "warn",
        value: function() {
          try {
            for (var e, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            (e = console).warn.apply(e, ["[Warn]"].concat(i))
          } catch (e) {}
        }
      }, {
        key: "error",
        value: function() {
          try {
            for (var e, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            (e = console).error.apply(e, ["[Error]"].concat(i))
          } catch (e) {}
        }
      }]),
        e
    }()
  },
  "ZxM/": function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("o0o1")
      , M = i.n(n)
      , a = i("yXPU")
      , o = i.n(a)
      , l = i("qQS4")
      , d = i("f91u")
      , A = i("CnmV")
      , g = i("rm82")
      , D = i("AMMt")
      , s = i("IdHk")
      , y = !1;
    function r() {
      var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return function(e, t, i) {
        var r = e[t]
          , c = "boolean" != typeof n.isShowQuickLoginPanel || n.isShowQuickLoginPanel
          , u = n.callback;
        return {
          enumerable: !0,
          configurable: !0,
          value: function() {
            var e = o()(M.a.mark(function e() {
              var t, i, n, a, o = this, s = arguments;
              return M.a.wrap(function(e) {
                for (; ; )
                  switch (e.prev = e.next) {
                    case 0:
                      if (t = this,
                        y) {
                        e.next = 9;
                        break
                      }
                      if (!c) {
                        e.next = 9;
                        break
                      }
                      if (D.a.info("请在登录后再进行操作喔 ".concat(l.happy())),
                        e.t0 = c,
                        e.t0)
                        return e.next = 8,
                          d.a.OpenQuickLoginPanel(function() {
                            "function" == typeof u ? "function" == typeof u && u.call(o) : (A.a.refreshUserData(),
                              g.a.refreshWalletData())
                          });
                      e.next = 8;
                      break;
                    case 8:
                      return e.abrupt("return");
                    case 9:
                      for (i = s.length,
                             n = new Array(i),
                             a = 0; a < i; a++)
                        n[a] = s[a];
                      return e.abrupt("return", r.call.apply(r, [t].concat(n)));
                    case 11:
                    case "end":
                      return e.stop()
                  }
              }, e, this)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }()
        }
      }
    }
    s.b.subscribe(function(e) {
      y = !!e.uid
    })
  },
  "a+mQ": function(e, t, i) {
    "use strict";
    var n = i("SbUT");
    i.n(n).a
  },
  aGao: function(e, t, i) {
    "use strict";
    var n = i("55sB");
    i.n(n).a
  },
  aZ12: function(e, t, i) {
    "use strict";
    var n = i("IsZQ");
    i.n(n).a
  },
  aZbF: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return D
    }),
      i.d(t, "b", function() {
        return n
      });
    var n, a, o = i("lwsE"), s = i.n(o), r = i("W8MJ"), c = i.n(r), u = i("cDf5"), M = i.n(u), l = i("1aRO"), d = i("ZS4h"), A = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }, g = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }, D = function() {
      function e() {
        s()(this, e),
          this.id = "",
          this.seasonId = 0,
          this.title = "--",
          this.status = n.ToBeOpened,
          this.lastReadTime = "",
          this.horizontalCover = "",
          this.verticalCover = "",
          this.squareCover = "",
          this.lastReadEpisodeId = 0,
          this.lastReadEpisodeOrder = 0,
          this._lastReadEpisodeShortTitle = "--",
          this._latestEpisodeShortTitle = "--",
          this.episodeCount = 0
      }
      return c()(e, [{
        key: "lastReadEpisodeShortTitle",
        get: function() {
          return this._lastReadEpisodeShortTitle
        }
      }, {
        key: "lastReadEpisodeShortTitleFormatted",
        get: function() {
          return d.a.formatShortTitle(this._lastReadEpisodeShortTitle)
        }
      }, {
        key: "latestEpisodeShortTitle",
        get: function() {
          return this._latestEpisodeShortTitle
        }
      }, {
        key: "latestEpisodeShortTitleFormatted",
        get: function() {
          return d.a.formatShortTitle(this._latestEpisodeShortTitle)
        }
      }]),
        e
    }();
    A([Object(l.a)(), g("design:type", String)], D.prototype, "id", void 0),
      A([Object(l.a)("comic_id"), g("design:type", Number)], D.prototype, "seasonId", void 0),
      A([Object(l.a)(), g("design:type", String)], D.prototype, "title", void 0),
      A([Object(l.a)(), g("design:type", Number)], D.prototype, "status", void 0),
      A([Object(l.a)("read_time"), g("design:type", String)], D.prototype, "lastReadTime", void 0),
      A([Object(l.a)("hcover"), g("design:type", String)], D.prototype, "horizontalCover", void 0),
      A([Object(l.a)("vcover"), g("design:type", String)], D.prototype, "verticalCover", void 0),
      A([Object(l.a)("scover"), g("design:type", String)], D.prototype, "squareCover", void 0),
      A([Object(l.a)("last_ep_id"), g("design:type", Number)], D.prototype, "lastReadEpisodeId", void 0),
      A([Object(l.a)("last_ord"), g("design:type", Number)], D.prototype, "lastReadEpisodeOrder", void 0),
      A([Object(l.a)("last_ep_short_title"), g("design:type", String)], D.prototype, "_lastReadEpisodeShortTitle", void 0),
      A([Object(l.a)("latest_ep_short_title"), g("design:type", String)], D.prototype, "_latestEpisodeShortTitle", void 0),
      A([Object(l.a)("ord_count"), g("design:type", Number)], D.prototype, "episodeCount", void 0),
      D = A([Object(l.b)()], D),
      (a = n || (n = {}))[a.ToBeOpened = 1] = "ToBeOpened",
      a[a.OnShow = 2] = "OnShow",
      a[a.Finished = 3] = "Finished",
      a[a.Offline = 4] = "Offline"
  },
  aoNH: function(e, t, i) {},
  ayH6: function(e, t, i) {
    "use strict";
    var n = i("7dO1");
    i.n(n).a
  },
  bLsH: function(e, t, i) {
    "use strict";
    var n = i("+7iW");
    i.n(n).a
  },
  blo6: function(e, t, i) {
    "use strict";
    var n = i("o0o1")
      , M = i.n(n)
      , a = i("yXPU")
      , s = i.n(a)
      , o = i("lwsE")
      , r = i.n(o)
      , c = i("W8MJ")
      , u = i.n(c)
      , l = i("ZojZ")
      , d = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
      , A = !!d
      , g = function() {
      function e() {
        r()(this, e)
      }
      return u()(e, null, [{
        key: "openDb",
        value: function(s) {
          return new Promise(function(i, n) {
              var e = s.dbVersion
                , t = s.dbName
                , a = s.onUpgradeNeeded;
              if (!A)
                return n(new Error("IndexDb is not supported."));
              var o = d.open(t, e);
              o.onsuccess = function(e) {
                var t = o.result;
                i(t)
              }
                ,
                o.onerror = function(e) {
                  var t = e.target.error || new Error("Failed to open IndexDb.");
                  l.a.error("Failed to open IndexDb:", t),
                    n(t)
                }
                ,
                o.onupgradeneeded = function(e) {
                  var t = e.target.result;
                  "function" == typeof a && a(t),
                    i(t)
                }
            }
          )
        }
      }, {
        key: "addValue",
        value: function(n, a, o) {
          return new Promise(function(e, i) {
              var t = n.transaction(a, "readwrite").objectStore(a).add(o);
              t.onsuccess = function() {
                e()
              }
                ,
                t.onerror = function(e) {
                  var t = e.target.error || new Error("Unknown error");
                  l.a.error("Failed to add value to IndexDb [".concat(a, "]:"), t),
                    i(t)
                }
            }
          )
        }
      }, {
        key: "getValueByIndex",
        value: function(t, a, o, s) {
          return new Promise(function(i, n) {
              var e = t.transaction(a).objectStore(a).index(o).get(s);
              e.onsuccess = function(e) {
                var t = e.target.result;
                i(t || null)
              }
                ,
                e.onerror = function(e) {
                  var t = e.target.error || new Error("Unknown error");
                  l.a.error("Failed to get value from IndexDb:", t),
                    n(t)
                }
            }
          )
        }
      }, {
        key: "removeValue",
        value: function(n, a, o) {
          return new Promise(function(e, i) {
              var t = n.transaction(a, "readwrite").objectStore(a).delete(o);
              t.onsuccess = function() {
                e()
              }
                ,
                t.onerror = function(e) {
                  var t = e.target.error || new Error("Unknown error");
                  l.a.error("Failed to remove value from IndexDb:", t),
                    i(t)
                }
            }
          )
        }
      }]),
        e
    }();
    i.d(t, "a", function() {
      return N
    });
    var D = "page"
      , y = "episode_id"
      , N = function() {
      function e() {
        r()(this, e)
      }
      var t, i, n, a, o;
      return u()(e, null, [{
        key: "openDb",
        value: (o = s()(M.a.mark(function e() {
            return M.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0,
                      e.next = 3,
                      g.openDb({
                        dbName: "BilibiliManga:PageHistory",
                        dbVersion: 1,
                        onUpgradeNeeded: function(e) {
                          e.objectStoreNames.contains(D) || e.createObjectStore(D, {
                            keyPath: "episode_id"
                          }).createIndex("episode_id", y, {
                            unique: !0
                          })
                        }
                      });
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 6:
                    throw e.prev = 6,
                      e.t0 = e.catch(0),
                      e.t0;
                  case 9:
                  case "end":
                    return e.stop()
                }
            }, e, null, [[0, 6]])
          })),
            function() {
              return o.apply(this, arguments)
            }
        )
      }, {
        key: "addRecord",
        value: (a = s()(M.a.mark(function e(t, i) {
            var n, a, o, s, r, c, u;
            return M.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return n = {
                      data: null,
                      error: null
                    },
                      e.next = 3,
                      this.getRecord(t);
                  case 3:
                    if (a = e.sent,
                      o = a.data,
                      s = a.error)
                      return n.error = s,
                        e.abrupt("return", n);
                    e.next = 9;
                    break;
                  case 9:
                    return e.prev = 9,
                      e.next = 12,
                      this.openDb();
                  case 12:
                    if (r = e.sent,
                      c = {
                        episode_id: t,
                        page: i
                      },
                      o)
                      return u = o.episode_id,
                        e.next = 18,
                        g.removeValue(r, D, u);
                    e.next = 18;
                    break;
                  case 18:
                    return e.next = 20,
                      g.addValue(r, D, c);
                  case 20:
                    e.next = 26;
                    break;
                  case 22:
                    e.prev = 22,
                      e.t0 = e.catch(9),
                      l.a.error("设置页码记录失败:", e.t0),
                      n.error = e.t0;
                  case 26:
                    return e.abrupt("return", n);
                  case 27:
                  case "end":
                    return e.stop()
                }
            }, e, this, [[9, 22]])
          })),
            function(e, t) {
              return a.apply(this, arguments)
            }
        )
      }, {
        key: "getRecord",
        value: (n = s()(M.a.mark(function e(t) {
            var i, n;
            return M.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = {
                      data: null,
                      error: null
                    },
                      e.prev = 1,
                      e.next = 4,
                      this.openDb();
                  case 4:
                    return n = e.sent,
                      e.next = 7,
                      g.getValueByIndex(n, D, y, t);
                  case 7:
                    i.data = e.sent,
                      e.next = 14;
                    break;
                  case 10:
                    e.prev = 10,
                      e.t0 = e.catch(1),
                      l.a.error("获取页码记录失败:", e.t0),
                      i.error = e.t0;
                  case 14:
                    return e.abrupt("return", i);
                  case 15:
                  case "end":
                    return e.stop()
                }
            }, e, this, [[1, 10]])
          })),
            function(e) {
              return n.apply(this, arguments)
            }
        )
      }, {
        key: "removeHistory",
        value: (i = s()(M.a.mark(function e(t) {
            var i, n;
            return M.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = {
                      data: null,
                      error: null
                    },
                      e.prev = 1,
                      e.next = 4,
                      this.openDb();
                  case 4:
                    return n = e.sent,
                      e.next = 7,
                      g.removeValue(n, D, t);
                  case 7:
                    e.next = 12;
                    break;
                  case 9:
                    e.prev = 9,
                      e.t0 = e.catch(1),
                      i.error = e.t0;
                  case 12:
                    return e.abrupt("return", i);
                  case 13:
                  case "end":
                    return e.stop()
                }
            }, e, this, [[1, 9]])
          })),
            function(e) {
              return i.apply(this, arguments)
            }
        )
      }, {
        key: "getPageHistory",
        value: (t = s()(M.a.mark(function e(t) {
            var i, n, a;
            return M.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = 0,
                      e.next = 3,
                      this.getRecord(t);
                  case 3:
                    return n = e.sent,
                      a = n.data,
                    !n.error && a && (i = a.page),
                      e.abrupt("return", i);
                  case 8:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }()
  },
  c3D1: function(e, t, i) {
    "use strict";
    var n = i("OShF");
    i.n(n).a
  },
  cP0u: function(e, t, i) {},
  d5oT: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+5oiR55qELei/vea8qzwvdGl0bGU+PHBhdGggZD0iTTEyLDE4LjQ4LDYuNDMsMjEuMjJhLjcuNywwLDAsMS0xLS43M2wuODgtNi4xNEwyLDkuOWEuNy43LDAsMCwxLC4zOC0xLjE4TDguNDksNy42NmwyLjg5LTUuNDlhLjcxLjcxLDAsMCwxLDEuMjQsMGwyLjg5LDUuNDksNi4xMiwxLjA2QS43LjcsMCwwLDEsMjIsOS45bC00LjMyLDQuNDUuODgsNi4xNGEuNy43LDAsMCwxLTEsLjczWm0tLjMxLTEuNDFhLjc1Ljc1LDAsMCwxLC42MiwwTDE3LDE5LjM4bC0uNzUtNS4xN2EuNy43LDAsMCwxLC4xOS0uNTlsMy42NC0zLjc1TDE0Ljk0LDlhLjY3LjY3LDAsMCwxLS41LS4zNkwxMiw0LDkuNTYsOC42MmEuNjcuNjcsMCwwLDEtLjUuMzZsLTUuMTQuODksMy42NCwzLjc1YS43LjcsMCwwLDEsLjE5LjU5TDcsMTkuMzhaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtb3BhY2l0eTowLjg5OTk5OTk3NjE1ODE0MjE7ZmlsbC1ydWxlOmV2ZW5vZGQiLz48L3N2Zz4K"
  },
  dLNy: function(e, t, i) {},
  dQCb: function(e, t, i) {
    "use strict";
    var n = i("y7kT");
    i.n(n).a
  },
  dqcz: function(e, t, i) {
    "use strict";
    var n = i("+6iS");
    i.n(n).a
  },
  eG9a: function(e, t, i) {},
  ewXD: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function i() {
        a()(this, i)
      }
      return s()(i, null, [{
        key: "getScrollTop",
        value: function() {
          return Math.max(document.documentElement.scrollTop, document.scrollingElement.scrollTop, document.body.scrollTop, window.pageYOffset, 0)
        }
      }, {
        key: "scrollToTopWithAnimation",
        value: function() {
          var e = this
            , t = Math.floor(i.getScrollTop() / 1.8);
          t < 50 && (t = 0),
            i.scrollTo(document.documentElement, {
              x: 0,
              y: t
            }),
          0 < t && requestAnimationFrame(function() {
            return e.scrollToTopWithAnimation()
          })
        }
      }, {
        key: "scrollTo",
        value: function(e, t) {
          var i = 1 < arguments.length && void 0 !== t ? t : {}
            , n = i.x
            , a = i.y
            , o = isNaN(n) ? e.scrollLeft : n
            , s = isNaN(a) ? e.scrollTop : a;
          e.scrollTo ? e.scrollTo(o, s) : (e.scrollTop = s,
            e.scrollLeft = o)
        }
      }]),
        i
    }()
  },
  f8jW: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "setKeywords",
        value: function(e) {
          var t = document.querySelector("meta[name=keywords]");
          t && e && t.setAttribute("content", e)
        }
      }, {
        key: "setDescription",
        value: function(e) {
          var t = document.querySelector("meta[name=description]");
          t && e && t.setAttribute("content", e)
        }
      }]),
        e
    }()
  },
  f91u: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return D
    });
    var n = i("o0o1")
      , a = i.n(n)
      , o = i("yXPU")
      , s = i.n(o)
      , r = i("lwsE")
      , c = i.n(r)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("qQS4")
      , d = i("pDEV")
      , A = i("AMMt")
      , g = i("ZojZ")
      , D = function() {
      function e() {
        c()(this, e)
      }
      var t;
      return M()(e, null, [{
        key: "OpenQuickLoginPanel",
        value: (t = s()(a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0,
                      e.next = 3,
                      d.a({
                        callback: t
                      });
                  case 3:
                    e.next = 9;
                    break;
                  case 5:
                    e.prev = 5,
                      e.t0 = e.catch(0),
                      A.a.error("登录组件载入失败，请您稍后再次重试，非常抱歉 " + l.sad()),
                      g.a.error("快速登录弹窗载入失败:", e.t0);
                  case 9:
                  case "end":
                    return e.stop()
                }
            }, e, null, [[0, 5]])
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }, {
        key: "goLoginPage",
        value: function() {
          window.location.href = "https://passport.bilibili.com/login"
        }
      }]),
        e
    }()
  },
  fLv1: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("COaM")
      , s = i("B7eG")
      , r = function e() {
      a()(this, e)
    };
    r.IN_MEMORY_IMAGE_PREV = 5,
      r.IN_MEMORY_IMAGE_NEXT = 5,
      r.NEXT_IMAGE_LOAD_COUNT = 3,
      r.PREV_IMAGE_LOAD_COUNT = 3,
      r.LOAD_PREF_EPISODE_BEFORE = 1,
      r.LOAD_NEXT_EPISODE_BEFORE = 2,
      r.TOKEN_LIFE_TIME = 3e5,
      r.IMAGE_REQUEST_TIME_OUT = 15e3,
      r.DEFAULT_PAGING_MODE = o.f.Manga,
      r.DEFAULT_HORIZONTAL_MODE = s.a.DoublePage,
      r.LARGE_VIEWPORT_WIDTH_POINT = 1160,
      r.LARGE_IMAGE_WIDTH_RATIO = .5,
      r.MIDDLE_VIEWPORT_WIDTH_POINT = 900,
      r.MIDDLE_IMAGE_WIDTH_RATIO = .8
  },
  fOTo: function(e, t, i) {
    "use strict";
    var n = i("6Cld");
    i.n(n).a
  },
  fp99: function(e, t, i) {},
  fqmh: function(e, t, i) {
    e.exports = i.p + "img/c9219d816eacd.png"
  },
  "gR/J": function(e, t, i) {
    "use strict";
    var n = i("Malv");
    i.n(n).a
  },
  gtSF: function(e, t) {
    e.exports = "data:image/png;base64,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"
  },
  h3Yl: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return g
    }),
      i.d(t, "b", function() {
        return n
      });
    var n, a, o = i("lwsE"), s = i.n(o), r = i("W8MJ"), c = i.n(r), u = i("cDf5"), M = i.n(u), l = i("1aRO"), d = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }, A = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : M()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }, g = function() {
      function e() {
        s()(this, e),
          this.id = "0",
          this.seasonId = 0,
          this.title = "",
          this.status = n.OnShow,
          this.lastReadTime = "",
          this.horizontalCover = "",
          this.verticalCover = "",
          this.squareCover = "",
          this.lastReadEpisodeId = 0,
          this.lastReadEpisodeOrder = 0,
          this._lastReadEpisodeShortTitle = "",
          this._latestEpisodeShortTitle = "",
          this.episodeCount = 0
      }
      return c()(e, [{
        key: "lastReadEpisodeShortTitle",
        get: function() {
          return /^\d+$/.test(this._lastReadEpisodeShortTitle) ? "".concat(this._lastReadEpisodeShortTitle, " 话") : this._lastReadEpisodeShortTitle
        }
      }, {
        key: "latestEpisodeShortTitle",
        get: function() {
          return /^\d+$/.test(this._latestEpisodeShortTitle) ? "".concat(this._latestEpisodeShortTitle, " 话") : this._latestEpisodeShortTitle
        }
      }]),
        e
    }();
    d([Object(l.a)("id"), A("design:type", String)], g.prototype, "id", void 0),
      d([Object(l.a)("comic_id"), A("design:type", Number)], g.prototype, "seasonId", void 0),
      d([Object(l.a)("title"), A("design:type", String)], g.prototype, "title", void 0),
      d([Object(l.a)("status"), A("design:type", Number)], g.prototype, "status", void 0),
      d([Object(l.a)("read_time"), A("design:type", String)], g.prototype, "lastReadTime", void 0),
      d([Object(l.a)("hcover"), A("design:type", String)], g.prototype, "horizontalCover", void 0),
      d([Object(l.a)("vcover"), A("design:type", String)], g.prototype, "verticalCover", void 0),
      d([Object(l.a)("scover"), A("design:type", String)], g.prototype, "squareCover", void 0),
      d([Object(l.a)("last_ep_id"), A("design:type", Number)], g.prototype, "lastReadEpisodeId", void 0),
      d([Object(l.a)("last_ord"), A("design:type", Number)], g.prototype, "lastReadEpisodeOrder", void 0),
      d([Object(l.a)("last_ep_short_title"), A("design:type", String)], g.prototype, "_lastReadEpisodeShortTitle", void 0),
      d([Object(l.a)("latest_ep_short_title"), A("design:type", String)], g.prototype, "_latestEpisodeShortTitle", void 0),
      d([Object(l.a)("ord_count"), A("design:type", Number)], g.prototype, "episodeCount", void 0),
      g = d([Object(l.b)()], g),
      (a = n || (n = {}))[a.Incoming = 1] = "Incoming",
      a[a.OnShow = 2] = "OnShow",
      a[a.Finished = 3] = "Finished",
      a[a.Offline = 4] = "Offline"
  },
  hEH1: function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
      return a
    }),
      i.d(t, "a", function() {
        return o
      });
    var n = i("jXYe")
      , a = new n.a({
      baseReportConfigs: {
        eventReport: {
          logId: "002558"
        },
        exposeReport: {
          logId: "002558"
        },
        clickReport: {
          logId: "002558"
        }
      },
      debugMode: !1
    });
    function o(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      e.use(n.b, Object.assign({}, t, {
        collectorInstance: a
      }))
    }
  },
  hTcJ: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICB3aWR0aD0iMzYwcHgiIGhlaWdodD0iMzYwcHgiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgIGZpbGw9Im5vbmUiCiAgICAgICAgZD0iTTAuMDAwLDAuMDAwIEwzNjAuMDAwLDAuMDAwIEwzNjAuMDAwLDM2MC4wMDAgTDAuMDAwLDM2MC4wMDAgTDAuMDAwLDAuMDAwIFoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiICBmaWxsPSJyZ2IoMjU1LCA3NywgNTkpIgogICAgICAgIGQ9Ik0yMDguMDAwLDM1NS4wMDAgTDE1My4wMDAsMzU1LjAwMCBDMTUwLjIzOSwzNTUuMDAwIDE0OC4wMDAsMzUyLjc2MSAxNDguMDAwLDM1MC4wMDAgTDE0OC4wMDAsMjk1LjQwNiBDMTQ4LjAwMCwyOTIuNjQ1IDE1MC4yMzksMjkwLjQwNiAxNTMuMDAwLDI5MC40MDYgTDIwOC4wMDAsMjkwLjQwNiBDMjEwLjc2MSwyOTAuNDA2IDIxMy4wMDAsMjkyLjY0NSAyMTMuMDAwLDI5NS40MDYgTDIxMy4wMDAsMzUwLjAwMCBDMjEzLjAwMCwzNTIuNzYxIDIxMC43NjEsMzU1LjAwMCAyMDguMDAwLDM1NS4wMDAgWk0yMDguMDAwLDI1My40MjcgTDE1My4wMDAsMjUzLjQyNyBDMTUwLjIzOSwyNTMuNDI3IDE0OC4wMDAsMjUxLjE4OCAxNDguMDAwLDI0OC40MjcgTDE0OC4wMDAsMTAuMDAwIEMxNDguMDAwLDcuMjM5IDE1MC4yMzksNS4wMDAgMTUzLjAwMCw1LjAwMCBMMjA4LjAwMCw1LjAwMCBDMjEwLjc2MSw1LjAwMCAyMTMuMDAwLDcuMjM5IDIxMy4wMDAsMTAuMDAwIEwyMTMuMDAwLDI0OC40MjcgQzIxMy4wMDAsMjUxLjE4OCAyMTAuNzYxLDI1My40MjcgMjA4LjAwMCwyNTMuNDI3IFoiLz4KPC9zdmc+Cg=="
  },
  hjyT: function(e, t, i) {
    "use strict";
    var n = i("C0Cn");
    i.n(n).a
  },
  hrAu: function(e, t, i) {},
  hxfU: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return u
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("COaM")
      , c = i("91CG")
      , u = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "getSeasonData",
        value: function(e) {
          return c.a.post({
            url: "/twirp/comic.v2.Comic/ComicDetail",
            type: r.c,
            data: {
              comic_id: e
            }
          })
        }
      }]),
        e
    }()
  },
  jc5v: function(e, t, i) {},
  kAyl: function(e, t, i) {},
  kHPA: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzMyYWFmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS4wNTQ2ODc1LDE0LjIyMjY1NjIgTDUuMDYyNSw3LjI3NzM0Mzc1IEM2LjM1Njc3MDgzLDUuNjM2NzE4NzUgNy45NjA5Mzc1LDQuMzQ3MDA1MjEgOS44NzUsMy40MDgyMDMxMiBDMTEuNzg5MDYyNSwyLjQ2OTQwMTA0IDEzLjgzMDcyOTIsMiAxNiwyIEMxOC41MTU2MjUsMiAyMC44NDQ0MDEsMi42MTk3OTE2NyAyMi45ODYzMjgxLDMuODU5Mzc1IEMyNS4xMjgyNTUyLDUuMDk4OTU4MzMgMjYuODE5MDEwNCw2Ljc2NjkyNzA4IDI4LjA1ODU5MzcsOC44NjMyODEyNSBMMTYuNjI4OTA2Miw4Ljg2MzI4MTI1IEMxNi40MjgzODU0LDguODQ1MDUyMDggMTYuMjE4NzUsOC44MzU5Mzc1IDE2LDguODM1OTM3NSBDMTQuMzU5Mzc1LDguODM1OTM3NSAxMi44OTE5MjcxLDkuMzQxNzk2ODggMTEuNTk3NjU2MiwxMC4zNTM1MTU2IEMxMC4zMDMzODU0LDExLjM2NTIzNDQgOS40NTU3MjkxNywxMi42NTQ5NDc5IDkuMDU0Njg3NSwxNC4yMjI2NTYyIFogTTIxLjAwMzkwNjIsMTAuODg2NzE4OCBMMjkuMDQyOTY4OCwxMC44ODY3MTg4IEMyOS42ODA5ODk2LDEyLjUyNzM0MzggMzAsMTQuMjMxNzcwOCAzMCwxNiBDMzAsMTcuODc3NjA0MiAyOS42MzU0MTY3LDE5LjY3NzczNDQgMjguOTA2MjUsMjEuNDAwMzkwNiBDMjguMTc3MDgzMywyMy4xMjMwNDY5IDI3LjE5NzI2NTYsMjQuNjA4NzI0IDI1Ljk2Njc5NjksMjUuODU3NDIxOSBDMjQuNzM2MzI4MSwyNy4xMDYxMTk4IDIzLjI2NDMyMjksMjguMTA0MTY2NyAyMS41NTA3ODEyLDI4Ljg1MTU2MjUgQzE5LjgzNzIzOTYsMjkuNTk4OTU4MyAxOC4wNDE2NjY3LDI5Ljk4MTc3MDggMTYuMTY0MDYyNSwzMCBMMjEuODc4OTA2MiwyMC4wNzQyMTg4IEMyMi43MzU2NzcxLDE4Ljg1Mjg2NDYgMjMuMTY0MDYyNSwxNy40OTQ3OTE3IDIzLjE2NDA2MjUsMTYgQzIzLjE2NDA2MjUsMTMuOTk0NzkxNyAyMi40NDQwMTA0LDEyLjI5MDM2NDYgMjEuMDAzOTA2MiwxMC44ODY3MTg4IFogTTEwLjkxNDA2MjUsMTYgQzEwLjkxNDA2MjUsMTQuNTk2MzU0MiAxMS40MTA4MDczLDEzLjM5Nzc4NjUgMTIuNDA0Mjk2OSwxMi40MDQyOTY5IEMxMy4zOTc3ODY1LDExLjQxMDgwNzMgMTQuNTk2MzU0MiwxMC45MTQwNjI1IDE2LDEwLjkxNDA2MjUgQzE3LjQwMzY0NTgsMTAuOTE0MDYyNSAxOC42MDIyMTM1LDExLjQxMDgwNzMgMTkuNTk1NzAzMSwxMi40MDQyOTY5IEMyMC41ODkxOTI3LDEzLjM5Nzc4NjUgMjEuMDg1OTM3NSwxNC41OTYzNTQyIDIxLjA4NTkzNzUsMTYgQzIxLjA4NTkzNzUsMTcuNDAzNjQ1OCAyMC41ODkxOTI3LDE4LjYwMjIxMzUgMTkuNTk1NzAzMSwxOS41OTU3MDMxIEMxOC42MDIyMTM1LDIwLjU4OTE5MjcgMTcuNDAzNjQ1OCwyMS4wODU5Mzc1IDE2LDIxLjA4NTkzNzUgQzE0LjU5NjM1NDIsMjEuMDg1OTM3NSAxMy4zOTc3ODY1LDIwLjU4OTE5MjcgMTIuNDA0Mjk2OSwxOS41OTU3MDMxIEMxMS40MTA4MDczLDE4LjYwMjIxMzUgMTAuOTE0MDYyNSwxNy40MDM2NDU4IDEwLjkxNDA2MjUsMTYgWiBNMTcuOTE0MDYyNSwyMi45MTc5Njg4IEwxMy45MjE4NzUsMjkuODM1OTM3NSBDMTEuNjk3OTE2NywyOS41MDc4MTI1IDkuNjc0NDc5MTcsMjguNjk2NjE0NiA3Ljg1MTU2MjUsMjcuNDAyMzQzOCBDNi4wMjg2NDU4MywyNi4xMDgwNzI5IDQuNTk3NjU2MjUsMjQuNDU4MzMzMyAzLjU1ODU5Mzc1LDIyLjQ1MzEyNSBDMi41MTk1MzEyNSwyMC40NDc5MTY3IDIsMTguMjk2ODc1IDIsMTYgQzIsMTMuNTM5MDYyNSAyLjYwMTU2MjUsMTEuMjUxMzAyMSAzLjgwNDY4NzUsOS4xMzY3MTg3NSBMOS41MTk1MzEyNSwxOS4wMzUxNTYyIEMxMC4xMDI4NjQ2LDIwLjI3NDczOTYgMTAuOTc3ODY0NiwyMS4yNzI3ODY1IDEyLjE0NDUzMTMsMjIuMDI5Mjk2OSBDMTMuMzExMTk3OSwyMi43ODU4MDczIDE0LjU5NjM1NDIsMjMuMTY0MDYyNSAxNiwyMy4xNjQwNjI1IEMxNi42NTYyNSwyMy4xNjQwNjI1IDE3LjI5NDI3MDgsMjMuMDgyMDMxMiAxNy45MTQwNjI1LDIyLjkxNzk2ODggWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  kfwj: function(e, t, i) {},
  ll70: function(e, t) {
    e.exports = "data:image/png;base64,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UmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQTc3MEZGMENERkIxMUU5OUREMkI3NTZFMzUyMThBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQTc3MEZFRkNERkIxMUU5OUREMkI3NTZFMzUyMThBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxM0Y5RTczN0NEN0QxMUU5QjlGMUI3QUM1QjVCODU1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxM0Y5RTczOENEN0QxMUU5QjlGMUI3QUM1QjVCODU1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr630EAAAADySURBVHja7NvNDYIwGIdxMA5h4hjM4SIeHcSjiziHY5i4Ra0XEkKhJR60fZ7/kXD5vS/9CtCHEDpqdh044qnZF9wz1Aw8nS+P1PX77Wrnv6rgvyZ2dnDMixcvXrx48eLFi3dvX39KziJ2fuNpqYauO+bFi4fh49x0IHf+mCtA64/9agEIY36xAJQJL1kA0mw/KwBtqZsUgLjOjwVwkwPLMx58XkT8CKfhJ3ASfgan4JNwAn4R3jp+Fd40Pgd3kyNePC+bX1qUvhCw8z/M5zu83Ld4jnnx4sWLFy9evHjxxINNyT8rdr6i9P5LK148Km8BBgBPXkHCny6JkwAAAABJRU5ErkJggg=="
  },
  "nJp/": function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE2IDE2Ij48dGl0bGU+5LuY6LS5PC90aXRsZT48cGF0aCBkPSJNNC43LDdWNWEzLjMsMy4zLDAsMCwxLDYuNiwwVjdoLjQyYTEuNTQsMS41NCwwLDAsMSwuNzcuMTMsMSwxLDAsMCwxLC4zOC4zOCwxLjU0LDEuNTQsMCwwLDEsLjEzLjc3djMuMTZBMi44NSwyLjg1LDAsMCwxLDEyLjczLDEzYTEuODEsMS44MSwwLDAsMS0uNzUuNzUsMi44NSwyLjg1LDAsMCwxLTEuNTQuMjdINS41NkEyLjg1LDIuODUsMCwwLDEsNCwxMy43MywxLjgxLDEuODEsMCwwLDEsMy4yNywxMywyLjg1LDIuODUsMCwwLDEsMywxMS40NFY4LjI4YTEuNTQsMS41NCwwLDAsMSwuMTMtLjc3LDEsMSwwLDAsMSwuMzgtLjM4QTEuNTQsMS41NCwwLDAsMSw0LjI4LDdaTTYuMyw3SDkuN1Y1QTEuNywxLjcsMCwxLDAsNi4zLDVaIiBzdHlsZT0iZmlsbDojZjlhMDE4Ii8+PC9zdmc+Cg=="
  },
  nVpw: function(e, t, i) {
    "use strict";
    var n = i("o0o1")
      , a = i.n(n)
      , o = i("yXPU")
      , s = i.n(o)
      , r = i("lwsE")
      , c = i.n(r)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("h3Yl")
      , d = i("cDf5")
      , A = i.n(d)
      , g = i("1aRO")
      , D = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : A()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , y = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : A()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , N = function e() {
      c()(this, e),
        this.newFavNum = 0
    };
    D([Object(g.a)("new_fav_num"), y("design:type", Number)], N.prototype, "newFavNum", void 0),
      N = D([Object(g.b)()], N);
    var p = i("ZojZ")
      , f = i("91CG")
      , h = i("9ljz")
      , j = i("TRC1");
    i.d(t, "a", function() {
      return I
    });
    var I = function() {
      function e() {
        c()(this, e)
      }
      var t;
      return M()(e, null, [{
        key: "getFavouriteManga",
        value: function(e, t, i) {
          var n = 0 < arguments.length && void 0 !== e ? e : 1
            , a = 1 < arguments.length && void 0 !== t ? t : 10
            , o = 2 < arguments.length && void 0 !== i ? i : j.a.FavouriteDesc;
          return f.a.post({
            url: "/twirp/bookshelf.v1.Bookshelf/ListFavorite",
            data: {
              page_num: n,
              page_size: a,
              order: o
            },
            type: l.a
          })
        }
      }, {
        key: "addFavourite",
        value: function(e) {
          return f.a.post({
            url: "/twirp/bookshelf.v1.Bookshelf/AddFavorite",
            data: {
              comic_ids: e.join(",")
            }
          })
        }
      }, {
        key: "hasFavourite",
        value: function(e) {
          return f.a.post({
            url: "/twirp/bookshelf.v1.Bookshelf/HasFavorite",
            data: {
              comic_id: e
            }
          })
        }
      }, {
        key: "removeFavourite",
        value: (t = s()(a.a.mark(function e(t) {
            var i;
            return a.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      f.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/DeleteFavorite",
                        data: {
                          comic_ids: t.slice(0, this.MaxRemovableCount).join(",")
                        }
                      });
                  case 2:
                    return (i = e.sent).error && p.a.error("追漫记录删除失败:", i.error),
                      e.abrupt("return", i);
                  case 5:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }, {
        key: "getInitInfo",
        value: function() {
          return f.a.post({
            url: "/twirp/user.v1.User/GetInitInfo",
            type: N
          })
        }
      }, {
        key: "getFavListOrder",
        value: function() {
          return parseInt(h.a.getItem(this.favOrderStorageKey))
        }
      }, {
        key: "setFavListOrder",
        value: function(e) {
          h.a.setItem(this.favOrderStorageKey, e.toString())
        }
      }]),
        e
    }();
    I.MaxRemovableCount = 20,
      I.favOrderStorageKey = "BilibiliManga:favListOrder"
  },
  "oD+a": function(e, t) {
    e.exports = "data:image/png;base64,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"
  },
  pfP6: function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHRpZmY6T3JpZW50YXRpb249IjEiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA3LTMxVDE4OjUzOjUzKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOC0wOVQxMTozMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOC0wOVQxMTozMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMWFhOTUy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"
  },
  pjcQ: function(e, t, i) {
    "use strict";
    var n = i("HxQE");
    i.n(n).a
  },
  q7j2: function(e, t, i) {},
  qXxY: function(e, t, i) {
    "use strict";
    var n = i("BeNJ");
    i.n(n).a
  },
  qYKv: function(e, t, i) {
    "use strict";
    var n = i("SX9C");
    i.n(n).a
  },
  qcRv: function(e, t, i) {},
  qhWt: function(e, t, i) {
    "use strict";
    var n = i("sTYj");
    i.n(n).a
  },
  r4XI: function(e, t) {
    e.exports = "data:image/png;base64,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UmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNzZGMUIwNkNFMDAxMUU5QkJFQ0JFOEFBMUI1MzIzQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzZGMUIwNUNFMDAxMUU5QkJFQ0JFOEFBMUI1MzIzQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4OEM1ODJGOENEODAxMUU5ODU1MEEwMTA1NzM5MDFEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4OEM1ODJGOUNEODAxMUU5ODU1MEEwMTA1NzM5MDFEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsD0CQ4AAAEZSURBVHja7N29EYJAFEZRdejBxC6sg0YIKcTQRqzDLkysAjV3ZHEG5VvODTWC41t+RnE7DMNGme3sAniCpyk1H9472j3/r+3667vXL+eTyat18j7Ka96ekzW68pk8JyyCJ3jwBE/wBA+e4M3b6w5FyV2K5JrCHRGxMW3Xr2rymrVsaNoHsOSesmOeY57gCR48wdPXZ8d7eLkdxgDhBQPCCwaEFwwILxgQXjAgvGBAeC7S9cNubdff4QXDwQuGgxcMBy8YDl4wHLxgOHgLbgwOnot0wdPkir4xvbavkVeFV8kJgGVTv6nkV07wLJuLXCarf3KTyYMneIIHT/AET/DgaSGN3mGp/SlCJk9/aeu/hEye4AneSnoIMACI7Uv5w3fEzAAAAABJRU5ErkJggg=="
  },
  "rNO/": function(e, t, i) {
    "use strict";
    var n = i("ZojZ");
    !function() {
      try {
        void 0 === window.DocumentTouch && (window.DocumentTouch = HTMLDocument)
      } catch (e) {
        n.a.error("Failed to apply Perfect Scrollbar polyfill:", e)
      }
    }()
  },
  rcyk: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return c
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("ZjbI")
      , c = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "execWindowOpen",
        value: function(e, t) {
          (t = "boolean" != typeof t || t) ? window.open(e) : window.location.href = e
        }
      }, {
        key: "goToClassifyPage",
        value: function(e) {
          var t = e.openInNewWindow
            , i = e.query
            , n = r.a.classify(i);
          this.execWindowOpen(n, t)
        }
      }, {
        key: "goToDetailPage",
        value: function(e) {
          var t = e.seasonId
            , i = e.openInNewWindow
            , n = e.query
            , a = r.a.detailPage(t, n);
          this.execWindowOpen(a, i)
        }
      }, {
        key: "goToReadPage",
        value: function(e) {
          var t = e.seasonId
            , i = e.episodeId
            , n = e.openInNewWindow
            , a = e.query
            , o = r.a.readerPage(t, i, a);
          this.execWindowOpen(o, n)
        }
      }, {
        key: "goToSearchPage",
        value: function(e) {
          var t = e.keyword
            , i = e.openInNewWindow
            , n = e.query
            , a = r.a.searchPage(t, n);
          this.execWindowOpen(a, i)
        }
      }, {
        key: "goAccountCenter",
        value: function(e) {
          var t = r.a.accountCenter({
            query: e.query
          });
          this.execWindowOpen(t, e.openInNewWindow)
        }
      }]),
        e
    }()
  },
  reI8: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return n
    }),
      i.d(t, "b", function() {
        return r
      });
    var n, a, o = i("lwsE"), s = i.n(o), r = function e() {
      s()(this, e)
    };
    r.Home = "/",
      r.Classify = "/classify",
      r.Detail = "/detail/mc",
      r.Reader = "/mc",
      r.Search = "/search",
      r.AccountCenter = "/account-center",
      r.Ranking = "/ranking",
      (a = n || (n = {})).None = "",
      a.MyLimitFreeCouponPage = "my-limited-free-coupon"
  },
  rm82: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return I
    });
    var n = i("o0o1")
      , a = i.n(n)
      , o = i("yXPU")
      , s = i.n(o)
      , r = i("lwsE")
      , c = i.n(r)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("cDf5")
      , d = i.n(l)
      , A = i("qQS4")
      , g = i("ZxM/")
      , D = i("+r91")
      , y = i("AMMt")
      , N = i("91CG")
      , p = i("ZojZ")
      , f = i("GdVg")
      , h = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , j = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , I = function() {
      function e() {
        c()(this, e)
      }
      var t;
      return M()(e, null, [{
        key: "getUserWalletInfo",
        value: function() {
          return N.a.post({
            url: "/twirp/user.v1.User/GetWallet",
            type: D.a
          })
        }
      }, {
        key: "refreshWalletData",
        value: (t = s()(a.a.mark(function e() {
            var t, i, n;
            return a.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      this.getUserWalletInfo();
                  case 2:
                    if (t = e.sent,
                      i = t.data,
                      n = t.error)
                      return y.a.error("钱包数据刷新失败，可能会影响您的使用，请稍后尝试刷新页面，非常抱歉 " + A.sad()),
                        p.a.error("钱包数据刷新失败:", n),
                        e.abrupt("return");
                    e.next = 9;
                    break;
                  case 9:
                    f.a.next(function() {
                      return i
                    });
                  case 10:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          })),
            function() {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }();
    h([Object(g.a)({
      isShowQuickLoginPanel: !1
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], I, "getUserWalletInfo", null),
      h([Object(g.a)({
        isShowQuickLoginPanel: !1
      }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], I, "refreshWalletData", null)
  },
  sTYj: function(e, t, i) {},
  sg5y: function(e, t, i) {
    "use strict";
    var n = i("/O4Y");
    i.n(n).a
  },
  skQq: function(e, t, i) {
    "use strict";
    i.d(t, "b", function() {
      return r
    }),
      i.d(t, "a", function() {
        return s
      });
    var n = i("26FU")
      , a = i("dC0D")
      , o = {
      theme: i("E7aQ").a.Light
    }
      , s = new n.a(function(e) {
        return e
      }
    )
      , r = s.pipe(Object(a.a)(function(e, t) {
      return t(e)
    }, o))
  },
  skzo: function(e, t, i) {},
  t5Pa: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "checkIsOldBrowser",
        value: function() {
          var e = navigator.userAgent
            , t = /Chrome\/[1-2]\d/.test(e)
            , i = /MSIE \d/.test(e)
            , n = /Firefox\/[1-2]/.test(e);
          return t || n || i
        }
      }]),
        e
    }()
  },
  tXh4: function(e, t, i) {
    "use strict";
    var n = i("Svax");
    i.n(n).a
  },
  tecp: function(e, t, i) {
    "use strict";
    var n = i("KqvJ");
    i.n(n).a
  },
  u7Bb: function(e, t, i) {
    "use strict";
    var n = i("kAyl");
    i.n(n).a
  },
  uQLG: function(e, t, i) {},
  uS9E: function(e, t, i) {
    "use strict";
    i.d(t, "c", function() {
      return y
    }),
      i.d(t, "a", function() {
        return f
      }),
      i.d(t, "b", function() {
        return N
      });
    var n = i("W8MJ")
      , a = i.n(n)
      , o = i("lwsE")
      , s = i.n(o)
      , r = i("cDf5")
      , c = i.n(r)
      , u = i("1aRO")
      , M = i("XGqN")
      , l = i("COaM")
      , d = i("6+LV")
      , A = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : c()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , g = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : c()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , D = function e() {
      s()(this, e),
        this.batchLimit = 0,
        this.amount = 0,
        this.originalGold = 0,
        this.payGold = 0,
        this.discountType = 0,
        this.discount = 0
    };
    A([Object(u.a)("batch_limit"), g("design:type", Number)], D.prototype, "batchLimit", void 0),
      A([Object(u.a)("amount"), g("design:type", Number)], D.prototype, "amount", void 0),
      A([Object(u.a)("original_gold"), g("design:type", Number)], D.prototype, "originalGold", void 0),
      A([Object(u.a)("pay_gold"), g("design:type", Number)], D.prototype, "payGold", void 0),
      A([Object(u.a)("discount_type"), g("design:type", Number)], D.prototype, "discountType", void 0),
      A([Object(u.a)("discount"), g("design:type", Number)], D.prototype, "discount", void 0),
      D = A([Object(u.b)()], D);
    var y = function() {
      function e() {
        s()(this, e),
          this.remainCoupon = 0,
          this.remainGold = 0,
          this.recommendCouponId = 0,
          this.recommendLimitedFreeCouponId = 0,
          this.remainLockedEpisodeCount = 0,
          this.autoPayGoldStatus = d.a.False,
          this.autoPayCouponsStatus = d.a.False,
          this.seasonId = 0,
          this.isLocked = !0,
          this.isAllowCoupons = !1,
          this.seasonDiscountType = l.d.None,
          this.seasonDiscount = 0,
          this.seasonOriginalGold = 0,
          this.seasonPayGold = 0,
          this.episodeDiscountType = M.c.None,
          this.episodeDiscount = 0,
          this.episodeOriginalGold = 0,
          this.episodePayGold = 0,
          this.bacthBuy = [],
          this.allowItem = !1,
          this._firstImageUrl = "",
          this._firstImageToken = ""
      }
      return a()(e, [{
        key: "firstImageUrl",
        get: function() {
          return this._firstImageToken && this._firstImageUrl ? "".concat(this._firstImageUrl, "?token=").concat(this._firstImageToken) : ""
        }
      }]),
        e
    }();
    A([Object(u.a)("remain_coupon"), g("design:type", Number)], y.prototype, "remainCoupon", void 0),
      A([Object(u.a)("remain_gold"), g("design:type", Number)], y.prototype, "remainGold", void 0),
      A([Object(u.a)("recommend_coupon_id"), g("design:type", Number)], y.prototype, "recommendCouponId", void 0),
      A([Object(u.a)("recommend_item_id"), g("design:type", Number)], y.prototype, "recommendLimitedFreeCouponId", void 0),
      A([Object(u.a)("remain_lock_ep_num"), g("design:type", Number)], y.prototype, "remainLockedEpisodeCount", void 0),
      A([Object(u.a)("auto_pay_gold_status"), g("design:type", Number)], y.prototype, "autoPayGoldStatus", void 0),
      A([Object(u.a)("auto_pay_coupons_status"), g("design:type", Number)], y.prototype, "autoPayCouponsStatus", void 0),
      A([Object(u.a)("comic_id"), g("design:type", Number)], y.prototype, "seasonId", void 0),
      A([Object(u.a)("is_locked"), g("design:type", Boolean)], y.prototype, "isLocked", void 0),
      A([Object(u.a)("allow_coupon"), g("design:type", Boolean)], y.prototype, "isAllowCoupons", void 0),
      A([Object(u.a)("discount_type"), g("design:type", Number)], y.prototype, "seasonDiscountType", void 0),
      A([Object(u.a)("discount"), g("design:type", Number)], y.prototype, "seasonDiscount", void 0),
      A([Object(u.a)("original_gold"), g("design:type", Number)], y.prototype, "seasonOriginalGold", void 0),
      A([Object(u.a)("remain_lock_ep_gold"), g("design:type", Number)], y.prototype, "seasonPayGold", void 0),
      A([Object(u.a)("ep_discount_type"), g("design:type", Number)], y.prototype, "episodeDiscountType", void 0),
      A([Object(u.a)("ep_discount"), g("design:type", Number)], y.prototype, "episodeDiscount", void 0),
      A([Object(u.a)("ep_original_gold"), g("design:type", Number)], y.prototype, "episodeOriginalGold", void 0),
      A([Object(u.a)("pay_gold"), g("design:type", Number)], y.prototype, "episodePayGold", void 0),
      A([Object(u.a)({
        name: "batch_buy",
        type: D
      }), g("design:type", Array)], y.prototype, "bacthBuy", void 0),
      A([Object(u.a)("allow_item"), g("design:type", Boolean)], y.prototype, "allowItem", void 0),
      A([Object(u.a)("remain_item"), g("design:type", Number)], y.prototype, "remainItem", void 0),
      A([Object(u.a)("first_image_url"), g("design:type", String)], y.prototype, "_firstImageUrl", void 0),
      A([Object(u.a)("first_image_token"), g("design:type", String)], y.prototype, "_firstImageToken", void 0),
      y = A([Object(u.b)()], y);
    var N, p, f = function e() {
      s()(this, e),
        this.id = 0,
        this.comicId = 0,
        this.comicTitle = "",
        this.hCover = "",
        this.sCover = "",
        this.vCover = "",
        this.boughtEpCount = 0,
        this.goldStatus = 0,
        this.couponStatus = 0,
        this.comicStatus = 0,
        this.lastOrd = 0,
        this.cTime = "",
        this.lastShortTitle = ""
    };
    A([Object(u.a)("id"), g("design:type", Number)], f.prototype, "id", void 0),
      A([Object(u.a)("comic_id"), g("design:type", Number)], f.prototype, "comicId", void 0),
      A([Object(u.a)("comic_title"), g("design:type", String)], f.prototype, "comicTitle", void 0),
      A([Object(u.a)("hcover"), g("design:type", String)], f.prototype, "hCover", void 0),
      A([Object(u.a)("scover"), g("design:type", String)], f.prototype, "sCover", void 0),
      A([Object(u.a)("vcover"), g("design:type", String)], f.prototype, "vCover", void 0),
      A([Object(u.a)("bought_ep_count"), g("design:type", Number)], f.prototype, "boughtEpCount", void 0),
      A([Object(u.a)("gold_status"), g("design:type", Number)], f.prototype, "goldStatus", void 0),
      A([Object(u.a)("coupon_status"), g("design:type", Number)], f.prototype, "couponStatus", void 0),
      A([Object(u.a)("comic_status"), g("design:type", Number)], f.prototype, "comicStatus", void 0),
      A([Object(u.a)("last_ord"), g("design:type", Number)], f.prototype, "lastOrd", void 0),
      A([Object(u.a)("ctime"), g("design:type", String)], f.prototype, "cTime", void 0),
      A([Object(u.a)("last_short_title"), g("design:type", String)], f.prototype, "lastShortTitle", void 0),
      f = A([Object(u.b)()], f),
      (p = N || (N = {}))[p.couponPrior = 1] = "couponPrior",
      p[p.closeAutoPurchase = 2] = "closeAutoPurchase",
      p[p.glodPrior = 3] = "glodPrior"
  },
  vXCh: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return p
    });
    var n = i("o0o1")
      , o = i.n(n)
      , a = i("yXPU")
      , s = i.n(a)
      , r = i("lwsE")
      , c = i.n(r)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("cDf5")
      , d = i.n(l)
      , A = i("1aRO")
      , g = i("COaM")
      , D = i("91CG")
      , y = function(e, t, i, n) {
      var a, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, i, n);
      else
        for (var r = e.length - 1; 0 <= r; r--)
          (a = e[r]) && (s = (o < 3 ? a(s) : 3 < o ? a(t, i, s) : a(t, i)) || s);
      return 3 < o && s && Object.defineProperty(t, i, s),
        s
    }
      , N = function(e, t) {
      if ("object" === ("undefined" == typeof Reflect ? "undefined" : d()(Reflect)) && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t)
    }
      , p = function() {
      function e() {
        c()(this, e)
      }
      var t;
      return M()(e, null, [{
        key: "searchManga",
        value: (t = s()(o.a.mark(function e(t) {
            var i, n, a = arguments;
            return o.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return i = 1 < a.length && void 0 !== a[1] ? a[1] : 1,
                      n = 2 < a.length && void 0 !== a[2] ? a[2] : 10,
                      e.abrupt("return", D.a.post({
                        url: "/twirp/comic.v1.Comic/Search",
                        data: {
                          key_word: t,
                          page_num: i,
                          page_size: n
                        },
                        type: f
                      }));
                  case 3:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }, {
        key: "getSearchSuggestion",
        value: function(e, t) {
          return D.a.post({
            url: "/twirp/comic.v1.Comic/SearchSug",
            data: {
              term: e,
              num: t
            }
          })
        }
      }, {
        key: "getSearchPlaceHolder",
        value: function(e) {
          var t = 0 < arguments.length && void 0 !== e ? e : 5;
          return D.a.post({
            url: "/twirp/comic.v1.Comic/Recommend",
            data: {
              JsonData: JSON.stringify([{
                pool_id: 100002,
                num: t
              }])
            },
            type: g.c
          })
        }
      }]),
        e
    }()
      , f = function e() {
      c()(this, e)
    };
    y([Object(A.a)({
      name: "list",
      type: g.c
    }), N("design:type", Array)], f.prototype, "list", void 0),
      y([Object(A.a)("total_page"), N("design:type", Number)], f.prototype, "totalPage", void 0),
      f = y([Object(A.b)()], f)
  },
  wLAv: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return c
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("hEH1")
      , c = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "sendEvent",
        value: function(e) {
          var t = e.spmId
            , i = e.msg
            , n = e.logId
            , a = e.event;
          r.b.sendEvent({
            reportConfig: {
              spmId: t,
              logId: n
            },
            msg: i,
            event: a
          })
        }
      }]),
        e
    }()
  },
  wsd6: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return r
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "setPageTitle",
        value: function(e) {
          document.querySelector("title").textContent = e
        }
      }]),
        e
    }()
  },
  xZf4: function(e, t, i) {
    "use strict";
    var n = i("6GB1");
    i.n(n).a
  },
  xaVA: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9IjMxIiBoZWlnaHQ9IjMxIiB4PSIuNSIgeT0iLjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZT0iIzk3OTc5NyIgb3BhY2l0eT0iMCIvPgogICAgPHBhdGggZmlsbD0iIzcwNzA3MCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS4wNTQ2ODc1LDE0LjIyMjY1NjIgTDUuMDYyNSw3LjI3NzM0Mzc1IEM2LjM1Njc3MDgzLDUuNjM2NzE4NzUgNy45NjA5Mzc1LDQuMzQ3MDA1MjEgOS44NzUsMy40MDgyMDMxMiBDMTEuNzg5MDYyNSwyLjQ2OTQwMTA0IDEzLjgzMDcyOTIsMiAxNiwyIEMxOC41MTU2MjUsMiAyMC44NDQ0MDEsMi42MTk3OTE2NyAyMi45ODYzMjgxLDMuODU5Mzc1IEMyNS4xMjgyNTUyLDUuMDk4OTU4MzMgMjYuODE5MDEwNCw2Ljc2NjkyNzA4IDI4LjA1ODU5MzcsOC44NjMyODEyNSBMMTYuNjI4OTA2Miw4Ljg2MzI4MTI1IEMxNi40MjgzODU0LDguODQ1MDUyMDggMTYuMjE4NzUsOC44MzU5Mzc1IDE2LDguODM1OTM3NSBDMTQuMzU5Mzc1LDguODM1OTM3NSAxMi44OTE5MjcxLDkuMzQxNzk2ODggMTEuNTk3NjU2MiwxMC4zNTM1MTU2IEMxMC4zMDMzODU0LDExLjM2NTIzNDQgOS40NTU3MjkxNywxMi42NTQ5NDc5IDkuMDU0Njg3NSwxNC4yMjI2NTYyIFogTTIxLjAwMzkwNjIsMTAuODg2NzE4OCBMMjkuMDQyOTY4OCwxMC44ODY3MTg4IEMyOS42ODA5ODk2LDEyLjUyNzM0MzggMzAsMTQuMjMxNzcwOCAzMCwxNiBDMzAsMTcuODc3NjA0MiAyOS42MzU0MTY3LDE5LjY3NzczNDQgMjguOTA2MjUsMjEuNDAwMzkwNiBDMjguMTc3MDgzMywyMy4xMjMwNDY5IDI3LjE5NzI2NTYsMjQuNjA4NzI0IDI1Ljk2Njc5NjksMjUuODU3NDIxOSBDMjQuNzM2MzI4MSwyNy4xMDYxMTk4IDIzLjI2NDMyMjksMjguMTA0MTY2NyAyMS41NTA3ODEyLDI4Ljg1MTU2MjUgQzE5LjgzNzIzOTYsMjkuNTk4OTU4MyAxOC4wNDE2NjY3LDI5Ljk4MTc3MDggMTYuMTY0MDYyNSwzMCBMMjEuODc4OTA2MiwyMC4wNzQyMTg4IEMyMi43MzU2NzcxLDE4Ljg1Mjg2NDYgMjMuMTY0MDYyNSwxNy40OTQ3OTE3IDIzLjE2NDA2MjUsMTYgQzIzLjE2NDA2MjUsMTMuOTk0NzkxNyAyMi40NDQwMTA0LDEyLjI5MDM2NDYgMjEuMDAzOTA2MiwxMC44ODY3MTg4IFogTTEwLjkxNDA2MjUsMTYgQzEwLjkxNDA2MjUsMTQuNTk2MzU0MiAxMS40MTA4MDczLDEzLjM5Nzc4NjUgMTIuNDA0Mjk2OSwxMi40MDQyOTY5IEMxMy4zOTc3ODY1LDExLjQxMDgwNzMgMTQuNTk2MzU0MiwxMC45MTQwNjI1IDE2LDEwLjkxNDA2MjUgQzE3LjQwMzY0NTgsMTAuOTE0MDYyNSAxOC42MDIyMTM1LDExLjQxMDgwNzMgMTkuNTk1NzAzMSwxMi40MDQyOTY5IEMyMC41ODkxOTI3LDEzLjM5Nzc4NjUgMjEuMDg1OTM3NSwxNC41OTYzNTQyIDIxLjA4NTkzNzUsMTYgQzIxLjA4NTkzNzUsMTcuNDAzNjQ1OCAyMC41ODkxOTI3LDE4LjYwMjIxMzUgMTkuNTk1NzAzMSwxOS41OTU3MDMxIEMxOC42MDIyMTM1LDIwLjU4OTE5MjcgMTcuNDAzNjQ1OCwyMS4wODU5Mzc1IDE2LDIxLjA4NTkzNzUgQzE0LjU5NjM1NDIsMjEuMDg1OTM3NSAxMy4zOTc3ODY1LDIwLjU4OTE5MjcgMTIuNDA0Mjk2OSwxOS41OTU3MDMxIEMxMS40MTA4MDczLDE4LjYwMjIxMzUgMTAuOTE0MDYyNSwxNy40MDM2NDU4IDEwLjkxNDA2MjUsMTYgWiBNMTcuOTE0MDYyNSwyMi45MTc5Njg4IEwxMy45MjE4NzUsMjkuODM1OTM3NSBDMTEuNjk3OTE2NywyOS41MDc4MTI1IDkuNjc0NDc5MTcsMjguNjk2NjE0NiA3Ljg1MTU2MjUsMjcuNDAyMzQzOCBDNi4wMjg2NDU4MywyNi4xMDgwNzI5IDQuNTk3NjU2MjUsMjQuNDU4MzMzMyAzLjU1ODU5Mzc1LDIyLjQ1MzEyNSBDMi41MTk1MzEyNSwyMC40NDc5MTY3IDIsMTguMjk2ODc1IDIsMTYgQzIsMTMuNTM5MDYyNSAyLjYwMTU2MjUsMTEuMjUxMzAyMSAzLjgwNDY4NzUsOS4xMzY3MTg3NSBMOS41MTk1MzEyNSwxOS4wMzUxNTYyIEMxMC4xMDI4NjQ2LDIwLjI3NDczOTYgMTAuOTc3ODY0NiwyMS4yNzI3ODY1IDEyLjE0NDUzMTMsMjIuMDI5Mjk2OSBDMTMuMzExMTk3OSwyMi43ODU4MDczIDE0LjU5NjM1NDIsMjMuMTY0MDYyNSAxNiwyMy4xNjQwNjI1IEMxNi42NTYyNSwyMy4xNjQwNjI1IDE3LjI5NDI3MDgsMjMuMDgyMDMxMiAxNy45MTQwNjI1LDIyLjkxNzk2ODggWiIvPgogIDwvZz4KPC9zdmc+Cg=="
  },
  y7kT: function(e, t, i) {},
  yGUt: function(e, t, i) {
    "use strict";
    var n = i("aoNH");
    i.n(n).a
  },
  yH7B: function(e, t, i) {
    "use strict";
    var n, a, o, s, r, c;
    i.d(t, "c", function() {
      return n
    }),
      i.d(t, "b", function() {
        return r
      }),
      i.d(t, "a", function() {
        return o
      }),
      (a = n || (n = {}))[a.Success = 0] = "Success",
      a[a.NoEnoughCoupon = 1] = "NoEnoughCoupon",
      a[a.NoEnoughGold = 2] = "NoEnoughGold",
      a[a.AutoPurchaseSettingHasBeenChanged = 3] = "AutoPurchaseSettingHasBeenChanged",
      a[a.PayAmountMayChanged = 4] = "PayAmountMayChanged",
      a[a.CanNotPurchaseViaCoupon = 5] = "CanNotPurchaseViaCoupon",
      (s = o || (o = {}))[s.On = 1] = "On",
      s[s.Off = 2] = "Off",
      (c = r || (r = {}))[c.AutoPurchase = 1] = "AutoPurchase",
      c[c.ByCoupons = 2] = "ByCoupons",
      c[c.ByGold = 3] = "ByGold",
      c[c.ByLimitedFreeCard = 4] = "ByLimitedFreeCard"
  },
  yhYn: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return A
    });
    var n = i("lwsE")
      , a = i.n(n)
      , o = i("W8MJ")
      , s = i.n(o)
      , r = i("ZcLj")
      , c = i("E7aQ")
      , u = i("9ljz")
      , M = i("skQq")
      , l = "BilibiliManga:Theme"
      , d = c.a.Light
      , A = function() {
      function e() {
        a()(this, e)
      }
      return s()(e, null, [{
        key: "switchTheme",
        value: function(t, e) {
          var i = !(1 < arguments.length && void 0 !== e) || e;
          if ("server" !== Object({
            APP_NAME: "哔哩哔哩漫画",
            AUTHOR: "LancerComet",
            DOWNLOAD_PAGE: "//manga.bilibili.com/eden/app-download.html",
            NODE_ENV: "production",
            IS_MOCK: void 0,
            THEME_COLOR: "#fb7299",
            VERSION: "1.1.0"
          }).VUE_ENV) {
            var n = document.querySelector("html");
            r.a.removeClass(n, "theme-" + d),
              r.a.addClass(n, "theme-" + t),
              d = t,
              M.a.next(function(e) {
                return Object.assign({}, e, {
                  theme: t
                })
              }),
            i && u.a.setItem(l, t)
          }
        }
      }, {
        key: "switchToStoredTheme",
        value: function() {
          var e = u.a.getItem(l);
          e && this.switchTheme(e)
        }
      }, {
        key: "attachFunctionToGlobal",
        value: function() {
          var t = this;
          window.switchToTheme = function(e) {
            t.switchTheme(e)
          }
        }
      }]),
        e
    }()
  },
  ys8D: function(e, t) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+bmF2X2Nsb3NlX2ljbzwvdGl0bGU+PHBhdGggZD0iTTEyLDEwLjg3bDUuNDMtNS40NGEuODEuODEsMCwwLDEsMS4xNCwxLjE0TDEzLjEzLDEybDUuNDQsNS40M2EuODEuODEsMCwwLDEtMS4xNCwxLjE0TDEyLDEzLjEzLDYuNTcsMTguNTdhLjgxLjgxLDAsMCwxLTEuMTQtMS4xNEwxMC44NywxMiw1LjQzLDYuNTdBLjgxLjgxLDAsMCwxLDYuNTcsNS40M1oiIHN0eWxlPSJmaWxsOiM2YzcyN2UiLz48L3N2Zz4="
  },
  yyZF: function(e, t, i) {},
  z8gV: function(e, t, i) {
    "use strict";
    i.d(t, "a", function() {
      return g
    });
    var n = i("o0o1")
      , a = i.n(n)
      , o = i("yXPU")
      , s = i.n(o)
      , r = i("lwsE")
      , c = i.n(r)
      , u = i("W8MJ")
      , M = i.n(u)
      , l = i("aZbF")
      , d = i("91CG")
      , A = i("ZojZ")
      , g = function() {
      function e() {
        c()(this, e)
      }
      var t;
      return M()(e, null, [{
        key: "getReadHistory",
        value: function(e, t) {
          var i = 0 < arguments.length && void 0 !== e ? e : 1
            , n = 1 < arguments.length && void 0 !== t ? t : 10;
          return d.a.post({
            url: "/twirp/bookshelf.v1.Bookshelf/ListHistory",
            data: {
              page_num: i,
              page_size: n
            },
            type: l.a
          })
        }
      }, {
        key: "setReadHistory",
        value: function(e, t) {
          return d.a.post({
            url: "/twirp/bookshelf.v1.Bookshelf/AddHistory",
            data: {
              comic_id: e,
              ep_id: t
            }
          })
        }
      }, {
        key: "removeReadHistory",
        value: (t = s()(a.a.mark(function e(t) {
            var i;
            return a.a.wrap(function(e) {
              for (; ; )
                switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2,
                      d.a.post({
                        url: "/twirp/bookshelf.v1.Bookshelf/DeleteHistory",
                        data: {
                          comic_ids: t.slice(0, this.MaxRemovableCount).join(",")
                        }
                      });
                  case 2:
                    return (i = e.sent).error && A.a.error("阅读记录删除失败:", i.error),
                      e.abrupt("return", i);
                  case 5:
                  case "end":
                    return e.stop()
                }
            }, e, this)
          })),
            function(e) {
              return t.apply(this, arguments)
            }
        )
      }]),
        e
    }();
    g.MaxRemovableCount = 20
  }
});
