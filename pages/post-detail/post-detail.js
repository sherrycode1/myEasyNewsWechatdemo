import {
  postList
} from "../data/data.js";
const app = getApp()

// 小程序的缓存 locastorage
Page({
  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    // 不做数据绑定就加_
    _pid: null,
    _postColllected: {},

  },
  methods: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._pid = options.pid
    let postData = postList[options.pid]
    // 读storage里面保存的collected的状态--一组
    let postsCollected = wx.getStorageSync('posts_collected')
    this.data._postColllected = postsCollected

    // 当前文章的是否收藏的状态
    const collected = postsCollected[this.data._pid]

    this.setData({
      postData,
      // 收藏状态赋值回去
      collected
    })

  },
  onCollect(event) {
    const postsCollected = this.data._postColllected
    console.log(postsCollected);
    // 缓存的状态改变了，取反，并没覆盖
    postsCollected[this.data._pid] = !this.data.collected
    wx.setStorageSync('posts_collected', postsCollected)
    this.setData({
      // 数据绑定的同时相当于
      // this.data.collected=!this.data.collected
      collected: !this.data.collected
    })
    // 轻提示
    wx.showToast({
      title: this.data.collected ? '收藏成功' : '取消收藏',
    })
    // 模态框
    // wx.showModal({
    //   title:'世界上有人不喜欢草莓吗？',
    //   cancelText:'没有',
    //   confirmText:"真的没有",
    //   success(){
    //     console.log(111);
    //   }
    // })
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

  }
})