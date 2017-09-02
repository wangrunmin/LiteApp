//获取应用实例
var app = getApp()
Page({
  onLoad: function () {
    var that = this;
    //打开微信授权请求
    wx.login({
      //接口调用失败
      fail: function (res) {
        wx.redirectTo({
          url: '/pages/loginfaild/loginfaild?msg=' + "微信接口调用失败&res=" + res,
        })
      },
      //接口调用成功，微信返回code，使用code获取openid
      success: function (res) {
        if (res.code) {
          //发起网络请求使用code换取openid
          wx.request({
            url: 'http://116.62.196.228/api/wechat/getsession',
            data: {
              code: res.code
            },
            success: function (res) {
              if (res.data.msg == "新用户") {
                wx.switchTab({
                  url: '/pages/user/user',
                  success: function () {
                    app.globalData.user = res.data.res;
                  }
                })
              }
              else if (res.data.msg == "老用户") {
                //理应再判断是否为管理员，但是接口没写...
                wx.switchTab({
                  url: '/pages/write/write',
                  success: function () {
                    app.globalData.user = res.data.res;
                  }
                })
              }
              else {
                wx.redirectTo({
                  url: '/pages/loginfaild/loginfaild?msg=' + "服务器错误，可能是绑定微信OpenID失败&res=" + res.data,
                })
              }
            },
            fail: function (res) {
              wx.redirectTo({
                url: '/pages/loginfaild/loginfaild?msg=' + "服务器无法访问&res=" + res,
              })
            }
          })
        } else {
          wx.redirectTo({
            url: '/pages/loginfaild/loginfaild?msg=' + "获取微信登录态失败&res=" + res.errMsg,
          })
        }
      }
    });
  }
})
