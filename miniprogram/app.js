//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cake-6dd9fc',
      traceUser: true
    })
    const db = wx.cloud.database()
    const that = this
    db.collection('flag').get({
      success(res) {
        that.globalData.flag = res.data[0].flag
      }
    })
  },
  globalData: {

  }
})