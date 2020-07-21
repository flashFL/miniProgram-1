Component({

  /**
   * 组件和页面之间样式相互影响
   * isolated 不影响
   * apply—shared 页面样式影响组件样式
   * shared 相互影响
   */
  options: {
    styleIsolation: "isolated"
  },

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  methods: {
    searchBarTouch(event){
      // var offsetLeft = event.currentTarget.offsetLeft;
      // var offsetTop = event.currentTarget.offsetTop;
      // console.log(event, offsetLeft, offsetTop)
      wx.navigateTo({
        url: '/pages/search/search',
      })
    }
  }

})