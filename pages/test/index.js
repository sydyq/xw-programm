Page({

  /**
   * 页面的初始数据
   */
  data: {
    zero:0,
    "msg":"msgShow",
    arr:['a','b','c'],
    obj:{a:"a",b:"b"},
    checked:false,
    a1:1,
    a2:2,
    a3:3,
    templateObj:{
        name:"templateA"
    },
    col:'#fff'
  },
  bindgap(e){
      console.log(e)
    console.log("我是点击事件")
  },
  bindTouchStart(){
      console.log("touchStart")
  },
  myEvent(e){
      console.log("我是子组件触发的事件")
      console.log(e)
  },
  goEvent(){
      wx.navigateTo({
        url: '/pages/event/event',
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("page-onload")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("page-onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("page-onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("page-onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("page-onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("page-onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("page-onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("page-onShareAppMessage")
  }
})