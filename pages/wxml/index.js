
// pages/wxml/index.js
// { "enablePullDownRefresh": true }
Page({
  onPullDownRefresh: function () {

    // 用户触发了下拉刷新操作

    // 拉取新数据重新渲染界面

    // wx.stopPullDownRefresh() // 可以停止当前页面的下拉刷新。

  },
  onReachBottom: function () {

    // 当界面的下方距离页面底部距离小于100像素时触发回调

  },
  request:()=>{
    console.log("hello")
    wx.request({

      url: 'https://www.baidu.com',

      success: function (res) {

        console.log(res)// 服务器回包信息

      }

    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    loading: false

  },
  tap: function () {

    // 把按钮的loading状态显示出来

    this.setData({

      loading: true

    })
    wx.showToast({ // 显示Toast

      title: '请稍等。',

      icon: 'success',

      duration: 1500

    })
     wx.hideToast() // 隐藏Toast

    wx.showModal({

      title: '标题',

      content: '告知当前状态，信息和解决方法',

      confirmText: '主操作',

      cancelText: '次要操作',

      success: function (res) {

        if (res.confirm) {

          console.log('用户点击主操作')

        } else if (res.cancel) {

          console.log('用户点击次要操作')

        }

      }

    })

    // 接着做耗时的操作

  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ msg: 'Hello World' })
    

  },
  
/*
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

  }
})