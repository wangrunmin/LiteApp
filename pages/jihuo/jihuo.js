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
  onLoad: function () {
    var that = this;
    var now=new Date();
    this.setData({
      date: now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate(),
    });
    
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost:61537/api/wechat/getsession',
            data: {
              code: res.code
            },
            success: function (res) {
              if (res.data.msg == "新用户") {
                wx.redirectTo({
                  url: '/pages/register/register?res=' + JSON.stringify(res.data.res)
                })
              }
              else if (res.data.msg == "老用户") {
                //理应再判断是否为管理员，但是接口没写...
                that.setData({
                  userInfo: res.data.res
                });
                console.log(res.data.res);
              }
              else {
                wx.redirectTo({
                  url: '/pages/loginfaild/loginfaild?msg=' + "绑定微信失败&res=" + res,
                })
              }
            }
          })
        } else {
          wx.redirectTo({
            url: '/pages/loginfaild/loginfaild?msg=' + "获取微信登录态失败&res=" + res,
          })
        }
      }
    });
  },
  formSubmit: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:61537/api/entry/save',
      data: {
        data: e.detail.value
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          date: "",
          liushuih: "",
          chima: "",
          shishu: "",
        });
      }
    });
  },
  formReset: function () {
    this.setData({
      date: "",
      liushuih: "",
      chima: "",
      shishu: "",
    });
  }
})
