// components/testcomponents/testComponents.js
Component({
    options:{
        multipleSlots:true
    },
    properties:{
        getMsg:{
            type: String,
            value: 'default value',
        }
    },
    /**
     * 页面的初始数据
     */
    data: {

    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
        attached: function () {
            console.log("组件-attached")
         },
        moved: function () {
            console.log("组件-moved")
         },
        detached: function () { 
            console.log("组件-detached")
        },
      },
      pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            console.log("组件页面-show")
         },
        hide: function () {
            console.log("组件页面-hide")
         },
        resize: function () {
            console.log("组件页面-resize ")
         },
      },
    methods:{
        changeMsg(){
            console.log(this)
            this.setData({getMsg:this.properties.getMsg + '1'})
        },
        myEvent(e){
            console.log(111)
            console.log(e)
            var myEventDetail = {} // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('myevent', {a:1}, 2)
        }
    }
})