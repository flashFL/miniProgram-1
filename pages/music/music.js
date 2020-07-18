// pages/music/music.js
// getApp()获取App()产生的示例对象
const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)

// 注册页面示例
// 每个页面也有初始化数据、生命周期函数、事件监听
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const _this = this 
    // 上面这个方法可解决success中this指向问题，将this.data改为_this.data
    wx.request({
      url: 'url',
      // es6中的箭头函数中的this一层层往上找，如果使用es5语法，即function(){},this指向为undefined
      success: (res) => {
        this.setData({
          list: res
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成，在onshow后执行
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
   * 生命周期函数--监听页面卸载，在页面跳转后再次按返回键执行，此时被跳转页面将被销毁，a->b，b->a，b被销毁
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
    console.log("到底啦！")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})