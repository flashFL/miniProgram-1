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
    // 0:显示; 1:隐藏
    hidden: 1
  },
  properties: {
    placeholder: String,
  },

  methods: {
    focus(){
      this.setData({
        hidden: 0
      })
    },
    blur(){
      this.setData({
        hidden: 1
      })
    }
  }

})