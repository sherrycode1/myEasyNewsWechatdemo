// pages/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap:function(params){
      // 关闭当前，无法返回，原来的页面会被销毁
      wx.redirectTo({
        url: '/pages/posts/posts',
      })
      // 子页面，可以返回，最多10个，页面栈，会保留当前页面
      // wx.navigateTo({
      //   url: 'url',
      // })
    },
  }
})
