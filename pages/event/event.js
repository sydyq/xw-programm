// pages/event/event.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checkboxBool:false
    },
    bindClick(e){
        console.log("普通事件绑定")
        console.log(e)
    },
    handleTap1(){
        console.log("handleTap1")
    },
    handleTap2(){
        console.log("handleTap2")
    },
    handleTap3(){
        console.log("handleTap3")
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