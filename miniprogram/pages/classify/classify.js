// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    const that = this
    const db = wx.cloud.database()
    db.collection('classify').doc(options.id).get({
      success(res) {
        that.setData({
          imgUrl: res.data.url
        })
      }
    })
    const _ = db.command
    db.collection('conect').where({
      parid: options.id
    }).get({
      success(res) {
        let arr = []
        res.data.map(item => {
          arr.push(item.id)
        })
        
        db.collection('list').where({
          _id: _.in(arr)
        }).get({
          success(ress) {
            wx.hideLoading()
            that.setData({
              listData: ress.data
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})