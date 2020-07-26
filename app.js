// 注册小程序示例
App({
  // 生命周期函数  后台存活2小时，也有后台存活5分钟说法
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      // 异步调用
      success: function(res){
        // console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // options为小程序进入场景，其中的scene为场景编号
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  // 定义全局数据
  globalData: {
    color: "#31C27C",
    songs: require('./data/songs').dataList
  }
})
