//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    var that=this;
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost/wechat/getsession',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
        wx.getUserInfo({
          success: function (res) {
            //更新数据
            that.setData({
              userInfo: res.userInfo
            })
          }
        })
      }
    });

  }
})
