Component({
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleActive(event){
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      const data = {index: this.data.currentIndex};
      this.triggerEvent("tabclick", data, {})
    }
  }
})