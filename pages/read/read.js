//获取应用实例
var app = getApp()
Page({
  data: {
    data: {},
    row: {}
  },
  onShow: function () {
    var that = this;
    var searchData = {
      Id: "",
      UserId: "",
      WX_OpenID: "",
      Date: "",
      LiuShuiH: "",
      ChiMa: "",
      ShiShu: "",
      BeiZhu: ""
    }
    wx.request({
      url: 'http://116.62.196.228/api/entry/querylist',
      data: {
        search: JSON.stringify(searchData),
        page: 1,
        rows: 10
      },
      success: function (res) {
        that.setData({
          data: res.data,
          row: res.data.rows[0],
        })
      }
    })
  },
  // formSubmit: function (e) {
  //   var that = this;
  //   wx.request({
  //     url: 'http://116.62.196.228/api/entry/save',
  //     data: {
  //       data: e.detail.value
  //     },
  //     success: function (res) {
  //       that.setData({
  //         liushuih: "",
  //         chima: "",
  //         shishu: "",
  //       });
  //     }
  //   });
  // }
})
