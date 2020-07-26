// pages/music-player/music-player.js
var hit = require('../../data/hit-songs')
var songs = getApp().globalData.songs
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: [],
    hit: hit.dataList,
    src: "/assets/playMusic.png",
    times: [],
    lyrics: []
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
  handletoggle(event){
    console.log(event.currentTarget.dataset)
    var src = event.currentTarget.dataset;
    if (src="/assets/playMusic.png"){
      this.setData({
        src: "/assets/stop.png"
      })
    };
  },
  parseLyric(lyric){
    var array = lyric.split("\n");
    var lyrics = [];
    var times = [];
    array.forEach(element => {
      //歌词解析
      var lyric = element.split("]");
      if (lyric.length == 1) return true
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
  }
})