var app = getApp();
Page({
  data: {
    userInfo: {},
    NameisNullOrEmpty: false
  },
  onShow: function () {
    var name = app.globalData.user.xingming;
    var nameisempty = false;
    if (name == null || name == '') {
      nameisempty = true;
    }
    this.setData({
      userInfo: app.globalData.user,
      NameisNullOrEmpty:nameisempty
    })
  },
  formSubmit: function (e) {
    wx.request({
      url: 'http://116.62.196.228/api/user/save',
      data: {
        data: e.detail.value
      },
      success: function (res) {
        wx.reLaunch({
          url: '/pages/load/load',
        })
      },
      fail: function (res) {

      }
    });
  }
})