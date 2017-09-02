var app=getApp();
Page({
  data: {
    userInfo: {}
  },
  onShow: function () {
    this.setData({
      userInfo:app.globalData.user
    })
    console.log(this.data.userInfo);
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
      }
    });
  }
})