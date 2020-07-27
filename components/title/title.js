Component({
  // 初始化数据
  data: {

  },
  properties: {
    title: String,
    more: String,
    color: String,
  },
  methods: {
    toMore(){
      this.triggerEvent("jump")
    }
  }
  
})