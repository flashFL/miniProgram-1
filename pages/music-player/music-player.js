// pages/music-player/music-player.js
var hit = require('../../data/hit-songs')
var songs = getApp().globalData.songs
Page({

  /**
   * 页面的初始数据
   */
  data: {
    action: {
      method: "play"
    },
    status: "play",
    song: [],
    hit: hit.dataList,
    src: "/assets/playMusic.png",
    times: [],
    lyrics: [],
    currentIndex: 0,
    updistance: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      song: songs[options.index]
    }),
    wx.request({
      url: 'http://music.163.com/api/song/media?id=' + options.id,
      success: (res) => {
        var lyric = res.data.lyric;
        this.parseLyric(lyric);
        console.log(this.data.lyrics, this.data.times)
      }
    })
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

  },
  playOrPause(event){
    const status = this.data.status;
    if (status == "play"){
      this.setData({
        action: {
          method: "pause"
        },
        status: "pause",
        src: "/assets/stop.png"
      })
    } else {
      this.setData({
        action: {
          method: "play"
        },
        status: "play",
        src: "/assets/playMusic.png"
      })
    }
  },
  parseLyric(lyric){
    var array = lyric.split("\n");
    var lyrics = [];
    var times = [];
    array.forEach(element => {
      //歌词解析
      var lyric = element.split("]");
      if (lyric.length === 1) return true
      lyrics.push(lyric[1])

      // [00:44.68]时间解析
      var timeReg = /\[((\d*):(\d*\.\d*))\]/
      var res = timeReg.exec(element);  //00:44.68
      if (res == null) return true
      var min = parseInt(res[2]) * 60;
      var sec = parseFloat(res[3]);
      var time = parseFloat(Number(min + sec).toFixed(2));
      times.push(time);
    });
    this.setData({
      lyrics: lyrics,
      times: times
    })
  },

  play(e){
    const currentTime = parseFloat((e.detail.currentTime).toFixed(2));
    const times = this.data.times;
    for (let index = this.data.currentIndex; index < times.length; index++) {
      if (currentTime >= times[index]){
        if (this.data.currentIndex !== index){
          var updistance = this.data.updistance;
          this.setData({
            currentIndex: index,
            updistance: (updistance - 60)
          })
          break
        }
      }
    }
  }

})