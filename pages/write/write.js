//jihuo.js
//获取应用实例
var app = getApp()
Page({
  data: {
    date: "",
    liushuih: "",
    chima: "",
    shishu: "",
    userInfo: {}
  },
  onShow: function () {
    var now = new Date();
    this.setData({
      date: now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate(),
      userInfo:app.globalData.user
    });
  },
  formSubmit: function (e) {
    var that = this;
    wx.request({
      url: 'http://116.62.196.228/api/entry/save',
      data: {
        data: e.detail.value
      },
      success: function (res) {
        that.setData({
          liushuih: "",
          chima: "",
          shishu: "",
        });
      }
    });
  }
})
