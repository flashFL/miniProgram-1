// components/musicList/musicList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    number: Number,
    list:{
      type: JSON,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    data: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpToPlayer(event){
      const data = event.currentTarget.dataset.data;
      wx.navigateTo({
        url: '/pages/music-player/music-player',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { data: data })
        }
      })
      }
  }
})
