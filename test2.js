const a = () => {
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
  }])
}