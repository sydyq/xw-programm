// pages/basicComponents/basicComponents.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        moveObj: {
            direction: 'all',
            x: 20,
            y: 20
        },
        pageContainerShow: false,
        swiperObj:{
            autoplay:true,
            interval:3000,
            circular:true,
            colorArr:["#2db7f5","#19be6b","#ff9900","#ed4014"]
        }
    },
    changePageContainer() {
        this.setData({
            pageContainerShow: true
        })
    },
    goFormComponent(){
        wx.navigateTo({
          url: '/pages/formComponents/formComponents',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})