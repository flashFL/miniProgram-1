// pages/video/video.js
var rec = require('../../data/card')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:[
      rec.dataList,
      []
    ],
    currentIndex: 0,
    titles: ['推荐', 'MV']
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
    console.log("下拉刷新！")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title: "QQ音乐 让生活充满音乐"
    }
  },
  handleTabClick(event){
    const index = event.detail.index;
    this.setData({
      currentIndex: index
    })

  }
})