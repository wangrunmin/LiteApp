//获取应用实例
var app = getApp()
Page({
  data: {
    msg: "",
    res: {}
  },
  onLoad: function (option) {
    this.setData({
      msg: option.msg,
      res: option.res
    })
  },
})
