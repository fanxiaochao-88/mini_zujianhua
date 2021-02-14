// pages/btn/btn.js
Page({
  handleItemClick(event){
    console.log(event);
    const dataset=event.currentTarget.dataset
    const title=dataset.item
    const index=dataset.index
    console.log(title,index);
  }
  ,
  handleEventEnd(event){
    console.log('------------------',event);
  },
  handleEventClick(event){
    console.log('+++++++++++++++++',event);
  },
  handleTouchStart(){
    console.log('handleTouchStart');
  },
  handleTouchMove(){
    console.log('handleTouchMove');
  },
  handleTouchEnd(){
    console.log('handleTouchEnd');
  },
  handleTap(){
    console.log('handleTap');
  },
  handleLongPress(){
    console.log('handleLongPress');
  },
  handleBtnClick(){
    console.log('按钮点击了');
  },

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','鞋子','裤子']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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