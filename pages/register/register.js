Page({

  data: {
    userInfo: {}
  },

  onLoad: function () {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost:6407/api/wechat/1',
            data: {
              code: res.code
            },
            success: function (res) {
              if (res.data == "新用户") {

              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})