//获取应用实例
var app = getApp()
Page({
  data: {
    data: {},
    searchData: {
      Id: "",
      UserId: "",
      WX_OpenID: "",
      Date: "",
      LiuShuiH: "",
      ChiMa: "",
      ShiShu: "",
      BeiZhu: ""
    }
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://116.62.196.228/api/entry/querylist',
      data: {
        search: JSON.stringify(this.data.searchData),
        page: 1,
        rows: 10
      },
      success: function (res) {
        that.setData({
          data: res.data,
        })
      }
    })
  },
  queryListByLiuShuiH: function (event) {
    this.setData({
      searchData: {
        LiuShuiH: event.detail.value
      }
    });
    this.onShow();
  }
})
