//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cake-1a27d7',
      traceUser: true
    })
  },
  globalData: {

  }
})