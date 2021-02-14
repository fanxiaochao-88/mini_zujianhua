// pages/wxml/wxml.js
Page({
  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleBtn(){
    this.setData({
      isActive:!this.data.isActive
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    firstName:'kobe',
    lastName:'brant',
    age:12,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    movies:['海王','海贼王','海尔兄弟'],
    price:25.666666,
    time:new Date()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
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