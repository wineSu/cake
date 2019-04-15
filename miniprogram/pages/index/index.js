const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    const db = wx.cloud.database()
    const that = this
    wx.showLoading({
      title: '加载中'
    })
    db.collection('banner').get({
      success(res){
        that.setData({
          imgUrls: res.data
        })
      }
    })
    db.collection('recommend').get({
      success(res) {
        that.setData({
          recommend: res.data[0]
        })
      }
    })
    db.collection('cakes').get({
      success(res) {
        console.log(res.data)
        that.setData({
          cakes: res.data
        })
      }
    })
    db.collection('cooffe').get({
      success(res) {
        that.setData({
          cooffe: res.data
        })
      }
    })
    db.collection('food').get({
      success(res) {
        wx.hideLoading()
        that.setData({
          food: res.data
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