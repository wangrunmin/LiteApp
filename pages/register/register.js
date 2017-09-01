Page({

  data: {
    userInfo: {}
  },

  onLoad: function (option) {
    var res=JSON.parse(option.res);
    this.setData({
      userInfo:res,
    })
    console.log(res);
  },
  formSubmit: function (e) {
    wx.request({
      url: 'http://localhost:61537/api/user/save',
      data:{
        data: e.detail.value
      },
      success:function(res){
        alert(res.data)
      }
    });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})