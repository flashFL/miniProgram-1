Component({
  properties: {
    title: String,
    top: Array,
    times: String
  },
  pageLifetimes: {
    
  },
  methods: {
    jump(){
      this.triggerEvent("jump")
    }
  }
})