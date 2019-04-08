//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cake-6dd9fc',
      traceUser: true
    })
  },
  globalData: {

  }
})