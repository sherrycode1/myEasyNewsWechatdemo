// pages/details/detail.js
import { postList } from "../data/data.js";
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    postList
  },
  methods:{
    
  },
  onJumpToDetail(event){
    // 页面与页面直接数据通信
   const pid =  event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid='+pid,
    })
    // console.log(event);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // 缓存一直都在，前端数据库
    // 同步
    //  wx.setStorageSync('key', 3)
    // const flag = wx.getStorageSync('key')
    // console.log(flag);
    // 异步
    wx.setStorageSync('key', 3)
    // const flag = await wx.getStorage({
    //   key:'flag',
    //   // success(res){
    //   //   console.log(res.data);
    //   // }
    // })

    // flag.then(res => {
    //   console.log(res);
    // })
    // console.log(flag);

    this.setData({
      
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

  }
})